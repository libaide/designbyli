import Link from "next/link";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <Section title="Work" subtitle="Click a project to view the case study.">
      <div className="grid gap-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="block rounded-2xl border border-border bg-card p-5 transition hover:opacity-95"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>

            <p className="mt-2 text-m text-muted">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
