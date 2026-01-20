"use client";

import Link from "next/link";
import Container from "@/components/Container";
import HeroPixelBlastBg from "@/components/Hero/Visuals/HeroPixelBlastBg";
import FeaturedWorkAnimated from "@/components/FeaturedWorkAnimated";
import Recommendations from "@/components/Recommendations";
import Logo from "@/components/logo";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import FadeInOnView from "@/components/FadeInOnView";
//import Noise from "@/components/Noise";



export default function HomePage() {
  return (
    <>
      {/* Hero */}
<section
  id="hero"
  className="relative overflow-hidden min-h-svh"
>
  <HeroPixelBlastBg />

  {/* Content + arrow layout */}
  <div className="relative z-10 min-h-svh flex flex-col">
    {/* Centered content */}
    <div className="flex-1 flex items-center">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 pb-24 sm:pt-16">
          <h1 className="sr-only">Design by Li</h1>

          <div className="mb-2 scale-[0.82] sm:scale-100 origin-center">
            <Logo size={324} priority delayMs={100} />
          </div>

          <p className="animate-fade-up max-w-3xl text-xl leading-relaxed text-white sm:text-4xl tracking-tight">
            clear · functional · beautiful
          </p>
          <div className="animate-fade-up [animation-delay:340ms]">
          <Link href="/contact">
            <Button variant="cta">Get in touch</Button>
          </Link>
          </div>
        </div>
      </Container>
    </div>

    {/* Scroll down button */}
    <div className="hidden sm:flex justify-center pb-24">
  <button
    type="button"
    aria-label="Scroll to featured work"
    onClick={() => {
      document
        .getElementById("featured-work")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="group cursor-pointer"
  >
    <span className="relative grid h-12 w-12 place-items-center rounded-full border border-border bg-card/40 backdrop-blur-sm shadow-sm transition hover:bg-card/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-border">
      <span className="absolute inset-0 rounded-full animate-scrollPing group-hover:opacity-0" />

      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-foreground/80 animate-scrollBounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v12" />
        <path d="M7 12l5 5 5-5" />
      </svg>
    </span>
  </button>
</div>

  </div>
</section>



      {/* Featured work */}
<section id="featured-work">
  <FadeInOnView>
    <FeaturedWorkAnimated />
  </FadeInOnView>
</section>


      {/* Recommendations */}
      <FadeInOnView>
       <Recommendations />
      </FadeInOnView>


      {/* Contact (Homepage) */}
<section
  id="home-contact"
  className="relative overflow-hidden bg-white text-black"
>
  {/* Noise BG - must fill the SECTION */}
  {/* <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={35}
    className="absolute inset-0 z-0 opacity-70"
  /> */}

  <div className="relative z-10">
    <FadeInOnView>
      <Section
        title="Let’s work together"
        align="center"
      >
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </Section>
    </FadeInOnView>
  </div>
</section>




    </>
  );
}
