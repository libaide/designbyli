"use client";

import { useMemo, useState, useCallback } from "react";
import Section from "@/components/Section";
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
  // Note: we keep the “read more” behavior, but in the carousel we’ll control
  // expanded state from the parent.
  return (
    <figure className="w-full rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur-sm">
      {/* Text area */}
      <div
        className="relative overflow-hidden"
        style={{
          maxHeight: expanded ? 999 : COLLAPSED_PX,
          transition: "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <blockquote className="text-base leading-relaxed text-foreground/90 sm:text-lg">
          “{text}”
        </blockquote>

        {/* Fade at bottom when collapsed */}
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/90 to-transparent" />
        )}
      </div>

      {/* Read more / less */}
      <button
        type="button"
        onClick={onToggle}
        className="mt-4 text-sm font-medium underline underline-offset-4 text-foreground/90 hover:opacity-80 transition"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

      <figcaption className="mt-8">
        <div className="text-sm font-semibold sm:text-base">{name}</div>
        <div className="mt-1 text-xs text-muted sm:text-sm">{title}</div>
      </figcaption>
    </figure>
  );
}

export default function Recommendations() {
  const items = useMemo(() => recommendations, []);

  // Track expanded state per slide so each card can expand independently.
  const [expandedByIndex, setExpandedByIndex] = useState<Record<number, boolean>>(
    {}
  );

  const toggleExpanded = useCallback((i: number) => {
    setExpandedByIndex((prev) => ({ ...prev, [i]: !prev[i] }));
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="bg-[#000000]">
      <Section
        title="Recommendations"
        align="center"
      >
        <div className="mt-10">
          <RecommendationsCarousel
            items={items.map((r, i) => ({
              // Keep the carousel data minimal, but pass index so we can render custom slides.
              name: r.name,
              title: r.title,
              quote: r.text,
              _index: i as unknown as never, // internal only
            }))}
          
            renderSlide={(rec: any) => {
              const i = rec._index as number;
              return (
                <RecCard
                  name={rec.name}
                  title={rec.title}
                  text={rec.quote}
                  expanded={!!expandedByIndex[i]}
                  onToggle={() => toggleExpanded(i)}
                />
              );
            }}
          />
        </div>
      </Section>
    </section>
  );
}
