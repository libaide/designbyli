
type ButtonVariant = "cta" | "secondary";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

export default function Button({
  variant = "secondary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
  "inline-flex items-center justify-center rounded-xl border-[1px] " +
  "cursor-pointer " +
  "transition-all duration-200 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30";


  const variants: Record<ButtonVariant, string> = {
    cta:
      "bg-transparent text-white font-medium border-[#f1f1f1] " +
      "px-8 py-4 text-base " +
      "hover:bg-black hover:text-white hover:border-gray-600",

    secondary:
      "bg-transparent text-gray-300 font-medium border-gray-600 " +
      "px-8 py-4 text-base " +
      "hover:bg-black hover:text-white",
  };

  return (
    <button
      className={[base, variants[variant], className].join(" ")}
      {...props}
    />
  );
}
