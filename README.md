<p align="center">
  <img src="https://raw.githubusercontent.com/Hujifaq/deckl/main/assets/deckl-banner.png" alt="Deckl — Give the interface a point of view. Ten focused skills, from first direction to final detail." width="100%">
</p>

# Deckl

**Art direction and UI craft for AI coding assistants.**

Turn a brief or existing interface into distinctive, coherent, professionally finished work. Deckl favors modern, minimal, premium design grounded in the product—not a repeating collection of fashionable effects. Your brand and explicit requirements always come first.

[Quick start](#quick-start) · [Skills](#skills) · [Workflows](#workflows) · [Installation](#installation) · [FAQ](#faq)

<p><strong>10 focused skills</strong> &nbsp; / &nbsp; <strong>6 agent adapters</strong> &nbsp; / &nbsp; <strong>0 runtime dependencies</strong> &nbsp; / &nbsp; <a href="LICENSE">MIT</a></p>

> **Release preview.** The npm package and executable are prepared locally. This project has not published a registry release, and the `deckl` package name is not confirmed available. Public commands below assume publication under that name. File installation is tested; live host discovery and design effectiveness still need evaluation.

## Start here

| Your task | Start with |
| --- | --- |
| Make an existing interface better | [deckl-refine](skills/deckl-refine/SKILL.md) |
| Build or substantially redesign a website | [deckl-design](skills/deckl-design/SKILL.md) |
| Find what needs improvement before editing | [deckl-audit](skills/deckl-audit/SKILL.md) |
| Decide what the website should feel like | [deckl-direct](skills/deckl-direct/SKILL.md) |

Choose the skill that matches the job. You do not need to run all ten.

## Quick start

**Install → choose your agent → use a skill.** Requires Node.js 22+ and npm.

<p align="center"><img src="https://raw.githubusercontent.com/Hujifaq/deckl/main/assets/deckl-install.svg" alt="After npm publication: npm install -g deckl, then deckl install. Alternatively run npx deckl install." width="100%"></p>

### One command, after publication

```sh
npx deckl install
```

Choose an agent and user or project scope in the guided setup. The installer shows destinations and asks before copying. All ten skills are installed unless you select specific ones.

### Keep the command, after publication

Install the Deckl executable globally once, then set up your skills:

```sh
npm install -g deckl
deckl install
```

Global npm installation adds the `deckl` command. It does not copy skills until you run `deckl install`.

### Try it now from this repository

Open the Deckl folder in VS Code and use its terminal:

```sh
node bin/deckl.mjs install
```

For a preview without writing files:

```sh
node bin/deckl.mjs install --agent claude --skill deckl-refine --dry-run
```

### Use Deckl in your website project

Refresh the assistant, then try one of these prompts:

| Agent | Prompt |
| --- | --- |
| Claude Code / Cursor | `/deckl-refine Improve the hierarchy, typography, and spacing. Keep the brand and working controls.` |
| Codex | `$deckl-refine Improve the hierarchy, typography, and spacing. Keep the brand and working controls.` |
| Copilot CLI | `Use the /deckl-refine skill to improve the hierarchy, typography, and spacing.` |
| Gemini CLI / OpenCode | `Use the deckl-refine skill to improve the hierarchy, typography, and spacing.` |

Copying files does not confirm host discovery. See [agent compatibility](docs/compatibility.md) and [troubleshooting](#faq).

## Skills

The names below link to the actual instructions. Use `/` before a name in Claude Code and `$` in Codex.

### Direction and design

| Skill | When to use it | Result |
| --- | --- | --- |
| [deckl-direct](skills/deckl-direct/SKILL.md) | A campaign, studio, or product needs a clear visual idea. | Art direction and an actionable brief; no UI edits by default. |
| [deckl-design](skills/deckl-design/SKILL.md) | A new site or substantial redesign needs a coherent concept. | An implemented page or site within the requested scope. |
| [deckl-refine](skills/deckl-refine/SKILL.md) | An existing interface feels generic or unresolved. | Coordinated improvements while preserving its identity and behavior. |

### Focused craft

| Skill | When to use it | Result |
| --- | --- | --- |
| [deckl-type](skills/deckl-type/SKILL.md) | Type hierarchy, wrapping, or readability feels weak. | Clear type roles, better measure, and considered font handling. |
| [deckl-layout](skills/deckl-layout/SKILL.md) | Sections repeat or composition and spacing lack intention. | Stronger grouping, page rhythm, and responsive structure. |
| [deckl-imagery](skills/deckl-imagery/SKILL.md) | Visuals feel generic or poorly integrated. | Asset direction, selection, crops, and media treatment. |
| [deckl-motion](skills/deckl-motion/SKILL.md) | An interaction needs expression or an animation needs repair. | Purposeful motion with cleanup and usable fallbacks. |
| [deckl-adapt](skills/deckl-adapt/SKILL.md) | A desktop design breaks down on small screens or touch. | Deliberate mobile composition and functioning interactions. |

### Review and finish

| Skill | When to use it | Result |
| --- | --- | --- |
| [deckl-polish](skills/deckl-polish/SKILL.md) | An established design is nearly ready for handoff. | Bounded corrections to details, consistency, and interaction states. |
| [deckl-audit](skills/deckl-audit/SKILL.md) | You want a professional critique before making changes. | Prioritized, evidence-backed findings; read-only by default. |

## What makes it Deckl

- **A real idea.** Derive the design from the product, audience, and content.
- **Clear composition.** Use hierarchy, proportion, whitespace, and rhythm deliberately.
- **Specific content.** Work with meaningful imagery and truthful copy; never invent social proof.
- **Consistent craft.** Establish type roles, spacing relationships, and reusable details.
- **Useful expression.** Let motion and visual effects support meaning and interaction.
- **A complete finish.** Account for small screens, keyboard use, reduced motion, and edge states.

Premium does not mean tiny text, empty screens, or animation everywhere. Deckl does not mandate a palette, font, framework, or page template. A dashboard should still work like a dashboard.

## Workflows

**New brand website:** `deckl-direct → deckl-design → deckl-polish`

**Existing website:** `deckl-audit → deckl-refine`, then use a specialist only when needed.

**Client handoff:** `deckl-adapt → deckl-polish → deckl-audit`

These are suggested sequences, not automatic pipelines. Run each step with the context and scope it needs.

```text
/deckl-direct Define an editorial direction for an independent architecture studio. Use the supplied projects and photography. Deliver a brief only.
```

```text
/deckl-motion Improve the project gallery's transitions. Preserve keyboard navigation, support touch, and provide a reduced-motion alternative.
```

```text
/deckl-audit Review the checkout before handoff. Prioritize usability and responsive failures. Do not modify files.
```

In Codex, replace the leading `/` with `$`. See [professional workflows and detailed prompts](workflows.md).

## Installation

The examples here use the globally installed `deckl` command **after publication**. Today, run the same arguments with `node bin/deckl.mjs` from this repository. You can also use `npx deckl` after the registry release.

### Choose your agent

Each command installs all ten skills in user scope. Pick the row for your agent:

| Agent | Command | User destination |
| --- | --- | --- |
| Claude Code | `deckl install --agent claude` | `~/.claude/skills` |
| Codex | `deckl install --agent codex` | `~/.agents/skills` |
| Cursor | `deckl install --agent cursor` | `~/.cursor/skills` |
| Copilot CLI | `deckl install --agent copilot` | `~/.copilot/skills` |
| Gemini CLI | `deckl install --agent gemini` | `~/.gemini/skills` |
| OpenCode | `deckl install --agent opencode` | `~/.config/opencode/skills` |

Scopes and invocation follow the [linked official host documentation](docs/compatibility.md). Adapter tests check file placement; live host validation is pending.

### Start with one skill

```sh
deckl install --agent claude --skill deckl-refine
```

### Select several skills

Repeat `--skill`:

```sh
deckl install --agent claude --skill deckl-design --skill deckl-type --skill deckl-motion
```

### Install for one project

Run from your website directory. Project scope defaults to that current directory:

```sh
deckl install --agent codex --scope project --dry-run
```

Check the printed destination, then repeat without `--dry-run`. To target a different existing directory, add `--project` and its path. Quote paths containing spaces.

### Set up several agents

```sh
deckl install --agent claude --agent codex --dry-run
```

The installer checks every selected destination before copying anything. Many hosts also read other agents' directories, so avoid duplicate copies in directories your host already discovers.

### Inspect available options

```sh
deckl list
deckl agents
deckl --help
deckl --version
```

The copying step runs locally with no network and no runtime dependencies. npm downloads the package normally. No `postinstall` hook writes agent files. Existing skill folders and symlink discovery directories are refused; there is no force option. If you already installed one skill, select only the new ones or deliberately replace the old copy using the steps below.

### Manual installation

Copy the **entire** wanted folder from `skills/`, including its references. For example:

| Assistant | User destination | Project destination |
| --- | --- | --- |
| Claude Code | `~/.claude/skills/deckl-refine/` | `.claude/skills/deckl-refine/` |
| Codex | `~/.agents/skills/deckl-refine/` | `.agents/skills/deckl-refine/` |
| Cursor | `~/.cursor/skills/deckl-refine/` | `.cursor/skills/deckl-refine/` |
| Copilot CLI | `~/.copilot/skills/deckl-refine/` | `.github/skills/deckl-refine/` |
| Gemini CLI | `~/.gemini/skills/deckl-refine/` | `.gemini/skills/deckl-refine/` |
| OpenCode | `~/.config/opencode/skills/deckl-refine/` | `.opencode/skills/deckl-refine/` |

The final structure must contain `deckl-refine/SKILL.md`, not just a loose Markdown file. `~` means your home directory; project paths are relative to your website. For remote or container sessions, install in the environment running the assistant. Other compatible assistants may also discover `.agents/skills`; avoid duplicate installations in directories a host reads.

Host documentation: [Claude Code skills](https://code.claude.com/docs/en/skills) · [Codex skills](https://learn.chatgpt.com/docs/build-skills) · [Agent Skills specification](https://agentskills.io/specification).

### Update or remove

Compare the installed folder with the new source first. Preserve your edits by backing up the exact installed skill folder **outside all skill discovery directories**, then move the installed folder aside and rerun the installer for that skill. Automatic merging is not provided.

To uninstall, remove only the specific Deckl skill folder you installed after preserving local edits. Refresh the assistant afterward. Do not remove the parent skills directory: it may contain other people's skills.

`npm uninstall -g deckl` removes the executable; it leaves skill copies in place. Likewise, updating the npm package does not update your installed skill folders.

### Publish your own release

Maintaining Deckl? Follow the [npm publishing guide](docs/publishing.md) for name availability, local package checks, authentication, and release commands. Public publishing is currently disabled by `private: true` in `package.json` until the package identity is confirmed.

## FAQ

<details>
<summary><strong>Is this similar to Taste Skill?</strong></summary>

Yes. Both use portable skill instructions to improve AI-generated interfaces. Deckl is organized around ten professional tasks, from direction through handoff. This is a workflow distinction, not a proven quality advantage. Read the [comparison and attribution](docs/comparison.md) and visit [Taste Skill](https://github.com/leonxlnx/taste-skill).

</details>

<details>
<summary><strong>Can I install Deckl globally with npm?</strong></summary>

The package supports global npm installation and a `deckl` executable. A registry release has not been published by this project. Until then, use `node bin/deckl.mjs install`, or pack the repository with `npm pack` and install the resulting local tarball. After publication under the `deckl` name, `npm install -g deckl` becomes the public command.

</details>

<details>
<summary><strong>Does it work in every AI IDE?</strong></summary>

The installer includes six adapters: Claude Code, Codex, Cursor, Copilot CLI, Gemini CLI, and OpenCode. The skills use portable Markdown and no required host-specific tools. Directory placement is tested, but live discovery, invocation, and design behavior need testing in each host. Other compatible assistants can use manual folder installation after verifying their own paths.

</details>

<details>
<summary><strong>Does it include an AI model, browser, or image generator?</strong></summary>

No. The assistant uses tools available in its own environment. Image generation and browser inspection depend on that environment and may carry its normal costs. The skills require honest reporting when a check or capability is unavailable.

</details>

<details>
<summary><strong>Will it produce an Awwwards-winning website?</strong></summary>

That level of craft is an aspiration, not a guaranteed result. Quality depends on the brief, assets, model, implementation, and review. Deckl is not affiliated with Awwwards.

</details>

<details>
<summary><strong>The skill does not appear. What should I check?</strong></summary>

Check the exact folder hierarchy, the environment running your assistant, and its discovery settings. Refresh or restart the session and check for duplicate versions. Use the syntax in the quick start; not every host exposes skills as slash commands. See the [compatibility guide](docs/compatibility.md). Installer success confirms copying, not host discovery.

</details>

<details>
<summary><strong>The installer reports an existing destination.</strong></summary>

It stopped to preserve existing files. Compare that folder with the source, back up any edits outside discovery directories, and move the old folder aside before retrying. If you only want new skills, select them explicitly with repeated `--skill` options.

</details>

## Edit and verify

Open this folder in VS Code. Each command's instructions live in `skills/<name>/SKILL.md`. Keep the folder name and YAML `name` identical, and keep references inside their owning skill.

Run the installer checks from this folder:

```sh
npm test
npm pack --dry-run
```

The tests use temporary directories and cover all six adapters in both scopes, CLI behavior, multiple-agent preflight, conflicts, invalid inputs, dry runs, repeat installs, and symlink rejection. They do not test design quality or live assistant discovery.

Use [evaluation.md](evaluation.md) for behavioral testing and [CONTRIBUTING.md](CONTRIBUTING.md) for changes.

```text
deckl/
├── README.md
├── workflows.md
├── evaluation.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── LICENSE
├── package.json
├── assets/deckl-banner.png
├── assets/deckl-logo.png
├── assets/deckl-install.svg
├── docs/comparison.md
├── docs/compatibility.md
├── docs/publishing.md
├── bin/deckl.mjs
├── scripts/agents.mjs
├── scripts/install.mjs
├── tests/cli.test.mjs
├── tests/install.test.mjs
└── skills/
    └── deckl-*/SKILL.md  (+ references where needed)
```

## Project status

**Included:** ten skills, six agent adapters, an npm executable with guided setup, an MIT license, supporting references, workflow examples, installer tests, and a publishing guide.

**Before public release:** confirm npm package ownership or availability, verify live discovery and invocation in the advertised hosts, and evaluate real design outputs. See [the changelog](CHANGELOG.md).

Licensed under [MIT](LICENSE). npm publication is pending. Package, domain, and trademark availability for “Deckl” have not been asserted.
