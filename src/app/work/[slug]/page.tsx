import Container from "@/components/Container";
import { projects } from "@/data/projects";
import CaseHero from "@/components/case-study/CaseHero";

import OperatorCaseStudy from "@/components/case-study/OperatorCaseStudy";
import DomusCaseStudy from "@/components/case-study/DomusCaseStudy";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container>
        <div className="py-16">
          <h1 className="text-2xl font-semibold">Not found</h1>
          <p className="mt-2 text-muted">That case study doesn’t exist yet.</p>
        </div>
      </Container>
    );
  }

  return (
    <div className="pb-20">
      <CaseHero
        title={project.title}
        subtitle={project.description}
        meta="Case Study"
        coverSrc={project.cover}
        priority
        height="lg"
        align="bottom"
      />

      {slug === "operator" ? <OperatorCaseStudy /> : null}
      {slug === "domus" ? <DomusCaseStudy /> : null}

      {slug !== "operator" && slug !== "domus" ? (
        <section className="py-12">
          <Container>
            <h3 className="text-3xl font-semibold tracking-tight">
              Case study in progress
            </h3>
            <p className="mt-2 text-sm text-muted">
              This case study is being built next.
            </p>
          </Container>
        </section>
      ) : null}
    </div>
  );
}
