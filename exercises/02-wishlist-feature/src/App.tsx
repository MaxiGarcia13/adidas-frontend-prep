import { useEffect, useState } from 'react';
import { loadWishlistIds, saveWishlistIds } from './api';
import { PRODUCTS } from './data/products';
import { ProductItem } from './product-item';

export default function App() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    loadWishlistIds().then((ids) => {
      setWishlistIds(ids);
    });
  }, []);

  function toggleWishlist(id: string) {
    setWishlistIds((prev) => {
      let newWishlistIds = [...prev];

      if (newWishlistIds.includes(id)) {
        newWishlistIds = prev.filter((itemId) => itemId !== id);
      } else {
        newWishlistIds.push(id);
      }

      saveWishlistIds(newWishlistIds);
      return newWishlistIds;
    });
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Catalog</h1>
        <div className="row">
          <span className="badge">
            Wishlist:
            {wishlistIds.length}
          </span>
          <span className="badge">02</span>
        </div>
      </header>

      <div className="grid">
        {PRODUCTS.map((product) => {
          const wished = wishlistIds.includes(product.id);
          return (
            <ProductItem
              key={product.id}
              product={product}
              wished={wished}
              onToggleWishlist={toggleWishlist}
            />
          );
        })}
      </div>
    </div>
  );
}
