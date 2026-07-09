import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/blog';

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="overflow-hidden gap-4 flex flex-col list-none divide-y">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="pb-4"
        >
          <Link
            href={`/blog/${post.slug}`}
            className={`flex gap-4 px-4 py-8 transition-colors rounded-lg hover:bg-muted/50 sm:px-6`}
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={112}
                height={80}
                className="hidden h-20 w-28 shrink-0 rounded-md object-cover sm:block"
              />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {post.tags?.[0] && (
                  <Badge variant="secondary" className="text-xs">
                    {post.tags[0]}
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-xs text-muted-foreground">· {post.readingTime}</span>
              </div>
              <h3 className="mt-1 leading-tight">{post.title}</h3>
              {post.description && (
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.description}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
