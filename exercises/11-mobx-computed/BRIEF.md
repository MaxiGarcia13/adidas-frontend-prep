# 11 — MobX computed totals

**Timebox:** ~30–35 minutes  
**Format:** MobX (variant)  
**Goal:** Fix computed totals and action discipline.

## Tasks

1. Cart subtotal / tax / grand total should come from `computed` values.
2. Fix mutations that happen outside actions (and any over-observe issues).
3. Discount code applies via store method.

## Done when

- Totals update correctly when qty/discount change.
- No direct field writes from React event handlers (use store actions).
