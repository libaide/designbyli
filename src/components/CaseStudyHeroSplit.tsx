import Container from "@/components/Container";
import Image from "next/image";

type Props = {
  logoSrc: string;
  logoAlt: string;
  summary: React.ReactNode;
  illustrationSrc: string;
  illustrationAlt: string;
};

export default function CaseStudyHeroSplit({
  logoSrc,
  logoAlt,
  summary,
  illustrationSrc,
  illustrationAlt,
}: Props) {
  return (
    <section className="bg-white pt-16 pb-14 sm:pt-28 sm:pb-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left */}
          <div className="lg:col-span-5">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-12 w-auto"
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
