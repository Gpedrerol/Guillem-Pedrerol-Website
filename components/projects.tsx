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
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

// Project images mapping with local images
const projectImages = {
  'AI Art Posters': '/images/aiartposters_project.jpg',
  'TheTripAI': '/images/thetripai_projects.jpg',
  'McNeel Europe Training': '/images/mcneel_projects.jpg'
};

// Project links mapping
const projectLinks = {
  'AI Art Posters': 'https://aiartposters.store',
  'TheTripAI': 'https://thetripai.com',
  'McNeel Europe Training': 'https://www.rhino3d.com'
};

interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  const { translation } = useLanguage();

  return (
    <section id="projects" className={cn("scroll-mt-20 py-12 bg-background", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-primary/60"></div>
            <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">{translation.projects.sectionTitle}</span>
            <div className="h-px w-8 bg-primary/60"></div>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            {translation.projects.title}
          </h2>
          <p className="text-lg text-primary/80">
            {translation.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translation.projects.items.map((project, index) => {
            const projectLink = projectLinks[project.title];
            const imageUrl = projectImages[project.title];
            
            return (
              <Link 
                key={index}
                href={projectLink || '#'} 
                target={projectLink ? "_blank" : undefined}
                rel={projectLink ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={imageUrl || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop'}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}