// app/work/[slug]/page.tsx
import Container from "@/components/Container";
import { projects } from "@/data/projects";

import OperatorCaseStudy from "@/components/case-study/OperatorCaseStudy";
import DomusCaseStudy from "@/components/case-study/DomusCaseStudy";
import HumanizeCaseStudy from "@/components/case-study/HumanizeCaseStudy";
import HemaSyncCaseStudy from "@/components/case-study/HemaSyncCaseStudy";
import HoffmanLensCaseStudy from "@/components/case-study/HoffmanLensCaseStudy";
import ProperlyCaseStudy from "@/components/case-study/ProperlyCaseStudy";
import SkinStudioCaseStudy from "@/components/case-study/SkinStudioCaseStudy";

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
      {slug === "operator" && <OperatorCaseStudy />}
      {slug === "domus" && <DomusCaseStudy />}
      {slug === "humanize" && <HumanizeCaseStudy />}
      {slug === "properly" && <ProperlyCaseStudy />}
      {slug === "hema-sync" && <HemaSyncCaseStudy />}
      {slug === "hoffman-lens" && <HoffmanLensCaseStudy />}
      {slug === "skin-studio" && <SkinStudioCaseStudy />}

      {slug !== "operator" &&
        slug !== "domus" &&
        slug !== "humanize" &&
        slug !== "properly" &&
        slug !== "hema-sync" &&
        slug !== "skin-studio" &&
        slug !== "hoffman-lens" && (
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
        )}
    </div>
  );
}