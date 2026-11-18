import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <h1>Prep warmup</h1>
        <span className="badge">00</span>
      </header>
      <p className="muted">If you can click this and edit this file, you are ready.</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count:
        {' '}
        {count}
      </button>
    </div>
  );
}
