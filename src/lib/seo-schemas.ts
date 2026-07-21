// SEO Schema helpers — all schema types for AppLabx Lead Generation
// These return plain objects suitable for JSON.stringify in script tags

export const SITE_URL = 'https://lead-gen-agency.applabx.com'
export const SITE_NAME = 'AppLabx Lead Generation'
export const SITE_EMAIL = 'hello@applabx.com'
export const LOGO_URL = 'https://lead-gen-agency.applabx.com/favicon.svg'

// ── WebSite Schema ─────────────────────────────────────────────────────────────
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'AI-Powered B2B Lead Generation Agency. We generate qualified leads, book more strategy calls, and scale your revenue pipeline.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE_EMAIL,
        contactType: 'sales',
        availableLanguage: 'English',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ── Organization Schema ────────────────────────────────────────────────────────
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    description: 'AppLabx is an AI-powered B2B lead generation agency operating across APAC and the Middle East. We help companies generate qualified leads and book more strategy calls.',
    email: SITE_EMAIL,
    sameAs: [
      'https://www.linkedin.com/company/applabx',
      'https://twitter.com/applabx',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_EMAIL,
      contactType: 'sales',
    },
  }
}

// ── Service Schema (for service pages) ───────────────────────────────────────
export function serviceSchema(params: {
  name: string
  description: string
  url: string
  provider: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      '@type': 'Organization',
      name: params.provider,
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: 'B2B Lead Generation',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lead Generation Services',
      itemListElement: [],
    },
  }
}

// ── FAQ Schema ────────────────────────────────────────────────────────────────
export function faqSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

// ── Breadcrumb Schema ─────────────────────────────────────────────────────────
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

// ── LocalBusiness Schema (for contact/about page) ──────────────────────────────
// Only use this when real business info is available — no fabricated data
export function localBusinessSchema(params?: {
  name?: string
  address?: string
  phone?: string
  email?: string
}) {
  if (!params?.address) return null // Don't add schema without real data
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: params.name || SITE_NAME,
    url: SITE_URL,
    telephone: params.phone,
    email: params.email || SITE_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: params.address,
      addressCountry: 'SG',
    },
    areaServed: 'Worldwide',
    priceRange: '$$$$',
  }
}

// ── HowTo Schema (for process pages) ─────────────────────────────────────────
export function howToSchema(params: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// ── AggregateRating Schema (for service pages — requires real reviews) ─────────
export function aggregateRatingSchema(params: {
  ratingValue: string
  reviewCount: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: params.ratingValue,
    reviewCount: params.reviewCount,
    bestRating: '5',
    worstRating: '1',
  }
}
