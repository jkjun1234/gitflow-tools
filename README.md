# gitflow-tools

A Claude Code plugin marketplace with **gitflow-buddy** — a Git/PR workflow helper.

## What's inside

| Component | Type | What it does |
|-----------|------|--------------|
| `/gitflow-buddy:commit` | skill | Analyzes changes and writes a Conventional Commits message, then commits after confirmation |
| `/gitflow-buddy:pr` | skill | Gathers branch commits and opens a GitHub PR with a generated title and body (uses `gh`) |
| `code-reviewer` | agent | Read-only review of a diff/branch/file for bugs, security, and performance |

## Requirements

- [GitHub CLI (`gh`)](https://cli.github.com/) installed and authenticated (`gh auth login`) — needed for `/gitflow-buddy:pr`.
- `git` on PATH.

## Install

```bash
/plugin marketplace add jkjun/gitflow-tools
/plugin install gitflow-buddy@gitflow-tools
/reload-plugins
```

## Usage

```bash
/gitflow-buddy:commit          # smart commit from current changes
/gitflow-buddy:pr              # open a PR for the current branch
```

Ask Claude to "review my diff" (or branch/file) to invoke the `code-reviewer` agent.

## Development

Validate the marketplace and plugin before pushing:

```bash
claude plugin validate .
```

Versioning uses the git commit SHA — every pushed commit is a new version, so users get updates on `/plugin marketplace update` without manual version bumps.
