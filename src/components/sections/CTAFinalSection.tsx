export function CTAFinalSection() {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Emerald gradient card */}
        <div className="bg-gradient-to-br from-[#0A4A38] to-[#0B6E4F] rounded-[28px] p-16 text-center relative overflow-hidden">
          <h2 className="text-[clamp(28px,3.6vw,40px)] font-bold text-white tracking-tight leading-tight mb-4">
            Ready for a pipeline that compounds?
          </h2>
          <p className="text-white/78 max-w-[520px] mx-auto text-base mb-8">
            Book a 30-minute strategy call. We&apos;ll map your ICP, recommend a channel mix, and show you what a launch plan looks like.
          </p>
          <a
            href="mailto:hello@applabx.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0B6E4F] font-semibold text-sm shadow-md hover:bg-[#F1F7F3] transition-colors no-underline"
          >
            Book a Strategy Call →
          </a>
        </div>
      </div>
    </section>
  )
}
