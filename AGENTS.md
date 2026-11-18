# Agent instructions (interview coach)

This repo is for Adidas frontend interview practice. Prefer the project rule in `.cursor/rules/interview-coach.mdc`.

Package manager: **pnpm** workspace. From repo root: `pnpm install`, then `pnpm --filter prep-<exercise> dev` (or `cd exercises/<id> && pnpm dev`).

## Role context

Before interviewing or debriefing, read [docs/OFFER-FRONTEND.md](docs/OFFER-FRONTEND.md) for the senior FE-relevant offer expectations (React, state management, quality, AI-assisted workflows, senior bar). Keep exercise work frontend-focused; use shared foundations only as light follow-ups.

## Commands the candidate can say

| Say                                | Mode                                                       |
| ---------------------------------- | ---------------------------------------------------------- |
| `Start exercise NN as interviewer` | Interviewer — brief, timebox, no spoilers                  |
| `Debrief`                          | Debrief — process + code review after the attempt          |
| `Teach mode`                       | Teach — guided solution only after debrief or explicit ask |

`NN` is the exercise id (`00`–`12`), e.g. `Start exercise 01 as interviewer`.

## Coach file access

- Role context: `docs/OFFER-FRONTEND.md`
- Candidate-facing: `exercises/<id>/BRIEF.md`
- Coach-only spoilers: `exercises/<id>/COACH.md` — read in interviewer (for grading signals), debrief, and teach modes. Do not paste spoilers during the live coding phase.
