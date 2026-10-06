---
name: deckl-adapt
description: Adapt an existing website for small screens, touch, zoom, and variable content while preserving its visual identity. Use for broken mobile composition, overflow, awkward responsive navigation, or desktop effects that fail on touch. Not for a new brand direction.
---

# Deckl Adapt

Make the design feel intentional on each relevant device. Preserve the underlying concept through content order, image framing, type hierarchy, and interaction rather than shrinking the desktop page.

## GPT-specific icon rule

When using a GPT model, do not introduce 45-degree diagonal arrows in UI: no ↗, ↘, ↖, or ↙ glyphs, diagonal arrow icons (such as `ArrowUpRight`), or SVG/CSS equivalents. This includes buttons, navigation, cards, external-link indicators, and hover states. Prefer a clear text label; use a horizontal arrow or chevron only when it communicates an action. Apply this to UI within the requested scope, unless the user explicitly requests a diagonal arrow. In review-only work, flag violations without editing.

## Section labels for all models

Do not add decorative section numbers paired with a dash or horizontal rule, such as `01 — The everyday`, `01 -- About`, or a number followed by a CSS/SVG line and a label. Avoid automatic zero-padded chapter counters used only to signal an editorial look. Prefer a concise category label or a descriptive heading in natural case, with restrained typography and whitespace. Do not replace this with mandatory dots, pills, or other ornaments. Keep numbering when it conveys real order, steps, ranks, dates, or data, or when explicitly requested. Apply changes within the task's scope; review-only skills flag this pattern without editing.

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

Use flexible layouts and appropriate minimum sizing. Allow long labels and localized text to wrap. Keep form controls legible and avoid hardcoded heights around variable content.

Check fixed controls, cookie banners, sticky navigation, safe-area handling, and the on-screen keyboard where the task touches them. Prevent layers from covering the primary action or keyboard focus. Preserve meaningful DOM order.

Check narrow, intermediate, and wide widths, plus landscape and zoom where relevant. Exercise menu opening/closing, forms, dialogs, and affected gestures. Use actual device testing if available, and distinguish it from viewport emulation.

Check that the desktop design did not regress after shared CSS changes. Run relevant project checks and report tested sizes and remaining limitations. Avoid claiming support for devices or browsers that were not tested.
