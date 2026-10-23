# Changelog

## Unreleased

Nothing yet.

## 1.3.0 — 2026-10-23

- Added a motion toolbox to `deckl-motion`: starting durations and easing, reduced-motion patterns, CSS scroll-driven animation, view transitions, `@starting-style`, interruptible WAAPI, a ScrollTrigger scene with cleanup, and performance guidance.
- Added a generic-pattern reference to `deckl-design`, `deckl-refine`, and `deckl-audit`, with stronger alternatives and context limits.
- Added an optional Playwright capture script (`scripts/inspect.mjs`) to the design, refine, motion, adapt, polish, and audit skills. It captures narrow and wide views, scroll sequences, and reduced-motion renders, and reports overflow, script errors, failed requests, and missing alt text without editing the project.
- Shortened the arrow and section-label guidance into one house-rules block, and extended the diagonal-arrow rule to all models.
- Generated shared rules, references, and scripts from `shared/`; `npm test` fails when a skill copy drifts.
- Expanded the `deckl-motion`, `deckl-design`, and `deckl-refine` descriptions so hosts route animation, redesign, and refinement requests more reliably.
- Added container query, subgrid, and `text-wrap` guidance to the layout, adapt, and type skills.
- Added `deckl uninstall`, which moves selected Deckl skills into a backup and refuses folders that do not identify as the matching skill.
- Security: installer output strips terminal control characters from printed paths and errors.
- Installed skills no longer include hidden metadata files such as `.DS_Store`.
- Added tests for skill metadata, links, shared-copy drift, the capture script, and uninstall.
- Added art-directed parallax guidance to `deckl-motion`, covering local scroll progress, crop limits, layer ownership, mobile behavior, and reduced-motion alternatives without prescribing fixed visual patterns.

## 1.2.3 — 2026-10-06

- Added a starting-skill guide and post-install recommendations tailored to selected skills, with task-appropriate prompts for each agent.
- Added guidance for all models to avoid decorative number–dash and number–line section labels, with simple text alternatives and meaningful numbering preserved.

## 1.2.2 — 2026-10-06

- Added a GPT-specific rule across all skills to avoid 45-degree diagonal UI arrows, including icon and SVG equivalents.

## 1.2.1 — 2026-10-01

- Version republish of 1.2.0; no recorded content changes.

## 1.2.0 — 2026-09-30

- Replaced repetitive core design instructions with focused decision workflows and practical supporting references.
- Added visual exploration, production interaction, interruption, and scroll-engineering guidance.
- Added guided `deckl update`, automatic backups, failure recovery, and `deckl status` version reporting.
- Added a reproducible quality-comparison protocol; generated-site benchmarking is still pending.

## 1.1.0 — 2026-09-29

- Reworked showcase design around reference study, expressive composition, scroll choreography, and browser review.
- Added preservation and before/after comparison to refinement, layout, and polish.
- Expanded motion guidance for ScrollTrigger, scene pacing, lifecycle cleanup, and responsive alternatives.
- Added Astra and cross-model usage prompts and visual regression evaluation scenarios; quality benchmarking remains pending.
- Made rendered-site analysis the starting point for design, refinement, direction, layout, and motion.
- Removed fixed composition examples and timing ranges; made expressive motion development the default for broad showcase motion requests.
- Clarified creative freedom across layout, color, typography, media, and animation while preserving functional safeguards.

## 1.0.0 — 2026-09-29

- Clarified global installation, keyboard setup, CLI updates, and npm troubleshooting.
- Removed outdated next-release notices and the README contribution link.
- Refined Deckl terminal lettering with silver edges and an offset grayscale shadow.
- White block-letter Deckl header, grayscale controls, individual agent accents, selection circles, and step indicators.
- Responsive terminal layout with a compact display and monochrome support through `NO_COLOR`.
- Arrow-key setup with Space selection, multiple agents, skill selection, and Enter confirmation.
- Running `deckl` without arguments opens guided setup in a terminal.
- Escape, Ctrl+C, and closed input restore terminal state and cancel before installation.
- Installation documentation now uses the published `@hujifaq/deckl` package name.
- Ten focused UI design skills with self-contained supporting references.
- Professional workflows and a practical evaluation protocol.
- Original Deckl banner, installation guide, command catalog, and troubleshooting.
- npm package and `deckl` executable with guided setup, dry-run, and conflict protection.
- Claude Code, Codex, Cursor, Copilot CLI, Gemini CLI, and OpenCode adapters.
- MIT license, package verification, compatibility guide, and publishing instructions.
- Monochrome npm installation artwork using Deckl's established identity.
- Installer tests, contribution guidance, and a documented Taste Skill comparison.

The scoped package is `@hujifaq/deckl`.
