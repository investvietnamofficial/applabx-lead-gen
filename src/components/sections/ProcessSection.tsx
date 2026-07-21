'use client'

import { m } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Search, Lightbulb, Rocket, Filter, Handshake } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We audit your ICP, market, and existing pipeline to understand your unique challenges and opportunities.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Custom multi-channel campaign plan built for your goals, target market, and growth objectives.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Execution',
    description: 'AI-powered outreach across email, LinkedIn, and more — all personalized and automated.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Qualification',
    description: 'Every lead is scored, vetted, and CRM-ready — only the best prospects reach your team.',
    icon: Filter,
  },
  {
    number: '05',
    title: 'Handoff',
    description: 'Booked calls, qualified prospects, or raw data — delivered in your preferred format.',
    icon: Handshake,
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
          subtitle="A proven, repeatable process that delivers results from week one."
        />

        {/* Desktop View - Horizontal Timeline */}
        <div className="hidden lg:block relative mt-16">
          {/* Timeline connector line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-primary)]" />

          <div className="grid grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <m.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center text-white font-bold mx-auto mb-8 shadow-lg">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-[var(--brand-light)] rounded-xl p-6 hover:bg-[var(--brand-primary)]/5 transition-colors border border-transparent hover:border-[var(--brand-primary)]/20">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[var(--brand-gray)] text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View - Vertical Timeline */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-accent)]" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <m.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-[var(--brand-light)] rounded-xl p-6 border border-[var(--border)]">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[var(--brand-gray)] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
