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
node --test tests/install.test.mjs
node scripts/install.mjs --list
node scripts/install.mjs --agent claude --scope user --dry-run
```

Tests use temporary directories. Preserve the no-overwrite behavior and validate inputs before writing. Do not introduce automatic network requests or installation side effects.

## Change documentation

Keep commands executable from the documented directory. Check relative links and the skill catalog. Label untested host behavior and unpublished features honestly. Do not add fake screenshots, badges, testimonials, or outcome claims.

The project owner has not selected a distribution license. Resolve licensing before accepting external contributions or publishing; retain applicable notices for any third-party material.
