export const agents = {
  claude: { label: 'Claude Code', user: '.claude/skills', project: '.claude/skills', prompt: '/deckl-refine Improve this interface while preserving its brand and working controls.', docs: 'https://code.claude.com/docs/en/skills' },
  codex: { label: 'Codex', user: '.agents/skills', project: '.agents/skills', prompt: '$deckl-refine Improve this interface while preserving its brand and working controls.', docs: 'https://learn.chatgpt.com/docs/build-skills' },
  cursor: { label: 'Cursor', user: '.cursor/skills', project: '.cursor/skills', prompt: '/deckl-refine Improve this interface while preserving its brand and working controls.', docs: 'https://cursor.com/docs/skills' },
  copilot: { label: 'GitHub Copilot CLI', user: '.copilot/skills', project: '.github/skills', prompt: 'Use the /deckl-refine skill to improve this interface while preserving its brand and working controls.', docs: 'https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills' },
  gemini: { label: 'Gemini CLI', user: '.gemini/skills', project: '.gemini/skills', prompt: 'Use the deckl-refine skill to improve this interface while preserving its brand and working controls.', docs: 'https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/using-agent-skills.md' },
  opencode: { label: 'OpenCode', user: '.config/opencode/skills', project: '.opencode/skills', prompt: 'Use the deckl-refine skill to improve this interface while preserving its brand and working controls.', docs: 'https://opencode.ai/v2/docs/skills' },
};
