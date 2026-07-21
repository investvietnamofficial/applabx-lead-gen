'use client'

import { m, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { industries } from '@/lib/constants'
import { ArrowRight, Code, Brain, Users, Factory, Truck, Stethoscope, DollarSign, Shield, Briefcase } from 'lucide-react'

// Icon mapping for industries
const iconMap: Record<string, React.ElementType> = {
  Code: Code,
  Brain: Brain,
  Users: Users,
  Factory: Factory,
  Truck: Truck,
  Stethoscope: Stethoscope,
  DollarSign: DollarSign,
  Shield: Shield,
  Briefcase: Briefcase,
}

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
}

export function IndustriesPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Specialize In"
          subtitle="Deep expertise across B2B sectors — we understand your market, your buyers, and how to reach them."
        />

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => {
            const IconComponent = iconMap[industry.icon] || Briefcase

            return (
              <m.div key={industry.id} variants={itemVariants}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block p-5 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)] hover:shadow-lg text-center transition-all duration-300 bg-white"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--brand-primary)] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[var(--brand-primary)] group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-medium text-[var(--brand-dark)] group-hover:text-[var(--brand-primary)] transition-colors text-sm">
                    {industry.title}
                  </h3>
                </Link>
              </m.div>
            )
          })}
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
            href="/industries"
            className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all"
          >
            View All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </m.div>
      </Container>
    </section>
  )
}
