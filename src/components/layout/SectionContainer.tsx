interface SectionContainerProps {
  children: React.ReactNode;
}

export function SectionContainer({
  children,
}: SectionContainerProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      {children}
    </section>
  );
}