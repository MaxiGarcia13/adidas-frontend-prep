import { PRODUCTS } from '@prep/shared/products';
import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';
import { cartStore } from './store';

/** Local state on purpose — replace with MobX from scratch. */
// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const lines = cartStore.lines;

  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const cartCount = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );
  const cartTotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.price * line.qty, 0),
    [lines],
  );

  function toggleWishlist(productId: string) {
    setWishlistIds((prev) =>
      (prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]));
  }

  return (
    <div className="app">
      <header className="header">
        <h1>MobX from scratch</h1>
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
          <span className="badge">15</span>
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
                  onClick={() => cartStore.addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
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
            <button type="button" onClick={() => cartStore.setQty(line.productId, line.qty - 1)}>
              −
            </button>
            <span>{line.qty}</span>
            <button type="button" onClick={() => cartStore.setQty(line.productId, line.qty + 1)}>
              +
            </button>
            <button type="button" onClick={() => cartStore.removeFromCart(line.productId)}>
              Remove
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default observer(App);
