---
name: deckl-layout
description: Recompose website sections and improve spacing, grids, alignment, visual rhythm, and content grouping. Use for repetitive layouts, weak hero composition, excessive nested cards, or poor page pacing. Preserves branding and functionality; not a typography-only or full rebranding workflow.
---

# Deckl Layout

Make the arrangement of content feel deliberate. Prioritize the visitor's task and the page's rhythm over decorative variety.

## Read the site before choosing its form

When improving an existing site, first inspect its rendered pages with available browser tools: the opening, body, ending, navigation, a representative interaction, and a narrow viewport. Scroll through it to understand pacing and existing motion. Read the relevant source and assets alongside the render. Identify what gives it character, what feels unresolved, and what the user's request permits changing. If rendering is unavailable, distinguish source-based observations from visual judgments and continue with that limitation stated.

Derive the design from this evidence. Deckl prescribes no hero alignment, image side, section order, column count, palette, font pairing, animation count, or degree of minimalism. Centered, asymmetric, layered, dense, spacious, colorful, monochrome, typographic, and immersive directions are all available. Choose relationships that make this particular content compelling. User references and explicit brand constraints take precedence.

Consider materially different possibilities before committing. Avoid merely swapping colors in a familiar template, but retain familiar patterns when they serve the site. State the selected idea briefly and continue implementing when implementation was requested. Originality should be visible in the relationship between content, form, and behavior, not in random differences between sections.

## Map the current page

Read project instructions and inspect the affected routes, sections, styles, and reusable containers. Identify content dependencies, reading order, primary actions, anchors, and responsive rules. Use a rendered view when available.

Distinguish layout problems from missing content or weak imagery. List the most important structural issue and its user impact. Preserve routes, working handlers, tracking hooks, and brand assets. For review-only requests, produce findings without editing.

## Choose the composition

Create a clear focal hierarchy: what receives attention first, what supports it, and what follows. Position the primary action with the information needed to understand it. On a gallery, the work can be primary; on a pricing page, comparison may be primary.

Use consistent alignment lines, a compact spacing scale, and deliberate relationships between image and text. Increase the gap between unrelated groups before increasing every padding value.

When adjacent sections repeat mechanically, choose structures from their content: a comparison table, a project index, a wide image, a compact specification, or a narrative sequence. Maintain consistency for genuinely equivalent items. Do not force every section to be unique.

Use asymmetry only when the hierarchy remains legible. Negative space should frame something or create pacing. A minimal design must still explain the product and expose useful actions.

## Protect composition during improvement

Identify what already works in the rendered page before rearranging it. Preserve deliberate tension, overlaps, dramatic scale, and whitespace where they support the subject. A consistent grid does not require every block to have the same silhouette. For a showcase, map the page's focal moments and quieter regions before changing spacing. Compare the same desktop and mobile views afterward; revise your own changes if the new arrangement becomes more generic or weakens the original focus.

## Implement

- Prefer Grid or Flexbox relationships that adapt to real content. Avoid absolute positioning for text blocks that must grow.
- Remove nested surfaces when proximity or alignment communicates the same relationship; retain boundaries around independent interactive objects.
- Use content-aware section spacing. Do not create giant empty gaps simply to signal luxury.
- Plan the opening at ordinary laptop heights as well as wide presentation sizes. Avoid a headline that pushes every useful detail out of view.
- Keep DOM order meaningful for keyboard and assistive technology. Visual reordering must not make focus jump unpredictably.
- Preserve anchors and link destinations during structural edits. Keep the same content unless the user authorized editorial changes.
- Set image aspect ratios and focal crops intentionally. Never stretch an image to satisfy the grid.
- Design narrow-screen ordering directly. Avoid hiding important content to make the desktop layout fit.

## Verify

Inspect the full page, not only isolated components. Check adjacent section transitions, alignment, long content, narrow widths, sticky regions, and affected interactions. Check that shared spacing changes did not damage other routes.

Run relevant project checks. Report the principal compositional change, why it helps, and any unverified viewport or interaction. Stop after layout issues are resolved; do not change font families or brand colors unless required by the requested scope.
