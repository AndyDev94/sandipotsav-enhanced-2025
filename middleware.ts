import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Security headers
  const responseHeaders = {
    "X-DNS-Prefetch-Control": "on",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  }

  // Handle root path redirect
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone()
    url.pathname = "/sandipotsav"
    return NextResponse.redirect(url)
  }

  // Continue with the response
  const response = NextResponse.next()

  // Apply security headers
  Object.entries(responseHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

// Update the matcher to include the root path explicitly
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

