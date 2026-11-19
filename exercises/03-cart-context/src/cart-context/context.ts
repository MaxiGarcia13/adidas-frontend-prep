import type { Product } from '@prep/shared/products';
import { createContext } from 'react';

interface CartContextType {
  cart: ProductCart[];
  count: number;
  total: number;
  add: (newProduct: Product) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
}

export interface ProductCart extends Pick<Product, 'id' | 'name' | 'price'> {
  qty: number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  count: 0,
  total: 0,
  add: () => {},
  inc: () => {},
  dec: () => {},
  remove: () => {},
});
