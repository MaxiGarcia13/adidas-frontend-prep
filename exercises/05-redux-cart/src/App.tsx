import { PRODUCTS } from './data/products';
import {
  addToCart,
  selectCartCount,
  selectWishlistCount,
  toggleWishlist,
} from './store/cartSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';

export default function App() {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const wishlistCount = useAppSelector(selectWishlistCount);
  const wishlistIds = useAppSelector((state) => state.cart.wishlistIds);

  return (
    <div className="app">
      <header className="header">
        <h1>Redux shop</h1>
        <div className="row">
          <span className="badge">
            Cart:
            {cartCount}
          </span>
          <span className="badge">
            Wish:
            {wishlistCount}
          </span>
          <span className="badge">05</span>
        </div>
      </header>

      <div className="grid">
        {PRODUCTS.map((p) => {
          const wished = wishlistIds.includes(p.id);
          return (
            <article className="card" key={p.id}>
              <img src={p.imageUrl} alt={p.name} />
              <h2>{p.name}</h2>
              <p>
                €
                {p.price}
              </p>
              <div className="row">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      addToCart({ productId: p.id, name: p.name, price: p.price }),
                    )}
                >
                  Add to cart
                </button>
                <button type="button" onClick={() => dispatch(toggleWishlist(p.id))}>
                  {wished ? '♥' : '♡'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
