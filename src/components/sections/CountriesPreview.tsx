'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { countries } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function CountriesPreview() {
  return (
    <section className="section-padding bg-[var(--brand-light)]">
      <Container>
        <SectionHeading
          eyebrow="Global Reach"
          title="Where We Generate Leads"
          subtitle="10+ Countries. 1 Consistent Pipeline. Local expertise with global scale."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/countries/${country.slug}`}
              className="group block p-5 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)] hover:shadow-lg bg-white transition-all duration-300 h-full"
            >
              {/* Flag */}
              <div className="text-4xl mb-3" role="img" aria-label={country.name}>
                {country.flag}
              </div>

              {/* Name */}
              <h3 className="font-semibold text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors mb-2">
                {country.name}
              </h3>

              {/* Short Description */}
              <p className="text-[var(--brand-gray)] text-xs line-clamp-2">
                {country.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all"
          >
            View All Countries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
