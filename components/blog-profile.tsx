'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function BlogProfile() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src="/images/guillem Montenegro.jpeg"
          alt="Guillem Pedrerol"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">Guillem Pedrerol</h2>
      <p className="text-muted-foreground text-sm mb-4 text-center md:text-left">
        AI Implementation Consultant and Corporate Trainer sharing insights about AI, technology, and business transformation. Connect with me!
      </p>
      <div className="flex gap-4">
        <Link
          href="https://github.com/gpedrerol"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://twitter.com/gpedrerol"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com/in/guillempedrerol"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
