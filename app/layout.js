import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata = {
  title: 'Ripotek Technologies Inc. | Data & AI Consulting',
  description: 'Enterprise consulting, training, and managed services in Azure, Databricks, Fabric, and AI',
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0d9488',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://assets.mixkit.co" />
        <link rel="dns-prefetch" href="https://js-na3.hs-scripts.com" />
        <link rel="dns-prefetch" href="https://forms.hsforms.com" />
      </head>
      <body className={inter.className}>
        {children}
        {/* HubSpot Tracking Code - Deferred for better performance */}
        <Script
          id="hs-script-loader"
          strategy="lazyOnload"
          src="https://js-na3.hs-scripts.com/342603298.js"
        />
      </body>
    </html>
  )
}
