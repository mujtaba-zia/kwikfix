import { HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCallButton } from "@/components/FloatingCallButton";

export default function HomePage() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <HeaderNav />
      <main id="main">
        <Hero />
        <ServicesGrid />
        <AboutSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
      <FloatingCallButton />
    </div>
  );
}
