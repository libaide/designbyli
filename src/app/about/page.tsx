import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section
      title="About"
      subtitle="A quick bio. Replace with your real story, highlights, and tools."
    >
      <div className="prose max-w-none">
        <p className="text-muted">
          I’m a UX/UI and product designer focused on creating clear, functional, and visually refined digital experiences. My work sits at the intersection of design, systems thinking, and real-world constraints—from complex internal tools to customer-facing products and marketing websites.

I have experience designing internal support platforms, SaaS tools, marketplaces, and web experiences, often working closely with product managers, engineers, and stakeholders to turn ambiguity into structured, usable solutions. I care deeply about reducing cognitive load, improving workflows, and designing interfaces that feel intuitive without being simplistic.

Beyond design, I’m comfortable working close to implementation. I’ve collaborated on front-end development, designed and shipped production-ready UI systems, and led projects involving custom integrations, including payment flows and operational tooling. This technical proximity helps me design solutions that are not only elegant, but also realistic and scalable.

I’m currently based in Honduras, working on both professional and independent projects, and continuously refining my craft through hands-on work, experimentation, and learning. I value clarity, precision, and curiosity, and I approach every project with the goal of making digital products easier to use, easier to maintain, and more human.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-semibold">Strengths</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              <li>UX for complex workflows</li>
              <li>Design systems</li>
              <li>Prototyping + handoff</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-semibold">Tools</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              <li>Figma</li>
              <li>Next.js</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
