import * as z from "zod"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const providersRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.providers.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  create: protectedProcedure.input(z.object({ type: z.string() })).mutation(async (opts) => {
    return await opts.ctx.db.providers.create({
      data: {
        ...opts.input
      }
    })
  })
})

export { providersRouter }
