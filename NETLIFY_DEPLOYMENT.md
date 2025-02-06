# Netlify Deployment Guide - Critical Issues and Solutions

## Critical Issues Identified

### 1. Static Export Configuration Conflict

**Issue:**
```javascript
// next.config.js
{
  output: 'export',
  images: { unoptimized: true }
}
```
Your current configuration is set for static export, which conflicts with several features in your project:
- Server Components
- API Routes (contact form)
- Dynamic routes (blog system)
- Middleware (used in your project)

**Solution:**
1. Remove the static export configuration:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
```

### 2. Middleware Compatibility

**Issue:**
Your current middleware configuration will not work with static exports.

**Solution:**
1. Update your `middleware.ts` to be compatible with Netlify's edge functions:
```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Your middleware logic here
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Add your path patterns here
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

### 3. API Routes Implementation

**Issue:**
Your contact form API route needs adaptation for Netlify's serverless functions.

**Solution:**
1. Update your API route to use Netlify's environment:
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (process.env.NETLIFY) {
    // Netlify-specific error handling
    try {
      const data = await req.json()
      // Your email sending logic
      return NextResponse.json({ success: true })
    } catch (error) {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )
    }
  }
}
```

### 4. Image Optimization

**Issue:**
Your current configuration disables image optimization, which affects performance.

**Solution:**
1. Update `next.config.js` with proper image configuration:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
}
```

### 5. Environment Variables

**Issue:**
Your project uses several environment variables that need proper configuration in Netlify.

**Solution:**
1. Required variables in Netlify:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NEXT_PUBLIC_DEFAULT_LOCALE=es

# API Keys
RESEND_API_KEY=your_resend_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_key

# Email Configuration
CONTACT_FORM_TO_EMAIL=your@email.com
```

2. Add these in Netlify's UI: Site settings → Environment variables

## Deployment Steps

1. **Update Configuration Files**
```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Install Required Dependencies**
```bash
npm install @netlify/plugin-nextjs --save-dev
```

3. **Update Package Scripts**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "netlify-build": "next build"
  }
}
```

4. **Pre-deployment Checklist**
- [ ] Remove static export configuration
- [ ] Update image optimization settings
- [ ] Configure environment variables in Netlify
- [ ] Update API routes for Netlify's environment
- [ ] Test build locally with `npm run build`

## Testing Deployment

1. **Local Testing**
```bash
# Install Netlify CLI
npm install netlify-cli -g

# Test locally
netlify dev
```

2. **Build Testing**
```bash
# Test build
netlify build

# Deploy draft
netlify deploy --build
```

## Monitoring and Troubleshooting

### Common Issues to Watch:

1. **Build Failures**
- Check Netlify build logs
- Verify all dependencies are installed
- Confirm environment variables are set

2. **Runtime Errors**
- Monitor Netlify function logs
- Check browser console for client-side errors
- Verify API routes are functioning

3. **Performance Issues**
- Use Netlify Analytics to monitor performance
- Check image optimization is working
- Verify caching headers

## Recovery Steps

If deployment fails:

1. Revert to previous working commit
2. Check build logs
3. Test locally with `netlify dev`
4. Verify environment variables
5. Deploy again with `netlify deploy --build`

## Support Resources

- [Netlify Next.js Plugin Documentation](https://github.com/netlify/next-runtime)
- [Next.js on Netlify Documentation](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
