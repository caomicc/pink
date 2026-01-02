import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Funnel_Sans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SiteFooter } from '@/components/site-layout';
import { cn } from '@/lib/utils';

const bodyFont = Funnel_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: '400'
});


const pixelFont = Funnel_Sans({
  variable: '--font-pixels',
  subsets: ['latin'],
  weight: '400'
});


export const metadata: Metadata = {
  title: 'LamLamLam.',
  description:
    'Oh, hello',
  metadataBase: new URL('https://caomi.cc'),
  openGraph: {
    title: 'LamLamLam.',
    description:
      'Oh, hello',
    url: 'https://caomi.cc',
    siteName: 'LamLamLam.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'LamLamLam.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LamLamLam.',
    description:
      'Oh, hello',
    site: '@caomi_cc',
    creator: '@caomi_cc',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} ${bodyFont.variable} ${pixelFont.variable} antialiased page-bg py-4`}
      >
        <div className={cn("@container",
          "flex flex-col items-center text-center max-w-3xl mx-auto my-4 gap-3 p-4",
          'site-wrapper rounded-lg overflow-hidden',
          )}>
              {children}
          <div className="w-full">
            <SiteFooter />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
