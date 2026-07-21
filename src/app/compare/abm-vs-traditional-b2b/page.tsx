import { Metadata } from 'next'
import ComparisonPageTemplate from '@/components/sections/ComparisonPageTemplate'
import { abmVsTraditionalB2b } from '@/lib/comparisons'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ABM vs Traditional B2B Marketing: Precision vs Scale | AppLabx',
    description: abmVsTraditionalB2b.description,
    openGraph: {
      title: 'ABM vs Traditional B2B Marketing: Precision vs Scale',
      description: abmVsTraditionalB2b.description,
      url: abmVsTraditionalB2b.canonical,
    },
    alternates: {
      canonical: abmVsTraditionalB2b.canonical,
    },
  }
}

export default function ABMVsTraditionalB2BPage() {
  return <ComparisonPageTemplate comparison={abmVsTraditionalB2b} />
}
