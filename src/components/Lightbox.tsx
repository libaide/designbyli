"use client";

import { useEffect } from "react";

export type LightboxImage = { src: string; alt: string };

type LightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
};

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [image, onClose]);

  useEffect(() => {
    if (!image) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [image]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded image preview"
      onClick={onClose}
    >
      <div className="flex h-full w-full items-center justify-center overflow-y-auto p-4 sm:p-6">
        <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={onClose}
            className="absolute -right-3 -top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-black shadow-lg ring-1 ring-black/10"
            aria-label="Close expanded preview"
          >
            ✕
          </button>

          <div className="relative w-full max-h-[85vh] overflow-hidden rounded-2xl bg-white">
            <img
              src={image.src}
              alt={image.alt}
              className="block h-auto w-full max-h-[85vh] object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
