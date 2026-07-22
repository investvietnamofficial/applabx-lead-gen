export function ServicesPreview() {
  return (
    <section id="services" className="py-24 bg-[#191A17]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section header */}
        <div className="max-w-[640px] mb-14">
          <div className="inline-flex items-center gap-2 bg-white/8 text-white px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12805C] inline-block" />
            WHAT WE BUILD
          </div>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold text-white tracking-tight leading-tight mb-4">
            One engine, four connected systems.
          </h2>
          <p className="text-base text-white/68">
            Pick a single channel to start, or run the full stack — every system feeds the same pipeline and the same dashboard.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: '↗',
              title: 'Outbound Engine',
              items: [
                'Cold email — list building, copywriting, deliverability',
                'LinkedIn outreach & social selling',
                'Cold calling & appointment setting',
                'Account-based marketing (ABM) for target accounts',
              ],
            },
            {
              icon: '◎',
              title: 'Inbound & Paid',
              items: [
                'SEO lead generation & organic capture',
                'Content marketing — gated ebooks, whitepapers, webinars',
                'Paid search (Google/Bing) landing campaigns',
                'Paid social (Meta, LinkedIn, TikTok) lead forms',
              ],
            },
            {
              icon: '▣',
              title: 'Conversion Infrastructure',
              items: [
                'Landing page design & CRO testing',
                'Lead magnets — quizzes, calculators, trials',
                'Chatbot & live-chat capture',
                'Webinar & event funnel management',
              ],
            },
            {
              icon: '↻',
              title: 'Nurture & Qualification',
              items: [
                'Email nurture sequences & drip campaigns',
                'Lead scoring — MQL to SQL qualification',
                'CRM setup & automated lead routing',
                'Retargeting for unconverted visitors',
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/4 border border-white/10 rounded-[14px] p-8 hover:bg-white/7 hover:border-white/22 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-[10px] bg-[#0B6E4F] flex items-center justify-center text-lg flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {card.items.map((item) => (
                  <li key={item} className="text-sm text-white/72 pl-5 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#12805C]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
