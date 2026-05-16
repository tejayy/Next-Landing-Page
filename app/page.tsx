import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Navbar } from "@/components/ui/navbar";



export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection/>
      <ImpactSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <h1 className="text-bold p-6">WELCOME</h1>
    </main>
  );
}
