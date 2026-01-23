import Container from "@/components/Container";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  logoSrc: string;
  logoAlt: string;
  summary: React.ReactNode;
  illustrationSrc: string;
  illustrationAlt: string;

  /** Optional: lets you bump small logos (e.g. Domus/Humanize) without affecting others */
  logoSize?: "sm" | "md" | "lg";
};

export default function CaseStudyHeroSplit({
  logoSrc,
  logoAlt,
  summary,
  illustrationSrc,
  illustrationAlt,
  logoSize = "md",
}: Props) {
  const logoSizeClasses = {
    sm: "h-10 sm:h-11",
    md: "h-12 sm:h-13",
    lg: "h-14 sm:h-44",
  } as const;

  return (
    <section className="bg-white pt-16 pb-8 sm:pt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left */}
<div className="lg:col-span-5 lg:text-left">
  <img
    src={logoSrc}
    alt={logoAlt}
    className={clsx("mx-auto lg:mx-auto block w-auto", logoSizeClasses[logoSize])}
    draggable={false}
  />

  <div className="mt-8 space-y-6 text-base leading-relaxed text-[#474747]/80">
    {summary}
  </div>
</div>





          {/* Right */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden">
              <div className="relative aspect-[16/10]">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
