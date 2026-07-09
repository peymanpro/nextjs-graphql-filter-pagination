export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rating?: number;
  createdAt: string;
}

export interface PaginationInput {
  page: number;
  limit: number;
}

export interface FilterInput {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  search?: string;
}

export interface SortInput {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface ProductQueryInput {
  pagination?: PaginationInput;
  filter?: FilterInput;
  sort?: SortInput;
}

export interface PaginatedProductsResponse {
  items: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}