import { Metadata } from 'next'
import ComparisonPageTemplate from '@/components/sections/ComparisonPageTemplate'
import { coldEmailVsLinkedin } from '@/lib/comparisons'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cold Email vs LinkedIn Outreach: Which Channel Delivers Better ROI? | AppLabx',
    description: coldEmailVsLinkedin.description,
    openGraph: {
      title: 'Cold Email vs LinkedIn Outreach: Which Channel Delivers Better ROI?',
      description: coldEmailVsLinkedin.description,
      url: coldEmailVsLinkedin.canonical,
    },
    alternates: {
      canonical: coldEmailVsLinkedin.canonical,
    },
  }
}

export default function ColdEmailVsLinkedInPage() {
  return <ComparisonPageTemplate comparison={coldEmailVsLinkedin} />
}
