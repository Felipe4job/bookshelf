import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware (request: NextRequest) {

  if(request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|assets|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    }
  ],
};