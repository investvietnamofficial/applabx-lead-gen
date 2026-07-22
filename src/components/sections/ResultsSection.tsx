export function ResultsSection() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Emerald results band */}
        <div className="bg-[#0A4A38] rounded-3xl p-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: '3.2x', label: 'Average pipeline growth within 6 months' },
            { stat: '48%', label: 'Average lift in positive reply rate' },
            { stat: '45+', label: 'B2B brands served across APAC & MENA' },
            { stat: '21 days', label: 'Median time to first qualified call' },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <b className="block text-[38px] font-bold text-white leading-none mb-2">{item.stat}</b>
              <span className="text-sm text-white/72">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
