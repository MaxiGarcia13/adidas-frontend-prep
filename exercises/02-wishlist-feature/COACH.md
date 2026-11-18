# Coach notes — 02-wishlist-feature

## Starter gaps

- Heart button is non-functional or TODO
- No persistence
- Count hard-coded
- API helpers unused / incomplete

## Good signals

- Clarifies sync vs local-only
- Derives count from Set/array of ids
- Handles hydration from localStorage safely
- Accessible button (`aria-pressed` / label)

## Follow-ups

1. Context vs lifting state here — why?
2. How would you sync wishlist to a real backend later?
3. Race: rapid toggles before persist — what breaks?

## Solution outline

- `Set<string>` or `string[]` of product ids
- `localStorage` read on mount, write on change
- Header reads same state
