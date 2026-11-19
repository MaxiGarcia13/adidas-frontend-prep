# Coach notes — 15-mobx-from-scratch

## Starting state (not bugs)

- Working UI with `useState` in `App.tsx`
- No store file
- `mobx` + `mobx-react-lite` listed; candidate writes setup

## Good signals

- `makeAutoObservable` / `observable` + `action` discipline
- Components wrapped with `observer` where they read observables
- `computed` for count / total / wishlistCount
- Mutations only inside actions (not from event handlers writing fields)
- Mentions when MobX shines (domain models, fine-grained updates)

## Common misses

- Forgets `observer` → UI never updates
- Over-observes everything or wraps Provider-style incorrectly
- Mutates outside actions (strict mode pain)
- Rebuilds arrays in ways that break observability (replacing vs mutating)

## Follow-ups

1. MobX vs Redux for this cart — when each wins?
2. Why `computed` instead of deriving in the component?
3. How does `observer` compare to Zustand selectors for re-renders?

## Solution outline

- `store/cartStore.ts` — observable `lines` + `wishlistIds`; actions; computeds for `count`, `total`, `wishlistCount`
- Export singleton `cartStore`
- `observer` on Header / ProductGrid / CartPanel (or whole App)
- Delete local cart/wishlist state
