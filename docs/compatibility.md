# Agent compatibility

Directory conventions were reviewed against the linked official documentation on 2026-09-27. Installer tests verify file placement and preservation in temporary directories; they do not prove live discovery, model behavior, or remote deployment compatibility.

| Adapter | User directory | Project directory | Invocation guidance |
| --- | --- | --- | --- |
| [Claude Code](https://code.claude.com/docs/en/skills) (`claude`) | `~/.claude/skills` | `.claude/skills` | `/deckl-refine` |
| [Codex](https://learn.chatgpt.com/docs/build-skills) (`codex`) | `~/.agents/skills` | `.agents/skills` | `$deckl-refine` or the skill picker |
| [Cursor](https://cursor.com/docs/skills) (`cursor`) | `~/.cursor/skills` | `.cursor/skills` | Type `/` and select `deckl-refine` |
| [Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) (`copilot`) | `~/.copilot/skills` | `.github/skills` | Ask: `Use the /deckl-refine skill…` |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/using-agent-skills.md) (`gemini`) | `~/.gemini/skills` | `.gemini/skills` | Ask for the skill by name; manage with `/skills` |
| [OpenCode](https://opencode.ai/v2/docs/skills) (`opencode`) | `~/.config/opencode/skills` | `.opencode/skills` | Ask for the skill by name; agent loads it with its skill tool |

The `copilot` adapter specifically follows Copilot CLI's personal path. For other Copilot surfaces, consult their own support and settings; project `.github/skills` is the intended repository location, but a CLI test is not a VS Code or cloud test.

Many agents also discover `.agents/skills` or `.claude/skills`. Installing Deckl into multiple discovered directories can surface duplicate names. Choose one destination per agent's effective discovery setup, especially if you already installed the Codex or Claude copy.

User scope is local to the machine running the assistant. Remote SSH, containers, cloud agents, and restrictive organization policies may require project installation, an explicit sync mechanism, or administrator configuration. This helper copies local files and does not configure cloud synchronization or host settings.

Refresh the host's skills or start a new session after copying. Gemini CLI and Copilot CLI document `/skills reload`. For other hosts, use their current picker/settings and refresh behavior. If a skill is missing, check the exact `skills/deckl-refine/SKILL.md` hierarchy and the environment running the agent.

The helper preserves skill source contents; no agent-specific wrapper is injected. Other [Agent Skills](https://agentskills.io/specification)-compatible hosts can use manual folder installation after verifying their own conventions.
