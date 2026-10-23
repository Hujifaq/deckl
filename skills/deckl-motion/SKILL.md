---
name: deckl-motion
description: Design and implement website motion — scroll storytelling, parallax, page and view transitions, hover and press feedback, micro-interactions, entrance reveals, and reduced-motion support with CSS, WAAPI, Motion, or GSAP ScrollTrigger. Use when asked to animate a site, add parallax or scroll effects, make a page feel alive, or fix janky, broken, or excessive animation. Scales ambition to the site and the request.
---

# Deckl Motion

Make motion belong to the interface. A showcase may benefit from surprise and immersive scroll choreography; frequently used product controls need predictable, immediate response. Neither style is a universal default.

<!-- shared:rules -->
## House rules

- **No diagonal arrows.** Do not add 45-degree arrows to UI: ↗ ↘ ↖ ↙ glyphs, icons such as `ArrowUpRight`, or rotated SVG/CSS arrows, including external-link indicators and hover states. Use a clear label; add a horizontal arrow or chevron only when it signals an action.
- **No decorative section numbers.** Avoid labels such as `01 — About`, a number joined to a rule and a label, or zero-padded counters used only for an editorial look. Use a plain category label or a descriptive heading without substituting another ornament. Keep numbers that convey real order, steps, ranks, dates, or data.

Explicit user requests override these rules. Apply them within the task's scope; in review-only work, report violations without editing.
<!-- /shared:rules -->

## Inspect before choreographing

Watch the existing page and affected interactions when browser tools are available. Inspect the component lifecycle, state, dependencies, content, and responsive behavior. Identify the visual qualities and interactions worth preserving.

Choose what should move and why from the task. For an ambitious showcase, explore how framing, viewpoint, type, layers, or section continuity can develop into a distinctive experience. Repeated fade-ups do not fulfill an expressive scroll brief. For a narrow interaction request, focus on that behavior.

## Define the behavior

State the trigger, visual progression, completion, interruption, and fallback in a compact specification. Separate time-based feedback from scroll-linked progress. Decide what happens if the user reverses direction, repeats input, navigates away, or changes motion preference. Choose easing and duration for the movement and usage frequency, then tune the actual result; values are starting hypotheses, not aesthetic laws.

Read only the relevant references:

- [Motion toolbox](references/toolbox.md): starting durations and easing, reduced motion, CSS scroll-driven animation, view transitions, `@starting-style`, interruptible WAAPI, a ScrollTrigger scene with cleanup, and performance.
- [Product interaction decisions](references/interaction-decisions.md): feedback, retargeting, gesture handoff, and state changes.
- [Scroll scene engineering](references/scroll-engineering.md): parallax depth, pinning, scrubbing, measurement, teardown, and focus.
- [Patterns and failure checks](references/patterns.md): media, route transitions, entrances, and advanced rendering.

## Implement

Use CSS, WAAPI, Motion, GSAP, or the existing engine according to the behavior and project conventions. A requested expressive sequence can justify a dependency. Reuse motion tokens when they fit; avoid competing systems writing the same property.

Own animations at the component boundary. Clean up effects, timers, listeners, and measurements. Keep continuous values outside framework render state where appropriate. Reserve media dimensions; respond to relevant font, asset, and viewport changes.

Keep controls operable during transitions, keyboard destinations reachable, and content readable if initialization fails. Provide a deliberate mobile and reduced-motion version. Prefer inexpensive animation properties where they achieve the result; profile costly masks, filters, or large media instead of assuming smoothness.

## Parallax scrolling

When parallax is requested or strengthens the chosen direction, study the page's imagery, crops, layers, and section transitions first. Create depth through intentional differences in movement; do not assign a fixed speed, layer count, or parallax treatment to every section. A single image drifting within its frame may be enough; an immersive scene may justify several planes.

Keep ordinary scrolling intact. Link progress to the affected scene, bound travel to the available crop, and keep text and controls readable and reachable. Read the parallax guidance in [scroll scene engineering](references/scroll-engineering.md) for measurement, transform ownership, and responsive alternatives; the [toolbox](references/toolbox.md) has a CSS scroll-driven version that needs no JavaScript. Verify the effect forward and backward, at restored scroll positions, and on touch. For reduced motion, preserve the composition without continuous depth movement.

## Tune and finish

Watch the sequence at normal speed, inspect awkward transitions slowly, and test interruption. For scroll, check entry, middle, release, reverse and rapid movement, resize, and route re-entry. For product UI, repeat the action and test focus, pending state, errors, and cancellation where relevant.

If the project already has Playwright, `scripts/inspect.mjs` in this skill's folder captures a scroll sequence: run `node <skill-folder>/scripts/inspect.mjs <url> --scroll-steps 6` from the project root, and again with `--reduced-motion`. It writes to a temporary folder and edits nothing. Frames show composition at points along the journey, not timing. Do not install Playwright without the user's agreement; use the host's browser tools when available.

Correct visible jumps, dead travel, sluggish response, stale pin space, and off-screen focus. Run relevant project checks. Report observed behavior and remaining limits; a screenshot does not establish timing and a library choice does not establish performance.
