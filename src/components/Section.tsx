import Container from "@/components/Container";

export default function Section({
  title,
  subtitle,
  children,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  const headerAlign = align === "center" ? "text-center" : "text-left";
  const headerItems = align === "center" ? "items-center" : "items-start";

  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <div className={`flex flex-col gap-3 ${headerItems} ${headerAlign}`}>
          <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="max-w-2xl text-sm text-muted">{subtitle}</p>
          ) : null}
        </div>

        {/* Content */}
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
