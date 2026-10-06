---
name: deckl-imagery
description: Art-direct website photography, product imagery, project presentations, crops, and media treatment. Use when generic stock visuals, weak image composition, or inconsistent assets undermine a premium website. Works with existing assets or available authorized media tools; does not assume image generation is installed.
---

# Deckl Imagery

Make the subject feel specific and tangible. A strong asset can carry more identity than layers of decorative UI.

## GPT-specific icon rule

When using a GPT model, do not introduce 45-degree diagonal arrows in UI: no ↗, ↘, ↖, or ↙ glyphs, diagonal arrow icons (such as `ArrowUpRight`), or SVG/CSS equivalents. This includes buttons, navigation, cards, external-link indicators, and hover states. Prefer a clear text label; use a horizontal arrow or chevron only when it communicates an action. Apply this to UI within the requested scope, unless the user explicitly requests a diagonal arrow. In review-only work, flag violations without editing.

## Section labels for all models

Do not add decorative section numbers paired with a dash or horizontal rule, such as `01 — The everyday`, `01 -- About`, or a number followed by a CSS/SVG line and a label. Avoid automatic zero-padded chapter counters used only to signal an editorial look. Prefer a concise category label or a descriptive heading in natural case, with restrained typography and whitespace. Do not replace this with mandatory dots, pills, or other ornaments. Keep numbering when it conveys real order, steps, ranks, dates, or data, or when explicitly requested. Apply changes within the task's scope; review-only skills flag this pattern without editing.

## Inventory and intention

Read project instructions and inspect available assets, actual content, brand references, media components, and the relevant page. Identify which images provide evidence, which explain something, and which establish atmosphere. Preserve those distinctions.

Determine the subject, point of view, lighting, background, crop, color treatment, and required aspect ratios. Use a consistent visual family rather than an assortment of unrelated impressive images.

Inspect supplied references through available tools. Explain gaps in access. Do not claim an asset exists, is licensed, or depicts the actual product without evidence.

## Choose the appropriate work

- Existing good assets: improve selection, ordering, scale, crop, and layout before sourcing replacements.
- Missing assets with available authorized tools: generate or source a focused set with clear use rights and a consistent direction.
- Missing tools or rights: write a precise asset brief and improve the composition using available material. Do not fabricate downloadable assets or silently add unrelated remote URLs.
- Review or art-direction-only requests: deliver recommendations or briefs without editing the website.

Do not generate documentary-looking testimonials, customer evidence, staff portraits, certifications, or product functionality and present them as real. Label conceptual imagery where confusion would matter. Do not replace real product photography with an attractive inaccurate substitute.

## Asset brief

For each necessary new asset, specify its page role, subject, composition, lighting, background, palette relationship, crop-safe area, aspect ratio, and factual constraints. Identify what must stay legible or accurate. Keep generated text and interface diagrams out of raster imagery when editable HTML or genuine screenshots better serve the task.

## Integrate

Choose media proportions from the composition and subject; consistent ratios are useful for comparable items, not a requirement for every image. Choose object-position or alternate crops to preserve the subject on mobile. Do not stretch source images or obscure them with unnecessary floating badges.

Use the project's image pipeline. Set dimensions or aspect ratios to avoid layout shifts, provide responsive sources where supported, and avoid loading every full-resolution asset upfront. Treat the primary visible image differently from below-fold media; do not lazy-load the page's critical opening image indiscriminately.

Use meaningful alternative text for informative images and empty alternatives for purely decorative ones. Preserve real captions and required attribution without turning them into ornamental metadata. Provide a useful video poster and accessible controls where appropriate.

## Verify and hand off

Inspect crops at wide and narrow sizes, subject resolution, slow or failed loading, contrast of overlaid text, and any gallery controls. Run relevant project checks. Report which assets were reused, created, or still needed, and what visual inspection was possible.

Stop when the image system supports the page's concept. Do not add more imagery merely because there is empty space.
