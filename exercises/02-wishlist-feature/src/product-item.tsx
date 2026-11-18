import type { Product } from './data/products';

export function ProductItem(
  { product, wished, onToggleWishlist }:
  {
    product: Product;
    wished: boolean;
    onToggleWishlist: (id: string) => void;
  },
) {
  return (
    <article className="card" key={product.id}>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="muted">{product.brand}</p>
      <p>
        €
        {product.price}
      </p>
      <button type="button" onClick={() => onToggleWishlist(product.id)}>
        {wished ? '♥ Saved' : '♡ Save'}
      </button>
    </article>
  );
}
