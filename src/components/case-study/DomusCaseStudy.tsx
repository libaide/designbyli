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

export default function OperatorCaseStudy() {
  return (
    <>
      {/* Overview + stat chips/cards */}
      <section className="py-12">
        <Container>
          <h3 className="text-4xl font-semibold tracking-tight">Overview</h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <StatCard label="Project Type" value="Mobile App MVP" />
            <StatCard label="Role" value="UX/UI Designer" />
            <StatCard label="Timeline" value="Sept. 2025 — Nov. 2025" />
            <StatCard label="Tools" value="Figma, Material Design 3" />
            <StatCard label="Scope" value="UX Research, Wireframing, Prototyping, Visual Design" />
            <StatCard label="Client" value="Domus" />
          </div>

          {/* Body copy */}
          <div className="mt-8 space-y-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Domus is a mobile application that connects clients in Honduras with verified home service professionals such as plumbers, electricians, gardeners, and more. The goal was to translate a business opportunity, proposed by the founders, into a functional MVP capable of validating user demand, usability, and operational feasibility. I was responsible for the entire product definition and user experience, from competitor analysis and MVP scope definition, to UX architecture, flows, and UI design.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem & Context */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

        <div className="relative mx-auto w-full max-w-5xl px-4">
          <div className="relative z-10 min-h-[620px] py-24">
            <div className="max-w-xl">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Problem & Context
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-white/80">
                In Honduras, it can be tough to find reliable and trustworthy home service providers. Most people rely on informal recommendations or social media groups, which can lead to trust issues, miscommunication, and unreliable scheduling.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/80"><strong>Challenges Identified</strong></p>
              <ul className="mt-4 ml-4 list-disc space-y-2 text-sm leading-relaxed text-white/80">
                <li>Lack of verified professionals and standardized pricing. </li>
                <li>No structured system for tracking jobs or payments. </li>
                <li>Missed opportunities for technicians to find consistent work.</li>
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-white/80">
                My mission was to build a mobile marketplace that connects verified technicians with clients through a transparent and easy-to-use system.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-4 z-0 hidden lg:block">
            <div className="relative h-[560px] w-[420px]">
              <Image
                src="/case-studies/operator/problem-context.png"
                alt="Customer support agent using the Operator platform"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Objectives & MVP Goals */}
      <section className="py-14">
        <Container>
          {/* Business Objectives & MVP Goals */}
          <section className="py-14">
            <h3 className="text-4xl font-medium tracking-tight text-center">
              Business Objectives & MVP Goals
            </h3>
            <p className="mt-3 text-center text-sm text-muted">
              The MVP aimed to validate the business hypothesis that there is real demand for verified home services in Honduras under a "pull model", where clients post requests and technicians apply to them.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-semibold">Core MVP Objectives</h4>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-2">
                  <li>Confirm user understanding of request and selection flow</li>
                  <li>Evaluate technician willingness to use the platform</li>
                  <li>Identify friction points in the experience for both roles</li>
                  <li>Gather performance metrics to support the development of version 1.0</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-semibold">Success Metrics</h4>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-2">
                  <li>Number of real requests created</li>
                  <li>Managers had difficulty understanding how to create rubrics</li>
                  <li>Percentage of requests receiving at least one technician bid</li>
                  <li>Average time from request creation to technician assignment</li>
                  <li>Percentage of completed and paid services</li>
                </ul>
              </div>
            </div>
          </section>

          
        </Container>
      </section>


      {/* Personas */}
<section className="py-20">
  <Container>
    {/* Section header */}
    <div className="mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">
        Personas
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        As part of the discovery process, I mapped and documented the key
        stakeholders influencing Domus’ development. The design was guided by
        two primary personas representing the core users: clients and
        technicians.
      </p>
    </div>

    {/* Personas grid */}
    <div className="mt-16 grid gap-10 lg:grid-cols-2">
      {/* Persona — Client */}
      <div className="grid gap-6 rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/3]">
            <img
              src="/case-studies/domus/persona-client.jpg"
              alt="Client persona"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h4 className="text-2xl font-semibold">
            Karen López
          </h4>
          <p className="mt-1 text-sm text-muted">
            Female · 32 years old · Client
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-foreground/80" />
              Needs quick and trustworthy home service help
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-foreground/80" />
              Values transparency and clear expectations
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-foreground/80" />
              Expects a simple, fast booking experience
            </li>
          </ul>
        </div>
      </div>

      {/* Persona — Technician */}
      <div className="grid gap-6 rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/3]">
            <img
              src="/case-studies/domus/persona-technician.jpg"
              alt="Technician persona"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h4 className="text-2xl font-semibold">
            Jorge Ortega
          </h4>
          <p className="mt-1 text-sm text-muted">
            Male · 40 years old · Technician
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-foreground/80" />
              Wants steady job opportunities and on-time payments
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-foreground/80" />
              Uses WhatsApp and Facebook regularly
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-foreground/80" />
              Needs straightforward job acceptance and payment flows
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</section>


{/* Competitive Research */}
<section className="relative overflow-hidden py-28">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/case-studies/domus/competitive-research-bg.jpg"
      alt="Competitive research background"
      fill
      className="object-cover"
      priority={false}
    />
  </div>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/65" />

  {/* Optional subtle vignette */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

  <Container>
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight text-white">
        Competitive Research
      </h3>

      <p className="mt-6 text-sm leading-relaxed text-white/80">
        I conducted a competitive analysis of existing home service platforms in
        Honduras and abroad to identify differentiation opportunities. I
        discovered that local competitors lacked verification systems and had
        poor UX design. While researching global references like TaskRabbit and
        Handy, I found that they provided useful models for technician
        verification workflows, geolocation and filtering logic, and MVP
        monetization strategies.
      </p>

      <p className="mt-6 text-sm leading-relaxed text-white/80">
        This research helped position Domus as a trust-based local alternative,
        balancing simplicity with credibility.
      </p>
    </div>
  </Container>
</section>

{/* User Journeys */}
<section className="relative overflow-hidden py-24">
  {/* Soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

  <Container>
    {/* Header */}
    <div className="relative mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">User Journeys</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Once the MVP objectives were defined and the research had been done, I
        mapped the user journeys for the three main roles: Client, Technician,
        and Admin. These journeys helped me identify critical moments that would
        shape the MVP.
      </p>
    </div>

    {/* Cards */}
    <div className="relative mt-14 space-y-8">
      {/* Client */}
      <div className="rounded-3xl border border-border bg-card shadow-sm">
        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
          <h4 className="text-sm font-semibold tracking-tight text-foreground">
            Client
          </h4>
        </div>

        <div className="p-4 sm:p-6 pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            <div className="relative aspect-[16/6] sm:aspect-[16/5]">
              <Image
                src="/case-studies/domus/user-journeys-client.png"
                alt="User journey map for the Client role"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technician */}
      <div className="rounded-3xl border border-border bg-card shadow-sm">
        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
          <h4 className="text-sm font-semibold tracking-tight text-foreground">
            Technician
          </h4>
        </div>

        <div className="p-4 sm:p-6 pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            <div className="relative aspect-[16/6] sm:aspect-[16/5]">
              <Image
                src="/case-studies/domus/user-journeys-technician.png"
                alt="User journey map for the Technician role"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Admin */}
      <div className="rounded-3xl border border-border bg-card shadow-sm">
        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
          <h4 className="text-sm font-semibold tracking-tight text-foreground">
            Admin
          </h4>
        </div>

        <div className="p-4 sm:p-6 pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            <div className="relative aspect-[16/6] sm:aspect-[16/5]">
              <Image
                src="/case-studies/domus/user-journeys-admin.png"
                alt="User journey map for the Admin role"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/* User Flows */}
<section className="relative overflow-hidden py-24">
  {/* Soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

  <Container>
    {/* Header */}
    <div className="relative mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">User Flows</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        I proceeded to map the core user flows for the three main roles. This
        helped clarify how each interaction connected to business logic, from
        posting a service to payment confirmation.
      </p>
    </div>

    {/* Large flow artifact card */}
    <div className="relative mt-14">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card shadow-sm">
        <div className="p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            {/* Wide stage for diagrams */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/case-studies/domus/user-flows.png"
                alt="User flows diagram for Client, Technician, and Admin"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/* Wireframes */}
<section className="relative overflow-hidden py-24">
  {/* Soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

  <Container>
    {/* Header */}
    <div className="relative mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">Wireframes</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        After finalizing the flow diagrams and defining the MVP scope and core features, I transitioned into low-fidelity wireframes. I collaborated closely with Ricardo and Samuel to ensure all critical MVP functionalities were represented and the UX remained simple and intuitive. We now had a validated UX structure that served as the foundation for the final UI design and later handoff to developers.
      </p>
    </div>

    {/* Large flow artifact card */}
    <div className="relative mt-14">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card shadow-sm">
        <div className="p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            {/* Wide stage for diagrams */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/case-studies/domus/user-flows.png"
                alt="User flows diagram for Client, Technician, and Admin"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/* Design System */}
<section className="relative overflow-hidden py-24">
  {/* Soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

  <Container>
    {/* Header */}
    <div className="relative mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight">Design System</h3>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        Once the UX structure and wireframes were validated, I moved on to
        establishing the visual identity and design system for Domus. The goal
        was to build a cohesive, scalable, and developer-friendly UI foundation
        that could evolve as the product matured.
      </p>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        I based the entire interface on Material Design 3 principles, and using
        the Material Theme Builder, I generated an accessible and “Domus branded”
        design system. With the personalized Material design system, I created a
        local components library and style tokens tailored to the project’s
        needs.
      </p>
    </div>

    {/* Artifact card */}
    <div className="relative mt-14">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card shadow-sm">
        <div className="p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            {/* Taller stage to match the screenshot */}
            <div className="relative aspect-[16/13] sm:aspect-[16/12]">
              <Image
                src="/case-studies/domus/design-system.png"
                alt="Domus design system artifacts: color, typography, icons, and components"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>


      
{/* UI Previews */}
<section className="relative overflow-hidden py-28">
  {/* Dark gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-950 to-black" />

  <Container>
    {/* Header */}
    <div className="relative mx-auto max-w-3xl text-center">
      <h3 className="text-4xl font-semibold tracking-tight text-white">
        UI Previews
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/80">
        The MVP design defined a clear, testable foundation for product
        validation.
      </p>
    </div>

    {/* Mobile UI grid */}
    <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "/case-studies/domus/ui/mobile-1.png",
        "/case-studies/domus/ui/mobile-2.png",
        "/case-studies/domus/ui/mobile-3.png",
        "/case-studies/domus/ui/mobile-4.png",
        "/case-studies/domus/ui/mobile-5.png",
        "/case-studies/domus/ui/mobile-6.png",
        "/case-studies/domus/ui/mobile-7.png",
        "/case-studies/domus/ui/mobile-8.png",
      ].map((src) => (
        <div
          key={src}
          className="relative overflow-hidden rounded-3xl bg-black/30 shadow-xl ring-1 ring-white/10"
        >
          <div className="relative aspect-[9/19]">
            <Image
              src={src}
              alt="Domus mobile UI preview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, 50vw"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Desktop / Admin previews */}
    <div className="relative mt-20 space-y-10">
      {/* Wide dashboard */}
      <div className="mx-auto max-w-6xl rounded-3xl bg-black/30 p-4 shadow-xl ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9]">
            <Image
              src="/case-studies/domus/ui/admin-dashboard.png"
              alt="Domus admin dashboard UI"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </div>
        </div>
      </div>

      {/* Technician profile / verification */}
      <div className="mx-auto max-w-4xl rounded-3xl bg-black/30 p-4 shadow-xl ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10]">
            <Image
              src="/case-studies/domus/ui/technician-profile.png"
              alt="Technician verification and profile UI"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

  {/* Reflection */}
<section className="relative overflow-hidden py-28">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/case-studies/domus/reflection-bg.jpg"
      alt="Domus reflection background"
      fill
      className="object-cover"
      priority={false}
    />
  </div>

  {/* Readability overlay */}
  <div className="absolute inset-0 bg-black/25" />

  <Container>
    <div className="relative z-10 flex justify-center">
      <div className="w-full max-w-3xl rounded-3xl border border-border bg-card/90 p-10 text-center shadow-xl backdrop-blur">
        <h3 className="text-3xl font-semibold tracking-tight">Reflection</h3>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          Domus provided me with the opportunity to combine UX strategy and
          product design execution, transforming a simple idea into a validated
          MVP.
        </p>

        <p className="mt-5 text-base font-medium italic leading-relaxed text-foreground">
          This project strengthened my ability to design trust-based ecosystems
          and create scalable product foundations for emerging markets.
        </p>
      </div>
    </div>
  </Container>
</section>
    

      
    </>
  );
}
