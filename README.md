# Guillem Pedrerol Website

A modern, interactive personal website built with Next.js 15, featuring a blog system, AI consulting services, training resources, and internationalization support in English and Spanish.

## Overview

This website serves as a comprehensive professional platform showcasing:

### Core Sections

#### AI Consulting Services
- **Service Offerings**:
  - AI Integration Solutions
  - Machine Learning Development
  - Data Analytics
  - Custom AI Tools
- **Process Steps**:
  - Initial Assessment
  - Strategy Development
  - Implementation
  - Monitoring & Optimization
- **Technologies**:
  - Machine Learning
  - Natural Language Processing
  - Computer Vision
  - Deep Learning

#### Technical Training Programs
- **Training Modules**:
  - AI Fundamentals
  - Machine Learning Basics
  - Advanced AI Applications
  - Custom Corporate Training
- **Methodology**:
  - Interactive Learning
  - Hands-on Projects
  - Real-world Applications
  - Continuous Assessment
- **Benefits**:
  - Skill Enhancement
  - Career Growth
  - Industry Knowledge
  - Practical Experience

#### Blog Platform
- **Content Categories**:
  - Technical Tutorials
  - AI Insights
  - Industry Trends
  - Case Studies
- **Features**:
  - Markdown Support
  - Code Syntax Highlighting
  - Dynamic Image Loading
  - Reading Time Estimates
- **Engagement**:
  - Category Filtering
  - Author Profiles
  - Related Posts
  - Share Functionality

#### About Section
- **Professional Background**:
  - Work Experience Timeline
  - Educational History
  - Skills & Expertise
  - Certifications
- **Components**:
  - Interactive Timeline
  - Company Logos
  - Education Cards
  - Skill Badges

#### Contact System
- **Inquiry Types**:
  - AI Consulting
  - Training Programs
  - General Inquiries
  - Collaboration Requests
- **Form Features**:
  - Service Selection
  - Budget Range
  - Project Description
  - File Attachments
- **Processing**:
  - Form Validation
  - Email Notifications
  - Auto-responses
  - Follow-up System

### Key Features
- **Multilingual Support**:
  - English and Spanish language options
  - Context-based language switching
  - Consistent translations across all pages
- **Modern UI/UX**:
  - Dark/Light theme with smooth transitions
  - Responsive design for all devices
  - Interactive UI components
  - Framer Motion animations
- **Blog System**:
  - Markdown support with syntax highlighting
  - Dynamic image loading via Unsplash API
  - Category and tag filtering
  - Reading time estimates
- **Professional Features**:
  - Service inquiry form
  - Project showcases
  - Professional timeline
  - Company testimonials
- **Performance Optimized**:
  - Server-side rendering
  - Image optimization
  - Responsive loading states
  - Efficient caching strategies

## Tech Stack

### Frontend
- **Framework**: 
  - Next.js 15
  - React 19
  - TypeScript 5.2
- **Styling**: 
  - Tailwind CSS 3.3
  - shadcn/ui components
  - CSS Modules
  - CSS Variables for theming
- **UI/UX**: 
  - Framer Motion 12.0 for animations
  - Lucide React for icons
  - Custom UI components
  - Responsive design system
- **Forms & Validation**: 
  - React Hook Form
  - Zod schema validation
  - Custom form components
- **Internationalization**: 
  - Custom i18n implementation
  - Language context provider
  - Translation utilities
- **Theme System**:
  - next-themes
  - Dark/Light mode
  - System preference detection
  - Custom color schemes

### Backend & APIs
- **API Routes**: 
  - Next.js API routes
  - Server-side rendering
  - API middleware
- **Email Service**: 
  - Resend for transactional emails
  - Email templates
  - Error handling
- **Image Processing**:
  - Unsplash API integration
  - Next.js Image optimization
  - Responsive images
- **Data Handling**:
  - Server actions
  - Type-safe API responses
  - Error boundaries

## Project Structure

```
guillem-website/
├── app/                    # Next.js app router
│   ├── about/             # About page
│   ├── aiconsulting/      # AI consulting services
│   │   ├── layout.tsx     # Service layout
│   │   └── page.tsx       # Main service page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handling
│   ├── blog/              # Blog system
│   │   ├── [slug]/       # Individual blog posts
│   │   └── page.tsx      # Blog listing
│   └── training/          # Training services
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── blog-profile.tsx  # Blog author component
│   ├── contact-form.tsx  # Contact form component
│   ├── footer.tsx        # Site footer
│   ├── navigation.tsx    # Main navigation
│   └── testimonials.tsx  # Client testimonials
├── contexts/             # React contexts
│   └── LanguageContext  # i18n context
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   ├── i18n/           # i18n setup
│   └── utils/          # Helper functions
├── messages/            # i18n messages
├── public/             # Static assets
│   ├── blog/           # Blog images
│   └── images/         # General images
├── translations/       # Language files
│   ├── en.ts          # English translations
│   └── es.ts          # Spanish translations
├── types/              # TypeScript definitions
└── utils/              # Helper utilities
    ├── i18n.ts        # i18n utilities
    └── unsplash.ts    # Unsplash integration
```

## Technical Implementation

#### Component System
- **UI Components**:
  ```
  components/
  ├── ui/               # Base UI components
  │   ├── button.tsx
  │   ├── card.tsx
  │   ├── form.tsx
  │   └── ...
  ├── blog-profile.tsx  # Blog author component
  ├── contact-form.tsx  # Contact form component
  ├── education.tsx     # Education timeline
  ├── footer.tsx       # Site footer
  ├── navigation.tsx   # Main navigation
  ├── professional-experience.tsx  # Work experience
  ├── projects.tsx     # Project showcase
  ├── stats.tsx        # Statistics display
  └── testimonials.tsx # Client testimonials
  ```

#### Page Structure
- **App Router Pages**:
  ```
  app/
  ├── about/           # About page
  │   └── page.tsx
  ├── aiconsulting/    # AI consulting services
  │   ├── layout.tsx   # Service-specific layout
  │   └── page.tsx     # Main content
  ├── blog/            # Blog system
  │   ├── [slug]/      # Individual posts
  │   │   └── page.tsx
  │   └── page.tsx     # Blog listing
  └── training/        # Training services
      ├── layout.tsx
      └── page.tsx
  ```

#### Data Flow
- **Server Components**:
  ```typescript
  // Example of a server component with data fetching
  async function BlogPostFetcher() {
    const posts = await fetchBlogPosts()
    return <BlogList posts={posts} />
  }
  ```

- **Client Components**:
  ```typescript
  'use client'
  
  function ContactForm() {
    const form = useForm<ContactFormData>({
      resolver: zodResolver(contactFormSchema)
    })
    // Form handling logic
  }
  ```

#### Internationalization Implementation
```typescript
// translations/en.ts
export const en = {
  common: {
    welcome: "Welcome",
    // ...
  },
  services: {
    // ...
  }
}

// Usage in components
const { t } = useLanguage()
<h1>{t('common.welcome')}</h1>
```

#### Form Validation
```typescript
// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.enum(['consulting', 'training', 'other']),
  message: z.string().min(10)
})

// Usage in form
const form = useForm<ContactFormData>({
  resolver: zodResolver(contactFormSchema)
})
```

#### API Routes
```typescript
// app/api/contact/route.ts
export async function POST(req: Request) {
  const data = await req.json()
  
  try {
    await sendEmail({
      to: process.env.CONTACT_FORM_TO_EMAIL,
      subject: `New inquiry from ${data.name}`,
      content: data.message
    })
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false })
  }
}
```

### Development Workflow

#### Setup Process
1. **Initial Setup**:
   ```bash
   git clone <repository>
   cd guillem-website
   npm install --legacy-peer-deps
   ```

2. **Environment Configuration**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Development Server**:
   ```bash
   npm run dev
   # Site available at http://localhost:3000
   ```

#### Code Organization
- **Feature-based Structure**:
  ```
  feature/
  ├── components/     # Feature-specific components
  ├── hooks/         # Custom hooks
  ├── types/         # TypeScript types
  └── utils/         # Helper functions
  ```

- **Shared Resources**:
  ```
  shared/
  ├── components/    # Reusable components
  ├── hooks/        # Common hooks
  ├── types/        # Shared types
  └── utils/        # Utility functions
  ```

#### Testing Strategy
1. **Component Testing**:
   ```typescript
   // Example component test
   describe('ContactForm', () => {
     it('validates required fields', () => {
       // Test implementation
     })
   })
   ```

2. **Integration Testing**:
   ```typescript
   // Example integration test
   describe('Blog System', () => {
     it('loads and displays posts', () => {
       // Test implementation
     })
   })
   ```

#### Deployment Process
1. **Build Verification**:
   ```bash
   npm run build
   # Verify no build errors
   ```

2. **Production Deployment**:
   ```bash
   # Using Vercel CLI
   vercel --prod
   ```

3. **Post-Deployment**:
   - Verify all routes
   - Check form submissions
   - Validate translations
   - Test responsive design

### Maintenance

#### Regular Tasks
1. **Content Updates**:
   - Blog post additions
   - Service updates
   - Portfolio updates
   - Testimonial updates

2. **Technical Updates**:
   - Dependency updates
   - Security patches
   - Performance optimization
   - Analytics review

3. **Monitoring**:
   - Error tracking
   - Performance metrics
   - User feedback
   - SEO performance

#### Backup Strategy
1. **Code Backup**:
   - GitHub repository
   - Local backups
   - Version control

2. **Content Backup**:
   - Blog posts
   - Images
   - User data
   - Configuration

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm 9.0 or later
- Git

### Environment Variables

Create a `.env.local` file with:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=es

# API Keys
RESEND_API_KEY=your_resend_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_key

# Email Configuration
CONTACT_FORM_TO_EMAIL=your@email.com
```

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd guillem-website
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:3000`

## Development Guidelines

### Component Architecture

#### Server Components
- Use `"use server"` directive
- Handle data fetching and heavy computations
- Implement proper suspense boundaries
- Example:
  ```tsx
  "use server"
  
  export default async function ServerComponent() {
    const data = await fetchData()
    return <ClientComponent data={data} />
  }
  ```

#### Client Components
- Use `"use client"` directive
- Handle user interactions and state
- Implement proper error boundaries
- Example:
  ```tsx
  "use client"
  
  export default function ClientComponent({ data }) {
    const [state, setState] = useState(data)
    return <div>{/* Component JSX */}</div>
  }
  ```

### Internationalization System

1. **Supported Languages**:
   - English (en)
   - Spanish (es) - Default
   
2. **Translation Structure**:
   - Key-based translations in `/translations`
   - Context-aware language switching
   - Fallback handling

3. **Usage Example**:
   ```tsx
   const { t, locale } = useLanguage()
   <h1>{t('common.welcome')}</h1>
   ```

### State Management

1. **Global State**:
   - LanguageContext for i18n
   - ThemeProvider for appearance
   - Custom contexts as needed

2. **Local State**:
   - React useState for component state
   - Form state with React Hook Form
   - Custom hooks for reusable logic

### Styling Guidelines

1. **CSS Architecture**:
   - Tailwind CSS for utilities
   - CSS Modules for components
   - CSS Variables for theming
   - Responsive design patterns

2. **Theme System**:
   - Light/Dark mode support
   - Custom color schemes
   - Consistent spacing
   - Typography system

### Performance Optimization

1. **Image Optimization**:
   - Next.js Image component
   - Responsive images
   - Lazy loading
   - Proper sizing

2. **Code Optimization**:
   - Dynamic imports
   - Code splitting
   - Tree shaking
   - Bundle optimization

3. **Caching Strategy**:
   - Static page caching
   - API response caching
   - Image caching
   - State persistence

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run fetch-images` - Fetch blog images from Unsplash

## Deployment

1. **Build Process**:
   ```bash
   npm run build
   ```

2. **Environment Setup**:
   - Configure production environment variables
   - Set up domain and SSL
   - Configure CDN if needed

3. **Deployment Options**:
   - Vercel (recommended)
   - Netlify
   - Custom server

## Contributing

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Follow coding standards:
   - TypeScript strict mode
   - ESLint rules
   - Prettier formatting
   - Component guidelines

3. Test thoroughly:
   - Component testing
   - Integration testing
   - Responsive testing
   - i18n testing

4. Submit a pull request:
   - Clear description
   - Link related issues
   - Update documentation
   - Add tests if needed

## License

This project is private and confidential. All rights reserved.

## Support

For questions, issues, or support:
- Email: [contact email]
- GitHub Issues: [repository issues]
- Documentation: [documentation link]

---

Built with ❤️ by Guillem Pedrerol
