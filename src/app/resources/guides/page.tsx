import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import {
  ArrowRight,
  BookOpen,
  Clock,
  Download,
  FileText,
  Search,
  Mail,
  Link2,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'B2B Lead Generation Guides — Expert Resources | AppLabx',
  description:
    'Download free B2B lead generation guides covering cold email, LinkedIn outreach, APAC market entry, and AI-powered sales automation. Expert-written, action-oriented.',
  alternates: {
    canonical: 'https://lead-gen-agency.applabx.com/resources/guides',
  },
  openGraph: {
    title: 'B2B Lead Generation Guides | AppLabx',
    description: 'Free expert guides on B2B lead generation, cold email, and AI sales automation.',
    url: 'https://lead-gen-agency.applabx.com/resources/guides',
  },
}

const guides = [
  {
    id: 'cold-email',
    title: 'The Complete Cold Email Playbook',
    category: 'Cold Email',
    icon: Mail,
    description:
      'A comprehensive guide to building cold email campaigns that actually get responses. Covers deliverability, personalization frameworks, sequence design, and A/B testing methodology.',
    readTime: '25 min read',
    level: 'Intermediate',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-600',
    topics: ['Deliverability', 'Personalization', 'Sequences', 'A/B Testing'],
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Outreach Mastery Guide',
    category: 'LinkedIn',
    icon: Link2,
    description:
      'Everything you need to build a scalable LinkedIn outbound program. From connection request templates to InMail sequences to engagement tactics that convert.',
    readTime: '30 min read',
    level: 'Intermediate',
    color: 'bg-[var(--brand-primary)]/5 border-[var(--brand-primary)]/20',
    accentColor: 'text-[var(--brand-primary)]',
    topics: ['Connection Requests', 'InMail', 'Engagement', 'Automation'],
  },
  {
    id: 'apac',
    title: 'APAC B2B Market Entry Guide',
    category: 'Market Strategy',
    icon: Search,
    description:
      'A strategic guide to entering B2B markets across Southeast Asia and the Gulf. Covers market research, ICP development, channel selection, and localization strategy.',
    readTime: '35 min read',
    level: 'Advanced',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    topics: ['Market Research', 'ICP Strategy', 'Localization', 'Channel Mix'],
  },
  {
    id: 'ai-sales',
    title: 'AI-Powered Sales Automation Guide',
    category: 'AI & Automation',
    icon: Zap,
    description:
      'How to integrate AI tools into your outbound workflow without losing the human touch. Covers AI personalization, enrichment, routing, and multi-channel orchestration.',
    readTime: '20 min read',
    level: 'All Levels',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    topics: ['AI Personalization', 'Enrichment', 'CRM Sync', 'Multi-channel'],
  },
]

export default function GuidesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-20 bg-white border-b border-[var(--border)]">
        <Container>
          <nav className="flex items-center gap-2 text-sm py-3 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Home
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <Link href="/resources" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Resources
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <span className="text-[var(--brand-dark)] font-medium">Guides</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-primary)]/8 rounded-full blur-[160px] -translate-y-1/3" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Free Resources</Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              B2B Lead Generation Guides
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Expert-written guides on cold email, LinkedIn outreach, AI sales automation, and APAC market strategy. Download free.
            </p>
          </div>
        </Container>
      </section>

      {/* Guides Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((guide) => {
                const Icon = guide.icon
                return (
                  <article
                    key={guide.id}
                    className={`${guide.color} rounded-2xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-[var(--border)]`}>
                        <Icon className={`w-6 h-6 ${guide.accentColor}`} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">{guide.level}</Badge>
                      </div>
                    </div>

                    <Badge variant="secondary" className="mb-3">{guide.category}</Badge>

                    <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-3 leading-snug">
                      {guide.title}
                    </h2>

                    <p className="text-[var(--brand-gray)] text-sm leading-relaxed mb-5">
                      {guide.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {guide.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-full bg-white text-xs font-medium text-[var(--brand-gray)] border border-[var(--border)]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                      <div className="flex items-center gap-1.5 text-xs text-[var(--brand-gray)]">
                        <Clock className="w-3.5 h-3.5" />
                        {guide.readTime}
                      </div>
                      <Link href="/contact">
                        <Button variant="outline" size="sm">
                          <Download className="w-3.5 h-3.5" />
                          Request Guide
                        </Button>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-[var(--brand-dark)] rounded-2xl p-8 text-center">
              <BookOpen className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">
                Need a Custom Guide for Your Market?
              </h2>
              <p className="text-[#94A3B8] mb-6 max-w-lg mx-auto">
                Our team can create a tailored market entry or outreach strategy guide specific to your ICP, industry, and target geography.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Request a Custom Guide
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
