"use client";

import Container from "@/components/Container";
import RiseInOnView from "@/components/RiseInOnView";
import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import SectionHeader from "@/components/case-study/SectionHeader";


type ExpandedImage = { src: string; alt: string } | null;

type JourneyCard = {
  title: string;
  src: string;
  alt: string;
};

type PreviewImage = {
  src: string;
  alt: string;
};

type DesktopPreview = {
  src: string;
  alt: string;
  maxWidthClass: string;
  aspectClass: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ZoomImageButton({
  src,
  alt,
  aspectClass,
  sizes,
  imgClassName,
  hint = true,
  onExpand,
  ringClassName = "ring-black/5 group-hover:ring-black/10",
}: {
  src: string;
  alt: string;
  aspectClass: string;
  sizes: string;
  imgClassName: string;
  hint?: boolean;
  onExpand: (img: { src: string; alt: string }) => void;
  ringClassName?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onExpand({ src, alt })}
      className={cx(
        "group relative w-full cursor-zoom-in focus:outline-none",
        aspectClass
      )}
      aria-label={`Expand image: ${alt}`}
    >
      <Image src={src} alt={alt} fill className={imgClassName} sizes={sizes} />

      <div
        className={cx(
          "pointer-events-none absolute inset-0 rounded-2xl ring-1",
          ringClassName
        )}
      />

      {hint ? (
        <div className="pointer-events-none absolute bottom-4 right-4 hidden rounded-full bg-black/60 px-3 py-1 text-xs text-white sm:block">
          Click to expand
        </div>
      ) : null}
    </button>
  );
}

export default function DomusCaseStudy() {
  const [expandedImage, setExpandedImage] = useState<ExpandedImage>(null);

  const openImage = useCallback((img: { src: string; alt: string }) => {
    setExpandedImage(img);
  }, []);

  const closeImage = useCallback(() => setExpandedImage(null), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeImage]);

  useEffect(() => {
    document.body.style.overflow = expandedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedImage]);

  const journeyCards = useMemo<JourneyCard[]>(
    () => [
      {
        title: "Client",
        src: "/case-studies/domus/user-journeys-client.png",
        alt: "User journey map for the Client role",
      },
      {
        title: "Technician",
        src: "/case-studies/domus/user-journeys-technician.png",
        alt: "User journey map for the Technician role",
      },
      {
        title: "Admin",
        src: "/case-studies/domus/user-journeys-admin.png",
        alt: "User journey map for the Admin role",
      },
    ],
    []
  );

  const mobilePreviews = useMemo<PreviewImage[]>(
    () => [
      { src: "/case-studies/domus/mobile-preview-1.png", alt: "Domus mobile UI preview 1" },
      { src: "/case-studies/domus/mobile-preview-2.png", alt: "Domus mobile UI preview 2" },
      { src: "/case-studies/domus/mobile-preview-3.png", alt: "Domus mobile UI preview 3" },
      { src: "/case-studies/domus/mobile-preview-4.png", alt: "Domus mobile UI preview 4" },
      { src: "/case-studies/domus/mobile-preview-5.png", alt: "Domus mobile UI preview 5" },
      { src: "/case-studies/domus/mobile-preview-6.png", alt: "Domus mobile UI preview 6" },
      { src: "/case-studies/domus/mobile-preview-7.png", alt: "Domus mobile UI preview 7" },
      { src: "/case-studies/domus/mobile-preview-8.png", alt: "Domus mobile UI preview 8" },
    ],
    []
  );

  const desktopPreviews = useMemo<DesktopPreview[]>(
    () => [
      {
        src: "/case-studies/domus/desktop-preview-1.png",
        alt: "Domus admin dashboard UI",
        maxWidthClass: "max-w-6xl",
        aspectClass: "aspect-[16/9]",
      },
      {
        src: "/case-studies/domus/desktop-preview-2.png",
        alt: "Technician verification and profile UI",
        maxWidthClass: "max-w-4xl",
        aspectClass: "aspect-[16/10]",
      },
    ],
    []
  );

  const coreObjectives = useMemo(
    () => [
      "Confirm user understanding of request and selection flow",
      "Evaluate technician willingness to use the platform",
      "Identify friction points in the experience for both roles",
      "Gather performance metrics to support the development of version 1.0",
    ],
    []
  );

  const successMetrics = useMemo(
    () => [
      "Number of real requests created",
      "Percentage of requests receiving at least one technician bid",
      "Average time from request creation to technician assignment",
      "Percentage of completed and paid services",
    ],
    []
  );

  const clientPersonaBullets = useMemo(
    () => [
      "Needs quick and trustworthy home service help",
      "Values transparency and clear expectations",
      "Expects a simple, fast booking experience",
    ],
    []
  );

  const technicianPersonaBullets = useMemo(
    () => [
      "Wants steady job opportunities and on-time payments",
      "Uses WhatsApp and Facebook regularly",
      "Needs straightforward job acceptance and payment flows",
    ],
    []
  );

  const wireframes = useMemo(
    () => [
      { src: "/case-studies/domus/wf-1.png", alt: "Wireframe 1", aspectClass: "aspect-[9/19]" },
      { src: "/case-studies/domus/wf-2.png", alt: "Wireframe 2", aspectClass: "aspect-[9/19]" },
      { src: "/case-studies/domus/wf-3.png", alt: "Wireframe 3", aspectClass: "aspect-[9/19]" },
      {
        src: "/case-studies/domus/wf-admin.png",
        alt: "Admin wireframe",
        aspectClass: "aspect-[16/10] lg:aspect-[16/9]",
      },
    ],
    []
  );

  return (
    <>
        <section className="bg-white pb-20">
          <CaseStudyTopSection
            logoSrc="/case-studies/domus/domus-logo.png"
            logoAlt="Domus logo"
            logoSize="lg"
            illustrationSrc="/case-studies/domus/hero-image.png"
            illustrationAlt="Domus UI preview"
            summary={
              <div className="space-y-4">
                <p className="text-[#1B2166]/70">
                  A Honduran home-services marketplace concept designed to help clients find verified
                  technicians, request services, and manage scheduling and payments—while giving
                  technicians a reliable pipeline of work.
                </p>
                <p className="text-[#1B2166]/70">
                  I led UX and UI design for the MVP across client, technician, and admin experiences,
                  focusing on trust, clarity, and a scalable Material Design 3 foundation.
                </p>
              </div>
            }
            stats={[
              { label: "Project Type", value: "Mobile App MVP" },
              { label: "Role", value: "UX/UI Designer" },
              { label: "Timeline", value: "Sept. 2025 — Nov. 2025" },
              { label: "Tools", value: "Figma, Material Design 3" },
              {
                label: "Scope",
                value: "UX Research, Wireframing, Prototyping, Visual Design",
              },
              { label: "Client", value: "Domus" },
            ]}
          />
        </section>

      {/* Problem & Context */}
      <section className="relative overflow-hidden bg-[#f6f7ff]">
        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 lg:py-20">
          {/* Animate the card in */}
          <RiseInOnView>
            <div className="relative z-10 max-w-xl lg:max-w-[560px] lg:rounded-3xl lg:bg-[#FFD000] lg:p-10 lg:shadow-sm">
              {/* Stagger the *contents* (direct children of RiseInOnView) */}
              <RiseInOnView
                staggerChildren
                staggerMs={90}
                className="space-y-0"
                y={14}
                duration={850}
              >
                <h2 className="text-4xl font-semibold tracking-tight text-[#1B2166]">
                  The Problem
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#1B2166]/70">
                  In Honduras, it can be tough to find reliable and trustworthy home service providers.
                  Most people rely on informal recommendations or social media groups, which can lead
                  to trust issues, miscommunication, and unreliable scheduling.
                </p>

                <p className="mt-8 text-base font-semibold text-[#1B2166]">
                  Challenges Identified:
                </p>

                <ul className="mt-4 ml-5 list-disc space-y-2 text-base leading-relaxed text-[#1B2166]/70">
                  <li>Lack of verified professionals and standardized pricing.</li>
                  <li>No structured system for tracking jobs or payments.</li>
                  <li>Missed opportunities for technicians to find consistent work.</li>
                </ul>

                <p className="mt-8 text-base font-semibold text-[#1B2166]">Opportunity:</p>

                <p className="mt-3 text-base leading-relaxed text-[#1B2166]/70">
                  Build a mobile marketplace that connects verified technicians with clients through a
                  transparent and easy-to-use system.
                </p>
              </RiseInOnView>
            </div>
          </RiseInOnView>

          {/* Mobile image */}
          <RiseInOnView delay={120}>
            <div className="relative mt-12 h-[460px] w-full sm:h-[520px] lg:hidden">
              <Image
                src="/case-studies/domus/problem-and-context.png"
                alt="Problem and context visual"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </RiseInOnView>

          {/* Desktop image */}
          <div className="pointer-events-none absolute bottom-[-40px] right-[-80px] z-0 hidden lg:block">
            <RiseInOnView delay={140}>
              <div className="relative h-[860px] w-[860px] xl:h-[980px] xl:w-[980px]">
                <Image
                  src="/case-studies/domus/problem-and-context.png"
                  alt="Problem and context visual"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(min-width: 1280px) 980px, 860px"
                />
              </div>
            </RiseInOnView>
          </div>
        </div>
      </section>

      {/* Business Objectives & MVP Goals */}
      <section className="bg-white py-20">
        <Container>
          <RiseInOnView staggerChildren staggerMs={90} y={14} duration={850}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-[#1B2166]">
                Business Objectives & MVP Goals
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#1B2166]/70">
                The MVP aimed to validate the business hypothesis that there is real demand for
                verified home services in Honduras under a <span className="italic">“pull model”</span>,
                where clients post requests and technicians apply to them.
              </p>
            </div>
          </RiseInOnView>

          <RiseInOnView
  staggerChildren
  staggerMs={110}
  y={16}
  duration={900}
  className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12 items-stretch"
>
            <div className="h-full rounded-3xl bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:p-12 flex flex-col">

              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1B2166]/5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[#1B2166]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M4 4h10v16H4z" />
                    <path d="M14 7h6v13h-6z" />
                    <path d="M7 8h4" />
                    <path d="M7 12h4" />
                    <path d="M7 16h4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold tracking-tight text-[#1B2166]">
                  Core MVP Objectives
                </h4>
              </div>

              <ul className="mt-10 space-y-10">
                {coreObjectives.map((item) => (
                  <li key={item} className="flex gap-6">
                    <span className="mt-1.5 h-4 w-4 rounded-full border-[4px] border-[#F5A623]" />
                    <p className="text-base leading-relaxed text-[#1B2166]/70">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-full rounded-3xl bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:p-12 flex flex-col">

              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1B2166]/5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[#1B2166]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M4 19V5" />
                    <path d="M4 19h16" />
                    <path d="M7 15l3-3 3 2 5-6" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold tracking-tight text-[#1B2166]">
                  Success Metrics
                </h4>
              </div>

              <ul className="mt-10 space-y-10">
                {successMetrics.map((item) => (
                  <li key={item} className="flex gap-6">
                    <span className="mt-1.5 h-4 w-4 rounded-full border-[4px] border-[#F5A623]" />
                    <p className="text-base leading-relaxed text-[#1B2166]/70">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </RiseInOnView>
        </Container>
      </section>

      {/* Personas */}
      <section className="relative overflow-hidden sm:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B1E4B] via-[#15173A] to-[#0A0B1F]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
        </div>

        <Container>
          <div className="relative z-10">
            <RiseInOnView>
              <SectionHeader
                title="Personas"
                dark
                description="The design was guided by two primary personas representing the core users: clients and technicians."
              />
            </RiseInOnView>

            {/* Stagger the two persona columns */}
            <RiseInOnView
              staggerChildren
              staggerMs={120}
              y={16}
              duration={900}
              className="mt-20 grid gap-16 lg:grid-cols-2"
            >
              <div className="grid gap-8">
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/case-studies/domus/persona-client.jpg"
                      alt="Client persona"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-white">Karen López</h4>
                  <p className="mt-1 text-sm text-white/70">Female · 32 years old · Client</p>

                  <ul className="mt-6 space-y-4 text-base">
                    {clientPersonaBullets.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#F5A623]" />
                        <p className="text-white/80">{t}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-8">
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/case-studies/domus/persona-technician.jpg"
                      alt="Technician persona"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-white">Jorge Ortega</h4>
                  <p className="mt-1 text-sm text-white/70">Male · 40 years old · Technician</p>

                  <ul className="mt-6 space-y-4 text-base">
                    {technicianPersonaBullets.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#F5A623]" />
                        <p className="text-white/80">{t}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* Competitive Research */}
      <section
        className="relative overflow-hidden bg-[#F6F7FF] py-20"
        style={{
          backgroundImage: "url('/case-studies/domus/pattern-tile.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      >
        <Container>
          <div className="flex justify-center">
            <RiseInOnView>
              <div className="w-full max-w-4xl rounded-[32px] bg-[#F6F7FF] px-10 py-12 text-center sm:px-14 sm:py-16">
                <RiseInOnView staggerChildren staggerMs={90} y={14} duration={850}>
                  <h2 className="text-4xl font-semibold tracking-tight text-[#1B2166]">
                    Competitive Research
                  </h2>

                  <div className="mt-8 space-y-6 text-base leading-relaxed text-[#1B2166]/70 text-left">
                    <p>
                      I conducted a competitive analysis of existing home service platforms in
                      Honduras and abroad to identify differentiation opportunities. I discovered that
                      local competitors lacked verification systems and had poor UX design.
                    </p>
                    <p>
                      While researching global references like TaskRabbit and Handy, I found that they
                      provided useful models for technician verification workflows, geolocation and
                      filtering logic, and MVP monetization strategies.
                    </p>
                    <p>
                      This research helped position Domus as a trust-based local alternative,
                      balancing simplicity with credibility.
                    </p>
                  </div>
                </RiseInOnView>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* User Journeys */}
      <section className="relative overflow-hidden py-20 sm:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#F6F7FF]" />
          <div className="absolute left-1/2 top-[-220px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[#D9DBFF]/35 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F7FF] via-[#F6F7FF] to-white" />
        </div>

        <Container>
          <div className="relative">
            <RiseInOnView>
              <SectionHeader
                title="User Journeys"
                description="Once the MVP objectives were defined and the research had been done, I mapped the user journeys for the three main roles: Client, Technician, and Admin. These journeys helped identify critical moments that would shape the MVP."
              />
            </RiseInOnView>

            {/* Stagger the journey cards */}
            <RiseInOnView
              staggerChildren
              staggerMs={110}
              y={16}
              duration={900}
              className="relative mt-14 space-y-10"
            >
              {journeyCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
                >
                  <div className="px-8 pt-7">
                    <h4 className="text-base font-semibold text-[#1B2166]">{item.title}</h4>
                  </div>

                  <div className="px-6 pb-7 pt-4 sm:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-white">
                      <ZoomImageButton
                        src={item.src}
                        alt={item.alt}
                        aspectClass="aspect-[16/5]"
                        sizes="(min-width: 1024px) 960px, 100vw"
                        imgClassName="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        onExpand={openImage}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* User Flows */}
      <section className="relative overflow-hidden py-20 sm:py-20 bg-white">

        <Container>
          <div className="relative">
            <RiseInOnView>
              <SectionHeader
                title="User Flows"
                description="I proceeded to map the core user flows for the three main roles. This helped clarify how each interaction connected to business logic, from posting a service to payment confirmation."
              />
            </RiseInOnView>

            <RiseInOnView delay={80}>
              <div className="relative mt-14">
                <div className="rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                  <div className="px-6 pb-7 pt-6 sm:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-white">
                      <ZoomImageButton
                        src="/case-studies/domus/user-flows.png"
                        alt="User flows diagram for Client, Technician, and Admin"
                        aspectClass="aspect-[16/10] sm:aspect-[16/9]"
                        sizes="(min-width: 1024px) 900px, 100vw"
                        imgClassName="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        onExpand={openImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* Wireframes */}
      <section className="relative overflow-hidden py-20 sm:py-20 bg-white">
        <Container>
          <div className="relative">
            <RiseInOnView>
              <SectionHeader
                title="Wireframes"
                description="After finalizing the flow diagrams and defining the MVP scope and core features, I transitioned into low-fidelity wireframes. I collaborated closely with Ricardo and Samuel to ensure all critical MVP functionalities were represented and the UX remained simple and intuitive."
              />
            </RiseInOnView>

            <RiseInOnView delay={80}>
              <div className="relative mt-14">
                <div className="mx-auto max-w-6xl rounded-3xl border border-black/5 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                  <div className="p-6 sm:p-8">
                    <RiseInOnView staggerChildren staggerMs={90} y={12} duration={850}>
                      <p className="text-sm text-[#1B2166]/55">(Preview)</p>

                      {/* Stagger the grid items (buttons) */}
                      <RiseInOnView
                        staggerChildren
                        staggerMs={90}
                        y={14}
                        duration={900}
                        className="mt-6 grid gap-6 lg:grid-cols-4"
                      >
                        {wireframes.map((w) => (
                          <button
                            key={w.src}
                            type="button"
                            onClick={() => openImage({ src: w.src, alt: w.alt })}
                            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm focus:outline-none"
                            aria-label={`Expand image: ${w.alt}`}
                          >
                            <div className={cx("relative", w.aspectClass)}>
                              <Image
                                src={w.src}
                                alt={w.alt}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                sizes="(min-width: 1024px) 260px, 100vw"
                              />
                            </div>
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 group-hover:ring-black/10" />
                          </button>
                        ))}
                      </RiseInOnView>

                      <p className="mt-6 hidden text-center text-xs text-[#1B2166]/50 sm:block">
                        Click any wireframe to expand.
                      </p>
                    </RiseInOnView>
                  </div>
                </div>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* Design System */}
      <section className="relative overflow-hidden py-20 sm:py-20 bg-[#f6f7ff]">

        <Container>
          <div className="relative">
            <RiseInOnView staggerChildren staggerMs={90} y={14} duration={850}>
              <SectionHeader
                title="Design System"
                description="Once the UX structure and wireframes were validated, I established the visual identity and design system for Domus. The goal was to build a cohesive, scalable, and developer-friendly UI foundation that could evolve as the product matured."
              />

              <div className="mx-auto mt-4 max-w-3xl text-center">
                <p className="text-sm leading-relaxed text-[#1B2166]/70">
                  Using the Material Theme
                  Builder, I generated an accessible, Domus-branded design system and created a local
                  component library and style tokens tailored to the project’s needs.
                </p>
              </div>
            </RiseInOnView>

            <RiseInOnView delay={90}>
              <div className="relative mt-14">
                <div className="mx-auto max-w-5xl rounded-3xl border border-black/5 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                  <div className="p-4 sm:p-6">
                    <div className="relative overflow-hidden rounded-2xl bg-white">
                      <ZoomImageButton
                        src="/case-studies/domus/design-system.png"
                        alt="Domus design system artifacts: color, typography, icons, and components"
                        aspectClass="aspect-[16/13] sm:aspect-[16/12]"
                        sizes="(min-width: 1024px) 900px, 100vw"
                        imgClassName="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        onExpand={openImage}
                        hint={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* UI Previews */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-indigo-950 to-black" />

        <div className="relative z-10">
          <Container>
            <RiseInOnView staggerChildren staggerMs={90} y={14} duration={850}>
              <SectionHeader
                title="UI Previews"
                dark
                description="The MVP design defined a clear, testable foundation for product validation."
              />
            </RiseInOnView>

            {/* Stagger mobile previews */}
            <RiseInOnView
              staggerChildren
              staggerMs={70}
              y={14}
              duration={900}
              className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {mobilePreviews.map(({ src, alt }) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-3xl bg-black/30 shadow-xl ring-1 ring-white/10"
                >
                  <button
                    type="button"
                    onClick={() => openImage({ src, alt })}
                    className="group relative w-full cursor-zoom-in overflow-hidden rounded-3xl focus:outline-none"
                    aria-label={`Expand image: ${alt}`}
                  >
                    <div className="relative aspect-[9/19]">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 20vw, 50vw"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/20" />
                  </button>
                </div>
              ))}
            </RiseInOnView>

            {/* Stagger desktop previews */}
            <RiseInOnView
              staggerChildren
              staggerMs={120}
              y={16}
              duration={950}
              className="relative mt-20 space-y-10"
            >
              {desktopPreviews.map((d) => (
                <div
                  key={d.src}
                  className={cx(
                    "mx-auto rounded-3xl bg-black/30 p-4 shadow-xl ring-1 ring-white/10",
                    d.maxWidthClass
                  )}
                >
                  <button
                    type="button"
                    onClick={() => openImage({ src: d.src, alt: d.alt })}
                    className="group relative w-full cursor-zoom-in overflow-hidden rounded-2xl focus:outline-none"
                    aria-label={`Expand image: ${d.alt}`}
                  >
                    <div className={cx("relative", d.aspectClass)}>
                      <Image
                        src={d.src}
                        alt={d.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                        sizes="(min-width: 1024px) 80vw, 100vw"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 group-hover:ring-white/20" />
                  </button>
                </div>
              ))}
            </RiseInOnView>
          </Container>
        </div>
      </section>

      {/* Reflection */}
      <section
        className="relative overflow-hidden bg-[#F6F7FF] py-20"
        style={{
          backgroundImage: "url('/case-studies/domus/pattern-tile.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
        }}
      >
        <Container>
          <div className="flex justify-center">
            <RiseInOnView>
              <div className="w-full max-w-3xl rounded-[32px] bg-[#F6F7FF] px-10 py-12 text-center sm:px-14 sm:py-16">
                <RiseInOnView staggerChildren staggerMs={90} y={14} duration={850}>
                  <h2 className="text-4xl font-semibold tracking-tight text-[#1B2166]">
                    Reflection
                  </h2>

                  <div className="mt-8 space-y-6 text-base leading-relaxed text-[#1B2166]/70 text-left">
                    <p>
                      Domus provided me with the opportunity to combine UX strategy and product design
                      execution, transforming a simple idea into a validated MVP.
                    </p>

                    <p className="space-y-6 text-base leading-relaxed text-[#1B2166]/70 text-left">
                      This project strengthened my ability to design trust-based ecosystems and create
                      scalable product foundations for emerging markets.
                    </p>
                  </div>
                </RiseInOnView>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {expandedImage ? (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image preview"
          onClick={closeImage}
        >
          <div className="flex h-full w-full items-center justify-center overflow-y-auto p-4 sm:p-6">
            <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={closeImage}
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
      ) : null}
    </>
  );
}
