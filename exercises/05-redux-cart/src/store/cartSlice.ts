import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartLine = { productId: string; name: string; price: number; qty: number };

type CartState = {
  lines: CartLine[];
  wishlistIds: string[];
};

const initialState: CartState = {
  lines: [],
  wishlistIds: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ productId: string; name: string; price: number }>
    ) {
      const existing = state.lines.find((l) => l.productId === action.payload.productId);
      if (existing) {
        // BUG: forgot to increment — candidate should fix
        return;
      }
      state.lines.push({ ...action.payload, qty: 1 });
    },
    toggleWishlist(state, action: PayloadAction<string>) {
      // BUG: always pushes → duplicates
      state.wishlistIds.push(action.payload);
    },
  },
});

export const { addToCart, toggleWishlist } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.lines.reduce((n, l) => n + l.qty, 0);

// BUG: wrong — returns lines length not wishlist length (and named confusingly)
export const selectWishlistCount = (state: { cart: CartState }) => state.cart.lines.length;
