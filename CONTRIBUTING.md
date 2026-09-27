# Working on Deckl

Start with a real design failure and identify the smallest instruction that would prevent it. Keep each skill focused on one job. Preserve working behavior, truthful content, accessibility, and explicit user constraints.

## Change a skill

1. Edit `skills/<name>/SKILL.md`. Keep its YAML `name` identical to the folder name.
2. Explain when to use it in the description. State whether its default output is a brief, critique, or implementation.
3. Keep supporting references inside that skill and link them relatively. Avoid dependencies on sibling skills.
4. Add a realistic case to [evaluation.md](evaluation.md), including a case where the new instruction should not apply.
5. Compare baseline and skill-assisted results. Record the model, tools, budget, observed results, and checks you could not run.

## Change the installer

Use Node.js 22 or newer. From the repository root:

```sh
npm test
npm pack --dry-run
node bin/deckl.mjs list
node bin/deckl.mjs install --agent claude --dry-run
```

Tests use temporary directories. Preserve the no-overwrite behavior and validate inputs before writing. Do not introduce automatic network requests or installation side effects.

## Change documentation

Keep commands executable from the documented directory. Check relative links and the skill catalog. Label untested host behavior and unpublished features honestly. Do not add fake screenshots, badges, testimonials, or outcome claims.

Deckl is [MIT licensed](LICENSE). Retain applicable notices for third-party material. Follow [the publishing guide](docs/publishing.md) before a registry release; package ownership and live host behavior still need verification.
