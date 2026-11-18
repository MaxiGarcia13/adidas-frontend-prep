import type { CartLine } from './cart-panel';
import type { Product } from './data/products';
import { useState } from 'react';
import { CartPanel } from './cart-panel';
import { Header } from './header';
import { Shelf } from './shelf';

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
