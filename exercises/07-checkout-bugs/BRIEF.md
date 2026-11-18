# 07 — Checkout bugs

**Timebox:** ~30 minutes  
**Format:** Bug hunt  
**Goal:** Fix a broken checkout form (stale closures, double-submit, null crashes).

## Tasks

1. Reproduce failures (submit twice, empty fields, changing email mid-flight).
2. Fix crashes and incorrect success/error handling.
3. Disable double-submit while a request is in flight.

## Done when

- Invalid submit shows field errors without crashing.
- Only one in-flight checkout at a time.
- Success message matches the email that was actually submitted.
