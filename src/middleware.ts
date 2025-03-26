import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if the request path matches our media API route pattern
  if (request.nextUrl.pathname.startsWith("/api/media/")) {
    // Add Cache-Control header
    response.headers.set(
      "Cache-Control",
      "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800"
    );
  }

  return response;
}

// Configure the middleware to only run on the media API routes
export const config = {
  matcher: "/api/media/:path*"
};
