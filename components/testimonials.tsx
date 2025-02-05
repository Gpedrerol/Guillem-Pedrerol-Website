'use client';

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    quote: "We took a course on integrating AI into our daily workflow with Guillem, and it was amazing. His passion for teaching made it easy and exciting to learn about AI. We gained valuable insights into prompt engineering, enabling us to optimize AI tools effectively and enhance our productivity.",
    author: "Elham Ghabouli",
    position: "Product Manager @ ASUNI"
  },
  {
    quote: "La formación me permitió descubrir el enorme potencial de ChatGPT como herramienta para optimizar la productividad en el entorno laboral. El enfoque práctico, con ejemplos concretos aplicables no solo a mi área de programación, sino también a otros departamentos como marketing, ventas y atención al cliente.",
    author: "Adán Guillén Alfaro",
    position: "Software Developer at ASUNI & McNeel Europe"
  },
  {
    quote: "A highly professional course offering detailed insights into the capabilities of LLM systems and practical guidance on applying and adapting them to daily work tasks. I highly recommend Guillem as an instructor.",
    author: "Verena Vogler",
    position: "R&D at McNeel EU, Dr.-Ing."
  },
  {
    quote: "La formación sobre IA dada por Guillem en nuestra empresa nos ha permitido descubrir un amplio abanico de tareas en las que las diversas utilidades de IA mostradas nos pueden ayudar a simplificar tareas repetitivas y concentrarnos en las que realmente dan valor a nuestro trabajo.",
    author: "Fran Montero",
    position: "CTO Asuni"
  },
  {
    quote: "Su forma clara y accesible de explicar conceptos complejos, junto con la variedad de los temas tratados, hicieron que la experiencia fuera excepcional. He podido aplicar herramientas como ChatGPT para agilizar tareas repetitivas en mi trabajo.",
    author: "Guillermo Varela",
    position: "Tech Support and Rhino Trainer at McNeel Europe"
  },
  {
    quote: "Como administrador de sistemas, su enfoque práctico y su profundo conocimiento nos permitieron entender y aplicar esta tecnología de manera efectiva en nuestros procesos. Lo recomiendo ampliamente por su experiencia y su claridad al enseñar.",
    author: "Isaac Lage",
    position: "IT Support at ASUNI and McNeel Europe"
  },
  {
    quote: "Guillem es un gran comunicador y transmite entusiasmo en la materia que enseña. El curso cubrió aspectos muy variados para que los asistentes pudiéramos tener un primer contacto con la AI y después pudiéramos adaptarlos a nuestros diferentes puestos.",
    author: "Delia Robalo",
    position: "Sales & Marketing at McNeel Europe"
  }
];

export function Testimonials({ className }: TestimonialsProps) {
  const { translation } = useLanguage();

  return (
    <section className={cn("bg-muted/30", className)}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-primary/60"></div>
            <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
              {translation.testimonials.sectionTitle}
            </span>
            <div className="h-px w-8 bg-primary/60"></div>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            {translation.testimonials.title}
          </h2>
          <p className="text-lg text-primary/80">
            {translation.testimonials.subtitle}
          </p>
        </div>

        <div className="relative">
          <Marquee className="py-12" pauseOnHover direction="left" speed="normal">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="w-[400px] p-6 mx-4 bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}