"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

type LogoProps = {
  size?: number; // Base size (mobile first)
  smSize?: number; // Size for small screens and up
  mdSize?: number; // Size for medium screens and up
  className?: string;
  priority?: boolean;
  delayMs?: number;
  disableAnimation?: boolean;
};

export default function Logo({
  size = 32,
  smSize,
  mdSize,
  className = "",
  priority = false,
  delayMs = 100,
  disableAnimation = false,
}: LogoProps) {
  const [ready, setReady] = useState(false);
  const uid = useId().replace(/:/g, ""); // safe for CSS classnames

  // Entrance animation (kept)
  useEffect(() => {
    if (disableAnimation) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs, disableAnimation]);

  // Unique class so multiple Logos on the page don’t conflict
  const sizeClass = `logoSize_${uid}`;

  return (
    <>
      {/* Responsive sizing via CSS media queries (no JS resize listener) */}
      <style jsx>{`
        .${sizeClass} {
          width: ${size}px;
          height: ${size}px;
        }
        ${smSize
          ? `
        @media (min-width: 640px) {
          .${sizeClass} {
            width: ${smSize}px;
            height: ${smSize}px;
          }
        }
        `
          : ""}
        ${mdSize
          ? `
        @media (min-width: 768px) {
          .${sizeClass} {
            width: ${mdSize}px;
            height: ${mdSize}px;
          }
        }
        `
          : ""}
      `}</style>

      <div
        className={[
          "relative inline-flex items-center justify-center",
          sizeClass,
          !disableAnimation && (ready ? "logoParticleIn" : "opacity-0"),
          className,
        ].join(" ")}
      >
        <Image
          src="/LogoWhite_600.svg"
          alt="Design by Li logo"
          fill
          priority={priority}
          className="object-contain"
        />
      </div>
    </>
  );
}
