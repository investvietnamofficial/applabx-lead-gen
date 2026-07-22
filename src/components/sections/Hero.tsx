'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          
          {/* LEFT: Text content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#E3F0E9] text-[#0A4A38] px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E4F] inline-block" />
              AI-DRIVEN B2B LEAD GENERATION
            </div>

            {/* H1 */}
            <h1 className="text-[clamp(36px,4.6vw,56px)] font-bold text-[#191A17] leading-tight tracking-tight mb-6">
              Pipeline that builds itself,{' '}
              <span className="text-[#0B6E4F]">quarter after quarter.</span>
            </h1>

            {/* Lead paragraph */}
            <p className="text-lg text-[#3C3D38] max-w-[540px] mb-8 leading-relaxed">
              AppLabx runs full-funnel lead generation for B2B teams across Singapore, Vietnam, APAC and the Middle East — outbound, inbound, and qualification, engineered with our proprietary IQ Engine and reported in one dashboard.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0B6E4F] text-white font-semibold text-sm shadow-md hover:bg-[#0A4A38] transition-colors"
              >
                Book a Strategy Call →
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-[#191A17] border border-[#D6D0C0] font-semibold text-sm hover:border-[#191A17] transition-colors"
              >
                See What&apos;s Included
              </Link>
            </div>

            {/* Trust stats bar */}
            <div className="flex flex-wrap gap-8 pt-7 border-t border-[#E8E4D9]">
              <div>
                <b className="block text-[26px] font-bold text-[#191A17] leading-none">3.2x</b>
                <span className="text-xs text-[#6B6C64] font-medium">Avg. pipeline growth in 6 months</span>
              </div>
              <div>
                <b className="block text-[26px] font-bold text-[#191A17] leading-none">45+</b>
                <span className="text-xs text-[#6B6C64] font-medium">B2B brands across APAC &amp; MENA</span>
              </div>
              <div>
                <b className="block text-[26px] font-bold text-[#191A17] leading-none">21 days</b>
                <span className="text-xs text-[#6B6C64] font-medium">To first qualified conversation</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Funnel card visual */}
          <div className="relative">
            <div className="bg-white rounded-[20px] shadow-[0_24px_64px_rgba(10,74,56,0.14)] border border-[#E8E4D9] p-7">
              {/* Card header */}
              <div className="flex justify-between items-center mb-5">
                <h4 className="font-semibold text-[#191A17] text-sm">Pipeline Snapshot</h4>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#0B6E4F] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12805C] animate-pulse" />
                  LIVE — PipelineIQ
                </div>
              </div>

              {/* Funnel rows */}
              {[
                { label: 'Prospects mapped', bar: '96%', val: '12,480' },
                { label: 'Sequences sent', bar: '78%', val: '8,140' },
                { label: 'Replies (positive)', bar: '38%', val: '612' },
                { label: 'Meetings booked', bar: '22%', val: '184' },
                { label: 'Sales-qualified', bar: '14%', val: '97' },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-4 py-3 border-b border-[#F3F1EA] last:border-0">
                  <span className="text-sm font-semibold text-[#191A17] w-36 flex-shrink-0">{row.label}</span>
                  <div className="flex-1 h-2 bg-[#F3F1EA] rounded-md overflow-hidden">
                    <div className="h-full rounded-md bg-gradient-to-r from-[#12805C] to-[#0A4A38]" style={{ width: row.bar }} />
                  </div>
                  <span className="font-mono text-xs text-[#6B6C64] w-12 text-right">{row.val}</span>
                </div>
              ))}
            </div>

            {/* Float chips */}
            <div className="absolute -top-5 right-3 bg-white rounded-xl shadow-md border border-[#E8E4D9] px-4 py-3 flex items-center gap-2.5 text-sm font-semibold">
              <span className="w-7 h-7 rounded-lg bg-[#B9925A]/90 flex items-center justify-center text-white text-xs">★</span>
              ScoreIQ: 97 SQLs flagged
            </div>
            <div className="absolute -bottom-5 left-[-18px] bg-white rounded-xl shadow-md border border-[#E8E4D9] px-4 py-3 flex items-center gap-2.5 text-sm font-semibold">
              <span className="w-7 h-7 rounded-lg bg-[#B9925A]/90 flex items-center justify-center text-white text-xs">⇗</span>
              +48% reply rate w/ OutreachIQ
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
