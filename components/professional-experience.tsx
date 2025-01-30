'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const experiences = [
  {
    title: "AI Implementation Consultant & Corporate Trainer",
    company: "Freelance",
    period: "Oct 2023 - Present",
    description: "Providing tailored AI solutions and consulting services for companies like McNeel Europe, TennisExpress México, and RhinoLands. Delivering structured AI formation programs and implementing automation solutions.",
    achievements: [
      "Developed customized customer service chatbots",
      "Automated SEO content creation",
      "Designed master prompts for brand communication"
    ]
  },
  {
    title: "Co-founder",
    company: "AI Art Posters",
    period: "Sep 2023 - Present",
    description: "Launched and managed a Shopify-based e-commerce platform selling AI-generated art pieces.",
    achievements: [
      "Designed complete Shopify store",
      "Created artworks using AI tools",
      "Automated order management"
    ]
  },
  {
    title: "Founder",
    company: "TheTripAI",
    period: "Sep 2022 - Jul 2023",
    description: "Developed an AI-powered travel planning platform using GPT technology.",
    achievements: [
      "Implemented GPT-3 to GPT-4 integration",
      "Designed dynamic questionnaire system",
      "Created personalized travel planning algorithms"
    ]
  },
  {
    title: "Account Executive",
    company: "Revolut",
    period: "Nov 2021 - Aug 2022",
    description: "Led B2B account management and business development initiatives across the EEA market, focusing on portfolio growth and client success.",
    achievements: [
      "Generated new B2B opportunities through strategic outreach",
      "Managed multimillion-dollar operations",
      "Optimized client financial operations",
      "Developed strong client relationships"
    ]
  }
];

export function ProfessionalExperience() {
  const { translation } = useLanguage();

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6" />
        {translation.experience.title}
      </h3>
      <div className="space-y-6">
        {translation.experience.jobs.map((exp, index) => (
          <Card key={index} className="p-6">
            <div className="mb-4">
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <p className="text-primary">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </div>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.achievements.map((achievement, i) => (
                <Badge key={i} variant="secondary">
                  {achievement}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
