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

interface Props {
    product: Product;
}

export function ProductMobileCard({
    product,
}: Props) {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="rounded-xl border bg-white">

            <div className="p-4">

                <div className="flex items-start justify-between">

                    <div>

                        <h3 className="font-semibold">
                            {product.name}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                            {product.category} • {product.brand}
                        </p>

                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="rounded-md p-1 hover:bg-slate-100"
                    >
                        {expanded
                            ? <Minus size={18} />
                            : <Plus size={18} />}
                    </button>

                </div>

                <div className="mt-4 flex justify-between">

                    <div className="flex items-center gap-1">

                        <PackageCheck size={16} />

                        {product.stock}

                    </div>

                    <div className="flex items-center gap-1">

                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        {product.rating}

                    </div>

                    <div className="flex items-center gap-1 text-emerald-600 font-semibold">

                        <BadgeDollarSign size={16} />

                        {product.price.toLocaleString()}

                    </div>

                </div>

                {expanded && (

                    <div className="mt-4 border-t pt-4">

                        <p className="text-sm text-slate-600">
                            {product.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-sm">

                            <BadgeCheck size={16} />

                            Created: {new Date(product.createdAt).toLocaleDateString()}

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}