import * as z from "zod"

import { CasinoCreateSchema, CasinoForEditSchema } from "@ssp/utils"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const casinoRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.casino.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  create: protectedProcedure.input(CasinoCreateSchema).mutation(async (opts) => {
    return await opts.ctx.db.casino.create({
      data: {
        ...opts.input
      }
    })
  }),

  getById: publicProcedure.input(z.string()).query(async (opts) => {
    return await opts.ctx.db.casino.findUnique({
      where: {
        id: opts.input
      }
    })
  }),

  update: protectedProcedure.input(CasinoForEditSchema).mutation(async (opts) => {
    return await opts.ctx.db.casino.update({
      where: { id: opts.input.id },
      data: {
        ...opts.input
      }
    })
  }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid()
      })
    )
    .mutation(async (opts) => {
      // if (opts.ctx.session.prismaUser.role === "user" || opts.ctx.session.prismaUser.role === "editor") {
      //   throw new TRPCError({ code: "UNAUTHORIZED" })
      // }
      await opts.ctx.db.casino.delete({
        where: {
          id: opts.input.id
        }
      })
    })
})

export { casinoRouter }
