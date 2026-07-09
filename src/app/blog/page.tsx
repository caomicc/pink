import { getBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { generatePageMetadata, getBlogListSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BlogList } from '@/components/blocks/blog/blog-list';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description:
    'Thoughts, ideas, and explorations on web development, React, Next.js, and frontend engineering.',
  path: '/blog',
  tags: ['blog', 'web development', 'React', 'Next.js', 'TypeScript', 'frontend'],
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main>
      <JsonLd data={getBlogListSchema(posts)} />
      <Breadcrumbs items={[{ label: 'Blog' }]} className="mb-6" />
      <header className="mb-12">
        <p className="mb-3 text-[10px] uppercase font-polished text-primary">
          Notes from the workbench
        </p>
        <h1 className='text-page-title'>Blog</h1>
        <p className="text-lead mt-4">
          Thoughts, ideas, and explorations on web development.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-meta">No posts yet. Check back soon!</p>
      ) : (
        <BlogList posts={posts} />
      )}
    </main>
  );
}
