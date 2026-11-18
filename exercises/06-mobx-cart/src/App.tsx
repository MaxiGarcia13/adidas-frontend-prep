import { observer } from "mobx-react-lite";
import { PRODUCTS } from "./data/products";
import { cartStore } from "./store/cartStore";

function Header() {
  // BUG: Header is not an observer — won't re-render when store changes
  return (
    <header className="header">
      <h1>MobX shop</h1>
      <div className="row">
        <span className="badge">
          Cart: {cartStore.count} · €{cartStore.total}
        </span>
        <span className="badge">06</span>
      </div>
    </header>
  );
}

const ProductGrid = observer(function ProductGrid() {
  return (
    <div className="grid">
      {PRODUCTS.map((p) => (
        <article className="card" key={p.id}>
          <img src={p.imageUrl} alt={p.name} />
          <h2>{p.name}</h2>
          <p>€{p.price}</p>
          <button type="button" onClick={() => cartStore.add(p.id, p.name, p.price)}>
            Add to cart
          </button>
        </article>
      ))}
    </div>
  );
});

function CartPanel() {
  // BUG: also not observer
  return (
    <section className="stack" style={{ marginTop: "1.5rem" }}>
      <h2>Cart</h2>
      {cartStore.lines.length === 0 && <p className="muted">Empty</p>}
      {cartStore.lines.map((line) => (
        <div className="row" key={line.productId}>
          <strong>{line.name}</strong>
          <button
            type="button"
            onClick={() => cartStore.setQty(line.productId, line.qty - 1)}
          >
            −
          </button>
          <span>{line.qty}</span>
          <button
            type="button"
            onClick={() => cartStore.setQty(line.productId, line.qty + 1)}
          >
            +
          </button>
          <button type="button" onClick={() => cartStore.remove(line.productId)}>
            Remove
          </button>
        </div>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <ProductGrid />
      <CartPanel />
    </div>
  );
}
