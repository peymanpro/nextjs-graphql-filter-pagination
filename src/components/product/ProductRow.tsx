"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import {
  Plus,
  Minus,
  Star,
  PackageCheck,
  BadgeCheck,
  BadgeDollarSign,
} from "lucide-react";

interface ProductRowProps {
  product: Product;
}

export function ProductRow({ product }: ProductRowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className="border-b hover:bg-slate-50 transition-colors">
        <td className="px-4 py-4 font-medium text-gray-800">{product.name}</td>

        <td className="px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BadgeCheck className="h-4 w-4 text-slate-500" />
            {product.category}
          </div>
        </td>

        <td className="px-4 py-4 text-gray-700">{product.brand}</td>

        <td className="px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <PackageCheck className="h-4 w-4 text-emerald-600" />
            {product.stock}
          </div>
        </td>

        <td className="px-4 py-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span>{product.rating ?? "-"}</span>
          </div>
        </td>

        <td className="px-4 py-4">
          <div className="flex items-center gap-1 font-semibold text-emerald-600">
            <BadgeDollarSign className="h-4 w-4" />
            {product.price.toLocaleString()}
          </div>
        </td>

        <td className="px-4 py-4 w-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-md p-1 hover:bg-slate-200 transition-colors"
          >
            {expanded ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </button>
        </td>
      </tr>

      {expanded && (
        <tr className="bg-slate-50 border-b">
          <td></td>

          <td colSpan={6} className="px-1 py-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800">Description</h4>
                <p className="mt-1 text-sm text-gray-600">
                  {product.description || "No description available"}
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
