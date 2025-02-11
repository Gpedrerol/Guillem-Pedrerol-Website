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

const companies = [
  {
    logo: '/images/Rhino3d.png',
    name: 'McNeel Europe',
    description: 'Implementación de soluciones de servicio al cliente con IA y formación integral para el equipo.',
    services: ['Implementación de IA', 'Formación Corporativa', 'Automatización de Procesos']
  },
  {
    logo: '/images/Tennis Express Logo.png',
    name: 'Tennis Express México',
    description: 'Desarrollo de sistemas de generación de contenido automatizado y optimización de flujos de trabajo.',
    services: ['Integración de IA', 'Automatización de Flujos', 'Generación de Contenido']
  },
  {
    logo: '/images/Ditesa Logo.png',
    name: 'Ditesa',
    description: 'Creación de soluciones personalizadas de IA para automatización de procesos y programas de formación.',
    services: ['Automatización de Procesos', 'Formación en IA', 'Desarrollo Personalizado']
  },
  {
    logo: '/images/Icreatia Logo.png',
    name: 'Icreatia',
    description: 'Implementación de herramientas de IA para marketing digital y servicios de consultoría estratégica.',
    services: ['Estrategia de IA', 'Marketing Digital', 'Consultoría']
  },
  {
    logo: '/images/One Putt Colombia Logo.png',
    name: 'One Putt Colombia',
    description: 'Desarrollo de soluciones de engagement con IA y automatización de procesos de marketing.',
    services: ['Engagement de Clientes', 'Automatización de Marketing', 'Integración de IA']
  },
  {
    logo: '/images/PL Bienes Raices logo.png',
    name: 'PL Bienes Raices',
    description: 'Creación de sistemas de matching de propiedades con IA y automatización de generación de leads.',
    services: ['Soluciones de IA', 'Generación de Leads', 'Automatización de Procesos']
  }
];

export default function MainPageSpanish() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Soluciones de IA para el Crecimiento Empresarial
              </h1>
              <p className="text-lg sm:text-xl text-primary/80 mb-8 max-w-2xl">
                Ayudamos a las empresas a aprovechar la inteligencia artificial para transformar su productividad a través de la implementación práctica y la formación.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Empezar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#services">
                    Ver Servicios
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-sm lg:max-w-[90%]">
                <Image
                  src="/images/Human and AI 2.png"
                  alt="Conexión IA y Humano"
                  width={700}
                  height={875}
                  className="rounded-lg shadow-xl w-full object-cover transition-all duration-500 hover:scale-[1.02]"
                  priority
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
                QUÉ HACEMOS
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Transforma tu Empresa
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Consultoría estratégica y programas de formación integral para ayudar a tu organización a prosperar en la era de la IA.
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
                      alt="Consultoría IA - Implementación estratégica de IA"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Consultoría IA</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Implementación estratégica de IA adaptada a las necesidades de tu empresa
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3">Beneficios Clave</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Desarrollo de chatbots personalizados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Automatización de procesos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Planificación estratégica de IA</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Nuestro Enfoque</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Evaluación estratégica de oportunidades de IA</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Plan de implementación personalizado</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Soluciones específicas por industria</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/aiconsulting">
                        Explorar Consultoría IA <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="#contact">
                        Programar Consulta
                      </Link>
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
                      alt="Formación Corporativa - Capacitando a tu equipo con habilidades de IA"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Formación Corporativa</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Programas completos de formación y talleres de IA
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3">Características del Programa</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Implementación de ChatGPT</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Programas de formación personalizados</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Talleres prácticos</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Métodos de Formación</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Talleres interactivos y sesiones prácticas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Desarrollo de habilidades específicas por rol</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Aprendizaje continuo y soporte</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/training">
                        Explorar Programas de Formación <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="#contact">
                        Solicitar Información
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Transformation Service */}
            <div className="group relative">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-10 rounded-2xl bg-background border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="w-full lg:w-2/5">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/digital-transformation.jpg"
                      alt="Transformación Digital - Soluciones integrales"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Transformación Digital</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Soluciones integrales de transformación digital
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3">Servicios</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Optimización SEO</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Desarrollo Shopify</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">Optimización de procesos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="#contact">
                        Solicitar Información <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                CASOS DE ÉXITO
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Empresas que Confían en Nosotros
            </h2>
            <p className="text-lg text-primary/80">
              Descubre cómo hemos ayudado a empresas de diferentes sectores a transformar sus operaciones con IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Link
                key={index}
                href="#contact"
                className="block group"
              >
                <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                  <div className="p-6">
                    <div className="h-12 mb-6 relative">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{company.name}</h3>
                    <p className="text-muted-foreground mb-6">{company.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {company.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-sm">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 pt-0 pb-12 sm:pb-16 bg-muted/30">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                CONTACTO
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-base sm:text-lg text-primary/80">
              Hablemos sobre cómo la IA puede impulsar la innovación y la eficiencia en tu organización.
            </p>
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border bg-background h-32"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <Button className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 