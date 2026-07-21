import { Metadata } from 'next'
import { services } from '@/lib/constants'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} | AppLabx`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | AppLabx`,
      description: service.shortDescription,
      url: `https://lead-gen-agency.applabx.com/services/${service.slug}`,
    },
  }
}

export default function LinkedInOutreachPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return <div>Service not found</div>

  const relatedServices = services.filter((s) => s.slug !== params.slug).slice(0, 3)

  return (
    <ServicePageTemplate
      service={service}
      relatedServices={relatedServices}
    />
  )
}
