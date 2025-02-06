'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Consultor de Implementación IA & Formador Corporativo",
    company: "Freelance",
    period: "Oct 2023 - Presente",
    description: "Proporciono soluciones de IA personalizadas y servicios de consultoría para empresas como McNeel Europe, TennisExpress México y RhinoLands. Imparto programas de formación estructurados en IA e implemento soluciones de automatización.",
    achievements: [
      "Desarrollo de chatbots personalizados para atención al cliente",
      "Automatización de creación de contenido SEO",
      "Diseño de prompts maestros para comunicación de marca"
    ]
  },
  {
    title: "Co-fundador",
    company: "AI Art Posters",
    period: "Sep 2023 - Presente",
    description: "Lanzamiento y gestión de una plataforma de comercio electrónico basada en Shopify que vende piezas de arte generadas por IA.",
    achievements: [
      "Diseño completo de tienda Shopify",
      "Creación de obras de arte usando herramientas de IA",
      "Automatización de gestión de pedidos"
    ]
  },
  {
    title: "Fundador",
    company: "TheTripAI",
    period: "Sep 2022 - Jul 2023",
    description: "Desarrollo de una plataforma de planificación de viajes impulsada por IA utilizando tecnología GPT.",
    achievements: [
      "Implementación de integración GPT-3 a GPT-4",
      "Diseño de sistema de cuestionarios dinámicos",
      "Creación de algoritmos de planificación de viajes personalizados"
    ]
  },
  {
    title: "Account Executive",
    company: "Revolut",
    period: "Nov 2021 - Ago 2022",
    description: "Lideré iniciativas de gestión de cuentas B2B y desarrollo de negocios en el mercado EEE, centrándome en el crecimiento de la cartera y el éxito del cliente.",
    achievements: [
      "Generación de nuevas oportunidades B2B mediante alcance estratégico",
      "Gestión de operaciones multimillonarias",
      "Optimización de operaciones financieras de clientes",
      "Desarrollo de relaciones sólidas con clientes"
    ]
  }
];

export function ProfessionalExperience() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6" />
        Experiencia Profesional
      </h3>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">{experience.title}</h4>
                <p className="text-muted-foreground">{experience.company}</p>
              </div>
              <Badge variant="secondary" className="mt-2 sm:mt-0">
                {experience.period}
              </Badge>
            </div>
            <p className="mb-4">{experience.description}</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {experience.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
