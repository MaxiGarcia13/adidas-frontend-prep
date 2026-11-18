import { PRODUCTS } from './data/products';
// import { loadWishlistIds, saveWishlistIds } from "./api";

export default function App() {
  // TODO: replace hard-coded wishlist state with real toggle + persistence
  const wishlistCount = 0;

  return (
    <div className="app">
      <header className="header">
        <h1>Catalog</h1>
        <div className="row">
          <span className="badge">
            Wishlist:
            {wishlistCount}
          </span>
          <span className="badge">02</span>
        </div>
      </header>

      <div className="grid">
        {PRODUCTS.map((product) => {
          const wished = false; // TODO
          return (
            <article className="card" key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="muted">{product.brand}</p>
              <p>
                €
                {product.price}
              </p>
              <button type="button">
                {wished ? '♥ Saved' : '♡ Save'}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
