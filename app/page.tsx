import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { BusinessChallenges } from "@/components/business-challenges"
import { ResultsSection } from "@/components/results-section"
import { SubBrands } from "@/components/sub-brands"
import { Testimonials } from "@/components/testimonials"
import { PricingCTA } from "@/components/pricing-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-primary text-text-primary overflow-x-hidden">
      <HeroSection />
      <TrustedBySection />
      <BusinessChallenges />
      <ResultsSection />
      <SubBrands />
      <Testimonials />
      <PricingCTA />
      <Footer />
    </main>
  )
}
