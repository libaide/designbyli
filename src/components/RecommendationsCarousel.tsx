"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

type ArrowDir = "prev" | "next";

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: ArrowDir;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous" : "Next"}
      onClick={onClick}
      disabled={disabled}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 backdrop-blur-sm shadow-sm transition hover:bg-card/80 disabled:opacity-40"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-foreground/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
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
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={["relative", className].filter(Boolean).join(" ")}>
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />

      {/* Controls */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ArrowButton
            direction="prev"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
          />
          <ArrowButton
            direction="next"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
          />
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={[
                "h-2 w-2 rounded-full transition",
                i === selectedIndex ? "bg-foreground/80" : "bg-foreground/20 hover:bg-foreground/35",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                min-w-0 shrink-0
                basis-[88%] sm:basis-[70%] lg:basis-[46%] xl:basis-[38%]
              "
            >
              {renderSlide(item, idx)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
