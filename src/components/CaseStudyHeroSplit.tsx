import type React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  logoSrc: string;
  logoAlt: string;
  summary: React.ReactNode;
  illustrationSrc: string;
  illustrationAlt: string;

  logoSize?: "sm" | "md" | "lg";
  logoClassName?: string;
};

export default function CaseStudyHeroSplit({
  logoSrc,
  logoAlt,
  summary,
  illustrationSrc,
  illustrationAlt,
  logoSize = "md",
  logoClassName,
}: Props) {
  const logoSizeClasses = {
    sm: "h-8 sm:h-9",
    md: "h-9 sm:h-11",
    lg: "h-12 sm:h-14",
  } as const;

  return (
    <section className="bg-white pb-8 pt-32 sm:pt-32 lg:pt-44 max-w-7xl mx-auto px-5 sm:px-10">
    {/* Full-bleed layout */}
    <div className="grid items-center gap-12 lg:gap-12 lg:grid-cols-[30%_70%]">
      {/* LEFT */}
      <div className="flex items-center">
        {/* This “fake container” aligns the content to your 7xl grid on the left only */}
        <div className="w-full">
          <div className="mx-auto max-w-lg">
            <div className="max-w-xl lg:max-w-[560px]">
              <img
                src={logoSrc}
                alt={logoAlt}
                className={clsx(
                  "mx-auto block w-auto lg:mx-0",
                  logoSizeClasses[logoSize],
                  logoClassName
                )}
                draggable={false}
              />

              <div className="mt-8 space-y-6 text-base leading-relaxed text-[#474747]/80">
                {summary}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[72vh]">
        <Image
          src={illustrationSrc}
          alt={illustrationAlt}
          fill
          className="object-contain"
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
    </div>
  </section>
  );
}