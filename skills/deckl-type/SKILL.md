---
name: deckl-type
description: Improve website typography, font roles, headline wrapping, reading measure, and typographic hierarchy. Use when a design feels visually weak because of text treatment or needs a professional typesetting pass. Not for a full redesign or factual copy rewrite.
---

# Deckl Type

Use typography to give the interface hierarchy, rhythm, and character. A premium result depends on proportion and execution, not on selecting a fashionable font.

## Inspect

Read project instructions. Inspect actual content, font assets and licenses, font-loading strategy, existing tokens, supported languages, and affected components. View the rendered interface when tools are available. Identify the roles of display text, headings, body, controls, captions, and numerical data.

Preserve the brand's type choice unless replacement is requested or demonstrably necessary. A font change can alter line breaks, page length, and controls throughout the site; keep the change scoped. For review-only requests, report recommendations without editing.

## Set the system

Define a concise hierarchy with clear differences in size, weight, measure, and spacing. Use fewer competing emphasis techniques. Set body readability before pushing display scale.

For a modern premium direction, consider strong display/body contrast, deliberate alignment, and disciplined whitespace. Choose serif, sans, or mixed roles according to the brand and content. Avoid arbitrary italic words or a novelty face solely to make a headline appear designed.

Use the fonts already available where they can support the direction. If a new font is justified, check permitted use, file availability, language coverage, and loading cost. Do not refer to a commercial font as installed or licensed without evidence. Provide an appropriate available fallback.

## Implement

- Reuse or define semantic type roles rather than tuning each component independently.
- Use fluid scaling with sensible minimums and maximums where appropriate. Keep body and control text readable at narrow widths and zoom.
- Tune line height and letter spacing by role. Inspect accents, italic descenders, and glyph clipping in the actual face.
- Set readable text measure. Shorten an overly wide paragraph through layout rather than arbitrarily rewriting factual copy.
- Let headings wrap naturally. Use editorial line breaks only when intentional and robust across supported widths and languages.
- Preserve semantic heading order even when a small heading appears above a large visual statement.
- Treat tables and measurements deliberately: align numbers by meaning and use tabular numerals when comparison benefits.
- Use actual font weights available in the chosen files. Avoid unintended synthetic styling.
- Reserve layout and choose fallback metrics where practical to reduce shifts during font loading. Do not load every available font weight.

Do not change product claims, legal text, control labels, or translations merely to fit a preferred line break. Flag a copy issue when a substantive rewrite would exceed scope.

## Verify

Inspect a representative headline, paragraph, navigation item, form control, caption, and numeric value where affected. Check narrow and wide widths, long content, font-loaded and fallback states, and browser zoom when tools permit. Watch for controls clipping because of a new line height or weight.

Run relevant project checks. Report the changed roles, the visual reason, and actual verification. Do not claim visual success based only on valid CSS. Stop once typography is coherent; do not redesign imagery or page structure as a side effect.
