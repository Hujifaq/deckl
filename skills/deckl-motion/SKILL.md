---
name: deckl-motion
description: Design and implement purposeful website animation, transitions, scroll storytelling, and interaction feedback. Use for premium motion direction, a specific animated feature, or repairing awkward motion. Includes reduced-motion and touch fallbacks; not a request to animate every element.
---

# Deckl Motion

Use motion to express hierarchy, continuity, feedback, atmosphere, or a story grounded in the subject. Premium motion feels controlled and responsive. It should not delay access to the content.

## Read the site before choosing its form

When improving an existing site, first inspect its rendered pages with available browser tools: the opening, body, ending, navigation, a representative interaction, and a narrow viewport. Scroll through it to understand pacing and existing motion. Read the relevant source and assets alongside the render. Identify what gives it character, what feels unresolved, and what the user's request permits changing. If rendering is unavailable, distinguish source-based observations from visual judgments and continue with that limitation stated.

Derive the design from this evidence. Deckl prescribes no hero alignment, image side, section order, column count, palette, font pairing, animation count, or degree of minimalism. Centered, asymmetric, layered, dense, spacious, colorful, monochrome, typographic, and immersive directions are all available. Choose relationships that make this particular content compelling. User references and explicit brand constraints take precedence.

Consider materially different possibilities before committing. Avoid merely swapping colors in a familiar template, but retain familiar patterns when they serve the site. State the selected idea briefly and continue implementing when implementation was requested. Originality should be visible in the relationship between content, form, and behavior, not in random differences between sections.

## Inspect and specify

Read project instructions and inspect the component lifecycle, existing animation dependencies, rendering boundaries, navigation behavior, and current motion preferences. Use the project's existing solution when suitable. Do not assume GSAP, Motion, or a browser automation tool exists.

For each proposed effect, define the trigger, purpose, moving element, start/end state, cancellation behavior, reduced-motion alternative, and narrow-screen behavior. Keep this concise and limited to the affected features. Review-only requests receive a motion specification without edits.

For a broad motion request on a showcase or brand website, actively develop and implement an expressive motion direction. Study how scroll can transform the existing content, connect sections, create atmosphere, or reveal unexpected relationships. Explore an original sequence rather than picking a standard effect for every block. For a narrowly specified repair or control animation, stay within that scope. Repeated fade-ups alone do not fulfill an ambitious motion request.

Choose how motion varies across the experience from the intended feeling and content. No fixed scene count, intensity hierarchy, or timing recipe applies. Specify the intended movement, then tune it in the browser. GSAP ScrollTrigger is a suitable option for coordinated pinning and scrubbing when the stack permits it; do not reject a justified animation dependency merely because the result is expressive.

Read [motion patterns](references/patterns.md) for implementation decisions and failure checks.

## Implement progressively

- Make the unanimated state complete and readable. Do not leave essential content permanently hidden when scripts fail or load late.
- Prefer CSS for simple state transitions. Choose animation tools that can express the desired choreography and integrate reliably with the project.
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
