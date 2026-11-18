# 03 — Cart with Context API

**Timebox:** ~30–35 minutes  
**Format:** State refactor  
**Goal:** Replace painful prop-drilling with Context API (+ reducer recommended).

## Context

Cart state is threaded through many components via props. It works poorly and is hard to extend.

## Tasks

1. Introduce a cart context (provider + hook).
2. Support add, remove, and update quantity.
3. Show cart item count and total in the header without drilling props.
4. Remove unnecessary prop chains.

## Done when

- Cart actions work from product cards and cart panel.
- Header totals stay correct.
- No cart props drilled more than one level.

## Constraints

- Use **Context API** (optionally `useReducer`). No Redux/MobX here.
