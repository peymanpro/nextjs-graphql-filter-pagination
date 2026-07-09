import { FilterInput } from "@/types/product";
import { FilterSidebar } from "@/components/filters/FilterSidebar";

interface DesktopSidebarProps {
  filters: FilterInput;
  categories: string[];
  brands: string[];
  onFilterChange: (filters: FilterInput) => void;
}

export function DesktopSidebar({
  filters,
  categories,
  brands,
  onFilterChange,
}: DesktopSidebarProps) {
  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <FilterSidebar
        filters={filters}
        categories={categories}
        brands={brands}
        onFilterChange={onFilterChange}
      />
    </aside>
  );
}