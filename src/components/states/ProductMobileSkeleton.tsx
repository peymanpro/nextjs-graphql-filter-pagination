export function ProductMobileSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border bg-white p-4 shadow-sm"
        >
          <div className="flex justify-between items-start">

            <div className="space-y-2 flex-1">
              <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />

              <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="h-8 w-8 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="mt-5 flex justify-between">

            <div className="h-4 w-14 animate-pulse rounded bg-slate-200" />

            <div className="h-4 w-14 animate-pulse rounded bg-slate-200" />

            <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />

          </div>
        </div>
      ))}
    </div>
  );
}