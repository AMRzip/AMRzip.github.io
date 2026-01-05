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
      <head>
        <link rel="alternate" hrefLang="en" href="https://ayushman.me" />
        <link rel="alternate" hrefLang="hi" href="https://hi.ayushman.me" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://cdn.weglot.com/weglot.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="weglot-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              Weglot.initialize({
                api_key: 'wg_3c00f5093ab922aadf207392c8973b766'
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
