export function ProductTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="w-12 px-4 py-3"></th>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Brand</th>
            <th className="px-4 py-3 text-left">Stock</th>
            <th className="px-4 py-3 text-left">Rating</th>
            <th className="px-4 py-3 text-left">Price</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr
              key={index}
              className="border-t"
            >
              <td className="px-4 py-4">
                <div className="h-5 w-5 animate-pulse rounded bg-slate-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-5 w-28 animate-pulse rounded bg-slate-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-5 w-16 animate-pulse rounded bg-slate-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-5 w-14 animate-pulse rounded bg-slate-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}