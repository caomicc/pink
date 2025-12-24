import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Comic_Relief, Delius, Pixelify_Sans, Playpen_Sans, Sour_Gummy } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { HorizontalNav } from '@/components/horizontal-nav';
import { SiteHeader, SiteFooter } from '@/components/site-layout';
import { cn } from '@/lib/utils';

const bodyFont = Pixelify_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: '400'
});


const pixelFont = Pixelify_Sans({
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
      "min-h-screen flex flex-col items-center text-center max-w-5xl mx-auto my-4 gap-3 p-4",
      'site-wrapper rounded-lg overflow-hidden',
      )}>
      {/* <div className="relative w-full">
        <SiteHeader />
        <div className="bg-white/70 p-3 mt-2 rounded-lg border-2 border-pink-200">
          <HorizontalNav />
        </div>
      </div>
      <div className="flex-1 flex w-full gap-3">
        <div className="w-[75%] site-content p-4 text-left rounded-sm"> */}
          {children}
        {/* </div>
        <div className="w-[25%] flex gap-3 flex-col">
          <div className="site-section">
            <p className="site-section-title">✧ status ✧</p>
            <p className="text-sm">
              <a href="https://www.imood.com/users/lamlamlam" className="text-purple-700 hover:text-pink-500">
                Lammy is feeling... <img src="https://moods.imood.com/display/uname-lamlamlam/imood.gif" alt="The current mood of lamlamlam at www.imood.com" className="inline"/>
              </a>
            </p>
          </div>
          <div className="site-section">
            <p className="site-section-title">♥ fanlists ♥</p>
          </div>
        </div>
      </div> */}
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
