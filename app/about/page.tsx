'use client';

import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  GraduationCap,
  Languages,
} from 'lucide-react';
import Image from 'next/image';
import { ProfessionalExperience } from '@/components/professional-experience';
import { Education } from '@/components/education';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { translation } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary/60"></div>
              <span className="mx-4 text-sm font-semibold uppercase tracking-wider text-primary/80">
                {translation.about.title}
              </span>
              <div className="h-px w-8 bg-primary/60"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {translation.about.title}
            </h1>
            <p className="text-center text-primary/80">
              {translation.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - About Me and Education */}
            <div className="space-y-12">
              {/* About Me */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">{translation.about.professionalExperience}</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      {translation.about.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        <Languages className="w-4 h-4 mr-1" />
                        {translation.about.badges.languages}
                      </Badge>
                      <Badge variant="secondary">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {translation.about.badges.education}
                      </Badge>
                      <Badge variant="secondary">
                        <Building2 className="w-4 h-4 mr-1" />
                        {translation.about.badges.location}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/guillem Montenegro.jpeg"
                    alt="Guillem Pedrerol"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Education */}
              <Education />
            </div>

            {/* Right Column - Professional Experience */}
            <div>
              <ProfessionalExperience />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
