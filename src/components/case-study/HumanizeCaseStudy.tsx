"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useCallback, useState } from "react";
import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import RiseInOnView from "@/components/RiseInOnView";
import SectionHeader from "@/components/case-study/SectionHeader";
import { Lightbox } from "@/components/Lightbox";

type ExpandedImage =
  | null
  | {
      src: string;
      alt: string;
    };

type BasicImage = { src: string; alt: string };

const USER_FLOW_ITEMS = [
  "First-time onboarding",
  "Policy & product configuration",
  "Support activation",
  "Tracking active conversations",
  "Account management & billing",
] as const;

const ONBOARDING_ITEMS = [
  "Make installation feel effortless",
  "Ask only for essential information",
  "Explain how Humanize works without overwhelming users",
  "Provide reassurance at every step",
] as const;

const UI_PREVIEW_IMAGES: BasicImage[] = [
  {
    src: "/case-studies/humanize/ui-preview/onboarding-flow.png",
    alt: "Humanize onboarding flow inside Shopify Admin",
  },
  {
    src: "/case-studies/humanize/ui-preview/knowledge-base.png",
    alt: "Knowledge base setup screen inside Shopify Admin",
  },
  {
    src: "/case-studies/humanize/ui-preview/dashboard.png",
    alt: "Support performance dashboard inside Shopify Admin",
  },
  {
    src: "/case-studies/humanize/ui-preview/knowledge-base-dashboard.png",
    alt: "Knowledge base management screen inside Shopify Admin",
  },
];

const IMPACT_ITEMS = [
  "Paid subscriptions from small & mid-sized merchants",
  "Positive feedback on onboarding simplicity",
  "High trust due to Shopify-native patterns and clarity",
  "Clear value for merchants struggling with email volume",
] as const;

const STATS = [
  { label: "Project Type", value: "Shopify App, SaaS Product" },
  { label: "Role", value: "UX/UI Designer" },
  { label: "Timeline", value: "2022–2023" },
  { label: "Tools", value: "Sketch, Polaris (Shopify design system)" },
  { label: "Scope", value: "Research, Wireframing, Prototyping, Visual Design" },
  { label: "Company", value: "PartnerHero" },
] as const;

export default function HumanizeCaseStudy() {
  const [expandedImage, setExpandedImage] = useState<ExpandedImage>(null);

  const closeImage = useCallback(() => setExpandedImage(null), []);

  return (
    <>
      {/* Split Hero */}
      <RiseInOnView staggerChildren>
        <CaseStudyTopSection
          className="bg-white pb-20"
          logoSrc="/case-studies/humanize/humanize-logo.png"
          logoAlt="Humanize logo"
          logoSize="lg"
          logoClassName="h-32 sm:h-32 md:h-32"
          illustrationSrc="/case-studies/humanize/hero.png"
          illustrationAlt="Humanize UI preview"
          summary={
            <>
              <p className="text-lg font-normal leading-relaxed text-gray-500">
                A lightweight, self-serve Shopify app that helps merchants deliver high-quality customer
                support at scale through PartnerHero’s global CX teams—packaged into a frictionless,
                Shopify-native experience.
              </p>

              <p className="text-lg font-normal leading-relaxed text-gray-500">
                My role covered <span className="font-semibold">research</span>,{" "}
                <span className="font-semibold">user flows</span>,{" "}
                <span className="font-semibold">wireframing</span>,{" "}
                <span className="font-semibold">prototyping</span>, and{" "}
                <span className="font-semibold">UI design</span>, aligned to{" "}
                <span className="font-semibold">Shopify Polaris</span> patterns to build trust and reduce
                learning time.
              </p>
            </>
          }
          stats={STATS}
        />
      </RiseInOnView>

      {/* Context & Opportunity */}
      <section className="relative overflow-hidden border-b-4 border-[#1B1B1B]">
        <div className="absolute inset-0 bg-[#A3DEFA]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <RiseInOnView>
              <div className="relative z-10 max-w-xl">
                <SectionHeader
                  align="left"
                  title="Context & Opportunity"
                  description="PartnerHero’s global CX teams could offer high-quality support at scale. The challenge was turning this operational capability into a lightweight, self-serve Shopify app with a frictionless user experience."
                  titleClassName="text-[#1B1B1B] font-bold"
                  descriptionClassName="text-[#1B1B1B] text-lg font-normal leading-relaxed"
                  underline={{ show: true, className: "bg-[#E45027]" }}
                  wrapperClassName="text-left mx-0 max-w-none"
                />

                <p className="mt-10 text-base font-medium leading-relaxed text-[#1B1B1B]">
                  Merchant Pain Points:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-[#1B1B1B]">
                  <li>Customer emails piling up during nights and weekends</li>
                  <li>High costs of hiring and training support staff</li>
                  <li>Difficulty maintaining consistent tone and quality</li>
                  <li>App fatigue caused by fragmented tooling</li>
                </ul>
              </div>
            </RiseInOnView>

            {/* Image */}
            <RiseInOnView delayMs={120}>
              <div className="relative h-[420px] w-full lg:h-[520px]">
                <Image
                  src="/case-studies/humanize/problem-context.png"
                  alt="Humanize concept illustration"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
            </RiseInOnView>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="border-y-4 border-[#1B1B1B] bg-[#F5F3E8] py-20">
        <Container>
          <RiseInOnView>
            <SectionHeader
              title="Objectives"
              description="The project focused on four primary UX objectives:"
              titleClassName="text-[#1B1B1B] font-bold"
              descriptionClassName="text-[#1B1B1B] text-lg font-normal"
              underline={{ show: true, className: "bg-[#E45027]" }}
            />
          </RiseInOnView>

          <div className="mx-auto mt-10 max-w-2xl">
            <ol className="list-disc space-y-2 pl-5 text-base text-[#1B1B1B]">
              {[
                "Establish trust through clear tone, privacy signals, and consistent UI patterns",
                "Communicate Humanize’s value proposition in under 20 seconds",
                "Design a frictionless Shopify onboarding flow",
                "Make support status and performance immediately visible and understandable",
              ].map((t, idx) => (
                <RiseInOnView key={t} delayMs={80 + idx * 70}>
                  <li>{t}</li>
                </RiseInOnView>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Design Process */}
<section className="relative overflow-hidden py-20">
  <div className="absolute inset-0 bg-[#0B0B10]" />

  <div
    className="
      absolute bottom-[-40%] right-[-20%]
      h-[700px] w-[700px] rounded-full
      bg-[radial-gradient(circle_at_center,#FF9985_0%,#FF7F66_20%,#E85032_35%,#85392F_55%,transparent_70%)]
      blur-3xl opacity-80
    "
  />

  <div
    className="
      absolute top-[-30%] left-[-20%]
      h-[600px] w-[600px] rounded-full
      bg-[radial-gradient(circle_at_center,#3B272C_0%,#2E242B_40%,transparent_70%)]
      blur-3xl opacity-60
    "
  />

  <Container className="relative z-10">
    <RiseInOnView>
      <SectionHeader
        title="Design Process"
        description="I followed a structured, human-centered design process focused on reducing friction, building trust, and aligning with Shopify merchants’ expectations."
        dark
        titleClassName="font-medium"
        descriptionClassName="text-gray-300 text-lg font-normal"
        underline={{ show: true, className: "bg-[#E45027]" }}
        wrapperClassName="max-w-3xl"
      />
    </RiseInOnView>

    {/* Process cards */}
    <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      
      {/* 1. Research */}
      <RiseInOnView delayMs={80}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-[#1B1B1B]/50 p-7 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500 text-base font-medium text-white">
                1
              </div>
              <h4 className="text-xl font-medium tracking-tight text-white">
                Research
              </h4>
            </div>

            <p className="text-base font-normal leading-relaxed text-gray-300">
              Before defining flows or UI, I conducted a focused research phase to understand
              merchant needs, competitive expectations within the Shopify ecosystem, and the
              operational requirements of Humanize’s support workflows.
            </p>
          </div>
        </div>
      </RiseInOnView>

      {/* 2. User Flows */}
      <RiseInOnView delayMs={160}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-[#1B1B1B]/50 p-7 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500 text-base font-medium text-white">
                2
              </div>
              <h4 className="text-xl font-medium tracking-tight text-white">
                User Flows
              </h4>
            </div>

            <p className="text-base font-normal leading-relaxed text-gray-300">
              I mapped the core user flows required to activate and use Humanize effectively:
            </p>

            <ul className="space-y-2 text-base font-normal text-gray-300">
              {USER_FLOW_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RiseInOnView>

      {/* 3. Polaris Design System */}
      <RiseInOnView delayMs={240}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-[#1B1B1B]/50 p-7 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500 text-base font-medium text-white">
                3
              </div>
              <h4 className="text-xl font-medium tracking-tight text-white">
                Polaris Design System
              </h4>
            </div>

            <p className="text-base font-normal leading-relaxed text-gray-300">
              Because Humanize lives inside the Shopify Admin, I used Shopify Polaris as the
              foundation and extended it only where necessary. This kept the UI familiar,
              reduced learning time, and increased merchant trust from the first interaction.
            </p>
          </div>
        </div>
      </RiseInOnView>

      {/* 4. Onboarding Experience */}
      <RiseInOnView delayMs={320}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-[#1B1B1B]/50 p-7 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500 text-base font-medium text-white">
                4
              </div>
              <h4 className="text-xl font-medium tracking-tight text-white">
                Onboarding Experience
              </h4>
            </div>

            <ul className="space-y-2 text-base font-normal text-gray-300">
              {ONBOARDING_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RiseInOnView>

      {/* 5. Knowledge Base Creation */}
      <RiseInOnView delayMs={400}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-[#1B1B1B]/50 p-7 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500 text-base font-medium text-white">
                5
              </div>
              <h4 className="text-xl font-medium tracking-tight text-white">
                Knowledge Base Creation
              </h4>
            </div>

            <p className="text-base font-normal leading-relaxed text-gray-300">
              To enable reliable, high-quality support, merchants were required to provide at
              least 10 knowledge base articles. I designed a guided flow that broke this task
              into manageable steps without overwhelming users.
            </p>
          </div>
        </div>
      </RiseInOnView>

      {/* 6. UI Design */}
      <RiseInOnView delayMs={480}>
        <div className="flex h-full flex-col rounded-3xl border border-border bg-[#1B1B1B]/50 p-7 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500 text-base font-medium text-white">
                6
              </div>
              <h4 className="text-xl font-medium tracking-tight text-white">
                UI Design
              </h4>
            </div>

            <p className="text-base font-normal leading-relaxed text-gray-300">
              Once requirements were clear, I created low-fidelity wireframes to define
              structure and hierarchy. After validation, these were translated into
              high-fidelity designs, resulting in a polished, Shopify-native app merchants
              could trust from day one.
            </p>
          </div>
        </div>
      </RiseInOnView>

    </div>
  </Container>
</section>

      {/* UI Preview */}
      <section className="relative overflow-hidden border-b-4 border-[#1B1B1B] bg-[#F5F3E8] py-24">
        <Container>
          <RiseInOnView>
            <SectionHeader
              title="UI Preview"
              description="Key screens inside the Shopify Admin showing onboarding, knowledge base setup, performance metrics, and support visibility."
              titleClassName="text-[#1B1B1B] font-medium"
              descriptionClassName="text-[#1B1B1B] text-lg font-normal leading-relaxed"
              underline={{ show: true, className: "bg-[#E45027]" }}
            />
          </RiseInOnView>

          {/* Per-image RiseInOnView */}
          <div className="relative mt-16 space-y-10">
            {UI_PREVIEW_IMAGES.map((img, idx) => (
              <RiseInOnView key={img.src} delayMs={80 + idx * 90}>
                <div className="mx-auto max-w-7xl rounded-3xl bg-section p-4">
                  <button
                    type="button"
                    onClick={() => setExpandedImage(img)}
                    className="group relative w-full cursor-zoom-in overflow-hidden bg-section focus:outline-none"
                    aria-label={`Expand image: ${img.alt}`}
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 900px, 100vw"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 group-hover:ring-black/15" />
                    <div className="pointer-events-none absolute bottom-4 right-4 hidden rounded-full bg-black/70 px-3 py-1 text-xs text-white sm:block">
                      Click to expand
                    </div>
                  </button>
                </div>
              </RiseInOnView>
            ))}
          </div>
        </Container>
      </section>

      {/* Launch & Impact */}
      <section className="relative overflow-hidden border-t-4 border-[#1B1B1B] bg-[#A3DEFA] py-24">
        <Container>
          <RiseInOnView>
            <SectionHeader
              title="Launch & Impact"
              description="Humanize launched successfully on the Shopify App Store. This project demonstrated PartnerHero’s ability to bring a real SaaS product to market fast, lean, and merchant-driven."
              titleClassName="text-[#1B1B1B] font-medium"
              descriptionClassName="text-[#1B1B1B] text-lg font-normal leading-relaxed"
              underline={{ show: true, className: "bg-[#E45027]" }}
            />
          </RiseInOnView>

          <div className="mx-auto mt-10">
            <RiseInOnView delayMs={80}>
              <p className="text-left text-base font-medium text-[#1B1B1B]">
                Early results included:
              </p>
            </RiseInOnView>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {IMPACT_ITEMS.map((item, idx) => (
                <RiseInOnView key={item} delayMs={120 + idx * 70}>
                  <div
                    className="
                      flex items-start gap-3
                      rounded-2xl
                      border border-[#1B1B1B]/15
                      bg-white/40
                      p-4
                      transition-all duration-300 ease-out
                      hover:bg-white/60
                      hover:border-[#1B1B1B]/25
                    "
                  >
                    <span className="mt-1 font-semibold text-[#1B1B1B]">✓</span>
                    <p className="text-base font-normal leading-relaxed text-[#1B1B1B]">
                      {item}
                    </p>
                  </div>
                </RiseInOnView>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Lightbox image={expandedImage} onClose={closeImage} />
    </>
  );
}