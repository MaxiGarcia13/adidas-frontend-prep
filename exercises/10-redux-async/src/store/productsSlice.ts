import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, type Product } from "../api";

type Status = "idle" | "loading" | "succeeded" | "failed";

type CartLine = { productId: string; qty: number };

type State = {
  items: Product[];
  status: Status;
  error: string | null;
  cart: CartLine[];
  failNext: boolean;
};

const initialState: State = {
  items: [],
  status: "idle",
  error: null,
  cart: [],
  failNext: false,
};

export const loadProducts = createAsyncThunk(
  "products/load",
  async (_, { getState }) => {
    const state = getState() as { products: State };
    return fetchProducts(state.products.failNext);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const line = state.cart.find((l) => l.productId === action.payload);
      if (line) line.qty += 1;
      else state.cart.push({ productId: action.payload, qty: 1 });
    },
    toggleFailNext(state) {
      state.failNext = !state.failNext;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    // BUG: rejected handler missing — candidate should add
  },
});

export const { addToCart, toggleFailNext } = productsSlice.actions;
export default productsSlice.reducer;

export const selectCartTotal = (state: { products: State }) => {
  // BUG: ignores qty / wrong join
  return state.products.cart.reduce((sum, line) => {
    const product = state.products.items.find((p) => p.id === line.productId);
    return sum + (product?.price ?? 0);
  }, 0);
};
