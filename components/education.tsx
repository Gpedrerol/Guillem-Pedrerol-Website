import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Management of Business and Technology",
    institution: "La Salle Barcelona",
    period: "2016 - 2020",
    details: "Concentration in Digital Economy"
  },
  {
    degree: "Exchange Program",
    institution: "Saint Mary's College of California",
    period: "2018 - 2019",
    details: "Silicon Valley experience and entrepreneurial business culture"
  }
];

export function Education() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <GraduationCap className="h-6 w-6" />
        Education
      </h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="p-6">
            <h4 className="text-xl font-semibold">{edu.degree}</h4>
            <p className="text-primary">{edu.institution}</p>
            <p className="text-sm text-muted-foreground">{edu.period}</p>
            <p className="text-muted-foreground mt-2">{edu.details}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
