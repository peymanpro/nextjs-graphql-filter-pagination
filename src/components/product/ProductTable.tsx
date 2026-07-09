import { Product } from '@/types/product';
import { ProductRow } from './ProductRow';


interface ProductGridProps {
  products: Product[];
}

export function ProductTable({ products }: ProductGridProps) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Brand</th>
            <th className="px-4 py-3 text-left">Stock</th>
            <th className="px-4 py-3 text-left">Rating</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}