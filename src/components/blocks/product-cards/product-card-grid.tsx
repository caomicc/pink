import { ProductCard, type ProductCardData } from './product-card';

export type { ProductCardData };

export function ProductCardGrid({ products }: { products: ProductCardData[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
