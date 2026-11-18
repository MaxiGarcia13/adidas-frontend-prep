import { useCart } from './cart-context';

export interface CartLine { productId: string; name: string; price: number; qty: number }

export function CartPanel() {
  const { cart: lines, inc: onInc, dec: onDec, remove: onRemove } = useCart();

  return (
    <section className="stack" style={{ marginTop: '1.5rem' }}>
      <h2>Cart</h2>
      {lines.length === 0 && <p className="muted">Empty</p>}
      {lines.map((line) => (
        <div className="row" key={line.id}>
          <strong>{line.name}</strong>
          <button type="button" onClick={() => onDec(line.id)}>
            −
          </button>
          <span>{line.qty}</span>
          <button type="button" onClick={() => onInc(line.id)}>
            +
          </button>
          <button type="button" onClick={() => onRemove(line.id)}>
            Remove
          </button>
        </div>
      ))}
    </section>
  );
}
