'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll to section when coming from another page
  React.useEffect(() => {
    if (mounted && pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [pathname, mounted]);

  if (!mounted) {
    return (
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-14 items-center justify-between">
          <div className="font-bold">Guillem Pedrerol</div>
        </nav>
      </header>
    );
  }

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
            href="/aiconsulting"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/aiconsulting'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Consultoría IA
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
            Sobre Mí
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
          <ModeToggle />
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 space-y-4">
              <Link
                href="/aiconsulting"
                className={cn(
                  'block text-sm font-medium transition-colors hover:text-primary',
                  pathname === '/aiconsulting'
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
                onClick={() => setIsOpen(false)}
              >
                Consultoría IA
              </Link>
              <Link
                href="/training"
                className={cn(
                  'block text-sm font-medium transition-colors hover:text-primary',
                  pathname === '/training'
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
                onClick={() => setIsOpen(false)}
              >
                Formación
              </Link>
              <Link
                href="/about"
                className={cn(
                  'block text-sm font-medium transition-colors hover:text-primary',
                  pathname === '/about'
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
                onClick={() => setIsOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link
                href="/blog"
                className={cn(
                  'block text-sm font-medium transition-colors hover:text-primary',
                  pathname === '/blog'
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}