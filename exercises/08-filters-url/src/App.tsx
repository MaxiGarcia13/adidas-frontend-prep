import { useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from './data/products';

interface QueryParams {
  q?: string;
  category?: string;
}

const initialValues: Required<QueryParams> = {
  q: '',
  category: 'all',
};

function readQueryParam(key: keyof QueryParams) {
  const url = new URL(window.location.href);
  return url.searchParams.get(key) ?? initialValues[key];
}

function updateUrl(params: QueryParams) {
  const url = new URL(window.location.href);

  for (const [key, value] of Object.entries(params)) {
    if (value?.length) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
  }

  window.history.pushState({}, '', url.toString());
}

export default function App() {
  const [q, setQ] = useState(() => readQueryParam('q'));
  const [category, setCategory] = useState(() => readQueryParam('category'));

  const visible = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      const matchesQuery = p.name.toLowerCase().includes(q.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [q, category]);

  function onSetQ(value: string) {
    setQ(value);
    updateUrl({ q: value });
  }

  function onSetCategory(value: string) {
    setCategory(value);
    updateUrl({ category: value });
  }

  useEffect(() => {
    const onPopState = () => {
      setQ(readQueryParam('q'));
      setCategory(readQueryParam('category'));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Filterable catalog</h1>
        <span className="badge">08</span>
      </header>

      <div className="row" style={{ marginBottom: '1rem' }}>
        <input
          value={q}
          onChange={(e) => onSetQ(e.target.value)}
          placeholder="Search…"
          aria-label="Search"
        />
        <select
          value={category}
          onChange={(e) => onSetCategory(e.target.value)}
          aria-label="Category"
        >
          <option value="all">All</option>
          <option value="running">Running</option>
          <option value="training">Training</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>

      <ul>
        {visible.map((p) => (
          <li key={p.id}>
            {p.name}
            {' '}
            ·
            {p.category}
            {' '}
            · €
            {p.price}
          </li>
        ))}
      </ul>
      <p className="muted">URL should reflect filters and restore on load / back.</p>
    </div>
  );
}
