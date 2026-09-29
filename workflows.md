# Deckl in real projects

These examples use Claude Code's standalone slash syntax. In Codex CLI or its IDE extension, replace the leading `/` with `$`. Other hosts may use their own selectors.

Run the relevant command with a clear target and constraints. Each skill is self-contained; none requires the rest of the library or automatically invokes another skill. The sequences below are optional workflows, not mandatory chains.

## Turn an ordinary studio site into a distinctive portfolio

Start with direction if the visual concept is unresolved:

```text
/deckl-direct Establish a modern, minimal art direction for this architecture studio. Use the existing project photography and wordmark. The audience is prospective residential clients. Make the work feel tactile and spacious, with a strong visual idea beyond large headlines. Give me an implementable direction brief.
```

Then implement the chosen direction:

```text
/deckl-design Redesign the portfolio using the direction above. Preserve project URLs, factual copy, and contact functionality. Let the photography lead. Aim for the craft of an exceptional design showcase, with deliberate mobile layouts and one purposeful signature interaction. Implement and verify the result.
```

Finish with `deckl-polish` only if the site is already structurally complete and needs a final detail pass.

## Improve a generic SaaS landing page without a rebrand

```text
/deckl-refine Improve this landing page while keeping our logo, brand blue, product claims, pricing, and signup flow. The page currently feels like unrelated feature cards. Strengthen the hierarchy and content sequence, use actual product imagery, and make the design feel considered and premium. Avoid a full rebrand.
```

If the main issue is specifically composition, use `deckl-layout`. If it is specifically text treatment, use `deckl-type`. Do not run broad refinement and every specialist by habit.

## Give a product launch controlled motion

```text
/deckl-motion Add a restrained reveal to the product detail sequence. Motion should explain how the parts relate, with immediate access to the content. Reuse our existing animation dependency. Keep ordinary scrolling, provide a readable reduced-motion version, and test reverse scrolling, resizing, and narrow screens.
```

Use this after the static composition works. An animation pass should not invent the page's message or conceal incomplete content.

## Make an image-heavy launch feel professionally art-directed

```text
/deckl-imagery Review our supplied product photos and integrate a consistent image system across the hero and detail sections. Preserve true product colors and proportions. Choose crops for desktop and mobile. Where an asset is missing, write a precise photography brief rather than substituting an inaccurate generated product.
```

If generation is wanted, say so and specify what can be conceptual. The host still needs an available image tool; installing a skill does not add one.

## Repair a beautiful desktop page that fails on phones

```text
/deckl-adapt Adapt the home and project pages for narrow screens and touch. Preserve their visual identity. Fix the horizontal overflow, hover-only project previews, and sticky panels that hide the next section. Keep all project information and verify the mobile menu and contact form.
```

## Improve typography with a bounded change

```text
/deckl-type Refine typography on the homepage and case studies. Keep our licensed font family and factual copy. Improve headline wrapping, reading width, captions, and numeric details. Check long titles, fallback loading, and small screens without restructuring the whole site.
```

## Prepare a client handoff

```text
/deckl-audit Review the homepage, project page, and contact flow for a client handoff. Assess visual coherence, originality, responsive behavior, keyboard access, and interaction quality using the tools available. Report evidence, priority, and specific fixes. Do not edit files or invent scores.
```

After deciding which issues to fix:

```text
/deckl-polish Fix the finish issues identified above within these three routes. Keep the approved direction and factual copy. Check alignment, typography, control states, image treatment, and working destinations. Report any structural or missing-content issues separately.
```

## Choose by outcome

| Need | Start here |
| --- | --- |
| A concept before implementation | `deckl-direct` |
| A new site or a different visual identity | `deckl-design` |
| A better version of the current interface | `deckl-refine` |
| A specific typography, composition, imagery, motion, or device problem | `deckl-type`, `deckl-layout`, `deckl-imagery`, `deckl-motion`, or `deckl-adapt` |
| A review without changes | `deckl-audit` |
| Small finish corrections before delivery | `deckl-polish` |

These are authoring workflows. Real awards, browser support, accessibility, and performance depend on implementation and evidence; the command name is not a guarantee.

## Expressive redesign with Astra or another capable model

Select your model in the assistant. Start with `deckl-design` for a substantial visual overhaul and supply references, real assets, and the existing site. Continue through implementation and desktop/mobile browser review in the same conversation. Use `deckl-motion` only when a focused motion pass is needed afterward; finish with `deckl-polish` if there are remaining detail defects.

For a beautiful existing site, start with `deckl-refine` and explicitly preserve the qualities you like. Running a redesign pass and then a generic simplification pass can erase the direction you just established.

See [ready-to-use briefs and model guidance](docs/model-workflow.md). The skills do not change your selected model or guarantee award recognition.
