# 09 — Split Context providers

**Timebox:** ~30–35 minutes  
**Format:** Context API (variant)  
**Goal:** Fix re-render hell from a mega-provider.

## Context

One giant context holds theme, cart, and user. Typing in a search box re-renders the whole tree including the cart badge and product grid unnecessarily.

## Tasks

1. Observe the problem (Profiler or render counters).
2. Split contexts / memoize so unrelated updates do not re-render everything.
3. Keep behavior the same.

## Done when

- Changing search text does not increment cart panel render count every keystroke.
- Cart still updates when adding items.
