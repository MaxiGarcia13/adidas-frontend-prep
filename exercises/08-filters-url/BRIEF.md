# 08 — Filters synced to URL

**Timebox:** ~30–35 minutes  
**Format:** Feature build  
**Goal:** Keep product filters in sync with the URL query string.

## Tasks

1. Filters: text query + category.
2. Changing filters updates `?q=&category=` (shareable URL).
3. Loading the page with query params restores filters and results.
4. Browser back/forward should restore filter state.

## Done when

- Copy-paste URL reproduces the filtered view.
- Back button works for filter history.

## Constraints

- No router library required — `window.history` + `URLSearchParams` is enough.
