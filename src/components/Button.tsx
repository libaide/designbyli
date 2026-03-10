"use client";

import React, { useRef } from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = "cta" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

export default function Button({
  variant = "secondary",
  asChild = false,
  className = "",
  onMouseMove,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const Comp = asChild ? Slot : "button";

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "cta" && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      buttonRef.current.style.setProperty("--x", `${x}px`);
      buttonRef.current.style.setProperty("--y", `${y}px`);
    }

    onMouseMove?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "cta" && buttonRef.current) {
      buttonRef.current.style.setProperty("--x", `50%`);
      buttonRef.current.style.setProperty("--y", `50%`);
    }

    onMouseLeave?.(e);
  };

  const base =
    "inline-flex items-center justify-center rounded-xl border-[1px] " +
    "cursor-pointer transition-all duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30";

  const variants: Record<ButtonVariant, string> = {
    cta:
  "premium-cta relative isolate text-white font-medium " +
  "px-8 py-4 text-base",

    secondary:
      "bg-transparent text-gray-300 font-medium border-gray-600 " +
      "px-8 py-4 text-base " +
      "hover:bg-black hover:text-white",
  };

  if (asChild) {
    return (
      <Comp
        className={[base, variants[variant], className].join(" ")}
        {...props}
      />
    );
  }

  return (
    <button
      ref={buttonRef}
      className={[base, variants[variant], className].join(" ")}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}