import type { NextRequest } from "next/server"
import { getServerSession } from "next-auth"

import { authOptions } from "./next-auth-options"

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (req: NextRequest) => {
  return getServerSession(authOptions(req))
}
