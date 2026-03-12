"use client";

import { useRef } from "react";
import ContactSection from "@/components/ContactSection";
import RiseInOnView from "@/components/RiseInOnView";
import ImageTrail from "@/components/ImageTrail";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const aboutParagraphs = [
  {
    highlight: "With over 8 years in design",
    body: "I specialize in clear, functional, and thoughtfully crafted digital products. My career has focused on complex internal tools and SaaS platforms, where usability, consistency, and attention to detail are paramount. My approach is hands-on and system-driven, balancing visual design with user needs and business goals."
  },
  {
    highlight: "My design experience",
    body: "extends well beyond typical UX/UI. I’ve delivered branding, logo designs, complete websites, social media ads, print posters, video banners, and even marketing animations."
  },
  {
    highlight: "When I’m not designing",
    body: "you’ll usually find me spending quality time with my wife and daughter, maybe exploring the beautiful river lodges near El Cangrejal for a swim. I also dedicate time to my passion for music, playing and recording progressive metal guitar or producing electronic tracks."
  }
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  const trailImages = [
    "/Keys.png",
    "/Concert.jpg",
    "/Friends.jpg",
    "/Forest.png",
    "/Space.jpg",
    "/Guitar.png",
  ];

  useGSAP(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !intro || panels.length === 0) return;

    gsap.set(intro, { opacity: 1, y: 0 });
    gsap.set(panels, { opacity: 0, y: 24 });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (ctx) => {
        const { isMobile } = ctx.conditions as { isMobile: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: isMobile
              ? `+=${(aboutParagraphs.length + 1) * 420}`
              : `+=${(aboutParagraphs.length + 1) * 650}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          intro,
          {
            opacity: 0,
            y: -24,
            ease: "none",
            duration: 1,
          },
          0
        );

        panels.forEach((panel, index) => {
          const start = index + 0.8;

          tl.to(
            panel,
            {
              opacity: 1,
              y: 0,
              ease: "none",
              duration: 0.9,
            },
            start
          );

          tl.to(
            panel,
            {
              opacity: 0,
              y: -24,
              ease: "none",
              duration: 0.9,
            },
            start + 0.9
          );
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }
    );

    return () => mm.kill();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[100svh] overflow-hidden bg-black text-white"
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <ImageTrail items={trailImages} variant={1} />
        </div>

        <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 py-24 sm:px-10 sm:py-32">
          <div className="relative mx-auto flex min-h-[70svh] w-full max-w-5xl items-center justify-center">
            {/* INTRO */}
            <div
              ref={introRef}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <RiseInOnView staggerChildren={true} staggerMs={140}>
                <h1 className="mx-auto max-w-[1200px] text-center text-4xl leading-snug tracking-normal sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl">
                  I believe excellent design isn&apos;t just about aesthetics.
                </h1>

                <div className="mt-16 text-[16px] font-light text-white/30">
                  Scroll to learn more
                </div>
              </RiseInOnView>
            </div>

            {/* PARAGRAPH PANELS */}
            {aboutParagraphs.map((paragraph, index) => (
              <div
                key={index}
                ref={(el) => {
                  panelsRef.current[index] = el;
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="mx-auto max-w-4xl text-left">
                  <p className="text-lg leading-relaxed text-white/85 sm:text-xl md:text-3xl">

  <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium text-[1.8em]">
    {paragraph.highlight}
  </span>{" "}
  
  {paragraph.body}

</p>

                  {index === aboutParagraphs.length - 1 && (
                    <div className="mt-10 text-lg font-light tracking-wide text-white/70">
                      Exelí Baide · La Ceiba, Honduras
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection id="contact" />
    </>
  );
}