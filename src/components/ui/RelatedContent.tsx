'use client'

import Link from 'next/link'
import { m } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Link2,
  Mail,
  BarChart3,
  FileText,
  Users,
  Globe,
  Calendar,
  Target,
  CheckCircle2,
} from 'lucide-react'

interface RelatedLink {
  label: string
  href: string
  description?: string
}

interface RelatedContentProps {
  title?: string
  subtitle?: string
  services?: RelatedLink[]
  industries?: RelatedLink[]
  countries?: RelatedLink[]
  comparisons?: RelatedLink[]
  tools?: RelatedLink[]
  resources?: RelatedLink[]
  showViewAll?: boolean
  viewAllHref?: string
  className?: string
}

// Icon map for section headers
const sectionIcons: Record<string, React.ElementType> = {
  Services: Target,
  Industries: BarChart3,
  Countries: Globe,
  Comparisons: Users,
  Tools: FileText,
  Resources: FileText,
}

export function RelatedContent({
  title = 'Continue Exploring',
  subtitle,
  services,
  industries,
  countries,
  comparisons,
  tools,
  resources,
  showViewAll = false,
  viewAllHref = '/',
  className = '',
}: RelatedContentProps) {
  const sections = [
    services && { label: 'Services', items: services },
    industries && { label: 'Industries', items: industries },
    countries && { label: 'Countries', items: countries },
    comparisons && { label: 'Compare', items: comparisons },
    tools && { label: 'Free Tools', items: tools },
    resources && { label: 'Resources', items: resources },
  ].filter(Boolean) as { label: string; items: RelatedLink[] }[]

  if (sections.length === 0) return null

  return (
    <section className={`py-16 bg-[var(--brand-light)] ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-dark)] mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[var(--brand-gray)] text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = sectionIcons[section.label] || ArrowRight
            return (
              <div key={section.label}>
                {/* Section header */}
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-[var(--brand-primary)]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-gray)]">
                    {section.label}
                  </h3>
                </div>

                {/* Links grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.items.map((item) => (
                    <m.div
                      key={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-md transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-primary)]/15 transition-colors">
                          <ArrowRight className="w-4 h-4 text-[var(--brand-primary)] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[var(--brand-dark)] text-sm group-hover:text-[var(--brand-primary)] transition-colors leading-tight">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-xs text-[var(--brand-gray)] mt-0.5 leading-relaxed line-clamp-2">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </m.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* View All CTA */}
        {showViewAll && (
          <div className="mt-10 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] font-medium hover:bg-[var(--brand-primary)]/5 transition-colors"
            >
              View all options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Pre-built RelatedContent for service pages ─────────────────────────────────
export function ServicePageRelatedContent({ serviceSlug }: { serviceSlug: string }) {
  const serviceMap: Record<string, {
    relatedServices: RelatedLink[]
    relatedIndustries: RelatedLink[]
    relatedTools: RelatedLink[]
    relatedComparison: RelatedLink[]
  }> = {
    'b2b-lead-generation': {
      relatedServices: [
        { label: 'Cold Email Outreach', href: '/services/cold-email-outreach', description: 'High-volume email campaigns with AI personalization' },
        { label: 'LinkedIn Outreach', href: '/services/linkedin-outreach', description: 'Relationship-first professional networking' },
        { label: 'Appointment Setting', href: '/services/appointment-setting', description: 'Book qualified meetings on your calendar' },
      ],
      relatedIndustries: [
        { label: 'SaaS Companies', href: '/industries/saas', description: 'Software companies with recurring revenue models' },
        { label: 'FinTech', href: '/industries/fintech', description: 'Financial technology and payment companies' },
        { label: 'AI & Machine Learning', href: '/industries/ai', description: 'Artificial intelligence and ML companies' },
      ],
      relatedTools: [
        { label: 'ICP Generator', href: '/tools/icp-generator', description: 'Build your ideal customer profile' },
        { label: 'ROI Calculator', href: '/tools/roi-calculator', description: 'Calculate your lead gen ROI' },
      ],
      relatedComparison: [
        { label: 'Inbound vs Outbound', href: '/compare/inbound-vs-outbound' },
        { label: 'Cold Email vs LinkedIn', href: '/compare/cold-email-vs-linkedin' },
      ],
    },
    'cold-email-outreach': {
      relatedServices: [
        { label: 'LinkedIn Outreach', href: '/services/linkedin-outreach', description: 'Multi-channel approach with LinkedIn' },
        { label: 'AI Sales Automation', href: '/services/ai-sales-automation', description: 'Scale personalization with AI' },
        { label: 'B2B Lead Generation', href: '/services/b2b-lead-generation', description: 'Full-funnel lead generation' },
      ],
      relatedIndustries: [
        { label: 'SaaS', href: '/industries/saas', description: 'High-volume outbound in SaaS' },
        { label: 'Professional Services', href: '/industries/professional-services', description: 'Consulting and advisory firms' },
      ],
      relatedTools: [
        { label: 'ROI Calculator', href: '/tools/roi-calculator' },
        { label: 'ICP Generator', href: '/tools/icp-generator' },
      ],
      relatedComparison: [
        { label: 'Cold Email vs LinkedIn', href: '/compare/cold-email-vs-linkedin' },
        { label: 'Apollo vs ZoomInfo', href: '/compare/apollo-vs-zoominfo' },
      ],
    },
  }

  // Generic fallback for services not explicitly mapped
  const data = serviceMap[serviceSlug] || {
    relatedServices: [
      { label: 'B2B Lead Generation', href: '/services/b2b-lead-generation' },
      { label: 'Cold Email Outreach', href: '/services/cold-email-outreach' },
      { label: 'LinkedIn Outreach', href: '/services/linkedin-outreach' },
    ],
    relatedIndustries: [
      { label: 'SaaS', href: '/industries/saas' },
      { label: 'FinTech', href: '/industries/fintech' },
    ],
    relatedTools: [
      { label: 'ICP Generator', href: '/tools/icp-generator' },
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
    ],
    relatedComparison: [
      { label: 'Inbound vs Outbound', href: '/compare/inbound-vs-outbound' },
    ],
  }

  return (
    <RelatedContent
      title="Related Services & Resources"
      subtitle="Explore related services, industries, and tools that complement this offering."
      services={data.relatedServices}
      industries={data.relatedIndustries}
      tools={data.relatedTools}
      comparisons={data.relatedComparison}
      showViewAll
      viewAllHref="/services"
    />
  )
}

// ─── Pre-built RelatedContent for industry pages ────────────────────────────────
export function IndustryPageRelatedContent({ industrySlug }: { industrySlug: string }) {
  const industryMap: Record<string, { relatedIndustries: RelatedLink[]; relatedServices: RelatedLink[]; relatedCountries: RelatedLink[] }> = {
    saas: {
      relatedIndustries: [
        { label: 'AI & Machine Learning', href: '/industries/ai' },
        { label: 'FinTech', href: '/industries/fintech' },
        { label: 'Cybersecurity', href: '/industries/cybersecurity' },
      ],
      relatedServices: [
        { label: 'B2B Lead Generation', href: '/services/b2b-lead-generation' },
        { label: 'Account-Based Marketing', href: '/services/account-based-marketing' },
        { label: 'Cold Email Outreach', href: '/services/cold-email-outreach' },
      ],
      relatedCountries: [
        { label: '🇸🇬 Singapore', href: '/countries/singapore' },
        { label: '🇻🇳 Vietnam', href: '/countries/vietnam' },
        { label: '🇦🇺 Australia', href: '/countries/australia' },
      ],
    },
  }

  const data = industryMap[industrySlug] || {
    relatedIndustries: [
      { label: 'SaaS', href: '/industries/saas' },
      { label: 'AI & Machine Learning', href: '/industries/ai' },
    ],
    relatedServices: [
      { label: 'B2B Lead Generation', href: '/services/b2b-lead-generation' },
      { label: 'Cold Email Outreach', href: '/services/cold-email-outreach' },
    ],
    relatedCountries: [
      { label: '🇸🇬 Singapore', href: '/countries/singapore' },
      { label: '🇻🇳 Vietnam', href: '/countries/vietnam' },
    ],
  }

  return (
    <RelatedContent
      title="Related Industries & Services"
      services={data.relatedServices}
      industries={data.relatedIndustries}
      countries={data.relatedCountries}
      showViewAll
      viewAllHref="/industries"
    />
  )
}

// ─── Pre-built RelatedContent for country pages ────────────────────────────────
export function CountryPageRelatedContent({ countrySlug }: { countrySlug: string }) {
  return (
    <RelatedContent
      title="Explore Other Markets"
      subtitle="B2B lead generation expertise across APAC and the Middle East."
      countries={[
        { label: '🇸🇬 Singapore', href: '/countries/singapore' },
        { label: '🇻🇳 Vietnam', href: '/countries/vietnam' },
        { label: '🇲🇾 Malaysia', href: '/countries/malaysia' },
        { label: '🇹🇭 Thailand', href: '/countries/thailand' },
        { label: '🇮🇩 Indonesia', href: '/countries/indonesia' },
        { label: '🇦🇪 UAE', href: '/countries/uae' },
        { label: '🇸🇦 Saudi Arabia', href: '/countries/saudi-arabia' },
        { label: '🇶🇦 Qatar', href: '/countries/qatar' },
        { label: '🇦🇺 Australia', href: '/countries/australia' },
      ].filter((c) => !c.href.includes(countrySlug)).slice(0, 6)}
      services={[
        { label: 'B2B Lead Generation', href: '/services/b2b-lead-generation' },
        { label: 'Appointment Setting', href: '/services/appointment-setting' },
        { label: 'Cold Email Outreach', href: '/services/cold-email-outreach' },
      ]}
      showViewAll
      viewAllHref="/countries"
    />
  )
}

// ─── Pre-built RelatedContent for comparison pages ─────────────────────────────
export function ComparisonPageRelatedContent({ currentSlug }: { currentSlug: string }) {
  const allComparisons = [
    { label: 'Apollo vs ZoomInfo', href: '/compare/apollo-vs-zoominfo' },
    { label: 'Clay vs Apollo', href: '/compare/clay-vs-apollo' },
    { label: 'Cold Email vs LinkedIn', href: '/compare/cold-email-vs-linkedin' },
    { label: 'Inbound vs Outbound', href: '/compare/inbound-vs-outbound' },
    { label: 'ABM vs Traditional B2B', href: '/compare/abm-vs-traditional-b2b' },
    { label: 'LinkedIn vs Email', href: '/compare/linkedin-vs-email' },
  ]

  const others = allComparisons.filter((c) => !c.href.includes(currentSlug))

  return (
    <RelatedContent
      title="Compare Other Options"
      subtitle="Explore more comparison guides to find the right approach for your business."
      comparisons={others}
      tools={[
        { label: 'ICP Generator', href: '/tools/icp-generator', description: 'Define who you should be targeting' },
        { label: 'ROI Calculator', href: '/tools/roi-calculator', description: 'Calculate expected returns' },
      ]}
      showViewAll
      viewAllHref="/compare"
    />
  )
}
