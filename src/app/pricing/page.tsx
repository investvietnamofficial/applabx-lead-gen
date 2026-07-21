import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { generateMetadata } from '@/lib/seo'
import { Check, ChevronDown, Calendar } from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'Pricing',
  description:
    'Transparent pricing for every stage of growth. No hidden fees. No long-term lock-ins. Just results.',
})

// FAQ data
const faqs = [
  {
    question: 'What if I don\'t hit my lead targets?',
    answer:
      'We adjust strategy and ensure commitments are met per our SLA terms. Your success is our priority, and we work until we deliver.',
  },
  {
    question: 'Is there a minimum contract length?',
    answer:
      'Month-to-month available. Annual plans receive discounts. Minimum terms vary by tier.',
  },
  {
    question: 'Can I switch plans?',
    answer:
      'Yes. You can upgrade or downgrade at any time. We make it easy to scale your program as your needs evolve.',
  },
  {
    question: 'What does "qualified lead" mean exactly?',
    answer:
      'A qualified lead is a verified contact who matches your ICP and has been pre-screened for fit and interest.',
  },
  {
    question: 'Do you offer trial periods?',
    answer:
      'Yes for select programs. Contact us to discuss options and find the right fit for your business.',
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: 'From $2,000/month',
    priceNote: '⚠️ PLACEHOLDER — Update with actual pricing',
    description: 'Early-stage startups & SMBs',
    idealFor: '1–2 target markets',
    features: [
      'Up to 200 qualified leads/month',
      '1 channel (Email OR LinkedIn)',
      'Basic ICP definition',
      'CRM setup & integration',
      'Monthly reporting',
      'Email support',
    ],
    cta: 'Get Started',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Growth',
    price: 'From $5,000/month',
    priceNote: '⚠️ PLACEHOLDER — Update with actual pricing',
    description: 'Scaling companies with expansion goals',
    idealFor: '3–5 target markets',
    features: [
      'Everything in Starter',
      'Up to 750 qualified leads/month',
      '2 channels (Email + LinkedIn)',
      'AI-powered personalization',
      'A/B testing & optimization',
      'Dedicated account manager',
      'Weekly reporting + strategy calls',
    ],
    cta: 'Get Started',
    href: '/contact',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: null,
    description: 'Large organizations with complex needs',
    idealFor: 'Unlimited target markets',
    features: [
      'Everything in Growth',
      'Unlimited leads',
      'All channels + ABM',
      'Multi-country targeting',
      'Custom AI pipeline engine',
      'Dedicated team + 24/7 support',
      'Real-time dashboards + SLA',
    ],
    cta: 'Contact Us',
    href: '/contact',
    popular: false,
  },
]

export default function PricingPage() {
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
              Pricing
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Transparent Pricing for Every Stage of Growth
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No long-term lock-ins. Just results.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <Container>
          {/* Placeholder Warning Banner */}
          <div className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  PRICING IS PLACEHOLDER
                </h3>
                <p className="text-amber-800 text-sm">
                  Update with actual pricing before launch. All prices exclude applicable taxes. Prices shown are starting rates only.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-white shadow-2xl scale-105'
                    : 'bg-white border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="warning" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-[var(--brand-dark)]'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${tier.popular ? 'text-white/80' : 'text-[var(--brand-gray)]'}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className={`text-3xl font-bold ${tier.popular ? 'text-white' : 'text-[var(--brand-dark)]'}`}>
                    {tier.price}
                  </span>
                </div>
                {tier.priceNote && (
                  <p className="text-xs text-amber-600 mb-4">{tier.priceNote}</p>
                )}
                <p className={`text-sm mb-6 ${tier.popular ? 'text-white/70' : 'text-[var(--brand-gray)]'}`}>
                  Ideal for: {tier.idealFor}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.popular ? 'text-white' : 'text-[var(--brand-accent)]'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.popular ? 'text-white/90' : 'text-[var(--brand-gray)]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={tier.href}>
                  <Button
                    variant={tier.popular ? 'accent' : 'primary'}
                    className={`w-full ${
                      tier.popular
                        ? 'bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]'
                        : ''
                    }`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-[var(--brand-dark)] text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-xl border border-[var(--border)] overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[var(--brand-light)] transition-colors list-none">
                    <span className="font-semibold text-[var(--brand-dark)] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-[var(--brand-gray)] group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[var(--brand-gray)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team. We&apos;ll help you find the right plan for your goals.
            </p>
            <Link href="/contact">
              <Button size="xl" className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]">
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
