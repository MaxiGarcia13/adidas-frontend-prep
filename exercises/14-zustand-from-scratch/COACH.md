# Coach notes — 14-zustand-from-scratch

## Starting state (not bugs)

- Working UI with `useState` in `App.tsx`
- No `src/store/` (or similar)
- `zustand` listed; candidate writes setup

## Good signals

- `create` store with clear actions + state shape
- Uses selectors (`useStore(s => s.cartCount)`) instead of selecting the whole store
- Add-to-cart increments qty for existing product id
- Wishlist toggle is idempotent
- Mentions no Provider as a deliberate tradeoff vs Redux/Context

## Common misses

- Subscribes to entire store → unnecessary re-renders
- Mutates arrays/objects in place without immutable updates (or without Immer middleware)
- Over-engineers with slices/middleware for this small app
- Keeps prop drilling instead of calling hooks in leaves

## Follow-ups

1. Zustand vs Redux Toolkit for a multi-team commerce app?
2. When do you still want Context alongside Zustand?
3. How would you persist wishlist with Zustand middleware?

## Solution outline

- `store/cartStore.ts` — `create(...)` with `lines`, `wishlistIds`, actions, optional derived getters
- Components: `useCartStore((s) => s.lines)`, `useCartStore((s) => s.add)`, etc.
- Delete local cart/wishlist state; no Provider in `main.tsx`
