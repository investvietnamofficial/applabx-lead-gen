import Link from 'next/link'

const footerSections = [
  {
    heading: 'Services',
    links: [
      { label: 'Outbound Engine', href: '#services' },
      { label: 'Inbound & Paid', href: '#services' },
      { label: 'Conversion Infrastructure', href: '#services' },
      { label: 'Nurture & Qualification', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'AI Engine', href: '#engine' },
      { label: 'Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Get Started',
    links: [
      { label: 'hello@applabx.com', href: 'mailto:hello@applabx.com' },
      { label: 'Book a Strategy Call', href: '#contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#191A17] text-white/60 py-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 no-underline mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#12805C] to-[#0A4A38] flex items-center justify-center text-white font-bold text-base">
                AX
              </span>
              <span>
                <span className="block text-lg font-bold text-white leading-none">AppLabx</span>
                <span className="block text-[10.5px] font-semibold text-white/50 uppercase tracking-widest leading-none mt-0.5">Lead Generation</span>
              </span>
            </Link>
            <p className="text-sm max-w-[280px] mb-5 leading-relaxed">
              Full-funnel B2B lead generation, engineered with proprietary AI and reported in one dashboard.
            </p>
            <div className="text-xs space-y-1">
              <span>🇸🇬 Singapore — HQ</span>
              <br />
              <span>🇻🇳 Ho Chi Minh City, Vietnam — HQ</span>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">{section.heading}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-white no-underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-3 text-xs">
          <span>© 2026 AppLabx. All rights reserved.</span>
          <span>Singapore · Vietnam · Serving APAC &amp; the Middle East</span>
        </div>
      </div>
    </footer>
  )
}
