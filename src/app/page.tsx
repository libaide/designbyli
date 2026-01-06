"use client";

import Link from "next/link";
import Container from "@/components/Container";
import HeroPixelBlastBg from "@/components/Hero/Visuals/HeroPixelBlastBg";
import FeaturedWorkAnimated from "@/components/FeaturedWorkAnimated";
import Recommendations from "@/components/Recommendations";
import Logo from "@/components/logo";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        <HeroPixelBlastBg />

        {/* Content layer */}
        <div className="relative z-10 w-full">
          <Container>
            <div className="flex flex-col items-center text-center gap-6 pt-20 pb-12 sm:pt-24 sm:pb-24">
              {/* SEO / Accessibility */}
              <h1 className="sr-only">Design by Li</h1>

              {/* Logo */}
              <div className="mb-2">
                <Logo size={324} priority delayMs={100} />
              </div>

              {/* Tagline */}
              <p className="max-w-3xl text-xl leading-relaxed text-muted sm:text-4xl tracking-tight">
                clear · functional · beautiful
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-card px-6 py-3 text-sm font-medium border border-border hover:opacity-90 transition"
              >
                Contact
              </Link>
            </div>
          </Container>
        </div>

        {/* Scroll down button */}
        <button
          type="button"
          aria-label="Scroll to featured work"
          onClick={() => {
            document
              .getElementById("featured-work")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group absolute bottom-6 sm:bottom-24 left-1/2 -translate-x-1/2 z-20"
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
      </section>

      {/* Featured work */}
      <FeaturedWorkAnimated />

      {/* Recommendations */}
      <Recommendations />

      {/* Contact (Homepage) */}
      <section id="home-contact" className="py-20">
        <Section
          title="Let’s work together"
          subtitle="Have a project in mind or want to collaborate? Send me a message."
        >
          <Container>
            <ContactForm />
          </Container>
        </Section>
      </section>
    </>
  );
}
