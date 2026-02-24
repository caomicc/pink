'use client';

import Link from 'next/link';

// Fake 88x31 buttons - you can replace these with actual images later
const buttons = [
  { label: 'HTML', color: 'pink', href: '#' },
  { label: 'CSS', color: 'purple', href: '#' },
  { label: '♥ MADE WITH LOVE', color: 'rainbow', href: '#' },
];

export function SiteHeader() {
  return (
    <div className="site-header">
      <div className="flex flex-col items-center gap-2">
        {/* Site Title */}
        <Link href="/" className="site-title-90s hover:no-underline">
          ✧ Cammy ✧
        </Link>

        {/* Webring-style navigation hint */}
        {/* <div className="webring-nav">
          <span className="text-purple-700">{'<<'}</span>
          <span className="webring-divider">|</span>
          <span className="text-xs text-fuchsia-600">~ welcome to my corner of the web ~</span>
          <span className="webring-divider">|</span>
          <span className="text-purple-700">{'>>'}</span>
        </div> */}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <div className="site-footer mt-2 font-polished">
      {/* Main footer text */}
      <p className="mb-2 text-px">
        Made with love by cammy
      </p>

      {/* Pixel divider */}
      {/* <div className="pixel-divider" /> */}

      {/* Quick links */}
      {/* <div className="site-footer-links mb-3">
        [ <Link href="/">Home</Link> ]
        [ <Link href="/about">About</Link> ]
        [ <Link href="/guestbook">Guestbook</Link> ]
        [ <Link href="/resources">Links</Link> ]
      </div> */}

      {/* Pixel divider */}
      <div className="pixel-divider" />

      {/* Meta info */}
      <p className="text-px space-y-1">
        © 2025 - forever... probably
      </p>
    </div>
  );
}
