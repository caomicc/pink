import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Funnel_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SiteFooter } from '@/components/site-layout';
import { HorizontalNav } from '@/components/horizontal-nav';
import { cn } from '@/lib/utils';

const bodyFont = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
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
