import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SiteFooter } from '@/components/site-layout';
import { HorizontalNav } from '@/components/horizontal-nav';
import { cn } from '@/lib/utils';
import { JsonLdMultiple } from '@/components/json-ld';
import { SITE_CONFIG, getPersonSchema, getWebsiteSchema } from '@/lib/seo';

const bodyFont = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'front-end developer',
    'web developer',
    'React developer',
    'Next.js developer',
    'TypeScript',
    'Tailwind CSS',
    'UI/UX',
    'portfolio',
  ],
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author.name,
  publisher: SITE_CONFIG.author.name,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
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
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLdMultiple schemas={[getPersonSchema(), getWebsiteSchema()]} />
      </head>
      <body
        className={`${bodyFont.className} ${bodyFont.variable} antialiased page-bg py-4`}
      >
        <div className={cn("@container",
          "flex flex-col mx-auto",
          'site-wrapper overflow-hidden text-left',
          'sm:max-w-5xl'
        )}>
          <HorizontalNav />
          <div className="mx-auto px-4 sm:px-8 w-full flex flex-col items-center gap-8 sm:gap-12">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full">
              <div className="w-full text-left gap-8 flex flex-col">
                {children}
              </div>
              <iframe id='kofiframe' src='https://ko-fi.com/caomicc/?hidefeed=true&widget=true&embed=true&preview=true' className="border-none w-full md:w-auto md:min-w-[320px]" height={712} title='caomicc'></iframe>
            </div>
          </div>
          <div className="w-full text-center pt-8">
            <SiteFooter />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  );
}
