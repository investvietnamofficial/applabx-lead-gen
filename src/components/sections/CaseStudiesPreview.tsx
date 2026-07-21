'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRight, BookOpen } from 'lucide-react'

/**
 * CaseStudiesPreview — homepage case studies preview section.
 *
 * SETUP: Set SHOW_CASE_STUDIES = true and populate realCaseStudies
 * with genuine data before launch.
 *
 * DO NOT publish fabricated metrics or client names.
 */
const SHOW_CASE_STUDIES = false

interface CaseStudy {
  clientName: string
  industry: string
  country: string
  challenge: string
  solution: string
  results: { metric: string; label: string }[]
}

// TODO: Replace with real case study data (written consent from each client required).
const realCaseStudies: CaseStudy[] = [
  // {
  //   clientName: 'Acme Corp',
  //   industry: 'SaaS',
  //   country: 'Singapore',
  //   challenge: 'Needed 200 qualified leads/month for enterprise sales team.',
  //   solution: 'AI-powered multi-channel outreach with ABM targeting.',
  //   results: [
  //     { metric: '250+', label: 'Qualified Leads' },
  //     { metric: '35%', label: 'Reply Rate' },
  //     { metric: '4.2x', label: 'ROI' },
  //   ],
  // },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
    >
      <div className="mb-6">
        <div className="text-sm text-[var(--brand-accent)] font-medium mb-1">
          {cs.industry} · {cs.country}
        </div>
        <h3 className="text-xl font-semibold text-white">{cs.clientName}</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <div className="text-xs text-[var(--brand-gray-light)] uppercase tracking-wider mb-1">
            Challenge
          </div>
          <p className="text-[var(--brand-gray-light)] text-sm">{cs.challenge}</p>
        </div>
        <div>
          <div className="text-xs text-[var(--brand-gray-light)] uppercase tracking-wider mb-1">
            Solution
          </div>
          <p className="text-[var(--brand-gray-light)] text-sm">{cs.solution}</p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4">
          {cs.results.map((r) => (
            <div key={r.label} className="text-center">
              <div className="text-lg font-bold text-[var(--brand-accent)]">{r.metric}</div>
              <div className="text-xs text-[var(--brand-gray-light)]">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function CaseStudiesPreview() {
  // Don't show placeholder data in production
  if (!SHOW_CASE_STUDIES || realCaseStudies.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-[120px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real Results"
          subtitle="See how we've helped B2B companies transform their lead generation."
          className="[&>h2]:text-white [&>p]:text-[var(--brand-gray-light)]"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {realCaseStudies.slice(0, 3).map((cs, i) => (
            <CaseStudyCard key={cs.clientName} cs={cs} index={i} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <button className="inline-flex items-center gap-2 text-white font-medium hover:text-[var(--brand-accent)] transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
