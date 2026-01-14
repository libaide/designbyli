import Container from "@/components/Container";
import Image from "next/image";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#212121] p-4 shadow-sm">
      <p className="text-xs font-medium text-white/50">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white/90">{value}</p>
    </div>
  );
}


export default function OperatorCaseStudy() {
  return (
    <>
      {/* Overview — Stats */}
<section className="bg-black py-20">
  <Container>
    <div className="grid gap-3 sm:grid-cols-3">
      <StatCard label="Project Type" value="Internal SaaS Platform" />
      <StatCard label="Role" value="UX/UI Designer" />
      <StatCard label="Timeline" value="2023–2024" />
      <StatCard label="Tools" value="Figma, Material UI, Jira" />
      <StatCard
        label="Scope"
        value="Research, Wireframing, Prototyping, Visual Design"
      />
      <StatCard label="Company" value="PartnerHero (now Crescendo)" />
    </div>
  </Container>
</section>

{/* Overview — Operator description */}
<section className="bg-white py-20">
  <Container>
    {/* Operator header */}
<div className="mx-auto max-w-3xl text-center">
  <img
    src="/case-studies/operator/Operator-logo.svg"
    alt="Operator logo"
    className="mx-auto h-10 w-auto"
    draggable={false}
  />

  <p className="mt-6 text-base leading-relaxed text-black/75">
    Operator is PartnerHero’s internal platform that unified multiple support operations
    tools into one product suite. It helps agents, managers, and admins work faster with
    consistent workflows, shared data, and a cohesive UI across applications.
  </p>

  <p className="mt-10 text-base leading-relaxed text-black/75">
    I led UX and UI design for{" "}
    <span className="font-semibold text-black/90">Assist</span>,{" "}
    <span className="font-semibold text-black/90">Quality</span>, and the{" "}
    <span className="font-semibold text-black/90">Operator</span> admin panel, collaborating
    closely with other designers, product managers, developers, and stakeholders.
  </p>
</div>


    {/* 3 core apps */}
    <div className="mt-14 grid gap-10 md:grid-cols-3">
      {[
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
      ].map((app) => (
        <div key={app.title} className="space-y-6">
          {/* pill header (logo only) */}
          <div className="flex items-center justify-center rounded-2xl bg-[#EFEFEF] px-6 py-5">
  <img
    src={app.logo}
    alt={`${app.title} logo`}
    className="h-[40px] w-auto"
    draggable={false}
  />
</div>
          <p className="max-w-[42ch] text-base leading-relaxed text-black/75">
            {app.body}
          </p>
        </div>
      ))}
    </div>
  </Container>
</section>



      {/* Problem & Context */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-purple-800/80" />

        <div className="relative mx-auto w-full max-w-5xl px-4">
          <div className="relative z-10 min-h-[620px] py-20">
            <div className="max-w-xl">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Problem & Context
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-white/80">
                Customer support teams previously relied on fragmented tools,
                inconsistent workflows, and manual processes, which led to
                inefficiencies and rising operational costs. After several
                proof-of-concept tools proved their value, PartnerHero decided to fully
                design and develop a centralized platform—one that would empower every
                team across the organization.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/80">
                My mission was to transform fragmented internal tools into an
                integrated, scalable product suite, ensuring that every feature
                enhanced efficiency, clarity, and agent satisfaction.
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

      {/* Research & Insights */}
      <section className="py-20">
        <Container>
          <h3 className="text-4xl font-semibold tracking-tight text-center">
            Research & Insights
          </h3>

          {/* Current State Analysis */}
          <div className="mt-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <h4 className="text-2xl font-medium tracking-tight">
                  Current State Analysis
                </h4>

                <div className="mt-5 space-y-6 text-sm leading-relaxed text-muted">
                  <p>
                    Customer support teams previously relied on fragmented tools,
                    inconsistent workflows, and manual processes, which led to
                    inefficiencies and rising operational costs. After several
                    proof-of-concept tools proved their value, PartnerHero decided to
                    fully design and develop a centralized platform—one that would empower
                    every team across the organization.
                  </p>

                  <p>
                    My mission was to transform fragmented internal tools into an
                    integrated, scalable product suite, ensuring that every feature
                    enhanced efficiency, clarity, and agent satisfaction.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      src: "/case-studies/operator/current-state-analysis-1.png",
                      alt: "Current state analysis artifact 1",
                    },
                    {
                      src: "/case-studies/operator/current-state-analysis-2.png",
                      alt: "Current state analysis artifact 2",
                    },
                    {
                      src: "/case-studies/operator/current-state-analysis-3.png",
                      alt: "Current state analysis artifact 3",
                    },
                    {
                      src: "/case-studies/operator/current-state-analysis-4.png",
                      alt: "Current state analysis artifact 4",
                    },
                  ].map((img) => (
                    <div
                      key={img.src}
                      className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interviews */}
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-black">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/40" />

              <div className="relative grid gap-10 p-10 lg:grid-cols-2 lg:items-center">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/case-studies/operator/interviews.png"
                        alt="Interview insights and qualitative feedback visualization"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-w-xl">
                  <h4 className="text-3xl font-medium tracking-tight text-white">
                    Interviews
                  </h4>
                  <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/80">
                    <p>
                      To ensure Operator effectively addressed the challenges faced by
                      customer support agents, I planned and led a series of user
                      interviews with agents and managers who interacted daily with
                      Assist and Quality. My objective was to identify pain points,
                      usability concerns, and improvement opportunities in the tools.
                    </p>

                    <p>
                      A diverse group of agents and managers across different teams and
                      experience levels were selected. We would have:
                    </p>

                    <ul className="ml-4 list-disc space-y-2">
                      <li>One-on-one video call interviews</li>
                      <li>Open-ended questions to encourage detailed feedback</li>
                      <li>Live walkthroughs of the tools to observe agent workflows</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact */}
          <section className="py-14">
            <h4 className="text-3xl font-medium tracking-tight text-center">
              Impact of Research
            </h4>
            <p className="mt-3 text-center text-sm text-muted">
              These insights directly influenced feature updates and UI improvements, making the tools more intuitive and valuable for agents.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-semibold">Agent experience</h4>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-2">
                  <li>The Chrome extension UI is unclear</li>
                  <li>Management through the web-app is difficult, and so is reviewing data.</li>
                  <li>Some agents felt the AI-generated responses were too generic and needed more customization.</li>
                  <li>Trust in AI suggestions varied based on agent experience level.</li>
                  <li>Agents wanted a way to quickly edit AI responses before sending.</li>
                  <li>It is common for agents to prefer the use of macros over the tool.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-semibold">Quality & ops</h4>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-2">
                  <li>Agents had difficulty understanding how to navigate and score in the Chrome extension</li>
                  <li>Managers had difficulty understanding how to create rubrics</li>
                  <li>Reviewing and comparing data felt slow</li>
                  <li>Managers were asking for different scoring methods, capabilities, and requirements</li>
                  <li>Lack of actionable feedback for agents being scored</li>
                </ul>
              </div>
            </div>
          </section>
        </Container>
      </section>

      {/* Ideation & Design Process */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/70" />

        <Container>
          <div className="relative">
            <h3 className="text-center text-4xl font-semibold tracking-tight text-white">
              Ideation & Design Process
            </h3>

            <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8">
                <div className="grid gap-4 rounded-3xl">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src="/case-studies/operator/ideation-collage1.png"
                          alt="Ideation artifact 1"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 34vw, 100vw"
                        />
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src="/case-studies/operator/ideation-collage2.png"
                          alt="Ideation artifact 2"
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 34vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="relative aspect-[21/9]">
                      <Image
                        src="/case-studies/operator/ideation-collage3.png"
                        alt="Ideation artifact 3"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 70vw, 100vw"
                      />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="relative aspect-[21/9]">
                      <Image
                        src="/case-studies/operator/ideation-collage4.png"
                        alt="Ideation artifact 4"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 70vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 lg:pl-6">
                <div className="text-sm leading-relaxed text-white/80 space-y-6">
                  <p>
                    After reviewing insights gathered during the research process and
                    incorporating feedback from project managers, stakeholders, and
                    developers, we aligned on a structured vision for the software suite.
                    We openly discussed what an ideal version of the product would look like
                    and developed a clear plan for the MVP.
                  </p>

                  <p>
                    With the roadmap in place, we began wireframing and designing the
                    interfaces section by section. To ensure a consistent and cohesive
                    experience across all applications within the platform, we chose
                    Material UI as our design framework. For the MVP, customization of
                    the design system was kept minimal to prioritize functionality and
                    speed of development.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/40" />

                <div className="relative p-8 lg:p-10">
                  <h4 className="text-center text-2xl font-semibold text-white">
                    Collaboration & Agile Integration
                  </h4>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-transparent/10 bg-transparent">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/case-studies/operator/ideation-collab.svg"
                        alt="Collaboration and agile integration"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 70vw, 100vw"
                      />
                    </div>
                  </div>

                  <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/80">
                    Operator was developed within a Scrum-based engineering process.
                    Design, product, and development worked as a single, cross-functional
                    team. I integrated deeply into this workflow by participating in
                    sprint planning, daily standups, and iterative design reviews. I
                    also made sure decisions were validated early and consistently
                    aligned with our development resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* UI Previews */}
      <section className="py-20">
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
      <section className="relative overflow-hidden py-20">
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
      <section className="relative overflow-hidden py-20">
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
