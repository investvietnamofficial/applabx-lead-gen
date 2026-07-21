import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AppLabx',
  description: 'How AppLabx collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="heading-1 text-[var(--brand-dark)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--brand-gray)] mb-12">Last updated: July 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-[var(--brand-gray)]">
          <p>
            AppLabx (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or use our services.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Information We Collect</h2>
          <p>
            We collect information you provide directly, including name, email address, company name,
            phone number, and any other information you submit through our contact forms or during
            consultations. We also collect usage data including IP addresses, browser type, and pages
            visited through standard server logs and analytics tools.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">How We Use Your Information</h2>
          <p>
            We use your information to respond to your inquiries, deliver our services, send relevant
            communications, improve our website and services, and comply with legal obligations. We never
            sell your personal data to third parties.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes outlined in
            this policy, unless a longer retention period is required by law.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or
            restrict processing of your personal data. To exercise these rights, contact us at{' '}
            <a href="mailto:hello@applabx.com" className="text-[var(--brand-primary)] underline">
              hello@applabx.com
            </a>
            .
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{' '}
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
