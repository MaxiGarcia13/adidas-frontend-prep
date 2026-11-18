# Coach notes — 12-perf-filter

## Planted issues

1. Filter runs nested loops O(n²) with string work
2. Sort comparator does heavy work
3. Derived list recomputed for unrelated state (e.g. theme toggle)
4. No deferred value / memoization

## Good signals

- Separates unrelated state
- `useMemo` on inputs that matter
- `useDeferredValue` for query
- Removes O(n²) pattern

## Follow-ups

1. Memo vs deferred value?
2. Would a Web Worker help? When?
3. How does this differ from exercise 04?

## Solution outline

- Linear filter
- Memoize by query/sort/inStock
- Defer query
- Keep theme state from invalidating filter unnecessarily
