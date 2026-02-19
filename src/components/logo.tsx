"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LogoProps = {
  size?: number; // Base size (mobile first)
  smSize?: number; // Size for small screens and up
  mdSize?: number; // Size for medium screens and up (if needed)
  className?: string;
  priority?: boolean;
  delayMs?: number;
  disableAnimation?: boolean;
};

// Define your Tailwind breakpoints in JS for responsive inline styles
// These should match your tailwind.config.js breakpoints if you have one.
const breakpoints = {
  sm: 640, // Example breakpoint for sm
  md: 768, // Example breakpoint for md
  // Add other breakpoints as needed
};

export default function Logo({
  size = 32, // Default mobile size
  smSize,    // Optional size for small screens and up
  mdSize,    // Optional size for medium screens and up
  className = "",
  priority = false,
  delayMs = 100,
  disableAnimation = false,
}: LogoProps) {
  const [ready, setReady] = useState(false);
  const [currentSize, setCurrentSize] = useState(size);

  // Animation effect
  useEffect(() => {
    if (disableAnimation) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs, disableAnimation]);

  // Responsive sizing effect
  useEffect(() => {
    const handleResize = () => {
      let newSize = size;
      if (mdSize && window.innerWidth >= breakpoints.md) {
        newSize = mdSize;
      } else if (smSize && window.innerWidth >= breakpoints.sm) {
        newSize = smSize;
      }
      setCurrentSize(newSize);
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size, smSize, mdSize]); // Re-run if size props change


  return (
    <div
      className={[
        "relative inline-flex items-center justify-center",
        !disableAnimation && (ready ? "logoParticleIn" : "opacity-0"),
        className,
      ].join(" ")}
      style={{
        width: `${currentSize}px`,
        height: `${currentSize}px`,
      }}
    >
      <Image
        src="/LogoWhite_600.svg"
        alt="Design by Li logo"
        fill
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}