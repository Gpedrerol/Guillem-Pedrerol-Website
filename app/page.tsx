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
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {translation.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary/80 mb-8 max-w-2xl">
                {translation.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    {translation.hero.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#services">
                    {translation.hero.secondaryCta}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-sm lg:max-w-[90%]">
                <Image
                  src="/images/Human and AI 2.png"
                  alt="Guillem Pedrerol collaborating with AI - Illustrative visualization of human-AI partnership"
                  width={700}
                  height={500}
                  priority
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20 py-16 bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                {translation.services.sectionTitle}
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              {translation.services.title}
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              {translation.services.subtitle}
            </p>
          </div>
          
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* AI Consulting Service */}
            <div className="group relative">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-10 rounded-2xl bg-background border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="w-full lg:w-2/5">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/AI trainings.jpg"
                      alt="AI Consulting - Strategic AI implementation"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{translation.services.consultation.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      {translation.services.consultation.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">{translation.services.consultation.benefits.title}</h4>
                      <div className="space-y-3">
                        {translation.services.consultation.benefits.items.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm sm:text-base">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">{translation.services.consultation.approach.title}</h4>
                      <div className="space-y-3">
                        {translation.services.consultation.approach.items.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm sm:text-base">
                            {index === 0 && <Target className="h-4 w-4 text-primary flex-shrink-0 mt-1" />}
                            {index === 1 && <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />}
                            {index === 2 && <Briefcase className="h-4 w-4 text-primary flex-shrink-0 mt-1" />}
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
                    <Button asChild size="lg" className="w-full sm:w-auto group/button">
                      <Link href="/aiconsulting" className="flex items-center gap-2">
                        {translation.services.consultation.cta.explore}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                      <Link href="#contact">{translation.services.consultation.cta.schedule}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Training Service */}
            <div className="group relative">
              <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-10 rounded-2xl bg-background border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="w-full lg:w-2/5">
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
                
                <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{translation.services.training.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      {translation.services.training.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">{translation.services.training.features.title}</h4>
                      <div className="space-y-3">
                        {translation.services.training.features.items.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm sm:text-base">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">{translation.services.training.methods.title}</h4>
                      <div className="space-y-3">
                        {translation.services.training.methods.items.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm sm:text-base">
                            {index === 0 && <GraduationCap className="h-4 w-4 text-primary flex-shrink-0 mt-1" />}
                            {index === 1 && <Target className="h-4 w-4 text-primary flex-shrink-0 mt-1" />}
                            {index === 2 && <Rocket className="h-4 w-4 text-primary flex-shrink-0 mt-1" />}
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
                    <Button asChild size="lg" className="w-full sm:w-auto group/button">
                      <Link href="/training" className="flex items-center gap-2">
                        {translation.services.training.cta.explore}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                      <Link href="#contact">{translation.services.training.cta.request}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                {translation.clientStories.sectionTitle}
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              {translation.clientStories.title}
            </h2>
            <p className="text-lg text-primary/80">
              {translation.clientStories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(translation.clientStories.companies).map(([key, company]) => (
              <div key={key} className="relative">
                <Link 
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="group h-full bg-card transition-colors duration-200 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center shadow-sm border border-transparent hover:border-primary/20 hover:bg-accent/5">
                    <div className="mb-6 relative w-24 sm:w-32 h-12 sm:h-16">
                      <Image
                        src={`/images/${key === 'mcneel' ? 'Rhino3d' : 
                              key === 'tennis' ? 'Tennis Express Logo' :
                              key === 'ditesa' ? 'Ditesa Logo' :
                              key === 'icreatia' ? 'Icreatia Logo' :
                              key === 'onePutt' ? 'One Putt Colombia Logo' :
                              'PL Bienes Raices logo'}.png`}
                        alt={company.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{company.name}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{company.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                      {company.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <Projects className="pb-0" />

      {/* What People Say Section */}
      <Testimonials className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-muted/30" />

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 pt-0 pb-12 sm:pb-16 bg-muted/30">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                {translation.contact.sectionTitle}
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              {translation.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-primary/80">
              {translation.contact.subtitle}
            </p>
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
