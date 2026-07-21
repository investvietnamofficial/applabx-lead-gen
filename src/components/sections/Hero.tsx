'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, TrendingUp, Globe, Zap, Calendar, Target, Mail, Users } from 'lucide-react'

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
  { label: 'ICP Discovery', icon: Target },
  { label: 'Data Enrich', icon: Zap },
  { label: 'AI Personalize', icon: Mail },
  { label: 'Multi-Channel', icon: Users },
  { label: 'Booked Meeting', icon: Calendar },
]

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
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="opacity-0 animate-fade-in-up delay-0 mb-6">
                <Badge variant="primary" className="mb-6">
                  AI-Powered Lead Generation
                </Badge>
              </div>

              {/* H1 */}
              <h1 className="heading-1 text-[var(--brand-dark)] mb-6 leading-tight opacity-0 animate-fade-in-up delay-150">
                Stop Guessing.{' '}
                <span className="text-gradient">Start Generating Qualified B2B Leads.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-[var(--brand-gray)] mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-300">
                We combine AI-powered targeting with proven outbound strategies to deliver a
                consistent pipeline of decision-maker leads — no more cold calls that go nowhere.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-450">
                <Link href="/contact">
                  <Button size="xl">
                    <Calendar className="w-5 h-5" />
                    Book a Free Strategy Call
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="xl">
                    See How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Trust note */}
              <p className="text-sm text-[var(--brand-gray)] mt-6 opacity-0 animate-fade-in-up delay-600">
                No commitment required. Response within 24 hours.
              </p>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-[var(--brand-gray)] opacity-0 animate-fade-in-up delay-750">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <indicator.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                    <span className="text-sm font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Pipeline Illustration */}
            <div className="hidden lg:block relative opacity-0 animate-fade-in-up delay-500">
              <div className="relative p-8">
                {/* Pipeline Flow */}
                <div className="flex items-center justify-between gap-2">
                  {pipelineSteps.map((step, index) => (
                    <div
                      key={step.label}
                      className="relative flex flex-col items-center opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      {/* Node */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Label */}
                      <span className="mt-3 text-xs font-medium text-[var(--brand-gray)] text-center whitespace-nowrap">
                        {step.label}
                      </span>

                      {/* Connector Arrow */}
                      {index < pipelineSteps.length - 1 && (
                        <div className="absolute top-8 -right-6 w-8 h-0.5">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] opacity-0 animate-fade-in"
                            style={{ animationDelay: `${800 + index * 150}ms`, animationFillMode: 'forwards' }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Floating decorative elements */}
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-[var(--brand-primary)]/10 backdrop-blur-sm animate-float"
                />
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-[var(--brand-accent)]/10 backdrop-blur-sm animate-float"
                  style={{ animationDelay: '2.5s' }}
                />
              </div>
            </div>
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
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${1200 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-4">
                  <stat.icon className="w-7 h-7 text-[var(--brand-primary)]" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[var(--brand-gray-light)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
