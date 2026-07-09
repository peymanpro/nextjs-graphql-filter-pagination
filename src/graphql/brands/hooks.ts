import { useQuery } from "@apollo/client";

import { GET_BRANDS } from "./queries";

export function useBrandsQuery() {
  return useQuery(GET_BRANDS);
}