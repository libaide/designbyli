"use client";

import { useRef, useEffect } from "react";

type NoiseProps = {
  patternSize?: number; // (kept for API compatibility)
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number; // in frames
  patternAlpha?: number; // 0..255 (canvas alpha)
  className?: string;
};

export default function Noise({
  patternSize = 250, // kept for API compatibility
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 35,
  className = "",
}: NoiseProps) {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      // ✅ Make the canvas match the section size (not 100vw/100vh)
      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrain = () => {
      // ✅ Use a smaller tile then scale (better perf than huge ImageData)
      const tile = 256; // fixed tile size for performance
      const imageData = ctx.createImageData(tile, tile);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha; // 0..255
      }

      // draw tile to an offscreen canvas, then pattern-fill
      const off = document.createElement("canvas");
      off.width = tile;
      off.height = tile;
      const offCtx = off.getContext("2d");
      if (!offCtx) return;
      offCtx.putImageData(imageData, 0, 0);

      const pat = ctx.createPattern(off, "repeat");
      if (!pat) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.imageSmoothingEnabled = false;

      // Apply scaling via pattern transform (supported in modern browsers)
      // If not supported, it still looks fine.
      // @ts-ignore
      pat.setTransform?.(new DOMMatrix().scale(1 / patternScaleX, 1 / patternScaleY));

      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const loop = () => {
      if (frame % Math.max(1, patternRefreshInterval) === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => resize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      ro.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      ref={grainRef}
      className={[
        "absolute inset-0 pointer-events-none",
        className,
      ].join(" ")}
      style={{ imageRendering: "pixelated" }}
      aria-hidden="true"
    />
  );
}
