'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { type Industry } from '@/lib/constants'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  ChevronDown,
  Code,
  Cpu,
  Factory,
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
  Search,
  Target,
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
  'SEO & Content': Search,
  'ABM': Target,
  'Paid Social (LinkedIn)': Megaphone,
  'Webinars & Events': Mic,
  'Community-Led Growth': Users,
  'Content Marketing': BookOpen,
  'Webinars': Mic,
  'Cold Email (VN addresses)': Mail,
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
  'Webinars & podcasts': Mic,
  'Trade Show Follow-up': Mic,
  'SEO (industry keywords)': Search,
  'Partner channel': Handshake,
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
          {/* BreadcrumbList Schema */}
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

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/industries">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  Industries
                </Badge>
              </Link>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-8"
            >
              <IconComponent className="w-10 h-10 text-[var(--brand-primary)]" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-1 text-[var(--brand-dark)] mb-6"
            >
              {industry.title} Lead Generation
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {industry.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Industry Challenges"
            title={`The Key Challenges Facing ${industry.title} Companies`}
            subtitle="Understanding these pain points is the first step to solving them"
          />

          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {industry.challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-xl bg-amber-50/60 border border-amber-200/60 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[var(--brand-dark)] font-medium leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title={`Our Approach for ${industry.title}`}
            subtitle="A tailored strategy built for how buyers in this industry actually decide"
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
            {/* Ideal Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                    Ideal Strategy
                  </h3>
                </div>
                <p className="text-[var(--brand-gray)] leading-relaxed">
                  {industry.idealStrategy}
                </p>
              </div>
            </motion.div>

            {/* Recommended Channels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                    Recommended Channels
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {industry.channels.map((channel, idx) => {
                    const ChannelIcon = channelIconMap[channel] || Zap
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium"
                      >
                        <ChannelIcon className="w-4 h-4" />
                        {channel}
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-8 text-center">
              Our Process
            </h3>
            <div className="relative">
              {/* Desktop horizontal line */}
              <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-[var(--border)]" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {industry.process.map((step, idx) => (
                  <motion.div
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why It Works Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why AppLabx"
            title={`Why ${industry.title} Companies Choose AppLabx`}
            subtitle="We bring deep expertise and proven results to your industry"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
                icon: Zap,
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
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about lead generation in this industry"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {industry.faqs.map((faq, idx) => (
                <motion.div
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
                </motion.div>
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--brand-accent)]/30 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
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
          </motion.div>
        </Container>
      </section>

      {/* Related Industries Section */}
      {relatedIndustries.length > 0 && (
        <section className="section-padding bg-[var(--brand-light-secondary)]">
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
                  <motion.div
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
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
