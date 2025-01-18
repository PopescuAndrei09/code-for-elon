import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })

    const isAuthPage =
      req.nextUrl.pathname.startsWith("/sign-in") ||
      req.nextUrl.pathname.startsWith("/sign-up") ||
      req.nextUrl.pathname.startsWith("/forgot-password")

    if (req.nextUrl.pathname === "/reset-password" || req.nextUrl.pathname === "/unauthorized") {
      return null
    }

    if (isAuthPage) {
      if (!!token) {
        return NextResponse.redirect(new URL("/", req.url))
      }
      return null
    }

    if (!token) {
      let from = req.nextUrl.pathname
      if (req.nextUrl.search) from += req.nextUrl.search
      return NextResponse.redirect(new URL(`/sign-in?from=${encodeURIComponent(from)}`, req.url))
    }

    if (token.role === "user") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        return true
      }
    }
  }
)

export const config = {
  matcher: ["/users", "/games", "/adverts", "/casino", "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"]
}
