'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Link2, CheckCircle } from 'lucide-react'

/**
 * IntegrationsSection — shows CRM, marketing, and analytics tools we integrate with.
 *
 * SETUP: Add real integration logos to public/logos/ before launch.
 * Set SHOW_PLACEHOLDER = false once logos are available.
 */
const SHOW_PLACEHOLDER = true

const integrationCategories = [
  { category: 'CRM', tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho'] },
  { category: 'Sales Engagement', tools: ['Outreach', 'Salesloft', 'Apollo', 'Lemlist'] },
  { category: 'Email & Deliverability', tools: ['Gmail', 'Outlook', 'Resend', 'Instantly'] },
  { category: 'LinkedIn & Social', tools: ['LinkedIn Sales Navigator', 'Phantombuster', 'Dux-Soup'] },
  { category: 'Data & Enrichment', tools: ['Clearbit', 'Apollo', 'Hunter.io', 'ZoomInfo'] },
  { category: 'Automation', tools: ['Zapier', 'Make', 'n8n', 'Pabbly'] },
]

export function IntegrationsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Works With Your Stack"
          subtitle="Seamlessly connect with the tools you already use. No more switching between platforms."
        />

        {SHOW_PLACEHOLDER ? (
          <>
            {/* Clean category-based placeholder — no fake logos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="p-5 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)] hover:shadow-md transition-all"
                >
                  <div className="text-xs uppercase tracking-wider text-[var(--brand-gray)] font-medium mb-3">
                    {cat.category}
                  </div>
                  <div className="space-y-2">
                    {cat.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-2 text-sm text-[var(--brand-dark)]">
                        <CheckCircle className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[var(--brand-gray)] text-sm">
              Plus 50+ more integrations available via Zapier, native APIs, and webhooks.
            </p>
          </>
        ) : (
          /* TODO: Replace with real logo grid once SVG/PNG logos are added to public/logos/ */
          <div className="text-center py-12 text-[var(--brand-gray)]">
            <Link2 className="w-12 h-12 mx-auto mb-4 text-[var(--brand-gray-light)]" />
            <p>Integration logos coming soon.</p>
          </div>
        )}
      </Container>
    </section>
  )
}
