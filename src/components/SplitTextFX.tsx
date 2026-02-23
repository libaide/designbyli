// SplitTextFX.tsx
"use client";

import dynamic from "next/dynamic";

const SplitText = dynamic(() => import("@/components/SplitText"), { ssr: false });

type MotionVars = {
  opacity: number;
  y: number;
};

type SplitType = "chars" | "words" | "lines";

type SplitTextFXProps = {
  text: string;
  tag?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: Partial<MotionVars> | any;
  to?: Partial<MotionVars> | any;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onComplete?: () => void;

  animateOnScroll?: boolean;

  fadeOutOnScroll?: boolean;
  fadeOutStart?: string;
  fadeOutEnd?: string;
  fadeOutY?: number;
  fadeOutStagger?: number;
  fadeOutTrigger?: "self" | "parent" | "section" | string;
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
  animateOnScroll = true,

  // Fade-out defaults
  fadeOutOnScroll = false,
  fadeOutStart = "top top",
  fadeOutEnd = "bottom top",
  fadeOutY = -32,
  fadeOutStagger = 0.02,
  fadeOutTrigger = "self",
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
      animateOnScroll={animateOnScroll}
      fadeOutOnScroll={fadeOutOnScroll}
      fadeOutStart={fadeOutStart}
      fadeOutEnd={fadeOutEnd}
      fadeOutY={fadeOutY}
      fadeOutStagger={fadeOutStagger}
      fadeOutTrigger={fadeOutTrigger}
      onLetterAnimationComplete={onComplete ?? (() => {})}
    />
  );
}