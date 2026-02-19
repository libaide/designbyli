"use client";

import dynamic from "next/dynamic";

const SplitText = dynamic(() => import("@/components/SplitText"), { ssr: false });

type MotionVars = {
  opacity: number;
  y: number;
};

type SplitTextFXProps = {
  text: string;
  className?: string;
  tag?: string; // ✅ keep it string to satisfy SplitText types
  textAlign?: React.CSSProperties["textAlign"];
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: MotionVars; // ✅ match expected shape
  to?: MotionVars;   // ✅ match expected shape
  threshold?: number;
  rootMargin?: string;
  onComplete?: () => void; // ✅ optional
};

export default function SplitTextFX({
  text,
  className = "",
  tag = "h1",
  textAlign = "left",
  delay = 30,
  duration = 1.0,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 24 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = "-80px",
  onComplete,
}: SplitTextFXProps) {
  if (!text) return null;

  return (
    <SplitText
      text={text}
      className={className}
      delay={delay}
      duration={duration}
      ease={ease}
      splitType={splitType}
      from={from}
      to={to}
      threshold={threshold}
      rootMargin={rootMargin}
      textAlign={textAlign}
      tag={tag}
      onLetterAnimationComplete={onComplete ?? (() => {})} // ✅ satisfy "required"
    />
  );
}
