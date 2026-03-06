"use client";

import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import Container from "@/components/Container";
import RiseInOnView from "@/components/RiseInOnView";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Check } from "lucide-react";
import SectionHeader from "@/components/case-study/SectionHeader";

type ExpandedImage = { src: string; alt: string } | null;
type ExpandedVideo = { src: string; title: string } | null;

type AppCard = {
  title: string;
  logo: string;
  body: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

const APPS: AppCard[] = [
  {
    title: "Assist",
    logo: "/case-studies/operator/Assist-logo.svg",
    body:
      "Formerly PartnerGenie, an AI copilot that helps agents draft and refine customer emails, reducing response time and improving accuracy. It is comprised of a web app for managers/admins and a Chrome extension that agents use to interact with the AI copilot.",
  },
  {
    title: "Quality",
    logo: "/case-studies/operator/Quality-logo.svg",
    body:
      "Formerly Aprikot, a peer-to-peer review tool that enables teams to evaluate and improve agent performance collaboratively. It is comprised of a web app for managers/admins and a Chrome extension that agents use to score tickets.",
  },
  {
    title: "Health",
    logo: "/case-studies/operator/Health-logo.svg",
    body:
      "A powerful analytics dashboard that aggregates key metrics, providing actionable insights for managers and clients. It is comprised of a web app for managers/admins.",
  },
];

const CURRENT_STATE_IMAGES = [
  { src: "/case-studies/operator/current-state-analysis-1.png", alt: "Current state analysis artifact 1" },
  { src: "/case-studies/operator/current-state-analysis-2.png", alt: "Current state analysis artifact 2" },
  { src: "/case-studies/operator/current-state-analysis-3.png", alt: "Current state analysis artifact 3" },
  { src: "/case-studies/operator/current-state-analysis-4.png", alt: "Current state analysis artifact 4" },
];

const IDEATION_IMAGES = [
  { src: "/case-studies/operator/ideation-collage1.png", alt: "Ideation artifact 1" },
  { src: "/case-studies/operator/ideation-collage2.png", alt: "Ideation artifact 2" },
  { src: "/case-studies/operator/ideation-collage3.png", alt: "Ideation artifact 3" },
  { src: "/case-studies/operator/ideation-collage4.png", alt: "Ideation artifact 4" },
];

const UI_PREVIEWS_TOP: GalleryImage[] = [
  { src: "/case-studies/operator/ui-preview-1.png", alt: "Operator Admin panel - Home", title: "Operator Admin panel - Home" },
  { src: "/case-studies/operator/ui-preview-2.png", alt: "Operator Admin panel - Users", title: "Operator Admin panel - Users" },
  { src: "/case-studies/operator/ui-preview-3.png", alt: "Assist - Answer Feedback", title: "Assist - Answer Feedback" },
  { src: "/case-studies/operator/ui-preview-4.png", alt: "Assist - Sentiment analysis", title: "Assist - Sentiment analysis" },
];

const UI_PREVIEWS_BOTTOM: GalleryImage[] = [
  { src: "/case-studies/operator/ui-preview-5.png", alt: "Quality - Dashboard", title: "Quality - Dashboard" },
  { src: "/case-studies/operator/ui-preview-6.png", alt: "Quality - Rubrics", title: "Quality - Rubrics" },
];

function AppSummaryCard({ app }: { app: AppCard }) {
  return (
    <div className="h-full rounded-3xl border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-start border-b border-black/10 pb-6">
        <img
          src={app.logo}
          alt={`${app.title} logo`}
          className="h-[34px] w-auto"
          draggable={false}
        />
      </div>

      <p className="mt-6 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-gray-500 font-normal">
        {app.body}
      </p>
    </div>
  );
}

export default function OperatorCaseStudy() {
  const [expandedImage, setExpandedImage] = useState<ExpandedImage>(null);
  const [expandedVideo, setExpandedVideo] = useState<ExpandedVideo>(null);

  const openImage = useCallback((img: { src: string; alt: string }) => {
    setExpandedImage(img);
  }, []);

  const openVideo = useCallback((video: { src: string; title: string }) => {
    setExpandedVideo(video);
  }, []);

  const closeMedia = useCallback(() => {
    setExpandedImage(null);
    setExpandedVideo(null);
  }, []);

  const UI_PREVIEWS_ALL = [
    ...UI_PREVIEWS_TOP.map((i) => ({ kind: "image" as const, ...i })),
    {
      kind: "video" as const,
      src: "/case-studies/operator/extension-demo.mp4",
      title: "Assist Chrome extension - Humanizing response",
    },
    ...UI_PREVIEWS_BOTTOM.map((i) => ({ kind: "image" as const, ...i })),
    {
      kind: "video" as const,
      src: "/case-studies/operator/extension-demo-2.mp4",
      title: "Quality Chrome extension - Scoring",
    },
  ];

  return (
    <>
      {/* Top */}
      <section className="bg-white pb-44">
        <RiseInOnView staggerChildren>
          <div>
            <CaseStudyTopSection
  logoSrc="/case-studies/operator/Operator-logo.svg"
  logoAlt="Operator logo"
  logoSize="sm"
  illustrationSrc="/case-studies/operator/operator-hero-2.png"
  illustrationAlt="Operator UI preview"
              summary={
                <div className="space-y-4 text-gray-500 text-xl font-normal leading-normal">
                  <p>
                    Operator is <span className="font-semibold">PartnerHero’s</span>{" "}
                    <span className="font-normal">(now Crescendo)</span> internal platform that unifies
                    multiple support operations tools into one product suite. It helps agents, managers,
                    and admins work faster with consistent workflows, shared data, and a cohesive UI
                    across applications.
                  </p>

                  <p>
                    I led UX and UI design for <span className="font-semibold">Assist</span>,{" "}
                    <span className="font-semibold">Quality</span>, and the{" "}
                    <span className="font-semibold">Operator</span> admin panel, collaborating closely
                    with designers, PMs, developers, and stakeholders.
                  </p>
                </div>
              }
              stats={[
                { label: "Project Type", value: "Internal SaaS Platform" },
                { label: "Role", value: "UX/UI Designer" },
                { label: "Timeline", value: "2023–2024" },
                { label: "Tools", value: "Figma, Material UI, Jira" },
                { label: "Scope", value: "Research, Wireframing, Prototyping, Visual Design" },
                { label: "Company", value: "PartnerHero (now Crescendo)" },
              ]}
            />
          </div>
        </RiseInOnView>
      </section>

{/* Apps Overview */}
<section className="bg-[#fbfaf9] py-24 sm:py-32 lg:py-44">
  <Container>
    <RiseInOnView staggerChildren>
      <div className="space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="The Operator Suite"
            description="Operator is made up of three applications designed to support agents, managers, and admins with consistent workflows and shared data."
            descriptionClassName="text-gray-500 text-xl leading-relaxed"
            align="center"
            wrapperClassName="max-w-none"
            titleClassName="text-[#4521a6] text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-semibold
  tracking-tight"
          />
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {APPS.map((app, idx) => {
            const offsets = [
              "lg:-translate-x-3",
              "lg:translate-x-0",
              "lg:translate-x-3",
            ];

            return (
              <div
                key={app.title}
                className={`transition-transform ${offsets[idx]}`}
              >
                <AppSummaryCard app={app} />
              </div>
            );
          })}
        </div>
      </div>
    </RiseInOnView>
  </Container>
</section>

      {/* Problem & Context */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

        <RiseInOnView staggerChildren>
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="relative z-10 min-h-[620px] py-24 sm:py-32 lg:py-64">
              <div className="max-w-xl">
                <SectionHeader
    title="Problem & Context"
    description=" Customer support teams previously relied on fragmented tools, inconsistent
                  workflows, and manual processes, which led to inefficiencies and rising
                  operational costs."
    descriptionClassName="text-gray-300"
    align="left"
    titleClassName="text-[#ff80f1]"
  />

                <p className="mt-6 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-[#d3d3d3] font-normal">
                  After several proof-of-concept tools proved their value,
                  PartnerHero decided to fully design and develop a centralized platform that
                  would empower every team across the organization.
                </p>

                <p className="mt-6 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-[#d3d3d3] font-normal">
                  My mission was to transform the fragmented internal tools into an integrated, scalable
                  product suite, ensuring that every feature enhanced efficiency, clarity, and agent
                  satisfaction.
                </p>
              </div>
            </div>

           {/* Decorative image */}
<div className="mt-12 lg:mt-0 lg:pointer-events-none lg:absolute lg:bottom-0 lg:right-0 lg:z-0">
  <div
    className="
      relative mx-auto
      w-[75vw] max-w-[520px]
      aspect-[3/5]

      lg:w-auto
      lg:h-[80vh]
      lg:max-h-[820px]
    "
  >
    <Image
      src="/case-studies/operator/problem-context.png"
      alt="Customer support agent using the Operator platform"
      fill
      className="object-contain object-bottom"
      sizes="(min-width: 1024px) 40vw, 75vw"
    />
  </div>
</div>
          </div>
        </RiseInOnView>
      </section>

      {/* Research & Insights */}
<section className="bg-[#FBFAF9] py-24 sm:py-32 lg:py-44">
  <Container>
    <div className="space-y-16 lg:space-y-24">
      {/* Section heading */}
      <RiseInOnView>
        <SectionHeader
    title="Research & Insights"
    align="center"
    wrapperClassName="max-w-none"
    titleClassName="text-[#4521a6]"
  />
      </RiseInOnView>

      {/* Current State Analysis */}
      <RiseInOnView>
        <div className="max-w-3xl text-left">
          <h3 className="text-3xl font-medium tracking-tight text-[#474747]">
            Current State Analysis
          </h3>

          <div className="mt-5 space-y-16 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-[#474747]/80 font-normal">
            <p>
              At the time of evaluation, the product experience relied on fragmented workflows and
              inconsistent interface patterns. Core tasks required unnecessary steps, increasing
              cognitive load and slowing down users’ ability to complete their work efficiently.
              While the system functioned from a technical standpoint, it lacked clarity, hierarchy,
              and scalability from a user experience perspective.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CURRENT_STATE_IMAGES.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </RiseInOnView>

      {/* Interviews */}
      <RiseInOnView>
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="order-2 max-w-xl p-6 sm:p-8 lg:order-1 lg:pr-10">
              <h3 className="text-3xl font-medium tracking-tight text-[#474747]">
                Interviews
              </h3>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-[#474747]/80 font-normal">
                <p className="text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed">
                  To ensure Operator effectively addressed the challenges faced by customer
                  support agents, I planned and led a series of user interviews with agents
                  and managers who interacted daily with Assist and Quality. My objective was
                  to identify pain points, usability concerns, and improvement opportunities
                  in the tools.
                </p>

                <p className="text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed">
                  A diverse group of agents and managers across different teams and experience
                  levels were selected. We used:
                </p>

                <ul className="ml-5 list-disc space-y-2 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed">
                  <li>One-on-one video call interviews</li>
                  <li>Open-ended questions to encourage detailed feedback</li>
                  <li>Live walkthroughs of the tools to observe agent workflows</li>
                </ul>
              </div>
            </div>

            <div className="order-1 relative h-full w-full lg:order-2">
              <div className="relative h-full w-full overflow-hidden lg:rounded-r-3xl">
                <div className="relative h-full min-h-[280px] lg:min-h-full">
                  <Image
                    src="/case-studies/operator/InterviewsIllustration.png"
                    alt="Interview insights and qualitative feedback visualization"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RiseInOnView>

      {/* Insights */}
      <RiseInOnView>
        <div>
          <h3 className="text-left text-3xl font-medium tracking-tight text-[#474747]">
            Insights
          </h3>
          <p className="mt-3 max-w-2xl text-left text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-[#474747]/80 font-normal">
            These insights directly influenced feature updates and UI improvements, making the
            tools more intuitive and valuable for agents.
          </p>
        </div>

        <div className="mt-10 grid gap-10 items-stretch sm:grid-cols-2">
          <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] flex flex-col">
            <h4 className="text-2xl font-normal text-[#474747]">Agent experience</h4>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-[#474747]/80 font-normal">
              <li>The Chrome extension UI is unclear</li>
              <li>Management through the web app is difficult, and so is reviewing data</li>
              <li>
                Some agents felt AI-generated responses were too generic and needed more customization
              </li>
              <li>Trust in AI suggestions varied based on agent experience level</li>
              <li>Agents wanted a way to quickly edit AI responses before sending</li>
              <li>It is common for agents to prefer the use of macros over the tool</li>
            </ul>
          </div>

          <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] flex flex-col">
            <h4 className="text-2xl font-normal text-[#474747]">Quality & ops</h4>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-[#474747]/80 font-normal">
              <li>Agents had difficulty navigating and scoring in the Chrome extension</li>
              <li>Managers had difficulty understanding how to create rubrics</li>
              <li>Reviewing and comparing data felt slow</li>
              <li>Managers asked for different scoring methods, capabilities, and requirements</li>
              <li>Lack of actionable feedback for agents being scored</li>
            </ul>
          </div>
        </div>
      </RiseInOnView>
    </div>
  </Container>
</section>


      {/* Ideation & Design Process */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-44">
        <div className="absolute inset-0 bg-white" />

        <RiseInOnView staggerChildren>
          <Container>
            <div className="relative space-y-16 lg:space-y-24">

              <div className="grid gap-24 lg:grid-cols-12 lg:items-center">
                <RiseInOnView staggerChildren className="lg:col-span-5">
                  <div className="mx-auto max-w-xl space-y-6 text-base leading-relaxed text-[#474747]/80 lg:mx-0 font-normal">
                  <SectionHeader
    title="Ideation & Design Process"
    description="After reviewing insights gathered during research and incorporating feedback
                      from PMs, stakeholders, and developers, we aligned on a structured vision for
                      the software suite and developed a clear plan for the MVP."
    descriptionClassName="text-gray-500"
    align="left"
    wrapperClassName="max-w-none"
    titleClassName="text-[#4521a6]"
  />
                

                    <p className="text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed">
                      With the roadmap in place, we began wireframing and designing section by
                      section. To ensure a consistent and cohesive experience across all apps, we
                      chose Material UI as our design framework. For the MVP, customization was kept
                      minimal to prioritize functionality and speed of development.
                    </p>
                  </div>
                </RiseInOnView>

                <RiseInOnView staggerChildren className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                  {IDEATION_IMAGES.map((img) => (
                    <div
                      key={img.src}
                      className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                  ))}
                </RiseInOnView>
              </div>
            </div>
          </Container>
        </RiseInOnView>
      </section>

      {/* UI Previews */}
<section className="bg-[#FBFAF9] py-24 sm:py-32 lg:py-44">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            <RiseInOnView>
             <SectionHeader
    title="UI Previews"
    align="center"
    wrapperClassName="max-w-none"
    titleClassName="text-[#4521a6]"
  />
            </RiseInOnView>

            <div className="grid gap-6 sm:grid-cols-2">
              {UI_PREVIEWS_ALL.map((item, idx) => (
                <RiseInOnView key={`${item.kind}-${item.src}`} delayMs={80 + idx * 70}>
                  <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
                    <button
                      type="button"
                      onClick={() =>
                        item.kind === "image"
                          ? openImage({ src: item.src, alt: item.alt })
                          : openVideo({ src: item.src, title: item.title })
                      }
                      className="group relative w-full text-left"
                    >
                      <div className="relative aspect-[16/10] bg-white">
                        {item.kind === "image" ? (
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                        ) : (
                          <video
                            src={item.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                        )}

                        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 group-hover:ring-black/10" />

                        <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                          <span className="sm:hidden">Tap to expand</span>
                          <span className="hidden sm:inline">Click to expand</span>
                        </div>
                      </div>

                      <div className="px-5 py-4">
                        <p className="text-sm font-semibold text-[#474747]/80">
                          {item.title}
                        </p>
                      </div>
                    </button>
                  </div>
                </RiseInOnView>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* Impact & Results */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-64">
        <div className="absolute inset-0">
          <Image
            src="/case-studies/operator/impact-bg1.png"
            alt="Customer support agent using Operator"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        <RiseInOnView staggerChildren>
          <Container>
            <div className="relative z-10 space-y-16">

              <div className="grid gap-24 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                <RiseInOnView staggerChildren>
                  <div>
                    <SectionHeader
    title="Impact & Results"
    dark
    description="Operator made our internal tools much easier to use, which boosted adoption throughout the company. More importantly, the sophistication of Operator's product direction was a clear indicator of how well PartnerHero's vision for AI-powered human customer support aligned with Crescendo's, playing a role in the acquisition."
    descriptionClassName="text-white"
    align="left"
    wrapperClassName="max-w-none"
    titleClassName="
  text-[#ff80f1]
"
  />
                    
                  </div>
                </RiseInOnView>

                <div className="hidden justify-center lg:flex">
                  <span className="block h-full w-px bg-[#d3d3d3]" />
                </div>

                <RiseInOnView staggerChildren>
                  <ul className="space-y-4">
                    {[
                      { bold: "Adopted by 500+ agents across teams" },
                      { bold: "Unified design language across 3 applications and an admin panel" },
                      { bold: "Positive feedback from early users highlighting clarity and visual consistency" },
                    ].map((item) => (
                      <li
                        key={item.bold}
                        className="flex items-center gap-4 rounded-2xl bg-black/70 px-5 py-4"
                      >
                        <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                          <Check className="h-4 w-4 stroke-[2.5]" />
                        </span>

                        <p className="text-base leading-snug text-white">
                          <span className="font-semibold">{item.bold}</span>{" "}
                        </p>
                      </li>
                    ))}
                  </ul>
                </RiseInOnView>
              </div>
            </div>
          </Container>
        </RiseInOnView>
      </section>

      {/* Reflection */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-44">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

        <RiseInOnView staggerChildren>
          <Container>
            <div className="relative z-10 mx-auto max-w-2xl">
              <RiseInOnView staggerChildren className="space-y-6">
                <SectionHeader
    title="Reflection"
    dark
    description="Through my experience with Operator, I gained valuable insights into implementing
                    design strategies across multiple teams and products while maintaining consistency,
                    transparency, and purpose."
    descriptionClassName="text-left"
    align="center"
    wrapperClassName="max-w-none"
    titleClassName="
  text-[#ff80f1]
"
  />

                <div className="space-y-6 text-base sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed text-gray-300 font-normal">
                  <p>
                    As features regularly changed, objectives transformed, and deadlines shifted, I
                    was motivated to develop greater flexibility, better communication skills, and a
                    more practical design methodology.
                  </p>

                  <p>
                    However, the most fulfilling aspect went beyond the process itself; it was
                    observing teams thrive using the exact tools we had created.
                  </p>

                  <p>
                    Exceptional design involves empowering individuals to perform at their highest
                    level through clear communication, understanding, and flexible systems that evolve
                    alongside their users.
                  </p>
                </div>
              </RiseInOnView>
            </div>
          </Container>
        </RiseInOnView>
      </section>

      {/* MODAL */}
{(expandedImage || expandedVideo) && (
  <div
    className="fixed inset-0 z-50 bg-black/80 p-4 sm:p-6"
    onClick={closeMedia}
    role="dialog"
    aria-modal="true"
  >
    <div
      className="
        mx-auto flex max-h-[92vh] w-full max-w-6xl flex-col
        overflow-hidden rounded-2xl bg-black/60 backdrop-blur
        ring-1 ring-white/10
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header (always visible) */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-black/40 px-4 py-3 sm:px-5">
        <div className="truncate text-sm font-medium text-white/80">
          {expandedVideo?.title ?? expandedImage?.alt ?? "Preview"}
        </div>

        <button
          type="button"
          onClick={closeMedia}
          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 transition hover:bg-white/15"
        >
          Close
        </button>
      </div>

      {/* Body (scrollable) */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        {expandedImage && (
          <div className="relative mx-auto w-full max-w-5xl">
            <div className="relative w-full">
              {/* Constrain by viewport height */}
              <div className="relative mx-auto max-h-[75vh] w-full">
                <Image
                  src={expandedImage.src}
                  alt={expandedImage.alt}
                  width={1600}
                  height={1000}
                  className="h-auto max-h-[75vh] w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {expandedVideo && (
          <div className="mx-auto w-full max-w-5xl">
            <video
              src={expandedVideo.src}
              controls
              autoPlay
              playsInline
              className="w-full rounded-xl object-contain max-h-[75vh]"
            />
          </div>
        )}
      </div>
    </div>
  </div>
)}
    </>
  );
}
