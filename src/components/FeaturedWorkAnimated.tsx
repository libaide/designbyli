"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { projects } from "@/data/projects";
import Button from "@/components/Button";
import SectionHeader from "@/components/case-study/SectionHeader";
import RiseInOnView from "./RiseInOnView";

function useInViewStaggered(count: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean[]>(() => Array(count).fill(false));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(idx)) return;

          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [count]);

  return { containerRef, visible };
}

const SECTION_SHELL = "mx-auto max-w-7xl px-4";
const CARD_GRID = "mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3";
const CARD_FRAME =
  "group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 ease-out hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 will-change-transform transition-[transform,opacity] duration-700 ease-out";
const CARD_INNER = "flex h-full flex-col p-6 sm:p-7 transition-transform duration-300 ease-out group-hover:-translate-y-1";

export default function FeaturedWorkAnimated() {
  const featuredSlugs = useMemo(() => ["operator", "domus", "humanize"], []);
  const featured = useMemo(
    () =>
      featuredSlugs
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter(Boolean) as typeof projects,
    [featuredSlugs]
  );

  const { containerRef, visible } = useInViewStaggered(featured.length);

  return (
    <section>
      <div className="relative z-10">
        <div className={SECTION_SHELL}>
          <RiseInOnView staggerChildren={true} staggerMs={90}>
            <SectionHeader
              title="Featured Case Studies"
              dark
              underline={{ show: false }}
            />

            <div ref={containerRef} className={CARD_GRID}>
              {featured.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  data-card
                  data-index={i}
                  className={[
                    CARD_FRAME,
                    visible[i] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                  ].join(" ")}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className={CARD_INNER}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-muted/30">
                      <Image
                        src={p.cover}
                        alt={`${p.title} cover`}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={p.slug === "operator"}
                      />
                    </div>

                    <h3 className="mt-6 text-3xl font-normal tracking-normal text-white">
                      {p.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 px-4 py-1 text-sm text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 max-w-[40ch] text-base font-light text-white/70">
                      {p.description}
                    </p>

                    <div className="mt-auto flex justify-end pt-6">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
                        <span>Read case study</span>
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h12" />
                          <path d="M13 6l6 6-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/work">View all case studies</Link>
              </Button>
            </div>
          </RiseInOnView>
        </div>
      </div>
    </section>
  );
}