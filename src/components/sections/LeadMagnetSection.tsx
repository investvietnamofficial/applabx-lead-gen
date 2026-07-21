'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle } from 'lucide-react'

export function LeadMagnetSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="section-padding bg-[var(--brand-dark)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand-accent)]/20 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
              Free Audit
            </span>
            <h2 className="heading-2 text-white mb-6">
              Get Your Free Lead Generation Audit
            </h2>
            <p className="text-xl text-[var(--brand-gray-light)] mb-8 leading-relaxed">
              Discover why leads aren&apos;t converting, what your competitors are doing,
              and exactly what to fix — in 48 hours.
            </p>

            {/* Benefits */}
            <ul className="space-y-4">
              {[
                'ICP & persona analysis',
                'Competitor benchmarking',
                'Channel effectiveness review',
                'Quick wins & recommendations',
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-[var(--brand-gray-light)]">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="audit-email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[var(--brand-gray-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Get My Free Audit
                    <Send className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-center text-sm text-[var(--brand-gray-light)]">
                    No credit card. No obligation. Just actionable insights.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-[var(--brand-gray-light)]">
                    We&apos;ll send your free audit within 48 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--brand-accent)]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
