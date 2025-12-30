"use client";

import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("./PixelBlast"), { ssr: false });

export default function HeroPixelBlastBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <PixelBlast
        eventSourceId="hero"
        variant="circle"
        pixelSize={6}
        color="#707070"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.55}
        rippleThickness={0.14}
        rippleIntensityScale={2.2}
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
