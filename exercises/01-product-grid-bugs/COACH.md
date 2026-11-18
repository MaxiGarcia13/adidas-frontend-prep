# Coach notes — 01-product-grid-bugs

## Planted issues

1. **Fetch race:** no abort / ignore-stale; StrictMode double-fetch can set stale empty/error state.
2. **Unstable keys:** `key={index}` and duplicate-prone mapping.
3. **Type hole:** API returns `price` as string sometimes; UI does arithmetic → NaN.
4. **CSS:** `.grid` overridden with `display: block` in a late rule / broken card layout in `App.css` or inline.
5. **Missing loading/error UI** or error swallowed.

## Good signals

- Reproduces before fixing
- Mentions StrictMode / race
- Fixes keys to stable ids
- Normalizes API types
- Verifies in browser

## Bad signals

- Rewrites the whole app
- Blind AI accept without reading
- Ignores console errors

## Follow-ups

1. How do you cancel in-flight fetches in modern React?
2. Why are index keys dangerous on a sortable list?
3. How would you add a unit test for the price normalization?

## Solution outline

- `useEffect` with `cancelled` flag or `AbortController`
- `key={product.id}`
- `Number(price)` / zod-ish guard in API layer
- Fix CSS grid; show loading + error states
