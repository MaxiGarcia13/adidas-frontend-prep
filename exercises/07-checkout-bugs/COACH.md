# Coach notes — 07-checkout-bugs

## Planted issues

1. Stale closure: success toast uses old email from first render
2. Double-submit: no `submitting` guard
3. Null crash: `order.shipping!.city` when shipping missing
4. Validation skipped / `as any` on form state

## Good signals

- Repro matrix (empty, invalid, double click)
- Abort or ignore stale response
- Disable button while pending

## Follow-ups

1. How do forms + async interact with StrictMode?
2. Controlled vs uncontrolled inputs here?
3. Where would you add Playwright coverage?

## Solution outline

- Local `submitting` state; disable button
- Validate before API
- Optional chaining / narrowing for shipping
- Capture email const before await
