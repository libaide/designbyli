"use client";

import Link from "next/link";
import SectionHeader from "@/components/case-study/SectionHeader";
import { projects } from "@/data/projects";
import RiseInOnView from "@/components/RiseInOnView";

export default function WorkPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header rise-in */}
        <RiseInOnView>
          <SectionHeader
            title="Work"
            description="Click a project to view the case study."
            titleClassName="text-white font-bold"
            descriptionClassName="text-gray-300 text-base font-regular leading-relaxed"
            underline={{ show: false, className: "bg-[#E45027]" }}
            wrapperClassName="text-center mx-0 max-w-none"
          />
        </RiseInOnView>

        {/* One-column list (each card is a row) */}
        <RiseInOnView
          staggerChildren={true}
          staggerMs={90}
          className="mt-12 grid gap-4"
        >
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group block rounded-2xl border border-border bg-card p-5 transition hover:opacity-95"
            >
              {/* Card: 2 inline containers; stack on small screens */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Left: title + description */}
                <div className="w-full sm:max-w-[640px]">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-base font-light text-gray-300 line-clamp-3">
                    {p.description}
                  </p>
                </div>

                {/* Right: tags (top-aligned with title); moves below on small */}
                <div className="flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </RiseInOnView>
      </div>
    </section>
  );
}