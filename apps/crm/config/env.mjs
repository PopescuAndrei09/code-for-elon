import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  shared: {
    VERCEL_URL: z
      .string()
      .optional()
      .transform((v) => (v ? `https://${v}` : undefined)),
    PORT: z.coerce.number().default(3000)
  },
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app isn't
   * built with invalid env vars.
   */
  server: {
    // DIRECT_URL: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    EMAIL_SERVER: z.string().min(1),
    EMAIL_FROM: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1)
  },
  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_IS_PRODUCTION: z.string().min(1),
    // NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_WEB: z.string().min(1),
    AUTH_URL: z.string().min(1)
    // NEXT_PUBLIC_AUTH_URL_WEB: z.string().min(1),
  },
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
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
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === "lint"
})
