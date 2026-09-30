# Get stronger design results with Deckl

Deckl supplies design instructions to the model running in your coding assistant. It does not bundle a model, change the model selector, or make API calls. Select the model in your assistant, then invoke the relevant skill in the website project.

## GPT-6 Astra

Use GPT-6 Astra when it is available in your Codex model selector. For a substantial redesign, a higher reasoning setting can be worth trying; compare results on your project rather than assuming more reasoning guarantees better taste. Give it visual references, real assets, and a browser preview it can inspect.

Keep the brief specific and let the model implement through visual review. OpenAI's [skill guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra) recommends focused descriptions and relevant supporting resources over long, conflicting recipes. The [model guidance](https://developers.openai.com/api/docs/guides/latest-model) also discusses follow-through and sensitivity to instructions. Deckl follows that approach; it does not need a special Astra-only skill format.

Paste this in your website project, with your reference links and assets attached:

```text
$deckl-design Substantially redesign this website as an expressive, Awwwards-inspired showcase. Keep its real content, brand assets, routes, and working actions. Inspect the existing site and supplied references first; identify what already deserves to survive.

Choose a specific art direction rooted in this brand. Build distinctive typography, confident image scale, and a page rhythm that carries through the footer. Implement a signature scroll sequence with entry, development, and exit; use GSAP ScrollTrigger or a suitable existing equivalent. Repeated fade-ups alone are not the intended result.

Carry the work through implementation and browser review. Inspect desktop and mobile compositions and scroll the main scene in both directions. Fix concrete visual and interaction defects before finishing. Provide a deliberate reduced-motion version and preserve access to content. Report what you actually verified and any missing assets.
```

## Claude and other models

Use the same outcome-focused brief with the strongest suitable coding model available in your assistant. For Claude Code, invoke `/deckl-design` instead of `$deckl-design`. For other hosts, follow the invocation syntax in the README.

Deckl does not rely on a specific Claude version or assume that a name such as “Opus 5.5” is available. Choose the exact model offered by your host. No cross-model quality ranking has been measured for this revision.

## Improve a site you already like

Use refinement when the existing direction should survive:

```text
$deckl-refine Improve this site's visual craft while preserving its strongest qualities. Inspect it first and identify the typography, imagery, color, composition, and motion worth keeping. Fix the most consequential weaknesses. Compare before and after at the same desktop and mobile sizes; revise changes that flatten its character. Keep working actions intact.
```

Use `deckl-motion` for a focused choreography pass and `deckl-polish` for final optical details. Do not run every design skill automatically: repeated redesign instructions can undo a coherent direction. Continue in the same conversation where practical so the approved concept remains visible.

## Give the model useful evidence

- Supply a real logo, project or product imagery, and factual copy.
- Link a few relevant references and explain what you like about them.
- State whether you want refinement or permission to change the visual language.
- Allow the assistant to run and inspect the local site with available browser tools.
- Describe a failed result concretely: which original qualities were lost, which sections feel generic, and which interactions are distracting.

These instructions are designed to improve decisions, not promise an award. Evaluate the revised skills on your own starting project using the [comparison protocol](../evaluation.md). The current revision has package and structural checks; it is not a completed model benchmark.

## Let the site lead

Ask the assistant to scan the rendered site before making design decisions. Share what should survive and the creative freedom available. Deckl has no required text/image split, color scheme, grid, section count, or motion recipe. For broad motion work, use this brief:

```text
$deckl-motion Inspect this site's full scroll journey and interactions first. Develop and implement a distinctive motion direction that fits its identity. Explore expressive scroll choreography, transitions, and interactions without imposing a fixed pattern or repeating the same reveal. Use ScrollTrigger or a suitable engine for the chosen behavior. Tune the running result, preserve usable navigation, and create deliberate mobile and reduced-motion alternatives.
```
