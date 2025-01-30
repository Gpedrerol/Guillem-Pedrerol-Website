'use client';

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
import { Testimonials } from '@/components/testimonials';
import { Projects } from '@/components/projects';
import { CompanyLogos } from '@/components/company-logos';
import { BorderBeam } from "@/components/ui/border-beam";
import { ProfessionalExperience } from '@/components/professional-experience';
import { Education } from '@/components/education';
import { ContactForm } from '@/components/contact-form';
import { useLanguage } from '@/contexts/LanguageContext';

const companies = [
  {
    logo: '/images/Rhino3d.png',
    name: 'McNeel Europe',
    description: 'Implemented AI-powered customer service solutions and provided comprehensive AI training for the team.',
    services: ['AI Implementation', 'Corporate Training', 'Process Automation']
  },
  {
    logo: '/images/Tennis Express Logo.png',
    name: 'Tennis Express México',
    description: 'Developed automated content generation systems and optimized customer service workflows.',
    services: ['AI Integration', 'Workflow Automation', 'Content Generation']
  },
  {
    logo: '/images/Ditesa Logo.png',
    name: 'Ditesa',
    description: 'Created custom AI solutions for business process automation and staff training programs.',
    services: ['Process Automation', 'AI Training', 'Custom Development']
  },
  {
    logo: '/images/Icreatia Logo.png',
    name: 'Icreatia',
    description: 'Implemented AI tools for digital marketing and provided strategic AI consulting services.',
    services: ['AI Strategy', 'Digital Marketing', 'Consulting']
  },
  {
    logo: '/images/One Putt Colombia Logo.png',
    name: 'One Putt Colombia',
    description: 'Developed AI-enhanced customer engagement solutions and automated marketing processes.',
    services: ['Customer Engagement', 'Marketing Automation', 'AI Integration']
  },
  {
    logo: '/images/PL Bienes Raices logo.png',
    name: 'PL Bienes Raices',
    description: 'Created AI-powered property matching systems and automated lead generation processes.',
    services: ['AI Solutions', 'Lead Generation', 'Process Automation']
  }
];

export default function Home() {
  const { translation } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors duration-200">
                  Available for Projects
                </Badge>
                <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors duration-200">
                  {translation.about.badges.location}
                </Badge>
              </div>
              <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                {translation.hero.title.replace(translation.hero.titleHighlight, '')}
                <span className="text-primary">{translation.hero.titleHighlight}</span>
              </h1>
              <p className="mb-6 md:mb-8 text-lg md:text-xl text-muted-foreground">
                {translation.hero.subtitle}
              </p>
              <div className="flex gap-4">
                <div className="relative rounded-md">
                  <Button asChild size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="#contact">
                      {translation.hero.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <BorderBeam
                    size={200}
                    duration={4}
                    colorFrom="#9c40ff"
                    colorTo="#ffaa40"
                    borderWidth={1.5}
                  />
                </div>
                <Button variant="outline" size="lg" asChild className="button-secondary w-full sm:w-auto">
                  <Link href="#services">{translation.navigation.services}</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative mx-auto max-w-md">
                <Image
                  src="/images/Human and AI 2.png"
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

      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">Client Success Stories</span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Trusted by Innovative Companies
            </h2>
            <p className="text-lg text-muted-foreground">
              I've helped these forward-thinking companies transform their operations with AI implementation and training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="group relative bg-card hover:bg-accent transition-colors duration-300 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="mb-6 relative w-32 h-16">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{company.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{company.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {company.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20 py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">Our Services</span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {translation.services.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              Empowering businesses to thrive in the AI era through strategic consulting and comprehensive training programs. 
              Our services are designed to transform your organization's capabilities and drive innovation.
            </p>
          </div>
          
          <div className="space-y-20">
            {/* AI Consulting Service */}
            <div className="group relative">
              <div className="flex flex-col lg:flex-row gap-12 items-center p-10 rounded-2xl bg-background border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="lg:w-2/5">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/AI trainings.jpg"
                      alt="AI Consulting - Strategic AI implementation and automation"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="lg:w-3/5 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">{translation.services.consultation.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {translation.services.consultation.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Key Benefits</h4>
                      <div className="space-y-3">
                        {translation.services.consultation.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Our Approach</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 text-sm">
                          <Target className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>Strategic assessment of AI opportunities</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>Customized implementation roadmap</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <Briefcase className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>Industry-specific solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-4">
                    <Button asChild size="lg" className="group/button">
                      <Link href="/aiconsulting" className="flex items-center gap-2">
                        Explore AI Consulting
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link href="#contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Training Service */}
            <div className="group relative">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center p-10 rounded-2xl bg-background border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="lg:w-2/5">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/business-conference.jpg"
                      alt="Corporate Training - Empowering your workforce with AI skills"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="lg:w-3/5 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">{translation.services.training.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {translation.services.training.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Program Features</h4>
                      <div className="space-y-3">
                        {translation.services.training.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Training Methods</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 text-sm">
                          <GraduationCap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>Interactive workshops and hands-on sessions</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <Target className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>Role-specific skill development</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>Continuous learning and support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-4">
                    <Button asChild size="lg" className="group/button">
                      <Link href="/training" className="flex items-center gap-2">
                        Explore Training Programs
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link href="#contact">Request Training Info</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Projects />

      {/* About Section */}
      <section id="about" className="scroll-mt-20 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - About Me and Education */}
            <div className="space-y-12">
              {/* About Me */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{translation.about.title}</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      {translation.about.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        <Languages className="w-4 h-4 mr-1" />
                        {translation.about.badges.languages}
                      </Badge>
                      <Badge variant="secondary">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {translation.about.badges.education}
                      </Badge>
                      <Badge variant="secondary">
                        <Building2 className="w-4 h-4 mr-1" />
                        {translation.about.badges.location}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/guillem Montenegro.jpeg"
                    alt="Guillem Pedrerol"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Education */}
              <Education />
            </div>

            {/* Right Column - Professional Experience */}
            <div>
              <ProfessionalExperience />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{translation.contact.title}</h2>
            <p className="text-muted-foreground">
              {translation.contact.subtitle}
            </p>
          </div>
          <div className="mt-12 max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
