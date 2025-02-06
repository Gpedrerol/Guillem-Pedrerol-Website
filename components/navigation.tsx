'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { handleNavigation } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Handle scroll to section when coming from another page
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        handleNavigation(hash.substring(1));
      }
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold">
          Guillem Pedrerol
        </Link>

        {/* Mobile menu button */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/services"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/services'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Servicios
          </Link>
          <Link
            href="/aiconsulting"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/aiconsulting'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            AI Consulting
          </Link>
          <Link
            href="/training"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/training'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Formación
          </Link>
          <Link
            href="/about"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/about'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Sobre mí
          </Link>
          <Link
            href="/blog"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/blog'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/contact'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Contacto
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-14 bg-background md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/services"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/aiconsulting"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                AI Consulting
              </Link>
              <Link
                href="/training"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Formación
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <ModeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}