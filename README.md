<p align="center">
  <img src="https://raw.githubusercontent.com/Hujifaq/deckl/main/assets/deckl-banner.png" alt="Deckl — Give the interface a point of view. Ten focused skills, from first direction to final detail." width="100%">
</p>

# Deckl

**Art direction and UI craft for AI coding assistants.**

Turn a brief or existing interface into distinctive, coherent, professionally finished work. Deckl favors modern, minimal, premium design grounded in the product—not a repeating collection of fashionable effects. Your brand and explicit requirements always come first.

[Quick start](#quick-start) · [Skills](#skills) · [Workflows](#workflows) · [Installation](#installation) · [FAQ](#faq)

<p><strong>10 focused skills</strong> &nbsp; / &nbsp; <strong>6 agent adapters</strong> &nbsp; / &nbsp; <strong>0 runtime dependencies</strong> &nbsp; / &nbsp; <a href="LICENSE">MIT</a></p>

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

<p align="center"><img src="https://raw.githubusercontent.com/Hujifaq/deckl/main/assets/deckl-install.svg" alt="Run npx @hujifaq/deckl@latest install. Use arrows to move, Space to select, and Enter to continue." width="100%"></p>

### 1. Install Deckl

```sh
npm install -g @hujifaq/deckl@latest
```

### 2. Open setup

```sh
deckl install
```

For installation into a project, open your website folder in the terminal first. Global npm installation adds the `deckl` command; setup copies your chosen skills.

Prefer to run setup without a global installation?

```sh
npx @hujifaq/deckl@latest install
```

npm may ask you to type `y` before downloading the package. Once Deckl opens, use the keyboard controls below; no names or numbers to type.

### 3. Make it yours

| Key | Action |
| --- | --- |
| **↑ / ↓** | Move between options |
| **Space** | Select or deselect agents and skills |
| **Enter** | Continue or confirm the highlighted choice |
| **Esc / Ctrl+C** | Cancel without installing |

1. **Agents:** press Space to select one or more assistants, then Enter.
2. **Location:** choose personal installation or the current project.
3. **Skills:** keep all ten selected, or use Space to deselect any.
4. **Confirm:** review the destinations and press Enter to install.

Existing skill folders are preserved. If setup reports a conflict, follow [Update or remove](#update-or-remove) before retrying.

The setup uses a white Deckl wordmark, grayscale controls, and individual agent accents. Smaller terminals use a compact layout. Set `NO_COLOR=1` for monochrome output.

### Run from source

In VS Code, open the Deckl repository folder containing `package.json` and use its terminal:

```sh
node bin/deckl.mjs install
```

Preview the setup without copying skills:

```sh
node bin/deckl.mjs install --dry-run
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

## Practical design guidance

The core skills now use concise decisions backed by focused references: visual exploration, production interactions, interruptible motion, and scroll-scene engineering. Creative choices remain open. See [the quality workflow](docs/quality-workflow.md) for collecting failures and comparing real results. No visual benchmark results are claimed by the installer tests.

## Build an expressive showcase

**Site first, no house template.** Deckl studies the rendered site and its assets before choosing a direction. It sets no required hero alignment, grid, palette, section sequence, or animation count. Layout and motion grow from the content and the qualities worth preserving. Broad motion requests on showcase sites call for expressive choreography, including scroll-driven scenes where they fit.


For an Awwwards-inspired redesign, start with **deckl-design**. It now develops a concrete art direction, varied page composition, and signature scroll choreography, then asks the assistant to review the actual result in the browser. For a site whose look you already like, **deckl-refine** preserves its strongest qualities and compares before and after.

Choose GPT-6 Astra in Codex if available, or your preferred capable model in another assistant. Deckl supplies the design workflow; the model runs in your assistant. See [model setup and ready-to-use prompts](docs/model-workflow.md) for Astra, Claude, and other hosts.

```text
$deckl-design Redesign this site as an expressive showcase using the supplied references and real assets. Preserve its strongest qualities and working actions. Build distinctive composition and a signature scroll narrative. Inspect desktop and mobile renders, test the motion, and correct visible regressions before finishing.
```

In Claude Code, use `/deckl-design`. These revised instructions are under **Unreleased** until a new npm version is published. Updating the npm command alone does not replace installed skill copies; follow [Update or remove](#update-or-remove) or test from this checkout in a fresh project.

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

The examples here use the globally installed `deckl` command. You can also use `npx @hujifaq/deckl@latest` with the same arguments, or `node bin/deckl.mjs` from this checkout. Explicit `--agent` commands run without opening a menu, which is useful for scripts.

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

The copying step runs locally with no network and no runtime dependencies. npm downloads the package normally. No `postinstall` hook writes agent files. Ordinary installation refuses existing skill folders. Explicit updates back them up before replacement. Symlink discovery directories are refused. If you already installed one skill, select only the new ones or deliberately replace the old copy using the steps below.

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

With the upcoming release containing update support, refresh the CLI and then update installed skills:

```sh
npm install -g @hujifaq/deckl@latest
deckl --version
deckl update
```

The guided update uses arrows, Space, and Enter. Existing selected folders are backed up before replacement; local edits remain in the backup and are not merged automatically. Updating npm alone does not replace installed skill copies.

For a specific agent, inspect and preview first:

```sh
deckl status --agent codex
deckl update --agent codex --dry-run
deckl update --agent codex
```

Add `--scope project` from your website directory for project skills. Repeat `--skill` to update only selected skills. Missing selected skills are installed as well. Status reports the recorded installed version, not a check for local edits; older installs display “legacy / version unknown.”

Backups live in `.deckl-backups/update-*` under your home directory or project root, outside skill discovery folders. Each backup includes a `manifest.json` mapping original paths to numbered backup folders. For manual rollback, move the current affected skill folder somewhere safe, then move its numbered backup folder to the exact original path in the manifest. Refresh the assistant. Ordinary caught installation failures attempt to restore originals automatically; an interrupted process may require this manual recovery.

Before this feature is published, run `node bin/deckl.mjs update` from this repository. Older published versions require moving old skill folders outside discovery directories before reinstalling.

To uninstall, remove only the Deckl skill folders you selected after preserving your edits. `npm uninstall -g @hujifaq/deckl` removes the CLI and leaves skill copies and backups in place.

### Publish your own release

Maintaining Deckl? Follow the [npm publishing guide](docs/publishing.md) to release this update under `@hujifaq/deckl`. Each release needs an unused version; published versions cannot be overwritten.

## FAQ

<details>
<summary><strong>Is this similar to Taste Skill?</strong></summary>

Yes. Both use portable skill instructions to improve AI-generated interfaces. Deckl is organized around ten professional tasks, from direction through handoff. This is a workflow distinction, not a proven quality advantage. Read the [comparison and attribution](docs/comparison.md) and visit [Taste Skill](https://github.com/leonxlnx/taste-skill).

</details>

<details>
<summary><strong>Can I install Deckl globally with npm?</strong></summary>

Yes: run `npm install -g @hujifaq/deckl@latest`, then `deckl install`. The package name is `@hujifaq/deckl`; the terminal command is `deckl`. Running `deckl` alone also opens setup in an interactive terminal.

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

It stopped to preserve existing files. Use `deckl update` in a version with update support to back up and replace selected skills. For older versions, move existing folders outside discovery directories before retrying.

</details>

<details>
<summary><strong>I still see the old numbered setup.</strong></summary>

Update the global CLI with `npm install -g @hujifaq/deckl@latest`, then run `deckl --version`. Compare it with `npm view @hujifaq/deckl version`. `npm --version` reports npm's version, not Deckl's.

You can also launch `npx @hujifaq/deckl@latest install`. If that shows the new setup but `deckl install` does not, run `which -a deckl` on macOS/Linux to check for multiple installed commands.

</details>

<details>
<summary><strong>npm reports E404 or ETARGET.</strong></summary>

Use the full package name `@hujifaq/deckl`. Check the requested version against the public registry:

```sh
npm view @hujifaq/deckl versions --registry=https://registry.npmjs.org/
```

If the version is listed, retry with fresh metadata:

```sh
npm install -g @hujifaq/deckl@latest --prefer-online --registry=https://registry.npmjs.org/
```

If it is not listed, the version is not available through that lookup yet. An authentication or network error requires resolving that error first. For maintainers, see the [publishing guide](docs/publishing.md).

</details>

## Edit and verify

Open this folder in VS Code. Each command's instructions live in `skills/<name>/SKILL.md`. Keep the folder name and YAML `name` identical, and keep references inside their owning skill.

Run the installer checks from this folder:

```sh
npm test
npm pack --dry-run
```

The tests use temporary directories and cover all six adapters in both scopes, CLI behavior, multiple-agent preflight, conflicts, invalid inputs, dry runs, repeat installs, and symlink rejection. They do not test design quality or live assistant discovery.

Use [evaluation.md](evaluation.md) for behavioral testing.

```text
deckl/
├── README.md
├── workflows.md
├── evaluation.md
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
├── scripts/setup.mjs
├── scripts/setup-view.mjs
├── tests/cli.test.mjs
├── tests/install.test.mjs
└── skills/
    └── deckl-*/SKILL.md  (+ references where needed)
```

## Project status

**Included:** ten skills, six agent adapters, an npm executable with guided setup, an MIT license, supporting references, workflow examples, installer tests, and a publishing guide.

**Still to validate:** live discovery and invocation in each advertised host, and real design outcomes. See [the changelog](CHANGELOG.md).

Licensed under [MIT](LICENSE). The npm package is `@hujifaq/deckl`; the terminal command is `deckl`.
