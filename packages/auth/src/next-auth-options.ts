import { randomUUID } from "crypto"
import type { NextRequest } from "next/server"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { render } from "@react-email/render"
import type { NextAuthOptions, Session } from "next-auth"
import type { Adapter } from "next-auth/adapters"
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email"
import type { GoogleProfile } from "next-auth/providers/google"
import GoogleProvider from "next-auth/providers/google"

import type { Role } from "@ssp/db"
import { db } from "@ssp/db"
import { sendEmail, VerificationEmail } from "@ssp/emails"
import { sanitizeEmail } from "@ssp/utils"

import { verifyPassword } from "./crypto"

export const useSecureCookies = !!process.env.VERCEL_URL

export const authOptions = (req: NextRequest): NextAuthOptions => {
  const hostname = req.headers.get("host")

  return {
    callbacks: {
      session: async ({ session, token }) => {
        const prismaUser = await db.user.findUnique({
          where: {
            id: token.id?.toString()
          },
          include: {
            notifications: { orderBy: { createdAt: "desc" } }
          }
        })

        if (prismaUser === null) {
          throw new Error("User not found.")
        }

        await db.user.update({
          where: {
            id: token.id?.toString()
          },
          data: {
            lastSignIn: new Date()
          }
        })

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { hashedPassword, ...userNoPassword } = prismaUser

        // prettier-ignore
        const updatedSession: Session = {
        ...session,
        notifications: prismaUser.notifications,
        prismaUser: userNoPassword,

      }

        return updatedSession
      },
      jwt: async ({ user, token }) => {
        const userFromPrisma = await db.user.findFirst({
          where: { email: token.email }
        })

        if (!userFromPrisma) {
          if (user !== null && token.id !== undefined) {
            token.id = user.id
            token.role = user.role
            token.email = user.email
          }
          return token
        }

        if (userFromPrisma.emailVerified !== null && userFromPrisma.email_verified === false) {
          await db.user.update({
            where: {
              id: userFromPrisma.id
            },
            data: {
              email_verified: true
            }
          })
        }

        if (userFromPrisma.emailVerified === null && userFromPrisma.email_verified === true) {
          await db.user.update({
            where: {
              id: userFromPrisma.id
            },
            data: {
              emailVerified: new Date(Date.now())
            }
          })
        }

        return {
          id: userFromPrisma.id,
          name: userFromPrisma.name,
          email: userFromPrisma.email,
          picture: userFromPrisma.image,
          role: userFromPrisma.role
        }
      }
    },
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
        async sendVerificationRequest({ identifier, url }) {
          const userExists = await db.user.findFirst({
            where: {
              email: identifier
            }
          })

          if (!userExists) {
            throw new Error("User does not exist.")
          }

          const parsedUrl = new URL(url)

          const emailHtml = render(
            VerificationEmail({
              url: parsedUrl.origin,
              userName: userExists.name || userExists.email.split("@")[0],
              verificationLink: url
            })
          )

          await sendEmail({
            from: "ssp.io <contact@ssp.io>",
            to: userExists.email,
            subject: `Your ${parsedUrl.origin.slice(8)} verification link`,
            html: emailHtml
          })
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        httpOptions: {
          timeout: 40000
        },
        allowDangerousEmailAccountLinking: true,
        async profile(profile: GoogleProfile) {
          const response: {
            id: string
            firstName: string
            lastName: string
            name: string
            email: string
            email_verified: boolean
            image: string
            role: Role
          } = {
            id: profile.sub,
            firstName: profile.given_name,
            lastName: profile.family_name,
            name: profile.name,
            email: profile.email,
            email_verified: profile.email_verified,
            image: profile.picture,
            role: "user"
          }

          return response
        }
      }),
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "you@email.com" },
          password: { label: "Password", type: "password", placeholder: "••••••••••" }
        },
        authorize: async (credentials) => {
          if (!credentials) {
            throw new Error("No credentials were provided")
          }
          const { email, password } = credentials

          const user = await db.user.findFirst({
            where: {
              email: sanitizeEmail(email)
            }
          })

          if (!user) {
            throw new Error("No user found")
          }

          if (!user.hashedPassword) throw new Error("No password found.")

          if (!(await verifyPassword(user.hashedPassword, password))) {
            throw new Error("Invalid email or password.")
          }
          if (!user.emailVerified) {
            throw new Error("Email not verified.")
          }
          return user
        }
      })
    ],
    session: {
      strategy: "jwt"
    },
    pages: {
      signIn: "/sign-in"
    },
    secret: process.env.NEXTAUTH_SECRET ?? randomUUID(),
    cookies: {
      sessionToken: {
        name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
        options: {
          httpOnly: true,
          sameSite: "lax",
          path: "/",
          domain: hostname && !hostname.includes("localhost") ? hostname : undefined,
          secure: useSecureCookies
        }
      }
    }
  }
}
