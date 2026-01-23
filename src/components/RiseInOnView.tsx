"use client";

import type { ReactNode } from "react";
import { Children } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number; // base delay (ms)
  y?: number; // translateY px
  duration?: number; // ms

  // stagger
  staggerChildren?: boolean;
  staggerMs?: number; // added per child (ms)
};

const easeOutSoft = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function RiseInOnView({
  children,
  className = "",
  threshold = 0.2,
  delay = 0,
  y = 16,
  duration = 800,
  staggerChildren = false,
  staggerMs = 90,
}: Props) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  // If staggering: animate each child wrapper (NOT the parent).
  if (staggerChildren) {
    const items = Children.toArray(children);

    return (
      <div ref={ref} className={className}>
        {items.map((child, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="will-change-transform will-change-opacity"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0px)" : `translateY(${y}px)`,
              transitionProperty: "opacity, transform",
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: easeOutSoft,
              transitionDelay: `${delay + index * staggerMs}ms`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  // No staggering: animate the wrapper itself.
  return (
    <div
      ref={ref}
      className={[className, "will-change-transform will-change-opacity"].join(" ")}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : `translateY(${y}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easeOutSoft,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
