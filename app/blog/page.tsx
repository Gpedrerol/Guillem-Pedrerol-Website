'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPost } from '@/types/blog';
import { BlogProfile } from '@/components/blog-profile';
import { getUnsplashImage } from '@/utils/unsplash';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Temporary blog posts data with Unsplash queries
const blogPosts: (BlogPost & { imageQuery: string })[] = [
  {
    id: '1',
    title: 'Accelerate Web Development with Bolt.new',
    excerpt: 'Discover how Bolt.new leverages AI to streamline the creation, editing, and deployment of full-stack web applications directly in your browser.',
    content: '',
    date: '2023-11-15',
    author: 'Guillem Pedrerol',
    slug: 'accelerate-web-development-bolt-new',
    imageQuery: 'modern web development code screen',
    coverImage: '',
    unsplashCredit: null,
    tags: ['AI', 'Web Development', 'Full-Stack', 'Deployment']
  },
  {
    id: '2',
    title: 'Getting Started with ChatGPT: A Developer\'s Guide',
    excerpt: 'Learn how to leverage ChatGPT\'s API to build powerful AI-powered applications and enhance your development workflow.',
    content: '',
    date: '2023-03-20',
    author: 'Guillem Pedrerol',
    slug: 'getting-started-chatgpt-developers-guide',
    imageQuery: 'artificial intelligence computer code',
    coverImage: '',
    unsplashCredit: null,
    tags: ['AI', 'ChatGPT', 'API', 'Tutorial']
  },
  {
    id: '3',
    title: 'Building AI-Powered User Interfaces',
    excerpt: 'Explore modern techniques for creating intuitive and responsive AI-powered user interfaces that enhance user experience.',
    content: '',
    date: '2023-03-15',
    author: 'Guillem Pedrerol',
    slug: 'building-ai-powered-interfaces',
    imageQuery: 'modern user interface artificial intelligence design',
    coverImage: '',
    unsplashCredit: null,
    tags: ['AI', 'UI/UX', 'Frontend', 'Design']
  }
];

export default function BlogPage() {
  const { translation } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedPosts = await Promise.all(
        posts.map(async (post) => {
          const photo = await getUnsplashImage(post.imageQuery, post.slug);
          if (photo) {
            return {
              ...post,
              coverImage: photo.url,
              unsplashCredit: {
                name: photo.authorName,
                username: photo.authorUsername
              }
            };
          }
          return post;
        })
      );
      setPosts(updatedPosts);
    };

    fetchImages();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog</h1>
          <div className="flex items-center gap-6">
            <Input
              type="search"
              placeholder="Search posts..."
              className="w-64 bg-muted/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <nav className="flex gap-4">
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Articles
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <aside className="hidden lg:block">
            <BlogProfile />
          </aside>

          <main className="space-y-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="flex gap-6 items-start">
                  <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-md">
                    {post.coverImage && (
                      <>
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                        {post.unsplashCredit && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Photo by{' '}
                            <a
                              href={`https://unsplash.com/@${post.unsplashCredit.username}?utm_source=guillempedrerol&utm_medium=referral`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {post.unsplashCredit.name}
                            </a>
                            {' '}on{' '}
                            <a
                              href="https://unsplash.com/?utm_source=guillempedrerol&utm_medium=referral"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Unsplash
                            </a>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="flex-1">
                    <div className="flex gap-2 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric',
                        month: 'long'
                      })}</time>
                      <span>•</span>
                      <span className="text-primary hover:underline">Read more →</span>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
