# Coach notes — 08-filters-url

## Starter gaps

- Filters are React state only
- No popstate listener
- replaceState vs pushState confusion

## Good signals

- Single source of truth (URL or state derived from URL)
- `popstate` handled
- Avoids feedback loops when syncing

## Follow-ups

1. `pushState` vs `replaceState` for search-as-you-type?
2. How would React Router `useSearchParams` change this?
3. Encoding edge cases?

## Solution outline

- Parse params on mount
- On filter change → `history.pushState` / `replaceState`
- Listen `popstate` to set state
