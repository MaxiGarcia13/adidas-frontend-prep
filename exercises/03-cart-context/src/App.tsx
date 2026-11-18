import type { Product } from './data/products';
import { useState } from 'react';
import { PRODUCTS } from './data/products';

interface CartLine { productId: string; name: string; price: number; qty: number }

function Header({
  count,
  total,
}: {
  count: number;
  total: number;
}) {
  return (
    <header className="header">
      <h1>Shop</h1>
      <div className="row">
        <span className="badge">
          Cart:
          {' '}
          {count}
          {' '}
          · €
          {total}
        </span>
        <span className="badge">03</span>
      </div>
    </header>
  );
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) {
  return (
    <article className="card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>
        €
        {product.price}
      </p>
      <button type="button" onClick={() => onAdd(product)}>
        Add to cart
      </button>
    </article>
  );
}

function Shelf({
  onAdd,
}: {
  onAdd: (p: Product) => void;
}) {
  return (
    <div className="grid">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

function CartPanel({
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

/** Intentionally prop-drilled — refactor to Context. */
export default function App() {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = (p: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === p.id);
      if (existing) {
        return prev.map((l) =>
          l.productId === p.id
            ? { ...l, qty: l.qty + 1 }
            : l,
        );
      }
      return [
        ...prev,
        {
          productId: p.id,
          name: p.name,
          price: p.price,
          qty: 1,
        },
      ];
    });
  };

  const inc = (id: string) =>
    setLines((prev) =>
      prev.map((l) => (l.productId === id
        ? { ...l, qty: l.qty + 1 }
        : l)),
    );

  const dec = (id: string) =>
    setLines((prev) =>
      prev
        .map((l) => (l.productId === id
          ? { ...l, qty: l.qty - 1 }
          : l))
        .filter((l) => l.qty > 0),
    );

  const remove = (id: string) =>
    setLines((prev) => prev.filter((l) => l.productId !== id));

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((n, l) => n + l.qty * l.price, 0);

  return (
    <div className="app">
      <Header count={count} total={total} />
      <Shelf onAdd={add} />
      <CartPanel lines={lines} onInc={inc} onDec={dec} onRemove={remove} />
    </div>
  );
}
