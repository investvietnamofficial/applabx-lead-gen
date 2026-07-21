import { Metadata } from 'next'
import ComparisonPageTemplate from '@/components/sections/ComparisonPageTemplate'
import { apolloVsZoominfo } from '@/lib/comparisons'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Apollo vs ZoomInfo: Which B2B Data Platform Wins? | AppLabx',
    description: apolloVsZoominfo.description,
    openGraph: {
      title: 'Apollo vs ZoomInfo: Which B2B Data Platform Wins?',
      description: apolloVsZoominfo.description,
      url: apolloVsZoominfo.canonical,
    },
    alternates: {
      canonical: apolloVsZoominfo.canonical,
    },
  }
}

export default function ApolloVsZoomInfoPage() {
  return <ComparisonPageTemplate comparison={apolloVsZoominfo} />
}
