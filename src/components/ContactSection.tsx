"use client";

import ContactForm from "@/components/ContactForm";
import Noise from "@/components/Noise";
import RiseInOnView from "@/components/RiseInOnView";
import ColorBends from "@/components/ColorBends";

type ContactSectionProps = {
  id?: string;
  className?: string;
};

export default function ContactSection({
  id = "contact",
  className = "bg-white text-black",
}: ContactSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 sm:py-44 ${className}`}
    >

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <ColorBends
        className="absolute inset-0 z-0"
        rotation={-45}
        speed={0.25}
        colors={["#3300ff", "#00aaff", "#00ff88"]}
        transparent={false}
        autoRotate={0}
        scale={1.0}
        frequency={1.0}
        warpStrength={1.1}
        mouseInfluence={0}
        parallax={1.0}
        noise={0.1}
      />
        </div>

      {/* Animated noise on desktop (must be direct child so it can measure parent)
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={35}
        className="absolute inset-0 z-0 hidden opacity-70 md:block"
      />

      {/* Static noise on mobile 
      <div className="absolute inset-0 z-0 opacity-12 md:hidden static-noise" /> */}

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <RiseInOnView>
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </RiseInOnView>
        </div>
      </div>
    </section>
  );
}