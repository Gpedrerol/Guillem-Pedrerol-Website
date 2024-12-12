import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Brain, 
  Building2, 
  GraduationCap,
  Languages,
  Lightbulb, 
  Users, 
  Briefcase,
  Target,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Experience } from '@/components/experience';
import { Testimonials } from '@/components/testimonials';
import { Projects } from '@/components/projects';
import { CompanyLogos } from '@/components/company-logos';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors duration-200">Available for Projects</Badge>
                <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors duration-200">Remote/On-site</Badge>
              </div>
              <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Businesses with{' '}
                <span className="text-primary">Practical AI Solutions</span>
              </h1>
              <p className="mb-6 md:mb-8 text-lg md:text-xl text-muted-foreground">
                Helping businesses leverage artificial intelligence to transform their productivity through practical implementation and training.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button asChild size="lg" className="button-primary w-full sm:w-auto">
                  <Link href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="button-secondary w-full sm:w-auto">
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative mx-auto max-w-md">
                <Image
                  src="/images/Human and AI 1.png"
                  alt="AI and Human Connection"
                  width={800}
                  height={1000}
                  className="rounded-lg shadow-xl w-full object-cover transition-all duration-500 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyLogos />

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 card">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Strategic AI implementation tailored to your business needs
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Custom chatbot development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Process automation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  AI strategy planning
                </li>
              </ul>
            </Card>
            <Card className="p-6 card">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Training</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive AI workshops and training programs
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  ChatGPT implementation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Custom training programs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Hands-on workshops
                </li>
              </ul>
            </Card>
            <Card className="p-6 card">
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground mb-4">
                End-to-end digital transformation solutions
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  SEO optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Shopify development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Process optimization
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At 26, I'm an AI Implementation Consultant and Corporate Trainer based in Madrid, 
                    working with clients globally. My journey in technology and business has taken me 
                    from Silicon Valley to China, shaping my unique perspective on AI implementation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      <Languages className="w-4 h-4 mr-1" />
                      ES/EN/CAT
                    </Badge>
                    <Badge variant="secondary">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      Management & Technology
                    </Badge>
                    <Badge variant="secondary">
                      <Building2 className="w-4 h-4 mr-1" />
                      Remote/On-site
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/guillem Montenegro.jpeg"
                  alt="Guillem Pedrerol"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full max-w-md transition-all duration-300 hover:shadow-xl"
                  priority
                />
              </div>
            </div>
            <Experience />
          </div>
        </div>
      </section>

      <Projects />

      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your business with AI? Get in touch to discuss how we can help you achieve your goals.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="mailto:contact@guillempedrerol.com">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}