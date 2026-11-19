# 15 — MobX from scratch

**Timebox:** ~30–35 minutes  
**Format:** Greenfield state setup  
**Goal:** Replace local React state with a MobX store + `observer` UI you create yourself.

## Context

A small PLP + cart UI already works with `useState` in `App.tsx`. There is **no** store. `mobx` + `mobx-react-lite` are in `package.json`.

## Tasks

1. Create a MobX store (class or `makeAutoObservable` object) from scratch.
2. Move cart (add / qty / remove) and wishlist toggle into store **actions**.
3. Wrap consuming components with `observer` so they react to changes.
4. Prefer `computed` for cart count / total / wishlist count.

## Done when

- Behavior matches the current local-state UI.
- No cart/wishlist `useState` left in React components.
- UI updates only through observing the store (not forced re-renders).

## Constraints

- Use **MobX** + `mobx-react-lite` only for this exercise (not Redux/Zustand/Context).
