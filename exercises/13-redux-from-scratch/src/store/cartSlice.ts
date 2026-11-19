import { createSlice } from '@reduxjs/toolkit';

interface CartLine {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

export interface CartState {
  lines: CartLine[];
}

const initialState: CartState = {
  lines: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingLine = state.lines.find((line) => line.productId === action.payload.productId);

      if (existingLine) {
        existingLine.qty++;
      } else {
        state.lines.push({ ...action.payload, qty: 1 });
      }
    },

    setQty: (state, action) => {
      const index = state.lines.findIndex((line) => line.productId === action.payload.productId);

      if (state.lines[index] && action.payload.qty >= 0) {
        state.lines[index].qty = action.payload.qty;
      }
    },

    removeFromCart: (state, action) => {
      state.lines = state.lines.filter((line) => line.productId !== action.payload);
    },
  },
});
