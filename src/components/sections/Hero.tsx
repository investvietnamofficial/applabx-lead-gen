'use client'

import { motion, type Variants } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CTA_PRIMARY } from '@/lib/constants'
import { CheckCircle, ArrowRight, TrendingUp, Globe, Zap } from 'lucide-react'

// Honest trust indicators — replace with verified metrics once available
const trustIndicators = [
  { text: 'AI-powered targeting & multi-channel outreach', icon: CheckCircle },
  { text: 'Strategy calls with qualified prospects', icon: CheckCircle },
  { text: 'Results-backed approach across APAC & Middle East', icon: CheckCircle },
]

// Honest stats — replace with verified numbers before launch
const STATS = [
  { value: '10+', label: 'Countries', icon: Globe },
  { value: 'APAC + MEA', label: 'Markets Served', icon: Globe },
  { value: '200+', label: 'Data Sources', icon: TrendingUp },
  { value: 'Custom', label: 'Per Client', icon: Zap },
]

const pipelineSteps = [
  { label: 'Prospect', icon: '🔍' },
  { label: 'AI Targeting', icon: '🎯' },
  { label: 'Multi-Channel', icon: '📧' },
  { label: 'Qualified Lead', icon: '✅' },
  { label: 'Booked Call', icon: '📅' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

export function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-light)] via-white to-blue-50" />

        {/* Decorative blurred orbs */}
        <div className="absolute top-32 right-0 w-[600px] h-[600px] bg-[var(--brand-primary)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[var(--brand-accent)]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-primary)]/5 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="primary" className="mb-6">
                  AI-Powered Lead Generation
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="heading-1 text-[var(--brand-dark)] mb-6 leading-tight"
              >
                Stop Guessing.{' '}
                <span className="text-gradient">Start Generating Qualified B2B Leads.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-[var(--brand-gray)] mb-8 leading-relaxed"
              >
                We combine AI-powered targeting with proven outbound strategies to deliver a
                consistent pipeline of decision-maker leads — no more cold calls that go nowhere.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="xl">{CTA_PRIMARY}</Button>
                <Button variant="outline" size="xl">
                  See How It Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="mt-12 flex flex-wrap items-center gap-6 text-[var(--brand-gray)]"
              >
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <indicator.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                    <span className="text-sm font-medium">{indicator.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Pipeline Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block relative"
            >
              <div className="relative p-8">
                {/* Pipeline Flow */}
                <div className="flex items-center justify-between gap-2">
                  {pipelineSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="relative flex flex-col items-center"
                    >
                      {/* Node */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center text-2xl shadow-lg">
                        {step.icon}
                      </div>
                      {/* Label */}
                      <span className="mt-3 text-xs font-medium text-[var(--brand-gray)] text-center whitespace-nowrap">
                        {step.label}
                      </span>

                      {/* Connector Arrow */}
                      {index < pipelineSteps.length - 1 && (
                        <div className="absolute top-8 -right-6 w-8 h-0.5 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.15 }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[var(--brand-accent)]"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-[var(--brand-primary)]/10 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-[var(--brand-accent)]/10 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[var(--brand-dark)] relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/20 via-transparent to-[var(--brand-accent)]/20" />

        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Verified stats — replace with actual metrics when available */}
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-4">
                  <stat.icon className="w-7 h-7 text-[var(--brand-primary)]" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[var(--brand-gray-light)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
