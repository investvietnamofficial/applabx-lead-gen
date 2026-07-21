import { Metadata } from 'next'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './constants'

/**
 * Generate comprehensive metadata for a page
 */
export function generateMetadata({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
}: {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const url = canonical || SITE_URL
  const ogImageUrl = ogImage || `${SITE_URL}/og-default.svg`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: noIndex ? false : true,
      follow: true,
      googleBot: {
        index: noIndex ? false : true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Organization Schema for JSON-LD
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://linkedin.com/company/applabx',
      'https://twitter.com/applabx',
      'https://facebook.com/applabx',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  }
}

/**
 * Service Schema for JSON-LD
 */
export function serviceSchema(services: Array<{
  name: string
  description: string
  url: string
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lead Generation',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lead Generation Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: service.url,
        },
        position: index + 1,
      })),
    },
  }
}

/**
 * FAQ Schema for JSON-LD
 */
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Local Business Schema for JSON-LD
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-xxx-xxx-xxxx',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  }
}

/**
 * Breadcrumb Schema for JSON-LD
 */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * WebSite Schema for JSON-LD
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
