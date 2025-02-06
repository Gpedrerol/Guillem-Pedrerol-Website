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
  CircleDot,
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
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
  features: string[];
}

interface TechnologyCardProps {
  name: string;
  description: string;
}

function IconWrapper({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="p-2 w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon className="w-6 h-6" />
    </div>
  );
}

function ProcessStep({ icon: Icon, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4"
    >
      <IconWrapper Icon={Icon} />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex gap-4">
        <IconWrapper Icon={Icon} />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}

function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <IconWrapper Icon={Icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function TechnologyCard({ name, description }: TechnologyCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export default function AIConsulting() {
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
                  Disponible para Proyectos
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                  Remoto/Presencial
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              >
                Consultoría de IA{" "}
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                  para tu Negocio
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Transformo negocios implementando soluciones de IA prácticas y efectivas. 
                Desde chatbots hasta automatización de procesos, te ayudo a aprovechar el poder de la IA.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">
                    Empezar Proyecto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#services">
                    Ver Servicios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30" id="process">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proceso de Trabajo</h2>
              <p className="text-muted-foreground">
                Un enfoque estructurado para implementar IA en tu negocio de manera efectiva y medible.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ProcessStep
                icon={List}
                title="Análisis y Planificación"
                description="Evaluamos tus necesidades y objetivos para crear un plan de implementación personalizado."
                delay={0.1}
              />
              <ProcessStep
                icon={Search}
                title="Investigación y Diseño"
                description="Identificamos las mejores soluciones de IA y diseñamos una estrategia de implementación."
                delay={0.2}
              />
              <ProcessStep
                icon={Wrench}
                title="Implementación"
                description="Desarrollamos e integramos las soluciones de IA en tu infraestructura existente."
                delay={0.3}
              />
              <ProcessStep
                icon={RefreshCw}
                title="Optimización Continua"
                description="Monitoreamos y mejoramos el rendimiento para maximizar el retorno de inversión."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" id="benefits">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Beneficios</h2>
              <p className="text-muted-foreground">
                Descubre cómo la IA puede transformar tu negocio y mejorar tus resultados.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <FeatureCard
                icon={Link2}
                title="Integración Perfecta"
                description="Implementamos soluciones que se integran perfectamente con tus sistemas existentes."
              />
              <FeatureCard
                icon={Zap}
                title="Automatización Eficiente"
                description="Automatiza tareas repetitivas y optimiza procesos para aumentar la productividad."
              />
              <FeatureCard
                icon={Brain}
                title="Decisiones Inteligentes"
                description="Utiliza el poder de la IA para tomar decisiones basadas en datos."
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30" id="services">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Servicios</h2>
              <p className="text-muted-foreground">
                Soluciones personalizadas para diferentes necesidades empresariales.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ServiceCard
                icon={MessageSquare}
                title="Chatbots y Asistentes"
                description="Automatiza la atención al cliente y mejora la experiencia del usuario."
                features={[
                  "Chatbots personalizados",
                  "Integración con plataformas existentes",
                  "Análisis de conversaciones",
                  "Mejora continua del rendimiento"
                ]}
              />
              <ServiceCard
                icon={BarChart}
                title="Análisis Predictivo"
                description="Anticipa tendencias y toma decisiones informadas."
                features={[
                  "Análisis de datos avanzado",
                  "Modelos predictivos",
                  "Visualización de datos",
                  "Informes automatizados"
                ]}
              />
              <ServiceCard
                icon={Bot}
                title="Automatización de Procesos"
                description="Optimiza operaciones y reduce costos operativos."
                features={[
                  "Automatización de tareas",
                  "Flujos de trabajo inteligentes",
                  "Integración de sistemas",
                  "Monitoreo y optimización"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20" id="contact">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contacto</h2>
              <p className="text-muted-foreground">
                ¿Listo para transformar tu negocio con IA? Contáctame para discutir tu proyecto.
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
