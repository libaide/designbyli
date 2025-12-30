"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
  delayMs?: number;
};

export default function Logo({
  size = 32,
  className = "",
  priority = false,
  delayMs = 100,
}: LogoProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  return (
    <div
      className={[
        "relative inline-flex items-center justify-center",
        ready ? "logoParticleIn" : "opacity-0",
        className,
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.svg"
        alt="Design by Li logo"
        fill
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}


