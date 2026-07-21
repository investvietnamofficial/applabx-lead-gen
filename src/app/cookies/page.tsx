import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | AppLabx',
  description: 'How AppLabx uses cookies and similar tracking technologies on our website.',
  alternates: {
    canonical: 'https://lead-gen-agency.applabx.com/cookies',
  },
  openGraph: {
    title: 'Cookie Policy | AppLabx',
    description: 'How AppLabx uses cookies and similar tracking technologies on our website.',
    url: 'https://lead-gen-agency.applabx.com/cookies',
  },
}

export default function CookiesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="heading-1 text-[var(--brand-dark)] mb-2">Cookie Policy</h1>
        <p className="text-sm text-[var(--brand-gray)] mb-12">Last updated: July 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-[var(--brand-gray)]">
          <p>
            This Cookie Policy explains how AppLabx (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies
            and similar tracking technologies when you visit our website.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device that help websites remember your
            preferences and understand how you use the site. We also use local storage and similar
            technologies.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">How We Use Cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Required for the website to function (e.g., form submissions, session management).</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics). This data is anonymized where possible.</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements. We currently do not use third-party marketing cookies without consent.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Managing Cookies</h2>
          <p>
            Most browsers allow you to block or delete cookies through settings. Disabling essential
            cookies may affect website functionality. You can also opt out of Google Analytics using the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-[var(--brand-primary)] underline" target="_blank" rel="noopener">
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Updates</h2>
          <p>
            We may update this policy periodically. Changes will be posted on this page with an
            updated &quot;Last updated&quot; date.
          </p>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">Contact</h2>
          <p>
            Questions? Contact us at{' '}
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
