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

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
