import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Multilingual - WordPress Translation Plugin',
  description: 'The most powerful translation plugin for WordPress. Translate your website into multiple languages with AI-powered translations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Script
          id="multilipi-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                // var src = 'https://multilipistorage.blob.core.windows.net/static/seo-scripts/page_translations_main.js';
                var src = "https://script-cdn.multilipi.com/static/JS/page_translations.js"
                if (document.querySelector('script[src="' + src + '"]')) return;
                var s = document.createElement('script');
                s.src = src;
                s.defer = true;
                s.crossOrigin = 'anonymous';
                s.setAttribute('multilipi-key', 'bf74545e-4ce1-42bc-a710-fae15de52ead');
                s.setAttribute('mode', 'auto');
                s.setAttribute('data-pos-x', '50');
                s.setAttribute('data-pos-y', '50');
                document.head.appendChild(s);
              }());
            `,
          }}
        />
      </body>
    </html>
  )
}
