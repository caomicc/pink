import { ArrowUpRight } from 'lucide-react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ProductCardData {
  /** Product name. */
  name: string;
  /** Short blurb describing the download. */
  description: string;
  /** Optional availability label, e.g. "Available soon", "Idea". */
  status?: string;
  /** Optional category label, e.g. "Digital download", "Template". */
  category?: string;
  /** Display price, e.g. "$9", "Free", "Name your price". */
  price?: string;
  /** Cover image URL. Falls back to a gradient placeholder when omitted. */
  image?: string;
  /** Gumroad product / download URL. When omitted the card renders as coming soon. */
  gumroadHref?: string;

  cta?: string;
}

export function ProductCard({ product }: { product: ProductCardData }) {
  const { name, description, status, category, price, gumroadHref, cta } = product;
  const isAvailable = Boolean(gumroadHref);

  return (
    <Card className="group gap-0 overflow-hidden py-0">
      <div className="relative pt-6">
        {category && (
          <Badge className="absolute left-3 top-3" variant="secondary">
            {category}
          </Badge>
        )}
        {status && (
          <Badge className="absolute right-3 top-3" variant="outline">
            {status}
          </Badge>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <h3 className="font-polished text-[20px] leading-tight">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3 border-t p-5">
        <span className="font-polished text-base tabular-nums">{price ?? 'TBA'}</span>

        {isAvailable ? (
          <Button asChild size="sm">
            <a href={gumroadHref} target="_blank" rel="noopener noreferrer">
              {cta ?? 'Get on Gumroad'}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="secondary" disabled>
            Coming soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <Card className={cn('gap-0 overflow-hidden py-0', className)}>
      <AspectRatio ratio={16 / 10}>
        <div className="h-full w-full animate-pulse bg-muted" />
      </AspectRatio>
      <CardContent className="space-y-2 p-5">
        <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
      </CardContent>
    </Card>
  );
}
