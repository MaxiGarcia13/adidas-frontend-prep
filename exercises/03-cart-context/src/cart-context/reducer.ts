import type { Product } from '../data/products';
import type { ProductCart } from './context';

type Action
  = { type: 'inc'; payload: string }
    | { type: 'dec'; payload: string }
    | { type: 'add'; payload: Product }
    | { type: 'remove'; payload: string };

export function cartReducer(state: ProductCart[], action: Action): ProductCart[] {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          qty: 1,
        },
      ];
    case 'inc':
      return state.map((product) => product.id === action.payload
        ? { ...product, qty: product.qty + 1 }
        : product);
    case 'dec':
      return state.map((product) => product.id === action.payload
        ? { ...product, qty: product.qty - 1 }
        : product).filter((product) => product.qty > 0);
    case 'remove':
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}
