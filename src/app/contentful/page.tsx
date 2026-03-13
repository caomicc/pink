import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contentful Integration',
  description: 'Enterprise-grade Contentful CMS integration experience.',
  path: '/contentful',
  noIndex: true,
});

export default function ContentfulLandingPage() {
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs items={[{ label: 'Contentful' }]} className="mb-2" />

      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Contentful Integration</h1>
        <p className="text-muted-foreground">
          Enterprise CMS architecture for a global HR technology platform.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Project Overview</h2>
        <p>
          Led the front-end architecture and Contentful integration for an enterprise
          web platform serving a global workforce solutions company. The project
          operates within a highly secure environment with restricted access through
          VPN, private repositories, and enterprise security protocols.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Technical Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            <span className="text-foreground font-medium">Content Architecture</span> —
            Designed a modular content model with 30+ content types including blocks,
            grids, accordion sliders, and rich text components
          </li>
          <li>
            <span className="text-foreground font-medium">Multi-App Platform</span> —
            Shared Contentful space powering multiple Next.js applications within a
            Turborepo monorepo
          </li>
          <li>
            <span className="text-foreground font-medium">Type Safety</span> —
            Custom build scripts generating TypeScript types from Contentful's content
            model for full type safety across the codebase
          </li>
          <li>
            <span className="text-foreground font-medium">Careers Portal</span> —
            Tab-based careers section with team pages, location-specific benefits,
            and culture content managed entirely through Contentful
          </li>
          <li>
            <span className="text-foreground font-medium">Component System</span> —
            Flexible two-column blocks with theme variants, responsive layouts, and
            mobile-specific configuration options
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Content Model Design</h2>
        <p>
          The content model enables non-technical content managers to build complex,
          branded pages without developer intervention. Key patterns include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Composable page structures with reusable content blocks</li>
          <li>Reference-based linking for content reuse across pages</li>
          <li>Localized fields supporting international content delivery</li>
          <li>Image components with stylistic controls (rounded corners, aspect ratios, captions)</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Due to enterprise security requirements, source code and
          live deployments are not publicly accessible. This overview represents the
          architectural approach and technical scope of the integration.
        </p>
      </section>
    </div>
  );
}
