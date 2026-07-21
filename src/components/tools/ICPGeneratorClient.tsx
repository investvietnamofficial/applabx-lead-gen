'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  Target,
  Building2,
  Globe,
  Users,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  FileText,
  Download,
} from 'lucide-react'

const COMPANY_TYPES = [
  { id: 'saas', label: 'SaaS / Software', icon: '🖥️' },
  { id: 'services', label: 'Professional Services', icon: '💼' },
  { id: 'ecommerce', label: 'E-commerce / Retail', icon: '🛒' },
  { id: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
  { id: 'fintech', label: 'FinTech', icon: '💳' },
  { id: 'healthcare', label: 'Healthcare / MedTech', icon: '🏥' },
  { id: 'other', label: 'Other', icon: '📊' },
]

const COMPANY_SIZES = [
  { id: 'startup', label: 'Startup', detail: '1–50 employees', color: 'bg-blue-100 text-blue-700' },
  { id: 'smb', label: 'SMB', detail: '51–500 employees', color: 'bg-green-100 text-green-700' },
  { id: 'midmarket', label: 'Mid-Market', detail: '501–2,000 employees', color: 'bg-purple-100 text-purple-700' },
  { id: 'enterprise', label: 'Enterprise', detail: '2,000+ employees', color: 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]' },
]

const GEOGRAPHIES = [
  'Singapore', 'Vietnam', 'Malaysia', 'Thailand', 'Indonesia',
  'Philippines', 'Australia', 'UAE', 'Saudi Arabia', 'Qatar', 'Global',
]

const DECISION_LEVELS = [
  { id: 'c-suite', label: 'C-Suite', detail: 'CEO, CTO, CFO, COO, CMO', icon: '👔' },
  { id: 'vp', label: 'VP / SVP', detail: 'VP of Sales, VP of Marketing, VP of Engineering', icon: '📈' },
  { id: 'director', label: 'Director', detail: 'Sales Director, Marketing Director, Operations Director', icon: '🎯' },
  { id: 'manager', label: 'Manager', detail: 'Sales Manager, Marketing Manager, Product Manager', icon: '📊' },
]

const CHALLENGES = [
  { id: 'lead-volume', label: 'Lead Volume', detail: 'Need more leads, faster pipeline growth', icon: '📈' },
  { id: 'lead-quality', label: 'Lead Quality', detail: 'Leads convert poorly, wrong ICP fit', icon: '🎯' },
  { id: 'scaling', label: 'Scaling Outreach', detail: 'Can\'t scale manual outreach efforts', icon: '⚡' },
  { id: 'crm', label: 'CRM Integration', detail: 'Data silos, poor CRM hygiene', icon: '🔗' },
  { id: 'enrichment', label: 'Data Enrichment', detail: 'Missing firmographics, incomplete profiles', icon: '📋' },
]

const TOTAL_STEPS = 5

export function ICPGeneratorClient() {
  const [step, setStep] = useState(1)
  const [companyType, setCompanyType] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [geography, setGeography] = useState('')
  const [decisionLevel, setDecisionLevel] = useState('')
  const [challenge, setChallenge] = useState('')
  const [generated, setGenerated] = useState(false)

  const canProceed = (s: number) => {
    if (s === 1) return !!companyType
    if (s === 2) return !!companySize
    if (s === 3) return !!geography
    if (s === 4) return !!decisionLevel
    if (s === 5) return !!challenge
    return false
  }

  const handleGenerate = () => {
    setGenerated(true)
  }

  const selectedCompanyType = COMPANY_TYPES.find((c) => c.id === companyType)
  const selectedSize = COMPANY_SIZES.find((s) => s.id === companySize)
  const selectedGeo = geography
  const selectedLevel = DECISION_LEVELS.find((l) => l.id === decisionLevel)
  const selectedChallenge = CHALLENGES.find((c) => c.id === challenge)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-accent)]/10 rounded-full blur-[120px] -translate-y-1/2" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Free Tool
            </div>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              Ideal Customer Profile Generator
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Answer 5 questions to build a structured ICP for your B2B outreach. A well-defined ICP is the foundation of every successful lead generation campaign.
            </p>
          </div>
        </Container>
      </section>

      {/* Wizard */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">

            {/* Progress bar */}
            {!generated && (
              <div className="mb-10">
                <div className="flex justify-between text-xs text-[var(--brand-gray)] mb-2">
                  <span>Step {step} of {TOTAL_STEPS}</span>
                  <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
                </div>
                <div className="w-full bg-[var(--brand-light-secondary)] rounded-full h-2">
                  <div
                    className="bg-[var(--brand-accent)] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {!generated ? (
              <div className="space-y-8">
                {/* Step 1: Company Type */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                      What type of company do you sell to?
                    </h2>
                    <p className="text-[var(--brand-gray)] mb-6">
                      Select the category that best describes your target customer.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {COMPANY_TYPES.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setCompanyType(type.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                            companyType === type.id
                              ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5'
                              : 'border-[var(--border)] hover:border-[var(--brand-accent)]/50'
                          }`}
                        >
                          <span className="text-2xl">{type.icon}</span>
                          <span className="font-medium text-[var(--brand-dark)]">{type.label}</span>
                          {companyType === type.id && (
                            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Company Size */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                      What size company do you primarily target?
                    </h2>
                    <p className="text-[var(--brand-gray)] mb-6">
                      Company size determines decision-making dynamics and budget availability.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {COMPANY_SIZES.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setCompanySize(size.id)}
                          className={`flex flex-col items-start gap-1 p-5 rounded-xl border-2 text-left transition-all ${
                            companySize === size.id
                              ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5'
                              : 'border-[var(--border)] hover:border-[var(--brand-accent)]/50'
                          }`}
                        >
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${size.color}`}>
                            {size.label}
                          </span>
                          <span className="font-medium text-[var(--brand-dark)]">{size.detail}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Geography */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                      Which markets are you targeting?
                    </h2>
                    <p className="text-[var(--brand-gray)] mb-6">
                      Select your primary geographic focus.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {GEOGRAPHIES.map((geo) => (
                        <button
                          key={geo}
                          onClick={() => setGeography(geo)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                            geography === geo
                              ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)] text-white'
                              : 'border-[var(--border)] text-[var(--brand-gray)] hover:border-[var(--brand-accent)]/50'
                          }`}
                        >
                          {geo}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Decision Level */}
                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                      Who is your primary decision-maker?
                    </h2>
                    <p className="text-[var(--brand-gray)] mb-6">
                      Identify the role that holds budget authority and signs off on purchases.
                    </p>
                    <div className="space-y-3">
                      {DECISION_LEVELS.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setDecisionLevel(level.id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                            decisionLevel === level.id
                              ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5'
                              : 'border-[var(--border)] hover:border-[var(--brand-accent)]/50'
                          }`}
                        >
                          <span className="text-2xl">{level.icon}</span>
                          <div>
                            <div className="font-semibold text-[var(--brand-dark)]">{level.label}</div>
                            <div className="text-sm text-[var(--brand-gray)]">{level.detail}</div>
                          </div>
                          {decisionLevel === level.id && (
                            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Challenge */}
                {step === 5 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                      What is your biggest lead generation challenge?
                    </h2>
                    <p className="text-[var(--brand-gray)] mb-6">
                      This helps tailor your ICP and recommended outreach channels.
                    </p>
                    <div className="space-y-3">
                      {CHALLENGES.map((ch) => (
                        <button
                          key={ch.id}
                          onClick={() => setChallenge(ch.id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                            challenge === ch.id
                              ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/5'
                              : 'border-[var(--border)] hover:border-[var(--brand-accent)]/50'
                          }`}
                        >
                          <span className="text-2xl">{ch.icon}</span>
                          <div>
                            <div className="font-semibold text-[var(--brand-dark)]">{ch.label}</div>
                            <div className="text-sm text-[var(--brand-gray)]">{ch.detail}</div>
                          </div>
                          {challenge === ch.id && (
                            <CheckCircle2 className="w-5 h-5 text-[var(--brand-accent)] ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--brand-gray)] hover:bg-[var(--brand-light)] transition-colors font-medium"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < TOTAL_STEPS ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={!canProceed(step)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-primary)] text-white font-medium hover:bg-[var(--brand-primary-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleGenerate}
                      disabled={!canProceed(step)}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--brand-accent)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Generate My ICP <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Generated ICP Output */
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                    Your Ideal Customer Profile
                  </h2>
                  <button
                    onClick={() => { setGenerated(false); setStep(1); setCompanyType(''); setCompanySize(''); setGeography(''); setDecisionLevel(''); setChallenge(''); }}
                    className="text-sm text-[var(--brand-primary)] hover:underline"
                  >
                    Start over
                  </button>
                </div>

                <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-primary)] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Generated ICP</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-1">Company Type</div>
                      <div className="font-semibold">{selectedCompanyType?.icon} {selectedCompanyType?.label}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-1">Company Size</div>
                      <div className="font-semibold">{selectedSize?.label} — {selectedSize?.detail}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-1">Geography</div>
                      <div className="font-semibold">🌍 {selectedGeo}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-1">Decision Maker</div>
                      <div className="font-semibold">{selectedLevel?.icon} {selectedLevel?.label}</div>
                    </div>
                  </div>
                </div>

                {/* Detailed ICP Card */}
                <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
                  {[
                    {
                      icon: <Building2 className="w-5 h-5 text-[var(--brand-primary)]" />,
                      title: 'Company Profile',
                      content: `${selectedCompanyType?.label} companies, ${selectedSize?.detail}, primarily in ${selectedGeo}. Target organizations with demonstrated need for solutions in this category, with active hiring growth or digital transformation initiatives.`,
                    },
                    {
                      icon: <Globe className="w-5 h-5 text-[var(--brand-accent)]" />,
                      title: 'Geography',
                      content: `${selectedGeo} — focus on metropolitan business districts and established commercial zones. Prioritize companies with international presence or export-oriented operations for regional expansion relevance.`,
                    },
                    {
                      icon: <Users className="w-5 h-5 text-[var(--brand-primary)]" />,
                      title: 'Key Decision Makers',
                      content: `${selectedLevel?.label} (${selectedLevel?.detail}). Target executives who own the problem you're solving. For ${selectedChallenge?.label.toLowerCase()}, engage both the problem owner and their manager for multi-threading.`,
                    },
                    {
                      icon: <AlertCircle className="w-5 h-5 text-[var(--brand-accent)]" />,
                      title: 'Primary Pain Points',
                      content: `${selectedChallenge?.detail}. This challenge indicates they are actively seeking solutions — making them more responsive to outreach. Look for trigger events: funding rounds, leadership changes, rapid growth, or new initiatives.`,
                    },
                  ].map((section, i) => (
                    <div key={i} className={`p-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}>
                      <div className="flex items-center gap-2 mb-3">
                        {section.icon}
                        <h3 className="font-semibold text-[var(--brand-dark)]">{section.title}</h3>
                      </div>
                      <p className="text-[var(--brand-gray)] text-sm leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[var(--brand-light)] rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--brand-gray)]">
                    <strong>Placeholder output — illustrative ICP for demonstration.</strong> This is a starting framework. A validated ICP requires market research, customer interviews, and data analysis. Book a strategy call to refine your ICP with real data.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="flex-1">
                    <Button size="lg" className="w-full">
                      <FileText className="w-4 h-4" />
                      Book ICP Validation Session
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      <Download className="w-4 h-4" />
                      Request Full Template Pack
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-dark)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-4">
              Validate Your ICP with Real Market Data
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Our team will cross-reference your ICP against millions of B2B contacts to identify your highest-probability prospects.
            </p>
            <Link href="/contact">
              <Button size="xl">
                Book a Free ICP Workshop
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
