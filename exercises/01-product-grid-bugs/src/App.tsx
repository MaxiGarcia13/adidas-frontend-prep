import type { ProductDto } from './api';
import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import './App.css';

export default function App() {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Bug: No cancellation / stale response guard (StrictMode double-invoke).
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Product grid</h1>
        <span className="badge">01</span>
      </header>

      {loading && <p className="muted">Loading…</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid product-grid">
        {products.map((product) => {
          const withTax = Number(product.price) * 1.21;

          return (
            <article className="card" key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="muted">{product.brand}</p>
              <p>
                €
                {withTax.toFixed(2)}
                {' '}
                incl. tax
              </p>
              {!product.inStock && <p className="error">Out of stock</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}
