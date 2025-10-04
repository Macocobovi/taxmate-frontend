import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        <main className="max-w-7xl mx-auto relative">
          <HeroSection />
        </main>

        <AnimatedSection id="about-section" className="relative z-10 mt-24" delay={0.1}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection id="features-section" className="relative z-10 max-w-7xl mx-auto mt-24" delay={0.2}>
          <FeaturesSection />
        </AnimatedSection>

        <AnimatedSection id="how-it-works-section" className="relative z-10 max-w-7xl mx-auto mt-24" delay={0.2}>
          <HowItWorks />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 mt-24" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
