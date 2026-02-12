import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata = {
  title: 'Ripotek Technologies Inc. | Data & AI Consulting',
  description: 'Canada\'s premier data and AI consulting firm. Enterprise consulting, training, and managed services in Azure, Databricks, Fabric, and AI. 85% graduate placement rate.',
  keywords: ['data consulting', 'AI consulting', 'Azure', 'Databricks', 'Microsoft Fabric', 'Power BI', 'data engineering', 'MLOps', 'Canada', 'Calgary', 'enterprise data'],
  authors: [{ name: 'Ripotek Technologies Inc.' }],
  openGraph: {
    title: 'Ripotek Technologies Inc. | Data & AI Consulting',
    description: 'Empowering enterprises with cutting-edge cloud, Databricks, Fabric, and AI solutions. 50+ enterprise clients across Canada.',
    url: 'https://www.ripotek.com',
    siteName: 'Ripotek Technologies',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ripotek Technologies Inc. | Data & AI Consulting',
    description: 'Empowering enterprises with cutting-edge cloud, Databricks, Fabric, and AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://embed.tawk.to" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://upload.wikimedia.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
      </head>
      <body className={inter.className}>
        {children}
        {/* Tawk.to Live Chat - Deferred to lazyOnload for better initial page performance */}
        <Script
          id="tawk-to-chat"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69335514a452bb19827419b3/1jbo88lqh';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
