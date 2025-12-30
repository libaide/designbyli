"use client";

import dynamic from "next/dynamic";

const AntigravityCanvas = dynamic(
  () => import("./AntigravityCanvas"),
  { ssr: false }
);

export default function HeroAntigravityBg() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Canvas */}
      <div className="absolute inset-0">
        <AntigravityCanvas
  eventSourceId="hero"
  fadeIn={true}
  fadeInDelay={0.6}
  fadeInDuration={2.8}
  fadeInEase={2.0}
  // keep your existing antigravity props here:
  count={300}
  magnetRadius={6}
  ringRadius={7}
  waveSpeed={0.4}
  waveAmplitude={1}
  particleSize={1.5}
  lerpSpeed={0.05}
  color="#FF9FFC"
  autoAnimate={true}
  particleVariance={1}
  />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_60%_at_50%_0%,rgba(250,203,198,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
    </div>
  );
}
