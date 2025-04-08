import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if the request path matches our media API route pattern
  if (request.nextUrl.pathname.startsWith("/api/media/file/")) {
    // Add Cache-Control header
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=604800"
    );
  }

  return response;
}

// Configure the middleware to only run on the media API routes
export const config = {
  matcher: "/api/media/file/:path*"
};
