'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/services">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  Our Services
                </Badge>
              </Link>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 rounded-2xl bg-[var(--brand-primary)]/10 flex items-center justify-center mx-auto mb-8"
            >
              <IconComponent className="w-10 h-10 text-[var(--brand-primary)]" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-1 text-[var(--brand-dark)] mb-6"
            >
              {service.title}
            </motion.h1>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {service.shortDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Overview Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="Overview"
                title="What We Deliver"
                align="left"
                className="mb-6"
              />
              <p className="text-lg text-[var(--brand-gray)] leading-relaxed">
                {service.overview}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[var(--brand-light)] rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--brand-gray)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Work"
            subtitle="A proven methodology that delivers results consistently"
          />

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative mt-16">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-[var(--border)]" />

            <div className="grid grid-cols-5 gap-6">
              {service.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-sm font-bold mx-auto mb-6">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-medium text-[var(--brand-dark)] leading-snug">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden mt-12 space-y-6">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium text-[var(--brand-dark)]">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Key Benefits"
            title="Why Choose This Service"
            subtitle="Delivering measurable impact for your business"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/20 transition-colors">
                  <Zap className="w-6 h-6 text-[var(--brand-accent)]" />
                </div>
                <p className="text-[var(--brand-dark)] font-medium leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding bg-[var(--brand-light-secondary)]">
        <Container>
          <SectionHeading
            eyebrow="What You Get"
            title="Deliverables"
            subtitle="Tangibles you receive at the end of each engagement"
          />

          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {service.deliverables.map((deliverable, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[var(--border)]"
              >
                <CheckCircle className="w-6 h-6 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--brand-dark)] leading-relaxed">
                  {deliverable}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about this service"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion.Root type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <motion.div
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
                </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team to discuss how we can accelerate your growth.
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
          </motion.div>
        </Container>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-[var(--brand-light-secondary)]">
          <Container>
            <SectionHeading
              eyebrow="Explore"
              title="Related Services"
              subtitle="Discover more ways to grow your pipeline"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon] || Target
                return (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all"
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
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
