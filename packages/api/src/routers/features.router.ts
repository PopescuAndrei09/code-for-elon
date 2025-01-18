import { Features } from "@prisma/client"
import * as z from "zod"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const featuresRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.features.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  create: protectedProcedure.input(z.object({ type: z.string() })).mutation(async (opts) => {
    console.log(opts.input, "type")
    return await opts.ctx.db.features.create({
      data: {
        ...opts.input
      }
    })
  })
})

export { featuresRouter }
