import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProblemsSection } from '@/components/sections/ProblemsSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { IQEngineSection } from '@/components/sections/IQEngineSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTAFinalSection } from '@/components/sections/CTAFinalSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProblemsSection />
      <ServicesPreview />
      <IQEngineSection />
      <ProcessSection />
      <ResultsSection />
      <PricingSection />
      <FAQSection />
      <CTAFinalSection />
    </main>
  )
}
