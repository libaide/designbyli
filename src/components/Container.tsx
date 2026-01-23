import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-5xl px-5", className)}>
      {children}
    </div>
  );
}
