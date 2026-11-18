# 06 — MobX cart

**Timebox:** ~30–35 minutes  
**Format:** State feature  
**Goal:** Fix a MobX store + observer UI so cart updates render correctly.

## Context

A MobX store exists. Some components do not observe; some mutations break reactivity.

## Tasks

1. Make add / remove / qty changes update the UI.
2. Fix store bugs (see broken behavior when clicking).
3. Keep using MobX (`observer`, store) — do not rewrite to Redux/Context.

## Done when

- Cart panel and header react to store changes.
- Quantities and totals are correct.

## Constraints

- `mobx` + `mobx-react-lite` are already dependencies.
