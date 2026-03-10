"use client";

import { useCallback, useEffect, useRef } from "react";
import FeaturedWorkAnimated from "@/components/FeaturedWorkAnimated";
import Recommendations from "@/components/Recommendations";

export default function WorkAndRecommendationsSection() {
  const areaRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Start hidden (on refresh / no mouse move yet)
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    bg.style.setProperty("--reveal-x", `-999px`);
    bg.style.setProperty("--reveal-y", `-999px`);
  }, []);

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
      className="relative overflow-hidden isolate py-24 sm:py-16 md:py-32 lg:py-36 xl:py-44"
    >
      {/* Base layer */}
      <div aria-hidden="true" className="absolute inset-0 bg-black" />

      {/* BG – always visible on mobile */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[url('/featured-work-bg.png')]
          bg-contain bg-center bg-repeat
          opacity-50
          md:hidden
        "
      />

      {/* BG – cursor reveal on desktop */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          hidden md:block
          cursor-reveal
          bg-[url('/featured-work-bg.png')]
          bg-size-[1000px] bg-center bg-repeat
          opacity-80
          transform-gpu will-change-transform
        "
        style={{ ["--reveal-radius" as any]: "320px" }}
      />

      {/* Foreground */}
      <div className="relative z-10">
        {/* Featured Work */}
        <FeaturedWorkAnimated />

        {/* Recommendations (same section/bg) */}
        <Recommendations />
      </div>
    </section>
  );
}