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
  className="relative min-h-svh isolate"
>
  <LightRaysBG />

  <div className="relative z-10 min-h-svh flex flex-col">
    <div className="flex-1 flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center text-center pb-24 sm:pb-64">

          <RiseInOnView
            staggerChildren
            staggerMs={100}
            className="w-full text-center"
          >
            {/* Logo */}
            <div className="mb-0 mx-auto scale-[0.82] sm:scale-100 relative w-[180px] h-[180px] sm:w-[244px] sm:h-[244px]">
              <Image
                src="/LogoWhite_600.svg"
                alt="Design by Li logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Headline */}
            <p className="max-w-3xl mx-auto text-3xl sm:text-5xl leading-relaxed text-white tracking-normal mb-6 sm:mb-16">
              Crafting Intuitive Digital Experiences
            </p>

            {/* Sub-headline */}
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-300 font-light">
              From messy challenges to clear, functional, and beautiful solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center mx-auto">
              <Button variant="cta" onClick={scrollToFeaturedWork}>
                View My Work
              </Button>

              <Button variant="secondary" onClick={scrollToContactForm}>
                Let's Connect
              </Button>
            </div>
          </RiseInOnView>

        </div>
      </Container>
    </div>
  </div>

  {/* Fade-out overlay so rays visually end at hero */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
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