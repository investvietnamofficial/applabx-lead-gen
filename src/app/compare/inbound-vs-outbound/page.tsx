import { Metadata } from 'next'
import ComparisonPageTemplate from '@/components/sections/ComparisonPageTemplate'
import { inboundVsOutbound } from '@/lib/comparisons'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Inbound Marketing vs Outbound Sales: Building a Balanced Pipeline | AppLabx',
    description: inboundVsOutbound.description,
    openGraph: {
      title: 'Inbound Marketing vs Outbound Sales: Building a Balanced Pipeline',
      description: inboundVsOutbound.description,
      url: inboundVsOutbound.canonical,
    },
    alternates: {
      canonical: inboundVsOutbound.canonical,
    },
  }
}

export default function InboundVsOutboundPage() {
  return <ComparisonPageTemplate comparison={inboundVsOutbound} />
}
