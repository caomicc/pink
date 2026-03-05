import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Funnel_Sans, Inter, Noto_Sans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SiteFooter } from '@/components/site-layout';
import { HorizontalNav } from '@/components/horizontal-nav';
import { cn } from '@/lib/utils';

const bodyFont = Inter({
  variable: '--font-body',
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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2343108418778023"
        crossOrigin="anonymous"></script>
      <body
        className={`${bodyFont.className} ${bodyFont.variable} antialiased page-bg py-4`}
      >
        <div className={cn("@container",
          "flex flex-col mx-auto",
          'site-wrapper overflow-hidden text-left',
        )}>
          <HorizontalNav />
          {children}
          <div className="w-full text-center pt-8">
            <SiteFooter />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
