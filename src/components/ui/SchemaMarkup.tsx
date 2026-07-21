'use client'

interface SchemaMarkupProps {
  schemas: object[]
}

/**
 * Renders JSON-LD structured data in the document head.
 * Use within a layout or page component that renders inside <head>.
 * In Next.js App Router, prefer the metadata API — this is for
 * client-injectable schemas or dynamic schemas.
 */
export function SchemaMarkup({ schemas }: SchemaMarkupProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
