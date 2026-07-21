// Server component — wraps all pages
// Breadcrumb client component handles active URL detection

import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/Breadcrumb'
import { BreadcrumbClient } from '@/components/ui/BreadcrumbClient'
import { websiteSchema, organizationSchema } from '@/lib/seo-schemas'

export function Layout({ children }: { children: React.ReactNode }) {
  const website = websiteSchema()
  const org = organizationSchema()

  return (
    <>
      {/* Global JSON-LD schemas — rendered in body, picked up by search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />

      <Navigation />
      <BreadcrumbClient />
      <main id="main-content" className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
