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

export default function ProperlyCaseStudy() {
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
        logoSrc="/case-studies/properly/properly-logo-new.png"
        logoAlt="Properly logo"
        logoSize="lg"
        logoClassName="h-16 sm:h-16 md:h-16"
        
        illustrationSrc="/case-studies/properly/properlyhero.png"
        illustrationAlt="Properly UI preview"
        summary={
          <>
            <p className="font-normal text-gray-500 leading-relaxed text-lg">
              Properly is a property management app that combines the budget managing capabilities of RenoWalk along with the task features of SiteCapture into a single app, offering comprehensive job management, inspections, and seamless data integration.
            </p>
          </>
        }
        stats={[
          { label: "Project Type", value: "SaaS Product" },
          { label: "Role", value: "UX/UI Designer" },
          { label: "Timeframe", value: "3 months" },
          { label: "Tools", value: "Figma, Material Design" },
          { label: "Scope", value: "Research, Wireframing, Prototyping, Visual Design" },
          { label: "Client", value: "DapperLogic" },
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
