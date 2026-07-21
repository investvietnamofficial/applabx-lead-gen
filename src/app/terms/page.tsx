import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AppLabx',
  description: 'Terms and conditions governing the use of AppLabx services.',
  alternates: {
    canonical: 'https://lead-gen-agency.applabx.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | AppLabx',
    description: 'Terms and conditions governing the use of AppLabx services.',
    url: 'https://lead-gen-agency.applabx.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="heading-1 text-[var(--brand-dark)] mb-2">Terms of Service</h1>
        <p className="text-sm text-[var(--brand-gray)] mb-12">Last updated: July 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-[var(--brand-gray)]">
          <p>
            By accessing or using the AppLabx website and services, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Services</h2>
          <p>
            AppLabx provides B2B lead generation, appointment setting, and related marketing services.
            Specific service scope, deliverables, and timelines are defined in individual Statements of
            Work or service agreements between AppLabx and the client.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Client Responsibilities</h2>
          <p>
            Clients are responsible for providing accurate information about their target market,
            product or service, and sales process. Clients must ensure they have the right to contact
            the prospects we work with, in compliance with applicable anti-spam and data protection laws.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Payment Terms</h2>
          <p>
            Payment terms are as specified in individual service agreements. Late payments may incur
            interest at 1.5% per month or the maximum rate permitted by law.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Limitation of Liability</h2>
          <p>
            AppLabx's total liability for any claim arising from our services shall not exceed the fees
            paid by the client for the specific service giving rise to the claim. AppLabx is not
            liable for indirect, incidental, or consequential damages.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:hello@applabx.com" className="text-[var(--brand-primary)] underline">
              hello@applabx.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
