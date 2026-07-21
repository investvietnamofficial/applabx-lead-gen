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
})

// Placeholder resources data
const guides = [
  {
    title: 'The Complete B2B Lead Generation Playbook',
    description: '⚠️ PLACEHOLDER: Replace with real guide content.',
  },
  {
    title: 'Cold Email Templates That Actually Convert',
    description: '⚠️ PLACEHOLDER: Replace with real guide content.',
  },
  {
    title: 'How to Build Your First ABM Campaign',
    description: '⚠️ PLACEHOLDER: Replace with real guide content.',
  },
]

const templates = [
  {
    title: 'Lead Scoring Template',
    description: '⚠️ PLACEHOLDER: Replace with real template.',
  },
  {
    title: 'ICP Definition Worksheet',
    description: '⚠️ PLACEHOLDER: Replace with real template.',
  },
  {
    title: 'Outreach Sequence Templates',
    description: '⚠️ PLACEHOLDER: Replace with real template.',
  },
]

const checklists = [
  {
    title: 'B2B Lead Generation Audit Checklist',
    description: '⚠️ PLACEHOLDER: Replace with real checklist.',
  },
  {
    title: 'Outreach Campaign Launch Checklist',
    description: '⚠️ PLACEHOLDER: Replace with real checklist.',
  },
  {
    title: 'CRM Setup Checklist',
    description: '⚠️ PLACEHOLDER: Replace with real checklist.',
  },
]

const blogPosts = [
  {
    title: 'Why Outbound Lead Generation Is Making a Comeback',
    description: '⚠️ PLACEHOLDER: Replace with real blog content.',
  },
  {
    title: 'AI in B2B Sales: What Works and What Doesn\'t',
    description: '⚠️ PLACEHOLDER: Replace with real blog content.',
  },
  {
    title: 'How to Choose the Right Lead Gen Partner',
    description: '⚠️ PLACEHOLDER: Replace with real blog content.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
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
          {/* Placeholder Warning */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  PLACEHOLDER — Real guides coming soon
                </h3>
                <p className="text-amber-800 text-sm">
                  Replace with actual downloadable content. DO NOT publish placeholder pages.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[var(--brand-primary)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Guides</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {guides.map((guide, idx) => (
              <article
                key={idx}
                className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--brand-primary)] font-medium opacity-50 cursor-not-allowed">
                  Coming Soon
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Templates Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          {/* Placeholder Warning */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  PLACEHOLDER — Real templates coming soon
                </h3>
                <p className="text-amber-800 text-sm">
                  Replace with actual downloadable files. DO NOT publish placeholder pages.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
              <Download className="w-6 h-6 text-[var(--brand-accent)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Templates</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {templates.map((template, idx) => (
              <article
                key={idx}
                className="group p-6 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-[var(--brand-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {template.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--brand-accent)] font-medium opacity-50 cursor-not-allowed">
                  Coming Soon
                  <Download className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Checklists Section */}
      <section className="section-padding bg-white">
        <Container>
          {/* Placeholder Warning */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  PLACEHOLDER — Real checklists coming soon
                </h3>
                <p className="text-amber-800 text-sm">
                  Replace with actual downloadable files. DO NOT publish placeholder pages.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-[var(--brand-primary)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Checklists</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {checklists.map((checklist, idx) => (
              <article
                key={idx}
                className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
                  <CheckSquare className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {checklist.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {checklist.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--brand-primary)] font-medium opacity-50 cursor-not-allowed">
                  Coming Soon
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          {/* Placeholder Warning */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">
                  PLACEHOLDER — Real blog articles coming soon
                </h3>
                <p className="text-amber-800 text-sm">
                  Replace with actual blog content. DO NOT publish placeholder pages.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[var(--brand-accent)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Blog</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="group p-6 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[var(--brand-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--brand-accent)] font-medium opacity-50 cursor-not-allowed">
                  Coming Soon
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Lead Magnet CTA */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Want a Free Lead Generation Audit?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Get a comprehensive analysis of your current pipeline + actionable recommendations.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 px-5 py-4 rounded-lg text-[var(--brand-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)] whitespace-nowrap"
                  >
                    Get My Free Audit
                  </Button>
                </form>

                <p className="text-white/60 text-sm mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
