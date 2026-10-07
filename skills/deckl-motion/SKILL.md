---
name: deckl-motion
description: Design and implement website motion, from responsive product interactions to expressive scroll experiences. Use for animation work; scope ambition to the site and user request.
---

# Deckl Motion

Make motion belong to the interface. A showcase may benefit from surprise and immersive scroll choreography; frequently used product controls need predictable, immediate response. Neither style is a universal default.

## GPT-specific icon rule

When using a GPT model, do not introduce 45-degree diagonal arrows in UI: no ↗, ↘, ↖, or ↙ glyphs, diagonal arrow icons (such as `ArrowUpRight`), or SVG/CSS equivalents. This includes buttons, navigation, cards, external-link indicators, and hover states. Prefer a clear text label; use a horizontal arrow or chevron only when it communicates an action. Apply this to UI within the requested scope, unless the user explicitly requests a diagonal arrow. In review-only work, flag violations without editing.

## Section labels for all models

Do not add decorative section numbers paired with a dash or horizontal rule, such as `01 — The everyday`, `01 -- About`, or a number followed by a CSS/SVG line and a label. Avoid automatic zero-padded chapter counters used only to signal an editorial look. Prefer a concise category label or a descriptive heading in natural case, with restrained typography and whitespace. Do not replace this with mandatory dots, pills, or other ornaments. Keep numbering when it conveys real order, steps, ranks, dates, or data, or when explicitly requested. Apply changes within the task's scope; review-only skills flag this pattern without editing.

## Inspect before choreographing

Watch the existing page and affected interactions when browser tools are available. Inspect the component lifecycle, state, dependencies, content, and responsive behavior. Identify the visual qualities and interactions worth preserving.

Choose what should move and why from the task. For an ambitious showcase, explore how framing, viewpoint, type, layers, or section continuity can develop into a distinctive experience. Repeated fade-ups do not fulfill an expressive scroll brief. For a narrow interaction request, focus on that behavior.

## Define the behavior

State the trigger, visual progression, completion, interruption, and fallback in a compact specification. Separate time-based feedback from scroll-linked progress. Decide what happens if the user reverses direction, repeats input, navigates away, or changes motion preference. Choose easing and duration for the movement and usage frequency, then tune the actual result; values are starting hypotheses, not aesthetic laws.

Read only the relevant references:

- [Product interaction decisions](references/interaction-decisions.md): feedback, retargeting, gesture handoff, and state changes.
- [Scroll scene engineering](references/scroll-engineering.md): parallax depth, pinning, scrubbing, measurement, teardown, and focus.
- [Patterns and failure checks](references/patterns.md): media, route transitions, entrances, and advanced rendering.

## Implement

Use CSS, WAAPI, Motion, GSAP, or the existing engine according to the behavior and project conventions. A requested expressive sequence can justify a dependency. Reuse motion tokens when they fit; avoid competing systems writing the same property.

Own animations at the component boundary. Clean up effects, timers, listeners, and measurements. Keep continuous values outside framework render state where appropriate. Reserve media dimensions; respond to relevant font, asset, and viewport changes.

Keep controls operable during transitions, keyboard destinations reachable, and content readable if initialization fails. Provide a deliberate mobile and reduced-motion version. Prefer inexpensive animation properties where they achieve the result; profile costly masks, filters, or large media instead of assuming smoothness.

## Parallax scrolling

When parallax is requested or strengthens the chosen direction, study the page's imagery, crops, layers, and section transitions first. Create depth through intentional differences in movement; do not assign a fixed speed, layer count, or parallax treatment to every section. A single image drifting within its frame may be enough; an immersive scene may justify several planes.

Keep ordinary scrolling intact. Link progress to the affected scene, bound travel to the available crop, and keep text and controls readable and reachable. Read the parallax guidance in [scroll scene engineering](references/scroll-engineering.md) for measurement, transform ownership, and responsive alternatives. Verify the effect forward and backward, at restored scroll positions, and on touch. For reduced motion, preserve the composition without continuous depth movement.

## Tune and finish

Watch the sequence at normal speed, inspect awkward transitions slowly, and test interruption. For scroll, check entry, middle, release, reverse and rapid movement, resize, and route re-entry. For product UI, repeat the action and test focus, pending state, errors, and cancellation where relevant.

Correct visible jumps, dead travel, sluggish response, stale pin space, and off-screen focus. Run relevant project checks. Report observed behavior and remaining limits; a screenshot does not establish timing and a library choice does not establish performance.
