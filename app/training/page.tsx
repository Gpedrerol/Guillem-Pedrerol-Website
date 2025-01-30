'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Brain,
  CheckCircle2,
  Lightbulb,
  Zap,
  Users,
  Target,
  Sparkles,
  Settings,
  Workflow,
  Rocket,
  type LucideIcon,
  CircleDot,
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface TrainingModuleProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

interface MethodologyStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const IconWrapper = ({ Icon }: { Icon: LucideIcon }) => {
  if (!Icon) return <CircleDot className="h-6 w-6 text-primary" />;
  return <Icon className="h-6 w-6 text-primary" />;
};

const MethodologyStep: React.FC<MethodologyStepProps> = ({ icon: Icon, title, description, delay = 0 }) => (
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

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description, className = "" }) => (
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

const TrainingModule: React.FC<TrainingModuleProps> = ({ icon: Icon, title, description, features }) => (
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

export default function CorporateTraining() {
  const { translation } = useLanguage();

  const methodologyIcons: LucideIcon[] = [Target, Users, Settings, Workflow];
  const benefitIcons: LucideIcon[] = [Brain, Zap, Rocket];
  const moduleIcons: LucideIcon[] = [Lightbulb, Sparkles, Brain];

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
                  {translation?.training?.badges?.customized}
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                  {translation?.training?.badges?.remote}
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              >
                {translation?.training?.title}{" "}
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                  {translation?.training?.titleHighlight}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                {translation?.training?.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">
                    {translation?.training?.cta?.primary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="#modules">
                    {translation?.training?.cta?.secondary}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
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
                {translation?.training?.methodology?.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {translation?.training?.methodology?.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {translation?.training?.methodology?.steps?.map((step, index) => {
                const Icon = methodologyIcons[index] || CircleDot;
                return (
                  <MethodologyStep
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

        {/* Training Modules Section */}
        <section id="modules" className="relative py-20 border-t border-primary/10">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">
                {translation?.training?.modules?.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {translation?.training?.modules?.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translation?.training?.modules?.items?.map((module, index) => {
                const Icon = moduleIcons[index] || CircleDot;
                return (
                  <TrainingModule
                    key={index}
                    icon={Icon}
                    title={module.title}
                    description={module.description}
                    features={module.features}
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
                {translation?.training?.benefits?.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {translation?.training?.benefits?.description}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translation?.training?.benefits?.items?.map((benefit, index) => {
                const Icon = benefitIcons[index] || CircleDot;
                return (
                  <BenefitCard
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
                {translation?.training?.ctaSection?.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {translation?.training?.ctaSection?.description}
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
