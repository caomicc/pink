import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contentful Integration',
  description: 'Contentful CMS integration examples and projects.',
  path: '/contentful',
  noIndex: true, // Hide from search since it's a placeholder
});

export default function ContentfulLandingPage() {
  return (
    <div className="">
      <Breadcrumbs items={[{ label: 'Contentful' }]} className="mb-6" />
      Buh - will add more soon
    </div>
  );
}
