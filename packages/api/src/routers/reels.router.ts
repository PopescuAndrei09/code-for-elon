import * as z from "zod"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const reelsRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.reels.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  create: protectedProcedure.input(z.object({ type: z.string() })).mutation(async (opts) => {
    return await opts.ctx.db.reels.create({
      data: {
        ...opts.input
      }
    })
  })
})

export { reelsRouter }
