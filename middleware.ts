import { createI18nMiddleware } from 'next-international/middleware'
import { NextResponse, NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en'
})

export function middleware(request: NextRequest) {
  // Handle i18n
  const i18nResponse = I18nMiddleware(request)
  
  // Add security headers
  const headers = new Headers(i18nResponse.headers)
  headers.set('X-DNS-Prefetch-Control', 'on')
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  headers.set('X-Frame-Options', 'DENY')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  // Create a new response with both i18n and security headers
  const response = NextResponse.next({
    request: {
      headers: headers,
    },
  })

  // Copy all headers from i18n response
  i18nResponse.headers.forEach((value, key) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - static (static files)
     * - .*\\..*$ (files with extensions)
     */
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'
  ]
}
