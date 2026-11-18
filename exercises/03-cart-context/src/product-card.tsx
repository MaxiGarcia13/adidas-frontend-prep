import type { Product } from './data/products';

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) {
  return (
    <article className="card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>
        €
        {product.price}
      </p>
      <button type="button" onClick={() => onAdd(product)}>
        Add to cart
      </button>
    </article>
  );
}
