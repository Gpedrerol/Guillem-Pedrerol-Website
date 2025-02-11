# Spanish Main Page Component

This is a standalone Spanish version of the main page component, designed to be integrated into any Next.js project.

## Prerequisites

- Node.js 16.x or higher
- Next.js 13.x or higher
- TailwindCSS
- shadcn/ui components

## Required Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-tooltip": "^1.0.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cmdk": "^0.2.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.294.0",
    "next": "13.5.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^1.14.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

## Required Files

1. `MainPageSpanish.tsx` - The main component
2. UI Components from shadcn/ui:
   - button
   - badge
   - card
   - border-beam
   - marquee
   And other components from the shadcn/ui library

## Setup Instructions

1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Set up TailwindCSS with the required configuration:
   ```js
   // tailwind.config.js
   module.exports = {
     darkMode: ["class"],
     content: [
       './pages/**/*.{ts,tsx}',
       './components/**/*.{ts,tsx}',
       './app/**/*.{ts,tsx}',
       './src/**/*.{ts,tsx}',
     ],
     theme: {
       container: {
         center: true,
         padding: "2rem",
         screens: {
           "2xl": "1400px",
         },
       },
       extend: {
         colors: {
           border: "hsl(var(--border))",
           input: "hsl(var(--input))",
           ring: "hsl(var(--ring))",
           background: "hsl(var(--background))",
           foreground: "hsl(var(--foreground))",
           primary: {
             DEFAULT: "hsl(var(--primary))",
             foreground: "hsl(var(--primary-foreground))",
           },
           secondary: {
             DEFAULT: "hsl(var(--secondary))",
             foreground: "hsl(var(--secondary-foreground))",
           },
           destructive: {
             DEFAULT: "hsl(var(--destructive))",
             foreground: "hsl(var(--destructive-foreground))",
           },
           muted: {
             DEFAULT: "hsl(var(--muted))",
             foreground: "hsl(var(--muted-foreground))",
           },
           accent: {
             DEFAULT: "hsl(var(--accent))",
             foreground: "hsl(var(--accent-foreground))",
           },
           popover: {
             DEFAULT: "hsl(var(--popover))",
             foreground: "hsl(var(--popover-foreground))",
           },
           card: {
             DEFAULT: "hsl(var(--card))",
             foreground: "hsl(var(--card-foreground))",
           },
         },
         borderRadius: {
           lg: "var(--radius)",
           md: "calc(var(--radius) - 2px)",
           sm: "calc(var(--radius) - 4px)",
         },
       },
     },
     plugins: [require("tailwindcss-animate")],
   }
   ```

3. Add the required CSS variables:
   ```css
   /* globals.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
 
   @layer base {
     :root {
       --background: 0 0% 100%;
       --foreground: 222.2 84% 4.9%;
       --card: 0 0% 100%;
       --card-foreground: 222.2 84% 4.9%;
       --popover: 0 0% 100%;
       --popover-foreground: 222.2 84% 4.9%;
       --primary: 221.2 83.2% 53.3%;
       --primary-foreground: 210 40% 98%;
       --secondary: 210 40% 96.1%;
       --secondary-foreground: 222.2 47.4% 11.2%;
       --muted: 210 40% 96.1%;
       --muted-foreground: 215.4 16.3% 46.9%;
       --accent: 210 40% 96.1%;
       --accent-foreground: 222.2 47.4% 11.2%;
       --destructive: 0 84.2% 60.2%;
       --destructive-foreground: 210 40% 98%;
       --border: 214.3 31.8% 91.4%;
       --input: 214.3 31.8% 91.4%;
       --ring: 221.2 83.2% 53.3%;
       --radius: 0.5rem;
     }
  
     .dark {
       --background: 222.2 84% 4.9%;
       --foreground: 210 40% 98%;
       --card: 222.2 84% 4.9%;
       --card-foreground: 210 40% 98%;
       --popover: 222.2 84% 4.9%;
       --popover-foreground: 210 40% 98%;
       --primary: 217.2 91.2% 59.8%;
       --primary-foreground: 222.2 47.4% 11.2%;
       --secondary: 217.2 32.6% 17.5%;
       --secondary-foreground: 210 40% 98%;
       --muted: 217.2 32.6% 17.5%;
       --muted-foreground: 215 20.2% 65.1%;
       --accent: 217.2 32.6% 17.5%;
       --accent-foreground: 210 40% 98%;
       --destructive: 0 62.8% 30.6%;
       --destructive-foreground: 210 40% 98%;
       --border: 217.2 32.6% 17.5%;
       --input: 217.2 32.6% 17.5%;
       --ring: 224.3 76.3% 48%;
     }
   }
   ```

4. Copy the required images to your public/images directory:
   - Human and AI 2.png
   - AI trainings.jpg
   - business-conference.jpg
   - digital-transformation.jpg
   - Company logos (Rhino3d.png, Tennis Express Logo.png, etc.)

5. Import and use the component:
   ```tsx
   import { MainPageSpanish } from './path/to/MainPageSpanish';
   
   export default function YourPage() {
     return <MainPageSpanish />;
   }
   ```

## Component Structure

The component includes:
- Hero section
- Services section
- Client stories section
- Featured work section
- Testimonials section
- Contact form section

Each section is fully translated to Spanish and includes all necessary styling and interactivity.

## Notes

- Make sure all required images are available in your public directory
- The component uses Next.js Image component for optimized image loading
- All UI components are from shadcn/ui library
- The component is styled using TailwindCSS
- Animations are handled by Framer Motion 