import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { countries } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'
import { ArrowRight, Calendar, Globe, MapPin, TrendingUp } from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'Where We Generate Leads — 10 Countries',
  description:
    'AppLabx generates B2B leads across 10 countries in APAC and the Middle East — Singapore, Vietnam, Malaysia, Thailand, Indonesia, Philippines, Australia, UAE, Saudi Arabia, and Qatar.',
})

export default function CountriesPage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
      ================================================================ */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--brand-light)] to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              Our Markets
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Where We Generate Leads
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              10+ countries across APAC, Middle East, and beyond — local expertise, global results
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================================
          COUNTRIES GRID
      ================================================================ */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <article
                key={country.id}
                className="group p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-primary)] hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{country.flag}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[var(--brand-dark)]">
                      {country.name}
                    </h2>
                    <p className="text-sm text-[var(--brand-gray)] mt-1">
                      B2B Lead Generation
                    </p>
                  </div>
                </div>
                <p className="text-[var(--brand-gray)] mb-6">{country.description}</p>
                <Link
                  href={`/countries/${country.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================================
          REGIONAL OVERVIEW
      ================================================================ */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="Our Geographic Reach"
            title="Local Expertise, Regional Scale"
            subtitle="We don't just translate — we adapt. Every market gets a tailored approach."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                region: 'Asia-Pacific (APAC)',
                flag: '🌏',
                countries: 'Singapore, Vietnam, Malaysia, Thailand, Indonesia, Philippines, Australia',
                description: 'A diverse region spanning mature financial hubs (Singapore, Australia) to fast-growing emerging markets (Vietnam, Indonesia). Each market has unique buyer behavior and channel preferences we master.',
                icon: TrendingUp,
              },
              {
                region: 'Southeast Asia (ASEAN)',
                flag: '🌴',
                countries: 'Singapore, Vietnam, Malaysia, Thailand, Indonesia, Philippines',
                description: 'The fastest-growing B2B market in the world. 700M+ population, rising middle class, and digital transformation underway in every country. We have boots on the ground in Singapore and Vietnam.',
                icon: Globe,
              },
              {
                region: 'Gulf & Middle East',
                flag: '🏜️',
                countries: 'UAE, Saudi Arabia, Qatar',
                description: 'High-value, relationship-driven markets undergoing rapid transformation. Vision 2030 (Saudi Arabia) and UAE\'s continued growth create massive B2B opportunity for the right solution providers.',
                icon: MapPin,
              },
            ].map((item) => (
              <div
                key={item.region}
                className="bg-white rounded-2xl p-8 border border-[var(--border)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{item.flag}</span>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)]">{item.region}</h3>
                </div>
                <p className="text-xs font-medium text-[var(--brand-primary)] mb-3">{item.countries}</p>
                <p className="text-[var(--brand-gray)] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================================
          CTA SECTION
      ================================================================ */}
      <section className="section-padding bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
        <Container>
          <div className="text-center text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="heading-2 mb-4">
              Ready to Expand Into a New Market?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re targeting Singapore, Vietnam, the UAE, or all 10 markets — let&apos;s build a
              lead generation strategy that works for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]">
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
