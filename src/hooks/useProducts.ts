"use client";

import { useState } from "react";

import { FilterInput, SortInput } from "@/types/product";

import { useProductsQuery } from "@/graphql/products/hooks";
import { useCategoriesQuery } from "@/graphql/categories/hooks";
import { useBrandsQuery } from "@/graphql/brands/hooks";

export function useProducts() {
  const [filters, setFiltersState] = useState<FilterInput>({});

  const [sort, setSort] = useState<SortInput>({
    field: "createdAt",
    order: "DESC",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const limit = 9;

  const {
    data: productsData,
    loading,
    error,
  } = useProductsQuery({
    page: currentPage,
    limit,
    filters,
    sort,
  });

  const { data: categoriesData } = useCategoriesQuery();

  const { data: brandsData } = useBrandsQuery();

  const setFilters = (filters: FilterInput) => {
    setCurrentPage(1);
    setFiltersState(filters);
  };

  const handleSortChange = (
    field: string,
    order: "ASC" | "DESC"
  ) => {
    setCurrentPage(1);
    setSort({ field, order });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetFilters = () => {
    setCurrentPage(1);
    setFiltersState({});
  };

  return {
    loading,
    error,

    products: productsData?.products?.items ?? [],

    pagination: productsData?.products ?? {},

    categories: categoriesData?.categories ?? [],

    brands: brandsData?.brands ?? [],

    filters,
    sort,
    currentPage,

    setFilters,
    handleSortChange,
    handlePageChange,
    resetFilters,
  };
}