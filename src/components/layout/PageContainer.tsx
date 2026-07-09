interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      {children}
    </div>
  );
}