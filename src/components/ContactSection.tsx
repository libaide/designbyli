"use client";

import ContactForm from "@/components/ContactForm";
import Noise from "@/components/Noise";
import RiseInOnView from "@/components/RiseInOnView";
import SectionHeader from "@/components/case-study/SectionHeader";

type ContactSectionProps = {
  id?: string;
  className?: string;
  title?: string;
};

export default function ContactSection({
  id = "contact",
  className = "bg-white text-black",
  title = "Let’s build something great",
}: ContactSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 ${className}`}
    >
      {/* Animated noise on desktop (must be direct child so it can measure parent) */}
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={35}
        className="absolute inset-0 z-0 hidden opacity-70 md:block"
      />

      {/* Static noise on mobile */}
      <div className="absolute inset-0 z-0 opacity-12 md:hidden static-noise" />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <RiseInOnView>
            <SectionHeader
              title={title}
              underline={{ show: false }}
            />

            <div className="mt-12 flex justify-center">
              <ContactForm />
            </div>
          </RiseInOnView>
        </div>
      </div>
    </section>
  );
}
