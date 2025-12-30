"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Section from "@/components/Section";
import { recommendations } from "@/data/recommendations";

const AUTOPLAY_MS = 7000;
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
  const clipRef = useRef<HTMLDivElement | null>(null);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    const el = clipRef.current;
    if (!el) return;

    const check = () => {
      const full = el.scrollHeight;
      setCanExpand(full > COLLAPSED_PX + 1);
    };

    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);

    return () => ro.disconnect();
  }, [text]);

  return (
    <figure className="w-full rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur-sm">
      {/* Text area */}
      <div
        ref={clipRef}
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
        {!expanded && canExpand && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card/90 to-transparent" />
        )}
      </div>

      {/* Read more / less */}
      {canExpand && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-4 text-sm font-medium underline underline-offset-4 text-foreground/90 hover:opacity-80 transition"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <figcaption className="mt-8">
        <div className="text-sm font-semibold sm:text-base">{name}</div>
        <div className="mt-1 text-xs text-muted sm:text-sm">{title}</div>
      </figcaption>
    </figure>
  );
}

export default function Recommendations() {
  const items = useMemo(() => recommendations, []);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Pausing logic (hover/focus/expanded)
  const [paused, setPaused] = useState(false);

  // Progress indicator
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  const go = (dir: -1 | 1) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return items.length - 1;
      if (next >= items.length) return 0;
      return next;
    });
  };

  const jumpTo = (i: number) => setIndex(i);

  // Collapse whenever the card changes
  useEffect(() => {
    setExpanded(false);
  }, [index]);

  const isPaused = paused || expanded || items.length <= 1;

  // RAF-driven progress bar (smooth, pauses on hover)
  useEffect(() => {
    // Reset progress when index changes
    setProgress(0);
    lastTRef.current = 0;

    if (isPaused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }

    const tick = (t: number) => {
      if (!lastTRef.current) lastTRef.current = t;
      const dt = t - lastTRef.current;
      lastTRef.current = t;

      setProgress((p) => {
        const next = p + dt / AUTOPLAY_MS;
        return next >= 1 ? 1 : next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [index, isPaused]);

  // When progress completes, advance (unless paused)
  useEffect(() => {
    if (isPaused) return;
    if (progress < 1) return;

    setIndex((prev) => (prev + 1) % items.length);
  }, [progress, isPaused, items.length]);

  if (items.length === 0) return null;

  return (
    <section className="py-16">
      <Section
        title="Recommendations"
        subtitle="What teammates and stakeholders have said about working with me."
      >
        <div className="mt-10 flex flex-col items-center">
          <div className="relative w-full max-w-3xl">
            {/* Card wrapper (pauses on hover/focus) */}
            <div
              key={index}
              className="animate-[recIn_450ms_ease-out]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <RecCard
                name={items[index].name}
                title={items[index].title}
                text={items[index].text}
                expanded={expanded}
                onToggle={() => setExpanded((v) => !v)}
              />
            </div>

            {/* Subtle progress indicator */}
            {items.length > 1 && (
              <div className="mt-5">
                <div className="h-1 w-full overflow-hidden rounded-full bg-border/40">
                  <div
                    className="h-full rounded-full bg-foreground/70 transition-[width] duration-100"
                    style={{ width: `${Math.min(progress * 100, 100)}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous recommendation"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition"
                  >
                    ←
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to recommendation ${i + 1}`}
                        onClick={() => jumpTo(i)}
                        className={[
                          "h-2 w-2 rounded-full transition",
                          i === index ? "bg-foreground" : "bg-muted/50",
                        ].join(" ")}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => go(1)}
                    aria-label="Next recommendation"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition"
                  >
                    →
                  </button>
                </div>

                {/* Small helper text (optional) */}
                <p className="mt-3 text-center text-xs text-muted">
                  {isPaused ? "Paused" : "Auto-advancing"}
                </p>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes recIn {
            from {
              opacity: 0;
              transform: translateY(10px);
              filter: blur(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
        `}</style>
      </Section>
    </section>
  );
}
