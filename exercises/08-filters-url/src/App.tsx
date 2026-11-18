import { useMemo, useState } from "react";
import { PRODUCTS } from "./data/products";

export default function App() {
  // TODO: initialize from URL and keep URL in sync (including back/forward)
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");

  const visible = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesQuery = p.name.toLowerCase().includes(q.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [q, category]);

  return (
    <div className="app">
      <header className="header">
        <h1>Filterable catalog</h1>
        <span className="badge">08</span>
      </header>

      <div className="row" style={{ marginBottom: "1rem" }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          aria-label="Search"
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
      </div>

      <ul>
        {visible.map((p) => (
          <li key={p.id}>
            {p.name} · {p.category} · €{p.price}
          </li>
        ))}
      </ul>
      <p className="muted">URL should reflect filters and restore on load / back.</p>
    </div>
  );
}
