---
name: deckl-design
description: Build a new website or substantially redesign one with a distinct visual direction, responsive composition, and working interactions. Use for a new landing page, portfolio, product, or marketing site, an Awwwards-style showcase, implementing a rebrand, or making a generic or AI-looking site distinctive when a visual overhaul is authorized. Not for small fixes to a design that should be kept.
---

# Deckl Design

Create a site whose visual choices belong to its subject. User requirements lead; Deckl has no mandatory hero alignment, palette, grid, font pairing, or animation quota.

<!-- shared:rules -->
## House rules

- **No diagonal arrows.** Do not add 45-degree arrows to UI: ↗ ↘ ↖ ↙ glyphs, icons such as `ArrowUpRight`, or rotated SVG/CSS arrows, including external-link indicators and hover states. Use a clear label; add a horizontal arrow or chevron only when it signals an action.
- **No decorative section numbers.** Avoid labels such as `01 — About`, a number joined to a rule and a label, or zero-padded counters used only for an editorial look. Use a plain category label or a descriptive heading without substituting another ornament. Keep numbers that convey real order, steps, ranks, dates, or data.

Explicit user requests override these rules. Apply them within the task's scope; in review-only work, report violations without editing.
<!-- /shared:rules -->

## Establish the ground

Inspect the rendered site and relevant source, routes, design system, content, and assets. Review the opening, body, ending, navigation, and mobile view. For a new project, start with the brief and material available. Identify the purpose: an expressive showcase invites exploration; a product interface supports repeated tasks. Preserve working behavior and any identity the user wants retained.

State the strongest existing qualities, the main weakness, and the intended improvement briefly. If visual tools are unavailable, distinguish source findings from visual judgments. Never invent an inspection.

## Make a design decision

Read [composition](references/composition.md) when establishing the layout. For reference-led work, use [reference study](references/reference-study.md). Translate references into relationships and principles rather than copied branding.

Choose the visual idea from the subject and assets. Explain how it changes hierarchy, scale, cropping, typography, color, density, and progression where relevant. An adjective such as “premium” is not a decision. Strong options may be quiet, exuberant, dense, layered, or minimal.

If the direction is consequential and unclear, use [visual exploration](references/exploration.md) to compare a small representative slice. Otherwise proceed directly. Do not force a concept approval step when the user already asked for implementation.

## Implement the idea across the site

Resolve the opening and a representative body section before extending their visual language. Reuse project components and tokens where they support the direction; make intentional changes where an overhaul calls for them. Compose mobile from reading order and focal relationships, not desktop scale alone.

Keep real content, destinations, forms, semantics, and factual claims. Do not invent clients, testimonials, metrics, or product capabilities. Strong imagery deserves deliberate placement; missing imagery calls for an honest asset plan, not decorative filler.

For requested expressive motion, use [scroll choreography](references/scroll-choreography.md). Compose intermediate states and transitions as carefully as static views. Choose the engine for the intended behavior, including ScrollTrigger where suitable. For task-heavy interfaces, use the existing component system and protect repeated task efficiency.

## Finish through evidence

Compare the running result with the direction and, for redesigns, the original at matching sizes and states. Identify the largest mismatch: weak focus, awkward type wrapping, poor crop, repetitive rhythm, distracting motion, or unfinished support UI. Check the result against [generic patterns](references/anti-patterns.md) that nothing in the brief motivates. Correct the largest problem and revisit that area. A compile success cannot establish visual quality.

If the project already has Playwright, `scripts/inspect.mjs` in this skill's folder captures matching views: run `node <skill-folder>/scripts/inspect.mjs <url> --label before` from the project root before redesigning and `--label after` when done. It reports horizontal overflow, script errors, failed requests, and images without alt text, writes to a temporary folder, and edits nothing. Do not install Playwright without the user's agreement; use the host's browser tools when available.

Exercise affected navigation and primary actions; inspect narrow and intermediate widths, keyboard focus, loading/error states, and reduced motion as relevant. Preserve the user's unrelated edits. Report what changed, what was actually inspected, and specific remaining limitations. Finish when the intended experience works and observed defects are resolved, rather than after an arbitrary number of passes.
