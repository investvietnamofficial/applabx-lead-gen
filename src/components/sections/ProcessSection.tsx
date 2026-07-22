export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#F3F1EA]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E3F0E9] text-[#0A4A38] px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] inline-block" />
            HOW WE WORK
          </div>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold text-[#191A17] tracking-tight leading-tight mb-4">
            From kickoff to qualified pipeline.
          </h2>
          <p className="text-base text-[#3C3D38]">
            A structured rollout so channels launch in the right order and compound instead of competing for the same budget.
          </p>
        </div>

        {/* Process track — 4 steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 relative">
          {[
            { num: '1', title: 'Discovery & ICP mapping', body: 'We define your ideal customer profile, offer positioning and channel mix with ProspectIQ.' },
            { num: '2', title: 'Build & launch', body: 'Sequences, landing pages and campaigns go live across your chosen channels within 2-3 weeks.' },
            { num: '3', title: 'Optimize with AI', body: 'ScoreIQ and ConvertIQ tune targeting and conversion weekly based on live response data.' },
            { num: '4', title: 'Scale & report', body: 'PipelineIQ tracks ROI end-to-end, and we scale the channels producing qualified pipeline.' },
          ].map((step, idx) => (
            <div key={step.num} className="relative px-6 pt-10">
              {/* Horizontal connector line */}
              {idx > 0 && (
                <div className="absolute top-5 left-0 right-full h-0.5 bg-[#D6D0C0]" style={{ right: '50%' }} />
              )}
              {/* Number circle */}
              <div className="w-10 h-10 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center font-bold text-sm relative z-10 mb-5">
                {step.num}
              </div>
              <h3 className="text-[17px] font-semibold text-[#191A17] mb-3">{step.title}</h3>
              <p className="text-sm text-[#3C3D38] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
