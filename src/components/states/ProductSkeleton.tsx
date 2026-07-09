export function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          {/* Image */}
          <div className="h-52 animate-pulse bg-slate-200" />

          <div className="space-y-4 p-6">
            <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />

            <div className="h-4 animate-pulse rounded bg-slate-200" />

            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />

            <div className="flex justify-between pt-4">
              <div className="h-8 w-28 animate-pulse rounded bg-slate-200" />

              <div className="h-10 w-28 animate-pulse rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}