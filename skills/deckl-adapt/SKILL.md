---
name: deckl-adapt
description: Adapt an existing website for small screens, touch, zoom, and variable content while preserving its visual identity. Use for broken mobile composition, overflow, awkward responsive navigation, or desktop effects that fail on touch. Not for a new brand direction.
---

# Deckl Adapt

Make the design feel intentional on each relevant device. Preserve the underlying concept through content order, image framing, type hierarchy, and interaction rather than shrinking the desktop page.

<!-- shared:rules -->
## House rules

- **No diagonal arrows.** Do not add 45-degree arrows to UI: ↗ ↘ ↖ ↙ glyphs, icons such as `ArrowUpRight`, or rotated SVG/CSS arrows, including external-link indicators and hover states. Use a clear label; add a horizontal arrow or chevron only when it signals an action.
- **No decorative section numbers.** Avoid labels such as `01 — About`, a number joined to a rule and a label, or zero-padded counters used only for an editorial look. Use a plain category label or a descriptive heading without substituting another ornament. Keep numbers that convey real order, steps, ranks, dates, or data.

Explicit user requests override these rules. Apply them within the task's scope; in review-only work, report violations without editing.
<!-- /shared:rules -->

## Inspect the failure

Read project instructions and inspect breakpoints, container rules, typography, navigation, overlays, media, and any pinned or hover-based effects. Identify the smallest relevant viewport and realistic content lengths from the project or brief. View actual responsive renders when possible.

Locate the cause of overflow or clipping: intrinsic widths, fixed dimensions, long tokens, grid minimums, sticky positioning, or animation transforms. Do not conceal the symptom with global overflow hiding.

For review-only requests, report observed failures and proposed fixes without editing. Preserve brand, routes, content, and working behavior.

## Recompose

- Establish the correct reading and action order at narrow widths.
- Reduce competing columns and recalibrate spacing while retaining hierarchy.
- Keep expressive desktop imagery meaningful through alternate crops or media ratios.
- Make navigation discoverable and its open state fully usable.
- Keep important comparisons intact: controlled table scrolling may serve users better than hiding columns or turning all data into tall cards.
- Replace hover-only disclosure with visible or explicit interactions for touch and keyboard users.
- Present scroll-driven stories in ordinary flow when pinning would obstruct reading or exceed the viewport.

Break at the point where content needs a different arrangement, using existing project conventions when they work. Do not create a breakpoint for every isolated pixel defect.

## Implement and inspect

Use flexible layouts and appropriate minimum sizing. When a component appears in containers of different widths, a container query (`container-type: inline-size` with `@container`) can adapt it to its own space rather than the viewport. Allow long labels and localized text to wrap. Keep form controls legible and avoid hardcoded heights around variable content.

Check fixed controls, cookie banners, sticky navigation, safe-area handling, and the on-screen keyboard where the task touches them. Prevent layers from covering the primary action or keyboard focus. Preserve meaningful DOM order.

Check narrow, intermediate, and wide widths, plus landscape and zoom where relevant. Exercise menu opening/closing, forms, dialogs, and affected gestures. Use actual device testing if available, and distinguish it from viewport emulation. If the project already has Playwright, `scripts/inspect.mjs` in this skill's folder reports horizontal overflow and its likely source elements: run `node <skill-folder>/scripts/inspect.mjs <url> --widths 320,390,768,1440` from the project root. It writes to a temporary folder and edits nothing; do not install Playwright without the user's agreement.

Check that the desktop design did not regress after shared CSS changes. Run relevant project checks and report tested sizes and remaining limitations. Avoid claiming support for devices or browsers that were not tested.
