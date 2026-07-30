// middleware.ts (root directory میں)
import { NextRequest, NextResponse } from 'next/server';

// ✅ Default Export (نام middleware کی ضرورت نہیں)
export default function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has('session');
  const isDashboardPath = request.nextUrl.pathname.startsWith('/dashboard');
  
  if (isDashboardPath && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};