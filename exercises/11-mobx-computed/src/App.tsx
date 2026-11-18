import { observer } from "mobx-react-lite";
import { checkoutStore } from "./store/checkoutStore";

const TAX_RATE = 0.21;

const App = observer(function App() {
  // BUG: totals computed in component; qty mutated outside actions
  const subtotal = checkoutStore.lines.reduce((n, l) => n + l.price * l.qty, 0);
  const discount = checkoutStore.discountCode === "SPORT10" ? subtotal * 0.1 : 0;
  const taxedBase = subtotal - discount;
  const tax = taxedBase * TAX_RATE;
  const total = taxedBase + tax;

  return (
    <div className="app">
      <header className="header">
        <h1>MobX checkout totals</h1>
        <span className="badge">11</span>
      </header>

      <div className="stack">
        {checkoutStore.lines.map((line, index) => (
          <div className="row" key={line.id}>
            <strong>{line.name}</strong>
            <button
              type="button"
              onClick={() => {
                checkoutStore.lines[index].qty -= 1;
              }}
            >
              −
            </button>
            <span>{line.qty}</span>
            <button
              type="button"
              onClick={() => {
                checkoutStore.lines[index].qty += 1;
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>

      <label className="stack" style={{ marginTop: "1rem", maxWidth: 280 }}>
        Discount code
        <input
          value={checkoutStore.discountCode}
          onChange={(e) => checkoutStore.setDiscountCode(e.target.value)}
          placeholder="SPORT10"
        />
      </label>

      <ul>
        <li>Subtotal: €{subtotal.toFixed(2)}</li>
        <li>Discount: €{discount.toFixed(2)}</li>
        <li>Tax: €{tax.toFixed(2)}</li>
        <li>
          <strong>Total: €{total.toFixed(2)}</strong>
        </li>
      </ul>
      <p className="muted">Move money math into computed getters; mutate via actions.</p>
    </div>
  );
});

export default App;
