import { Metadata } from 'next'
import ComparisonPageTemplate from '@/components/sections/ComparisonPageTemplate'
import { linkedinVsEmail } from '@/lib/comparisons'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'LinkedIn Sales Navigator vs Email Outreach: Channel Strategy Guide | AppLabx',
    description: linkedinVsEmail.description,
    openGraph: {
      title: 'LinkedIn Sales Navigator vs Email Outreach: Channel Strategy Guide',
      description: linkedinVsEmail.description,
      url: linkedinVsEmail.canonical,
    },
    alternates: {
      canonical: linkedinVsEmail.canonical,
    },
  }
}

export default function LinkedInVsEmailPage() {
  return <ComparisonPageTemplate comparison={linkedinVsEmail} />
}
