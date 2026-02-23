"use client";

import Container from "@/components/Container";
import RiseInOnView from "@/components/RiseInOnView";
import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import SectionHeader from "@/components/case-study/SectionHeader";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Lightbox } from "@/components/Lightbox";

type ExpandedImage = { src: string; alt: string } | null;

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

type Wireframe = {
  src: string;
  alt: string;
  aspectClass: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const JOURNEY_CARDS = [
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
] as const;

const MOBILE_PREVIEWS: PreviewImage[] = [
  { src: "/case-studies/domus/mobile-preview-1.png", alt: "Domus mobile UI preview 1" },
  { src: "/case-studies/domus/mobile-preview-2.png", alt: "Domus mobile UI preview 2" },
  { src: "/case-studies/domus/mobile-preview-3.png", alt: "Domus mobile UI preview 3" },
  { src: "/case-studies/domus/mobile-preview-4.png", alt: "Domus mobile UI preview 4" },
  { src: "/case-studies/domus/mobile-preview-5.png", alt: "Domus mobile UI preview 5" },
  { src: "/case-studies/domus/mobile-preview-6.png", alt: "Domus mobile UI preview 6" },
  { src: "/case-studies/domus/mobile-preview-7.png", alt: "Domus mobile UI preview 7" },
  { src: "/case-studies/domus/mobile-preview-8.png", alt: "Domus mobile UI preview 8" },
];

const DESKTOP_PREVIEWS: DesktopPreview[] = [
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
];

const CORE_OBJECTIVES = [
  "Confirm user understanding of request and selection flow",
  "Evaluate technician willingness to use the platform",
  "Identify friction points in the experience for both roles",
  "Gather performance metrics to support the development of version 1.0",
];

const SUCCESS_METRICS = [
  "Number of real requests created",
  "Percentage of requests receiving at least one technician bid",
  "Average time from request creation to technician assignment",
  "Percentage of completed and paid services",
];

const CLIENT_PERSONA_BULLETS = [
  "Needs quick and trustworthy home service help",
  "Values transparency and clear expectations",
  "Expects a simple, fast booking experience",
];

const TECHNICIAN_PERSONA_BULLETS = [
  "Wants steady job opportunities and on-time payments",
  "Uses WhatsApp and Facebook regularly",
  "Needs straightforward job acceptance and payment flows",
];

const WIREFRAMES: Wireframe[] = [
  { src: "/case-studies/domus/wf-1.png", alt: "Wireframe 1", aspectClass: "aspect-[9/19]" },
  { src: "/case-studies/domus/wf-2.png", alt: "Wireframe 2", aspectClass: "aspect-[9/19]" },
  { src: "/case-studies/domus/wf-3.png", alt: "Wireframe 3", aspectClass: "aspect-[9/19]" },
  {
    src: "/case-studies/domus/wf-admin.png",
    alt: "Admin wireframe",
    aspectClass: "aspect-[16/10] lg:aspect-[16/9]",
  },
];

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
      className={cx("group relative w-full cursor-zoom-in focus:outline-none", aspectClass)}
      aria-label={`Expand image: ${alt}`}
    >
      <Image src={src} alt={alt} fill className={imgClassName} sizes={sizes} />
      <div className={cx("pointer-events-none absolute inset-0 rounded-2xl ring-1", ringClassName)} />
      {hint ? (
        <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          <span className="sm:hidden">Tap to expand</span>
          <span className="hidden sm:inline">Click to expand</span>
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

  return (
    <>
      {/* Top */}
      <section className="bg-white pb-20">
        <RiseInOnView>
          <CaseStudyTopSection
            logoSrc="/case-studies/domus/domus-logo.png"
            logoAlt="Domus logo"
            logoSize="lg"
            logoClassName="h-32 sm:h-32"
            illustrationSrc="/case-studies/domus/hero-image.png"
            illustrationAlt="Domus UI preview"
            summary={
              <div className="space-y-4">
                <p className="text-[#1B2166]/70 text-base leading-relaxed font-normal">
                  A new home-services marketplace concept for Honduras, developed to empower clients to
                  easily find verified technicians, request services, and manage scheduling and payments.
                  It also provides technicians with a consistent and reliable source of work.
                </p>
                <p className="text-[#1B2166]/70 text-base leading-relaxed font-normal">
                  My role involved leading the UX and UI design for the MVP, focusing on building intuitive experiences across client, technician, and admin interfaces.
                </p>
              </div>
            }
            stats={[
              { label: "Project Type", value: "Mobile App MVP" },
              { label: "Role", value: "UX/UI Designer" },
              { label: "Timeline", value: "Sept. 2025 — Nov. 2025" },
              { label: "Tools", value: "Figma, Material Design 3" },
              { label: "Scope", value: "UX Research, Wireframing, Prototyping, Visual Design" },
              { label: "Client", value: "Domus" },
            ]}
          />
        </RiseInOnView>
      </section>

      {/* Problem & Context */}
      <section className="relative overflow-hidden bg-[#f6f7ff]">
        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 lg:py-20">
          <RiseInOnView className="relative z-20">
            <div className="max-w-xl lg:max-w-[560px] lg:rounded-3xl lg:bg-[#FFD000] lg:p-10 lg:shadow-sm">
              <RiseInOnView staggerChildren staggerMs={90} className="space-y-0" y={14} duration={850}>
                <SectionHeader
                  title="The Problem"
                  wrapperClassName="max-w-none text-left"
                  titleClassName="text-[#1B2166] text-4xl"
                />

                <p className="mt-6 text-base leading-relaxed text-[#1B2166]/70 font-normal">
                  In Honduras, it can be tough to find reliable and trustworthy home service providers.
                  Most people rely on informal recommendations or social media groups, which can lead to
                  trust issues, miscommunication, and unreliable scheduling.
                </p>

                <p className="mt-8 text-base font-semibold text-[#1B2166]">Challenges Identified:</p>

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

          <RiseInOnView delayMs={120}>
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

          <div className="pointer-events-none absolute bottom-[-40px] right-[-80px] hidden lg:block">
            <RiseInOnView delayMs={140} className="relative z-0">
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
            <SectionHeader
              title="Business Objectives & MVP Goals"
              description='The MVP aimed to validate the business hypothesis that there is real demand for verified home services in Honduras under a “pull model”, where clients post requests and technicians apply to them.'
              titleClassName="text-[#1B2166] text-4xl"
            />
          </RiseInOnView>

          <RiseInOnView
            staggerChildren
            staggerMs={110}
            y={16}
            duration={900}
            className="mt-16 grid gap-10 items-stretch lg:grid-cols-2 lg:gap-12"
          >
            <div className="flex h-full flex-col rounded-3xl bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:p-12">
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
                {CORE_OBJECTIVES.map((item, idx) => (
                  <RiseInOnView key={item} delayMs={80 + idx * 70}>
                    <li className="flex gap-6 items-start">
                      <span className="block mt-1.5 h-4 w-4 rounded-full border-[2px] flex-none border-[#F5A623]" />
                      <p className="text-base leading-relaxed text-[#1B2166]/70">{item}</p>
                    </li>
                  </RiseInOnView>
                ))}
              </ul>
            </div>

            <div className="flex h-full flex-col rounded-3xl bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:p-12">
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
                {SUCCESS_METRICS.map((item, idx) => (
                  <RiseInOnView key={item} delayMs={80 + idx * 70}>
                    <li className="flex gap-6 items-start">
                      <span className="block mt-1.5 h-4 w-4 rounded-full border-[2px] flex-none border-[#F5A623]" />
                      <p className="text-base leading-relaxed text-[#1B2166]/70">{item}</p>
                    </li>
                  </RiseInOnView>
                ))}
              </ul>
            </div>
          </RiseInOnView>
        </Container>
      </section>

      {/* Personas */}
      <section className="relative overflow-hidden py-20 sm:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B1E4B] via-[#15173A] to-[#0A0B1F]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
        </div>

        <Container>
          <div className="relative z-10">
            <RiseInOnView>
              <SectionHeader title="Personas" dark />
            </RiseInOnView>

            <div className="mt-20 grid gap-16 lg:grid-cols-2">
              <RiseInOnView>
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
                      {CLIENT_PERSONA_BULLETS.map((t, idx) => (
                        <RiseInOnView key={t} delayMs={60 + idx * 70}>
                          <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[#F5A623]" />
                            <p className="text-white/80">{t}</p>
                          </li>
                        </RiseInOnView>
                      ))}
                    </ul>
                  </div>
                </div>
              </RiseInOnView>

              <RiseInOnView>
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
                      {TECHNICIAN_PERSONA_BULLETS.map((t, idx) => (
                        <RiseInOnView key={t} delayMs={60 + idx * 70}>
                          <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[#F5A623]" />
                            <p className="text-white/80">{t}</p>
                          </li>
                        </RiseInOnView>
                      ))}
                    </ul>
                  </div>
                </div>
              </RiseInOnView>
            </div>
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
                  <SectionHeader
                    title="Competitive Research"
                    wrapperClassName="max-w-none text-left"
                    titleClassName="text-[#1B2166] text-4xl"
                    descriptionClassName="text-left"
                  />

                  <div className="mt-8 space-y-6 text-base leading-relaxed text-[#1B2166]/70 text-left">
                    <p>
                      I conducted a competitive analysis of existing home service platforms in Honduras
                      and abroad to identify differentiation opportunities. I discovered that local
                      competitors lacked verification systems and had poor UX design.
                    </p>
                    <p>
                      While researching global references like TaskRabbit and Handy, I found that they
                      provided useful models for technician verification workflows, geolocation and
                      filtering logic, and MVP monetization strategies.
                    </p>
                    <p>
                      This research helped position Domus as a trust-based local alternative, balancing
                      simplicity with credibility.
                    </p>
                  </div>
                </RiseInOnView>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* User Flows & Journeys */}
      <section
        className="relative py-20 sm:py-20 flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/case-studies/domus/UserJourneys.png')" }}
      >
        <Container className="relative z-10">
          <div className="relative z-20 max-w-xl lg:max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/90 shadow-lg text-center">
            <RiseInOnView>
              <SectionHeader
                title="User Flows & Journeys"
                description="I began by mapping the core user flows for the three main roles, clarifying how each interaction connected to business logic, from posting a service to payment confirmation. Following this, I mapped the broader user journeys, identifying critical moments that would shape the MVP."
                descriptionClassName="text-[#1B2166]/70"
                titleClassName="text-[#1B2166] text-4xl"
              />
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* Wireframes */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-20">
        <Container>
          <div className="relative">
            <RiseInOnView>
              <SectionHeader
                title="Wireframes"
                description="After finalizing the flow diagrams and defining the MVP scope and core features, I transitioned into low-fidelity wireframes. I collaborated closely with the client to ensure all critical MVP functionalities were represented and the UX remained simple and intuitive."
                descriptionClassName="text-[#1B2166]/70"
                titleClassName="text-[#1B2166] text-4xl"
              />
            </RiseInOnView>

            <RiseInOnView delayMs={80}>
              <div className="relative mt-14">
                <div className="mx-auto max-w-6xl rounded-3xl bg-white">
                  <div className="p-6 sm:p-8">
                    <RiseInOnView staggerChildren staggerMs={90} y={12} duration={850}>
                      <p className="text-sm text-[#1B2166]/55">(Preview)</p>

                      <div className="mt-6 space-y-6">
                        <div className="grid gap-6 lg:grid-cols-3">
                          {WIREFRAMES.slice(0, 3).map((w, idx) => (
                            <RiseInOnView key={w.src} delayMs={80 + idx * 90}>
                              <div className="relative overflow-hidden rounded-2xl bg-white">
                                <div className={cx("relative h-full", w.aspectClass)}>
                                  <Image
                                    src={w.src}
                                    alt={w.alt}
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 1024px) 320px, 100vw"
                                  />
                                </div>
                              </div>
                            </RiseInOnView>
                          ))}
                        </div>

                        {WIREFRAMES[3] ? (
                          <RiseInOnView delayMs={80 + 3 * 90}>
                            <div className="relative overflow-hidden rounded-2xl bg-white">
                              <div className={cx("relative h-full", WIREFRAMES[3].aspectClass)}>
                                <Image
                                  src={WIREFRAMES[3].src}
                                  alt={WIREFRAMES[3].alt}
                                  fill
                                  className="object-contain"
                                  sizes="(min-width: 1024px) 1024px, 100vw"
                                />
                              </div>
                            </div>
                          </RiseInOnView>
                        ) : null}
                      </div>
                    </RiseInOnView>
                  </div>
                </div>
              </div>
            </RiseInOnView>
          </div>
        </Container>
      </section>

      {/* Design System */}
      <section className="relative overflow-hidden bg-[#f6f7ff] py-20 sm:py-20">
        <Container>
          <div className="relative">
            <RiseInOnView>
              <SectionHeader
                title="Design System"
                description="Using the Material Theme Builder, I generated an accessible, Domus-branded design system and created a local component library and style tokens tailored to the project’s needs."
                descriptionClassName="text-[#1B2166]/70"
                titleClassName="text-[#1b2166] text-4xl"
              />
            </RiseInOnView>

            <RiseInOnView delayMs={90}>
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
            <RiseInOnView>
              <SectionHeader
                title="UI Previews"
                dark
                description="The MVP design defined a clear, testable foundation for product validation."
              />
            </RiseInOnView>

            {/* Mobile previews — per-card RiseInOnView */}
            <div className="relative mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {MOBILE_PREVIEWS.map(({ src, alt }, idx) => (
                <RiseInOnView key={src} delayMs={80 + idx * 80}>
                  <div className="relative overflow-hidden rounded-3xl bg-black/30 shadow-xl ring-1 ring-white/10">
                    <ZoomImageButton
                      src={src}
                      alt={alt}
                      aspectClass="aspect-[9/19] h-full"
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      imgClassName="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      onExpand={openImage}
                      ringClassName="ring-white/10 group-hover:ring-white/20"
                      hint={true}
                    />
                  </div>
                </RiseInOnView>
              ))}
            </div>

            {/* Desktop previews — per-block RiseInOnView */}
            <div className="relative mt-20 space-y-10">
              {DESKTOP_PREVIEWS.map((d, idx) => (
                <RiseInOnView key={d.src} delayMs={120 + idx * 120} y={16} duration={950}>
                  <div
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
                </RiseInOnView>
              ))}
            </div>
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
                  <SectionHeader
                    title="Reflection"
                    wrapperClassName="max-w-none text-center"
                    titleClassName="text-[#1B2166] text-4xl"
                    descriptionClassName="text-[#1B2166]/70 text-4xl"
                  />

                  <div className="mt-8 space-y-6 text-base leading-relaxed text-[#1B2166]/70 text-left">
                    <p>
                      Domus provided me with the opportunity to combine UX strategy and product design
                      execution, transforming a simple idea into a validated MVP.
                    </p>

                    <p className="text-base leading-relaxed text-[#1B2166]/70">
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

      <Lightbox image={expandedImage} onClose={closeImage} />
    </>
  );
}
