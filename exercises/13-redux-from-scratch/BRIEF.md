# 13 — Redux Toolkit from scratch

**Timebox:** ~30–35 minutes  
**Format:** Greenfield state setup  
**Goal:** Replace local React state with a Redux Toolkit store you create yourself.

## Context

A small PLP + cart UI already works with `useState` in `App.tsx`. There is **no** store folder and **no** `Provider`. Dependencies (`@reduxjs/toolkit`, `react-redux`) are in `package.json`.

## Tasks

1. Create a Redux Toolkit store + cart/wishlist slice from scratch.
2. Wire `<Provider>` in `main.tsx`.
3. Move cart (add / qty / remove) and wishlist toggle into the store.
4. Header counts and cart panel must read from the store (typed hooks preferred).

## Done when

- Behavior matches the current local-state UI.
- No cart/wishlist `useState` left in React components.
- Store, slice, and Provider are all files you added.

## Constraints

- Use **Redux Toolkit** + `react-redux` only for this exercise (not Zustand/MobX/Context).
