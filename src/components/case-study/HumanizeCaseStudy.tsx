"use client";

import Container from "@/components/Container";
import Image from "next/image";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

export default function HumanizeCaseStudy() {
  return (
    <>
      {/* Overview + stat chips/cards */}
      <section className="py-12">
        <Container>
          <h3 className="text-4xl font-semibold tracking-tight">Overview</h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <StatCard label="Project Type" value="Shopify App, SaaS Product" />
            <StatCard label="Role" value="UX/UI Designer" />
            <StatCard label="Timeline" value="2022-2023" />
            <StatCard label="Tools" value="Sketch, Polaris (Shopify design system)" />
            <StatCard
              label="Scope"
              value="Research, Wireframing, Prototyping, Visual Design"
            />
            <StatCard label="Company" value="PartnerHero" />
          </div>

          {/* Body copy */}
          <div className="mt-8 space-y-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Humanize enables store owners to offer 24/7 email support backed by a team of expert customer service associates at rates that stores of any size can afford. The app integrates directly with the Shopify admin, and merchants can get started in just a few clicks by answering a handful of questions about their products and store policies.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem & Context */}
<section className="relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

  <div className="relative mx-auto w-full max-w-5xl px-6 py-24">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Text */}
      <div className="relative z-10 max-w-xl">
        <h3 className="text-4xl font-semibold tracking-tight text-white">
          Problem &amp; Context
        </h3>

        <p className="mt-6 text-sm leading-relaxed text-white/80">
          PartnerHero’s global CX teams could offer high-quality support at
          scale. The challenge was turning this operational capability into a
          lightweight, self-serve Shopify app with a frictionless user
          experience.
        </p>

        <p className="mt-6 text-sm leading-relaxed text-white/80 font-semibold">
          Merchant Pain Points
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/80">
          <li>Customer emails piling up during nights and weekends</li>
          <li>High costs of hiring and training support staff</li>
          <li>Difficulty maintaining consistent tone and quality</li>
          <li>App fatigue caused by fragmented tooling</li>
        </ul>
      </div>

      {/* Image */}
      <div className="relative h-[420px] w-full lg:h-[520px]">
        <Image
          src="/case-studies/humanize/problem-context.png"
          alt="Humanize concept illustration"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>
  </div>
</section>



      {/* Business Objectives */}
      <section className="py-14">
        <Container>
          <h3 className="text-4xl font-medium tracking-tight text-center">
            Objectives
          </h3>
          <p className="mt-3 text-center text-sm text-muted">
            Based on the research and constraints, the project focused on four primary UX objectives:
          </p>

          <div className="mt-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-2">
                <li>Establish trust through clear tone, privacy signals, and consistent UI patterns</li>
                <li>Communicate Humanize’s value proposition in under 20 seconds</li>
                <li>Design a frictionless Shopify onboarding flow</li>
                <li>Make support status and performance immediately visible and understandable</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>


{/* Design Process */}
<section className="py-20">
  <Container>
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">
        Design Process
      </h3>

      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-muted-foreground/30" />
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        I followed a structured, human-centered design process focused on
        reducing friction, building trust, and aligning with Shopify
        merchants’ expectations.
      </p>
    </div>

    {/* Steps */}
    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* 1. Research */}
      <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white">
            1
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-tight">Research</h4>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Before defining flows or UI, I conducted a focused research phase
              to understand merchant needs, competitive expectations within the
              Shopify ecosystem, and the operational requirements of Humanize’s
              support workflows.
            </p>
          </div>
        </div>
      </div>

      {/* 2. User Flows */}
      <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white">
            2
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-tight">User Flows</h4>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I mapped the core user flows required to activate and use Humanize
              effectively:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                First-time onboarding
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Policy & product configuration
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Support activation
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Tracking active conversations
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Account management & billing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Polaris Design System */}
      <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white">
            3
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-tight">
  Polaris Design System
</h4>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Because Humanize lives inside the Shopify Admin, I used Shopify
              Polaris as the foundation and extended it only where necessary.
              This kept the UI familiar, reduced learning time, and increased
              merchant trust from the first interaction.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Onboarding Experience */}
      <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white">
            4
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-tight">
              Onboarding Experience
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Make installation feel effortless
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Ask only for essential information
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Explain how Humanize works without overwhelming users
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
                Provide reassurance at every step
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Knowledge Base Creation */}
      <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white">
            5
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-tight">
              Knowledge Base Creation
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              To enable reliable, high-quality support, merchants were required
              to provide at least 10 knowledge base articles. I designed a
              guided flow that broke this task into manageable steps without
              overwhelming users.
            </p>
          </div>
        </div>
      </div>

      {/* 6. UI Design */}
      <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-base font-semibold text-white">
            6
          </div>

          <div>
            <h4 className="text-xl font-semibold tracking-tight">UI Design</h4>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Once requirements were clear, I created low-fidelity wireframes to
              define structure and hierarchy. After validation, these were
              translated into high-fidelity designs, resulting in a polished,
              Shopify-native app merchants could trust from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>



{/* UI Preview */}
<section className="relative overflow-hidden py-24">
  {/* Soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-sky-100/60 via-background to-background" />

  <Container>
    {/* Header */}
    <div className="relative mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">UI Preview</h3>

      <div className="mt-4 flex justify-center">
        <div className="h-1 w-16 rounded-full bg-muted-foreground/30" />
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        Key screens inside the Shopify Admin showing onboarding, knowledge base
        setup, performance metrics, and support visibility.
      </p>
    </div>

    {/* Stacked UI images */}
    <div className="relative mt-16 space-y-10">
      {[
        {
          src: "/case-studies/humanize/ui-preview-1.png",
          alt: "Humanize onboarding flow inside Shopify Admin",
        },
        {
          src: "/case-studies/humanize/ui-preview-2.png",
          alt: "Knowledge base setup screen inside Shopify Admin",
        },
        {
          src: "/case-studies/humanize/ui-preview-3.png",
          alt: "Support performance dashboard inside Shopify Admin",
        },
        {
          src: "/case-studies/humanize/ui-preview-4.png",
          alt: "Knowledge base management screen inside Shopify Admin",
        },
      ].map((img) => (
        <div
          key={img.src}
          className="mx-auto max-w-5xl rounded-3xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            {/* Wide admin UI aspect */}
            <div className="relative aspect-[16/9]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>




{/* Launch & Impact */}
<section className="relative overflow-hidden py-24">
  {/* Soft overall background so it blends with page */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

  <Container>
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="grid lg:grid-cols-2">
        {/* Left panel */}
        <div className="relative overflow-hidden">
          {/* dark gradient panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-rose-600/30" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="relative p-10 sm:p-12 lg:p-14">
            <h3 className="text-4xl font-semibold tracking-tight text-white">
              Launch &amp; Impact
            </h3>

            <div className="mt-4">
              <div className="h-1 w-20 rounded-full bg-white/25" />
            </div>

            <p className="mt-8 text-sm leading-relaxed text-white/80">
              Humanize launched successfully on the Shopify App Store.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Early results included:
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                Paid subscriptions from small &amp; mid-sized merchants
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                Positive feedback on onboarding simplicity
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                High trust due to Shopify-native patterns and clarity
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                Clear value for merchants struggling with email volume
              </li>
            </ul>

            <p className="mt-10 text-sm leading-relaxed text-white/80">
              This project demonstrated PartnerHero’s ability to bring a real SaaS
              product to market fast, lean, and merchant-driven.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/case-studies/humanize/launch-impact.jpg"
            alt="Humanize dashboard shown on a laptop during launch"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* subtle overlay for cohesion */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  </Container>
</section>

    </>
  );
}
