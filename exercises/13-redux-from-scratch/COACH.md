# Coach notes — 13-redux-from-scratch

## Starting state (not bugs)

- Working UI with `useState` in `App.tsx`
- No `src/store/`, no Provider
- Packages already listed; candidate writes setup

## Good signals

- Creates `configureStore` + `createSlice` without copying a half-broken template
- Typed `RootState` / `AppDispatch` + typed hooks
- Add-to-cart increments qty for existing product id
- Wishlist toggle is idempotent (no duplicate ids)
- Derived counts via selectors (or clear derived reads), not duplicated state
- Verifies in browser after wiring Provider

## Common misses

- Forgets Provider → blank/broken or still using local state
- Mutates arrays outside Immer-safe slice reducers incorrectly when hand-rolling
- Puts UI-only ephemeral state into Redux
- Leaves prop drilling instead of reading store in leaf components

## Follow-ups

1. When would you pick Context or Zustand instead of Redux for this cart?
2. What belongs in a selector vs the component?
3. How would you add persistence (e.g. wishlist) with middleware?

## Solution outline

- `store/cartSlice.ts` — `lines`, `wishlistIds`; actions: `addToCart`, `setQty`, `removeFromCart`, `toggleWishlist`
- `store/index.ts` — `configureStore`
- `store/hooks.ts` — `useAppDispatch` / `useAppSelector`
- `main.tsx` — wrap with `<Provider store={store}>`
- Components subscribe via hooks; delete local cart/wishlist state
