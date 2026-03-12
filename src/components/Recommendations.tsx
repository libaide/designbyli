"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";
import { recommendations } from "@/data/recommendations";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";
import RiseInOnView from "./RiseInOnView";

type RecItem = {
  name: string;
  title: string;
  quote: string;
  image: string;
};

function RecCard({
  name,
  title,
  text,
  image,
  onOpen,
}: {
  name: string;
  title: string;
  text: string;
  image: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={[
        "group flex h-full w-full cursor-pointer flex-col rounded-3xl text-left",
        "border border-white/10 bg-white/[0.02] backdrop-blur-sm",
        "transition-colors duration-300 ease-out hover:border-white",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
      ].join(" ")}
    >
      <div className="flex h-full flex-col p-5 sm:p-7 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-24 sm:w-24">
            <Image
              src={image}
              alt={`Portrait of ${name}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-base font-medium leading-tight text-white sm:text-3xl">
              {name}
            </h3>
            <div className="mt-1 text-xs text-white/55 sm:text-base">
              {title}
            </div>
          </div>
        </div>

        <blockquote className="mt-6 line-clamp-7 text-sm font-light leading-relaxed text-white/80 sm:mt-8 sm:line-clamp-8 sm:text-lg">
          “{text}”
        </blockquote>

        <div className="mt-auto flex justify-end pt-6 sm:pt-8">
          <div className="inline-flex items-center text-sm font-medium text-white/60 transition group-hover:text-white">
            Read more
          </div>
        </div>
      </div>
    </button>
  );
}

function RecommendationModal({
  item,
  open,
  onClose,
}: {
  item: RecItem | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
      aria-modal="true"
      role="dialog"
      aria-labelledby="recommendation-modal-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className={[
          "relative z-10 w-full max-w-3xl rounded-t-3xl sm:rounded-3xl",
          "max-h-[85vh] overflow-y-auto",
          "border border-white/10 bg-[#0b0b0d] p-5 sm:p-8 md:p-10",
          "shadow-2xl",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close testimonial"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:h-10 sm:w-10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6l-12 12" />
          </svg>
        </button>

        <div className="pr-10">
          <h3
            id="recommendation-modal-title"
            className="text-xl font-normal tracking-tight text-white sm:text-3xl"
          >
            What {item.name} said
          </h3>
        </div>

        <blockquote className="mt-6 text-base font-light leading-relaxed text-white/85 sm:mt-8 sm:text-xl">
          “{item.quote}”
        </blockquote>

        <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-10 sm:gap-4 sm:pt-6">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-16 sm:w-16">
            <Image
              src={item.image}
              alt={`Portrait of ${item.name}`}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="text-sm font-medium text-white sm:text-base">
              {item.name}
            </div>
            <div className="mt-1 text-xs text-white/55 sm:text-sm">
              {item.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Recommendations() {
  const items = useMemo<RecItem[]>(
    () =>
      recommendations.map((r) => ({
        name: r.name,
        title: r.title,
        quote: r.text,
        image: r.image,
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:pt-20 md:pt-28 lg:pt-32">
        <RiseInOnView staggerChildren={true} staggerMs={90}>
          <div className="max-w-3xl">
            <p className="text-3xl font-normal tracking-normal text-white sm:text-5xl md:text-6xl">
              What clients and coworkers say about me
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <RecommendationsCarousel
              items={items}
              renderSlide={(rec, i) => (
                <RecCard
                  name={rec.name}
                  title={rec.title}
                  text={rec.quote}
                  image={rec.image}
                  onOpen={() => openModal(i)}
                />
              )}
            />
          </div>
        </RiseInOnView>
      </div>

      <RecommendationModal
        item={activeIndex !== null ? items[activeIndex] : null}
        open={activeIndex !== null}
        onClose={closeModal}
      />
    </section>
  );
}