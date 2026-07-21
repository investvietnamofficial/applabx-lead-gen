import { Metadata } from 'next'
import { countries } from '@/lib/constants'
import CountryPageTemplate from '@/components/sections/CountryPageTemplate'

export async function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const country = countries.find((c) => c.slug === slug)
  if (!country) return {}
  return {
    title: `B2B Lead Generation in ${country.name} | AppLabx`,
    description: `Expert B2B lead generation services in ${country.name}. ${country.description} Book a free strategy call today.`,
    openGraph: {
      title: `B2B Lead Generation in ${country.name} | AppLabx`,
      description: `Expert B2B lead generation services in ${country.name}. ${country.description}`,
    },
  }
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const country = countries.find((c) => c.slug === slug)
  if (!country) return <div>Country not found</div>
  return <CountryPageTemplate country={country} />
}
