import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  addToCart,
  loadProducts,
  selectCartTotal,
  toggleFailNext,
} from "./store/productsSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const { items, status, error, failNext, cart } = useAppSelector((s) => s.products);
  const total = useAppSelector(selectCartTotal);

  useEffect(() => {
    void dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="header">
        <h1>Async Redux shop</h1>
        <div className="row">
          <span className="badge">Total €{total}</span>
          <span className="badge">10</span>
        </div>
      </header>

      <div className="row" style={{ marginBottom: "1rem" }}>
        <button type="button" onClick={() => dispatch(loadProducts())}>
          Reload
        </button>
        <label className="row">
          <input
            type="checkbox"
            checked={failNext}
            onChange={() => dispatch(toggleFailNext())}
          />
          Fail next fetch
        </label>
        <span className="muted">status: {status}</span>
      </div>

      {error && <p className="error">{error}</p>}

      <ul>
        {items.map((p) => (
          <li key={p.id} className="row">
            {p.name} · €{p.price}
            <button type="button" onClick={() => dispatch(addToCart(p.id))}>
              Add
            </button>
          </li>
        ))}
      </ul>

      <p className="muted">
        Cart lines: {cart.map((l) => `${l.productId}×${l.qty}`).join(", ") || "none"}
      </p>
    </div>
  );
}
