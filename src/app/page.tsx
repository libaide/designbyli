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
import ColorBends from "@/components/ColorBends";

export default function HomePage() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     <section
  id="hero"
  className="hero-vignette relative isolate mx-auto h-svh max-w-8xl overflow-hidden"
>
  {/* Background */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <ColorBends
      className="absolute inset-0 z-0"
      rotation={45}
      speed={0.25}
      colors={["#3300ff", "#00aaff", "#00ff88"]}
      transparent={false}
      autoRotate={0}
      scale={1.4}
      frequency={1.2}
      warpStrength={1.1}
      mouseInfluence={0}
      parallax={0.4}
      noise={0.1}
    />
  </div>

  {/* Global dark overlay */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-10 bg-black/20"
  />

  {/* Mobile image layer */}
  <div className="pointer-events-none absolute inset-0 z-[15] lg:hidden">
    <img
      src="/HeroRightImage.png"
      alt="Exelí portrait"
      className="absolute bottom-0 right-[-14%] h-[78%] w-auto max-w-none object-contain opacity-95 drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:right-[-8%] sm:h-[82%]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-20 h-full">
    <Container>
      <div className="relative h-svh pt-32 sm:pt-32 md:pt-32 lg:pt-0 xl:pt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* LEFT / mobile overlay text */}
        <RiseInOnView
          staggerChildren
          staggerMs={100}
          className="relative z-30 flex h-full w-full items-start lg:items-center"
        >
          <div className="mt-8 w-full max-w-[44rem]">
            <h3 className="mb-4 text-3xl font-normal tracking-normal text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
              ¡Hola!
            </h3>

            <div className="inline-block">
              <h1 className="text-7xl font-normal leading-[0.9] tracking-normal text-white sm:text-7xl md:text-9xl xl:text-[150px]">
                I&apos;m Exelí
              </h1>

              <div className="mt-2 text-right sm:mt-3">
                <span className="text-sm font-normal tracking-wide italic text-white/70 sm:text-lg">
                  (ex-cell-LEE)
                </span>
              </div>
            </div>

            <p className="mt-6 text-2xl font-normal leading-tight tracking-normal text-white sm:mt-8 sm:text-4xl md:text-5xl xl:text-6xl">
              your design partner <br className="hidden sm:block" />
              for what&apos;s next.
            </p>

            <p className="mt-3 text-base font-normal leading-tight tracking-normal text-white/75 italic sm:text-base md:text-lg xl:text-xl">
              UX & UI design for SaaS, internal tools, and business websites.
            </p>
          </div>
        </RiseInOnView>

        {/* RIGHT / desktop only */}
        <RiseInOnView
          staggerChildren
          staggerMs={100}
          className="hidden w-full max-w-3xl text-left lg:block"
        >
          <div className="relative flex h-full w-full items-end justify-end -mb-24 lg:-mb-28">
            <img
              src="/HeroRightImage.png"
              alt="Exelí portrait"
              className="pointer-events-none select-none w-[92%] max-w-[660px] object-contain opacity-95 drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)] lg:w-[94%] lg:max-w-[760px]"
            />
          </div>
        </RiseInOnView>
      </div>
    </Container>
  </div>

  {/* Bottom vignette */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-x-0 bottom-0 z-[30] h-[240px] bg-gradient-to-b from-transparent via-black/70 to-black"
  />

  {/* Scroll button */}
  <div className="absolute inset-x-0 bottom-10 z-[40] flex justify-center sm:bottom-24">
    <button
      type="button"
      aria-label="Scroll down"
      onClick={() => scrollToId("featured-work")}
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur transition hover:border-white/25 hover:bg-white/10 sm:h-14 sm:w-14 animate-float"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 animate-scroll-arrow text-white/80 transition group-hover:text-white sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </button>
  </div>
</section>

  <WorkAndRecommendationsSection />

      {/* Contact (Homepage) */}
      <ContactSection id="home-contact" />
    </>
  );
}
