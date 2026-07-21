import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from '@/components/layout/Layout'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lead-gen-agency.applabx.com'),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'lead generation',
    'B2B marketing',
    'sales leads',
    'marketing agency',
    'AppLabx',
    'AI marketing',
    'sales pipeline',
    'B2B lead gen agency',
    'appointment setting',
    'cold email outreach',
    'LinkedIn lead generation',
  ],
  authors: [{ name: 'AppLabx' }],
  creator: 'AppLabx',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lead-gen-agency.applabx.com',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'AppLabx Lead Generation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-default.svg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
