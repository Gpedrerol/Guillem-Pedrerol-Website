'use client';

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    quote: "Tomamos un curso sobre la integración de IA en nuestro flujo de trabajo diario con Guillem, y fue increíble. Su pasión por la enseñanza hizo que fuera fácil y emocionante aprender sobre IA. Obtuvimos valiosos conocimientos sobre ingeniería de prompts, permitiéndonos optimizar las herramientas de IA de manera efectiva y mejorar nuestra productividad.",
    author: "Elham Ghabouli",
    position: "Product Manager @ ASUNI"
  },
  {
    quote: "La formación me permitió descubrir el enorme potencial de ChatGPT como herramienta para optimizar la productividad en el entorno laboral. El enfoque práctico, con ejemplos concretos aplicables no solo a mi área de programación, sino también a otros departamentos como marketing, ventas y atención al cliente.",
    author: "Adán Guillén Alfaro",
    position: "Software Developer en ASUNI & McNeel Europe"
  },
  {
    quote: "Un curso altamente profesional que ofrece información detallada sobre las capacidades de los sistemas LLM y guía práctica sobre cómo aplicarlos y adaptarlos a las tareas diarias de trabajo. Recomiendo altamente a Guillem como instructor.",
    author: "Verena Vogler",
    position: "I+D en McNeel EU, Dr.-Ing."
  },
  {
    quote: "La formación sobre IA impartida por Guillem fue muy útil para entender el potencial de estas herramientas en nuestro día a día. Su experiencia y conocimiento del tema hizo que fuera muy fácil de seguir y aplicar.",
    author: "Carlos Pérez",
    position: "Director Técnico @ PL Bienes Raíces"
  }
];

export default function Testimonials({ className = "" }: { className?: string }) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Lo que dicen mis clientes
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Descubre cómo he ayudado a otros a implementar soluciones de IA y mejorar sus procesos
            </p>
          </div>
          <div className="mt-16 space-y-4">
            <Marquee className="py-4" pauseOnHover>
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="p-6 mr-6 w-[30rem] flex-shrink-0">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-sm sm:text-base leading-normal mb-4">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}