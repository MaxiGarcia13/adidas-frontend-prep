# Coach notes — 03-cart-context

## Planted issues

- Deep prop drilling: App → Shelf → Card → buttons
- Quantity update mutates array incorrectly or uses wrong id
- Total calculated in multiple places inconsistently

## Good signals

- Splits state vs dispatch context if they mention re-renders
- Reducer with clear action types
- Derived totals (`reduce`) not duplicated state

## Follow-ups

1. When is Context the wrong tool?
2. Why split state/dispatch contexts?
3. How does this compare to Redux Toolkit for a multi-page app?

## Solution outline

- `CartProvider` with `useReducer`
- `useCart()` hook
- Actions: addLine, removeLine, setQty
- Header + panel consume context
