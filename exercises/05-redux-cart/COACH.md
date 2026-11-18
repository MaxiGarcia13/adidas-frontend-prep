# Coach notes — 05-redux-cart

## Planted issues

1. Slice mutates state incorrectly outside Immer-safe pattern (or spreads wrong)
2. Selector returns new array every time / wrong field
3. `Provider` missing or store not wired in `main.tsx` — check files
4. Wishlist toggle pushes duplicates
5. Cart add does not increment qty for existing id

## Good signals

- Reads slice before editing
- Uses `createSlice` idioms
- Typed hooks (`useAppDispatch` / `useAppSelector`) if present
- Verifies with Redux DevTools if available

## Follow-ups

1. Context vs Redux for this app size?
2. What belongs in a selector vs component?
3. How would you add persistence middleware?

## Solution outline

- Fix `cartSlice` add/toggle reducers
- Wire Provider
- Header uses selectors for counts
