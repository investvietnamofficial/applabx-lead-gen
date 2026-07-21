'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { type Country } from '@/lib/constants'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe,
  Handshake,
  Link2,
  ListChecks,
  Mail,
  Mic,
  Search,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

// -----------------------------------------------------------------------
// Channel icon map — extends the pattern from IndustryPageTemplate
// -----------------------------------------------------------------------
const channelIconMap: Record<string, React.ElementType> = {
  'LinkedIn Outreach': Link2,
  'Cold Email': Mail,
  'Cold Email (VN addresses)': Mail,
  'SEO & Content': Search,
  'SEO & Content Marketing': Search,
  'Content Marketing': FileText,
  'Content Marketing (multilingual)': FileText,
  'Referrals & warm introductions': Handshake,
  'Referrals': Handshake,
  'Referral programs': Handshake,
  'Events & networking': Mic,
  'Events & trade shows': Mic,
  'Local events & meetups': Mic,
  'Local events & seminars': Mic,
  'Local events & trade shows': Mic,
  'Business events & summits': Mic,
  'Government & enterprise ABM': Target,
  'ABM campaigns': Target,
  'LinkedIn': Link2,
  'Facebook & Zalo (local platforms)': Users,
  'LINE (popular local platform)': Users,
  'WhatsApp': Users,
  'Email & WhatsApp': Mail,
  'Cold Email & WhatsApp': Mail,
  'Marketplace & directory listings': Globe,
  'Referrals & partners': Handshake,
  'Partner channel': Handshake,
  'Partner & local partner channels': Handshake,
  'Local partners': Handshake,
}

// -----------------------------------------------------------------------
// Channel card content — enriched from country.channels[]
// -----------------------------------------------------------------------
function getChannelCards(channels: string[]) {
  const channelMeta: Record<string, { description: string; tactic: string }> = {
    'LinkedIn Outreach': {
      description: `LinkedIn is the dominant B2B professional network across APAC and the Gulf. It allows precise targeting by job title, industry, and seniority.`,
      tactic: 'Personalized InMail + connection request sequences targeting decision-makers (C-suite, VPs, Directors).',
    },
    'Cold Email': {
      description: 'Cold email remains the highest-ROI outbound channel when warmed, personalized, and optimized correctly.',
      tactic: '5–8 touchpoint sequences with AI personalization per recipient. Deliverability-optimized infrastructure.',
    },
    'Cold Email (VN addresses)': {
      description: 'Email works well for Vietnamese tech companies and MNCs. Local .vn domains are common in enterprise.',
      tactic: 'Bilingual sequences (EN/VN) with warm-up and deliverability management targeting corporate emails.',
    },
    'SEO & Content': {
      description: 'Organic search captures buyers actively researching solutions. Long-form, keyword-rich content ranks for high-intent queries.',
      tactic: 'Localized keyword strategy per country, long-form articles, and local SEO for Google.my, .sg, .th, etc.',
    },
    'Content Marketing': {
      description: 'Educational content builds trust and authority. Case studies, whitepapers, and blog posts nurture buyers through the funnel.',
      tactic: 'Monthly content calendar with region-specific topics, translated into local languages where needed.',
    },
    'Content Marketing (multilingual)': {
      description: 'Malaysia\'s multicultural business landscape (Malay, English, Mandarin) requires multilingual content to reach all segments.',
      tactic: 'Content in EN, BM, and Mandarin targeting different business communities and sectors.',
    },
    'Referrals & warm introductions': {
      description: 'Referrals cut through noise and accelerate trust. In relationship-driven markets, a warm intro is the fastest path to a meeting.',
      tactic: 'Partner network activation and client referral incentive programs to generate warm qualified leads.',
    },
    Referrals: {
      description: 'Referrals carry implicit trust and convert at 3–5x higher rates than cold outreach in every market.',
      tactic: 'Structured referral program with clear incentives for clients who introduce qualified prospects.',
    },
    'Referral programs': {
      description: 'In Philippines and Vietnam especially, peer recommendations carry extraordinary weight in B2B purchasing decisions.',
      tactic: 'Partner and client referral programs tailored to local relationship culture.',
    },
    'Events & networking': {
      description: 'In-person events remain powerful for relationship building. Singapore, UAE, and Saudi Arabia have vibrant B2B event calendars.',
      tactic: 'Attendance, sponsorship, and structured follow-up sequences for leads generated at relevant trade shows.',
    },
    'Events & trade shows': {
      description: 'Dubai and Singapore host world-class B2B exhibitions. These are prime opportunities to meet decision-makers face-to-face.',
      tactic: 'Pre-show research, on-site engagement, and 48-hour follow-up sequences for every lead collected.',
    },
    'Local events & meetups': {
      description: 'Vietnam and Philippines have growing tech meetup scenes (TechFest, GDG, SaaS Vietnam). These provide access to startup and SMB buyers.',
      tactic: 'Community sponsorship and speaking slots combined with post-event outreach.',
    },
    'Local events & seminars': {
      description: 'Indonesia\'s B2B buyers value in-person seminars and workshops. Local events build credibility with Jakarta\'s business community.',
      tactic: 'Co-host or sponsor relevant industry seminars, capture attendee data, and run targeted follow-up.',
    },
    'Local events & trade shows': {
      description: 'Thailand\'s manufacturing and automotive trade shows (Motortec, SIMA) attract senior buyers from across the region.',
      tactic: 'On-site lead capture and post-show multi-touch outreach within 72 hours.',
    },
    'Business events & summits': {
      description: 'Doha hosts high-level finance, logistics, and digital transformation summits. Qatar\'s SOEs and banks attend regularly.',
      tactic: 'Summit attendance strategy with pre-researched targets and personalized outreach before and after.',
    },
    'Government & enterprise ABM (Saudi)': {
      description: 'Saudi Vision 2030 has created massive government and SOE procurement pipelines. ABM is the right approach for large, named accounts.',
      tactic: 'Account-list targeting with personalized multi-channel campaigns per ministry, entity, or large enterprise.',
    },
    'Government & enterprise ABM (UAE)': {
      description: 'UAE government entities and state-owned enterprises (SOEs) are major B2B buyers. These require formal ABM and tender-aware outreach.',
      tactic: 'Named account programs for UAE ministries, free zones, and leading SOEs with multi-channel engagement.',
    },
    ABM: {
      description: 'Account-Based Marketing focuses resources on high-value target accounts — ideal for enterprise deals and longer sales cycles.',
      tactic: 'Identify 20–100 named accounts, build ICP profiles, and run personalized cross-channel campaigns.',
    },
    'Facebook & Zalo (local platforms)': {
      description: 'Zalo has 100M+ users in Vietnam and is the dominant messaging app for business. Facebook remains strong for B2B in Philippines and Vietnam.',
      tactic: 'Zalo Official Account (ZOA) broadcasts and Facebook Lead Gen ads targeting relevant industry segments.',
    },
    'LINE (popular local platform)': {
      description: 'LINE has 50M+ users in Thailand and is the dominant B2B messaging platform. It\'s where Thai business conversations happen.',
      tactic: 'LINE Official Account (OA) for broadcast campaigns and direct engagement with Thai business contacts.',
    },
    WhatsApp: {
      description: 'WhatsApp is Indonesia\'s default business communication tool. It bypasses email fatigue and achieves much higher open rates.',
      tactic: 'Permission-based WhatsApp Business outreach with rich media (images, PDFs) for Indonesian B2B leads.',
    },
    'Email & WhatsApp': {
      description: 'Indonesian buyers are most responsive on WhatsApp, but email is still needed for formal proposals and documentation.',
      tactic: 'Hybrid sequence: cold email to capture corporate contacts + WhatsApp follow-up for immediate engagement.',
    },
    'Cold Email & WhatsApp': {
      description: 'Indonesian enterprise buyers often prefer WhatsApp for the first response, while email remains the channel for formal business.',
      tactic: 'Email as the entry point with WhatsApp as the high-response follow-up channel for Indonesian contacts.',
    },
    'Local partners': {
      description: 'Having a trusted local partner in the Gulf is often essential for government and enterprise deals. Partners provide trust and local market access.',
      tactic: 'Identification and activation of complementary local partners who can introduce and vouch for your solution.',
    },
    'Referrals & local partners': {
      description: 'In the Gulf, a trusted local partner is often the key to unlocking large deals with government entities and family conglomerates.',
      tactic: 'Strategic partnership development with local distributors, consultancies, and system integrators in the Gulf.',
    },
    'Marketplace & directory listings': {
      description: 'Logistics and manufacturing buyers frequently use online directories and B2B marketplaces to find new suppliers.',
      tactic: 'Optimized profiles on Alibaba, TradeIndia, and regional logistics portals to capture inbound inquiries.',
    },
  }

  return channels.map((channel) => ({
    channel,
    icon: channelIconMap[channel] || Zap,
    description: channelMeta[channel]?.description ?? `A proven channel for reaching B2B buyers in this market.`,
    tactic: channelMeta[channel]?.tactic ?? `Tailored outreach sequence combining personalization with multi-channel follow-up.`,
  }))
}

// -----------------------------------------------------------------------
// Additional SEO FAQs — always included for every country
// -----------------------------------------------------------------------
const additionalFaqs = [
  {
    q: (name: string) => `How much does B2B lead generation cost in ${name}?`,
    a: (name: string) => `Lead generation costs in ${name} vary based on your target market, ICP complexity, and channels used. We offer flexible engagement models starting from project-based campaigns to full retainer programs. Most clients see ROI within the first 90 days of a well-executed campaign. Contact us for a customized quote.`,
  },
  {
    q: (name: string) => `How long does it take to generate leads in ${name}?`,
    a: (name: string) => `In ${name}, you can expect first qualified leads within 2–4 weeks of campaign launch, depending on the channel mix and target audience complexity. Cold email typically takes 3–4 weeks to warm up and show consistent results. LinkedIn outreach can produce earlier engagement. SEO programs take longer (3–6 months) but compound over time.`,
  },
  {
    q: (name: string) => `Is cold outreach effective in ${name}?`,
    a: (name: string) => `Yes — when done correctly. Cold outreach in ${name} requires deep personalization, proper warm-up for email, and an understanding of local business culture. Generic templates will be ignored. Our outreach uses AI-powered personalization, local language considerations where appropriate, and multi-touch sequences to maximize response rates.`,
  },
  {
    q: (name: string) => `Do I need a local presence to sell in ${name}?`,
    a: (name: string) => `Not necessarily. Many of our clients operate entirely remotely and still generate significant pipeline from ${name}. However, having a local contact or partner can accelerate trust-building, especially in relationship-driven markets. We can help you decide the right approach based on your target segment and deal size.`,
  },
]

// -----------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------
interface CountryPageTemplateProps {
  country: Country
}

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------
export default function CountryPageTemplate({ country }: CountryPageTemplateProps) {
  const channelCards = getChannelCards(country.channels)

  const allFaqs = [
    ...country.faqs,
    ...additionalFaqs.map((f) => ({ q: f.q(country.name), a: f.a(country.name) })),
  ]

  const breadcrumbItems = [
    { name: 'Home', url: 'https://lead-gen-agency.applabx.com' },
    { name: 'Countries', url: 'https://lead-gen-agency.applabx.com/countries' },
    { name: country.name, url: `https://lead-gen-agency.applabx.com/countries/${country.slug}` },
  ]

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `AppLabx — B2B Lead Generation in ${country.name}`,
    description: `Expert B2B lead generation services in ${country.name}. ${country.description}`,
    areaServed: {
      '@type': 'Country',
      name: country.name,
    },
    serviceType: 'B2B Lead Generation',
    provider: {
      '@type': 'Organization',
      name: 'AppLabx',
      url: 'https://lead-gen-agency.applabx.com',
    },
  }

  return (
    <>
      {/* ================================================================
          BREADCRUMB + JSON-LD
      ================================================================ */}
      <div className="pt-24 pb-4 bg-[var(--brand-light)]">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Home
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <Link href="/countries" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Countries
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <span className="text-[var(--brand-dark)] font-medium">{country.name}</span>
          </nav>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                faqSchema(
                  allFaqs.map((f) => ({ question: f.q, answer: f.a }))
                )
              ),
            }}
          />
        </Container>
      </div>

      {/* ================================================================
          HERO SECTION
      ================================================================ */}
      <section className="relative pt-16 pb-28 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-primary)]/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--brand-accent)]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/countries">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  Countries
                </Badge>
              </Link>
            </m.div>

            {/* Flag + H1 */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-8xl block mb-4">{country.flag}</span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-1 text-[var(--brand-dark)] mb-4"
            >
              B2B Lead Generation in {country.name}
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-[var(--brand-gray)] mb-6 max-w-2xl mx-auto leading-relaxed"
            >
              Strategy, Channels &amp; Results
            </m.p>

            {/* Short intro */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg text-[var(--brand-gray)] mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {country.description} We combine deep local market expertise with AI-powered
              multi-channel outreach to connect you with the right decision-makers.
            </m.p>

            {/* CTAs */}
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
                  Get a Free Audit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </m.div>

            {/* Trust bar */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-sm text-[var(--brand-gray-light)] flex items-center justify-center gap-2"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              {/* ⚠️ PLACEHOLDER: Replace with actual client count */}
              <span>Trusted by <strong>50+</strong> businesses across {country.name}</span>
            </m.p>
          </div>
        </Container>
      </section>

      {/* ================================================================
          LOCAL MARKET SECTION
      ================================================================ */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Market Overview"
            title={`The ${country.name} B2B Market`}
            subtitle="Understanding the local landscape is the foundation of effective lead generation"
          />

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            {/* Long-form market text */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--brand-gray)] leading-relaxed text-lg">
                  {country.localMarket}
                </p>
              </div>

              {/* Key market opportunities */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
                  Key Market Opportunities
                </h3>
                <ul className="space-y-3">
                  {[
                    `Growing demand for digital transformation and B2B SaaS solutions across all major sectors`,
                    `Expanding middle class and rising B2B purchasing power`,
                    `Strong government initiatives (e.g. Smart Nation, Thailand 4.0, Vision 2030) driving tech adoption`,
                    `Increasing openness to foreign B2B providers with the right local approach`,
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--brand-gray)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>

            {/* Key stats sidebar */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-[var(--brand-light)] rounded-2xl p-8 space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-gray)] mb-4">
                  Key Market Indicators
                </h3>

                {/* ⚠️ PLACEHOLDER: Replace with actual verified stats */}
                {[
                  { label: 'GDP (2024)', value: '⚠️ Verify', icon: BarChart3, color: 'text-blue-500' },
                  { label: 'B2B Market Size', value: '⚠️ Verify', icon: TrendingUp, color: 'text-green-500' },
                  { label: 'Digital Adoption Rate', value: '⚠️ Verify', icon: Zap, color: 'text-purple-500' },
                  { label: 'Mobile Internet Users', value: '⚠️ Verify', icon: Globe, color: 'text-orange-500' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--brand-gray)]">{stat.label}</p>
                      <p className="font-bold text-[var(--brand-dark)]">{stat.value}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--brand-gray-light)]">
                    ⚠️ Stats are placeholders pending verification from official sources (World Bank, IMF, local government agencies).
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </Container>
      </section>

      {/* ================================================================
          BUYER BEHAVIOR SECTION
      ================================================================ */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="Buyer Insights"
            title={`How ${country.name} B2B Buyers Make Decisions`}
            subtitle="Understanding the buying process is critical to generating leads that convert"
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Left: description */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                    Buyer Profile
                  </h3>
                </div>
                <p className="text-[var(--brand-gray)] leading-relaxed">{country.buyerBehavior}</p>
              </div>
            </m.div>

            {/* Right: decision process + stakeholders */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Decision-making process */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center">
                    <ListChecks className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                    Decision-Making Process
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    'Problem recognition and initial research',
                    'Evaluation of options (often 2–4 vendors)',
                    'Stakeholder consultation and internal review',
                    'Budget approval (may require multiple sign-offs)',
                    'Contract negotiation and procurement',
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-[var(--brand-gray)] text-sm pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key stakeholders */}
              <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                    Key Stakeholders to Target
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Managing Director / CEO',
                    'VP / Head of Sales',
                    'CFO / Finance Director',
                    'CTO / Head of IT',
                    'Head of Operations',
                    'Procurement Manager',
                  ].map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-[var(--brand-light)] text-[var(--brand-dark)] text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </Container>
      </section>

      {/* ================================================================
          CHANNELS SECTION
      ================================================================ */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Lead Gen Channels"
            title={`Best Lead Generation Channels in ${country.name}`}
            subtitle="We use the right channels for this market — not a one-size-fits-all approach"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {channelCards.map((card, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center group-hover:bg-[var(--brand-accent)]/20 transition-colors">
                    <card.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--brand-dark)]">{card.channel}</h3>
                </div>
                <p className="text-[var(--brand-gray)] text-sm mb-3 leading-relaxed">{card.description}</p>
                <p className="text-xs text-[var(--brand-primary)] font-medium bg-[var(--brand-primary)]/5 px-3 py-2 rounded-lg">
                  ✦ {card.tactic}
                </p>
              </m.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================================
          OUR APPROACH SECTION
      ================================================================ */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title={`How AppLabx Generates Leads in ${country.name}`}
            subtitle="A proven, data-driven process adapted for the local market"
          />

          {/* Process timeline */}
          <div className="mt-12">
            <div className="relative">
              {/* Desktop horizontal line */}
              <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-[var(--border)]" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { step: '01', title: 'ICP & Research', desc: 'Define your ideal customer profile and identify target companies and contacts in ' + country.name },
                  { step: '02', title: 'Data Enrichment', desc: 'Build and enrich a verified B2B contact database using local data sources and AI.' },
                  { step: '03', title: 'Campaign Build', desc: 'Create personalized multi-channel sequences optimized for this market\'s preferences.' },
                  { step: '04', title: 'Launch & Qualify', desc: 'Execute outreach across chosen channels with real-time engagement tracking.' },
                  { step: '05', title: 'CRM & Pipeline', desc: 'Deliver qualified leads directly to your CRM with full engagement history.' },
                ].map((item, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--brand-dark)] mb-2">{item.title}</h4>
                    <p className="text-xs text-[var(--brand-gray)] leading-snug">{item.desc}</p>
                  </m.div>
                ))}
              </div>
            </div>
          </div>

          {/* What makes us different */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-8 text-center">
              What Makes AppLabx Different in {country.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  title: 'Deep Local Market Expertise',
                  description: `We don't just translate campaigns — we adapt the entire approach for ${country.name}'s business culture, preferred channels, and decision-making norms.`,
                },
                {
                  icon: Target,
                  title: 'Verified Local Contact Database',
                  description: `Access to verified B2B decision-maker contacts across ${country.name}. Every record is phone-verified and enriched with job title, company, and engagement context.`,
                },
                {
                  icon: Zap,
                  title: 'AI-Powered Multi-Channel Sequencing',
                  description: `Our AI sequences adapt to ${country.name} market conditions — choosing the right channel mix, timing, and personalization level for maximum response rates.`,
                },
              ].map((item, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-[var(--border)] bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h4 className="text-base font-semibold text-[var(--brand-dark)] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--brand-gray)] leading-relaxed">{item.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================================
          FAQ SECTION
      ================================================================ */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title={`Frequently Asked Questions About B2B Lead Generation in ${country.name}`}
            subtitle="Everything you need to know before launching in this market"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {allFaqs.map((faq, idx) => (
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
                        <span className="font-semibold text-[var(--brand-dark)] pr-4 text-sm sm:text-base">
                          {faq.q}
                        </span>
                        <ChevronDown className="w-5 h-5 text-[var(--brand-gray)] group-data-[state=open]:rotate-180 transition-transform flex-shrink-0" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="px-6 pb-6 text-[var(--brand-gray)] leading-relaxed text-sm">
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

      {/* ================================================================
          CASE STUDIES SECTION
      ================================================================ */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="Proven Results"
            title={`${country.name} Case Studies`}
            subtitle="Real results from real campaigns in this market"
          />

          <div className="mt-12">
            {!country.localCaseStudies ? (
              <div className="bg-white rounded-2xl p-12 border border-[var(--border)] text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-[var(--brand-light)] flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[var(--brand-gray)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  Case Studies Coming Soon
                </h3>
                <p className="text-[var(--brand-gray)] text-sm mb-6">
                  We&apos;re currently documenting our results from {country.name}. Contact us to discuss how
                  we can deliver similar results for your business.
                </p>
                <Link href="/contact">
                  <Button variant="outline" size="md">
                    <ArrowRight className="w-4 h-4" />
                    Discuss Your {country.name} Campaign
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="prose max-w-none">
                <p className="text-[var(--brand-gray)] text-lg">{country.localCaseStudies}</p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ================================================================
          FINAL CTA SECTION
      ================================================================ */}
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
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Flag */}
            <p className="text-5xl mb-6">{country.flag}</p>
            <h2 className="heading-2 text-white mb-6">
              Ready to Generate Leads in {country.name}?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team. No pitch. Just a real conversation
              about your {country.name} growth goals and how we can help.
            </p>

            <Link href="/contact">
              <Button
                size="xl"
                className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Strategy Call
              </Button>
            </Link>

            {/* Trust text */}
            <p className="mt-8 text-sm text-white/60">
              100% free consultation. No commitment required. Response within 24 hours.
            </p>
          </m.div>
        </Container>
      </section>
    </>
  )
}
