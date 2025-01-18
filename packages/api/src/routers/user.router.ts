import { render } from "@react-email/render"
import { TRPCError } from "@trpc/server"
import { addHours } from "date-fns"
import * as z from "zod"

import { hashPassword } from "@ssp/auth/src/crypto"
import { ResetPasswordEmail, sendEmail } from "@ssp/emails"
import {
  accountFormSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  signupSchema,
  updateRoleSchema,
  userSchema
} from "@ssp/utils"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

const userRouter = createRouter({
  me: protectedProcedure.query(async (opts) => {
    return opts.ctx.session.prismaUser
  }),
  updateMe: protectedProcedure.input(accountFormSchema).mutation(async (opts) => {
    if (opts.ctx.session.prismaUser.id !== opts.input.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }
    return await opts.ctx.db.user.update({
      where: { id: opts.input.id },
      data: opts.input
    })
  }),
  deleteMe: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid()
      })
    )
    .mutation(async (opts) => {
      if (opts.ctx.session.prismaUser.id !== opts.input.id) {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      await opts.ctx.db.user.delete({
        where: {
          id: opts.input.id
        }
      })
    }),
  update: protectedProcedure.input(userSchema).mutation(async (opts) => {
    return await opts.ctx.db.user.update({
      where: { id: opts.input.id },
      data: opts.input
    })
  }),
  updateRole: protectedProcedure.input(updateRoleSchema).mutation(async (opts) => {
    if (opts.ctx.session.prismaUser.role === "user" || opts.ctx.session.prismaUser.role === "editor") {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }

    if (opts.input.role === "admin" && opts.ctx.session.prismaUser.role !== "admin") {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }

    return await opts.ctx.db.user.update({
      where: { id: opts.input.id },
      data: opts.input
    })
  }),
  createUser: publicProcedure.input(signupSchema).mutation(async (opts) => {
    const userExists = await opts.ctx.db.user.findFirst({
      where: {
        email: opts.input.email
      }
    })
    if (userExists) {
      throw new Error("User already exists.")
    }
    await opts.ctx.db.user.create({
      data: {
        firstName: opts.input.firstName.charAt(0).toUpperCase() + opts.input.firstName.slice(1),
        lastName: opts.input.lastName.charAt(0).toUpperCase() + opts.input.lastName.slice(1),
        name:
          opts.input.firstName.charAt(0).toUpperCase() +
          opts.input.firstName.slice(1) +
          " " +
          opts.input.lastName.charAt(0).toUpperCase() +
          opts.input.lastName.slice(1),
        email: opts.input.email,
        hashedPassword: await hashPassword(opts.input.password),
        phone: opts.input.phone
      }
    })
  }),
  sendForgotPasswordEmail: publicProcedure.input(forgotPasswordSchema).mutation(async (opts) => {
    const userExists = await opts.ctx.db.user.findFirst({
      where: {
        email: opts.input.email
      }
    })
    if (!userExists) {
      throw new Error("User does not exist.")
    }

    const token = await opts.ctx.db.resetPasswordToken.create({
      data: {
        userId: userExists.id,
        expiresAt: addHours(Date.now(), 2)
      }
    })

    const parsedUrl = new URL(opts.input.url)

    const resetLink = `${parsedUrl.origin}/reset-password?token=${token.id}`

    const emailHtml = render(
      ResetPasswordEmail({
        url: opts.input.url,
        userName: userExists.name || userExists.email.split("@")[0],
        resetPasswordLink: resetLink
      })
    )

    return await sendEmail({
      from: "ssp.io <contact@ssp.io>",
      to: userExists.email,
      subject: `Your ${opts.input.url.slice(8)} reset password link`,
      html: emailHtml
    })
  }),
  updatePassword: publicProcedure.input(resetPasswordSchema).mutation(async (opts) => {
    const token = await opts.ctx.db.resetPasswordToken.findFirst({
      where: {
        id: opts.input.token
      }
    })
    if (!token) {
      throw new Error("Invalid token.")
    }
    const user = await opts.ctx.db.user.findFirst({
      where: {
        id: token.userId
      }
    })
    if (!user) {
      throw new Error("Invalid token user.")
    }

    const newHashedPassword = await hashPassword(opts.input.password)
    await opts.ctx.db.user.update({
      where: {
        id: user.id
      },
      data: {
        hashedPassword: newHashedPassword,
        emailVerified: new Date(Date.now()),
        email_verified: true
      }
    })
    await opts.ctx.db.resetPasswordToken.update({
      where: {
        id: token.id
      },
      data: {
        used: true
      }
    })
  }),
  deleteUser: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid()
      })
    )
    .mutation(async (opts) => {
      if (opts.ctx.session.prismaUser.role === "user" || opts.ctx.session.prismaUser.role === "editor") {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      await opts.ctx.db.user.delete({
        where: {
          id: opts.input.id
        }
      })
    }),
  getAll: protectedProcedure.query(async (opts) => {
    return await opts.ctx.db.user.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  })
})

export { userRouter }
