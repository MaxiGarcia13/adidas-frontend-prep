import { CartProvider } from './cart-context';
import { CartPanel } from './cart-panel';
import { Header } from './header';
import { Shelf } from './shelf';
/** Intentionally prop-drilled — refactor to Context. */
export default function App() {
  return (
    <div className="app">
      <CartProvider>
        <Header />
        <Shelf />
        <CartPanel />
      </CartProvider>
    </div>
  );
}
