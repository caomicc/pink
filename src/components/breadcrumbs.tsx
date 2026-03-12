import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo';
import { JsonLd } from './json-ld';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation component with JSON-LD structured data
 * Improves SEO and user navigation
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Build schema items with full URLs
  const schemaItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${SITE_CONFIG.url}${item.href}` : SITE_CONFIG.url,
    })),
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center gap-1 text-sm text-muted-foreground', className)}
      >
        <Link
          href="/"
          className="flex items-center hover:text-foreground transition-colors"
          aria-label="Home"
        >
          <Home className="h-4 w-4" />
        </Link>
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
