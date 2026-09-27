# Deckl evaluation

These are manual evaluation scenarios, not completed test results.

The library's metadata and internal links can be checked mechanically. That does not establish visual quality, model routing, host compatibility, or behavior. Do not mark the release gate below as passed without running representative tasks.

Use a disposable copy of a project with no production credentials. Keep the starting files, model, tools, and prompt the same for a baseline run and a Deckl run. Start each from a fresh conversation. Record the assistant and model version so comparisons are meaningful.

## Scenarios

| Scenario | Request | What to assess |
| --- | --- | --- |
| Dense dashboard | Improve hierarchy while retaining density and table controls. | Scanability, preserved comparisons, working sorting and actions. |
| Playful brand | Improve schedule readability while keeping expressive colors and type. | Legibility without imposing a neutral aesthetic. |
| Narrow mobile fix | Fix signup-form spacing on a narrow screen. | Focused changes, wrapping, validation, submission behavior. |
| Review only | Review checkout usability without editing files. | Concrete findings and no mutations. |
| Missing browser | Refine the component using source inspection only. | Appropriate progress and honest verification limits. |
| Unverified marketing | Improve a vague landing page with no customer metrics supplied. | Specific supported copy without fabricated claims. |
| Strong existing UI | Polish an already coherent settings page. | Restraint; no arbitrary redesign to demonstrate activity. |

## Specialist acceptance cases

| Skill | Realistic request | Observable success | Failure to catch |
| --- | --- | --- | --- |
| `deckl-direct` | Develop an art direction for an architecture practice using existing photography. | A subject-specific concept with actionable type, image, layout, and mobile decisions. | Generic luxury adjectives, invented assets, or unrequested UI edits. |
| `deckl-design` | Substantially redesign a studio portfolio while preserving project URLs and contact behavior. | A coherent implemented visual change across the page, responsive composition, and working destinations. | Only recoloring the old layout, cloning a reference, dead actions, or changing backend behavior. |
| `deckl-type` | Improve typography using an existing licensed family and long case-study titles. | Clear hierarchy and robust wrapping without changing factual meaning. | New unlicensed fonts, clipped glyphs, missing weights, or broken controls. |
| `deckl-layout` | Improve a page of repetitive sections with several genuinely comparable items. | Varied structure for different content and consistent structure for comparisons. | Forced asymmetry, hidden content, or broken DOM reading order. |
| `deckl-imagery` | Integrate real product photos; generation is unavailable. | Consistent selection and crops, preserved product accuracy, and specific briefs for missing assets. | Fictional images, invented licensing claims, or distorted products. |
| `deckl-motion` | Create a product sequence with changing media dimensions and client-side navigation. | Correct initialization, cleanup, resizing, touch and reduced-motion versions. | Hidden content, leaked listeners, duplicate effects, scroll traps, or performance claims without measurement. |
| `deckl-adapt` | Repair desktop hover previews and a pinned scene on mobile. | Equivalent access to content, usable navigation, deliberate small-screen composition. | Global overflow hiding, removed information, or desktop regression. |
| `deckl-polish` | Finish an approved launch page with inconsistent control states. | Bounded corrections consistent with the approved direction. | Full redesign, invented claims, or false claims of release readiness. |
| `deckl-audit` | Review a screenshot with no browser or source access. | Visual findings separated from unverified interaction and performance concerns. | File edits, claimed keyboard tests, invented award scores, or asserted AI authorship. |

## Routing and scope checks

Test natural-language requests as well as explicit command invocation. "Only adjust typography" should not trigger a broad rebuild. "Give me a direction, no implementation" should remain conceptual. "Audit and fix" should allow authorized edits after the diagnosis. "Make this feel premium" should be interpreted against the actual product and scope, not automatically routed to the most invasive command.

Test each skill with only its own folder installed. The skill must not need sibling files, another installed skill, a specific proprietary tool name, or the full Deckl repository to complete its documented workflow.

## Visual comparisons

Use different brand types with the same model and starting conditions: an architecture practice, a playful cultural event, a technical SaaS landing page, and an image-led consumer product. Look for a shared level of craft without the same hero, palette, font pairing, and section sequence appearing in all four.

Have a human compare unlabelled before/after results where feasible. Record why one result works better. Do not treat the number of code changes, animations, or "anti-slop" rules satisfied as evidence of design quality.

## Evidence to retain

- Original prompt and project snapshot.
- Host, model, date, and available tools.
- Before and after screenshots when possible.
- Changed files and unintended changes.
- Actual build, test, and interaction results.
- Human assessment of product fit, hierarchy, usability, and scope.

Do not reduce design quality to the absence of a particular color, font, or layout. Compare whether the result solves the user's task. Repeat varied cases before claiming reliable improvement.

## Release gate

The skill loads and invokes in each advertised host; all resource links resolve; requested refinements improve representative interfaces; important interactions remain intact; review-only requests do not edit; limitations are reported honestly. Fix demonstrated failures before adding more rules.
