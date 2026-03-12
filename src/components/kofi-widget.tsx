'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void;
    };
  }
}

export function KofiWidget() {
  useEffect(() => {
    // Wait for Ko-fi widget to be added to DOM, then attach click tracking
    const observer = new MutationObserver(() => {
      const kofiButton = document.querySelector('.floatingchat-container-wrap');
      if (kofiButton && !kofiButton.hasAttribute('data-tracking-attached')) {
        kofiButton.setAttribute('data-tracking-attached', 'true');
        kofiButton.addEventListener('click', () => {
          window.gtag?.('event', 'kofi_button_click', {
            event_category: 'engagement',
            event_label: 'Ko-fi Floating Button',
          });
        });
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Script
      src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.kofiWidgetOverlay?.draw('caomicc', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#00b9fe',
          'floating-chat.donateButton.text-color': '#fff'
        });
      }}
    />
  );
}
