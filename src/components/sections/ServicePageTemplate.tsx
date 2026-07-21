'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ContentBlock } from '@/components/ui/ContentBlock'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { type Service } from '@/lib/constants'
import {
  CheckCircle,
  ChevronDown,
  Zap,
  ArrowRight,
  Calendar,
  Users,
  Mail,
  FileText,
  Search,
  Share2,
  Video,
  Target,
  Gift,
  Send,
  BarChart3,
  Bot,
  Database,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  DollarSign,
  HelpCircle,
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

interface ServicePageTemplateProps {
  service: Service
  relatedServices: Service[]
}

export default function ServicePageTemplate({
  service,
  relatedServices,
}: ServicePageTemplateProps) {
  const IconComponent = iconMap[service.icon] || Target

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
            <Link href="/services" className="text-[var(--brand-gray)] hover:text-[var(--brand-primary)]">
              Services
            </Link>
            <span className="text-[var(--brand-gray-light)]">/</span>
            <span className="text-[var(--brand-dark)] font-medium">{service.title}</span>
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
                  { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://lead-gen-agency.applabx.com/services' },
                  { '@type': 'ListItem', position: 3, name: service.title, item: `https://lead-gen-agency.applabx.com/services/${service.slug}` },
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
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/services">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  Our Services
                </Badge>
              </Link>
            </m.div>

            {/* Icon */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-8"
            >
              <IconComponent className="w-10 h-10 text-[var(--brand-primary)]" />
            </m.div>

            {/* H1 */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-1 text-[var(--brand-dark)] mb-6"
            >
              {service.title}
            </m.h1>

            {/* Short Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {service.shortDescription}
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
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <ContentBlock
        eyebrow="Overview"
        title={`What Is ${service.title}?`}
        variant="default"
        icon={IconComponent}
      >
        <p className="text-base text-[var(--brand-gray)] leading-relaxed mb-6">
          {service.overview}
        </p>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">Key Features</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--brand-gray)]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentBlock>

      {/* Key Problems Section */}
      <ContentBlock
        eyebrow="Challenges"
        title="Key Problems We Solve"
        subtitle={`Every business faces these common challenges when it comes to generating qualified leads and growing revenue. Our ${service.title} service is designed to address each of these directly.`}
        variant="highlight"
        icon={AlertCircle}
      >
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {service.problems && service.problems.map((problem, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[var(--border)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-[var(--brand-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">{problem.title}</h3>
                  <p className="text-sm text-[var(--brand-gray)] leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </ContentBlock>

      {/* Methodology Section */}
      <ContentBlock
        eyebrow="Approach"
        title="Our Methodology"
        subtitle={service.methodology ? undefined : "Our proven approach combines industry expertise with cutting-edge technology to deliver consistent results."}
        variant="default"
        icon={Lightbulb}
      >
        {service.methodology && (
          <p className="text-base text-[var(--brand-gray)] leading-relaxed">
            {service.methodology}
          </p>
        )}
        <div className="mt-8 p-6 bg-[var(--brand-light)] rounded-xl">
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">Core Principles</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--brand-gray)]">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentBlock>

      {/* Process Section */}
      <ContentBlock
        eyebrow="The Process"
        title="How We Work"
        subtitle="A structured approach that delivers consistent results from kickoff to handoff."
        variant="muted"
        icon={Zap}
      >
        <div className="space-y-8 mt-6">
          {service.processSteps && service.processSteps.map((step, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-lg font-bold">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1 pb-8 border-b border-[var(--border)] last:border-0 last:pb-0">
                <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-3">{step.title}</h3>
                <p className="text-[var(--brand-gray)] leading-relaxed">{step.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </ContentBlock>

      {/* Deliverables Section */}
      <ContentBlock
        eyebrow="Deliverables"
        title="What You Get"
        subtitle="Concrete outputs that directly support your revenue goals."
        variant="default"
        icon={FileText}
      >
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {service.deliverables.map((deliverable, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex items-start gap-4 p-5 bg-[var(--brand-light)] rounded-xl"
            >
              <CheckCircle className="w-6 h-6 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
              <span className="text-[var(--brand-dark)] leading-relaxed">{deliverable}</span>
            </m.div>
          ))}
        </div>
      </ContentBlock>

      {/* Pricing Factors Section */}
      <ContentBlock
        eyebrow="Investment"
        title="Pricing Approach"
        subtitle="Every business has unique needs, which is why we customize our pricing based on your specific requirements and goals."
        variant="highlight"
        icon={DollarSign}
      >
        <p className="text-base text-[var(--brand-gray)] leading-relaxed mb-6">
          While each engagement is customized, here are the key factors that influence pricing for our {service.title} services:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.pricingFactors && service.pricingFactors.map((factor, idx) => (
            <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[var(--border)]">
              <div className="w-6 h-6 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-semibold text-[var(--brand-primary)]">{idx + 1}</span>
              </div>
              <span className="text-[var(--brand-gray)]">{factor}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 p-6 bg-white rounded-xl border border-[var(--brand-primary)]/20">
          <p className="text-[var(--brand-gray)] leading-relaxed">
            <strong className="text-[var(--brand-dark)]">Ready to get a custom quote?</strong> Schedule a free strategy call and we&apos;ll provide a detailed proposal tailored to your specific goals and requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-4 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all">
            Book Your Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ContentBlock>

      {/* FAQ Section */}
      <ContentBlock
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle={`Everything you need to know about our ${service.title} services.`}
        variant="default"
        icon={HelpCircle}
      >
        <div className="max-w-3xl mt-6">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Accordion.Item
                  value={`faq-${idx}`}
                  className="bg-[var(--brand-light)] rounded-xl overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left hover:bg-[var(--brand-light-secondary)] transition-colors">
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
              </m.div>
            ))}
          </Accordion.Root>
        </div>
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
      </ContentBlock>

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
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team to discuss how we can accelerate your growth with {service.title}.
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

            <p className="mt-6">
              <Link href="/contact" className="text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors">
                Or get a free lead generation audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </m.div>
        </Container>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <ContentBlock
          eyebrow="Explore"
          title="Related Services"
          subtitle="Discover more ways to grow your pipeline and accelerate revenue growth."
          variant="muted"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] || Target
              return (
                <m.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/services/${related.slug}`}
                    className="group block p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-primary)] transition-colors">
                      <RelatedIcon className="w-6 h-6 text-[var(--brand-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-[var(--brand-gray)] mb-4 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-primary)] group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </m.div>
              )
            })}
          </div>
        </ContentBlock>
      )}
    </>
  )
}
