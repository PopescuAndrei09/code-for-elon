import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // DIRECT_URL: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    EMAIL_SERVER: z.string().min(1),
    EMAIL_FROM: z.string().min(1),
    NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_IS_PRODUCTION === "true" ? z.string().min(1) : z.string().min(1).optional()
  },
  client: {
    NEXT_PUBLIC_IS_PRODUCTION: z.string().min(1),
    // NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_WEB: z.string().min(1),
    AUTH_URL: z.preprocess((str) => process.env.VERCEL_URL ?? str, process.env.VERCEL ? z.string() : z.string().url())
    // NEXT_PUBLIC_AUTH_URL_WEB: z.preprocess(
    //   (str) => process.env.VERCEL_URL ?? str,
    //   process.env.VERCEL ? z.string() : z.string().url()
    // ),
  },
  runtimeEnv: {
    VERCEL_URL: process.env.VERCEL_URL,
    PORT: process.env.PORT,
    // DIRECT_URL: process.env.DIRECT_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    EMAIL_SERVER: process.env.EMAIL_SERVER,
    EMAIL_FROM: process.env.EMAIL_FROM,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_IS_PRODUCTION: process.env.NEXT_PUBLIC_IS_PRODUCTION,
    // NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_WEB: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_WEB,
    AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL_CRM
    // NEXT_PUBLIC_AUTH_URL_WEB: process.env.NEXT_PUBLIC_AUTH_URL_WEB,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION
})
