---
description: Implement a page or section from a design handoff file
argument-hint: <path to handoff, e.g. docs/design/cennik-handoff.md>
---

Handoff file: $ARGUMENTS
If no path was given, list files in docs/design/ and ask which one to use.

1. Read the handoff, docs/style-guide.md and the existing components
   it touches. Don't write code yet.
2. Present a plan: existing components to reuse, new components
   (with location per AGENTS.md), data to add to data/,
   and anything in the handoff that conflicts with the style guide.
   Stop and wait for my approval.
3. Implement the approved plan. Content goes to data/, not into components.
4. Run npm run build and fix all errors.
5. Start the dev server if it's not running. Using Playwright, screenshot
   the changed pages at 375, 640, 1024 and 1440 px. Compare with the
   handoff: layout, spacing, text wrapping, no horizontal scroll,
   visible focus states. Fix differences and re-check.
6. Review your diff against AGENTS.md and fix violations.
7. Summarize: what was done, deviations from the handoff and why.
   Record lasting non-obvious choices in docs/decisions.md and
   open items in docs/todo.md.
