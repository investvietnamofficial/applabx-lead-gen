import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { generateMetadata } from '@/lib/seo'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'Case Studies',
  description:
    'Real results from real clients. See how AppLabx has helped B2B companies generate qualified leads and book more strategy calls.',
  path: '/case-studies',
})


export default function CaseStudiesPage() {
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
              Case Studies
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-6">
              Real Results from Real Clients
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto leading-relaxed">
              Case studies are published with client permission once results are verified. Contact us to discuss your goals and see how we&apos;ve helped similar businesses build predictable pipelines.
            </p>
          </div>
        </Container>
      </section>

      {/* Placeholder Notice */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-16">
            <p className="text-[var(--brand-gray)] text-lg mb-8">
              We&apos;re building case studies with verified client results. Every published case study includes real metrics, client permission, and specific outcomes — not estimates or projections.
            </p>
            <Link href="/contact">
              <Button size="lg">
                <ArrowRight className="w-5 h-5" />
                Discuss Your Goals
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
              Be the First to Share Your Results
            </h2>
            <p className="text-lg text-[var(--brand-gray)] mb-8">
              Work with us on your first campaign and your story could be featured here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
