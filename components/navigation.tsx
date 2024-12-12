'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';

const routes = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <Link href="/" className="font-bold text-xl hover:text-primary transition-colors duration-200">
          Guillem Pedrerol
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="nav-link text-base hover:text-primary transition-colors duration-200"
            >
              {route.label}
            </Link>
          ))}
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
                <Link
                  key={route.href}
                  href={route.href}
                  className="nav-link text-base hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <div className="py-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}