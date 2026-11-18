import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CartLine { productId: string; name: string; price: number; qty: number }

interface CartState {
  lines: CartLine[];
  wishlistIds: string[];
}

const initialState: CartState = {
  lines: [],
  wishlistIds: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ productId: string; name: string; price: number }>,
    ) {
      const index = state.lines.findIndex((l) => l.productId === action.payload.productId);
      if (index !== -1) {
        state.lines[index].qty++;
      } else {
        state.lines.push({ ...action.payload, qty: 1 });
      }
    },
    toggleWishlist(state, action: PayloadAction<string>) {
      if (state.wishlistIds.includes(action.payload)) {
        state.wishlistIds = state.wishlistIds.filter((id) => id !== action.payload);
      } else {
        state.wishlistIds.push(action.payload);
      }
    },
  },
});

export const { addToCart, toggleWishlist } = cartSlice.actions;
export default cartSlice.reducer;

export function selectCartCount(state: { cart: CartState }) {
  return state.cart.lines.reduce((n, l) => n + l.qty, 0);
}

export const selectWishlistCount = (state: { cart: CartState }) => state.cart.wishlistIds.length;
