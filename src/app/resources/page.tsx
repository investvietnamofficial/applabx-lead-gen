import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { generateMetadata } from '@/lib/seo'
import {
  ArrowRight,
  FileText,
  Download,
  CheckSquare,
  BookOpen,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'Resources',
  description:
    'Free guides, templates, checklists, and insights to master B2B lead generation.',
  path: '/resources',
})

const guides = [
  {
    title: 'The Complete B2B Lead Generation Playbook',
    description: 'Step-by-step guide covering ICP definition, channel selection, and campaign optimization. Launching soon.',
  },
  {
    title: 'Cold Email Templates That Actually Convert',
    description: 'Battle-tested cold email templates organized by industry and buyer persona. Launching soon.',
  },
  {
    title: 'How to Build Your First ABM Campaign',
    description: 'Account-based marketing from scratch: targeting, personalization, and measurement. Launching soon.',
  },
]

const templates = [
  {
    title: 'ICP Definition Worksheet',
    description: 'Structured worksheet for defining your ideal customer profile with team alignment. Launching soon.',
  },
  {
    title: 'Cold Email Sequence Templates',
    description: 'Ready-to-customize 5-step cold email sequences for different B2B contexts. Launching soon.',
  },
  {
    title: 'Meeting Agenda Templates',
    description: 'Structured meeting agenda templates for discovery calls, strategy sessions, and proposal reviews. Launching soon.',
  },
]

const checklists = [
  {
    title: 'Outbound Campaign Pre-Launch Checklist',
    description: '30-point checklist before sending your first outbound sequence. Launching soon.',
  },
  {
    title: 'B2B Lead Qualification Checklist',
    description: 'Qualification framework for sorting leads by sales-readiness. Launching soon.',
  },
  {
    title: 'CRM Data Hygiene Checklist',
    description: 'Keep your CRM clean and your data actionable with this maintenance guide. Launching soon.',
  },
]

const blogPosts = [
  {
    title: 'Why Outbound Lead Generation Is Making a Comeback',
    description: 'Separating hype from reality on modern outbound effectiveness. Publishing soon.',
  },
  {
    title: 'AI in B2B Sales: What Works and What Doesn\'t',
    description: 'Honest assessment of AI tools for sales outreach based on real campaign data. Publishing soon.',
  },
  {
    title: 'How to Choose the Right Lead Gen Partner',
    description: 'Questions to ask and red flags to watch for when evaluating lead generation agencies. Publishing soon.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-primary)]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              Resources
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Resources to Master B2B Lead Generation
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto leading-relaxed">
              Guides, templates, checklists, and insights — all free.
            </p>
          </div>
        </Container>
      </section>

      {/* Guides Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[var(--brand-primary)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Guides</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {guides.map((guide, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--brand-light)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {guide.description}
                </p>
                <span className="text-sm text-[var(--brand-gray-light)] font-medium">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Templates Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
              <Download className="w-6 h-6 text-[var(--brand-accent)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Templates</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {templates.map((template, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-[var(--brand-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {template.description}
                </p>
                <span className="text-sm text-[var(--brand-gray-light)] font-medium">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Checklists Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-gold)]/10 flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-[var(--brand-gold)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Checklists</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {checklists.map((checklist, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--brand-light)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-gold)]/10 flex items-center justify-center mb-4">
                  <CheckSquare className="w-5 h-5 text-[var(--brand-gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  {checklist.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {checklist.description}
                </p>
                <span className="text-sm text-[var(--brand-gray-light)] font-medium">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-dark)]/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[var(--brand-dark)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Insights</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-dark)]/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[var(--brand-dark)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {post.description}
                </p>
                <span className="text-sm text-[var(--brand-gray-light)] font-medium">
                  Publishing soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
              Need Help Right Now?
            </h2>
            <p className="text-lg text-[var(--brand-gray)] mb-8">
              Our team can walk you through your specific lead generation challenges — no pitch, just practical advice.
            </p>
            <Link href="/contact">
              <Button size="lg">
                <ArrowRight className="w-5 h-5" />
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
