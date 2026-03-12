import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { generatePageMetadata, getBlogPostSchema, SITE_CONFIG } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { Breadcrumbs } from '@/components/breadcrumbs';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      robots: { index: false, follow: false },
    };
  }

  return generatePageMetadata({
    title: post.title,
    description: post.description || `Read ${post.title} on ${SITE_CONFIG.shortName}'s blog.`,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    tags: post.tags,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <main>
      <JsonLd data={getBlogPostSchema(post)} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
        className="mb-6"
      />
      <Link
        href="/blog"
        className="text-meta group mb-8 inline-flex items-center gap-2 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to blog
      </Link>

      <header className="mb-12">
        <div className="text-meta flex items-center gap-2">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-page-title mt-4">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lead mt-4">{post.description}</p>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-caption rounded-full bg-muted px-3 py-1 normal-case"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose">
        <MDXRemote source={post.content} components={components} />
      </article>
    </main>
  );
}
