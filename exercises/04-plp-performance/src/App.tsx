import type { Product } from './data/products';
import { memo, useDeferredValue, useMemo, useState } from 'react';
import { PRODUCTS } from './data/products';

function expensiveFilter(products: Product[], query: string, category: string) {
  const filteredProducts = [];

  for (const product of products) {
    if (category === 'all' || product.category === category) {
      if (product.name.toLowerCase().includes(query.toLowerCase())) {
        filteredProducts.push(product);
      }
    }
  }

  return filteredProducts;
}

function ProductRow({ product }: { product: Product }) {
  return (
    <article className="card">
      <img src={product.imageUrl} alt={product.name} width={300} height={300} loading="lazy" />
      <h2 style={{ fontSize: '0.95rem' }}>{product.name}</h2>
      <p className="muted">
        {product.category}
        {' '}
        · €
        {product.price}
      </p>
    </article>
  );
}

const ProductRowMemo = memo(ProductRow);

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(() => {
    if (deferredQuery.length || category !== 'all') {
      return expensiveFilter(PRODUCTS, deferredQuery, category);
    } else {
      return PRODUCTS;
    }
  }, [deferredQuery, category]);

  return (
    <div className="app">
      <header className="header">
        <h1>PLP perf lab</h1>
        <span className="badge">04</span>
      </header>

      <div className="row" style={{ marginBottom: '1rem' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          aria-label="Search products"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
        >
          <option value="all">All</option>
          <option value="running">Running</option>
          <option value="training">Training</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <span className="muted">
          {visible.length}
          {' '}
          items
        </span>
      </div>

      <div className="grid">
        {visible.slice(0, 60).map((p) => (
          <ProductRowMemo key={p.id} product={p} />
        ))}
      </div>
      <p className="muted">Showing first 60 of filtered results (filter still runs on full set).</p>
    </div>
  );
}
