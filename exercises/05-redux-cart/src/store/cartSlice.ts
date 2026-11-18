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
      const existing = state.lines.find((l) => l.productId === action.payload.productId);
      if (existing) {
        return;
      }
      state.lines.push({ ...action.payload, qty: 1 });
    },
    toggleWishlist(state, action: PayloadAction<string>) {
      state.wishlistIds.push(action.payload);
    },
  },
});

export const { addToCart, toggleWishlist } = cartSlice.actions;
export default cartSlice.reducer;

export function selectCartCount(state: { cart: CartState }) {
  return state.cart.lines.reduce((n, l) => n + l.qty, 0);
}

export const selectWishlistCount = (state: { cart: CartState }) => state.cart.lines.length;
