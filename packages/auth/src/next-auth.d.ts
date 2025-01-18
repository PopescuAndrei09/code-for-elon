import type { DefaultUser } from "next-auth"
import type { DefaultJWT } from "next-auth/jwt"

import type { Notification, User as PrismaUser, Role } from "@ssp/db"

declare module "next-auth" {
  interface Session {
    user: User
    prismaUser: Omit<PrismaUser, "hashedPassword">
    notifications: Notification[]
  }

  interface User extends DefaultUser {
    id: string
    email: string
    role: Role
    firstName?: string | null
    lastName?: string | null
    email_verified?: boolean | null
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    role: Role
    email: string
  }
}
