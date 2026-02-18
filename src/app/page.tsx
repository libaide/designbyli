"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FeaturedWorkAnimated from "@/components/FeaturedWorkAnimated";
import Recommendations from "@/components/Recommendations";
import Button from "@/components/Button";
import RiseInOnView from "@/components/RiseInOnView";
import ContactSection from "@/components/ContactSection";
import LightRaysBG from "@/components/Hero/Visuals/LightRaysBG";


export default function HomePage() {
  const scrollToFeaturedWork = () => {
    document
      .getElementById("featured-work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContactForm = () => {
    document
      .getElementById("home-contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden min-h-svh"
      >
        <LightRaysBG />
        <div className="relative z-10 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <Container>
              <div className="flex flex-col items-center text-center gap-6 sm:pt-32"> {/* Adjusted padding */}
                <RiseInOnView staggerChildren={true} staggerMs={100} className="w-full text-center">
                  {/* Logo Image */}
                  <div className="mb-0 mx-auto scale-[0.82] sm:scale-100 relative w-[244px] h-[244px]">
                    <Image
                      src="/LogoWhite_600.svg"
                      alt="Design by Li logo"
                      fill
                      priority={true}
                      className="object-contain"
                    />
                  </div>

                  {/* Headline */}
                  <p className="max-w-3xl mx-auto text-3xl leading-relaxed text-white sm:text-5xl tracking-normal mb-12 font-light">
                    Crafting Intuitive Digital Experiences
                  </p>

                  {/* Sub-headline */}
                  <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 sm:text-base tracking-normal font-light">
                    From messy challenges to clear, functional, and beautiful solutions.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center mx-auto">
                    <Button variant="cta" onClick={scrollToContactForm}>
                      Let's Connect
                    </Button>
                    <Button variant="secondary" onClick={scrollToFeaturedWork}>
                      View My Work
                    </Button>
                  </div>
                </RiseInOnView>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section id="featured-work">
        <RiseInOnView>
          <FeaturedWorkAnimated />
        </RiseInOnView>
      </section>


      {/* Recommendations */}
      <RiseInOnView>
       <Recommendations />
      </RiseInOnView>


      {/* Contact (Homepage) */}
      <ContactSection id="home-contact" />

    </>
  );
}