# Coach notes — 06-mobx-cart

## Planted issues

1. Cart panel not wrapped in `observer`
2. Mutating plain array without `makeAutoObservable` field tracking (or replacing array incorrectly)
3. Total computed as method but called wrong / not `@computed`
4. Action not used — mutating in click handler outside action (strict mode)

## Good signals

- Checks `observer` boundaries
- Uses `action` / store methods
- Explains MobX vs Redux briefly

## Follow-ups

1. What does `observer` subscribe to?
2. Why are actions important in MobX?
3. When prefer MobX over Redux?

## Solution outline

- `makeAutoObservable` store with add/remove/setQty
- `computed` for count/total
- Wrap UI with `observer`
