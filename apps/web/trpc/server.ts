"use server"

import { headers } from "next/headers"
import { loggerLink } from "@trpc/client"
import { experimental_createTRPCNextAppDirServer } from "@trpc/next/app-dir/server"
import superjson from "superjson"

import type { AppRouter } from "@ssp/api"

import { IS_PRODUCTION } from "@/config/constants"
import { endingLink } from "@/trpc/get-ending-link"

export const serverApi = experimental_createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        // loggerLink({
        //   enabled: (opts) => !IS_PRODUCTION || (opts.direction === "down" && opts.result instanceof Error)
        // }),
        endingLink({
          headers: Object.fromEntries(headers().entries())
        })
      ]
    }
  }
})

export { type RouterInputs, type RouterOutputs } from "@ssp/api"
