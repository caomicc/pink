import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Cammy | Front-End Developer',
  shortName: 'Cammy',
  description:
    'Front-end developer specializing in React, Next.js, and TypeScript. Building beautiful, performant web experiences.',
  url: 'https://caomi.cc',
  locale: 'en_US',
  twitterHandle: '@caomi_cc',
  author: {
    name: 'Cammy',
    email: 'caomicc@gmail.com',
    url: 'https://caomi.cc',
    github: 'https://github.com/caomicc',
    linkedin: 'https://www.linkedin.com/in/caomicc/',
  },
} as const;

interface PageSEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noIndex?: boolean;
}

/**
 * Generate consistent metadata for any page
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noIndex = false,
}: PageSEOOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = path === '' ? SITE_CONFIG.name : `${title} | ${SITE_CONFIG.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords: tags,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
    creator: SITE_CONFIG.author.name,
    publisher: SITE_CONFIG.author.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type,
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [SITE_CONFIG.author.name],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

/**
 * JSON-LD Schema for Person (portfolio/about pages)
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.author.email,
    jobTitle: 'Front-End Developer',
    description: SITE_CONFIG.description,
    sameAs: [SITE_CONFIG.author.github, SITE_CONFIG.author.linkedin],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Web Development',
      'Front-End Development',
      'UI/UX Design',
    ],
  };
}

/**
 * JSON-LD Schema for WebSite
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
    },
    inLanguage: 'en-US',
  };
}

/**
 * JSON-LD Schema for BlogPosting
 */
export function getBlogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
  tags?: string[];
  readingTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.url,
    },
    image: post.image || `${SITE_CONFIG.url}/og.png`,
    keywords: post.tags?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    inLanguage: 'en-US',
  };
}

/**
 * JSON-LD Schema for BreadcrumbList
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * JSON-LD Schema for Blog listing page
 */
export function getBlogListSchema(posts: Array<{ title: string; slug: string; date: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_CONFIG.author.name}'s Blog`,
    description: 'Thoughts, ideas, and explorations on web development.',
    url: `${SITE_CONFIG.url}/blog`,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
}

/**
 * JSON-LD Schema for SoftwareApplication (PolishedDex product page)
 */
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PolishedDex',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description:
      'A data-mined Pokédex database for ROM hacks, featuring complete Pokémon, moves, items, and location data.',
    url: `${SITE_CONFIG.url}/polisheddex`,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '19',
      highPrice: '79',
      priceCurrency: 'USD',
      offerCount: 3,
    },
  };
}
