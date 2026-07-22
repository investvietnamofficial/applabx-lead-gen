export function FAQSection() {
  const faqs = [
    {
      q: 'What channels does AppLabx Lead Generation use?',
      a: 'We build outbound engines (cold email, LinkedIn outreach, appointment setting, ABM), inbound and paid channels (SEO, paid search, paid social), conversion infrastructure (landing pages, lead magnets, webinar funnels), and nurture systems (email sequences, lead scoring, CRM automation) — combined into one coordinated pipeline.',
    },
    {
      q: 'How is AppLabx different from a typical lead gen agency?',
      a: 'Our proprietary IQ Engine stack — ProspectIQ, OutreachIQ, ScoreIQ, ConvertIQ, NurtureIQ and PipelineIQ — automates targeting, personalization, qualification and reporting, so campaigns get sharper every week instead of running on static lists and templates.',
    },
    {
      q: 'Which markets do you serve?',
      a: 'We are dual-headquartered in Singapore and Vietnam and run campaigns for B2B clients across Southeast Asia, wider APAC, and the Middle East.',
    },
    {
      q: 'How quickly can we expect qualified leads?',
      a: "Most clients see the first qualified conversations within 3-4 weeks of launch, once ICP mapping, list building and initial sequencing are complete.",
    },
    {
      q: 'Do you offer a single-channel starting package?',
      a: "Yes. Our Starter tier focuses on one core channel, typically cold email or LinkedIn outreach, so you can validate the offer and messaging before scaling into a full-funnel engagement.",
    },
    {
      q: 'How is pricing structured?',
      a: 'Pricing is scoped to channel mix, target account volume and market coverage. We provide a custom quote after a discovery call rather than a flat rate card, since outbound infrastructure costs vary by industry and geography.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E3F0E9] text-[#0A4A38] px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] inline-block" />
            FAQ
          </div>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold text-[#191A17] tracking-tight leading-tight mb-4">
            Common questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white border border-[#E8E4D9] rounded-xl px-6 group">
              <summary className="py-5 font-semibold text-[#191A17] text-sm cursor-pointer list-none flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-[#0B6E4F] text-2xl font-light leading-none ml-4 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="text-sm text-[#3C3D38] pb-6 max-w-[680px] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
