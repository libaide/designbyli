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




      {/* UI Previews */}
      <section className="py-14">
        <Container>
          <h3 className="text-4xl font-semibold tracking-tight text-center">
            UI Previews
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { src: "/case-studies/operator/ui-preview-1.png", alt: "UI preview 1" },
              { src: "/case-studies/operator/ui-preview-2.png", alt: "UI preview 2" },
              { src: "/case-studies/operator/ui-preview-3.png", alt: "UI preview 3" },
              { src: "/case-studies/operator/ui-preview-4.png", alt: "UI preview 4" },
            ].map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="px-5 pt-5">
                <p className="text-sm font-semibold">Chrome extension in action</p>
                <p className="mt-1 text-sm text-muted">
                  Quick demo of the Assist extension inside the agent workflow.
                </p>
              </div>

              <div className="mt-4 max-w-100 mx-auto">
                <img
                  src="/case-studies/operator/extension-demo.gif"
                  alt="Chrome extension demo animation"
                  className="block w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { src: "/case-studies/operator/ui-preview-1.png", alt: "UI preview 1" },
              { src: "/case-studies/operator/ui-preview-2.png", alt: "UI preview 2" },
            ].map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            ))}
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
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        <Container>
          <div className="relative z-10">
            <h3 className="text-center text-5xl font-semibold tracking-tight text-white">
              Impact And Results
            </h3>

            <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-lg text-white/80">
                  Operator improved usability and adoption across the company’s
                  internal tools.
                </p>

                <ul className="mt-10 space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                      ✓
                    </span>
                    <p className="text-base text-white/90">
                      <span className="font-semibold text-white">Adopted by 500+</span>{" "}
                      agents across teams
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                      ✓
                    </span>
                    <p className="text-base text-white/90">
                      Unified design language across{" "}
                      <span className="font-semibold text-white">3 applications</span>{" "}
                      and an admin panel
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                      ✓
                    </span>
                    <p className="text-base text-white/90">
                      Positive feedback from early users—agents and paying
                      customers—highlighting clarity and visual consistency
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex items-start">
                <div className="border-l border-white/30 pl-6">
                  <p className="text-lg leading-relaxed text-white/85">
                    The success and maturity of Operator’s product direction
                    contributed to Crescendo’s interest in PartnerHero during the
                    acquisition process, demonstrating the value of scalable
                    internal tooling and thoughtful product design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reflection */}
      <section className="relative overflow-hidden py-24">
        <Container>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-center text-5xl font-semibold tracking-tight text-white">
              Reflection
            </h3>

            <div className="mt-5 space-y-6 text-sm leading-relaxed text-muted">
              <p>
                Through my experience with Operator, I gained valuable insights into implementing
                design strategies across multiple teams and products while maintaining consistency,
                transparency, and purpose.
              </p>
              <p>
                As features regularly changed, objectives transformed, and deadlines shifted, I was
                motivated to develop greater flexibility, better communication skills, and a more
                practical design methodology.
              </p>
              <p>
                However, the most fulfilling aspect went beyond the process itself; it was observing
                teams thrive using the exact tools we had created.
              </p>

              <h4 className="text-center text-3xl font-semibold tracking-tight text-white">
                ...exceptional design goes beyond visual interfaces.
              </h4>

              <p>
                Exceptional design involves empowering individuals to perform at their highest level
                through clear communication, understanding, and flexible systems that evolve
                alongside their users.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
