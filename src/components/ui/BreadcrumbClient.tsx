'use client'

// Client wrapper for breadcrumbs — uses usePathname which requires client context
// The actual Breadcrumb component is a server-compatible component

import { usePathname } from 'next/navigation'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/Breadcrumb'

const LABEL_MAP: Record<string, string> = {
  services: 'Services',
  industries: 'Industries',
  countries: 'Countries',
  resources: 'Resources',
  pricing: 'Pricing',
  'case-studies': 'Case Studies',
  compare: 'Compare',
  statistics: 'Statistics',
  tools: 'Free Tools',
  guides: 'Guides',
  blog: 'Blog',
  templates: 'Templates',
  about: 'About',
  contact: 'Contact',
  faq: 'FAQ',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  cookies: 'Cookie Policy',
  // Service slugs
  'b2b-lead-generation': 'B2B Lead Generation',
  'appointment-setting': 'Appointment Setting',
  'cold-email-outreach': 'Cold Email Outreach',
  'linkedin-outreach': 'LinkedIn Outreach',
  'seo-lead-generation': 'SEO Lead Generation',
  'content-marketing': 'Content Marketing',
  'ai-sales-automation': 'AI Sales Automation',
  'crm-automation': 'CRM Automation',
  'account-based-marketing': 'Account-Based Marketing',
  'demand-generation': 'Demand Generation',
  // Industry slugs
  saas: 'SaaS',
  ai: 'AI & Machine Learning',
  'hr-tech': 'HR Tech',
  manufacturing: 'Manufacturing',
  logistics: 'Logistics',
  healthcare: 'Healthcare',
  fintech: 'FinTech',
  cybersecurity: 'Cybersecurity',
  'professional-services': 'Professional Services',
  // Country slugs
  singapore: 'Singapore',
  vietnam: 'Vietnam',
  malaysia: 'Malaysia',
  thailand: 'Thailand',
  indonesia: 'Indonesia',
  philippines: 'Philippines',
  australia: 'Australia',
  uae: 'UAE',
  'saudi-arabia': 'Saudi Arabia',
  qatar: 'Qatar',
}

function formatLabel(seg: string): string {
  return LABEL_MAP[seg] || seg
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export function BreadcrumbClient() {
  const pathname = usePathname()
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/')
    const isLast = i === segments.length - 1
    return { label: formatLabel(seg), href: isLast ? undefined : href }
  })

  return (
    <div className="pt-20 bg-white border-b border-[var(--border)]">
      <div className="container py-3">
        <Breadcrumb items={items} />
      </div>
    </div>
  )
}
