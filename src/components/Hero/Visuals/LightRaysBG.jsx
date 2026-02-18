"use client";

import dynamic from "next/dynamic";

// Dynamically import the actual LightRays component and name it `DynamicLightRays`
const DynamicLightRays = dynamic(() => import("./LightRays"), { ssr: false });

export default function LightRaysBG() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Render the dynamically imported component here */}
      <DynamicLightRays
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