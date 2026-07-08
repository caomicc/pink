import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { ProductCardGrid, type ProductCardData } from '@/components/blocks/product-cards/product-card-grid';

export const metadata: Metadata = generatePageMetadata({
  title: 'Products',
  description:
    'A growing inventory of digital products, resources, and landing pages from Cammy.',
  path: '/products',
  tags: ['products', 'gumroad', 'digital products', 'templates', 'resources'],
});

const products: ProductCardData[] = [
  {
    name: 'PolishedDex Database Setup',
    description:
      'An automated, source-driven database for ROM hack creators who want structured data instead of maintaining a wiki by hand.',
    status: 'In progress',
    category: 'Service',
    price: 'TBA',
  },
  {
    name: 'Frontend Launch Checklist',
    description:
      'A practical checklist for shipping small Next.js sites with the pieces that are easy to forget: SEO, analytics, accessibility, performance, and launch polish.',
    status: 'Available soon',
    category: 'Digital download',
    price: '$9',
    gumroadHref: 'https://gumroad.com/',
  },
  {
    name: 'Indie Site Starter Kit',
    description:
      'A tiny personal-site starter focused on readable content, clear navigation, and a structure that can grow into blogs, products, and project pages.',
    status: 'Idea',
    category: 'Template',
    price: 'TBA',
    gumroadHref: 'https://gumroad.com/',
  },
  {
    name: 'ROM Hack Docs Kit',
    description:
      'Notes, templates, and examples for turning source data, changelogs, and community knowledge into documentation players can actually use.',
    status: 'Idea',
    category: 'Guide',
    price: 'TBA',
    gumroadHref: 'https://gumroad.com/',
  },
];

export default function ProductsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Products' }]} className="mb-6" />

      <header className="mb-12">
        <p className="mb-3 text-[10px] uppercase font-polished text-primary">
          Gumroad inventory
        </p>
        <h1 className="text-page-title">Products</h1>
        <p className="text-lead mt-4">
          A growing list of small products, resources, and landing pages I am
          packaging from the things I already build.
        </p>
      </header>

      <section aria-labelledby="product-inventory">
        <h2 id="product-inventory" className="sr-only">
          Product inventory
        </h2>
        <ProductCardGrid products={products} />
      </section>
    </main>
  );
}
