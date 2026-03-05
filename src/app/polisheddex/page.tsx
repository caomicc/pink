import { ArrowUpRight, Check, Clock, Database, RefreshCw, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    description: 'Perfect for indie ROM hacks launching their first database',
    pageviews: 'Up to 10k pageviews',
    features: [
      'Complete Pokédex database',
      'Moves, items & location data',
      'Map & sprite extraction',
      'Mobile-optimized design',
      'Subdomain hosting included',
      'Email support',
    ],
    cta: 'Start Free Trial',
    href: '#contact',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$39',
    period: '/month',
    description: 'For ROM hacks with growing Discord communities',
    pageviews: 'Up to 50k pageviews',
    features: [
      'Everything in Starter',
      'Custom brand colors & themes',
      'Trainer battle database',
      'CMS access for content editing',
      'Priority support (24hr response)',
    ],
    cta: 'Start Free Trial',
    href: '#contact',
    highlighted: true,
  },
  {
    name: 'Popular',
    price: '$79',
    period: '/month',
    description: 'For viral ROM hacks with 10k+ community members',
    pageviews: 'Up to 300k pageviews',
    features: [
      'Everything in Growth',
      'Custom ROM feature support',
      'Game-specific calculators',
      'Strategy guides & walkthroughs',
      'Dedicated support channel',
    ],
    cta: 'Start Free Trial',
    href: '#contact',
    highlighted: false,
  },
];

const features = [
  {
    icon: Database,
    title: 'Automated Extraction',
    description:
      'Pokémon, moves, items, maps, sprites - extracted directly from your ROM source. No spreadsheets required.',
  },
  {
    icon: RefreshCw,
    title: 'On-Demand Updates',
    description:
      'Push a commit and let us know. We pull your latest changes and your database reflects the update.',
  },
  {
    icon: Zap,
    title: 'Mobile Optimized',
    description:
      'Built for your player base. Fast, responsive design that works on any device - phone, tablet, or desktop.',
  },
];

const trustSignals = [
  { icon: Users, stat: '330k', label: 'Monthly Pageviews' },
  { icon: Clock, stat: '100+', label: 'Hours Saved Per Month' },
  { icon: Shield, stat: '99.9%', label: 'Data Accuracy' },
];

export default function PolishedDexLanding() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8 sm:py-16">
      {/* Hero */}
      <section className="mb-16 text-center">
        <p className="mb-4 text-[10px] uppercase font-polished text-primary">
          The #1 Database Solution for ROM Hacks
        </p>
        <h1 className="h1 text-px-40 font-polished leading-tight mb-4 text-balance">
          Your ROM Hack Deserves a Real Database
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Stop maintaining outdated wikis. PolishedDex extracts Pokémon stats,
          moves, items, maps, and sprites directly from your source code - so your players always
          have accurate information.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#pricing">See Plans & Pricing</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://polisheddex.app" target="_blank">
              Live Demo <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 border-t pt-8">
          {trustSignals.map((signal) => (
            <div key={signal.label} className="text-center">
              <signal.icon className="mx-auto mb-2 size-5 text-muted-foreground" />
              <p className="text-2xl font-bold font-polished">{signal.stat}</p>
              <p className="text-xs text-muted-foreground">{signal.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="mb-16">
        <div className="rounded-lg border bg-card p-6 sm:p-8">
          <h2 className="h2 font-polished">Wikis Are Killing Your Community</h2>
          <p className="mb-6 text-muted-foreground">
            Every balance patch means hours updating wiki pages. Miss one stat change?
            Players flood your Discord asking why Charizard&apos;s base speed is wrong.
            Outdated information destroys trust and drives players away.
          </p>
          <h2 className="h2 font-polished">There&apos;s a Better Way</h2>
          <p className="text-muted-foreground">
            PolishedDex extracts data directly from your ROM source code. Push changes
            to GitHub, ping us, and your database updates. <strong>Programatically accurate data,
              minimal maintenance.</strong> Spend time building your ROM hack - not updating wikis.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="h2 text-center mb-2 font-polished">How PolishedDex Works</h2>
        <p className="mb-8 text-center text-muted-foreground">
          We handle the extraction. You focus on your ROM.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-6 text-center"
            >
              <feature.icon className="mx-auto mb-4 size-8 text-primary" />
              <h3 className="font-polished text-[15px]! mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-16 scroll-mt-8">
        <h2 className="h2 text-center font-polished">Simple, Transparent Pricing</h2>
        <p className="mb-8 text-center text-muted-foreground">
          Pay only for what you use. No hidden fees. Cancel anytime.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg border p-6 ${tier.highlighted
                ? 'border-primary bg-primary/5 ring-2 ring-primary'
                : 'bg-card'
                }`}
            >
              <h3 className="h3 font-polished text-[20px]!">{tier.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold font-polished text-[30px]!">{tier.price}</span>
                <span className="text-muted-foreground font-polished text-[15px]!">{tier.period}</span>
              </div>
              <p className="mb-4 text-sm font-medium text-primary">
                {tier.pageviews}
              </p>
              <ul className="mb-6 flex-1 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.highlighted ? 'default' : 'outline'}
                className="w-full"
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Need more? Overage pricing: $5 per additional 10k pageviews
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-16">
        <h2 className="h2 text-center font-polished mb-2">
          Everything Your Players Need
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          A complete, searchable database - extracted from your ROM with room for custom content
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Complete Pokédex with base stats, types & abilities',
            'Full move database with power, accuracy & effects',
            'Item locations and detailed descriptions',
            'Wild encounter tables by route & time of day',
            'Trainer teams and battle strategies',
            'Evolution chains with level-up & item methods',
            'Interactive maps with sprite extraction',
            'Game-specific calculators (damage, EVs, etc.)',
            'Custom guides & descriptions via CMS',
            'Mobile-first responsive design',
            'Instant search across all data',
            'SEO optimized - rank on Google for your ROM',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-green-600" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>


      {/* Live Sites */}
      <section className="mb-16">
        <h2 className="h2 text-center font-polished mb-2">Trusted by ROM Hackers</h2>
        <p className="mb-8 text-center text-muted-foreground">
          See PolishedDex in action on these live community databases
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Polished Crystal',
              url: 'https://polisheddex.app',
              description: 'The original PolishedDex',
            },
            {
              name: 'Sour Crystal',
              url: 'https://sour.polisheddex.app',
              description: 'Sour Crystal ROM hack',
            },
            {
              name: 'BW3: Genesis',
              url: 'https://bw3g.polisheddex.app',
              description: 'Black & White 3: Genesis',
            },
            {
              name: 'Pokémon Crystal',
              url: 'https://pokecrystal.polisheddex.app',
              description: 'Vanilla Crystal data',
            },
            {
              name: 'Pokémon Red',
              url: 'https://pokered.polisheddex.app',
              description: 'Gen 1 classic',
            },

          ].map((site) => (
            <Link
              key={site.url}
              href={site.url}
              target="_blank"
              className="flex items-center justify-between gap-2 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
            >
              <div>
                <p className="font-medium">{site.name}</p>
                <p className="text-sm text-muted-foreground">{site.description}</p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="scroll-mt-8 rounded-lg border bg-gradient-to-br from-primary/10 to-transparent p-6 text-center sm:p-8"
      >
        <h2 className="h2 font-polished mb-2">Launch Your Database in 48 Hours</h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          Send your ROM hack name and GitHub repo link. I&apos;ll review your
          project for compatibility and have your live database ready within 2 days.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="mailto:caomicc@gmail.com?subject=PolishedDex%20Inquiry%20-%20[Your%20ROM%20Name]">
              Get Your Free Quote
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          No commitment required. Free compatibility check included.
        </p>
      </section>


      {/* Footer note */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Currently supporting pret-based disassemblies (pokered, pokecrystal).
        Custom disassembly support available - just ask!
      </p>
    </div>
  );
}
