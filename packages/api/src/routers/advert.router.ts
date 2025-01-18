import * as z from "zod"

import { AdvertSchemaWithSpacesForCreate, AdvertSchemaWithSpacesForUpdate } from "@ssp/utils"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

export type Advert = {
  advertSpaces: {
    id: string
    createdAt: Date
    updatedAt: Date
    secondary: boolean
    page: string[]
  } | null
} & {
  id: string
  createdAt: Date
  updatedAt: Date
  image: string | null
  href: string
  title: string | null
  description: string | null
  promoCode: string | null
  isEnabled: boolean
  rate: string | null
  collapsed: boolean
  from: Date | null
  to: Date | null
  advertSpacesId: string | null
}

const advertRouter = createRouter({
  getAll: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.advert.findMany({
      where: {
        isEnabled: true
      },
      orderBy: {
        createdAt: "desc"
      }
    })
  }),

  getAllPrimary: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.advert.findMany({
      where: {
        isEnabled: true,
        advertSpaces: {
          secondary: false
        }
      },
      include: {
        advertSpaces: true
      }
    })
  }),

  getAllSecondary: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.advert.findMany({
      where: {
        isEnabled: true,
        advertSpaces: {
          secondary: true
        }
      },
      include: {
        advertSpaces: true
      }
    })
  }),

  getById: publicProcedure.input(z.string()).query(async (opts) => {
    return await opts.ctx.db.advert.findUnique({
      where: {
        id: opts.input
      },
      include: {
        advertSpaces: true
      }
    })
  }),
  create: protectedProcedure.input(AdvertSchemaWithSpacesForCreate).mutation(async (opts) => {
    return await opts.ctx.db.advert.create({
      data: {
        ...opts.input,
        advertSpaces: {
          create: opts.input.advertSpaces
        }
      }
    })
  }),
  update: protectedProcedure.input(AdvertSchemaWithSpacesForUpdate).mutation(async (opts) => {
    return await opts.ctx.db.advert.update({
      where: { id: opts.input.id },
      data: {
        ...opts.input,
        advertSpaces: {
          update: opts.input.advertSpaces
        }
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
      await opts.ctx.db.advert.delete({
        where: {
          id: opts.input.id
        }
      })
    })
})

export { advertRouter }
