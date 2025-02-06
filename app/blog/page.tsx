'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    title: "Implementación de GPT-4 en Empresas",
    description: "Una guía práctica sobre cómo implementar GPT-4 en tu empresa de manera efectiva y segura.",
    date: "2024-02-01",
    category: "IA",
    image: "/images/blog/gpt4-implementation.jpg",
    slug: "implementacion-gpt4-empresas"
  },
  {
    title: "El Futuro del Trabajo con IA",
    description: "Cómo la IA está transformando el lugar de trabajo y qué habilidades serán necesarias en el futuro.",
    date: "2024-01-15",
    category: "Tendencias",
    image: "/images/blog/future-of-work.jpg",
    slug: "futuro-trabajo-ia"
  },
  {
    title: "Automatización de Procesos con IA",
    description: "Descubre cómo automatizar tareas repetitivas y optimizar procesos empresariales utilizando IA.",
    date: "2024-01-01",
    category: "Automatización",
    image: "/images/blog/process-automation.jpg",
    slug: "automatizacion-procesos-ia"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Artículos sobre IA, desarrollo de software y transformación digital
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
