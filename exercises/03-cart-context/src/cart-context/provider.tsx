import type { Product } from '@prep/shared/products';
import { useReducer } from 'react';
import { CartContext } from './context';
import { cartReducer } from './reducer';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const add = (newProduct: Product) => {
    const existing = cart.find((product) => product.id === newProduct.id);

    if (existing) {
      dispatch({ type: 'inc', payload: existing.id });
    } else {
      dispatch({ type: 'add', payload: newProduct });
    }
  };

  const inc = (id: string) => {
    dispatch({ type: 'inc', payload: id });
  };

  const dec = (id: string) => {
    dispatch({ type: 'dec', payload: id });
  };

  const remove = (id: string) => {
    dispatch({ type: 'remove', payload: id });
  };

  const count = cart.reduce((n, l) => n + l.qty, 0);
  const total = cart.reduce((n, l) => n + l.qty * l.price, 0);

  return (
    <CartContext value={{
      cart,
      count,
      total,
      add,
      inc,
      dec,
      remove,
    }}
    >
      {children}
    </CartContext>
  );
}
