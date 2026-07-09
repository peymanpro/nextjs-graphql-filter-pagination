import { Product } from "@/types/product";
import { ProductGrid } from "./ProductGrid";
import { ProductSkeleton } from "@/components/states/ProductSkeleton";
import { EmptyProducts } from "@/components/states/EmptyProducts";
import { Pagination } from "@/components/pagination/Pagination";

interface ProductSectionProps {
  loading: boolean;

  products: Product[];

  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;

  onPageChange: (page: number) => void;

  onResetFilters: () => void;
}

export function ProductSection({
  loading,
  products,
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
  onPageChange,
  onResetFilters,
}: ProductSectionProps) {
  if (loading) {
    return <ProductSkeleton />;
  }

  if (products.length === 0) {
    return <EmptyProducts onReset={onResetFilters} />;
  }

  return (
    <>
      <ProductGrid products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNext={hasNext}
        hasPrev={hasPrev}
        onPageChange={onPageChange}
      />
    </>
  );
}
