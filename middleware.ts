import { type NextRequest, NextResponse } from "next/server"

import { updateSession } from "@/lib/db/middleware"

// Hidden pages - set to empty array [] to re-enable access
// These pages are also excluded from sitemap.ts and blocked in robots.ts
const HIDDEN_PAGES = ["/pricing", "/about"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block access to hidden pages - redirect to home
  if (HIDDEN_PAGES.some((page) => pathname === page || pathname.startsWith(`${page}/`))) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
