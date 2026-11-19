import { PRODUCTS } from '@prep/shared/products';
import { useMemo } from 'react';
import { useCart, useWishList } from './store';

export interface CartLine {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

/** Local state on purpose — replace with Zustand from scratch. */
export default function App() {
  const lines = useCart((state) => state.lines);
  const addToCart = useCart((state) => state.addToCart);
  const setQty = useCart((state) => state.setQty);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const wishListIds = useWishList((state) => state.wishListIds);
  const toggleWishlist = useWishList((state) => state.toggleWishlist);

  const cartCount = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );
  const cartTotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.price * line.qty, 0),
    [lines],
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Zustand from scratch</h1>
        <div className="row">
          <span className="badge">
            Cart:
            {' '}
            {cartCount}
            {' '}
            · €
            {cartTotal}
          </span>
          <span className="badge">
            Wish:
            {' '}
            {wishListIds.length}
          </span>
          <span className="badge">14</span>
        </div>
      </header>

      <div className="grid">
        {PRODUCTS.map((product) => {
          const wished = wishListIds.includes(product.id);
          return (
            <article className="card" key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>
                €
                {product.price}
              </p>
              <div className="row">
                <button
                  type="button"
                  onClick={() => addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    qty: 1,
                  })}
                >
                  Add to cart
                </button>
                <button type="button" onClick={() => toggleWishlist(product.id)}>
                  {wished ? '♥' : '♡'}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <section className="stack" style={{ marginTop: '1.5rem' }}>
        <h2>Cart</h2>
        {lines.length === 0 && <p className="muted">Empty</p>}
        {lines.map((line) => (
          <div className="row" key={line.productId}>
            <strong>{line.name}</strong>
            <button type="button" onClick={() => setQty(line.productId, line.qty - 1)}>
              −
            </button>
            <span>{line.qty}</span>
            <button type="button" onClick={() => setQty(line.productId, line.qty + 1)}>
              +
            </button>
            <button type="button" onClick={() => removeFromCart(line.productId)}>
              Remove
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
