import { useMemo, useState } from 'react';
import { PRODUCTS } from './data/products';

export interface CartLine {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

/** Local state on purpose — replace with Redux Toolkit from scratch. */
export default function App() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const cartCount = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );
  const cartTotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.price * line.qty, 0),
    [lines],
  );

  function addToCart(productId: string, name: string, price: number) {
    setLines((prev) => {
      const existing = prev.find((line) => line.productId === productId);
      if (existing) {
        return prev.map((line) =>
          (line.productId === productId
            ? { ...line, qty: line.qty + 1 }
            : line));
      }
      return [
        ...prev,
        { productId, name, price, qty: 1 },
      ];
    });
  }

  function setQty(productId: string, qty: number) {
    setLines((prev) => {
      if (qty <= 0) {
        return prev.filter((line) => line.productId !== productId);
      }
      return prev.map((line) =>
        (line.productId === productId
          ? { ...line, qty }
          : line));
    });
  }

  function removeFromCart(productId: string) {
    setLines((prev) => prev.filter((line) => line.productId !== productId));
  }

  function toggleWishlist(productId: string) {
    setWishlistIds((prev) =>
      (prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]));
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Redux from scratch</h1>
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
            {wishlistIds.length}
          </span>
          <span className="badge">13</span>
        </div>
      </header>

      <div className="grid">
        {PRODUCTS.map((product) => {
          const wished = wishlistIds.includes(product.id);
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
                  onClick={() => addToCart(product.id, product.name, product.price)}
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
