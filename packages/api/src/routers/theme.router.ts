import * as z from "zod"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const themeRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.theme.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  create: protectedProcedure.input(z.object({ type: z.string() })).mutation(async (opts) => {
    return await opts.ctx.db.theme.create({
      data: {
        ...opts.input
      }
    })
  })
})

export { themeRouter }
