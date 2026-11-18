# 02 — Wishlist feature

**Timebox:** ~30–35 minutes  
**Format:** Feature build  
**Goal:** Add a working wishlist to an incomplete PLP.

## Context

Products already render. Wishlist heart / list is stubbed or missing.

## Tasks

1. Let users toggle products on/off a wishlist.
2. Show wishlist count in the header.
3. Persist wishlist across refresh (`localStorage` is fine).
4. Wire the mock API helpers in `src/api.ts` (or replace with local state if you justify it).

## Done when

- Toggle works per product.
- Header count stays in sync.
- Refresh keeps wishlist.

## Constraints

- No Redux/MobX for this exercise (use React state / Context if needed).
