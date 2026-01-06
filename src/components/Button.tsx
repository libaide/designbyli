
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
  "inline-flex items-center justify-center rounded-xl border-[3px] " +
  "cursor-pointer " +
  "transition-all duration-200 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30";


  const variants: Record<ButtonVariant, string> = {
    cta:
      "bg-white text-black font-semibold border-black " +
      "px-8 py-4 text-sm " +
      "hover:bg-black hover:text-white",

    secondary:
      "bg-black text-white font-medium border-black " +
      "px-6 py-3 text-sm " +
      "hover:bg-white hover:text-black",
  };

  return (
    <button
      className={[base, variants[variant], className].join(" ")}
      {...props}
    />
  );
}
