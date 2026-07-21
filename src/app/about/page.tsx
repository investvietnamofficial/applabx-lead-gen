import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { generateMetadata } from '@/lib/seo'
import {
  ArrowRight,
  Calendar,
  Eye,
  Target,
  Heart,
  Users,
  Bot,
  Database,
  Share2,
  BarChart3,
  Shield,
  CheckCircle,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description:
    'We build pipelines, not just leads. Founded by operators who got tired of guessing which half of marketing works.',
  path: '/about',
})




// Value cards
const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No black boxes. You see exactly what we\'re doing and why.',
  },
  {
    icon: Target,
    title: 'Results Over Vanity',
    description: 'We measure success in closed revenue, not just delivered emails.',
  },
  {
    icon: Bot,
    title: 'AI with Human Oversight',
    description: 'Technology amplifies our team\'s expertise, never replaces it.',
  },
  {
    icon: Heart,
    title: 'Long-Term Partnerships',
    description: 'We grow when you grow. Churn is not our business model.',
  },
]

// Technology pillars
const techPillars = [
  {
    icon: Sparkles,
    title: 'AI & ML',
    description: 'Proprietary models trained on B2B data for intelligent prospecting and personalization.',
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'Real-time data enrichment and verification across 10+ markets.',
  },
  {
    icon: Share2,
    title: 'Multi-channel Automation',
    description: 'Seamless orchestration across email, LinkedIn, and more.',
  },
  {
    icon: BarChart3,
    title: 'CRM Integrations',
    description: 'Native integrations with all major CRMs. Your data, your system.',
  },
  {
    icon: Shield,
    title: 'Analytics & BI',
    description: 'Real-time dashboards and custom reporting for full pipeline visibility.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'SOC 2 compliant, GDPR ready. Your data is safe with us.',
  },
]

export default function AboutPage() {
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
              About Us
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              We Build Pipelines, Not Just Leads
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto leading-relaxed">
              Founded by operators who got tired of guessing which half of marketing works.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Photo placeholder */}
              <div className="w-64 h-64 rounded-2xl bg-[var(--brand-light)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                <span className="text-[var(--brand-gray-light)] text-center px-4">
                  Photo coming soon
                </span>
              </div>

              {/* Bio */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  Founder
                </Badge>
                <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                  AppLabx Team
                </h2>
                <p className="text-[var(--brand-gray)] mb-4">B2B Lead Generation Agency</p>
                <p className="text-[var(--brand-gray)] leading-relaxed">
                  We&apos;re a team of operators who&apos;ve worked in B2B sales, marketing, and growth — we built AppLabx because we got tired of guessing which half of marketing works. Contact us to connect directly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 border border-[var(--border)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[var(--brand-primary)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
                Our Mission
              </h2>
              <p className="text-[var(--brand-gray)] leading-relaxed">
                To make high-quality B2B lead generation accessible, predictable, and transparent — so companies can focus on closing deals, not chasing prospects.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 border border-[var(--border)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[var(--brand-accent)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
                Our Vision
              </h2>
              <p className="text-[var(--brand-gray)] leading-relaxed">
                A world where every B2B company — regardless of size — has access to the same caliber of lead generation as the enterprise giants.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">Our Values</h2>
            <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--brand-gray)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">Meet the Team</h2>
            <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
              Operators, strategists, and technologists who live and breathe B2B growth. Contact us to connect directly.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">
              Technology
            </Badge>
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
              What Powers Our Pipeline
            </h2>
            <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
              Enterprise-grade technology, built for modern B2B teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--brand-gray)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              Join Us on Your Growth Journey
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build a pipeline that actually converts. Book a strategy call and let&apos;s talk about your goals.
            </p>
            <Link href="/contact">
              <Button size="xl" className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]">
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
