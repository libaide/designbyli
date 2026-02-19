"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const DynamicLightRays = dynamic(() => import("./LightRays"), { ssr: false });

export default function LightRaysBG() {
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      const el = wrapperRef.current;
      if (!hero || !el) return;

      const r = hero.getBoundingClientRect();

      // If hero is fully offscreen, pause and hide rays
      const fullyOff =
        r.bottom <= 0 || r.top >= window.innerHeight || r.width <= 0 || r.height <= 0;

      setPaused(fullyOff);

      // Clip the rays to ONLY the visible portion of the hero
      const top = Math.max(0, r.top);
      const right = Math.min(window.innerWidth, r.right);
      const bottom = Math.min(window.innerHeight, r.bottom);
      const left = Math.max(0, r.left);

      // If hero isn't visible at all, clip to nothing
      if (bottom <= top || right <= left) {
        el.style.clipPath = "inset(100% 0 0 0)";
        el.style.opacity = "0";
        return;
      }

      el.style.opacity = "1";
      el.style.clipPath = `inset(${top}px ${window.innerWidth - right}px ${window.innerHeight - bottom}px ${left}px)`;
    };

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 -z-10 pointer-events-none isolate transform-gpu will-change-transform transition-opacity duration-200"
      style={{
        // default to hidden until first update runs
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
      }}
    >
      <DynamicLightRays
        paused={paused}
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
    </div>
  );
}
