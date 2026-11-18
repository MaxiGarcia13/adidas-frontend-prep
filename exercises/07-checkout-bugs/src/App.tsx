import type { FormEvent } from 'react';
import { useState } from 'react';
import { submitCheckout } from './api';

export default function App() {
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('42');
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const result = await submitCheckout({ email, size, qty });
      const city = result.shipping!.city;
      setMessage(`Order ${result.orderId} for ${email} ships to ${city}`);
    } catch (err) {
      setError(err instanceof Error
        ? err.message
        : 'Checkout failed');
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Checkout</h1>
        <span className="badge">07</span>
      </header>

      <form className="stack" onSubmit={onSubmit} style={{ maxWidth: 420 }}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Size
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
          </select>
        </label>
        <label>
          Qty
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </label>
        <button type="submit">Place order</button>
      </form>

      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
      <p className="muted">Tip: try qty 2 (even) to hit a shipping edge case.</p>
    </div>
  );
}
