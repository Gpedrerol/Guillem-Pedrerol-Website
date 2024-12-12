'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Art Posters',
    description: 'E-commerce platform selling AI-generated art pieces using Stable Diffusion and Midjourney.',
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=2940&auto=format&fit=crop',
    tags: ['Shopify', 'AI Art', 'E-commerce'],
    link: '#'
  },
  {
    title: 'TheTripAI',
    description: 'AI-powered travel planning platform using GPT technology for personalized itineraries.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2935&auto=format&fit=crop',
    tags: ['GPT-4', 'Travel Tech', 'AI'],
    link: '#'
  },
  {
    title: 'McNeel Europe Training',
    description: 'Comprehensive AI training program for McNeel Europe employees.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop',
    tags: ['Corporate Training', 'AI Implementation', 'Education'],
    link: '#'
  }
];

export function Projects() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}