import { NextRequest, NextResponse } from 'next/server';

// Simple session validation for middleware
function validateSessionToken(token: string): boolean {
  // Basic format validation - in production use proper session storage
  return /^[a-f0-9]{64}$/.test(token);
}

export function middleware(request: NextRequest) {
  // Only protect insights pages and API routes
  if (request.nextUrl.pathname.startsWith('/insights') || 
      request.nextUrl.pathname.startsWith('/api/insights/dashboard')) {
    
    const sessionToken = request.cookies.get('insights_session')?.value;

    // Allow auth endpoint to pass through
    if (request.nextUrl.pathname === '/api/insights/auth') {
      return NextResponse.next();
    }

    // Check if user is authenticated
    if (!sessionToken || !validateSessionToken(sessionToken)) {
      // For API routes, return 401
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
      
      // For pages, redirect to login (handled by PasswordProtected component)
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/insights/:path*',
    '/api/insights/:path*'
  ]
};
