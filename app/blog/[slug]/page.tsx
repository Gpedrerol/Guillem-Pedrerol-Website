import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getUnsplashImage } from '@/utils/unsplash';
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

## AI-Driven Development

**Bolt.new** utilizes advanced AI models to interpret natural language prompts, enabling rapid generation of code structures. This feature allows developers to create **complex applications**, including multi-page apps, backend services, and database integrations, without the need for extensive manual coding. [Learn more about Bolt.new's capabilities](https://www.banani.co/blog/bolt-new-ai-review-and-alternatives?utm_source=chatgpt.com).

## Seamless In-Browser Environment

Leveraging **StackBlitz's WebContainers** technology, Bolt.new offers a comprehensive development environment directly in your browser. This setup supports the installation and execution of **npm tools and libraries**, such as Vite and Next.js, and facilitates the running of Node.js servers. The in-browser environment ensures a consistent and secure development experience, eliminating the complexities of local setup.

## Effortless Deployment

Deploying applications is streamlined with Bolt.new's integration with platforms like **Netlify** and **Cloudflare**. With a single click, developers can take their applications live, bypassing the traditional hurdles of credential configuration and server setup.

## Error Detection and Resolution

The platform's **AI assistant** actively monitors for code issues, offering suggestions or implementing fixes automatically. This proactive approach enhances code quality and reduces the time spent troubleshooting, allowing developers to focus on building features.

## Getting Started with Bolt.new

To experience the capabilities of Bolt.new:

1. **Visit the Platform**: Navigate to [bolt.new](https://github.com/stackblitz/bolt.new?utm_source=chatgpt.com) and sign up using your StackBlitz account.
2. **Initiate a Project**: Use the intuitive interface to start a new project by providing a natural language prompt describing your desired application.
3. **Customize and Deploy**: Edit the generated code as needed and deploy your application with a single click.

By integrating **AI with a robust in-browser development environment**, Bolt.new redefines the web development workflow, making it more efficient and accessible. Whether you're a seasoned developer or new to the field, Bolt.new offers a powerful platform to bring your web application ideas to life.
  `,
    imageQuery: 'modern web development code screen',
    slug: 'accelerate-web-development-bolt-new'
  },
  {
    title: 'Building AI-Powered User Interfaces',
    date: '2024-03-12',
    tags: ['AI', 'UI/UX', 'Frontend', 'Design'],
    content: `
Creating effective user interfaces for AI applications requires a unique approach. Let's explore key techniques and best practices for building intuitive and responsive AI-powered interfaces.

## Streaming Responses

One of the most important aspects of AI interfaces is handling **streaming responses** effectively. Here's how to implement a clean streaming solution:

\`\`\`javascript
async function* streamResponse(prompt) {
  const response = await fetch('/api/ai/stream', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
    headers: { 'Content-Type': 'application/json' },
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    yield decoder.decode(value);
  }
}
\`\`\`

## Progressive Loading

**Visual feedback** is crucial for AI interfaces. Users should always know when the system is thinking or processing. Implement smooth loading states with CSS animations:

\`\`\`css
.ai-response {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

## Error Handling

**Graceful error handling** is essential for maintaining a good user experience. Here's a pattern for handling AI responses with proper error states:

\`\`\`javascript
async function handleAIRequest(prompt) {
  try {
    setLoading(true);
    const response = await getAIResponse(prompt);
    setResult(response);
  } catch (error) {
    setError('AI is taking a break. Please try again.');
  } finally {
    setLoading(false);
  }
}
\`\`\`

## Best Practices for AI UIs

When building AI-powered interfaces, consider these **essential principles**:

1. **Immediate Feedback**: Always acknowledge user input instantly
2. **Progressive Disclosure**: Show AI capabilities gradually
3. **Clear Expectations**: Communicate processing time and limitations
4. **Fallback States**: Provide alternatives when AI services are unavailable

## Designing for Trust

Building user trust in AI interfaces requires careful attention to these **key elements**:

- **Transparency**: Explain how AI decisions are made
- **Control**: Give users ways to adjust or override AI behavior
- **Consistency**: Maintain predictable interaction patterns
- **Recovery**: Make it easy to undo or modify AI actions

## Performance Optimization

Keep your AI interfaces snappy with these **optimization techniques**:

- Implement request debouncing for real-time AI suggestions
- Cache common AI responses for faster retrieval
- Use progressive loading for large AI-generated content
- Optimize the payload size of AI requests and responses

## Accessibility Considerations

Make your AI interfaces accessible to all users by:

- Providing clear status announcements for screen readers
- Ensuring keyboard navigation for all AI interactions
- Maintaining sufficient color contrast for AI-generated content
- Supporting different input methods for AI interactions

Remember that building effective AI interfaces is an iterative process. Continuously gather user feedback and refine your implementation based on real-world usage patterns.
  `,
    imageQuery: 'modern user interface artificial intelligence design',
    slug: 'building-ai-powered-interfaces'
  },
  {
    title: 'Getting Started with ChatGPT: A Developer\'s Guide',
    date: '2024-03-14',
    tags: ['AI', 'ChatGPT', 'API', 'Tutorial'],
    content: `
In today's rapidly evolving tech landscape, **ChatGPT** has emerged as a game-changing tool for developers. This guide will walk you through integrating ChatGPT into your applications and harnessing its powerful capabilities for enhanced user experiences.

## Why Choose ChatGPT?

ChatGPT stands out in the AI landscape with several **powerful features** that make it invaluable for developers:

- **Natural Language Processing**: Sophisticated understanding and generation of human-like text
- **Versatile API**: Seamless integration capabilities with any application stack
- **Customizable Responses**: Fine-tune outputs to match your specific use cases
- **Multi-language Support**: Built-in support for numerous programming and human languages

## Setting Up the ChatGPT API

Getting started with the ChatGPT API is straightforward. Here's a **basic implementation**:

\`\`\`javascript
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getChatGPTResponse(prompt) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  
  return completion.data.choices[0].message.content;
}
\`\`\`

## Key Concepts for Effective Integration

### 1. Crafting Effective Prompts

The quality of your results heavily depends on how well you structure your prompts. Here's an **example of a well-structured prompt**:

\`\`\`javascript
const prompt = \`
Generate a JavaScript function that:
1. Takes an array as input
2. Sorts it in ascending order
3. Returns the sorted array
\`;
\`\`\`

### 2. Robust Response Handling

Always implement **proper error handling** to ensure your application remains stable:

\`\`\`javascript
try {
  const response = await getChatGPTResponse(prompt);
  console.log(response);
} catch (error) {
  console.error('Error:', error.message);
}
\`\`\`

### 3. Best Practices for Implementation

When integrating ChatGPT into your applications, consider these **essential practices**:

- **Rate Limiting**: Implement proper request throttling
- **Error Recovery**: Design fallback mechanisms for API disruptions
- **Response Validation**: Always validate and sanitize AI-generated content
- **Cost Management**: Monitor and optimize your API usage

## Security Considerations

When working with the ChatGPT API, always follow these **security best practices**:

1. **Secure API Keys**: Never expose your API keys in client-side code
2. **Input Validation**: Sanitize all user inputs before sending to the API
3. **Output Filtering**: Implement content filtering for generated responses
4. **Access Control**: Set up proper authentication for API access

## Optimizing Performance

To get the best results from ChatGPT, focus on these **optimization strategies**:

- Cache common responses to reduce API calls
- Implement request batching for bulk operations
- Use streaming responses for real-time applications
- Monitor and adjust temperature and max tokens parameters

By following this guide, you'll be well-equipped to integrate ChatGPT into your applications effectively. Remember to stay updated with OpenAI's documentation as the API evolves and new features become available.
  `,
    imageQuery: 'artificial intelligence computer code',
    slug: 'getting-started-chatgpt-developers-guide'
  }
];

export async function generateStaticParams() {
  return [
    { slug: 'accelerate-web-development-bolt-new' },
    { slug: 'building-ai-powered-interfaces' },
    { slug: 'getting-started-chatgpt-developers-guide' }
  ];
}

async function getBlogPost(slug: string) {
  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) return null;

  const photo = await getUnsplashImage(post.imageQuery, slug);
  return {
    ...post,
    coverImage: photo?.url || '',
    unsplashCredit: photo ? {
      name: photo.authorName,
      username: photo.authorUsername
    } : null
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Guillem Pedrerol',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Guillem Pedrerol`,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background py-10">
      <div className="container max-w-4xl">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {post.unsplashCredit && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                Photo by{' '}
                <a
                  href={`https://unsplash.com/@${post.unsplashCredit.username}?utm_source=guillempedrerol&utm_medium=referral`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {post.unsplashCredit.name}
                </a>
                {' '}on{' '}
                <a
                  href="https://unsplash.com/?utm_source=guillempedrerol&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Unsplash
                </a>
              </div>
            )}
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <time className="text-sm">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span>•</span>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: md.render(post.content)
          }}
        />
      </div>
    </article>
  );
}
