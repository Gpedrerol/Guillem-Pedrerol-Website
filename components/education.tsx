import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { translation } = useLanguage();
  
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <GraduationCap className="h-6 w-6" />
        {translation.about.education.title}
      </h3>
      <div className="space-y-6">
        <Card className="p-6">
          <h4 className="text-xl font-semibold">{translation.about.education.degree.title}</h4>
          <p className="text-primary">{translation.about.education.degree.institution}</p>
          <p className="text-sm text-muted-foreground">{translation.about.education.degree.period}</p>
          <p className="text-muted-foreground mt-2">{translation.about.education.degree.details}</p>
        </Card>
        <Card className="p-6">
          <h4 className="text-xl font-semibold">{translation.about.education.exchange.title}</h4>
          <p className="text-primary">{translation.about.education.exchange.institution}</p>
          <p className="text-sm text-muted-foreground">{translation.about.education.exchange.period}</p>
          <p className="text-muted-foreground mt-2">{translation.about.education.exchange.details}</p>
        </Card>
      </div>
    </div>
  );
}
