import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from '@/components/ui/navigation-menu';
// import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cameron Omiccioli – Software Engineer',
  description:
    'Personal website of Cameron Omiccioli. Software engineer, designer, and builder. Sharing projects, toolbox, and thoughts.',
  metadataBase: new URL('https://caomi.cc'),
  openGraph: {
    title: 'Cameron Omiccioli – Software Engineer',
    description:
      'Personal website of Cameron Omiccioli. Software engineer, designer, and builder. Sharing projects, toolbox, and thoughts.',
    url: 'https://caomi.cc',
    siteName: 'Cameron Omiccioli',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Cameron Omiccioli – Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cameron Omiccioli – Software Engineer',
    description:
      'Personal website of Cameron Omiccioli. Software engineer, designer, and builder. Sharing projects, toolbox, and thoughts.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <div className="mx-4">
          <footer className="mt-16 max-w-5xl mx-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4">
              <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-200">
                  <li>
                    <a href="https://github.com/caomicc/pink" target='_blank' className="hover:underline me-4 md:me-6">
                      Github Repository
                    </a>
                  </li>
                </ul>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-100">
                  © {new Date().getFullYear()}{' '}
                  <a href="https://flowbite.com/" className="hover:underline">
                    Cameron Omiccioli
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
