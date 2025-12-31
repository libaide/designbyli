"use client";

import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("./PixelBlast"), { ssr: false });

export default function HeroPixelBlastBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <PixelBlast
        eventSourceId="hero"
        variant="circle"
        pixelSize={4}
        color="#8F8F8F"
        patternScale={5}
        patternDensity={1.5}
        pixelSizeJitter={1.8}
        enableRipples
        rippleSpeed={0.55}
        rippleThickness={0.14}
        rippleIntensityScale={2.8}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
        burstOnMoveStart
        moveStopMs={140}
        waveOnMove={false}
      />
    </div>
  );
}
