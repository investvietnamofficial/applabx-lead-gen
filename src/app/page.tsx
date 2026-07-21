import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { IndustriesPreview } from '@/components/sections/IndustriesPreview'
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTAFinalSection } from '@/components/sections/CTAFinalSection'

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero — sell the outcome */}
      <Hero />

      {/* 2. Trust — who we serve */}
      <TrustBar />

      {/* 3. Services — what we do */}
      <ServicesPreview />

      {/* 4. Results — how the pipeline works + outcomes */}
      <ResultsSection />

      {/* 5. Process — how we work with you */}
      <ProcessSection />

      {/* 6. Industries — who we specialize in */}
      <IndustriesPreview />

      {/* 7. Case Studies — real results (placeholder until real data) */}
      <CaseStudiesPreview />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Final CTA */}
      <CTAFinalSection />
    </main>
  )
}
