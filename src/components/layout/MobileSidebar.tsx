import { FilterInput } from "@/types/product";
import { FilterSidebar } from "@/components/filters/FilterSidebar";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;

  filters: FilterInput;
  categories: string[];
  brands: string[];

  onFilterChange: (filters: FilterInput) => void;
}

export function MobileSidebar({
  open,
  onClose,
  filters,
  categories,
  brands,
  onFilterChange,
}: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
        <FilterSidebar
          filters={filters}
          categories={categories}
          brands={brands}
          onFilterChange={onFilterChange}
          onClose={onClose}
        />
      </div>
    </div>
  );
}