import { Metadata } from 'next'
import ComparisonPageTemplate from '@/components/sections/ComparisonPageTemplate'
import { clayVsApollo } from '@/lib/comparisons'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Clay vs Apollo: Which Outreach Automation Platform Wins? | AppLabx',
    description: clayVsApollo.description,
    openGraph: {
      title: 'Clay vs Apollo: Which Outreach Automation Platform Wins?',
      description: clayVsApollo.description,
      url: clayVsApollo.canonical,
    },
    alternates: {
      canonical: clayVsApollo.canonical,
    },
  }
}

export default function ClayVsApolloPage() {
  return <ComparisonPageTemplate comparison={clayVsApollo} />
}
