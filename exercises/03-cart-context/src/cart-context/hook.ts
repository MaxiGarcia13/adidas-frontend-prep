import { use } from 'react';
import { CartContext } from './context';

export function useCart() {
  return use(CartContext);
}
