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

// Project images mapping with Unsplash images
const projectImages = {
  'AI Art Posters': 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2940&auto=format&fit=crop',
  'TheTripAI': 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2931&auto=format&fit=crop',
  'McNeel Europe Training': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop'
};

// Project links mapping
const projectLinks = {
  'AI Art Posters': 'https://aiartposters.store',
  'TheTripAI': 'https://thetripai.com',
  'McNeel Europe Training': 'https://www.rhino3d.com'
};

export function Projects() {
  const { translation } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-20 py-24 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-primary/60"></div>
            <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">Featured Work</span>
            <div className="h-px w-8 bg-primary/60"></div>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {translation.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we've helped businesses transform their operations with AI solutions and training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translation.projects.items.map((project, index) => {
            const projectLink = projectLinks[project.title];
            const imageUrl = projectImages[project.title];
            
            return (
              <Card key={index} className="group overflow-hidden border transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageUrl || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="group/button">
                    <Link 
                      href={projectLink || '#'} 
                      target={projectLink ? "_blank" : undefined}
                      rel={projectLink ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2"
                    >
                      {projectLink ? 'View Project' : 'Coming Soon'}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}