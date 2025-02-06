import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Gestión de Empresas y Tecnología",
    institution: "La Salle Barcelona",
    period: "2016 - 2020",
    details: "Especialización en Economía Digital"
  },
  {
    degree: "Programa de Intercambio",
    institution: "Saint Mary's College of California",
    period: "2018 - 2019",
    details: "Experiencia en Silicon Valley y cultura empresarial emprendedora"
  }
];

export function Education() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <GraduationCap className="h-6 w-6" />
        Educación
      </h3>
      <div className="space-y-6">
        {education.map((item, index) => (
          <Card key={index} className="p-6">
            <h4 className="text-xl font-semibold">{item.degree}</h4>
            <p className="text-muted-foreground">{item.institution}</p>
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <p className="mt-2">{item.details}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
