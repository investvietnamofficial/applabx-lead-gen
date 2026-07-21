import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_EMAIL } from '@/lib/constants'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | AppLabx',
  description:
    'Get in touch with AppLabx. Book a free strategy call or send us a message — we respond within 24 hours.',
  alternates: {
    canonical: 'https://lead-gen-agency.applabx.com/contact',
  },
  openGraph: {
    title: 'Contact Us | AppLabx',
    description: 'Get in touch with AppLabx. Book a free strategy call or send us a message.',
    url: 'https://lead-gen-agency.applabx.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--brand-light)] to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-[var(--brand-accent)]/5 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              Let&apos;s Talk Pipeline
            </h1>
            <p className="text-xl text-[var(--brand-gray)] max-w-2xl mx-auto">
              Tell us about your growth goals. We&apos;ll tell you exactly how we&apos;ll hit
              them — no pitch, just a real conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <div className="flex items-start gap-3 p-5 rounded-xl border-2 border-dashed border-[var(--brand-border)] bg-[var(--brand-light)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--brand-dark)] mb-1">Prefer to book a call?</p>
                    <p className="text-sm text-[var(--brand-gray)]">
                      Skip the form —{' '}
                      <a
                        href="#"
                        className="text-[var(--brand-primary)] font-medium underline hover:no-underline"
                      >
                        Book a 30-min strategy call directly
                      </a>
                    </p>
                    <p className="text-xs text-[var(--brand-gold)] mt-1">
                      ⚠️ Replace with your Calendly link
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-5">
                  Get in touch directly
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: SITE_EMAIL,
                      href: `mailto:${SITE_EMAIL}`,
                      isPlaceholder: false,
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '+1 (555) 123-4567',
                      href: 'tel:+15551234567',
                      isPlaceholder: true,
                    },
                    {
                      icon: Clock,
                      label: 'Response Time',
                      value: 'Within 24 hours (business days)',
                      href: null,
                      isPlaceholder: false,
                    },
                  ].map(({ icon: Icon, label, value, href, isPlaceholder }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-[var(--brand-primary)]" />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--brand-gray)] mb-0.5">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="font-medium text-[var(--brand-dark)] hover:text-[var(--brand-primary)] transition-colors"
                          >
                            {value}
                            {isPlaceholder && (
                              <span className="text-[var(--brand-gold)] text-xs ml-1">⚠️</span>
                            )}
                          </a>
                        ) : (
                          <p className="font-medium text-[var(--brand-dark)]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-5">Our Offices</h3>
                <div className="space-y-4">
                  {[
                    {
                      city: 'Singapore',
                      address: '1 Raffles Place, #20-61, Singapore 048616',
                      placeholder: true,
                    },
                    {
                      city: 'Vietnam',
                      address: '123 Nguyen Hue Street, District 1, Ho Chi Minh City',
                      placeholder: true,
                    },
                  ].map(({ city, address, placeholder }) => (
                    <div key={city} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--brand-light)]">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[var(--brand-primary)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--brand-dark)]">{city}</p>
                          <p className="text-sm text-[var(--brand-gray)] mt-0.5">{address}</p>
                          {placeholder && (
                            <p className="text-[var(--brand-gold)] text-xs mt-1">
                              ⚠️ PLACEHOLDER — verify address
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly Placeholder */}
              <div className="p-6 rounded-xl border-2 border-dashed border-[var(--brand-border)] bg-[var(--brand-light)] text-center">
                <Calendar className="w-10 h-10 text-[var(--brand-gray-light)] mx-auto mb-3" />
                <p className="text-sm font-medium text-[var(--brand-dark)] mb-1">
                  Calendly Embed
                </p>
                <p className="text-xs text-[var(--brand-gray)] mb-3">
                  Replace with your Calendly booking widget
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-primary)] hover:underline"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <SectionHeading
            eyebrow="Common Questions"
            title="Before You Reach Out"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-10 space-y-4">
            {[
              {
                q: 'How quickly do you respond to inquiries?',
                a: 'We respond to all inquiries within 24 hours on business days (SGT/ICT timezones). For urgent matters, please mention it in your message.',
              },
              {
                q: 'Do you offer free consultations?',
                a: "Yes. Every engagement starts with a free 30-minute strategy call. We'll review your goals, challenges, and market — and give you a honest opinion on the best path forward.",
              },
              {
                q: 'What time zones do you operate in?',
                a: 'Our primary teams are based in Singapore (SGT, UTC+8) and Vietnam (ICT, UTC+7). We accommodate calls across all major timezones including APAC, EMEA, and Americas.',
              },
              {
                q: 'Can I talk to someone before committing?',
                a: 'Absolutely. We encourage a discovery call before any commitment. Use the booking link above or fill in the form and we\'ll schedule a call within 24 hours.',
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-[var(--border)]">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-[var(--brand-dark)] hover:text-[var(--brand-primary)] transition-colors select-none">
                  {faq.q}
                  <span className="flex-shrink-0 transition-transform group-open:rotate-180">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[var(--brand-gray)] leading-relaxed border-t border-[var(--border)] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
