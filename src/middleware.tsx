import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware (request: NextRequest) {
  const url = request.nextUrl;

  if(url.pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(url.pathname.startsWith('/logout')) {
    const error = url.searchParams.get('error');
    
    const response = NextResponse.redirect(new URL('/login?error=' + error, request.url));
    response.cookies.delete('next-auth.session-token');
    response.cookies.delete('next-auth.csrf-token');
    
    return response; 
  }

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if(token && token.error) {
    const response = NextResponse.redirect(new URL('/login?error=' + token.error, request.url));
    
    response.cookies.delete('next-auth.session-token');
    response.cookies.delete('next-auth.csrf-token');
    return response;
  }
  
  return NextResponse.next();
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