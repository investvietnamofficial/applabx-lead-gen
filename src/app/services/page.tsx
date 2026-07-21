import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { services } from '@/lib/constants'
import { generateMetadata } from '@/lib/seo'
import {
  Users,
  Mail,
  FileText,
  Search,
  Share2,
  Video,
  Target,
  Gift,
  Send,
  Zap,
  BarChart3,
  Bot,
  Database,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Calendar,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Mail,
  FileText,
  Search,
  Share2,
  Video,
  Target,
  Gift,
  Send,
  Zap,
  BarChart3,
  Bot,
  Database,
  TrendingUp,
}

export const metadata: Metadata = generateMetadata({
  title: 'Lead Generation Services',
  description:
    'Full-stack B2B lead generation services. From prospect discovery to booked calls — we handle every step of the pipeline.',
})

export default function ServicesPage() {
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
              Our Services
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Full-Stack B2B Lead Generation Services
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto leading-relaxed">
              From prospect discovery to booked calls — we handle every step of the pipeline. 
              AI-powered, human-delivered.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Target
              return (
                <article
                  key={service.id}
                  className="group p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-primary)] transition-colors">
                    <IconComponent className="w-7 h-7 text-[var(--brand-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-[var(--brand-gray)] mb-6">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0" />
                        <span className="text-[var(--brand-gray)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--brand-accent)]/30 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              Ready to Transform Your Lead Generation?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team. No pitch. Just a real conversation 
              about your growth goals.
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
