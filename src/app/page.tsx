import { Pikachu } from '@/components/lil-pikachu';
import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const featuredWork: {
  name: string;
  href: string;
  image?: string;
  blurb: string;
  tags: string[];
}[] = [
    {
      name: 'PolishedDex',
      href: 'https://polisheddex.app',
      // TODO: add a PolishedDex screenshot to /public and reference it here
      blurb:
        'A data-mined Pokédex for the ROM hack Polished Crystal. Instead of maintaining a wiki by hand, it generates human-readable docs straight from the source files — so every game update ships fresh pages automatically.',
      tags: ['Next.js', 'Data pipeline', 'My favorite build'],
    },
    {
      name: 'Workhuman',
      href: 'https://www.workhuman.com',
      image: '/homepage.webp',
      blurb:
        'Front-end work on marketing pages for Workhuman, an enterprise employee-recognition platform — platform, product, and resource pages built as reusable, CMS-driven components.',
      tags: ['Enterprise', 'Component systems', 'CMS'],
    },
  ];

const clientLogos = [
  { src: '/svg/wh_logo-long.svg', alt: 'Workhuman' },
  { src: '/svg/MWRTA_logo.svg', alt: 'MetroWest Regional Transit Authority' },
  { src: '/svg/wellesleycollegelogo.svg', alt: 'Wellesley College' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <p className="mb-3 text-px uppercase font-polished text-primary">
          Front-end developer ✧ est. the Myspace era
        </p>
        <h1 className="text-display text-balance">
          Hi! I&apos;m Cammy. I build fun, useful corners of the web.
        </h1>
        <p className="text-lead mt-4 max-w-2xl">
          Front-end dev who dabbles in full-stack — React, Next.js, and
          TypeScript, with a soft spot for UI/UX and pixel-perfect details.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="#work">See my work</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:caomicc@gmail.com">
              <Mail className="size-4" />
              Email me
            </a>
          </Button>
        </div>
      </section>

      {/* About + Pikachu */}
      <section>
        <Pikachu />
        <p className="mb-4 text-xl">
          I have been building websites since Myspace and Neopets were the
          biggest thing, and the habit stuck. What started as customizing
          profile pages turned into a career in front-end development and
          UI/UX.
        </p>
        <p className="mb-4 text-xl">
          I have shipped websites for state-funded transportation authorities,
          country clubs, universities, enterprise software companies, and small
          community organizations. At the end of the day, though, my favorite
          projects are the fun, unique ones ... especially when they end up being
          genuinely useful!
        </p>
      </section>

      {/* Featured work */}
      <section id="work" aria-labelledby="featured-work">
        <p className="mb-3 text-px uppercase font-polished text-primary">
          Selected work
        </p>
        <h2 id="featured-work" className="mb-6">
          Things I&apos;ve built
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featuredWork.map((project) => (
            <Card key={project.name} className="group gap-0 overflow-hidden py-0">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
              >
                <div className="overflow-hidden border-b">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      width={800}
                      height={500}
                      className="aspect-[8/5] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex aspect-[8/5] w-full items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-background">
                      <span className="font-polished text-px-20 text-primary/60">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-1 flex-col p-5">
                  <h3 className="inline-flex items-center gap-1 text-lg">
                    {project.name}
                    <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.blurb}
                  </p>
                  <p className="mt-4 text-px uppercase font-polished text-muted-foreground">
                    {project.tags.join(' ✧ ')}
                  </p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-8">
          <p className="mb-4 text-px uppercase font-polished text-muted-foreground">
            Brands I&apos;ve built for
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-70">
            {/* {clientLogos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto"
              />
            ))} */}

            ee
          </div>
        </div>
      </section>

      {/* Products + blog teasers */}
      <section aria-label="More around the site">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card className="gap-0 py-0">
            <Link href="/products" className="block p-5 transition-colors hover:bg-muted/50">
              <h3 className="inline-flex items-center gap-1 text-lg">
                Products <ArrowUpRight className="size-4 text-primary" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Digital downloads, templates, and services I am packaging up on
                Gumroad from the things I already build.
              </p>
            </Link>
          </Card>
          <Card className="gap-0 py-0">
            <Link href="/blog" className="block p-5 transition-colors hover:bg-muted/50">
              <h3 className="inline-flex items-center gap-1 text-lg">
                Blog <ArrowUpRight className="size-4 text-primary" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Notes from the workbench — web development, side projects, and
                the occasional lesson learned the hard way.
              </p>
            </Link>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section aria-label="Contact">
        <p className="mb-3 text-px uppercase font-polished text-primary">
          Say hi
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="https://www.linkedin.com/in/caomicc/"
            target="_blank"
            className="inline-flex items-center gap-1 underline leading-tight"
          >
            LinkedIn <ArrowUpRight className="inline size-5" />
          </Link>
          <Link
            href="https://www.github.com/caomicc/"
            target="_blank"
            className="inline-flex items-center gap-1 underline leading-tight"
          >
            Github <ArrowUpRight className="inline size-5" />
          </Link>
          <Link
            href="mailto:caomicc@gmail.com"
            className="inline-flex items-center gap-1 underline leading-tight"
          >
            Email me <ArrowUpRight className="inline size-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
