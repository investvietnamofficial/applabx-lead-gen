import { Metadata } from 'next'
import { industries } from '@/lib/constants'
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate'

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}
  return {
    title: `${industry.title} Lead Generation | AppLabx`,
    description: industry.description,
  }
}

export default function HRTechIndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return <div>Industry not found</div>
  const relatedIndustries = industries.filter((i) => i.slug !== params.slug).slice(0, 3)
  return <IndustryPageTemplate industry={industry} relatedIndustries={relatedIndustries} />
}
