import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Guillem Pedrerol</h3>
            <p className="text-sm text-muted-foreground">
              AI Implementation Consultant & Corporate Trainer based in Madrid, Spain.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          {new Date().getFullYear()} Guillem Pedrerol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}