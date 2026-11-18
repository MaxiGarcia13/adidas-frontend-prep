import { PRODUCTS } from './data/products';
import { ProductCard } from './product-card';

export function Shelf() {
  return (
    <div className="grid">
      {PRODUCTS.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </div>
  );
}
