"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import Image from "next/image";
import Button from "@/components/Button";

function useInViewStaggered(count: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean[]>(() =>
    Array(count).fill(false)
  );

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

  // Full Section reveal tracking
  const areaRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const area = areaRef.current;
    const bg = bgRef.current;
    if (!area || !bg) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = area.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      bg.style.setProperty("--reveal-x", `${x}px`);
      bg.style.setProperty("--reveal-y", `${y}px`);
    });
  }, []);

  const onPointerLeave = useCallback(() => {
    const bg = bgRef.current;
    if (!bg) return;

    bg.style.setProperty("--reveal-x", `-999px`);
    bg.style.setProperty("--reveal-y", `-999px`);
  }, []);

  return (
    <section
      id="featured-work"
      ref={areaRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative overflow-hidden rounded-3xl py-16"
    >
      {/* BG – always visible on mobile */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 pointer-events-none
          bg-[url('/featured-work-bg.png')]
          bg-auto bg-center bg-repeat
          opacity-25
          md:hidden
        "
      />

      {/* BG – cursor reveal on desktop */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="
          absolute inset-0 pointer-events-none
          hidden md:block
          cursor-reveal
          bg-[url('/featured-work-bg.png')]
          bg-cover bg-center bg-no-repeat
          opacity-60
        "
        style={{ ["--reveal-radius" as any]: "220px" }}
      />

      {/* Foreground content */}
      <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14">
        <Section
          title="Featured work"
          subtitle="Selected projects and case studies."
          align="center"
        >
          <div
            ref={containerRef}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                data-card
                data-index={i}
                className={[
                  "group block will-change-transform transition-[transform,opacity,filter] duration-700 ease-out",
                  visible[i]
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-6 blur-[6px]",
                ].join(" ")}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted/30">
                  <Image
                    src={p.cover}
                    alt={`${p.title} cover`}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-95"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={p.slug === "operator"}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-4 py-1 text-sm text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-m text-muted max-w-[40ch]">
                  {p.description}
                </p>

                <span className="mt-4 inline-block text-sm underline underline-offset-4">
                  View
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/work">
              <Button>View more projects</Button>
            </Link>
          </div>
        </Section>
      </div>
    </section>
  );
}
