'use client'

import { Container } from '@/components/ui/Container'
import { AlertTriangle, MessageSquareX, Target, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: MessageSquareX,
    title: 'Cold outreach that gets ignored',
    description: 'Generic messages, wrong contacts, no personalization — your emails land in spam or get deleted before the second sentence.',
  },
  {
    icon: Target,
    title: 'Leads that never convert',
    description: 'Wrong ICP targeting, no qualification process, poor lead quality — your sales team wastes hours on prospects who will never buy.',
  },
  {
    icon: TrendingDown,
    title: 'Pipeline that dries up',
    description: 'Inconsistent lead flow, no predictability, revenue rollercoaster — you can\'t plan for growth when your pipeline is empty month after month.',
  },
]

export function ProblemsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-red-600">
            The Problem
          </span>
          <h2 className="heading-2 text-[var(--brand-dark)]">
            The Lead Generation Problem Is Real
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="relative p-8 rounded-2xl border-2 border-red-100 bg-red-50/50 hover:bg-red-50 transition-colors group"
            >
              {/* Warning indicator */}
              <div className="absolute top-4 right-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <problem.icon className="w-7 h-7 text-red-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-3">
                {problem.title}
              </h3>
              <p className="text-[var(--brand-gray)] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution teaser */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-[var(--brand-dark)]">
            AppLabx solves all three.
          </p>
        </div>
      </Container>
    </section>
  )
}
