'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Brain,
  CheckCircle2,
  Users,
  Target,
  Zap,
  Lightbulb,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TrainingProgramProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

function IconWrapper({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="p-2 w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Icon className="w-6 h-6" />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6">
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

function TrainingProgram({ icon: Icon, title, description, benefits }: TrainingProgramProps) {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <IconWrapper Icon={Icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function Training() {
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
                  Programas Personalizados
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                  Presencial/Online
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
              >
                Formación en IA{" "}
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                  para Empresas
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Programas de formación personalizados para ayudar a tu equipo a dominar 
                las últimas tecnologías de IA y aplicarlas en tu negocio.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">
                    Solicitar Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#programs">
                    Ver Programas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" id="benefits">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué Elegirnos?</h2>
              <p className="text-muted-foreground">
                Formación práctica y efectiva para implementar IA en tu empresa
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <FeatureCard
                icon={Target}
                title="Enfoque Práctico"
                description="Aprende a través de casos reales y ejercicios prácticos aplicables a tu negocio."
              />
              <FeatureCard
                icon={Users}
                title="Formación Personalizada"
                description="Programas adaptados a las necesidades específicas de tu equipo y sector."
              />
              <FeatureCard
                icon={Zap}
                title="Resultados Inmediatos"
                description="Implementa lo aprendido desde el primer día en tu empresa."
              />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-muted/30" id="programs">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Programas de Formación</h2>
              <p className="text-muted-foreground">
                Elige el programa que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <TrainingProgram
                icon={Brain}
                title="Fundamentos de IA"
                description="Comprende los conceptos básicos de la IA y sus aplicaciones empresariales."
                benefits={[
                  "Conceptos fundamentales de IA",
                  "Casos de uso prácticos",
                  "Evaluación de soluciones",
                  "Implementación básica"
                ]}
              />
              <TrainingProgram
                icon={Lightbulb}
                title="IA Avanzada"
                description="Profundiza en técnicas avanzadas y casos de uso específicos."
                benefits={[
                  "Técnicas avanzadas de IA",
                  "Integración de sistemas",
                  "Optimización de modelos",
                  "Casos de estudio avanzados"
                ]}
              />
              <TrainingProgram
                icon={LineChart}
                title="Estrategia de IA"
                description="Desarrolla una estrategia de IA efectiva para tu empresa."
                benefits={[
                  "Planificación estratégica",
                  "Gestión de proyectos de IA",
                  "Medición de resultados",
                  "Escalabilidad y mantenimiento"
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
                ¿Interesado en nuestros programas? Contáctanos para más información.
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
