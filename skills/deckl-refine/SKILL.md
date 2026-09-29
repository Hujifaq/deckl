---
name: deckl-refine
description: Improve an existing web interface through coordinated hierarchy, typography, spacing, content presentation, and interaction changes. Use for a broad UI refinement or removing generic AI styling while keeping the established identity. Not for a new site, full visual overhaul, or a narrowly specified specialist pass. Respect review-only requests without editing.
---

# Deckl Refine

Bring an existing interface into focus. Make design decisions that serve its audience, content, and primary task. Preserve its useful character rather than imposing a signature template.

For premium brand websites, look for a stronger relationship between the product's story, type hierarchy, imagery, and composition. Remove ornamental filler and improve the moments that carry identity. For operational UI, prioritize scanability and task completion. A request for an Awwwards-inspired finish signals ambition, not permission to add effects indiscriminately or a promise of recognition.

## 1. Understand the interface

Read project instructions and inspect the relevant routes, components, styles, and design tokens. Identify the framework, existing component library, and available validation commands before changing code.

When browser or screenshot tools are available, inspect the current interface. Source code reveals structure; it does not prove how the page renders. If visual inspection is unavailable, proceed with changes supported by source evidence and disclose the limitation.

Establish:

- The user's requested scope and whether they want implementation or review.
- The audience, primary task, and information needed to complete it.
- Brand requirements and existing patterns worth preserving.
- Practical constraints such as supported viewports, content density, and assets.

Infer these from the brief and project where possible. Ask only when missing information would materially change the work. A request to refine UI authorizes relevant edits; it does not authorize publishing, replacing the product, or unrelated rewrites.

## Preserve the strongest parts

Before editing, identify the elements that make this interface attractive: distinctive type, strong imagery, intentional color, unusual composition, texture, or an effective motion sequence. Treat these as assets to preserve unless the user rejects them. Capture before views at representative desktop and mobile sizes when tools permit.

For each substantial change, state the visible weakness it corrects and the existing strength it must retain. Do not remove personality because it violates a generic anti-slop preference. If the page is already strong, improve specific defects instead of replacing its visual language.

## 2. Diagnose before styling

Find the most consequential problems. Describe each as an observed issue, its effect on the user, and an appropriate correction. Do not manufacture findings to meet a quota.

Look for weak hierarchy, generic or misleading content, repetitive composition, excessive containers, inconsistent spacing, illegible text, unclear actions, and incomplete states. A gradient, card, centered hero, or popular font is not inherently a problem: explain what fails in this context.

Read [design principles](references/design-principles.md) for the dimensions affected by the request. Use [examples](references/examples.md) when a concrete comparison would help choose an approach. Do not copy the examples as universal layouts.

For a review-only request, stop at prioritized findings and actionable recommendations. Do not edit files.

## 3. Choose a coherent direction

State the intended changes briefly before substantial edits. Tie choices to the product: a dense operations dashboard needs different pacing from a gallery or a reading interface.

Choose a small set of related improvements. Establish hierarchy and layout first, typography and spacing second, then color, imagery, and interaction details as needed. For a narrow task, skip unaffected dimensions.

Prefer the existing visual system when it can solve the problem. Introduce new tokens or reusable components when several affected elements share the same need. Avoid abstractions for one-off decoration.

Use the user's references as evidence of intent. Preserve an intentionally playful, conventional, colorful, or restrained identity. Do not equate refinement with beige surfaces, smaller text, fewer features, or monochrome styling.

## 4. Implement the refinement

- Keep routes, data flows, authentication, event handlers, and working behaviors intact unless changing them is part of the request.
- Reuse suitable components, icons, assets, and dependencies already in the project.
- Make visual groupings reflect meaning. Remove a wrapper only when spacing, alignment, or a divider can express the relationship more clearly.
- Let content determine composition. Do not add testimonials, pricing sections, statistics, badges, or decorative dashboards simply to fill space.
- Preserve factual copy. Do not invent customer logos, metrics, endorsements, or product capabilities. Use neutral labels when facts are unavailable.
- Use semantic controls and accessible names. Preserve keyboard navigation, visible focus, and readable contrast.
- Make layout decisions responsive to content: allow wrapping, flexible sizing, and deliberate overflow behavior instead of shrinking everything to fit.
- Give affected interactive components appropriate loading, empty, error, success, and disabled states. Do not add a new state system to an unrelated component.
- Use motion for feedback, continuity, hierarchy, and brand expression when the brief calls for it. For an explicitly requested showcase, develop a meaningful entry/development/exit scene rather than adding the same fade-up everywhere. Respect reduced-motion preferences and keep essential content available without animation.
- Use external assets only when appropriate to the task and their use is permitted. Do not add dependencies solely to create a decorative effect.

Avoid superficial fixes that conceal defects, such as globally hiding horizontal overflow, removing focus outlines, or reducing font size until a broken layout fits.

## 5. Verify the result

Read [verification](references/verification.md) and apply the checks relevant to the changes and available tools.

Inspect the affected interface at narrow and wide widths when possible. Exercise the changed interactions. Run the project's relevant checks; use behavior tests when interaction logic changes rather than adding tests that merely repeat style values.

Compare before and after at the same viewport and state. Assess identity, composition, typography, imagery, and interaction separately. Revise or undo your own changes if they flatten an original strength without solving a demonstrated problem; preserve unrelated user edits. Compare the result against the original problem and the user's scope. Fix discovered regressions. Stop when the requested issues are resolved and relevant checks pass; do not keep restyling an acceptable result to demonstrate activity.

## Handoff

Briefly report what changed and why, what was actually verified, and any remaining limitation. Distinguish source review from browser inspection. Never claim a screenshot was viewed, an interaction worked, or a test passed without evidence.

For reviews, give location, issue, user impact, and suggested correction in priority order. For implementation, lead with the completed outcome rather than a long design manifesto.
