'use client'

import { m } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is B2B lead generation?',
    answer:
      'B2B lead generation is the process of identifying and cultivating potential business customers for your products or services. Unlike B2C, B2B leads are other businesses and typically involve longer sales cycles and multiple decision-makers.',
  },
  {
    question: 'How much does lead generation cost?',
    answer:
      'Costs vary based on service type, target market, and volume. Most programs start from $2,000/month. Enterprise programs scale based on your pipeline goals. We always define ROI expectations upfront.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most clients see first qualified leads within 2–4 weeks. Significant pipeline impact typically occurs in months 2–3 as campaigns scale and optimize.',
  },
  {
    question: "What's the difference between inbound and outbound lead generation?",
    answer:
      'Inbound attracts leads through content and SEO. Outbound proactively reaches out to ideal prospects. The best programs combine both. We specialize in outbound-driven programs with inbound support.',
  },
  {
    question: 'Do you guarantee lead volume?',
    answer:
      'We set clear volume commitments upfront based on your ICP and market. Programs are structured with minimum lead commitments and performance SLAs.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We work across SaaS, AI, HR Tech, Manufacturing, Logistics, Healthcare, FinTech, Cybersecurity, and Professional Services. Our approach adapts to each industry\'s unique buyer journey.',
  },
  {
    question: 'What countries do you serve?',
    answer:
      'We serve 10+ countries including Singapore, Vietnam, Malaysia, Thailand, Indonesia, Philippines, Australia, UAE, Saudi Arabia, and Qatar — with dedicated teams for APAC and Middle East.',
  },
]

export function FAQSection() {
  return (
    <section className="section-padding bg-[var(--brand-light-secondary)]">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our lead generation services."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-[var(--border)] overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left hover:bg-[var(--brand-light)] transition-colors">
                      <span className="font-semibold text-[var(--brand-dark)] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-[var(--brand-gray)] group-data-[state=open]:rotate-180 transition-transform flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="px-6 pb-6 text-[var(--brand-gray)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </m.div>
            ))}
          </Accordion.Root>
        </div>
      </Container>

      <style jsx>{`
        @keyframes slideDown {
          from {
            height: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
          }
        }
        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
          }
          to {
            height: 0;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
