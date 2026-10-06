---
name: deckl-audit
description: Review a website's art direction, originality, hierarchy, typography, imagery, interaction, accessibility, responsive behavior, and performance evidence. Use for a professional design critique or an anti-slop audit. Read-only by default; gives prioritized findings and a concrete improvement sequence.
---

# Deckl Audit

Assess whether the website feels intentional, distinctive, and usable. Diagnose causes rather than labeling a design "AI-generated" from its appearance. Do not claim an official Awwwards score, likely award, or AI-authorship detection.

## GPT-specific icon rule

When using a GPT model, do not introduce 45-degree diagonal arrows in UI: no ↗, ↘, ↖, or ↙ glyphs, diagonal arrow icons (such as `ArrowUpRight`), or SVG/CSS equivalents. This includes buttons, navigation, cards, external-link indicators, and hover states. Prefer a clear text label; use a horizontal arrow or chevron only when it communicates an action. Apply this to UI within the requested scope, unless the user explicitly requests a diagonal arrow. In review-only work, flag violations without editing.

## Section labels for all models

Do not add decorative section numbers paired with a dash or horizontal rule, such as `01 — The everyday`, `01 -- About`, or a number followed by a CSS/SVG line and a label. Avoid automatic zero-padded chapter counters used only to signal an editorial look. Prefer a concise category label or a descriptive heading in natural case, with restrained typography and whitespace. Do not replace this with mandatory dots, pills, or other ornaments. Keep numbering when it conveys real order, steps, ranks, dates, or data, or when explicitly requested. Apply changes within the task's scope; review-only skills flag this pattern without editing.

## Gather evidence

Read project instructions and the user's brief. Inspect the relevant routes, brand constraints, content, assets, and design conventions. View the rendered interface when tools permit, including supporting sections and narrow-screen behavior. Inspect source to connect symptoms to likely causes.

State what was available: screenshots, live browser, source, automated checks, or measured performance data. Distinguish observed defects from hypotheses and untested risks. A screenshot cannot prove keyboard behavior or interaction performance.

This is a read-only workflow. Do not edit source, install dependencies, regenerate assets, or publish. Use existing non-mutating checks where appropriate. If the user explicitly asks to audit and fix, present the key findings briefly and then implement authorized fixes without inserting an unnecessary approval step.

## Review dimensions

Read [review criteria](references/criteria.md). Evaluate the dimensions relevant to the surface and scope. A daily operations tool should not be penalized for lacking cinematic presentation.

For an expressive brand website, look for a coherent concept, strong content and imagery, controlled contrast and rhythm, meaningful interactions, and professional execution beyond the first viewport. For a modern minimal direction, examine whether restraint reveals the content or merely leaves it underdeveloped.

Treat familiar patterns as context-dependent. Equal cards, a centered hero, a neutral font, or a gradient are findings only when they undermine hierarchy, identity, or usability. Conversely, unusual composition is not automatically good if it obscures the task.

## Report findings

For each material finding provide:

- Location: route, section, component, and viewport or state.
- Evidence: the visible or source-backed condition.
- Impact: what the user cannot understand, access, or accomplish, or why the brand loses specificity.
- Correction: a concrete change suited to the project.
- Priority: blocker, high, medium, or low, with a reason.
- Verification needed: any hypothesis requiring a live check.

Distinguish objective defects from editorial judgments. Do not manufacture an issue count or assign precise numeric quality scores without a defined measurement method.

Order the improvement sequence by impact and dependencies: a weak content concept may need resolution before typography or motion; a broken navigation flow can outrank visual expression. Identify existing strengths worth preserving.

## Deliver

Lead with the main design diagnosis, then the prioritized findings and a short recommended sequence. State coverage and limitations. If the page is already strong, say so and recommend only justified changes.

Do not create report files unless requested or appropriate to an existing project review workflow. Do not require the other Deckl skills to be installed: recommendations must be understandable on their own.
