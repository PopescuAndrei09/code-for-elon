import * as z from "zod"

import { NotificationFormSchema } from "@ssp/utils"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const notificationRouter = createRouter({
  getNotifications: publicProcedure.query(async (opts) => {
    return await opts.ctx.db.notification.findMany({
      where: {
        userId: opts.ctx.session?.prismaUser.id
      },
      orderBy: {
        createdAt: "desc"
      }
    })
  }),
  archiveNotification: protectedProcedure.input(z.object({ id: z.string().uuid() })).mutation(async (opts) => {
    return await opts.ctx.db.notification.update({
      where: {
        id: opts.input.id
      },
      data: {
        read: true
      }
    })
  }),
  createNotification: publicProcedure.input(NotificationFormSchema).mutation(async (opts) => {
    const prismaUsers = await opts.ctx.db.user.findMany({
      select: {
        id: true
      }
    })

    const userIds = prismaUsers.map((user) => user.id)

    return await opts.ctx.db.notification.createMany({
      data: userIds.map((userId) => ({
        type: opts.input.type,
        title: opts.input.title,
        message: opts.input.message,
        href: opts.input.href,
        userId
      }))
    })
  })
})

export { notificationRouter }
