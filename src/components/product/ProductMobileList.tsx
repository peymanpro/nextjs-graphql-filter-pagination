import { Product } from "@/types/product";
import { ProductMobileCard } from "./ProductMobileCard";

interface Props {
    products: Product[];
}

export function ProductMobileList({
    products,
}: Props) {

    return (
        <div className="space-y-4">
            {products.map(product => (
                <ProductMobileCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}