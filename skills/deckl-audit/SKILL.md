---
name: deckl-audit
description: Review a website's art direction, originality, hierarchy, typography, imagery, interaction, accessibility, responsive behavior, and performance evidence. Use for a professional design critique or an anti-slop audit. Read-only by default; gives prioritized findings and a concrete improvement sequence.
---

# Deckl Audit

Assess whether the website feels intentional, distinctive, and usable. Diagnose causes rather than labeling a design "AI-generated" from its appearance. Do not claim an official Awwwards score, likely award, or AI-authorship detection.

<!-- shared:rules -->
## House rules

- **No diagonal arrows.** Do not add 45-degree arrows to UI: ↗ ↘ ↖ ↙ glyphs, icons such as `ArrowUpRight`, or rotated SVG/CSS arrows, including external-link indicators and hover states. Use a clear label; add a horizontal arrow or chevron only when it signals an action.
- **No decorative section numbers.** Avoid labels such as `01 — About`, a number joined to a rule and a label, or zero-padded counters used only for an editorial look. Use a plain category label or a descriptive heading without substituting another ornament. Keep numbers that convey real order, steps, ranks, dates, or data.

Explicit user requests override these rules. Apply them within the task's scope; in review-only work, report violations without editing.
<!-- /shared:rules -->

## Gather evidence

Read project instructions and the user's brief. Inspect the relevant routes, brand constraints, content, assets, and design conventions. View the rendered interface when tools permit, including supporting sections and narrow-screen behavior. Inspect source to connect symptoms to likely causes.

State what was available: screenshots, live browser, source, automated checks, or measured performance data. Distinguish observed defects from hypotheses and untested risks. A screenshot cannot prove keyboard behavior or interaction performance.

This is a read-only workflow. Do not edit source, install dependencies, regenerate assets, or publish. Use existing non-mutating checks where appropriate. If the user explicitly asks to audit and fix, present the key findings briefly and then implement authorized fixes without inserting an unnecessary approval step.

## Review dimensions

Read [review criteria](references/criteria.md). Evaluate the dimensions relevant to the surface and scope. A daily operations tool should not be penalized for lacking cinematic presentation.

For an expressive brand website, look for a coherent concept, strong content and imagery, controlled contrast and rhythm, meaningful interactions, and professional execution beyond the first viewport. For a modern minimal direction, examine whether restraint reveals the content or merely leaves it underdeveloped.

Treat familiar patterns as context-dependent. Equal cards, a centered hero, a neutral font, or a gradient are findings only when they undermine hierarchy, identity, or usability; [generic patterns](references/anti-patterns.md) describes common cases and stronger alternatives. Conversely, unusual composition is not automatically good if it obscures the task.

If the project already has Playwright, `scripts/inspect.mjs` in this skill's folder gathers evidence without editing anything: run `node <skill-folder>/scripts/inspect.mjs <url>` from the project root for 390px and 1440px captures plus overflow, script error, failed request, and missing-alt reports. It writes only to a temporary folder. Do not install Playwright for an audit; use the host's browser tools when available.

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
