# Netlify-Compatible Project Setup Guide

## Project Structure Overview

```
netlify-personal-website/
├── app/
│   ├── about/
│   │   └── page.tsx           # About page with professional background
│   ├── aiconsulting/
│   │   ├── layout.tsx         # AI consulting layout
│   │   └── page.tsx           # AI consulting services
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Individual blog post
│   │   └── page.tsx          # Blog listing
│   ├── training/
│   │   ├── layout.tsx        # Training layout
│   │   └── page.tsx          # Training services
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # Base UI components
│   ├── blog-profile.tsx      # Blog author component
│   ├── contact-form.tsx      # Contact form
│   ├── education.tsx         # Education timeline
│   ├── footer.tsx           # Site footer
│   ├── navigation.tsx       # Main navigation
│   ├── professional-experience.tsx
│   ├── projects.tsx         # Project showcase
│   └── testimonials.tsx     # Client testimonials
│   ├── 3d/
│   │   └── Scene.tsx        # 3D scene component
│   ├── stats/
│   │   └── StatisticsCard.tsx # Statistics card component
│   └── canvas/
│       └── TagCloud.tsx     # Interactive tag cloud component
├── contexts/
│   └── LanguageContext.tsx  # i18n context
├── lib/
│   └── mdx.ts              # MDX serialization utility
├── public/
│   └── images/             # Static images
├── types/
│   └── blog.ts            # Blog types
├── utils/
│   └── unsplash.ts       # Unsplash integration
├── .env.local
├── next.config.js
├── package.json
└── netlify.toml
```

## Internationalization System

### 1. Translation Files Structure
```bash
translations/
├── en.ts
└── es.ts
```

### 2. Base Translation Type
```typescript
// translations/en.ts
export const en = {
  common: {
    title: 'Guillem Pedrerol',
    description: 'AI Consultant & Developer',
    // ... other common translations
  },
  nav: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    // ... other navigation items
  },
  home: {
    hero: {
      title: 'AI Solutions for Your Business',
      subtitle: 'Transform your business with custom AI solutions',
      // ... other hero section translations
    },
    // ... other sections
  },
  // ... other translation sections
} as const;

// translations/es.ts
export const es = {
  common: {
    title: 'Guillem Pedrerol',
    description: 'Consultor y Desarrollador de IA',
    // ... other common translations
  },
  // ... mirror structure of en.ts
} as const;
```

### 3. Translation Utilities
```typescript
// utils/i18n.ts
import { en } from '../translations/en'
import { es } from '../translations/es'

export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Language = keyof typeof languages
export type Translation = typeof en

export const translations = {
  en,
  es,
} as const

export function getTranslation(locale: Language): Translation {
  return translations[locale]
}

export const defaultLanguage: Language = 'es'
```

## Navigation System

### 1. Navigation Utilities
```typescript
// utils/navigation.ts
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleNavigation = (href: string) => {
  if (href.startsWith('#')) {
    // If we're already on the home page
    if (window.location.pathname === '/') {
      scrollToSection(href.substring(1));
    } else {
      // If we're on another page, navigate to home and then scroll
      window.location.href = `/${href}`;
    }
  }
};
```

### 2. Navigation Menu Structure
```typescript
// app/layout.tsx
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Type System

### 1. Blog Types
```typescript
// types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  tags?: string[];
}
```

### 2. Component Props Types
```typescript
// types/components.ts
import { LucideIcon } from 'lucide-react'

export interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface TestimonialProps {
  author: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}
```

## Global Styles

### 1. Tailwind Configuration
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

### 2. Global CSS
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    /* ... other CSS variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark theme variables */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Additional Configuration Files

### 1. ESLint Configuration
```javascript
// .eslintrc.json
{
  "extends": "next/core-web-vitals"
}
```

### 2. TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Page-by-Page Implementation

### 1. Home Page (`app/page.tsx`)
```typescript
// app/page.tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <Services />
      <LatestBlogPosts />
      <ContactSection />
    </main>
  );
}
```

### 2. AI Consulting (`app/aiconsulting/page.tsx`)
```typescript
// Types for AI Consulting
interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface TechnologyCardProps {
  name: string;
  description: string;
}

export default function AIConsulting() {
  return (
    <main>
      <ServicesSection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
    </main>
  );
}
```

### 3. Blog System (`app/blog/`)
```typescript
// types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  tags?: string[];
}

// app/blog/page.tsx
export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  return (
    <main>
      <BlogHeader />
      <SearchSection />
      <BlogGrid posts={filteredPosts} />
    </main>
  );
}

// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article>
      <BlogHeader />
      <BlogContent />
      <BlogFooter />
    </article>
  );
}
```

### 4. Training Services (`app/training/page.tsx`)
```typescript
export default function Training() {
  return (
    <main>
      <TrainingHeader />
      <CoursesList />
      <MethodologySection />
      <TestimonialsSection />
    </main>
  );
}
```

## Component Implementation

### 1. Navigation
```typescript
// components/navigation.tsx
export function Navigation() {
  const { t } = useLanguage();
  
  return (
    <nav>
      <Link href="/">{t('nav.home')}</Link>
      <Link href="/aiconsulting">{t('nav.consulting')}</Link>
      <Link href="/training">{t('nav.training')}</Link>
      <Link href="/blog">{t('nav.blog')}</Link>
      <Link href="/about">{t('nav.about')}</Link>
    </nav>
  );
}
```

### 2. Contact Form
```typescript
// components/contact-form.tsx
export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: 'consulting',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Failed to send');
      
      // Success handling
    } catch (error) {
      // Error handling
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

## API Implementation

### 1. Contact Form API
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'your-website@resend.dev',
      to: process.env.CONTACT_FORM_TO_EMAIL!,
      subject: `New inquiry from ${data.name}`,
      text: JSON.stringify(data, null, 2)
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

## Internationalization

### 1. Language Context
```typescript
// contexts/LanguageContext.tsx
export const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: (key: string) => key
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  
  const t = useCallback((key: string) => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

## Netlify Configuration

### 1. Build Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"
  functions = "netlify/functions"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  node_bundler = "esbuild"
  external_node_modules = ["sharp"]

[build.environment]
  NEXT_USE_NETLIFY_EDGE = "true"
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
```

### 2. Environment Variables
```env
# Required environment variables in Netlify UI
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NEXT_PUBLIC_DEFAULT_LOCALE=es
RESEND_API_KEY=your_resend_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_key
CONTACT_FORM_TO_EMAIL=your@email.com
NEXT_USE_NETLIFY_EDGE=true
NEXT_PUBLIC_ENABLE_3D=true
NEXT_PUBLIC_ANIMATION_DURATION=2000
NEXT_PUBLIC_POSTS_PER_PAGE=9
NEXT_PUBLIC_FEATURED_POSTS=3
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
```

## Deployment Steps

1. **Repository Setup**
```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Netlify Setup**
```bash
# Install Netlify CLI
npm install netlify-cli -g

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

## Testing Checklist

### 1. Functionality Testing
- [ ] Navigation works between all pages
- [ ] Blog posts load correctly
- [ ] Contact form submits successfully
- [ ] Language switching works
- [ ] Images load properly
- [ ] AI consulting services display correctly
- [ ] Training courses are accessible
- [ ] About page loads with all sections

### 2. Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify image optimization
- [ ] Test page load times

### 3. Cross-browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

### 4. Mobile Testing
- [ ] Test responsive design
- [ ] Verify touch interactions
- [ ] Check mobile navigation
- [ ] Validate form usability

## Monitoring Setup

### 1. Error Tracking
```javascript
// Add to app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Error tracking script */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

### 2. Analytics
```javascript
// Add to app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
  strategy="afterInteractive"
/>
```

## Maintenance

### 1. Regular Updates
```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Run tests
npm test

# Deploy updates
netlify deploy --prod
```

### 2. Content Updates
- Blog posts: Add to `app/blog/posts/`
- Services: Update in `app/aiconsulting/page.tsx`
- Training: Modify `app/training/page.tsx`
- About: Update `app/about/page.tsx`

## Troubleshooting Guide

### Common Issues

1. **Build Failures**
   - Check Node.js version matches Netlify's
   - Verify all dependencies are installed
   - Review build logs for errors

2. **API Issues**
   - Confirm environment variables are set
   - Check API route implementation
   - Verify edge runtime configuration

3. **Image Problems**
   - Confirm next/image configuration
   - Check Unsplash API key
   - Verify image optimization settings

4. **Form Submission Errors**
   - Check Resend API configuration
   - Verify form validation
   - Test email delivery

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Next.js Plugin](https://github.com/netlify/next-runtime)
- [Resend Documentation](https://resend.com/docs)
- [Unsplash API Documentation](https://unsplash.com/documentation)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Additional Components

### 1. 3D Elements
```typescript
// components/3d/Scene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function Scene3D() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      {/* Your 3D elements */}
    </Canvas>
  );
}
```

### 2. Statistics Component
```typescript
// components/stats/StatisticsCard.tsx
'use client';

import CountUp from 'react-countup';
import { Card } from '@/components/ui/card';

interface StatisticsCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export function StatisticsCard({
  value,
  label,
  prefix,
  suffix
}: StatisticsCardProps) {
  return (
    <Card className="p-6">
      <div className="text-2xl font-bold">
        <CountUp
          end={value}
          prefix={prefix}
          suffix={suffix}
          duration={2}
        />
      </div>
      <div className="text-muted-foreground">{label}</div>
    </Card>
  );
}
```

### 3. Blog MDX Implementation
```typescript
// lib/mdx.ts
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

export async function getMdxSource(content: string) {
  const { data, content: mdxContent } = matter(content);
  const mdxSource = await serialize(mdxContent, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  });
  
  return {
    frontMatter: data,
    mdxSource,
  };
}
```

### 4. Interactive Canvas
```typescript
// components/canvas/TagCloud.tsx
'use client';

import { useEffect, useRef } from 'react';
import TagCanvas from 'tag-canvas';

export function TagCloud({ tags }: { tags: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      TagCanvas.Start('tagCanvas', 'tagList', {
        textColour: '#333',
        outlineColour: '#fff',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
      });
    }
  }, []);

  return (
    <>
      <canvas id="tagCanvas" ref={canvasRef} width="500" height="500" />
      <div id="tagList" style={{ display: 'none' }}>
        <ul>
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

## Additional Environment Variables
```env
# 3D and Animation Settings
NEXT_PUBLIC_ENABLE_3D=true
NEXT_PUBLIC_ANIMATION_DURATION=2000

# Blog Configuration
NEXT_PUBLIC_POSTS_PER_PAGE=9
NEXT_PUBLIC_FEATURED_POSTS=3

# Analytics and Monitoring
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
```

## Performance Optimizations

### 1. 3D Content Loading
```typescript
// components/3d/LazyScene.tsx
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>
});
```

### 2. Image Loading Strategy
```javascript
// next.config.js
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
}
```

## Project Dependencies

```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@react-three/drei": "^9.92.7",
    "@react-three/fiber": "^8.15.12",
    "@react-spring/three": "^9.7.3",
    "next-international": "^1.3.1",
    "next-mdx-remote": "^5.0.0",
    "react-countup": "^6.5.0",
    "recharts": "^2.12.7",
    "tag-canvas": "^0.0.5",
    "vaul": "^0.9.9",
    "resend": "^4.0.1",
    "zod": "^3.24.1",
    "framer-motion": "^12.0.6",
    "lucide-react": "^0.446.0",
    "next-themes": "^0.3.0"
  }
}
```

## Next.js Configuration

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config
  
  // Optimize build performance
  swcMinify: true,
  
  // Configure build output
  output: 'standalone',
  
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: true,
    // Optimize packages
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react',
      '@heroicons/react',
    ],
  },
  
  // Cache configuration
  generateBuildId: async () => {
    // You can specify a custom build ID here
    return 'my-build-id'
  },
  
  // Configure headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

## Netlify Configuration

### 1. netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NEXT_USE_NETLIFY_EDGE = "true"
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self' 'unsafe-inline' 'unsafe-eval' *.unsplash.com; img-src 'self' data: blob: *.unsplash.com;"

# Handle client-side routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Environment Variables
```env
# Netlify Environment Variables
NEXT_USE_NETLIFY_EDGE=true
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NODE_VERSION=20

# Build Settings
NEXT_TELEMETRY_DISABLED=1
```

## Middleware Configuration

### 1. Edge Runtime
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export default function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)
  
  // Add security headers
  headers.set('X-DNS-Prefetch-Control', 'on')
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  headers.set('X-Frame-Options', 'DENY')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  return NextResponse.next({
    request: {
      headers,
    },
  })
}
```

## Build and Cache Optimization

### 1. Build Settings
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config
  
  // Optimize build performance
  swcMinify: true,
  
  // Configure build output
  output: 'standalone',
  
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: true,
    // Optimize packages
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react',
      '@heroicons/react',
    ],
  },
  
  // Cache configuration
  generateBuildId: async () => {
    // You can specify a custom build ID here
    return 'my-build-id'
  },
  
  // Configure headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### 2. Cache Control
```typescript
// app/api/[...route]/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
    },
  })
}
```

## Performance Monitoring

### 1. Core Web Vitals
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### 2. Error Monitoring
```typescript
// app/error.tsx
'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-primary px-4 py-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
