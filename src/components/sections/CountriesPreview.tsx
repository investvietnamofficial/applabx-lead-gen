'use client'

import { m, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { countries } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
}

export function CountriesPreview() {
  return (
    <section className="section-padding bg-[var(--brand-light)]">
      <Container>
        <SectionHeading
          eyebrow="Global Reach"
          title="Where We Generate Leads"
          subtitle="10+ Countries. 1 Consistent Pipeline. Local expertise with global scale."
        />

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {countries.map((country) => (
            <m.div key={country.id} variants={itemVariants}>
              <Link
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
            </m.div>
          ))}
        </m.div>

        {/* View All Link */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all"
          >
            View All Countries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </m.div>
      </Container>
    </section>
  )
}
