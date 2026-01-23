"use client";

import React from "react";
import Container from "@/components/Container";
import CaseStudyHeroSplit from "@/components/CaseStudyHeroSplit";
import RiseInOnView from "@/components/RiseInOnView";

type Stat = { label: string; value: string };

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function StatCard({ label, value }: Stat) {
  return (
    <div className="h-full rounded-2xl border bg-[#EFEFEF] px-5 py-5">
      <p className="text-xs font-medium text-black/50">{label}</p>
      <p className="mt-1 text-sm font-semibold text-black/80">{value}</p>
    </div>
  );
}

export default function CaseStudyTopSection({
  className = "bg-white",
  logoSrc,
  logoAlt,
  logoSize,
  illustrationSrc,
  illustrationAlt,
  summary,
  stats,
  afterHero,
}: {
  className?: string;

  logoSrc: string;
  logoAlt: string;
  logoSize?: "sm" | "md" | "lg";
  illustrationSrc: string;
  illustrationAlt: string;
  summary: React.ReactNode;

  stats: Stat[];
  afterHero?: React.ReactNode;
}) {
  return (
    <section className={className}>
      <RiseInOnView>
        <>
          <CaseStudyHeroSplit
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            logoSize={logoSize}
            illustrationSrc={illustrationSrc}
            illustrationAlt={illustrationAlt}
            summary={summary}
          />

          <Container>
            {afterHero ? <div className="mt-16">{afterHero}</div> : null}

            <div
              className={cx(
                "mt-16 grid gap-4 pb-16",
                "sm:grid-cols-2 lg:grid-cols-3",
                "items-stretch"
              )}
            >
              {stats.map((s) => (
                <StatCard key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </Container>
        </>
      </RiseInOnView>
    </section>
  );
}
