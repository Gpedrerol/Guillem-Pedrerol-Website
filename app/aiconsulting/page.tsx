'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Brain,
  CheckCircle2,
  MessageSquare,
  Zap,
  Bot,
  List,
  Search,
  Wrench,
  RefreshCw,
  BarChart,
  Link2,
  type LucideIcon,
  // Add a default icon
  CircleDot,
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: readonly string[];
}

interface TechnologyCardProps {
  name: string;
  description: string;
}

const IconWrapper = ({ Icon }: { Icon: LucideIcon }) => {
  if (!Icon) return <CircleDot className="h-6 w-6 text-primary" />;
  return <Icon className="h-6 w-6 text-primary" />;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
    <Card className="relative p-6 backdrop-blur-sm border-primary/10 group-hover:border-primary/20 transition-all duration-300 bg-card/50">
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        <IconWrapper Icon={Icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  </motion.div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`group relative ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
    <Card className="relative p-6 backdrop-blur-sm border-primary/10 group-hover:border-primary/20 transition-all duration-300 bg-card/50">
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        <IconWrapper Icon={Icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  </motion.div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
    <Card className="relative p-6 backdrop-blur-sm border-primary/10 group-hover:border-primary/20 transition-all duration-300 bg-card/50">
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        <IconWrapper Icon={Icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  </motion.div>
);

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, description }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <Card className="relative p-6 backdrop-blur-sm border-primary/10 group-hover:border-primary/20 transition-all duration-300 bg-card/50">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  </motion.div>
);

export default function AIConsulting() {
  const { translation } = useLanguage();

  const processIcons: LucideIcon[] = [List, Search, Wrench, RefreshCw];
  const benefitIcons: LucideIcon[] = [Link2, Zap, Brain];
  const serviceIcons: LucideIcon[] = [MessageSquare, BarChart, Bot];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-2 mb-6"
              >
                <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                  Available for Projects
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                  Remote/On-site
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              >
                {translation.services.consultation.title}{" "}
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                  {translation.services.consultation.description}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                {translation.services.consultation.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">
                    {translation.services.consultation.cta?.primary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="#services">
                    {translation.services.consultation.cta?.secondary}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20 border-t border-primary/10">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-4">
                {translation.services.consultation.process?.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {translation.services.consultation.process?.steps[0]?.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {translation.services.consultation.process?.steps?.map((step, index) => {
                const Icon = processIcons[index] || CircleDot;
                return (
                  <ProcessStep
                    key={index}
                    icon={Icon}
                    title={step.title}
                    description={step.description}
                    delay={index * 0.1}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-20 border-t border-primary/10">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                {translation.services.consultation.services?.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {translation.services.consultation.services?.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translation.services.consultation.services?.items?.map((service, index) => {
                const Icon = serviceIcons[index] || CircleDot;
                return (
                  <ServiceCard
                    key={index}
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-20 border-t border-primary/10">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                {translation.services.consultation.benefits?.title}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translation.services.consultation.benefits?.items?.map((benefit, index) => {
                const Icon = benefitIcons[index] || CircleDot;
                return (
                  <FeatureCard
                    key={index}
                    icon={Icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative py-20 border-t border-primary/10">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                {translation.services.consultation.technologies?.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {translation.services.consultation.technologies?.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {translation.services.consultation.technologies?.tools?.map((tool, index) => (
                <TechnologyCard
                  key={index}
                  name={tool.name}
                  description={tool.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 border-t border-primary/10">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                {translation.services.consultation.ctaSection?.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {translation.services.consultation.ctaSection?.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto"
            >
              <Card className="p-6 backdrop-blur-sm border-primary/10 bg-card/50">
                <ContactForm />
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
