import type { Product } from './data/products';
import { useCart } from './cart-context';

export function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { add } = useCart();

  return (
    <article className="card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>
        €
        {product.price}
      </p>
      <button type="button" onClick={() => add(product)}>
        Add to cart
      </button>
    </article>
  );
}
