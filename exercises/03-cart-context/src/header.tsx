import { useCart } from './cart-context';

export function Header() {
  const { count, total } = useCart();

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
