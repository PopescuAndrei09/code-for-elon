import { TRPCError } from "@trpc/server"
import * as z from "zod"

import { GameSchema, GameWithReqForCreateSchema, GameWithReqSchema } from "@ssp/utils"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const gameRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.game.findMany()
  }),
  updateGame: protectedProcedure.input(GameSchema).mutation(async (opts) => {
    if (opts.ctx.session.prismaUser.role === "user" || opts.ctx.session.prismaUser.role === "editor") {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }
    return await opts.ctx.db.game.update({
      where: { id: opts.input.id },
      data: opts.input
    })
  }),
  deleteGame: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid()
      })
    )
    .mutation(async (opts) => {
      if (opts.ctx.session.prismaUser.role === "user" || opts.ctx.session.prismaUser.role === "editor") {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      await opts.ctx.db.game.delete({
        where: {
          id: opts.input.id
        }
      })
    }),
  getAllWithReq: publicProcedure
    .input(
      z.object({
        order: z.string(),
        providers: z.array(z.string()).optional(),
        reels: z.array(z.string()).optional(),
        features: z.array(z.string()).optional(),
        themes: z.array(z.string()).optional(),
        volatility: z.array(z.string()).optional()
      })
    )
    .query(async (opts) => {
      enum SortOrder {
        asc = "asc",
        desc = "desc"
      }
      let orderBy
      if (opts.input) {
        if (opts.input.order === "ascending") {
          orderBy = { name: "asc" as SortOrder }
        } else if (opts.input.order === "descending") {
          orderBy = { name: "desc" as SortOrder }
        } else if (opts.input.order === "latest") {
          orderBy = { createdAt: "asc" as SortOrder }
        }
      }
      const whereClause = []

      if (opts.input.providers) {
        whereClause.push({ provider: { in: opts.input.providers } })
      }

      if (opts.input.reels) {
        whereClause.push({ reels: { in: opts.input.reels } })
      }

      if (opts.input.themes) {
        whereClause.push({ theme: { in: opts.input.themes } })
      }

      if (opts.input.volatility) {
        whereClause.push({ volatility: { in: opts.input.volatility } })
      }

      if (opts.input.features) {
        whereClause.push({ features: { hasSome: opts.input.features } })
      }
      const gameRequirements = await opts.ctx.db.gameRequirement.findMany({
        where: {
          OR: whereClause
        }
      })

      const gameIds = gameRequirements.map((gr) => gr.id)

      let games

      if (gameIds && gameIds.length > 0) {
        games = await opts.ctx.db.game.findMany({
          where: {
            gameRequirementId: {
              in: gameIds
            }
          },
          orderBy: orderBy,
          include: {
            gameRequirement: true
          }
        })
      } else {
        games = await opts.ctx.db.game.findMany({
          orderBy: orderBy,
          include: {
            gameRequirement: true
          }
        })
      }

      return games
    }),

  getOneWithReq: publicProcedure
    .input(
      z.object({
        id: z.string().uuid()
      })
    )
    .query(async (opts) => {
      return await opts.ctx.db.game.findFirst({
        where: {
          id: opts.input.id
        },
        include: {
          gameRequirement: true
        }
      })
    }),
  create: protectedProcedure.input(GameWithReqForCreateSchema).mutation(async (opts) => {
    // if (opts.ctx.session.prismaUser.role === "admin" || opts.ctx.session.prismaUser.role === "editor") {
    //   throw new TRPCError({ code: "UNAUTHORIZED" })
    // }

    // if (opts.input.name !== undefined || opts.input.gameRequirement.rtp !== undefined)
    //   throw new TRPCError({ code: "UNAUTHORIZED" })

    return await opts.ctx.db.game.create({
      data: {
        ...opts.input,
        gameRequirement: {
          create: opts.input.gameRequirement
        }
      }
    })
  })
})

export { gameRouter }
