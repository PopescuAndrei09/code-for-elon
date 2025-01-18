import { Features } from "@prisma/client"
import * as z from "zod"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const volatilityRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.volatility.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  create: protectedProcedure.input(z.object({ type: z.string() })).mutation(async (opts) => {
    return await opts.ctx.db.volatility.create({
      data: {
        ...opts.input
      }
    })
  })
})

export { volatilityRouter }
