"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import "./CurvedLoop.css";

type CurvedLoopProps = {
  marqueeText?: string;
  speed?: number;
  className?: string; // applied to the <text> element (SVG)
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  variant?: "curved" | "straight";
  containerClassName?: string; // applied to wrapper div (and you can also use it for banner styles)
  svgClassName?: string; // applied to svg
};

const COLLAPSED_VIEWBOX = "0 0 1440 120";

export default function CurvedLoop({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
  variant = "curved",
  containerClassName,
  svgClassName,
}: CurvedLoopProps) {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0";
  }, [marqueeText]);

  // ✅ Properly typed refs (this fixes the "never" issue)
  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;

  const pathD =
    variant === "straight"
      ? "M-100,60 L1540,60"
      : `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  const ready = spacing > 0;

  const totalText = useMemo(() => {
    if (!spacing) return text;
    return Array(Math.ceil(1800 / spacing) + 2)
      .fill(text)
      .join("");
  }, [spacing, text]);

  // measure one repetition length
  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text, className]);

  // initial offset
  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    const initial = -spacing;
    textPathRef.current.setAttribute("startOffset", `${initial}px`);
    setOffset(initial);
  }, [spacing]);

  // animate
  useEffect(() => {
    if (!spacing || !ready) return;

    let frame = 0;
    const step = () => {
      const tp = textPathRef.current;
      if (!dragRef.current && tp) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const currentOffset = parseFloat(tp.getAttribute("startOffset") || "0");
        let newOffset = currentOffset + delta;

        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;

        tp.setAttribute("startOffset", `${newOffset}px`);
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const tp = textPathRef.current;
    if (!interactive || !dragRef.current || !tp) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    const currentOffset = parseFloat(tp.getAttribute("startOffset") || "0");
    let newOffset = currentOffset + dx;

    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;

    tp.setAttribute("startOffset", `${newOffset}px`);
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive ? (dragRef.current ? "grabbing" : "grab") : "auto";

  return (
    <div
      className={["curved-loop-jacket", containerClassName].filter(Boolean).join(" ")}
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className={["curved-loop-svg", svgClassName].filter(Boolean).join(" ")}
        viewBox={COLLAPSED_VIEWBOX}
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>

        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {ready ? (
          <text fontWeight={700} xmlSpace="preserve" className={className}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={`${offset}px`}
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        ) : null}
      </svg>
    </div>
  );
}
