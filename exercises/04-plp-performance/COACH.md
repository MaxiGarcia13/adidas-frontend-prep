# Coach notes — 04-plp-performance

## Planted issues

1. Huge list (generated 2000+ items) re-rendered on every keystroke
2. Expensive sync work inside render (e.g. sort+filter with artificial CPU burn)
3. Unoptimized images / no lazy loading
4. Inline lambdas causing child re-renders; missing memo where it matters

## Good signals

- Measures first
- Debounce or deferred value for search
- `React.memo` on row sparingly
- `loading="lazy"` on images
- Mentions virtualization as a follow-up

## Follow-ups

1. `useDeferredValue` vs debounce — tradeoffs?
2. When is virtualization worth it?
3. Why can `memo` make things worse?

## Solution outline

- `useDeferredValue(query)` or debounce
- Move heavy filter out of accidental O(n²)
- Memoize row component
- Lazy images; optional windowing mention
