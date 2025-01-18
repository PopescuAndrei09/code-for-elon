import { z } from "zod"

import { GameRequirementCreateInputSchema, GameRequirementEditInputSchema } from "@ssp/utils"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const gameRequirmentRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.gameRequirement.findMany({
      orderBy: {
        createdAt: "desc"
      },
      include: {
        game: true
      }
    })
  }),
  getById: publicProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
    const gameReq = await opts.ctx.db.gameRequirement.findUnique({
      where: {
        id: opts.input.id
      }
    })

    if (!gameReq) throw new Error("No game requirements")
    return gameReq
  }),
  create: protectedProcedure.input(GameRequirementCreateInputSchema).mutation(async (opts) => {
    const { game, ...restOfInput } = opts.input
    if (!game) throw new Error("Game is required")

    return await opts.ctx.db.gameRequirement.create({
      data: {
        ...restOfInput,
        game: {
          connect: {
            id: game
          }
        }
      }
    })
  }),
  update: protectedProcedure.input(GameRequirementEditInputSchema).mutation(async (opts) => {
    if (!opts.input.game) {
      throw new Error("ID is required")
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, game, ...restOfInput } = opts.input
    return await opts.ctx.db.gameRequirement.update({
      where: { id: opts.input.id },
      data: restOfInput
    })
  })
})

export { gameRequirmentRouter }
