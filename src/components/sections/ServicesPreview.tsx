'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/lib/constants'
import { ArrowRight, Target, Calendar, Mail, Users, Search, FileText, Bot, Database, TrendingUp } from 'lucide-react'

// Icon mapping for services
const iconMap: Record<string, React.ElementType> = {
  Target: Target,
  Calendar: Calendar,
  Mail: Mail,
  Users: Users,
  Search: Search,
  FileText: FileText,
  Bot: Bot,
  Database: Database,
  TrendingUp: TrendingUp,
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export function ServicesPreview() {
  // Only show first 6 services
  const displayedServices = services.slice(0, 6)

  return (
    <section className="section-padding bg-[var(--brand-light)]">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Full-Stack Lead Generation, From Strategy to Pipeline"
          subtitle="Comprehensive solutions to attract, engage, and convert your ideal B2B customers — powered by AI and proven outbound strategies."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Target

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-6 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand-primary)] hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-primary)] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[var(--brand-primary)] group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--brand-gray)] text-sm mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-[var(--brand-primary)] text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
