export function ProblemsSection() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section header */}
        <div className="max-w-[680px] mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E3F0E9] text-[#0A4A38] px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] inline-block" />
            THE PROBLEM
          </div>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold text-[#191A17] tracking-tight leading-tight mb-4">
            Most lead gen breaks at the handoff.
          </h2>
          <p className="text-base text-[#3C3D38]">
            Cold email vendors don&apos;t touch your landing pages. SEO agencies don&apos;t qualify leads. In-house SDRs burn out on manual list building. The result: pipeline that looks busy but doesn&apos;t close.
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Disconnected channels',
              body: 'Outbound, inbound and nurture run through different vendors with no shared data, so leads fall through the cracks between them.',
            },
            {
              num: '02',
              title: 'Volume without qualification',
              body: 'Lists get bigger, sequences get louder, but sales still spends hours sorting real opportunities from noise.',
            },
            {
              num: '03',
              title: 'No visibility into ROI',
              body: 'Reporting stops at &quot;leads sent,&quot; not booked meetings, sales-qualified pipeline, or closed revenue.',
            },
          ].map((card) => (
            <div
              key={card.num}
              className="bg-white border border-[#E8E4D9] rounded-[14px] p-8"
            >
              <div className="font-mono text-[#D6D0C0] text-xs font-semibold mb-4">{card.num}</div>
              <h3 className="text-lg font-semibold text-[#191A17] mb-3">{card.title}</h3>
              <p className="text-sm text-[#3C3D38] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
