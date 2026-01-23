"use client";

import Link from "next/link";
import SectionHeader from "@/components/case-study/SectionHeader";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeader
          title="Work"
          description="Click a project to view the case study."
          titleClassName="text-white font-bold"
          descriptionClassName="text-white/70 text-base font-regular leading-relaxed"
          underline={{ show: false, className: "bg-[#E45027]" }}
          wrapperClassName="text-center mx-0 max-w-none"
        />

        <div className="mt-12 grid gap-4">
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
      </div>
    </section>
  );
}
