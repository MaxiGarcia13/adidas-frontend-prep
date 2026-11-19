import { PRODUCTS } from '@prep/shared/products';
import { useMemo } from 'react';
import { cartActions, useAppDispatch, useAppSelector, wishListActions } from './store';

/** Local state on purpose — replace with Redux Toolkit from scratch. */
export default function App() {
  const dispatch = useAppDispatch();

  const lines = useAppSelector((state) => state.cart.lines);
  const wishlistIds = useAppSelector((state) => state.wishList.productsIds);

  const cartCount = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );
  const cartTotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.price * line.qty, 0),
    [lines],
  );

  function addToCart(productId: string, name: string, price: number) {
    dispatch(cartActions.addToCart({ productId, name, price }));
  }

  function setQty(productId: string, qty: number) {
    dispatch(cartActions.setQty({ productId, qty }));
  }

  function removeFromCart(productId: string) {
    dispatch(cartActions.removeFromCart(productId));
  }

  function toggleWishlist(productId: string) {
    dispatch(wishListActions.toggleWishList(productId));
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
