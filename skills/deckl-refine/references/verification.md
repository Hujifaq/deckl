# Verification

Use proportionate checks. Do not install a browser framework or new testing dependency without a concrete need.

## Before and after

Record the original issue through available screenshots, browser inspection, or source evidence. After editing, revisit the same area and confirm that the intended improvement actually occurred.

Use the project's normal launch and validation commands. Preserve existing processes and unrelated user changes.

## Visual checks when tools are available

- Inspect a narrow and wide viewport appropriate to the product. Around 390 and 1440 CSS pixels are useful starting points, not mandatory breakpoints.
- Look for clipped text, accidental horizontal overflow, inconsistent alignment, obscured controls, and misleading emphasis.
- Check realistic long labels, empty content, or large values where the changed layout depends on them.
- Check supported themes affected by new colors or surfaces.
- Consider browser zoom and reduced motion where relevant.

### Optional capture script

If the project already has Playwright, run this skill's `scripts/inspect.mjs` from the project root:

```sh
node <skill-folder>/scripts/inspect.mjs http://localhost:3000 --label before
node <skill-folder>/scripts/inspect.mjs http://localhost:3000 --label after --out <same folder as before>
```

It captures the top and the full page at 390 and 1440 CSS pixels (change with `--widths`) and reports horizontal overflow with likely sources, script errors, failed requests, and images without alt text. `--reduced-motion` emulates the preference; `--scroll-steps N` adds frames down the page; `--channel chrome` uses an installed Chrome. It writes to a temporary folder unless `--out` is given and never edits the project. Look at the images: the report flags mechanical problems, not visual quality. Do not install Playwright without the user's agreement.

## Behavior checks

- Exercise the affected links, buttons, forms, menus, or dialogs.
- Navigate affected controls with the keyboard and confirm focus remains visible.
- Check states touched by the change, such as validation errors or pending submission.
- Use local fixtures or safe test data for consequential actions. UI refinement is not permission to place orders, send messages, or modify production records.

## Project checks

Run relevant lint, type, build, or existing test commands based on the files changed. Add a targeted behavior test when changing meaningful interaction logic. Do not add tests that only assert the exact class names or spacing values chosen by this skill.

If a check fails, distinguish a new regression from an existing failure using evidence. Do not describe an unrun check as passed.

## When visual tools are unavailable

Inspect the changed structure and styles, run available project checks, and identify the viewports or behaviors still needing manual review. Source inspection cannot establish the absence of visual defects.

## Completion

Stop when the requested issues are resolved, relevant checks are complete, and remaining limitations are disclosed. A concise handoff should distinguish implemented changes, verified outcomes, and unverified behavior.
