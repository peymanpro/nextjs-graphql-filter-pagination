"use client";

import { Product } from "@/types/product";
import {
  Star,
  PackageCheck,
  BadgeCheck,
  ShoppingCart,
  BadgeDollarSign,
} from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold">{product.rating}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description || "No description available"}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BadgeCheck className="h-4 w-4 text-slate-500" />
            <span>{product.category}</span>
            <span className="mx-2">•</span>
            <span className="font-medium">{product.brand}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <PackageCheck className="h-4 w-4 text-emerald-600" />
            <span>Stock: {product.stock} units</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-1">
            <BadgeDollarSign className="h-5 w-5 text-emerald-600" />
            <span className="text-2xl font-bold text-green-600">
              {product.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={() =>
              toast.info("Demo Project", {
                description:
                  "Shopping cart is intentionally omitted. This demo showcases GraphQL filtering, sorting and pagination.",
              })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
