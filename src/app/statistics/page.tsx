import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, BarChart3, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'B2B Lead Generation Statistics & Benchmarks | AppLabx',
  description: 'Explore key B2B lead generation statistics including cold email benchmarks, inbound vs outbound costs, and marketing effectiveness data.',
}

const statisticsPages = [
  {
    title: 'Lead Generation Statistics',
    description: 'Key metrics on inbound vs outbound costs, conversion rates, and ROI benchmarks for B2B companies.',
    href: '/statistics/lead-generation',
    stat: '61%',
    statLabel: 'Lower Cost for Inbound',
  },
  {
    title: 'Cold Email Statistics',
    description: 'Average reply rates, open rates, best sending times, and cold email benchmarks.',
    href: '/statistics/cold-email',
    stat: '1-5%',
    statLabel: 'Average Reply Rate',
  },
  {
    title: 'B2B Marketing Statistics',
    description: 'LinkedIn effectiveness, buyer behavior data, channel ROI, and marketing technology adoption.',
    href: '/statistics/b2b-marketing',
    stat: '#1',
    statLabel: 'LinkedIn for B2B Social',
  },
]

export default function StatisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistics Hub
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              B2B Lead Generation Statistics
            </h1>
            <p className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Data-driven insights and industry benchmarks to inform your lead generation strategy. Real statistics from verified sources.
            </p>
            <Link href="/contact">
              <Button size="xl">
                <Calendar className="w-5 h-5" />
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Statistics Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {statisticsPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group block bg-[var(--brand-light)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[var(--border)] hover:border-[var(--brand-primary)]/30"
              >
                <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] p-6 text-white">
                  <div className="text-5xl font-bold mb-1">{page.stat}</div>
                  <div className="text-sm text-white/70">{page.statLabel}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3 group-hover:text-[var(--brand-primary)] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-[var(--brand-gray)] mb-4 leading-relaxed">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-3 transition-all">
                    View Statistics
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              Put These Insights to Work
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a free strategy call to discuss how these statistics apply to your business and how we can help you achieve results.
            </p>
            <Link href="/contact">
              <Button size="xl" className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
