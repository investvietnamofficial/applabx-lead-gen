import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { industries } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'
import {
  Code,
  Brain,
  Users,
  Factory,
  Truck,
  Heart,
  BarChart3,
  Lock,
  Handshake,
  ArrowRight,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Code,
  Brain,
  Users,
  Factory,
  Truck,
  Stethoscope: Heart,
  DollarSign: BarChart3,
  Shield: Lock,
  Briefcase: Handshake,
}

export const metadata: Metadata = generateMetadata({
  title: 'Industries We Specialize In',
  description:
    'Deep expertise across 9 B2B verticals — each with tailored lead generation strategies. SaaS, AI, HR Tech, Manufacturing, Logistics, Healthcare, FinTech, Cybersecurity, and Professional Services.',
})

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--brand-light)] to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              Industries
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Industries We Specialize In
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Deep expertise across 9 B2B verticals — each with tailored lead generation strategies
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = iconMap[industry.icon] || BarChart3
              return (
                <article
                  key={industry.id}
                  className="group p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-primary)] hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-accent)] transition-colors">
                    <IconComponent className="w-7 h-7 text-[var(--brand-accent)] group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-[var(--brand-gray)] mb-6">
                    {industry.description}
                  </p>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Industries Process */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Industry-Specific Strategies That Work"
            subtitle="We don't use generic templates. Every industry gets a tailored approach."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research',
                description:
                  'Deep dive into your industry landscape, competitors, and target audience.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Develop custom messaging and channel strategies for maximum relevance.',
              },
              {
                step: '03',
                title: 'Execute',
                description:
                  'Launch multi-channel campaigns with continuous optimization.',
              },
              {
                step: '04',
                title: 'Scale',
                description:
                  'Expand successful campaigns while testing new opportunities.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-primary)] text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--brand-gray)] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--brand-dark)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-4">
              Ready to Dominate Your Industry?
            </h2>
            <p className="text-xl text-[var(--brand-gray-light)] mb-8">
              Let us discuss how we can generate leads specifically for your sector.
            </p>
            <Link href="/contact">
              <Button size="lg">Book a Strategy Call</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
