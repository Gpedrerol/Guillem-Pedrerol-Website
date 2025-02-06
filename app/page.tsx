'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { es } from '@/messages/es';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                {es.hero.title}
              </h1>
              <p className="text-lg text-emerald-600 mb-8">
                {es.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="#empezar">
                    {es.hero.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Link href="#servicios">{es.hero.secondaryCta}</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/images/hero-image.png"
                alt="AI Solutions"
                width={600}
                height={600}
                className="rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50" id="servicios">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-600 tracking-wider mb-4">— {es.services.sectionTitle} —</p>
            <h2 className="text-4xl font-bold mb-4">{es.services.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {es.services.subtitle}
            </p>
          </div>

          <div className="space-y-16">
            {/* Consultoría IA Card */}
            <Card className="p-12 bg-white shadow-sm">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-2xl font-bold">{es.services.consultation.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {es.services.consultation.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">{es.services.consultation.benefits.title}</h4>
                      <ul className="space-y-3">
                        {es.services.consultation.benefits.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">{es.services.consultation.approach.title}</h4>
                      <ul className="space-y-3">
                        {es.services.consultation.approach.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/consultoria-ia">
                        {es.services.consultation.cta.explore} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      <Link href="#contact">{es.services.consultation.cta.schedule}</Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/images/ai-consulting.png"
                    alt="AI Consulting"
                    width={500}
                    height={400}
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </Card>

            {/* Formación Corporativa Card */}
            <Card className="p-12 bg-white shadow-sm">
              <div className="flex flex-col lg:flex-row-reverse gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-2xl font-bold">{es.services.training.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {es.services.training.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">{es.services.training.features.title}</h4>
                      <ul className="space-y-3">
                        {es.services.training.features.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">{es.services.training.methods.title}</h4>
                      <ul className="space-y-3">
                        {es.services.training.methods.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-600" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/formacion">
                        {es.services.training.cta.explore} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      <Link href="#contact">{es.services.training.cta.request}</Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/images/corporate-training.jpg"
                    alt="Corporate Training"
                    width={500}
                    height={400}
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-32" id="casos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-600 tracking-wider mb-4">— {es.clientStories.sectionTitle} —</p>
            <h2 className="text-4xl font-bold mb-4">{es.clientStories.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {es.clientStories.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(es.clientStories.companies).map(([key, company]) => (
              <Card key={key} className="p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-6 h-16">
                    <Image
                      src={`/images/logos/${key}.png`}
                      alt={company.name}
                      width={160}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-600 tracking-wider mb-4">— {es.projects.sectionTitle} —</p>
            <h2 className="text-4xl font-bold mb-4">{es.projects.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {es.projects.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {es.projects.items.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/images/projects/${project.title.toLowerCase().replace(' ', '-')}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32" id="contact">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-600 tracking-wider mb-4">— {es.contact.sectionTitle} —</p>
            <h2 className="text-4xl font-bold mb-4">{es.contact.title}</h2>
            <p className="text-lg text-gray-600">
              {es.contact.subtitle}
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">{es.contact.form.name}</label>
                <input 
                  type="text" 
                  placeholder={es.contact.form.namePlaceholder} 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{es.contact.form.email}</label>
                <input 
                  type="email" 
                  placeholder={es.contact.form.emailPlaceholder} 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{es.contact.form.company}</label>
              <input 
                type="text" 
                placeholder={es.contact.form.companyPlaceholder} 
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{es.contact.form.service}</label>
              <select className="w-full p-3 rounded-lg border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600">
                <option value="">{es.contact.form.servicePlaceholder}</option>
                <option value="consultoria">Consultoría IA</option>
                <option value="formacion">Formación Corporativa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{es.contact.form.message}</label>
              <textarea
                placeholder={es.contact.form.messagePlaceholder}
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              {es.contact.form.submit}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
