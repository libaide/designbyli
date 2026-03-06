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
    <figure
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onToggle();
      }}
      className="
        group
        w-full cursor-pointer rounded-3xl border border-white/10 p-8
        backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:border-white hover:pt-9 hover:pb-7
        focus-visible:ring-2 focus-visible:ring-white/60
      "
    >
      {/* Text area */}
      <div
        className="relative overflow-hidden"
        style={{
          maxHeight: expanded ? 999 : COLLAPSED_PX,
          transition: "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <blockquote className="text-base font-light leading-relaxed text-[#c9c9d3] sm:text-lg">
          “{text}”
        </blockquote>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
        )}
      </div>

      {/* Subtle Read More */}
      <div className="mt-4 flex items-center gap-2 text-sm text-white/60 transition group-hover:text-white">
        <span>{expanded ? "Show less" : "Read more"}</span>

        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </div>

      <figcaption className="mt-8">
        <div className="text-sm font-semibold text-white sm:text-base">
          {name}
        </div>
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
      <div className="py-16 sm:py-16 md:py-32 lg:py-36 xl:py-44">
    <div className="mx-auto max-w-7xl px-4">
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
      </div>
  );
}
