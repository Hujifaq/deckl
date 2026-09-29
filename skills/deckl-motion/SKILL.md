---
name: deckl-motion
description: Design and implement purposeful website animation, transitions, scroll storytelling, and interaction feedback. Use for premium motion direction, a specific animated feature, or repairing awkward motion. Includes reduced-motion and touch fallbacks; not a request to animate every element.
---

# Deckl Motion

Use motion to express hierarchy, continuity, feedback, atmosphere, or a story grounded in the subject. Premium motion feels controlled and responsive. It should not delay access to the content.

## Inspect and specify

Read project instructions and inspect the component lifecycle, existing animation dependencies, rendering boundaries, navigation behavior, and current motion preferences. Use the project's existing solution when suitable. Do not assume GSAP, Motion, or a browser automation tool exists.

For each proposed effect, define the trigger, purpose, moving element, start/end state, cancellation behavior, reduced-motion alternative, and narrow-screen behavior. Keep this concise and limited to the affected features. Review-only requests receive a motion specification without edits.

If the user requests ambitious scroll storytelling, implement a feature that benefits from sequence, comparison, or spatial continuity. Define entry, midpoint, exit, and reverse-scroll behavior. Consider a changing product stage, editorial image expansion, coordinated project index, or a measured gallery journey. Choose from the actual content. Repeated fade-ups alone do not satisfy this brief.

Give the main scene a clear progression and quieter supporting motion. Specify the intended movement and timing, then tune it in the browser. GSAP ScrollTrigger is a suitable option for coordinated pinning and scrubbing when the stack permits it; do not reject a justified animation dependency merely because the result is expressive.

Read [motion patterns](references/patterns.md) for implementation decisions and failure checks.

## Implement progressively

- Make the unanimated state complete and readable. Do not leave essential content permanently hidden when scripts fail or load late.
- Prefer CSS for simple state transitions. Use available animation tools for complex coordination only when they reduce implementation risk.
- Favor transform and opacity for continuous animation; measure effects involving layout, paint, filters, masks, or large media instead of assuming they are cheap.
- Keep high-frequency pointer or scroll values out of framework component state when an animation value or frame-coordinated update can handle them.
- Clean up timelines, observers, listeners, and scheduled frames on unmount and route changes. Avoid duplicate initialization during development lifecycle checks.
- Recalculate size-dependent effects after relevant media, font, or viewport changes. Scope selectors to the component.
- Honor reduced motion for parallax, large spatial movement, automatic loops, and scroll choreography. Provide a designed static state, not invisible content or an empty spacer.
- Keep touch and keyboard access equivalent. Hover can enhance an action but must not be its only explanation or trigger.
- Preserve native scrolling and browser navigation. Do not add smooth scrolling, scroll hijacking, custom cursors, or forced preloaders as defaults.
- Keep feedback immediate. Animation must not delay validation, navigation, or repeated input.

## Verify the sequence

Use a running browser when available; a screenshot cannot verify timing. Test forward and reverse scrolling, rapid input, resize, touch-sized viewports, reduced motion, navigation away and back, and missing/slow media where relevant.

For pinned scenes, verify entry, completion, and release with both short and long content. Ensure the last item and the following section are reachable. For overlays, verify focus management independently of animation.

Run relevant project checks and measure performance with available profiling tools when the effect is substantial. Distinguish observed behavior from unmeasured frame-rate or load claims.

Report the implemented motion, its purpose, fallback behavior, and tests actually performed. Stop when the sequence works within scope; do not animate unrelated sections.
