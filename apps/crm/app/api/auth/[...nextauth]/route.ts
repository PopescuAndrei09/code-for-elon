import type { NextRequest } from "next/server"
import NextAuth from "next-auth"

import { authOptions } from "@ssp/auth"

interface RouteHandlerContext {
  params: { nextauth: string[] }
}

const handler = async (req: NextRequest, res: RouteHandlerContext) => {
  return await NextAuth(req, res, authOptions(req))
}
export { handler as GET, handler as POST }
