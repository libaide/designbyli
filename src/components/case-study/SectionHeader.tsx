import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Underline = {
  show?: boolean;
  className?: string; // full control (e.g. "bg-[#E45027] h-2 w-20 mt-4")
};

export default function SectionHeader({
  title,
  description,
  dark = false,

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

  titleClassName?: string;
  descriptionClassName?: string;
  wrapperClassName?: string;

  underline?: Underline;
}) {
  // ✅ Apply defaults ONLY when no override is provided
  const defaultTitle = titleClassName
    ? undefined
    : dark
      ? "text-white"
      : "text-black";

  const defaultDesc = descriptionClassName
    ? undefined
    : dark
      ? "text-white/70"
      : "text-black/70";

  const showUnderline = underline?.show;

  return (
    <div className={cx("mx-auto max-w-3xl text-center", wrapperClassName)}>
      <h2
        className={cx(
          "text-4xl font-semibold tracking-tight",
          defaultTitle,
          titleClassName
        )}
      >
        {title}
      </h2>

      {showUnderline ? (
        <div className="mt-4 flex justify-center">
          <div
            className={cx(
              "h-2 w-20 rounded-full bg-[#E45027]",
              underline?.className
            )}
          />
        </div>
      ) : null}

      {description ? (
        <p
          className={cx(
            showUnderline ? "mt-6" : "mt-8",
            "text-base leading-relaxed",
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
