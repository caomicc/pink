import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Playpen_Sans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { HorizontalNav } from '@/components/horizontal-nav';
import { cn } from '@/lib/utils';

const playpen = Playpen_Sans({
  variable: '--font-playpen',
  subsets: ['latin'],
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
        className={`${playpen.className} ${playpen.variable} antialiased py-4`}
      >
        <div className={cn("@container",
      "min-h-screen flex flex-col justify-center items-center text-center max-w-5xl mx-auto my-4 gap-3 p-3",
      'border-2 border-violet-300 rounded-2xl overflow-hidden bg-gradient-to-b from-azure-200 to-purple-200',
      )}>
      <div className="relative w-full bg-white/50 p-4 rounded-t-lg">
        {/* <h1 className="site-heading w-auto text-center inline">LamLamLam.</h1> */}
        <HorizontalNav />
      </div>
      <div className="flex-1 flex w-full gap-3">
        <div className="w-[75%] section-container text-left">
          {children}
        </div>
        <div className="w-[25%] flex gap-3 flex-col">
          <div className="section-container">
            <p className="h6">status</p>
            <p>
              <a href="https://www.imood.com/users/lamlamlam">
                Lammy is feeling... <img src="https://moods.imood.com/display/uname-lamlamlam/imood.gif" alt="The current mood of lamlamlam at www.imood.com" className="inline"/>
              </a>
            </p>
          </div>
<div className="section-container">
            <p className="h6">fanlists</p>
          </div>

        </div>
      </div>
      <div className="w-full bg-white/50 p-4 rounded-b-lg">
        <p className=''>made with love by lamlamlam. &copy; 2025 - forever</p>
      </div>
    </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
