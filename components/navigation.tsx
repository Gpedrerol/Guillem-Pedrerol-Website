'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, Language } from '@/utils/i18n';
import { handleNavigation } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage, translation } = useLanguage();
  const pathname = usePathname();

  // Handle scroll to section when coming from another page
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === '/') {
      const sectionId = hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [pathname]);

  const routes = [
    { href: '#services', label: translation.navigation.services },
    { href: '#about', label: translation.navigation.about },
    { href: '/aiconsulting', label: translation.navigation.aiConsulting },
    { href: '/blog', label: translation.navigation.blog },
    { href: '#contact', label: translation.navigation.contact },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    handleNavigation(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <Link href="/" className="font-bold text-xl hover:text-primary transition-colors duration-200">
          Guillem Pedrerol
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Button key={route.href} variant="ghost" asChild className="hover:bg-primary/10">
              <a
                href={route.href}
                className="text-base text-foreground hover:text-primary transition-colors duration-200"
                onClick={(e) => handleClick(e, route.href)}
              >
                {route.label}
              </a>
            </Button>
          ))}
          <div className="flex items-center gap-2">
            {Object.entries(languages).map(([code, name]) => (
              <Button
                key={code}
                variant={language === code ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage(code as Language)}
                className={cn(
                  "px-2",
                  language !== code && "hover:bg-primary/10 hover:text-primary"
                )}
              >
                {name}
              </Button>
            ))}
          </div>
          <ModeToggle />
        </nav>

        <Button
          variant="ghost"
          className="md:hidden hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b md:hidden">
            <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
              {routes.map((route) => (
                <Button key={route.href} variant="ghost" asChild className="hover:bg-primary/10">
                  <a
                    href={route.href}
                    className="text-base text-foreground hover:text-primary transition-colors duration-200"
                    onClick={(e) => handleClick(e, route.href)}
                  >
                    {route.label}
                  </a>
                </Button>
              ))}
              <div className="flex items-center gap-2">
                {Object.entries(languages).map(([code, name]) => (
                  <Button
                    key={code}
                    variant={language === code ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage(code as Language)}
                    className={cn(
                      "px-2",
                      language !== code && "hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}