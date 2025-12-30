import Image from "next/image";
import clsx from "clsx";

type CaseHeroProps = {
  title: string;
  subtitle?: string;
  meta?: string; // e.g. "UX/UI · Web App · 2025"
  coverSrc: string; // same image as the project card cover
  priority?: boolean;
  height?: "md" | "lg";
  align?: "bottom" | "center";
};

export default function CaseHero({
  title,
  subtitle,
  meta,
  coverSrc,
  priority = false,
  height = "lg",
  align = "bottom",
}: CaseHeroProps) {
  return (
    <section
      className={clsx(
        "relative isolate overflow-hidden",
        // Full-bleed WITHOUT breaking parent containers:
        "w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]",
        // Height presets
        height === "lg"
          ? "min-h-[60vh] md:min-h-[70vh]"
          : "min-h-[45vh] md:min-h-[55vh]"
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={coverSrc}
          alt="" // decorative; title is the accessible label
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay (readability) */}
<div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={clsx(
          "relative mx-auto w-full max-w-6xl px-6",
          align === "bottom"
            ? "flex min-h-[inherit] items-end pb-10 md:pb-14"
            : "flex min-h-[inherit] items-center py-14"
        )}
      >
        <div className="max-w-3xl">
          {meta ? (
            <p className="text-sm md:text-base text-white/75">{meta}</p>
          ) : null}
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base md:text-lg text-white/80">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
