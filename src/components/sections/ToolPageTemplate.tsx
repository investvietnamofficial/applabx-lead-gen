'use client'

// framer-motion removed — replaced with CSS animations
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Calendar, Calculator, BookOpen } from 'lucide-react'

interface ToolPageTemplateProps {
  title: string
  description: string
  icon?: React.ReactNode
  children: React.ReactNode
  methodology?: React.ReactNode
}

export default function ToolPageTemplate({
  title,
  description,
  icon,
  children,
  methodology,
}: ToolPageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <Link href="/tools">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  <Calculator className="w-4 h-4 mr-2" />
                  Free Tool
                </Badge>
              </Link>
            </div>

            {/* Icon */}
            {icon && (
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <div className="w-20 h-20 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-8">
                  {icon}
                </div>
              </div>
            )}

            {/* H1 */}
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              {title}
            </h1>

            {/* Description */}
            <p className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {description}
            </p>
          </div>
        </Container>
      </section>

      {/* Tool Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
      {methodology && (
        <section className="py-12 bg-[var(--brand-light)]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[var(--border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                    How This Calculator Works
                  </h3>
                  {methodology}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

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
              Ready to Optimize Your Lead Generation?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team to discuss how we can help you achieve better results.
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

            <p className="mt-6">
              <Link href="/tools" className="text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors">
                View all free tools
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
