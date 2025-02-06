'use client';

import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  GraduationCap,
  Languages,
} from 'lucide-react';
import Image from 'next/image';
import { ProfessionalExperience } from '@/components/professional-experience';
import { Education } from '@/components/education';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                Sobre Mí
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Consultor de IA y Desarrollador de Software
            </h1>
            <p className="text-lg text-center text-muted-foreground">
              Ayudo a empresas a implementar soluciones de IA y desarrollar software personalizado. 
              Mi experiencia abarca desde la consultoría estratégica hasta la implementación técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Guillem Pedrerol"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Mi Historia</h2>
                <p className="text-muted-foreground mb-4">
                  Soy un apasionado de la tecnología y la innovación, especializado en ayudar a empresas 
                  a aprovechar el poder de la IA. Con experiencia en Silicon Valley y Europa, combino 
                  una sólida formación técnica con una visión empresarial estratégica.
                </p>
                <p className="text-muted-foreground">
                  Mi enfoque se centra en crear soluciones prácticas y efectivas que generen un impacto 
                  real en el negocio de mis clientes. Me especializo en implementación de IA, desarrollo 
                  de software y formación corporativa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Habilidades y Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Inteligencia Artificial</Badge>
                  <Badge>Machine Learning</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>GPT-4</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ProfessionalExperience />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container">
          <Education />
        </div>
      </section>
    </div>
  );
}
