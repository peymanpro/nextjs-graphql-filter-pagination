import { PackageSearch, RotateCcw } from 'lucide-react';

interface EmptyProductsProps {
  onReset: () => void;
}

export function EmptyProducts({
  onReset,
}: EmptyProductsProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-20 px-8 shadow-sm">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
        <PackageSearch className="h-12 w-12 text-slate-500" />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-800">
        No products found
      </h2>

      <p className="mt-3 max-w-md text-center text-slate-500">
        We couldn't find any products matching your current filters.
        Try changing your search criteria or reset all filters.
      </p>

      <button
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        <RotateCcw className="h-5 w-5" />
        Reset Filters
      </button>

    </div>
  );
}