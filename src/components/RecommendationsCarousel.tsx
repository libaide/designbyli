"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

type ArrowDir = "prev" | "next";

function ArrowButton({
  direction,
  onClick,
}: {
  direction: ArrowDir;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous" : "Next"}
      onClick={onClick}
      className={[
        "grid h-12 w-12 place-items-center rounded-full sm:h-16 sm:w-16 lg:h-24 lg:w-24",
        "border border-white/25 bg-black/40 backdrop-blur-md",
        "transition hover:bg-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 sm:h-7 sm:w-7 lg:h-10 lg:w-10"
        fill="none"
        stroke="url(#arrowGradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>

        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export default function RecommendationsCarousel<T>({
  items,
  renderSlide,
  className,
}: {
  items: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
  align: "center",
  containScroll: false,
  dragFree: false,
  loop: true,
});

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

const scrollPrev = () => emblaApi?.scrollPrev();
const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className={["relative", className].filter(Boolean).join(" ")}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 lg:w-28 bg-gradient-to-r from-black via-black/90 to-transparent" />
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 lg:w-28 bg-gradient-to-l from-black via-black/90 to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden items-center pl-4 lg:flex">
        <div className="pointer-events-auto">
          <ArrowButton direction="prev" onClick={scrollPrev} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden items-center pr-4 lg:flex">
        <div className="pointer-events-auto">
          <ArrowButton direction="next" onClick={scrollNext} />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-end gap-2 lg:hidden">
        <ArrowButton direction="prev" onClick={scrollPrev} />
        <ArrowButton direction="next" onClick={scrollNext} />
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-0 shrink-0 px-2 sm:px-3 basis-[90%] sm:basis-[74%] md:basis-[58%] lg:basis-[39%] xl:basis-[39%] transition-opacity duration-300 ${
  idx === selectedIndex ? "opacity-100" : "opacity-70"
}`}
            >
              {renderSlide(item, idx)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={[
              "h-2 w-2 rounded-full transition",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              i === selectedIndex ? "bg-white/80" : "bg-white/25 hover:bg-white/45",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}