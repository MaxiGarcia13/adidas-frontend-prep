import type { Product } from './data/products';
import { PRODUCTS } from './data/products';
import { ProductCard } from './product-card';

export function Shelf({
  onAdd,
}: {
  onAdd: (p: Product) => void;
}) {
  return (
    <div className="grid">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
