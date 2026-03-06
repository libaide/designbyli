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
<section
  id="hero"
  className="
    hero-bg hero-vignette hero-noise hero-bottom-vignette
    relative isolate mx-auto h-svh max-w-8xl overflow-hidden
  "
>
  <div className="relative z-10 h-full">
    <Container>
      <div className="grid h-svh grid-cols-1 items-center gap-10 pt-10 pb-24 lg:grid-cols-2 lg:gap-16 sm:pt-0 sm:pb-24">
        {/* LEFT */}
        <RiseInOnView
          staggerChildren
          staggerMs={100}
          className="w-full max-w-3xl text-left"
        >
          <p className="mb-6 text-4xl font-normal tracking-normal text-white sm:text-6xl">
            ¡Hola!
          </p>

          {/* Name + pronunciation grouped so pronunciation can align to end */}
          <div className="inline-block">
            <h1 className="text-white font-normal tracking-normal leading-[0.9] text-6xl sm:text-7xl md:text-8xl xl:text-[150px]">
              I&apos;m Exelí
            </h1>

            {/* aligned to the right edge of the name line */}
            <div className="mt-3 text-right">
              <span className="text-base font-semibold tracking-wide text-white/70 sm:text-lg">
                (ex-cell-LEE)
              </span>
            </div>
          </div>

          <p className="mt-8 text-white font-normal tracking-normal leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
            your design partner <br className="hidden sm:block" />
            for what&apos;s next.
          </p>
        </RiseInOnView>

        {/* RIGHT */}
<div
  className="
    relative flex h-full w-full justify-end
    items-end
    -mb-24 sm:-mb-28   /* cancels the grid bottom padding so the image can sit lower */
    lg:-mb-28
  "
>
  <img
    src="/HeroRightImage.png"
    alt="Exelí portrait"
    className="
      pointer-events-none select-none
      w-[92%] sm:w-[84%] lg:w-[94%]
      max-w-[660px] lg:max-w-[760px]
      object-contain opacity-95
      drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)]
    "
  />
</div>
      </div>
    </Container>
  </div>
{/* Bottom vignette overlay */}
<div
  aria-hidden
  className="
    pointer-events-none
    absolute
    inset-x-0
    bottom-0
    h-[240px]
    z-[30]
    bg-gradient-to-b
    from-transparent
    via-black/70
    to-black
  "
/>

  {/* Scroll down button stays the same */}
  <div className="absolute inset-x-0 bottom-10 z-100 flex justify-center sm:bottom-32">
    <button
      type="button"
      aria-label="Scroll down"
      onClick={() => scrollToId("featured-work")}
      className="
        group
        h-12 w-12 sm:h-14 sm:w-14
        rounded-full
        border border-white/15
        bg-transparent
        backdrop-blur
        flex items-center justify-center
        shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
        hover:bg-white/10 hover:border-white/25
        transition
        animate-float
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white/80 group-hover:text-white transition"
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

      <RiseInOnView>
  <WorkAndRecommendationsSection />
</RiseInOnView>

      {/* Contact (Homepage) */}
      <ContactSection id="home-contact" />
    </>
  );
}
