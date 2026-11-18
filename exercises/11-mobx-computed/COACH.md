# Coach notes — 11-mobx-computed

## Planted issues

1. UI mutates `store.lines[i].qty = ...` directly in handler
2. Totals recalculated in component instead of `computed`
3. Discount applied twice / not as computed
4. `observer` wrapping too high causing noisy renders (optional discussion)

## Good signals

- Moves mutations into store actions
- `get subtotal()`, `get tax()`, `get total()`
- Explains computed caching

## Follow-ups

1. `computed` vs recalculating in render?
2. `runInAction` when is it needed?
3. MobX vs Redux selectors analogy

## Solution outline

- Actions: inc, dec, setDiscount
- Computeds for money fields
- Observer components read computeds
