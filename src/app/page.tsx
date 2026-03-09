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

  {/* Optional dark overlay for readability */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-10 bg-black/20"
  />

  {/* Content */}
  <div className="relative z-20 h-full">
    <Container>
      <div className="grid h-svh grid-cols-1 items-center gap-10 pt-28 pb-24 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <RiseInOnView
          staggerChildren
          staggerMs={100}
          className="w-full max-w-3xl text-left"
        >
          <h3 className="mb-6 text-4xl font-normal tracking-normal text-white sm:text-7xl">
            ¡Hola!
          </h3>

          <div className="inline-block">
            <h1 className="text-6xl font-normal leading-[0.9] tracking-normal text-white sm:text-7xl md:text-8xl xl:text-[150px]">
              I&apos;m Exelí
            </h1>

            <div className="mt-3 text-right">
              <span className="text-base font-medium tracking-wide italic text-white/70 sm:text-lg">
                (ex-cell-LEE)
              </span>
            </div>
          </div>

          <p className="mt-8 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl md:text-5xl xl:text-6xl">
            your design partner <br className="hidden sm:block" />
            for what&apos;s next.
          </p>
          <p className="mt-3 text-3xl font-medium leading-tight tracking-normal text-white/70 sm:text-3xl md:text-4xl xl:text-xl italic">
            UX/UI design for SaaS, internal tools, and business websites.
          </p>
        </RiseInOnView>

        {/* RIGHT */}
        <RiseInOnView
          staggerChildren
          staggerMs={100}
          className="w-full max-w-3xl text-left"
        >
          <div className="relative flex h-full w-full items-end justify-end -mb-24 sm:-mb-28 lg:-mb-28">
            <img
              src="/HeroRightImage.png"
              alt="Exelí portrait"
              className="pointer-events-none select-none w-[92%] max-w-[660px] object-contain opacity-95 drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:w-[84%] lg:w-[94%] lg:max-w-[760px]"
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
        className="h-5 w-5 text-white/80 transition group-hover:text-white sm:h-6 sm:w-6 animate-scroll-arrow"
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
