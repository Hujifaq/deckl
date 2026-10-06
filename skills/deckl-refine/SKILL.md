---
name: deckl-refine
description: Improve an existing interface while preserving its successful identity and behavior. Use for broad UI refinement; honor review-only requests and narrowly scoped fixes.
---

# Deckl Refine

Improve the site that exists. Begin with evidence, protect its strongest qualities, and make changes that solve a visible or behavioral problem. No preferred hero, palette, or layout is imposed.

## GPT-specific icon rule

When using a GPT model, do not introduce 45-degree diagonal arrows in UI: no ↗, ↘, ↖, or ↙ glyphs, diagonal arrow icons (such as `ArrowUpRight`), or SVG/CSS equivalents. This includes buttons, navigation, cards, external-link indicators, and hover states. Prefer a clear text label; use a horizontal arrow or chevron only when it communicates an action. Apply this to UI within the requested scope, unless the user explicitly requests a diagonal arrow. In review-only work, flag violations without editing.

## Section labels for all models

Do not add decorative section numbers paired with a dash or horizontal rule, such as `01 — The everyday`, `01 -- About`, or a number followed by a CSS/SVG line and a label. Avoid automatic zero-padded chapter counters used only to signal an editorial look. Prefer a concise category label or a descriptive heading in natural case, with restrained typography and whitespace. Do not replace this with mandatory dots, pills, or other ornaments. Keep numbering when it conveys real order, steps, ranks, dates, or data, or when explicitly requested. Apply changes within the task's scope; review-only skills flag this pattern without editing.

## Diagnose the real weakness

Inspect the relevant rendered page and source, including representative mobile and interaction states. Identify what should survive: type, image treatment, composition, color, density, or motion. Check which skill instructions are active when results seem inexplicably constrained; do not silently edit other installed skills.

Record a short before/change/evidence note for the consequential issues. For example: “The heading competes with the project photo; adjust their scale relationship while preserving the photo and type family; compare at the same viewport.” Do not create a report file unless useful to the project or requested.

Distinguish a composition problem from weak assets, insufficient content, broken behavior, or a deliberate brand choice. A gradient, popular font, centered hero, or card is not a defect by itself. Review-only requests stop at actionable findings.

## Choose and implement

Read [design principles](references/design-principles.md) for affected dimensions and [examples](references/examples.md) for contextual alternatives. For forms, tables, dialogs, or async workflows, read [production interactions](references/production-interactions.md).

Choose changes proportional to the diagnosis. Typography, imagery, color, layout, and motion can develop together. Preserve the established direction unless the user requests a new one; if a substantial redesign is necessary, explain that scope instead of silently replacing the site.

Reuse the existing design system and component behaviors. Keep routes, factual copy, analytics hooks, authentication, and data flows intact unless changing them is requested. Use meaningful grouping, intentional cropping, robust wrapping, and consistent roles without normalizing away personality.

For expressive requests, develop an interaction connected to the site and tune it in the browser. For repeated product tasks, prioritize immediate response and stable controls. Keep content and navigation available under reduced motion and failed animation initialization.

## Prove the improvement

Use [verification](references/verification.md). Compare before and after at the same viewport, scroll position, content, and interaction state. Ask separately whether identity, hierarchy, type, imagery, task completion, and motion improved. Undo or revise your own changes that weaken an existing strength without compensating benefit.

Exercise the affected primary task and its relevant edge states. Fix actual regressions; stop when the scoped defects are resolved. Report source-only review honestly when a rendered comparison is unavailable. A preference claim or self-assigned score is not evidence of improvement.
