"use client"

import React, { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import superjson from "superjson"

import type { AppRouter } from "@ssp/api"

import { IS_PRODUCTION } from "@/config/constants"
import { getBaseUrl } from "@/lib/utils"

export const clientApi = createTRPCReact<AppRouter>()

export default function TRPCReactProvider(props: { children: React.ReactNode; headers?: Headers }) {
  const [queryClient] = useState(() => new QueryClient())

  // create tRPC client
  const [trpcClient] = useState(() =>
    clientApi.createClient({
      transformer: superjson,
      links: [
        // loggerLink({
        //   enabled: (op) => !IS_PRODUCTION || (op.direction === "down" && op.result instanceof Error)
        // }),
        unstable_httpBatchStreamLink({
          url: getBaseUrl() + "/api/trpc",
          headers() {
            const heads = new Map(props.headers)
            heads.set("x-trpc-source", "react")
            return Object.fromEntries(heads)
          }
        })
      ]
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <clientApi.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </clientApi.Provider>
    </QueryClientProvider>
  )
}

export { type RouterInputs, type RouterOutputs } from "@ssp/api"
