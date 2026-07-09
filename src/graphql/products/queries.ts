import { gql } from "@apollo/client";
import { PRODUCT_FIELDS } from "../fragments/product.fragment";

export const GET_PRODUCTS = gql`
  ${PRODUCT_FIELDS}

  query GetProducts($query: ProductQueryInput) {
    products(query: $query) {
      items {
        ...ProductFields
      }

      total
      page
      limit
      totalPages
      hasNext
      hasPrev
    }
  }
`;