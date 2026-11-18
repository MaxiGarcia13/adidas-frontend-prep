export function Header({
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
