import { getBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | LamLamLam.',
  description: 'Thoughts, ideas, and explorations.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="">
      <header className="mb-12">
        <h1 className="">Blog</h1>
        <p className="text-lead mt-4">
          Thoughts, ideas, and explorations.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-meta">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">

          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative rounded-[18px] border border-border bg-card p-6 transition-colors hover:bg-accent"
              style={{
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04)'
              }}
            >
              <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">Read {post.title}</span>
              </Link>

              <div className="flex items-center gap-2">
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

              <h2 className="mt-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              {post.description && (
                <p className="mt-2 line-clamp-2">
                  {post.description}
                </p>
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
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
