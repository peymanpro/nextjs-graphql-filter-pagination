import { useQuery } from "@apollo/client";

import { GET_PRODUCTS } from "./queries";

import {
  FilterInput,
  SortInput,
} from "@/types/product";

interface ProductsQueryParams {
  page: number;
  limit: number;
  filters: FilterInput;
  sort: SortInput;
}

export function useProductsQuery({
  page,
  limit,
  filters,
  sort,
}: ProductsQueryParams) {
  return useQuery(GET_PRODUCTS, {
    variables: {
      query: {
        pagination: {
          page,
          limit,
        },
        filter: filters,
        sort,
      },
    },
  });
}