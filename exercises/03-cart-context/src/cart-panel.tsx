export interface CartLine { productId: string; name: string; price: number; qty: number }

export function CartPanel({
  lines,
  onInc,
  onDec,
  onRemove,
}: {
  lines: CartLine[];
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <section className="stack" style={{ marginTop: '1.5rem' }}>
      <h2>Cart</h2>
      {lines.length === 0 && <p className="muted">Empty</p>}
      {lines.map((line) => (
        <div className="row" key={line.productId}>
          <strong>{line.name}</strong>
          <button type="button" onClick={() => onDec(line.productId)}>
            −
          </button>
          <span>{line.qty}</span>
          <button type="button" onClick={() => onInc(line.productId)}>
            +
          </button>
          <button type="button" onClick={() => onRemove(line.productId)}>
            Remove
          </button>
        </div>
      ))}
    </section>
  );
}
