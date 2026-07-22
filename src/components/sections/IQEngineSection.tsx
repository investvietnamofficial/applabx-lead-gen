export function IQEngineSection() {
  return (
    <section id="engine" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E3F0E9] text-[#0A4A38] px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] inline-block" />
            THE IQ ENGINE
          </div>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold text-[#191A17] tracking-tight leading-tight mb-4">
            Proprietary AI behind every campaign.
          </h2>
          <p className="text-base text-[#3C3D38]">
            Six connected modules handle targeting, personalization, qualification and reporting — so every week of data makes the next week&apos;s campaign sharper.
          </p>
        </div>

        {/* IQ cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'ProspectIQ™', heading: 'ICP targeting & list building', body: 'Identifies and enriches your ideal customer profile across firmographic, technographic and intent signals.' },
            { name: 'OutreachIQ™', heading: 'AI-personalized sequencing', body: 'Writes and adapts email, LinkedIn and call scripts per segment, testing angles automatically.' },
            { name: 'ScoreIQ™', heading: 'Lead scoring & qualification', body: 'Ranks every reply and form-fill against your buying signals so reps only work real opportunities.' },
            { name: 'ConvertIQ™', heading: 'Landing page optimization', body: 'Continuously tests page structure, copy and forms to lift conversion rate without new traffic spend.' },
            { name: 'NurtureIQ™', heading: 'Automated nurture & retargeting', body: 'Keeps warm leads engaged with adaptive sequences until they&apos;re sales-ready.' },
            { name: 'PipelineIQ™', heading: 'Attribution & reporting', body: 'One live dashboard tracking every channel from first touch to closed revenue.' },
          ].map((card) => (
            <div key={card.name} className="bg-white border border-[#E8E4D9] rounded-[14px] p-7 relative overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#12805C] to-[#B9925A]" />
              <span className="font-mono font-semibold text-sm text-[#0B6E4F] block mb-3">{card.name}</span>
              <h3 className="text-[17.5px] font-semibold text-[#191A17] mb-3">{card.heading}</h3>
              <p className="text-sm text-[#3C3D38] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
