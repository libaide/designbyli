import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section
      title="Hi! I'm Li"
      align="center"
    >
      <div className="prose max-w-3xl mx-auto">
        <p className="text-white/70">
          I’m a UX/UI designer with over six years of experience designing digital products that are clear, functional, and thoughtfully crafted. I’ve spent most of my career working on complex internal tools and SaaS platforms, where usability, consistency, and attention to detail really matter.</p>
<p className="text-white/70 mt-4">
I enjoy taking messy problems and turning them into clean, intuitive experiences. My approach is very hands-on and system driven, balancing visual design with real user needs and business goals. I care a lot about clarity and making products feel easy to use without oversimplifying them.</p>
<p className="text-white/70 mt-4">
Alongside product design, I also work on website design and branding, helping ideas take shape visually and structurally. I like building things that can grow over time, whether that means scalable design systems or flexible layouts that adapt as a business evolves.</p>
<p className="text-white/70 mt-4">
Outside of design, I’m deeply interested in creativity and technology, always learning and experimenting with new tools and ideas. That curiosity shapes how I work and keeps me motivated to design experiences that feel both useful and human.
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
