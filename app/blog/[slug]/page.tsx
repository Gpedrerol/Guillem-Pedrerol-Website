import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

// This would typically come from a CMS or API
const blogPosts = [
  {
    title: 'Accelerate Web Development with Bolt.new',
    date: '2024-11-22',
    tags: ['AI', 'Web Development', 'Full-Stack', 'Deployment'],
    content: `
In the evolving landscape of web development, [**Bolt.new**](https://github.com/stackblitz/bolt.new?utm_source=chatgpt.com) emerges as a transformative tool that integrates AI to simplify the process of building, editing, and deploying full-stack web applications—all within your browser.
    `,
    slug: 'accelerate-web-development-bolt-new',
    coverImage: '/images/blog/bolt-new.jpg'
  },
  {
    title: 'Building AI-Powered Interfaces',
    date: '2024-11-15',
    tags: ['AI', 'UI/UX', 'Development'],
    content: `
Artificial Intelligence is revolutionizing how we interact with software. Learn how to create intuitive, AI-powered interfaces that enhance user experience and streamline workflows.
    `,
    slug: 'building-ai-powered-interfaces',
    coverImage: '/images/blog/ai-interfaces.jpg'
  },
  {
    title: "Getting Started with ChatGPT: A Developer's Guide",
    date: '2024-11-08',
    tags: ['AI', 'ChatGPT', 'Development'],
    content: `
ChatGPT has become an indispensable tool for developers. This guide covers best practices, prompt engineering, and practical examples to help you leverage ChatGPT effectively in your development workflow.
    `,
    slug: 'getting-started-chatgpt-developers-guide',
    coverImage: '/images/blog/chatgpt-guide.jpg'
  }
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getBlogPost(slug: string) {
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) return null;
  return post;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ 
  params,
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-16">
      <div className="container max-w-4xl">
        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-muted-foreground">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
        />
      </div>
    </article>
  );
}
