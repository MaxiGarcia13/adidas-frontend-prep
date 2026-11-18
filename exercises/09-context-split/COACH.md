# Coach notes — 09-context-split

## Planted issues

- Single `AppContext` with `{ theme, setTheme, query, setQuery, cart, add }`
- Value object recreated every render
- Heavy children consume whole context

## Good signals

- Splits search vs cart contexts
- Memoizes provider value
- Or colocate search state above only the search UI

## Follow-ups

1. State/dispatch context split — why?
2. Does `memo` help without splitting? When not?
3. Redux/MobX comparison for selective subscriptions

## Solution outline

- `CartProvider` + `SearchProvider` (or lift search out of context)
- Stable context values with `useMemo`
- Render counters prove the fix
