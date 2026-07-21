import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { faqSchema } from '@/lib/seo-schemas'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | AppLabx',
  description:
    'Common questions about B2B lead generation, our services, pricing, timelines, and how we work with clients.',
}

const faqs = [
  {
    category: 'Lead Generation Basics',
    items: [
      {
        q: 'What is B2B lead generation?',
        a: 'B2B lead generation is the process of identifying and cultivating potential business customers for your products or services. Unlike B2C, B2B leads are other businesses and typically involve longer sales cycles and multiple decision-makers. Effective B2B lead generation combines targeted prospecting, personalized outreach, and qualification to deliver qualified contacts who are genuinely interested in what you offer.',
      },
      {
        q: "What's the difference between inbound and outbound lead generation?",
        a: 'Inbound lead generation attracts prospects through content, SEO, and thought leadership — they find you. Outbound lead generation proactively reaches out to ideal prospects through cold email, LinkedIn, and other channels. The most effective programs combine both. AppLabx specializes in outbound-driven programs supported by inbound content.',
      },
      {
        q: 'How long does it take to see results from lead generation?',
        a: 'Most clients see their first qualified leads within 2–4 weeks of campaign launch. Significant pipeline impact typically builds from month 2–3 as campaigns scale and optimize. SEO-driven inbound programs take longer (3–6 months) but produce compounding results over time.',
      },
      {
        q: 'What does a "qualified lead" mean?',
        a: 'A qualified lead is a verified contact who matches your ICP (Ideal Customer Profile) and has been pre-screened for fit and interest. At AppLabx, we define "qualified" as: matching your target persona, having a genuine business need, and expressing readiness to engage in a sales conversation.',
      },
    ],
  },
  {
    category: 'Our Services',
    items: [
      {
        q: 'What channels do you use for outreach?',
        a: 'We primarily use LinkedIn, cold email, and multi-channel sequences (combining email, LinkedIn, and other channels based on your ICP). For certain markets, we also use localized channels like WhatsApp (Southeast Asia), WeChat (China), and LINE (Thailand). We always recommend channels based on where your buyers actually are.',
      },
      {
        q: 'Do you handle content creation?',
        a: 'Yes. Our content marketing service includes SEO-optimized articles, case studies, whitepapers, email sequences, and social content. We produce all content in-house or with vetted specialist partners, optimized for both human readers and search engines.',
      },
      {
        q: 'Do you guarantee lead volume?',
        a: 'We set clear volume commitments upfront based on your ICP and target market. Our programs are structured with minimum lead SLAs. If we don\'t hit the targets, we adjust the strategy — not just report on it.',
      },
      {
        q: 'What does appointment setting include?',
        a: 'Our appointment setting service covers the full journey from qualified lead to booked meeting. This includes prospect research, multi-channel outreach, qualification calls, meeting scheduling, and calendar confirmation. We provide full meeting preparation notes so your team walks in ready.',
      },
    ],
  },
  {
    category: 'Pricing & Contracts',
    items: [
      {
        q: 'How much does lead generation cost?',
        a: 'Costs vary based on service type, target market, and volume. Most programs start from $2,000/month. Enterprise programs scale based on your pipeline goals. We always define ROI expectations upfront — the goal is a positive return, not just lead delivery.',
      },
      {
        q: 'Is there a minimum contract length?',
        a: 'Month-to-month programs are available. Annual plans receive pricing discounts. Minimum terms vary by tier. We recommend a minimum of 3 months to see meaningful results, since most outbound programs need 4–6 weeks to fully optimize.',
      },
      {
        q: 'Can I switch plans or cancel?',
        a: 'Yes. You can upgrade, downgrade, or cancel at any time. We ask for 30 days notice for cancellations to allow for proper handoff and data export.',
      },
      {
        q: 'Do you offer free trials?',
        a: 'We offer a free 30-minute strategy call for all prospective clients. For select programs, we offer a paid pilot period (typically 30 days) to demonstrate results before committing to a full program.',
      },
    ],
  },
  {
    category: 'Industries & Markets',
    items: [
      {
        q: 'What industries do you specialize in?',
        a: 'We work across SaaS, AI, HR Tech, Manufacturing, Logistics, Healthcare, FinTech, Cybersecurity, and Professional Services. Our approach adapts to each industry\'s unique buyer journey, decision-making structure, and regulatory environment.',
      },
      {
        q: 'What countries do you serve?',
        a: 'We serve 10+ countries including Singapore, Vietnam, Malaysia, Thailand, Indonesia, Philippines, Australia, UAE, Saudi Arabia, and Qatar. We have dedicated teams for APAC and Middle East, with multi-language outreach capability.',
      },
      {
        q: 'Can you handle multi-country campaigns?',
        a: 'Yes. We run coordinated multi-country programs with localized messaging, channel selection, and cultural adaptation per market. Our CRM integration provides unified pipeline visibility across all markets.',
      },
    ],
  },
  {
    category: 'Working With AppLabx',
    items: [
      {
        q: 'What information do you need from us to get started?',
        a: 'To build your program, we typically need: your Ideal Customer Profile (or help defining it), your target geography and company size, your current sales process, your product/service description, and your timeline and budget. We have a structured intake process that takes about 1–2 hours of your time.',
      },
      {
        q: 'How do you report on results?',
        a: 'All programs include real-time dashboards and weekly or bi-weekly reporting calls. You\'ll have full visibility into lead volumes, qualification rates, meeting bookings, and pipeline attribution. We don\'t hide behind dashboards — we walk through the data with you.',
      },
      {
        q: 'Do you integrate with our CRM?',
        a: 'Yes. We integrate with all major CRMs including HubSpot, Salesforce, Pipedrive, Zoho, and Microsoft Dynamics. Our standard process includes CRM setup, data hygiene, and live sync — every lead is logged automatically.',
      },
      {
        q: 'How is our data handled?',
        a: 'We are GDPR and PDPA compliant. All prospect data is handled under strict data processing agreements. We never sell or share prospect data. Full DPA available on request.',
      },
    ],
  },
]

export default function FAQPage() {
  // Build flat FAQ list for schema
  const allFaqs = faqs.flatMap((cat) => cat.items.map((item) => ({ question: item.q, answer: item.a })))
  const schema = faqSchema(allFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--brand-light)] to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Everything you need to know about our lead generation services, pricing, and process.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-6 pb-3 border-b border-[var(--border)]">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <details key={item.q} className="group bg-[var(--brand-light)] rounded-xl border border-[var(--border)]">
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-[var(--brand-dark)] hover:text-[var(--brand-primary)] transition-colors select-none">
                        {item.q}
                        <span className="flex-shrink-0 transition-transform group-open:rotate-180">
                          <svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-[var(--brand-gray)] leading-relaxed border-t border-[var(--border)] pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-[var(--brand-gray)] mb-8">
              Book a free 30-minute strategy call and we&apos;ll answer everything.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
      </main>
    </>
  )
}
