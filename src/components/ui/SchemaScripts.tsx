// Server component — renders JSON-LD schema scripts in the document <head>
// Used in root layout to inject global schemas

import { websiteSchema, organizationSchema } from '@/lib/seo-schemas'

export function SchemaScripts() {
  const website = websiteSchema()
  const org = organizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
    </>
  )
}
