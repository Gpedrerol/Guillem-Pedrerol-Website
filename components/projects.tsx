'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectImages = {
  'AI Art Posters': '/images/aiartposters_project.jpg',
  'TheTripAI': '/images/thetripai_projects.jpg',
  'McNeel Europe Training': '/images/mcneel_projects.jpg'
};

const projectLinks = {
  'AI Art Posters': 'https://aiartposters.store',
  'TheTripAI': 'https://thetripai.com',
  'McNeel Europe Training': 'https://www.rhino3d.com'
};

const projects = [
  {
    title: 'AI Art Posters',
    description: 'Plataforma de e-commerce para la venta de pósters generados por IA. Los usuarios pueden personalizar y comprar diseños únicos.',
    image: projectImages['AI Art Posters'],
    link: projectLinks['AI Art Posters'],
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'OpenAI']
  },
  {
    title: 'TheTripAI',
    description: 'Asistente de viajes basado en IA que ayuda a planificar itinerarios personalizados y descubrir lugares únicos.',
    image: projectImages['TheTripAI'],
    link: projectLinks['TheTripAI'],
    tags: ['React', 'Node.js', 'GPT-4', 'MongoDB']
  },
  {
    title: 'McNeel Europe Training',
    description: 'Plataforma de formación en línea para profesionales del diseño 3D, con cursos especializados en Rhino y Grasshopper.',
    image: projectImages['McNeel Europe Training'],
    link: projectLinks['McNeel Europe Training'],
    tags: ['LMS', 'React', 'Python', 'PostgreSQL']
  }
];

export default function Projects({ className = "" }: { className?: string }) {
  return (
    <section id="projects" className={`scroll-mt-20 py-12 bg-background ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-primary/60"></div>
            <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
              Proyectos
            </span>
            <div className="h-px w-8 bg-primary/60"></div>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-primary/80">
            Explora algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.link || '#'} 
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="block group"
            >
              <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-sm">
                        {tag}
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
  );
}