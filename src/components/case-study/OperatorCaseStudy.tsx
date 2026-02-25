"use client";

import CaseStudyTopSection from "@/components/case-study/CaseStudyTopSection";
import Container from "@/components/Container";
import RiseInOnView from "@/components/RiseInOnView";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Check } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

type ExpandedImage = { src: string; alt: string } | null;

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
    <div className="space-y-6">
      <div className="flex items-center justify-center border-b border-black/15 pb-6">
        <img
          src={app.logo}
          alt={`${app.title} logo`}
          className="h-[32px] w-auto"
          draggable={false}
        />
      </div>

      <p className="max-w-[42ch] text-base leading-relaxed text-gray-500 font-normal">
        {app.body}
      </p>
    </div>
  );
}


export default function OperatorCaseStudy() {
  const [expandedImage, setExpandedImage] = useState<ExpandedImage>(null);

  const openImage = useCallback((img: { src: string; alt: string }) => {
    setExpandedImage(img);
  }, []);

  const closeImage = useCallback(() => setExpandedImage(null), []);


  return (
    <>
      {/* Top */}
      <section className="bg-white pb-24">
        <RiseInOnView staggerChildren>
          <div>
            <CaseStudyTopSection
              logoSrc="/case-studies/operator/Operator-logo.svg"
              logoAlt="Operator logo"
              logoSize="sm"
              illustrationSrc="/case-studies/operator/hero-illustration.png"
              illustrationAlt="Operator UI preview"
              summary={
                <div className="space-y-4 text-gray-500 text-lg font-normal leading-normal">
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
              afterHero={
                <div className="grid gap-16 md:grid-cols-3">
                  {APPS.map((app) => (
                    <AppSummaryCard key={app.title} app={app} />
                  ))}
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

      {/* Problem & Context */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

        <RiseInOnView staggerChildren>
          <div className="relative mx-auto w-full max-w-5xl px-4">
            <div className="relative z-10 min-h-[620px] py-24">
              <div className="max-w-xl">
                <h2 className="text-5xl font-semibold tracking-tight text-[#FF80F1]">
                  Problem & Context
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#d3d3d3] font-normal">
                  Customer support teams previously relied on fragmented tools, inconsistent
                  workflows, and manual processes, which led to inefficiencies and rising
                  operational costs. After several proof-of-concept tools proved their value,
                  PartnerHero decided to fully design and develop a centralized platform that
                  would empower every team across the organization.
                </p>

                <p className="mt-6 text-base leading-relaxed text-[#d3d3d3] font-normal">
                  My mission was to transform fragmented internal tools into an integrated, scalable
                  product suite, ensuring that every feature enhanced efficiency, clarity, and agent
                  satisfaction.
                </p>
              </div>
            </div>

           {/* Mobile/tablet: show below text. Desktop: absolute decorative image */}
<div className="mt-12 lg:mt-0 lg:pointer-events-none lg:absolute lg:bottom-0 lg:right-4 lg:z-0">
  <div className="relative mx-auto h-[320px] w-[260px] sm:h-[420px] sm:w-[320px] lg:h-[560px] lg:w-[420px]">
    <Image
      src="/case-studies/operator/problem-context.png"
      alt="Customer support agent using the Operator platform"
      fill
      className="object-contain object-bottom"
      priority
      sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 260px"
    />
  </div>
</div>
          </div>
        </RiseInOnView>
      </section>

      {/* Research & Insights */}
<section className="bg-[#FBFAF9] py-24">
  <Container>
    <div className="space-y-16">
      {/* Section heading */}
      <RiseInOnView>
        <h2 className="text-center text-5xl font-semibold tracking-tight text-[#4521A6]">
          Research & Insights
        </h2>
      </RiseInOnView>

      {/* Current State Analysis */}
      <RiseInOnView>
        <div className="max-w-3xl text-left">
          <h3 className="text-3xl font-medium tracking-tight text-[#474747]">
            Current State Analysis
          </h3>

          <div className="mt-5 space-y-6 text-base leading-relaxed text-[#474747]/80 font-normal">
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
                <p>
                  To ensure Operator effectively addressed the challenges faced by customer
                  support agents, I planned and led a series of user interviews with agents
                  and managers who interacted daily with Assist and Quality. My objective was
                  to identify pain points, usability concerns, and improvement opportunities
                  in the tools.
                </p>

                <p>
                  A diverse group of agents and managers across different teams and experience
                  levels were selected. We used:
                </p>

                <ul className="ml-5 list-disc space-y-2">
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
          <p className="mt-3 max-w-2xl text-left text-base text-[#474747]/80 font-normal">
            These insights directly influenced feature updates and UI improvements, making the
            tools more intuitive and valuable for agents.
          </p>
        </div>

        <div className="mt-10 grid gap-10 items-stretch sm:grid-cols-2">
          <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.10)] flex flex-col">
            <h4 className="text-2xl font-normal text-[#474747]">Agent experience</h4>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-base text-[#474747]/80 font-normal">
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
            <ul className="mt-6 list-disc space-y-4 pl-5 text-base text-[#474747]/80 font-normal">
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
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-white" />

        <RiseInOnView staggerChildren>
          <Container>
            <div className="relative space-y-14">
              <h2 className="text-center text-5xl font-semibold tracking-tight text-[#4521A6]">
                Ideation & Design Process
              </h2>

              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                <RiseInOnView staggerChildren className="lg:col-span-5">
                  <div className="mx-auto max-w-xl space-y-6 text-base leading-relaxed text-[#474747]/80 lg:mx-0 font-normal">
                    <p>
                      After reviewing insights gathered during research and incorporating feedback
                      from PMs, stakeholders, and developers, we aligned on a structured vision for
                      the software suite and developed a clear plan for the MVP.
                    </p>

                    <p>
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
<section className="bg-white py-24">
  <Container>
    <div className="space-y-16">
      {/* Heading */}
      <RiseInOnView>
        <h2 className="text-center text-5xl font-semibold tracking-tight text-[#4521A6]">
          UI Previews
        </h2>
      </RiseInOnView>

      {/* Top grid (per-card RiseInOnView) */}
      <div className="grid gap-6 sm:grid-cols-2">
        {UI_PREVIEWS_TOP.map((img, idx) => (
          <RiseInOnView key={img.src} delayMs={80 + idx * 90}>
            <div className="overflow-hidden rounded-3xl border border-black/10">
              <button
                type="button"
                onClick={() => openImage({ src: img.src, alt: img.alt })}
                className="group relative w-full cursor-zoom-in focus:outline-none"
                aria-label={`Expand image: ${img.title}`}
              >
                <div className="relative aspect-[16/10] bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 group-hover:ring-black/10" />

                <div className="pointer-events-none absolute bottom-4 right-4 hidden rounded-full bg-black/60 px-3 py-1 text-xs text-white sm:block">
                  Click to expand
                </div>
              </button>

              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-[#474747]/80">{img.title}</p>
              </div>
            </div>
          </RiseInOnView>
        ))}
      </div>

      {/* Video 1 */}
      <RiseInOnView>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="px-5 pt-5">
            <p className="text-sm font-semibold text-[#474747]/80">
              Assist Chrome extension - Humanizing response
            </p>
          </div>

          <div className="mt-4 flex justify-center px-4 pb-4">
            <video
              src="/case-studies/operator/extension-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full max-w-md rounded-xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </RiseInOnView>

      {/* Bottom grid (per-card RiseInOnView) */}
      <div className="grid gap-6 sm:grid-cols-2">
        {UI_PREVIEWS_BOTTOM.map((img, idx) => (
          <RiseInOnView key={img.src} delayMs={80 + idx * 90}>
            <div className="overflow-hidden rounded-3xl border border-black/10">
              <button
                type="button"
                onClick={() => openImage({ src: img.src, alt: img.alt })}
                className="group relative w-full cursor-zoom-in focus:outline-none"
                aria-label={`Expand image: ${img.title}`}
              >
                <div className="relative aspect-[16/10] bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 group-hover:ring-black/10" />

                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                  <span className="sm:hidden">Tap to expand</span>
                  <span className="hidden sm:inline">Click to expand</span>
                </div>
              </button>

              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-[#474747]/80">{img.title}</p>
              </div>
            </div>
          </RiseInOnView>
        ))}
      </div>

      {/* Video 2 */}
      <RiseInOnView>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-white">
          <div className="px-5 pt-5">
            <p className="text-sm font-semibold text-[#474747]/80">
              Quality Chrome extension - Scoring
            </p>
          </div>

          <div className="mt-4 flex justify-center px-4 pb-4">
            <video
              src="/case-studies/operator/extension-demo-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full max-w-md rounded-xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </RiseInOnView>
    </div>
  </Container>
</section>


      {/* Impact & Results */}
      <section className="relative overflow-hidden py-24">
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
              <h2 className="text-center text-5xl font-semibold tracking-tight text-[#FF80F1]">
                Impact And Results
              </h2>

              <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
                <RiseInOnView staggerChildren>
                  <div>
                    <p className="text-base leading-relaxed text-[#d3d3d3] font-normal">
                      Operator improved usability and adoption across the company’s internal tools.
                    </p>

                    <p className="mt-6 text-base leading-relaxed text-[#d3d3d3] font-normal">
                      The success and maturity of Operator’s product direction contributed to
                      Crescendo’s interest in PartnerHero during the acquisition process, demonstrating
                      the value of scalable internal tooling and thoughtful product design.
                    </p>
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
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

        <RiseInOnView staggerChildren>
          <Container>
            <div className="relative z-10 mx-auto max-w-2xl">
              <RiseInOnView staggerChildren className="space-y-6">
                <h2 className="text-center text-5xl font-semibold tracking-tight text-[#FF80F1]">
                  Reflection
                </h2>

                <div className="space-y-6 text-base leading-relaxed text-gray-300 font-normal">
                  <p>
                    Through my experience with Operator, I gained valuable insights into implementing
                    design strategies across multiple teams and products while maintaining consistency,
                    transparency, and purpose.
                  </p>

                  <p>
                    As features regularly changed, objectives transformed, and deadlines shifted, I
                    was motivated to develop greater flexibility, better communication skills, and a
                    more practical design methodology.
                  </p>

                  <p>
                    However, the most fulfilling aspect went beyond the process itself; it was
                    observing teams thrive using the exact tools we had created.
                  </p>

                  <h4 className="pt-6 text-center text-3xl font-semibold tracking-tight text-white">
                    ...exceptional design goes beyond visual interfaces.
                  </h4>

                  <p className="text-center text-base text-gray-300 font-normal">
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

      <Lightbox image={expandedImage} onClose={closeImage} />
    </>
  );
}
