import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProblemsSection } from '@/components/sections/ProblemsSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { AIPipelineSection } from '@/components/sections/AIPipelineSection'
import { IndustriesPreview } from '@/components/sections/IndustriesPreview'
import { CountriesPreview } from '@/components/sections/CountriesPreview'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { IntegrationsSection } from '@/components/sections/IntegrationsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { LeadMagnetSection } from '@/components/sections/LeadMagnetSection'
import { CTAFinalSection } from '@/components/sections/CTAFinalSection'

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar - ⚠️ PLACEHOLDER */}
      <TrustBar />

      {/* 3. Problems Section */}
      <ProblemsSection />

      {/* 4. Services Preview */}
      <ServicesPreview />

      {/* 5. AI Pipeline Section */}
      <AIPipelineSection />

      {/* 6. Industries Preview */}
      <IndustriesPreview />

      {/* 7. Countries Preview */}
      <CountriesPreview />

      {/* 8. Process Section */}
      <ProcessSection />

      {/* 9. Case Studies Preview - ⚠️ PLACEHOLDER */}
      <CaseStudiesPreview />

      {/* 10. Testimonials Section - ⚠️ PLACEHOLDER */}
      <TestimonialsSection />

      {/* 11. Integrations Section - ⚠️ PLACEHOLDER */}
      <IntegrationsSection />

      {/* 12. FAQ Section */}
      <FAQSection />

      {/* 13. Lead Magnet Section */}
      <LeadMagnetSection />

      {/* 14. Final CTA Section */}
      <CTAFinalSection />
    </main>
  )
}
