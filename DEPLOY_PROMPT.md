# Deployment Instruction Prompt — gitflow-tools marketplace

> **Purpose:** This file is an instruction prompt for an autonomous AI coding agent (Claude Code, or equivalent with shell access). Hand this file to the agent and tell it: *"Follow DEPLOY_PROMPT.md to deploy this marketplace."* The agent executes the steps, verifies each one, and stops if a step fails.
>
> **Do NOT run the `gh auth login` step on behalf of the user** — it is interactive (browser/device flow). The agent must pause and ask the human to complete it.

---

## Context the agent needs

- **Repo root:** the directory containing `.claude-plugin/marketplace.json` (this file lives next to it).
- **Marketplace name:** `gitflow-tools`
- **Plugin name (id):** `gf` (display name: gitflow-buddy)
- **GitHub owner/username:** `jkjun1234`
- **Target repo:** `jkjun1234/gitflow-tools` (public)
- **Git identity:** name `jkjun1234`, email `jkjun1234@gmail.com`
- **Versioning:** `version` is intentionally omitted from `plugin.json`. The commit SHA is the version. Do not add a version field.

## Preconditions to check first

Run these and confirm before proceeding. If any fails, fix or report before moving on.

```bash
git --version          # git must be installed
gh --version           # GitHub CLI must be installed (>= 2.9x)
gh auth status         # must show an authenticated account
```

- If `gh` is missing: install it (`winget install --id GitHub.cli` on Windows, `brew install gh` on macOS, distro package on Linux), then re-check.
- If `gh auth status` shows "not logged in": **STOP. Ask the human to run `gh auth login` themselves** (interactive). Do not attempt to automate it. Resume once they confirm.

## Step 1 — Validate the marketplace

From the repo root:

```bash
claude plugin validate .
```

Expected: "Validation passed" (a warning about missing `version` is expected and acceptable — the commit SHA is the version). If there are **errors** (not warnings), fix them before continuing.

## Step 2 — Ensure a clean commit

```bash
git status --short
```

- If there are uncommitted changes, stage and commit them:
  ```bash
  git add -A
  git commit -m "chore: prepare gitflow-tools for deployment"
  ```
- Confirm the branch is `main`:
  ```bash
  git branch -M main
  ```

## Step 3 — Create the GitHub repo and push

Check whether the remote repo already exists:

```bash
gh repo view jkjun1234/gitflow-tools 2>/dev/null && echo "EXISTS" || echo "MISSING"
```

- **If MISSING** — create it, set it as origin, and push in one command:
  ```bash
  gh repo create gitflow-tools --public --source=. --remote=origin --push
  ```
- **If EXISTS** — just add the remote (if absent) and push:
  ```bash
  git remote get-url origin 2>/dev/null || git remote add origin https://github.com/jkjun1234/gitflow-tools.git
  git push -u origin main
  ```

## Step 4 — Verify the deployment

```bash
gh repo view jkjun1234/gitflow-tools --json url,visibility,defaultBranchRef
```

Confirm:
- `visibility` is `public` (required so others can `/plugin marketplace add` it).
- `defaultBranchRef` is `main`.
- The `.claude-plugin/marketplace.json` file is present on the remote:
  ```bash
  gh api repos/jkjun1234/gitflow-tools/contents/.claude-plugin/marketplace.json --jq .name
  ```
  Expected output: `marketplace.json`.

## Step 5 — Report install instructions to the human

Print these for the human to run in an **interactive** Claude Code session (the agent cannot run slash commands non-interactively for the human):

```
/plugin marketplace add jkjun1234/gitflow-tools
/plugin install gf@gitflow-tools
/reload-plugins
```

Then the plugin exposes:
- `/gf:commit`
- `/gf:pr`
- the `code-reviewer` agent (ask Claude to "review my diff").

## Failure handling

- **Push rejected / auth error:** re-run `gh auth status`; the human may need `gh auth login` or `gh auth setup-git`.
- **Repo name already taken by a different project:** ask the human for a new marketplace repo name, update `name` in `.claude-plugin/marketplace.json` and all `jkjun1234/gitflow-tools` references, then retry from Step 2.
- **`claude plugin validate` errors:** report the exact error lines; do not push a marketplace that fails validation.

## Do NOT

- Do not run `gh auth login` for the human.
- Do not add a `version` field to `plugin.json`.
- Do not force-push.
- Do not make the repo private (breaks public install).
