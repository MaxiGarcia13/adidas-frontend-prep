import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS } from "./data/products";

type CartLine = { id: string; name: string; price: number; qty: number };

type AppContextValue = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  query: string;
  setQuery: (q: string) => void;
  cart: CartLine[];
  add: (id: string, name: string, price: number) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("missing provider");
  return ctx;
}

function MegaProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<CartLine[]>([]);

  const add = (id: string, name: string, price: number) => {
    setCart((prev) => {
      const hit = prev.find((l) => l.id === id);
      if (hit) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { id, name, price, qty: 1 }];
    });
  };

  // BUG: mega value + new object every render
  const value: AppContextValue = {
    theme,
    setTheme,
    query,
    setQuery,
    cart,
    add,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function RenderCounter({ label }: { label: string }) {
  const renders = useRef(0);
  renders.current += 1;
  return (
    <span className="muted">
      {label} renders: {renders.current}
    </span>
  );
}

function SearchBox() {
  const { query, setQuery } = useApp();
  return (
    <div className="stack">
      <RenderCounter label="SearchBox" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
        aria-label="Search"
      />
    </div>
  );
}

function ProductList() {
  const { query, add } = useApp();
  const list = useMemo(
    () => PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  return (
    <div className="stack">
      <RenderCounter label="ProductList" />
      <ul>
        {list.map((p) => (
          <li key={p.id} className="row">
            {p.name} · €{p.price}
            <button type="button" onClick={() => add(p.id, p.name, p.price)}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CartBadge() {
  const { cart } = useApp();
  const count = cart.reduce((n, l) => n + l.qty, 0);
  return (
    <div className="stack">
      <RenderCounter label="CartBadge" />
      <span className="badge">Cart items: {count}</span>
    </div>
  );
}

export default function App() {
  return (
    <MegaProvider>
      <div className="app">
        <header className="header">
          <h1>Mega context lab</h1>
          <span className="badge">09</span>
        </header>
        <p className="muted">
          Typing search should not spam CartBadge renders after you split contexts.
        </p>
        <div className="stack" style={{ gap: "1rem" }}>
          <SearchBox />
          <CartBadge />
          <ProductList />
        </div>
      </div>
    </MegaProvider>
  );
}
