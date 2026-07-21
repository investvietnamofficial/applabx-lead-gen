import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  FileText,
  Mail,
  Link2,
  Users,
  BarChart2,
  Calendar,
  Download,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'B2B Sales & Marketing Templates — Free Downloads | AppLabx',
  description:
    'Free B2B sales and marketing templates: cold email sequences, LinkedIn message templates, ICP worksheets, outreach scripts, and meeting agenda templates.',
  alternates: {
    canonical: 'https://lead-gen-agency.applabx.com/resources/templates',
  },
  openGraph: {
    title: 'B2B Sales & Marketing Templates | AppLabx',
    description: 'Free downloadable templates for cold email, LinkedIn outreach, ICP building, and more.',
    url: 'https://lead-gen-agency.applabx.com/resources/templates',
  },
}

const templates = [
  {
    id: 'email-sequences',
    title: 'Cold Email Sequence Templates',
    description: 'A 7-email sequence framework with subject line variations, personalization hooks, and timing recommendations. Copy-paste into your outreach tool.',
    format: 'PDF + Notion',
    category: 'Email',
    icon: Mail,
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-600',
    emailCount: '7 templates',
  },
  {
    id: 'linkedin-templates',
    title: 'LinkedIn Message Templates',
    description: 'Connection request templates, follow-up messages, and InMail scripts for every stage of the B2B buying journey. Optimized for response rates.',
    format: 'PDF',
    category: 'LinkedIn',
    icon: Link2,
    color: 'bg-[var(--brand-primary)]/5 border-[var(--brand-primary)]/20',
    accentColor: 'text-[var(--brand-primary)]',
    emailCount: '12 templates',
  },
  {
    id: 'icp-worksheet',
    title: 'ICP Development Worksheet',
    description: 'A structured worksheet for defining your Ideal Customer Profile. Includes firmographic criteria, technographic signals, buying triggers, and red flags.',
    format: 'PDF',
    category: 'Strategy',
    icon: Users,
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    emailCount: 'Worksheet + Examples',
  },
  {
    id: 'outreach-scripts',
    title: 'B2B Outbound Call Scripts',
    description: 'Ready-to-use phone scripts for appointment setting calls, discovery calls, and follow-up calls. Includes objection handling playbooks.',
    format: 'PDF',
    category: 'Phone',
    icon: Calendar,
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    emailCount: '8 scripts',
  },
  {
    id: 'meeting-agenda',
    title: 'Sales Meeting Agenda Templates',
    description: 'Structured meeting agenda templates for discovery calls, strategy sessions, and proposal reviews. Keep every sales call outcome-focused.',
    format: 'PDF + Doc',
    category: 'Meetings',
    icon: BarChart2,
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-700',
    emailCount: '5 templates',
  },
  {
    id: 'followup-sequences',
    title: 'Follow-Up Sequence Templates',
    description: 'Never let a lead go cold. Multi-channel follow-up sequences for email, LinkedIn, and WhatsApp with optimal timing and personalization tips.',
    format: 'PDF',
    category: 'Follow-Up',
    icon: FileText,
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-700',
    emailCount: '5 sequences',
  },
]

export default function TemplatesPage() {
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
            <span className="text-[var(--brand-dark)] font-medium">Templates</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-accent)]/8 rounded-full blur-[160px] -translate-y-1/3" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Free Downloads</Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              B2B Sales &amp; Marketing Templates
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Ready-to-use templates for cold email, LinkedIn outreach, ICP building, and sales meetings. Download free — no signup required.
            </p>
          </div>
        </Container>
      </section>

      {/* Templates Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Placeholder notice */}
            <div className="mb-8 flex items-start gap-3 p-4 rounded-xl bg-[var(--brand-light)] border border-[var(--border)]">
              <FileText className="w-4 h-4 text-[var(--brand-gray)] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[var(--brand-gray)]">
                <strong>Template pack coming soon.</strong> These are planned resources. Contact us to request specific templates or get access to our full outreach template library.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((tmpl) => {
                const Icon = tmpl.icon
                return (
                  <article
                    key={tmpl.id}
                    className={`${tmpl.color} rounded-2xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white border border-[var(--border)]`}>
                        <Icon className={`w-5 h-5 ${tmpl.accentColor}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">{tmpl.format}</Badge>
                    </div>

                    <Badge variant="secondary" className="mb-3 text-xs">{tmpl.category}</Badge>

                    <h2 className="text-lg font-bold text-[var(--brand-dark)] mb-3 leading-snug">
                      {tmpl.title}
                    </h2>

                    <p className="text-[var(--brand-gray)] text-sm leading-relaxed mb-4">
                      {tmpl.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[var(--brand-gray)] mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                      {tmpl.emailCount}
                    </div>

                    <Link href="/contact" className="block">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-3.5 h-3.5" />
                        Request Template
                      </Button>
                    </Link>
                  </article>
                )
              })}
            </div>

            {/* CTA Banner */}
            <div className="mt-12 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Want the Full Template Library?
              </h2>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Get access to 50+ outreach templates, sequence frameworks, and sales playbooks. Contact us for the complete template pack.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]"
                >
                  Request Full Template Pack
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
