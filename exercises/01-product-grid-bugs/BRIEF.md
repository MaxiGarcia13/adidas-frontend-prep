# 01 — Product grid bugs

**Timebox:** ~30 minutes  
**Format:** Code review / bug hunt  
**Goal:** Fix a broken product listing page so it loads reliably and renders correctly.

## Context

A junior engineer left a PLP (product list page) in a rough state. Marketing needs it demoable.

## Tasks

1. Run the app and reproduce issues.
2. Fix whatever prevents a correct, stable product grid.
3. Leave a short note (comment or chat) on the riskiest bug you found.

## Done when

- Products load and display with sensible UI.
- Refreshing / remounting does not leave the UI in a wrong state.
- No obvious React key / type crash in the console for the happy path.

## Constraints

- Keep the mock API in `src/api.ts` (you may fix it).
- No new state libraries.
