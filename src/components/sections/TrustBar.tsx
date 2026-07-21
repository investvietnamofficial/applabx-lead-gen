'use client'

import { Building2, Award } from 'lucide-react'

/**
 * TrustBar — client logo section.
 *
 * TO DO BEFORE LAUNCH:
 * Replace clientLogos array with real client logos (SVG or PNG).
 * Each item: { name: string, logo: ReactNode | null }
 * Remove SHOW_PLACEHOLDER once real logos are added.
 */
const SHOW_PLACEHOLDER = true // Set to false when real logos are added

const clientLogos: Array<{ name: string; logo: React.ReactNode | null }> = [
  // TODO: Add real client logos here
  // { name: 'Acme Corp', logo: <Image src="/logos/acme.svg" alt="Acme Corp" width={120} height={40} /> },
]

export function TrustBar() {
  if (SHOW_PLACEHOLDER) {
    return (
      <section className="py-12 bg-[var(--brand-light-secondary)] border-y border-[var(--border)]">
        <div className="container">
          <p className="text-center text-sm font-medium text-[var(--brand-gray)] mb-8">
            Trusted by B2B teams worldwide
          </p>

          {/* Honest placeholder — professional empty state */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['SaaS Companies', 'Manufacturing Firms', 'Professional Services', 'FinTech & HealthTech', 'Enterprise Teams'].map((sector) => (
              <div
                key={sector}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-white text-sm text-[var(--brand-gray)]"
              >
                <Building2 className="w-4 h-4 text-[var(--brand-gray-light)]" />
                {sector}
              </div>
            ))}
          </div>

          {/* Note to operators — not shown in production */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[var(--brand-gray-light)] italic">
              Client logos will be added before launch.{' '}
              <span className="not-italic font-medium">See PLACEHOLDERS.md for full list.</span>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-[var(--brand-light-secondary)] border-y border-[var(--border)]">
      <div className="container">
        <p className="text-center text-sm font-medium text-[var(--brand-gray)] mb-8">
          Trusted by B2B teams worldwide
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--brand-light-secondary)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--brand-light-secondary)] to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8"
              >
                {client.logo ?? (
                  <div className="w-32 h-12 flex items-center justify-center text-sm font-medium text-[var(--brand-gray)]">
                    {client.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
