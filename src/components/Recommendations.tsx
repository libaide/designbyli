"use client";

import { useMemo, useState, useCallback } from "react";
import SectionHeader from "@/components/case-study/SectionHeader";
import { recommendations } from "@/data/recommendations";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";

const COLLAPSED_PX = 170;

function RecCard({
  name,
  title,
  text,
  expanded,
  onToggle,
}: {
  name: string;
  title: string;
  text: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <figure className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
      {/* Text area */}
      <div
        className="relative overflow-hidden"
        style={{
          maxHeight: expanded ? 999 : COLLAPSED_PX,
          transition: "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <blockquote className="text-base leading-relaxed text-[#c9c9d3] sm:text-lg">
          “{text}”
        </blockquote>

        {!expanded ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
        ) : null}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-4 text-sm font-medium underline underline-offset-4 text-white transition hover:text-white/90"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

      <figcaption className="mt-8">
        <div className="text-sm font-semibold text-white sm:text-base">{name}</div>
        <div className="mt-1 text-xs text-[#c9c9d3] sm:text-sm">{title}</div>
      </figcaption>
    </figure>
  );
}

type RecItem = {
  name: string;
  title: string;
  quote: string;
};

export default function Recommendations() {
  const items = useMemo<RecItem[]>(
    () =>
      recommendations.map((r) => ({
        name: r.name,
        title: r.title,
        quote: r.text,
      })),
    []
  );

  const [expandedByIndex, setExpandedByIndex] = useState<Record<number, boolean>>(
    {}
  );

  const toggleExpanded = useCallback((i: number) => {
    setExpandedByIndex((prev) => ({ ...prev, [i]: !prev[i] }));
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="bg-black text-[#d5d5e7]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <SectionHeader
          title="Recommendations"
          dark
          underline={{ show: false }}
          // description="What teammates and stakeholders have said about working with me."
          // descriptionClassName="text-white/70"
        />

        <div className="mt-12">
          <RecommendationsCarousel
            items={items}
            renderSlide={(rec, i) => (
              <RecCard
                name={rec.name}
                title={rec.title}
                text={rec.quote}
                expanded={!!expandedByIndex[i]}
                onToggle={() => toggleExpanded(i)}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}
