# 14 — Zustand from scratch

**Timebox:** ~30–35 minutes  
**Format:** Greenfield state setup  
**Goal:** Replace local React state with a Zustand store you create yourself.

## Context

A small PLP + cart UI already works with `useState` in `App.tsx`. There is **no** store module. `zustand` is in `package.json`.

## Tasks

1. Create a Zustand store for cart + wishlist from scratch.
2. Move cart (add / qty / remove) and wishlist toggle into the store.
3. Prefer selectors so components only re-render for the slices they use.
4. Header counts and cart panel must read from the store.

## Done when

- Behavior matches the current local-state UI.
- No cart/wishlist `useState` left in React components.
- Store module is a file you added (no Provider required).

## Constraints

- Use **Zustand** only for this exercise (not Redux/MobX/Context).
