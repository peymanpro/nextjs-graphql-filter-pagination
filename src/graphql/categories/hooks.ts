import { useQuery } from "@apollo/client";

import { GET_CATEGORIES } from "./queries";

export function useCategoriesQuery() {
  return useQuery(GET_CATEGORIES);
}