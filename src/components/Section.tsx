import Container from "./Container";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <Container>
        <div className="mb-6">
          <h3 className="text-4xl font-semibold tracking-tight">{title}</h3>
          {subtitle ? <p className="mt-2 text-muted">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
