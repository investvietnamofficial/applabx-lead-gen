import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { generateMetadata } from '@/lib/seo'
import { industries } from '@/lib/constants'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'Case Studies',
  description:
    'Real results from real clients. See how AppLabx has helped B2B companies generate qualified leads and book more strategy calls.',
  path: '/case-studies',
})

// Placeholder case studies data - clearly marked as placeholders
const caseStudies = [
  {
    id: '1',
    client: '⚠️ PLACEHOLDER',
    industry: 'SaaS',
    country: 'Singapore',
    challenge: '⚠️ PLACEHOLDER: Describe the client\'s challenge in 1-2 sentences.',
    solution: '⚠️ PLACEHOLDER: Describe the solution implemented in 1-2 sentences.',
    results: '⚠️ PLACEHOLDER: ⚠️ DO NOT FABRICATE — Replace with real metrics.',
  },
  {
    id: '2',
    client: '⚠️ PLACEHOLDER',
    industry: 'AI',
    country: 'Vietnam',
    challenge: '⚠️ PLACEHOLDER: Describe the client\'s challenge in 1-2 sentences.',
    solution: '⚠️ PLACEHOLDER: Describe the solution implemented in 1-2 sentences.',
    results: '⚠️ PLACEHOLDER: ⚠️ DO NOT FABRICATE — Replace with real metrics.',
  },
  {
    id: '3',
    client: '⚠️ PLACEHOLDER',
    industry: 'FinTech',
    country: 'UAE',
    challenge: '⚠️ PLACEHOLDER: Describe the client\'s challenge in 1-2 sentences.',
    solution: '⚠️ PLACEHOLDER: Describe the solution implemented in 1-2 sentences.',
    results: '⚠️ PLACEHOLDER: ⚠️ DO NOT FABRICATE — Replace with real metrics.',
  },
  {
    id: '4',
    client: '⚠️ PLACEHOLDER',
    industry: 'Manufacturing',
    country: 'Thailand',
    challenge: '⚠️ PLACEHOLDER: Describe the client\'s challenge in 1-2 sentences.',
    solution: '⚠️ PLACEHOLDER: Describe the solution implemented in 1-2 sentences.',
    results: '⚠️ PLACEHOLDER: ⚠️ DO NOT FABRICATE — Replace with real metrics.',
  },
  {
    id: '5',
    client: '⚠️ PLACEHOLDER',
    industry: 'Healthcare',
    country: 'Australia',
    challenge: '⚠️ PLACEHOLDER: Describe the client\'s challenge in 1-2 sentences.',
    solution: '⚠️ PLACEHOLDER: Describe the solution implemented in 1-2 sentences.',
    results: '⚠️ PLACEHOLDER: ⚠️ DO NOT FABRICATE — Replace with real metrics.',
  },
  {
    id: '6',
    client: '⚠️ PLACEHOLDER',
    industry: 'Cybersecurity',
    country: 'Saudi Arabia',
    challenge: '⚠️ PLACEHOLDER: Describe the client\'s challenge in 1-2 sentences.',
    solution: '⚠️ PLACEHOLDER: Describe the solution implemented in 1-2 sentences.',
    results: '⚠️ PLACEHOLDER: ⚠️ DO NOT FABRICATE — Replace with real metrics.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-primary)]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              Case Studies
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Real Results from Real Clients
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto leading-relaxed">
              Case studies coming soon — get in touch to discuss your goals and see how we can help you build a predictable pipeline.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <Container>
          {/* Placeholder Warning Banner */}
          <div className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  PLACEHOLDER DATA — DO NOT PUBLISH
                </h3>
                <p className="text-amber-800 text-sm">
                  Replace all case study cards with real client data before launch. DO NOT fabricate metrics, client names, or results. Obtain written permission from clients before publishing case studies.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="group p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                    <span className="text-sm text-[var(--brand-gray)]">
                      {study.country}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-2">
                    {study.client}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-gray)] mb-2">
                    Challenge
                  </h4>
                  <p className="text-sm text-[var(--brand-gray)]">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-gray)] mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-[var(--brand-gray)]">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-[var(--brand-light)] rounded-lg">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)] mb-2">
                    Results
                  </h4>
                  <p className="text-sm text-[var(--brand-dark)] font-medium">
                    {study.results}
                  </p>
                </div>

                {/* Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium text-sm opacity-50 cursor-not-allowed"
                >
                  View Full Case Study
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
              Have a Success Story to Share?
            </h2>
            <p className="text-lg text-[var(--brand-gray)] mb-8">
              Get in touch to discuss your goals and see how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
