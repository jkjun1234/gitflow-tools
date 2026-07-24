# gitflow-tools

A Claude Code plugin marketplace with **gitflow-buddy** (plugin id `gf`) — a Git/PR workflow helper.

## What's inside

| Component | Type | What it does |
|-----------|------|--------------|
| `/gf:commit` | skill | Analyzes changes and writes a Conventional Commits message, then commits after confirmation |
| `/gf:pr` | skill | Gathers branch commits and opens a GitHub PR with a generated title and body (uses `gh`) |
| `code-reviewer` | agent | Read-only review of a diff/branch/file for bugs, security, and performance |

> The plugin id is short (`gf`) so commands stay quick to type: `/gf:commit`, `/gf:pr`.

## Requirements

- [GitHub CLI (`gh`)](https://cli.github.com/) installed and authenticated (`gh auth login`) — needed for `/gf:pr`.
- `git` on PATH.

## Install

```bash
/plugin marketplace add jkjun1234/gitflow-tools
/plugin install gf@gitflow-tools
/reload-plugins
```

## Usage

Two ways to use it:

**Type the command:**

```bash
/gf:commit          # smart commit from current changes
/gf:pr              # open a PR for the current branch
```

**Or just ask in plain language** — the skills are model-invoked, so you don't need to remember the command names:

- "커밋해줘" / "commit my changes" → runs the commit skill
- "PR 만들어줘" / "open a PR" → runs the PR skill
- "내 diff 리뷰해줘" / "review my diff" → runs the `code-reviewer` agent

## Development

Validate the marketplace and plugin before pushing:

```bash
claude plugin validate .
```

Versioning uses the git commit SHA — every pushed commit is a new version, so users get updates on `/plugin marketplace update` without manual version bumps.
