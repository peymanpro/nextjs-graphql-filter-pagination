import { Product } from "@/types/product";
import { EmptyProducts } from "@/components/states/EmptyProducts";
import { Pagination } from "@/components/pagination/Pagination";
import { ProductMobileList } from "./ProductMobileList";
import { ProductTable } from "./ProductTable";
import { ProductSkeleton } from "../states/ProductSkeleton";

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
      <div className="hidden lg:block">
        <ProductTable products={products} />
      </div>
      <div className="lg:hidden">
        <ProductMobileList products={products} />
      </div>
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
