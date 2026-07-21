'use client'

import { useState } from 'react'
// framer-motion removed — motion.div replaced with regular div
import Link from 'next/link'
import ToolPageTemplate from '@/components/sections/ToolPageTemplate'
import { Button } from '@/components/ui/Button'
import { Target, Users, MapPin, Briefcase, AlertCircle, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'

interface ICPData {
  // Industry
  industry: string
  industryOther: string
  // Company Size
  companySize: string
  // Geography
  geography: string
  geographyOther: string
  // Decision Maker
  decisionMaker: string
  // Pain Points
  painPoints: string[]
  customPainPoint: string
  // Goals
  primaryGoal: string
}

const industryOptions = [
  'SaaS / Software',
  'Fintech',
  'Healthcare / Healthtech',
  'Manufacturing',
  'Logistics / Supply Chain',
  'Cybersecurity',
  'HR Tech / Recruiting',
  'Professional Services',
  'Marketing / Agency',
  'E-commerce / Retail',
  'Education / EdTech',
  'Real Estate / PropTech',
  'Other',
]

const companySizeOptions = [
  '1-10 employees (Startup)',
  '11-50 employees (Small)',
  '51-200 employees (Mid-Market)',
  '201-500 employees (Mid-Market)',
  '501-1000 employees (Enterprise)',
  '1001-5000 employees (Large Enterprise)',
  '5000+ employees (Global Enterprise)',
]

const geographyOptions = [
  'United States',
  'Europe (General)',
  'United Kingdom',
  'Germany',
  'France',
  'Southeast Asia',
  'Singapore',
  'Vietnam',
  'Indonesia',
  'Middle East / UAE',
  'Australia / New Zealand',
  'Global / Multiple Regions',
  'Other',
]

const decisionMakerOptions = [
  'CEO / Founder / Owner',
  'CTO / VP Engineering',
  'CMO / VP Marketing',
  'CFO / VP Finance',
  'VP Sales / Sales Director',
  'Head of Product',
  'Head of Operations',
  'HR Director / CHRO',
  'IT Director / CIO',
  'Procurement Manager',
  'Multiple Decision Makers',
]

const painPointOptions = [
  'Slow sales cycles',
  'High customer acquisition costs',
  'Low lead quality',
  'Poor conversion rates',
  'Difficulty scaling outreach',
  'Limited data on prospects',
  'High churn rate',
  'Inefficient sales process',
  'Lack of market visibility',
  'Competitive pressure',
  'Limited marketing budget',
  'Talent / hiring challenges',
]

const goalOptions = [
  'Increase lead volume',
  'Improve lead quality',
  'Reduce customer acquisition cost',
  'Book more sales meetings',
  'Scale outreach internationally',
  'Shorten sales cycles',
  'Build predictable revenue',
  'Replace outbound with inbound',
]

export default function ICPGeneratorPage() {
  const [icp, setIcp] = useState<ICPData>({
    industry: '',
    industryOther: '',
    companySize: '',
    geography: '',
    geographyOther: '',
    decisionMaker: '',
    painPoints: [],
    customPainPoint: '',
    primaryGoal: '',
  })

  const [showSummary, setShowSummary] = useState(false)

  const handlePainPointToggle = (painPoint: string) => {
    setIcp(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(painPoint)
        ? prev.painPoints.filter(p => p !== painPoint)
        : [...prev.painPoints, painPoint]
    }))
  }

  const getIndustry = () => {
    return icp.industry === 'Other' && icp.industryOther
      ? icp.industryOther
      : icp.industry
  }

  const getGeography = () => {
    return icp.geography === 'Other' && icp.geographyOther
      ? icp.geographyOther
      : icp.geography
  }

  const getFormattedICP = () => {
    const sections = []

    if (getIndustry()) {
      sections.push({
        title: 'Industry',
        content: getIndustry(),
        icon: '🏢',
      })
    }

    if (icp.companySize) {
      sections.push({
        title: 'Company Size',
        content: icp.companySize,
        icon: '👥',
      })
    }

    if (getGeography()) {
      sections.push({
        title: 'Geography',
        content: getGeography(),
        icon: '🌍',
      })
    }

    if (icp.decisionMaker) {
      sections.push({
        title: 'Decision Maker',
        content: icp.decisionMaker,
        icon: '🎯',
      })
    }

    if (icp.painPoints.length > 0 || icp.customPainPoint) {
      const allPainPoints = [...icp.painPoints]
      if (icp.customPainPoint) {
        allPainPoints.push(icp.customPainPoint)
      }
      sections.push({
        title: 'Pain Points',
        content: allPainPoints.join(', '),
        icon: '⚡',
      })
    }

    if (icp.primaryGoal) {
      sections.push({
        title: 'Primary Goal',
        content: icp.primaryGoal,
        icon: '🚀',
      })
    }

    return sections
  }

  const completedFields = [
    icp.industry,
    icp.companySize,
    icp.geography,
    icp.decisionMaker,
    icp.painPoints.length > 0,
    icp.primaryGoal,
  ].filter(Boolean).length

  const totalFields = 6
  const progressPercent = (completedFields / totalFields) * 100

  return (
    <ToolPageTemplate
      title="Ideal Customer Profile (ICP) Generator"
      description="Build your ideal customer profile step by step. Answer a few questions to create a structured ICP you can use for targeting and outreach."
      icon={<Target className="w-10 h-10 text-[var(--brand-primary)]" />}
    >
      <div className="space-y-8">
        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--brand-dark)]">Profile Completion</span>
            <span className="text-sm text-[var(--brand-gray)]">{completedFields}/{totalFields} sections</span>
          </div>
          <div className="h-2 bg-[var(--brand-light)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--brand-primary)] rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ICP Form */}
        <div className="space-y-6">
          {/* Industry */}
          <div className="bg-[var(--brand-light)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Industry</h3>
            </div>
            <select
              value={icp.industry}
              onChange={(e) => setIcp(prev => ({ ...prev, industry: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all mb-3"
            >
              <option value="">Select an industry...</option>
              {industryOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {icp.industry === 'Other' && (
              <input
                type="text"
                placeholder="Specify other industry..."
                value={icp.industryOther}
                onChange={(e) => setIcp(prev => ({ ...prev, industryOther: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
              />
            )}
          </div>

          {/* Company Size */}
          <div className="bg-[var(--brand-light)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Company Size</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {companySizeOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setIcp(prev => ({ ...prev, companySize: opt }))}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    icp.companySize === opt
                      ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'
                      : 'border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/50'
                  }`}
                >
                  <span className="text-sm font-medium">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Geography */}
          <div className="bg-[var(--brand-light)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Geography</h3>
            </div>
            <select
              value={icp.geography}
              onChange={(e) => setIcp(prev => ({ ...prev, geography: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all mb-3"
            >
              <option value="">Select primary geography...</option>
              {geographyOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {icp.geography === 'Other' && (
              <input
                type="text"
                placeholder="Specify other geography..."
                value={icp.geographyOther}
                onChange={(e) => setIcp(prev => ({ ...prev, geographyOther: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
              />
            )}
          </div>

          {/* Decision Maker */}
          <div className="bg-[var(--brand-light)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Primary Decision Maker</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {decisionMakerOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setIcp(prev => ({ ...prev, decisionMaker: opt }))}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    icp.decisionMaker === opt
                      ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'
                      : 'border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/50'
                  }`}
                >
                  <span className="text-sm font-medium">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div className="bg-[var(--brand-light)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-[var(--brand-accent)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Pain Points</h3>
            </div>
            <p className="text-sm text-[var(--brand-gray)] mb-4">Select all that apply</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {painPointOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => handlePainPointToggle(opt)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    icp.painPoints.includes(opt)
                      ? 'border-[var(--brand-accent)] bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]'
                      : 'border-[var(--border)] bg-white hover:border-[var(--brand-accent)]/50'
                  }`}
                >
                  <span className="text-sm font-medium flex items-center gap-2">
                    {icp.painPoints.includes(opt) && <CheckCircle className="w-4 h-4" />}
                    {opt}
                  </span>
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add a custom pain point..."
              value={icp.customPainPoint}
              onChange={(e) => setIcp(prev => ({ ...prev, customPainPoint: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Primary Goal */}
          <div className="bg-[var(--brand-light)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[var(--brand-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Primary Goal</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {goalOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setIcp(prev => ({ ...prev, primaryGoal: opt }))}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    icp.primaryGoal === opt
                      ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'
                      : 'border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/50'
                  }`}
                >
                  <span className="text-sm font-medium">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ICP Summary */}
        {completedFields > 0 && (
          <div
            className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-2xl p-8 text-white"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Your Ideal Customer Profile
            </h2>

            <div className="space-y-4">
              {getFormattedICP().map((section, index) => (
                <div
                  key={section.title}
                  className="bg-white/10 rounded-lg p-4"
                >
                  <div className="text-sm text-white/60 mb-1">{section.title}</div>
                  <div className="font-medium">{section.content}</div>
                </div>
              ))}

              {getFormattedICP().length === 0 && (
                <p className="text-white/70 text-center py-4">
                  Start answering the questions above to build your ICP
                </p>
              )}
            </div>

            {completedFields >= 3 && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]"
                  >
                    Get a Custom ICP Report
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--border)] text-center">
          <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4">
            Ready to Reach Your ICP?
          </h3>
          <p className="text-[var(--brand-gray)] mb-6 max-w-2xl mx-auto">
            Our team specializes in identifying and reaching your ideal customers through targeted B2B lead generation campaigns.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </ToolPageTemplate>
  )
}
