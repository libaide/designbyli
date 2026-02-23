"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import RiseInOnView from "@/components/RiseInOnView";

type ExpandedImage =
  | null
  | {
      src: string;
      alt: string;
    };

export default function SkinStudioCaseStudy() {
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
        logoSrc="/case-studies/skin-studio/skin-studio-logo.png"
        logoAlt="Skin Studio logo"
        logoSize="lg"
        logoClassName="h-32 sm:h-32 md:h-32"
        
        illustrationSrc="/case-studies/skin-studio/skin-studio-hero.png"
        illustrationAlt="Skin Studio UI preview"
        summary={
          <>
            <p>
              Marketing website and custom hosted payment page (HPP) integration built for Skin Studio, a skincare clinic in Honduras. The goal was to create a modern, digital presence that converts, clearly communicates services, builds trust, and streamlines online payments for treatments and packages.
            </p>
            
          </>
        }
        stats={[
          { label: "Project Type", value: "UX/UI Design & Web Development" },
          { label: "Role", value: "Designer and Developer" },
          { label: "Timeframe", value: "3.5 months" },
          { label: "Tools", value: "Figma, Squarespace, PowerTranz HPP, Python, CSS, Supabase, Render, Zoho Mail" },
          { label: "Scope", value: "Research, Web Design, Front-End Development, HPP Integration, Testing and Deployment" },
          { label: "Client", value: "Skin Studio" },
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
