'use client';

import { Card } from '@/components/ui/card';
import { Users2, Building, Trophy, Globe2 } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    label: 'Clients Served',
    value: 50,
    icon: Users2,
    suffix: '+'
  },
  {
    label: 'Training Sessions',
    value: 100,
    icon: Building,
    suffix: '+'
  },
  {
    label: 'Success Rate',
    value: 98,
    icon: Trophy,
    suffix: '%'
  },
  {
    label: 'Countries Reached',
    value: 10,
    icon: Globe2,
    suffix: '+'
  }
];

export function Stats() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 md:p-6 text-center card">
              <div className="relative">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 md:mb-4 text-primary transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-primary">
                <CountUp end={stat.value} duration={2.5} />
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}