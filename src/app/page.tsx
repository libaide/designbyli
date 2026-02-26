"use client";

import Container from "@/components/Container";
import FeaturedWorkAnimated from "@/components/FeaturedWorkAnimated";
import Recommendations from "@/components/Recommendations";
import Button from "@/components/Button";
import RiseInOnView from "@/components/RiseInOnView";
import ContactSection from "@/components/ContactSection";
import LightRaysBG from "@/components/Hero/Visuals/LightRaysBG";
import Logo from "@/components/logo";
import WorkAndRecommendationsSection from "@/components/WorkAndRecommendationsSection";

export default function HomePage() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative min-h-svh isolate">
        <LightRaysBG />

        <div className="relative z-10 min-h-svh flex items-center">
          <Container>
            <div className="flex flex-col items-center text-center pb-24 sm:pb-64 w-full">
              <RiseInOnView staggerChildren staggerMs={100} className="w-full text-center">
                {/* Logo */}
                <Logo
                  size={240}
                  smSize={264}
                  priority
                  disableAnimation
                  className="mb-4 mx-auto scale-[0.82] sm:scale-100"
                />

                {/* Headline */}
                <p className="max-w-3xl mx-auto text-3xl/11 sm:text-5xl text-white tracking-normal mb-6 sm:mb-16">
                  Crafting Intuitive Digital Experiences
                </p>

                {/* Sub-headline */}
                <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 font-normal">
                  From messy challenges to clear, functional, and beautiful solutions.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center mx-auto">
                  <Button variant="cta" onClick={() => scrollToId("featured-work")}>
                    View my work
                  </Button>

                  <Button variant="secondary" onClick={() => scrollToId("home-contact")}>
                    Let's connect
                  </Button>
                </div>
              </RiseInOnView>
            </div>
          </Container>
        </div>

      
      </section>

      <RiseInOnView>
  <WorkAndRecommendationsSection />
</RiseInOnView>

      {/* Contact (Homepage) */}
      <ContactSection id="home-contact" />
    </>
  );
}
