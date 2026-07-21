import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Calculator, DollarSign, Target, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free B2B Lead Generation Tools | AppLabx',
  description: 'Free B2B lead generation calculators and tools. Calculate ROI, CAC, and generate your ideal customer profile (ICP) to optimize your lead generation.',
}

const tools = [
  {
    title: 'ROI Calculator',
    description: 'Calculate the return on investment for your lead generation campaigns. Enter your numbers to see your potential ROI.',
    href: '/tools/roi-calculator',
    icon: DollarSign,
    color: 'primary',
  },
  {
    title: 'CAC Calculator',
    description: 'Calculate your customer acquisition cost and compare it against customer lifetime value to assess your business health.',
    href: '/tools/cac-calculator',
    icon: Calculator,
    color: 'accent',
  },
  {
    title: 'ICP Generator',
    description: 'Build your ideal customer profile step by step. Create a structured ICP you can use for targeting and outreach.',
    href: '/tools/icp-generator',
    icon: Target,
    color: 'primary',
  },
]

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Free Tools
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Free B2B Lead Generation Tools
            </h1>
            <p className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Calculate ROI, CAC, and build your ideal customer profile. Free tools to optimize your lead generation strategy.
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

      {/* Tools Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block bg-[var(--brand-light)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[var(--border)] hover:border-[var(--brand-primary)]/30"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    tool.color === 'primary' 
                      ? 'bg-[var(--brand-primary)]/10' 
                      : 'bg-[var(--brand-accent)]/10'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      tool.color === 'primary' 
                        ? 'text-[var(--brand-primary)]' 
                        : 'text-[var(--brand-accent)]'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3 group-hover:text-[var(--brand-primary)] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[var(--brand-gray)] mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-3 transition-all">
                    Use Calculator
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
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
              Want a Custom Analysis?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a free strategy call. We&apos;ll analyze your lead generation and provide personalized recommendations.
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
