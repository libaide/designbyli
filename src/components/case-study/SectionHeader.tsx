import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Underline = {
  show?: boolean;
  className?: string; // full control (e.g. "bg-[#E45027] h-2 w-20 mt-4")
};

type Align = "left" | "center" | "right";

export default function SectionHeader({
  title,
  description,
  dark = false,

  // ✅ NEW: alignment control (defaults to center to preserve current behavior)
  align = "center",

  // Optional overrides (Tailwind class strings)
  titleClassName,
  descriptionClassName,
  wrapperClassName,

  // Optional underline bar
  underline,
}: {
  title: string;
  description?: string;
  dark?: boolean;

  align?: Align;

  titleClassName?: string;
  descriptionClassName?: string;
  wrapperClassName?: string;

  underline?: Underline;
}) {
  // Defaults ONLY when no override is provided
  const defaultTitle = titleClassName ? undefined : dark ? "text-white" : "text-black";
  const defaultDesc = descriptionClassName ? undefined : dark ? "text-white/70" : "text-black/70";

  const showUnderline = underline?.show;

  const alignText =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  const underlineJustify =
    align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";

  return (
    <div className={cx("align-left max-w-5xl mb-12 sm:mb-12 md:mb-12 lg:mb-12 xl:mb-16", alignText, wrapperClassName)}>
      <h2
  className={cx(
    "text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-base tracking-normal text-left",
    defaultTitle,
    titleClassName
  )}
>
  {title}
</h2>

      {showUnderline ? (
        <div className={cx("mt-4 flex", underlineJustify)}>
          <div
            className={cx("h-2 w-20 rounded-full bg-[#E45027]", underline?.className)}
          />
        </div>
      ) : null}

      {description ? (
        <p
          className={cx(
            showUnderline ? "mt-6" : "mt-8",
            "text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl tracking-normal leading-snug text-left",
            defaultDesc,
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}