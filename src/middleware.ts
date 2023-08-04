import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/makeswift/')) {
    return NextResponse.next()
  }

  if (!pathname.endsWith('/')) {
    const url = new URL(request.nextUrl)

    url.pathname += '/'

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
