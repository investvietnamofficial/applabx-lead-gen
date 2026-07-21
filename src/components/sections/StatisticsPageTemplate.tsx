'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
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
  stats: StatItem[]
  sources: string[]
  canonical: string
  relatedPages?: { label: string; href: string }[]
}

export default function StatisticsPageTemplate({
  title,
  description,
  intro,
  stats,
  sources,
  relatedPages = [],
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
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/statistics">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Statistics Hub
                </Badge>
              </Link>
            </m.div>

            {/* H1 */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 text-[var(--brand-dark)] mb-6"
            >
              {title}
            </m.h1>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </m.p>

            {/* CTAs */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="xl">
                  <Calendar className="w-5 h-5" />
                  Book a Strategy Call
                </Button>
              </Link>
            </m.div>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
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
          </m.div>
        </Container>
      </section>

      {/* Statistics Grid */}
      <section className="py-16 bg-[var(--brand-light-secondary)]">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
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
          </m.div>
        </Container>
      </section>

      {/* Related Pages */}
      {relatedPages.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
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
            </m.div>
          </Container>
        </section>
      )}

      {/* Sources Section */}
      <section className="py-12 bg-[var(--brand-light)]">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
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
          </m.div>
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
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
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
          </m.div>
        </Container>
      </section>
    </>
  )
}
