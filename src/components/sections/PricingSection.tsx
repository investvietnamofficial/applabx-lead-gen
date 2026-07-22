export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#F3F1EA]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E3F0E9] text-[#0A4A38] px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] inline-block" />
            ENGAGEMENT TIERS
          </div>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold text-[#191A17] tracking-tight leading-tight mb-4">
            Start narrow, scale into full-funnel.
          </h2>
          <p className="text-base text-[#3C3D38]">
            Every tier includes PipelineIQ reporting. Final pricing is scoped to channel mix, target volume, and market coverage on your strategy call.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Starter */}
          <div className="bg-white border border-[#E8E4D9] rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-[#191A17] mb-2">Starter</h3>
            <p className="text-sm text-[#6B6C64] mb-6 min-h-[40px]">Validate messaging on a single outbound channel.</p>
            <p className="text-sm font-semibold text-[#0B6E4F] mb-6 pb-6 border-b border-[#E8E4D9]">Custom quote</p>
            <ul className="space-y-3 mb-7 flex-1">
              {[
                'One channel: cold email or LinkedIn outreach',
                'ProspectIQ list building & ICP mapping',
                'OutreachIQ sequence copywriting',
                'Monthly PipelineIQ report',
              ].map((item) => (
                <li key={item} className="text-sm text-[#3C3D38] pl-6 relative before:absolute before:left-0 before:top-0 before:content-['✓'] before:text-[#0B6E4F] before:font-bold before:text-[13px]">
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block text-center px-6 py-3 rounded-full bg-transparent border border-[#D6D0C0] text-[#191A17] font-semibold text-sm hover:border-[#191A17] transition-colors no-underline">
              Get a Quote
            </a>
          </div>

          {/* Growth — featured */}
          <div className="bg-white border-2 border-[#0B6E4F] rounded-2xl p-8 flex flex-col relative shadow-[0_24px_64px_rgba(10,74,56,0.14)] transform md:-translate-y-2">
            <span className="absolute -top-3 left-7 bg-[#0B6E4F] text-white text-xs font-bold px-4 py-1.5 rounded-full font-mono">
              MOST POPULAR
            </span>
            <h3 className="text-xl font-semibold text-[#191A17] mb-2">Growth</h3>
            <p className="text-sm text-[#6B6C64] mb-6 min-h-[40px]">Multi-channel outbound plus a conversion-ready landing page.</p>
            <p className="text-sm font-semibold text-[#0B6E4F] mb-6 pb-6 border-b border-[#E8E4D9]">Custom quote</p>
            <ul className="space-y-3 mb-7 flex-1">
              {[
                'Two to three outbound & paid channels',
                'ConvertIQ landing page build & CRO',
                'ScoreIQ lead scoring & qualification',
                'Bi-weekly optimization cycles',
                'Live PipelineIQ dashboard access',
              ].map((item) => (
                <li key={item} className="text-sm text-[#3C3D38] pl-6 relative before:absolute before:left-0 before:top-0 before:content-['✓'] before:text-[#0B6E4F] before:font-bold before:text-[13px]">
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block text-center px-6 py-3 rounded-full bg-[#0B6E4F] text-white font-semibold text-sm shadow-sm hover:bg-[#0A4A38] transition-colors no-underline">
              Get a Quote
            </a>
          </div>

          {/* Full-Funnel */}
          <div className="bg-white border border-[#E8E4D9] rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-[#191A17] mb-2">Full-Funnel</h3>
            <p className="text-sm text-[#6B6C64] mb-6 min-h-[40px]">Complete outbound, inbound, nurture and reporting stack.</p>
            <p className="text-sm font-semibold text-[#0B6E4F] mb-6 pb-6 border-b border-[#E8E4D9]">Custom quote</p>
            <ul className="space-y-3 mb-7 flex-1">
              {[
                'Full outbound + inbound + paid channel mix',
                'NurtureIQ automated nurture & retargeting',
                'CRM integration & lead routing automation',
                'Dedicated pipeline strategist',
                'Weekly reporting & quarterly strategy reviews',
              ].map((item) => (
                <li key={item} className="text-sm text-[#3C3D38] pl-6 relative before:absolute before:left-0 before:top-0 before:content-['✓'] before:text-[#0B6E4F] before:font-bold before:text-[13px]">
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block text-center px-6 py-3 rounded-full bg-transparent border border-[#D6D0C0] text-[#191A17] font-semibold text-sm hover:border-[#191A17] transition-colors no-underline">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
