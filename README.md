# Adidas Frontend Interview Prep

Practice hub for a ~30–35 min React/TypeScript screen-share coding / code-review session. AI assistants are allowed (and expected), just like the real interview.

## Environment checklist

```bash
node --version   # 22+ (24 recommended)
pnpm --version
git --version
```

This prep repo uses **pnpm**. (The adidas email may say `npm` — either works in the real session; use whatever the shared repo expects.)

You already need: a GitHub account, a modern browser, and your IDE + AI assistant working.

## How to practice

Install once from the repo root (pnpm workspace):

```bash
pnpm install
```

Then either:

```bash
pnpm --filter prep-01-product-grid-bugs dev
```

or:

```bash
cd exercises/01-product-grid-bugs
pnpm dev
```

3. Read **only** `BRIEF.md` (treat `COACH.md` as spoilers).
4. In Cursor chat, say: **Start exercise 01 as interviewer**
5. Work while narrating (as on a screen share). AI is OK.
6. When done (or timeboxed), say: **Debrief**
7. Optionally: **Teach mode** for a guided walkthrough.

## Tonight (interview tomorrow)

Recommended order:

`00` → `01` → `02` → `03` → one of `05` / `06` → debrief hard. Add `04` if time.

Then rotate Tier 2 variants for spaced reps.

## Exercise index

### Tier 1 — core

| ID                                                     | Theme         | Case                           | Time       |
| ------------------------------------------------------ | ------------- | ------------------------------ | ---------- |
| [00-warmup](exercises/00-warmup)                       | Tooling       | Confirm Node/Vite/browser/IDE  | ~5 min     |
| [01-product-grid-bugs](exercises/01-product-grid-bugs) | Bug hunt      | Fetch race, keys, types, CSS   | ~30 min    |
| [02-wishlist-feature](exercises/02-wishlist-feature)   | Feature       | Wishlist toggle + mock API     | ~30–35 min |
| [03-cart-context](exercises/03-cart-context)           | Context API   | Prop-drill → Context + reducer | ~30–35 min |
| [04-plp-performance](exercises/04-plp-performance)     | Perf          | List re-renders + heavy images | ~30 min    |
| [05-redux-cart](exercises/05-redux-cart)               | Redux Toolkit | Slice, selectors, cart bugs    | ~30–35 min |
| [06-mobx-cart](exercises/06-mobx-cart)                 | MobX          | Store + observer + bugs        | ~30–35 min |

### Tier 2 — variant cases

| ID                                             | Theme         | Distinct case                       | Time       |
| ---------------------------------------------- | ------------- | ----------------------------------- | ---------- |
| [07-checkout-bugs](exercises/07-checkout-bugs) | Bug hunt      | Stale closure, double-submit, nulls | ~30 min    |
| [08-filters-url](exercises/08-filters-url)     | Feature       | Filters synced to URL params        | ~30–35 min |
| [09-context-split](exercises/09-context-split) | Context API   | Mega-provider → split contexts      | ~30–35 min |
| [10-redux-async](exercises/10-redux-async)     | Redux Toolkit | Async thunk + derived totals        | ~30–35 min |
| [11-mobx-computed](exercises/11-mobx-computed) | MobX          | Computed + action discipline        | ~30–35 min |
| [12-perf-filter](exercises/12-perf-filter)     | Perf          | Expensive derived filter            | ~30 min    |

## Rules of the game

- Timebox like the interview (~30–35 min for non-warmup).
- Narrate tradeoffs; interviewers care how you work.
- Prefer small, correct changes over clever rewrites.
- Do not open `COACH.md` until after your attempt (or in Teach mode with the coach).

## Role context

Frontend-focused offer notes for the coach: [docs/OFFER-FRONTEND.md](docs/OFFER-FRONTEND.md).

## Coach commands

See [AGENTS.md](AGENTS.md).
