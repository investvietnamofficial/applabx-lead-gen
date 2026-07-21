import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { comparisons } from '@/lib/comparisons'
import { ArrowRight, Scale, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compare Tools & Strategies | AppLabx',
  description: 'Compare the best B2B lead generation tools and strategies. Get expert insights on Apollo, ZoomInfo, Clay, cold email, LinkedIn outreach, and more.',
}

export default function ComparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Comparison Guides
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Compare Lead Generation Tools & Strategies
            </h1>
            <p className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert comparisons of the best B2B lead generation tools, platforms, and strategies. Make informed decisions for your growth.
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

      {/* Comparisons Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.id}
                href={`/compare/${comparison.slug}`}
                className="group block bg-[var(--brand-light)] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-[var(--border)] hover:border-[var(--brand-primary)]/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors mb-2">
                      {comparison.leftOption.name} vs {comparison.rightOption.name}
                    </h3>
                    <p className="text-sm text-[var(--brand-gray)] line-clamp-2">
                      {comparison.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--brand-gray)] group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--brand-gray)]">
                  <span className="px-2 py-1 bg-white rounded border border-[var(--border)]">
                    {comparison.leftOption.name}
                  </span>
                  <span className="text-[var(--brand-gray)]">vs</span>
                  <span className="px-2 py-1 bg-white rounded border border-[var(--border)]">
                    {comparison.rightOption.name}
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
              Need Help Choosing the Right Strategy?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a free strategy call. We&apos;ll help you evaluate your options and build a lead generation strategy that works.
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
