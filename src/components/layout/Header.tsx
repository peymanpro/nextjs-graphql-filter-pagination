import { Store, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onOpenFilters: () =>void;
}

export function Header({ onOpenFilters }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <Store className="h-7 w-7" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Product Store
            </h1>

            <p className="text-sm text-blue-100">
              GraphQL Filtering & Pagination Demo
            </p>
          </div>
        </div>

        <button
          onClick={onOpenFilters}
          className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 transition hover:bg-white/25 lg:hidden"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>
    </header>
  );
}