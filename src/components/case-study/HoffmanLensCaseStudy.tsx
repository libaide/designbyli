"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import RiseInOnView from "@/components/RiseInOnView";

// ✅ Use your renamed/moved header component from the case-study folder.
// If your file name is different, only change this import path/name.
import SectionHeader from "@/components/case-study/SectionHeader";

type ExpandedImage =
  | null
  | {
      src: string;
      alt: string;
    };

export default function HoffmanLenseCaseStudy() {
  const [expandedImage, setExpandedImage] = useState<ExpandedImage>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expandedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedImage]);

  return (
    <>
      {/* Split Hero */}
      <CaseStudyTopSection
        className="bg-white pb-20"
        logoSrc="/case-studies/hoffman-lens/hoffman-lens-logo.png"
        logoAlt="Hoffman Lens logo"
        logoSize="lg"
        logoClassName="h-24 sm:h-24 md:h-24"
        
        illustrationSrc="/case-studies/hoffman-lens/hero.png"
        illustrationAlt="Hoffman Lens UI preview"
        summary={
          <>
            <p className="font-normal text-gray-500 leading-relaxed text-lg">
              An AI-powered Chrome extension that acts as a real-time "truth filter" for the web, inspired by the cult classic film They Live. Designed to combat the saturation of corporate marketing fluff, the tool utilizes the OpenAI API to scan DOM elements, including headlines, buttons, and infinite-scroll social feeds, and rewrite them into their stark, cynical intent.
            </p>
            <p className="font-normal text-gray-500 leading-relaxed text-lg">
              Featuring a brutalist, industrial UI and complex MutationObserver logic to handle dynamic single-page applications like LinkedIn and Twitter, the project blends technical implementation with critical commentary on digital capitalism and user manipulation.
            </p>
          </>
        }
        stats={[
          { label: "Project Type", value: "AI-Powered Chrome Extension" },
          { label: "Role", value: "Designer & Developer" },
          { label: "Timeframe", value: "1 day" },
          { label: "Tools", value: "Figma, JavaScript, OpenAI API, GitHub" },
          { label: "Scope", value: "Research, Coding, Visual Design" },
          { label: "Company", value: "N/A – Conceptual" },
        ]}
      />

      {/* Coming Soon */}
            <section className="bg-white pb-24">
              <Container>
                <RiseInOnView>
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-black">
                      Case study coming soon!
                    </h2>
                  </div>
                </RiseInOnView>
              </Container>
            </section>

      {/* Lightbox */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image preview"
          onClick={() => setExpandedImage(null)}
        >
          <div className="flex h-full w-full items-center justify-center overflow-y-auto p-4 sm:p-6">
            <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setExpandedImage(null)}
                className="absolute -right-3 -top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-black shadow-lg ring-1 ring-black/10"
                aria-label="Close expanded preview"
              >
                ✕
              </button>

              <div className="relative w-full max-h-[85vh] overflow-hidden rounded-2xl bg-white">
                <img
                  src={expandedImage.src}
                  alt={expandedImage.alt}
                  className="block h-auto w-full max-h-[85vh] object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
