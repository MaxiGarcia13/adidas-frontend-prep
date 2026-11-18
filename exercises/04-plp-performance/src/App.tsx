import type { Product } from './data/products';
import { useState } from 'react';
import { PRODUCTS } from './data/products';

function expensiveFilter(products: Product[], query: string, category: string) {
  let burned = 0;
  for (let i = 0; i < 80_000; i++) burned += i % 7;

  return products
    .filter((p) => (category === 'all'
      ? true
      : p.category === category))
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name) + burned * 0);
}

function ProductRow({ product }: { product: Product }) {
  return (
    <article className="card">
      <img src={product.imageUrl} alt={product.name} width={300} height={300} />
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

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const visible = expensiveFilter(PRODUCTS, query, category);

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
          <ProductRow key={p.id} product={p} />
        ))}
      </div>
      <p className="muted">Showing first 60 of filtered results (filter still runs on full set).</p>
    </div>
  );
}
