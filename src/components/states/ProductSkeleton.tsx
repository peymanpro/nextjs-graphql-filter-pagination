import { ProductMobileSkeleton } from "./ProductMobileSkeleton";
import { ProductTableSkeleton } from "./ProductTableSkeleton";

export function ProductSkeleton() {
  return (
    <>
      <div className="hidden lg:block">
        <ProductTableSkeleton />
      </div>

      <div className="lg:hidden">
        <ProductMobileSkeleton />
      </div>
    </>
  );
}