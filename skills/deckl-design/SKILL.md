---
name: deckl-design
description: Build or substantially redesign a marketing website, landing page, portfolio, or editorial showcase with distinctive art direction and premium execution. Use for a new website or an explicitly requested visual overhaul, including Awwwards-inspired briefs. Not for small polish requests or dense operational dashboards.
---

# Deckl Design

Create a coherent website whose content, composition, imagery, and interaction express a real point of view. Treat award-level craft as an aspiration, not a certification. Default toward modern, restrained execution when the brief leaves the style open, while allowing an expressive focal moment where it serves the brand.

## Establish the direction

Read project instructions and inspect the stack, current routes, brand material, content, and existing visual truth. Keep the existing framework and useful infrastructure. A visual overhaul does not authorize replacing authentication, commerce logic, analytics, or routes.

Distinguish an empty project from an existing website. Preserve identity for refinement; replace the visual language when a redesign is explicitly requested. Do not settle for recoloring a rejected layout when the user asked for a substantial change.

State a brief design direction grounded in audience, product, and available assets. Inspect supplied visual references if tools permit; otherwise identify the missing evidence. Use references for principles rather than cloning their expression. Proceed on sensible assumptions unless the ambiguity materially changes the outcome.

## Compose the experience

Use [composition decisions](references/composition.md) to plan the page around its content.

Define the opening message, dominant visual or typographic idea, and next action. Make the first viewport informative and composed at ordinary laptop sizes. Do not fill it with a cluster of badges, metadata, multiple claims, and competing buttons.

Build a sequence in which each section answers a visitor question or presents meaningful work. Vary scale and composition when the content changes, while retaining consistent alignment and type roles. Do not fabricate enough content to reach a fixed section count.

Choose a limited set of visual rules and apply them through the entire page. Craft the footer, navigation, mobile menu, and secondary states with the same care as the hero. Preserve content density appropriate to the product.

Use one distinctive idea with depth: a purposeful image sequence, a revealing comparison, an unusual but readable composition, or an interaction grounded in the subject. Avoid accumulating unrelated effects to signal creativity.

## Implement

- Use semantic HTML and the project's existing component and styling conventions. Inspect dependencies before importing new packages.
- Establish reusable type, spacing, color, and shape roles. Avoid disconnected one-off values unless the composition needs an optical adjustment.
- Build with actual supplied content and assets where possible. Do not invent customer relationships, awards, statistics, endorsements, or finished product screenshots.
- Use available image tools or licensed assets when needed and authorized. Record unresolved asset needs; do not pass substitutes off as factual photography or evidence.
- Treat typography as layout: plan wrapping, readable text widths, font loading, and fallback behavior.
- Preserve native scrolling and usable controls. Prefer CSS and existing animation tools; introduce heavy rendering only for a specific justified feature with a lightweight fallback.
- Make all visible actions meaningful. Connect to existing destinations or permitted local flows. Never disguise a dead button as a working feature.
- Check keyboard behavior, focus, contrast, and mobile navigation while implementing, not only at the end.

For responsive behavior, redesign the composition for touch and narrow widths. Retain the concept through crop, ordering, rhythm, or type rather than shrinking the desktop page. For motion, provide a composed static version under reduced motion and ensure content remains visible if animation initialization fails.

## Verify and finish

Use available browser tools to compare wide and narrow renders and exercise navigation and affected interactions. Check representative content, loading assets, and layout stability. Test the intended theme and any supported alternate theme affected by the work. Run relevant project checks.

Use measured performance evidence when available. Never infer smooth frame rates, field metrics, accessibility conformance, or award readiness from a screenshot or successful build.

Before delivery, check whether the identity survives removal of decorative effects. Fix observable regressions and stop once the brief is satisfied. Report the implemented direction, important changes, actual checks, and remaining asset or validation needs. Do not deploy without authorization.
