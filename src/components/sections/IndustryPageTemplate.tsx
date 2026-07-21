'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { type Industry, type DecisionMaker } from '@/lib/constants'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  ChevronDown,
  Code,
  Cpu,
  Factory,
  FileCheck,
  Fingerprint,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  Lightbulb,
  Link2,
  Lock,
  Mail,
  Megaphone,
  Mic,
  Microscope,
  Network,
  PieChart,
  Search,
  Shield,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Code,
  Brain: Cpu,
  Users,
  Factory,
  Truck,
  Stethoscope: Heart,
  DollarSign: BarChart3,
  Shield: Lock,
  Briefcase: Handshake,
}

const channelIconMap: Record<string, React.ElementType> = {
  'LinkedIn Outreach': Link2,
  'Cold Email': Mail,
  'Cold Email (VN addresses)': Mail,
  'SEO & Content': Search,
  'ABM': Target,
  'Paid Social (LinkedIn)': Megaphone,
  'Webinars & Events': Mic,
  'Community-Led Growth': Users,
  'Content Marketing': BookOpen,
  'Facebook & Zalo (local platforms)': Users,
  'Referral programs': Handshake,
  'Marketplace & directory listings': Globe,
  'Medical conferences': Mic,
  'Email (HIPAA-conscious)': Mail,
  'Referrals & KOL engagement': Users,
  'Conference & event marketing': Mic,
  'Referral & partner channels': Handshake,
  'Partner & analyst channel': Handshake,
  'Content Marketing (threat intel)': BookOpen,
  'Trade Show Follow-up': Mic,
  'SEO (industry keywords)': Search,
  'Partner channel': Handshake,
  'Webinars & speaking': Mic,
}

// Accent colors per industry slug
const challengeAccentColors: Record<string, { border: string; bg: string; icon: string }> = {
  saas:               { border: 'border-blue-500',   bg: 'bg-blue-50',    icon: 'text-blue-600' },
  ai:                 { border: 'border-purple-500', bg: 'bg-purple-50',  icon: 'text-purple-600' },
  'hr-tech':          { border: 'border-pink-500',   bg: 'bg-pink-50',    icon: 'text-pink-600' },
  manufacturing:      { border: 'border-amber-500',  bg: 'bg-amber-50',   icon: 'text-amber-600' },
  logistics:          { border: 'border-green-500',  bg: 'bg-green-50',   icon: 'text-green-600' },
  healthcare:         { border: 'border-teal-500',   bg: 'bg-teal-50',    icon: 'text-teal-600' },
  fintech:            { border: 'border-emerald-500', bg: 'bg-emerald-50', icon: 'text-emerald-600' },
  cybersecurity:      { border: 'border-red-500',    bg: 'bg-red-50',     icon: 'text-red-600' },
  'professional-services': { border: 'border-indigo-500', bg: 'bg-indigo-50', icon: 'text-indigo-600' },
}

const aiIconMap: Record<string, React.ElementType> = {
  'Automated lead qualification scoring based on firmographic and behavioral signals': Zap,
  'Usage-based scoring to identify trial accounts ready to convert': TrendingUp,
  'AI-driven churn prediction to prioritize proactive outreach': BarChart3,
  'Personalized email sequences generated at scale using GPT-based copywriting': Bot,
  'AI-powered meeting preparation — auto-generate talking points from CRM data': FileCheck,
  'AI-powered everything — your own lead gen is a proof point for prospects': Brain,
  'Automated technical qualification scoring based on use case fit': Target,
  'Real-time market monitoring to identify AI adoption signals in target accounts': Search,
  'AI-generated personalized outreach at scale that references specific technical contexts': Bot,
  'Competitive intelligence automation to track competitor mentions and shifts': Network,
  'Automated candidate matching and ranking using ML models': Users,
  'HR analytics dashboards that surface workforce trends and predict turnover risk': PieChart,
  'AI-powered job description optimization for diversity and engagement': FileCheck,
  'Automated interview scheduling and candidate communication': Calendar,
  'Workforce planning AI that predicts hiring needs based on business growth signals': TrendingUp,
  'Predictive maintenance opportunity identification — find plants with aging equipment likely to need replacement': Zap,
  'Supplier discovery automation using procurement databases and import/export data': Search,
  'AI-powered RFQ response generation for manufacturing quotes': Bot,
  'Quality analytics leads — identifying plants with defect rate patterns that signal equipment or process issues': BarChart3,
  'Production optimization signals from publicly available manufacturing output data': TrendingUp,
  'Route optimization leads — identifying shippers on inefficient or congested lanes': Truck,
  'Freight market intelligence — using market data to identify companies in volatile lanes likely to switch': Search,
  'AI-powered rate quote personalization for inbound inquiries': Bot,
  'Predictive demand modeling to reach shippers before peak season capacity crunches': TrendingUp,
  'Automated cargo matching between shippers and carriers using freight consolidation data': Network,
  'Patient flow optimization leads — identifying hospitals with ER crowding or bed management issues': Zap,
  'Clinical trial matching automation for research hospitals seeking technology partners': Microscope,
  'AI-powered differential diagnosis support tools for specialist referral patterns': Brain,
  'Population health management leads — identifying health systems with at-risk patient populations': PieChart,
  'Revenue cycle automation for health systems under margin pressure': BarChart3,
  'Fraud detection leads — identifying banks with increasing fraud losses likely to need advanced solutions': Shield,
  'Compliance automation — AI-powered AML and KYC solutions for under-pressure compliance teams': FileCheck,
  'Regulatory reporting automation for financial institutions drowning in reporting requirements': Bot,
  'AI-powered credit scoring for lenders seeking better underwriting models': TrendingUp,
  'Payment reconciliation automation for financial institutions with complex transaction volumes': PieChart,
  'Threat intelligence leads — identifying organizations experiencing active breach indicators likely to need incident response': AlertTriangle,
  'Automated security posture scoring to identify organizations with gaps in their security coverage': Shield,
  'AI-powered vulnerability prioritization to find organizations with unpatched critical vulnerabilities': Target,
  'Phishing simulation leads — identifying organizations with poor phishing awareness likely to need training': Fingerprint,
  'Supply chain risk monitoring to find companies whose third-party vendors have been breached': Network,
  'Expertise matching AI — matching prospective clients with specific consultants based on their challenge profile': Users,
  'Automated proposal generation using firm knowledge bases and client context': Bot,
  'Client intent monitoring — tracking when target accounts are researching problems the firm solves': Search,
  'Relationship mapping to identify mutual connections and warm introduction opportunities': Link2,
  'Automated thought leadership distribution and engagement scoring to identify high-potential prospects': TrendingUp,
}

interface IndustryPageTemplateProps {
  industry: Industry
  relatedIndustries: Industry[]
}

export default function IndustryPageTemplate({
  industry,
  relatedIndustries,
}: IndustryPageTemplateProps) {
  const IconComponent = iconMap[industry.icon] || Target
  const accent = challengeAccentColors[industry.slug] || {
    border: 'border-[var(--brand-primary)]',
    bg: 'bg-[var(--brand-light)]',
    icon: 'text-[var(--brand-primary)]',
  }

  const overviewParagraphs = industry.overview.split('\n\n')

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-[var(--brand-light)]">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Home
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <Link href="/industries" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Industries
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <span className="text-[var(--brand-dark)] font-medium">{industry.title}</span>
          </nav>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lead-gen-agency.applabx.com' },
                  { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://lead-gen-agency.applabx.com/industries' },
                  { '@type': 'ListItem', position: 3, name: industry.title, item: `https://lead-gen-agency.applabx.com/industries/${industry.slug}` },
                ],
              }),
            }}
          />
        </Container>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 1: Hero Banner */}
      {/* ──────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/industries">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  Industries
                </Badge>
              </Link>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-8"
            >
              <IconComponent className="w-10 h-10 text-[var(--brand-primary)]" />
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-1 text-[var(--brand-dark)] mb-6"
            >
              {industry.title} Lead Generation
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {industry.description}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="xl">
                  <Calendar className="w-5 h-5" />
                  Book a Strategy Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl">
                  See Our {industry.title} Results
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </m.div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 2: Industry Overview */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                  {industry.title} Lead Generation — Industry Overview
                </h2>
              </div>
            </m.div>

            <div className="space-y-6">
              {overviewParagraphs.map((para, idx) => (
                <m.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-base text-[var(--brand-gray)] leading-relaxed"
                >
                  {para}
                </m.p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 3: Key Challenges */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="Industry Challenges"
            title={`Key Challenges in ${industry.title} Lead Generation`}
            subtitle="Understanding these pain points is the first step to solving them"
          />

          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {industry.challenges.map((challenge, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group flex items-start gap-4 p-6 rounded-xl bg-white border-l-4 ${accent.border} shadow-sm hover:shadow-md transition-all`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${accent.bg} flex items-center justify-center`}>
                  <AlertTriangle className={`w-5 h-5 ${accent.icon}`} />
                </div>
                <p className="text-[var(--brand-dark)] font-medium leading-relaxed">
                  {challenge}
                </p>
              </m.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 4: Buying Journey */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            eyebrow="The Buying Journey"
            title={`How B2B Buyers in ${industry.title} Make Decisions`}
            subtitle="Mapping the journey is essential for lead gen timing and messaging"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden sm:block" />

              <div className="space-y-8">
                {industry.buyingJourney.map((step, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Circle */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>

                    <div className="flex-1 pt-1">
                      <p className="text-base text-[var(--brand-gray)] leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 5: Decision Makers */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="Key Decision Makers"
            title={`Who You Need to Reach in ${industry.title}`}
            subtitle="Each stakeholder has a different concern — your messaging must match"
          />

          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {industry.decisionMakers.map((dm, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-xl border border-[var(--border)] p-6 hover:shadow-md transition-all"
              >
                {/* Avatar placeholder */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--brand-dark)] leading-tight">
                      {dm.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)] mb-1">
                      Responsibilities
                    </p>
                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed">
                      {dm.responsibilities}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)] mb-1">
                      Typical Background
                    </p>
                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed">
                      {dm.background}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 6: Lead Generation Channels */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Lead Gen Channels"
            title={`Channels That Work for ${industry.title}`}
            subtitle="The right channel mix depends on your target market, deal size, and sales motion"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.channels.map((channel, idx) => {
                const ChannelIcon = channelIconMap[channel] || Zap
                return (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center">
                      <ChannelIcon className="w-5 h-5 text-[var(--brand-accent)]" />
                    </div>
                    <span className="text-sm font-medium text-[var(--brand-dark)] leading-snug">
                      {channel}
                    </span>
                  </m.div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 7: AI & Automation Opportunities */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="AI & Automation"
            title={`How AI Transforms ${industry.title} Lead Generation`}
            subtitle="AI isn&apos;t the future — it&apos;s the competitive advantage you need right now"
          />

          <div className="grid sm:grid-cols-2 gap-5 mt-12 max-w-4xl mx-auto">
            {industry.aiOpportunities.map((opp, idx) => {
              const OppIcon = aiIconMap[opp] || Zap
              return (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[var(--border)] hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                    <OppIcon className="w-5 h-5 text-[var(--brand-primary)]" />
                  </div>
                  <p className="text-sm text-[var(--brand-gray)] leading-relaxed">
                    {opp}
                  </p>
                </m.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 8: Why AppLabx */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why AppLabx"
            title={`Why ${industry.title} Companies Choose AppLabx`}
            subtitle="We bring deep expertise and proven results to your industry"
          />

          <div className="max-w-4xl mx-auto mt-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: 'Deep Industry Expertise',
                  description: `Our team has years of experience working with ${industry.title} companies, understanding their unique buyer journey and decision-making processes.`,
                },
                {
                  icon: Target,
                  title: 'Precision Targeting',
                  description: 'We identify and reach the exact decision-makers who need your solution — from C-suite executives to department heads.',
                },
                {
                  icon: Bot,
                  title: 'AI-Powered Automation',
                  description: 'Our AI tools accelerate prospecting, personalization, and qualification — delivering more leads in less time.',
                },
                {
                  icon: BarChart3,
                  title: 'Measurable ROI',
                  description: 'Every campaign is tracked with clear KPIs. You see exactly how many leads, meetings, and pipeline we generate.',
                },
                {
                  icon: Globe,
                  title: 'Multi-Region Reach',
                  description: 'Whether you target APAC, Middle East, or global markets — we have the local knowledge and channel expertise to reach buyers everywhere.',
                },
                {
                  icon: Handshake,
                  title: 'Dedicated Account Team',
                  description: 'You get a named team — not a black box. Regular syncs, transparent reporting, and strategic input as your partner.',
                },
              ].map((reason, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[var(--brand-gray)] text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 9: Process Steps */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Execute Your Campaign"
            subtitle="A battle-tested approach adapted for your industry"
          />

          <div className="relative mt-12 max-w-4xl mx-auto">
            {/* Desktop horizontal line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-[var(--border)]" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industry.process.map((step, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-medium text-[var(--brand-dark)] leading-snug">
                    {step}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 10: FAQ */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about lead generation in this industry"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {(industry.expandedFaqs ?? industry.faqs).map((faq, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Accordion.Item
                    value={`faq-${idx}`}
                    className="bg-white rounded-xl border border-[var(--border)] overflow-hidden"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left hover:bg-[var(--brand-light)] transition-colors">
                        <span className="font-semibold text-[var(--brand-dark)] pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown className="w-5 h-5 text-[var(--brand-gray)] group-data-[state=open]:rotate-180 transition-transform flex-shrink-0" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="px-6 pb-6 text-[var(--brand-gray)] leading-relaxed">
                        {faq.a}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </m.div>
              ))}
            </Accordion.Root>
          </div>
        </Container>

        <style jsx>{`
          @keyframes slideDown {
            from { height: 0; }
            to { height: var(--radix-accordion-content-height); }
          }
          @keyframes slideUp {
            from { height: var(--radix-accordion-content-height); }
            to { height: 0; }
          }
          .animate-slideDown { animation: slideDown 0.3s ease-out; }
          .animate-slideUp { animation: slideUp 0.3s ease-out; }
        `}</style>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 10b: Market Overview */}
      {/* ──────────────────────────────────────────────── */}
      {industry.marketOverview && (
        <section className="py-16 bg-[var(--brand-light)]">
          <Container>
            <SectionHeading
              eyebrow="Market Intelligence"
              title={`The ${industry.title} Market — What You Need to Know`}
              subtitle="Deep market context to help you understand the landscape your buyers operate in"
            />
            <div className="max-w-4xl mx-auto mt-10">
              <div className="prose prose-lg max-w-none">
                {industry.marketOverview.split('\n\n').map((para, idx) => (
                  <m.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-[var(--brand-gray)] leading-relaxed mb-6 text-base"
                  >
                    {para}
                  </m.p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 10c: Buying Triggers + Red Flags */}
      {/* ──────────────────────────────────────────────── */}
      {(industry.buyingTriggers?.length || industry.redFlags?.length) && (
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 mt-4">
              {/* Buying Triggers */}
              {industry.buyingTriggers?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-dark)]">Buying Triggers</h3>
                  </div>
                  <p className="text-sm text-[var(--brand-gray)] mb-4">
                    Events that signal a company is actively in-market for a solution like yours.
                  </p>
                  <ul className="space-y-3">
                    {industry.buyingTriggers.map((trigger, idx) => (
                      <m.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-[var(--brand-gray)] text-sm leading-relaxed">{trigger}</span>
                      </m.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Red Flags */}
              {industry.redFlags?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-dark)]">Red Flags</h3>
                  </div>
                  <p className="text-sm text-[var(--brand-gray)] mb-4">
                    Warning signs that a prospect is not ready or not a good fit.
                  </p>
                  <ul className="space-y-3">
                    {industry.redFlags.map((flag, idx) => (
                      <m.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="text-[var(--brand-gray)] text-sm leading-relaxed">{flag}</span>
                      </m.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 10d: Pricing Benchmark + Competitive Landscape */}
      {/* ──────────────────────────────────────────────── */}
      {(industry.pricingBenchmark || industry.competitiveLandscape) && (
        <section className="py-16 bg-[var(--brand-light)]">
          <Container>
            <SectionHeading
              eyebrow="Market Context"
              title="Pricing & Competitive Landscape"
              subtitle="Honest context about what you're competing against and what buyers expect to pay"
            />
            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
              {industry.pricingBenchmark && (
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-[var(--border)] p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-3">Pricing Benchmark</h3>
                  <p className="text-[var(--brand-gray)] text-sm leading-relaxed">{industry.pricingBenchmark}</p>
                </m.div>
              )}
              {industry.competitiveLandscape && (
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl border border-[var(--border)] p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-3">Competitive Landscape</h3>
                  <p className="text-[var(--brand-gray)] text-sm leading-relaxed">{industry.competitiveLandscape}</p>
                </m.div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 10e: Internal Links */}
      {/* ──────────────────────────────────────────────── */}
      {industry.internalLinks?.length > 0 && (
        <section className="py-12 bg-white border-t border-[var(--border)]">
          <Container>
            <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-6">Explore Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {industry.internalLinks.map((link, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--brand-gray)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all bg-white"
                  >
                    <Link2 className="w-4 h-4" />
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 11: CTA */}
      {/* ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--brand-accent)]/30 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 text-white mb-6">
              Generate Leads in {industry.title}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to build a predictable pipeline for your {industry.title} business? Book a free strategy call with our team.
            </p>

            <Link href="/contact">
              <Button
                size="xl"
                className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]"
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </Button>
            </Link>
          </m.div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* SECTION 12: Related Industries */}
      {/* ──────────────────────────────────────────────── */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 bg-[var(--brand-light)]">
          <Container>
            <SectionHeading
              eyebrow="Explore"
              title="Explore Other Industries"
              subtitle="We serve a wide range of B2B sectors"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relatedIndustries.map((related) => {
                const RelatedIcon = iconMap[related.icon] || Target
                return (
                  <m.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={`/industries/${related.slug}`}
                      className="group block p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-primary)] transition-colors">
                        <RelatedIcon className="w-6 h-6 text-[var(--brand-primary)] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-[var(--brand-gray)] mb-4 line-clamp-2">
                        {related.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-primary)] group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </m.div>
                )
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
