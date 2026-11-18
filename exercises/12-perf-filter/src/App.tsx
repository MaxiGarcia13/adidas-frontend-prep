import { useState } from "react";
import { PRODUCTS, type Product } from "./data/products";

function derive(products: Product[], query: string, inStockOnly: boolean, sort: string) {
  // Pathological: for each product, rescan all products' tags (O(n²))
  const filtered = products.filter((p) => {
    if (inStockOnly && !p.inStock) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    const tagHit = products.some((other) =>
      other.tags.some((t) => p.tags.includes(t) && t.includes(q))
    );
    return p.name.toLowerCase().includes(q) || tagHit;
  });

  return filtered.sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    return a.name.localeCompare(b.name);
  });
}

export default function App() {
  const [query, setQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState("name");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // BUG: theme in same component forces derive on theme toggle too
  const visible = derive(PRODUCTS, query, inStockOnly, sort);

  return (
    <div
      className="app"
      style={{ background: theme === "dark" ? "#222" : "#f6f6f6", color: theme === "dark" ? "#f5f5f5" : "#111" }}
    >
      <header className="header">
        <h1>Filter perf lab</h1>
        <span className="badge">12</span>
      </header>

      <div className="row" style={{ marginBottom: "1rem" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name/tags…"
          aria-label="Search"
        />
        <label className="row">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In stock only
        </label>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        <button type="button" onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
          Toggle theme
        </button>
        <span className="muted">{visible.length} shown</span>
      </div>

      <ul>
        {visible.slice(0, 40).map((p) => (
          <li key={p.id}>
            {p.name} · €{p.price} · {p.tags.join(", ")}
            {!p.inStock ? " · OOS" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
