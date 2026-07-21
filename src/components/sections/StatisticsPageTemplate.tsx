'use client'

// framer-motion removed — replaced with CSS animations
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { StatCard } from '@/components/ui/StatCard'
import {
  ArrowRight,
  Calendar,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Mail,
  ChevronDown,
  Lightbulb,
  FileText,
  Share2,
  Copy,
  CheckCircle,
} from 'lucide-react'

interface StatItem {
  value: string
  label: string
  source?: string
  trend?: {
    direction: 'up' | 'down' | 'neutral'
    value: string
  }
  description?: string
}

interface StatisticsPageTemplateProps {
  title: string
  description: string
  intro: string
  whyThisMatters?: string
  stats: StatItem[]
  keyTakeaways?: string[]
  methodology?: string
  sources: string[]
  canonical: string
  relatedPages?: { label: string; href: string }[]
  relatedReading?: { label: string; href: string; description?: string }[]
}

export default function StatisticsPageTemplate({
  title,
  description,
  intro,
  whyThisMatters,
  stats,
  keyTakeaways = [],
  methodology,
  sources,
  canonical,
  relatedPages = [],
  relatedReading = [],
}: StatisticsPageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <Link href="/statistics">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Statistics Hub
                </Badge>
              </Link>
            </div>

            {/* H1 */}
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              {title}
            </h1>

            {/* Description */}
            <p className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link href="/contact">
                <Button size="xl">
                  <Calendar className="w-5 h-5" />
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--brand-light)] to-white rounded-2xl p-8 md:p-12 border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[var(--brand-primary)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--brand-dark)]">
                  Why This Matters
                </h2>
              </div>
              <p className="text-lg text-[var(--brand-gray)] leading-relaxed">
                {intro}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics Grid */}
      <section className="py-16 bg-[var(--brand-light-secondary)]">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
                Key Statistics
              </h2>
              <p className="text-lg text-[var(--brand-gray)]">
                Data-driven insights to inform your strategy
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  source={stat.source}
                  trend={stat.trend}
                  description={stat.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Takeaways Section */}
      {keyTakeaways.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[var(--brand-light)] to-white rounded-2xl p-8 md:p-12 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--brand-dark)]">
                    Key Takeaways
                  </h2>
                </div>
                <ul className="space-y-4">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--brand-gray)] leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Methodology Section */}
      {methodology && (
        <section className="py-12 bg-[var(--brand-light-secondary)]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item
                  value="methodology"
                  className="bg-white rounded-xl border border-[var(--border)] overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left hover:bg-[var(--brand-light)] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[var(--brand-primary)]" />
                        </div>
                        <span className="font-semibold text-[var(--brand-dark)]">
                          Methodology
                        </span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-[var(--brand-gray)] group-data-[state=open]:rotate-180 transition-transform" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="px-6 pb-6 text-[var(--brand-gray)] leading-relaxed">
                      {methodology}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </Container>

          <style jsx>{`
            @keyframes slideDown {
              from {
                height: 0;
              }
              to {
                height: var(--radix-accordion-content-height);
              }
            }
            @keyframes slideUp {
              from {
                height: var(--radix-accordion-content-height);
              }
              to {
                height: 0;
              }
            }
            .animate-slideDown {
              animation: slideDown 0.3s ease-out;
            }
            .animate-slideUp {
              animation: slideUp 0.3s ease-out;
            }
          `}</style>
        </section>
      )}

      {/* Related Reading Section */}
      {relatedReading.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-2">
                  Related Reading
                </h2>
                <p className="text-[var(--brand-gray)]">
                  Dive deeper into these related topics
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {relatedReading.map((reading, index) => (
                  <Link
                    key={index}
                    href={reading.href}
                    className="group flex items-start gap-4 p-5 bg-[var(--brand-light)]/50 hover:bg-[var(--brand-light)] rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center group-hover:bg-[var(--brand-primary)]/20 transition-colors flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-[var(--brand-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors">
                        {reading.label}
                      </h3>
                      {reading.description && (
                        <p className="text-sm text-[var(--brand-gray)] mt-1">
                          {reading.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-2">
                  Explore Related Statistics
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href}>
                    <Button variant="outline" size="lg">
                      {page.label}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Sources Section */}
      <section className="py-12 bg-[var(--brand-light)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-5 h-5 text-[var(--brand-gray)]" />
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                Data Sources
              </h3>
            </div>
            <ul className="space-y-2">
              {sources.map((source, index) => (
                <li key={index} className="text-sm text-[var(--brand-gray)]">
                  • {source}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Share This Page Section */}
      <section className="py-8 bg-white border-t border-[var(--border)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-[var(--brand-gray)]">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share this page:</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href)
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--brand-dark)] bg-[var(--brand-light)] hover:bg-[var(--brand-primary)]/10 rounded-lg border border-[var(--border)] hover:border-[var(--brand-primary)]/30 transition-all"
                  title="Copy link"
                >
                  <Copy className="w-4 h-4" />
                  Copy Link
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonical || '')}&text=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--brand-dark)] bg-[var(--brand-light)] hover:bg-[var(--brand-primary)]/10 rounded-lg border border-[var(--border)] hover:border-[var(--brand-primary)]/30 transition-all"
                  title="Share on X (Twitter)"
                >
                  <span className="text-xs font-bold">X</span>
                  X (Twitter)
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--brand-dark)] bg-[var(--brand-light)] hover:bg-[var(--brand-primary)]/10 rounded-lg border border-[var(--border)] hover:border-[var(--brand-primary)]/30 transition-all"
                  title="Share on LinkedIn"
                >
                  <span className="text-xs font-bold">in</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--brand-accent)]/30 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              Put These Insights to Work
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call to discuss how these statistics apply to your specific business and how we can help you achieve results.
            </p>

            <Link href="/contact">
              <Button
                size="xl"
                className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Strategy Call
              </Button>
            </Link>

            <p className="mt-6">
              <Link href="/statistics" className="text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors">
                View all statistics
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
