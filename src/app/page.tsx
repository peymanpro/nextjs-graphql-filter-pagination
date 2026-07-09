"use client";

import { SortBar } from "@/components/sorting/SortBar";
import { ProductSection } from "@/components/product/ProductSection";

import { useProducts } from "@/hooks/useProducts";
import { AppLayout } from "@/components/layout/AppLayout";

export default function Home() {
  
const {
  loading,
  products,
  pagination,
  categories,
  brands,
  filters,
  sort,
  currentPage,
  setFilters,
  handleSortChange,
  handlePageChange,
  resetFilters,
} = useProducts();


return (
  <AppLayout
    filters={filters}
    categories={categories}
    brands={brands}
    onFilterChange={setFilters}
  >
    <SortBar
      total={pagination.total || 0}
      loading={loading}
      sort={sort}
      onSortChange={handleSortChange}
    />

    <ProductSection
      loading={loading}
      products={products}
      currentPage={currentPage}
      totalPages={pagination.totalPages || 1}
      hasNext={pagination.hasNext}
      hasPrev={pagination.hasPrev}
      onPageChange={handlePageChange}
      onResetFilters={resetFilters}
    />
  </AppLayout>
);
}