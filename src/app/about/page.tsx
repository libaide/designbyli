"use client";

import { useRef } from "react";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import RiseInOnView from "@/components/RiseInOnView";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const hero = heroRef.current;
    const intro = introRef.current;
    const content = contentRef.current;

    if (!hero || !intro || !content) return;

    // Initial states
    gsap.set(content, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=1200", // total scroll length of pinned sequence
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Fade out intro
    tl.to(
      intro,
      {
        opacity: 0,
        y: -28,
        ease: "none",
      },
      0
    );

    // Fade in content
    tl.to(
      content,
      {
        opacity: 1,
        y: 0,
        ease: "none",
      },
      0.18
    );

    // HOLD — creates breathing space before unpin
    tl.to({}, { duration: 0.35 });

    return () => {
      try {
        tl.scrollTrigger?.kill();
      } catch (_) {}
      try {
        tl.kill();
      } catch (_) {}
    };
  }, []);

  return (
    <>
      {/* Pinned Hero Sequence */}
      <section ref={heroRef} className="relative min-h-[100svh] bg-black overflow-hidden">
        <div className="mx-auto px-6 sm:px-10 py-16 sm:py-24">
          {/* INTRO SECTION */}
          <div
            ref={introRef}
            className="flex flex-col items-center justify-center text-center min-h-[70svh]"
          >
            <RiseInOnView staggerChildren={true} staggerMs={140}>
              <h1 className="text-7xl md:text-[10rem] tracking-tight text-white">
                I&apos;m Li
              </h1>

              <p className="mt-6 max-w-3xl text-xl md:text-2xl font-light text-white">
                I believe that great design isn&apos;t just about aesthetics, it&apos;s about crafting intuitive
                experiences that empower users and solve real-world problems.
              </p>

              <div className="mt-10 text-sm text-white/60 font-light">
                Scroll to learn more
              </div>
            </RiseInOnView>
          </div>

          {/* CONTENT SECTION */}
          <div ref={contentRef} className="mx-auto max-w-[700px] pb-24">
            <RiseInOnView staggerChildren={true} staggerMs={90}>
              <div className="space-y-5 text-base leading-relaxed text-[#c9c9d3] font-light">
                <p>
                  My journey into UX/UI design began serendipitously as a lead web designer. Introduced to an
                  in-house QA tool, I quickly became fascinated by the scientific and psychological aspects
                  of UX/UI. This close collaboration with development teams and the continuous challenge of
                  transforming complex problems into clean, intuitive solutions solidified my passion.
                </p>

                <p>
                  My design experience extends well beyond typical UX/UI. I've delivered branding, logo designs, complete websites, social media ads, print posters, video banners, and even marketing animations. My capabilities also reach into audio design and production, thanks to formal training at a music production institute. This wide range of skills means I bring a truly integrated design approach to every project.
                </p>

                <p>
                  With over 8 years in design, I specialize in clear, functional, and thoughtfully crafted
                  digital products. My career has focused on complex internal tools and SaaS platforms, where
                  usability, consistency, and attention to detail are paramount. I&apos;m also excited to leverage
                  AI as a powerful tool to enhance creativity and improve design outcomes, always striving to
                  create more and create better.
                </p>

                <p>
                  My approach is hands-on and system-driven, balancing visual design with user needs and
                  business goals. Colleagues often describe me as highly creative, efficient, and effective,
                  constantly asking &apos;How can I be more creative?&apos; This stems from a deep curiosity across
                  science, art, history, music, philosophy, comedy, and psychology, allowing me to connect
                  disparate ideas and &apos;put stuff together&apos; uniquely. I prioritize delivering a client&apos;s
                  vision with sound design principles, excelling at guiding them to both what they want and
                  what they truly need.
                </p>

                <p>
                  When I’m not designing, you’ll usually find me spending quality time with my wife and
                  daughter, maybe exploring the beautiful river lodges near El Cangrejal for a swim. I also
                  dedicate time to my passion for music, playing and recording progressive metal guitar or
                  producing electronic tracks. I’m always looking for opportunities to build meaningful
                  connections and collaborate on impactful work.
                </p>

                {/* Signature */}
                <div className="pt-12">
                  <div className="flex items-center justify-end gap-6">
                    <div className="text-right">
                      <p className="text-lg font-medium text-gray-300">Exelí Baide</p>

                      <p className="mt-1 flex items-center justify-end gap-2 text-sm text-gray-300 font-light">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                          <path d="M12 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                        <span>La Ceiba, Honduras</span>
                      </p>
                    </div>

                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-sm">
                      <Image
                        src="/ProfilePic.png"
                        alt="Portrait of Exelí Baide"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RiseInOnView>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection id="about-contact" title="Let’s work together" />
    </>
  );
}