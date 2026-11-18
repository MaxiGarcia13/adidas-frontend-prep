# 05 — Redux Toolkit cart

**Timebox:** ~30–35 minutes  
**Format:** State feature  
**Goal:** Finish a thin Redux Toolkit cart/wishlist slice and fix planted bugs.

## Context

Store scaffolding exists. Some actions/selectors/UI bindings are wrong or incomplete.

## Tasks

1. Make **Add to cart** and **toggle wishlist** work via Redux.
2. Fix incorrect selectors / immutable update bugs.
3. Show cart count and wishlist count in the header from the store.

## Done when

- Cart and wishlist update correctly from the UI.
- Counts in the header match store state.
- No direct component `useState` for cart/wishlist.

## Constraints

- Use **Redux Toolkit** + `react-redux` already in `package.json`.
