# 10 — Redux async cart

**Timebox:** ~30–35 minutes  
**Format:** Redux Toolkit (variant)  
**Goal:** Load products with `createAsyncThunk` and keep derived cart totals correct.

## Tasks

1. Fetch products into the store (loading / error / success).
2. Add to cart from loaded products.
3. Fix broken derived total selector.
4. Show loading and error states in the UI.

## Done when

- Products appear after load.
- Cart total matches line items.
- Failed fetch shows an error (use the failing endpoint toggle if present).
