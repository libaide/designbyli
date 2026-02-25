import type React from "react";
import Container from "@/components/Container";
import CaseStudyHeroSplit from "@/components/CaseStudyHeroSplit";

export type Stat = {
  label: string;
  value: string;
};

type Props = {
  logoSrc: string;
  logoAlt: string;
  illustrationSrc: string;
  illustrationAlt: string;
  summary: React.ReactNode;

  // ✅ Accept readonly arrays (works with `as const`)
  stats?: readonly Stat[];
  afterHero?: React.ReactNode;

  logoSize?: "sm" | "md" | "lg";
  logoClassName?: string;

  className?: string;
};

export default function CaseStudyTopSection({
  logoSrc,
  logoAlt,
  illustrationSrc,
  illustrationAlt,
  summary,
  stats = [], // ✅ safe default
  afterHero,
  logoSize = "md",
  logoClassName,
  className,
}: Props) {
  return (
    <div className={className}>
      <CaseStudyHeroSplit
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        illustrationSrc={illustrationSrc}
        illustrationAlt={illustrationAlt}
        summary={summary}
        logoSize={logoSize}
        logoClassName={logoClassName}
      />

      <Container>
        {afterHero ? <div className="mt-14">{afterHero}</div> : null}

        {stats.length ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold text-gray-400">{s.label}</p>
                <p className="mt-1 text-base font-normal text-gray-500">{s.value}</p>
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
}