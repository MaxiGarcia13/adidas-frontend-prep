# 04 — PLP performance

**Timebox:** ~30 minutes  
**Format:** Performance pass  
**Goal:** Make a slow product list usable.

## Context

The catalog feels janky: typing in search or toggling filters freezes the UI; scrolling images is heavy.

## Tasks

1. Reproduce slowness (React Profiler / console time is fine).
2. Fix the main bottlenecks without deleting features.
3. Keep search + category filter working.

## Done when

- Typing in search feels responsive on the provided dataset.
- You can explain what was slow and what you changed.

## Constraints

- Do not fake it by reducing the dataset size in production code (dev-only logs OK).
- Prefer measuring before micro-optimizing.
