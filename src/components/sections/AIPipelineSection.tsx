'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Search, Sparkles, Filter, Send, Database, BarChart3, Brain } from 'lucide-react'

const pipelineSteps = [
  {
    number: '01',
    title: 'Prospect Discovery',
    description: 'AI finds your ideal buyers across 200+ data sources',
    icon: Search,
  },
  {
    number: '02',
    title: 'AI Personalisation',
    description: 'Every message uniquely crafted for each prospect',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Qualification',
    description: 'Multi-step scoring to identify true decision-makers',
    icon: Filter,
  },
  {
    number: '04',
    title: 'Outreach Automation',
    description: 'Email + LinkedIn + multichannel sequences, automated',
    icon: Send,
  },
  {
    number: '05',
    title: 'CRM Sync',
    description: 'All data flows live into your CRM — zero manual entry',
    icon: Database,
  },
  {
    number: '06',
    title: 'Reporting',
    description: 'Real-time dashboards on every metric that matters',
    icon: BarChart3,
  },
  {
    number: '07',
    title: 'Optimisation',
    description: 'AI continuously improves based on response data',
    icon: Brain,
  },
]

export function AIPipelineSection() {
  return (
    <section className="section-padding bg-[var(--brand-dark)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-[120px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
            How We Work
          </span>
          <h2 className="heading-2 text-white mb-4">
            The AppLabx AI Pipeline Engine
          </h2>
          <p className="text-lg text-[var(--brand-gray-light)] max-w-2xl mx-auto">
            A fully automated lead generation system that handles everything from prospect discovery to booked meetings.
          </p>
        </motion.div>

        {/* Pipeline Steps */}
        <div className="relative">
          {/* Desktop View - Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between gap-4">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex-1 max-w-[160px]"
                >
                  {/* Connector Line */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-3 border-t-transparent border-b-3 border-b-transparent border-l-4 border-l-[var(--brand-accent)]" />
                    </div>
                  )}

                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                    {/* Number Badge */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center text-sm font-bold text-white mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/20 flex items-center justify-center mb-3">
                      <step.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-semibold mb-2 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-[var(--brand-gray-light)] text-xs leading-relaxed">
                      {step.description}
                    </p>

                    {/* Checkmark */}
                    <div className="mt-4 flex items-center gap-1 text-[var(--brand-accent)]">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs">Complete</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - Vertical Scroll */}
          <div className="lg:hidden space-y-4">
            <div className="flex flex-col gap-4">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center text-lg font-bold text-white">
                      {step.number}
                    </div>
                    {/* Vertical Connector */}
                    {index < pipelineSteps.length - 1 && (
                      <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-accent)] mx-auto mt-2" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[var(--brand-gray-light)] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button variant="primary" size="lg">
            See the Full Pipeline
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
