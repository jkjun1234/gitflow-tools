---
description: Gather the current branch's commits and open a GitHub pull request with a generated title and body. Use when the user wants to open or create a PR — triggers include "PR", "pull request", "PR 만들어줘", "open a PR", "create a pull request".
---

# Create Pull Request

Open a GitHub PR for the current branch using the `gh` CLI.

## Preconditions

- `gh` must be installed and authenticated. Check with `gh auth status`. If it fails, tell the user to run `gh auth login` (an interactive step you cannot do for them) and stop.
- The current branch must not be the default branch. If it is, tell the user to create a feature branch first.
- The branch must be pushed. If `git status` shows the branch has no upstream, push it with `git push -u origin <branch>` first (confirm with the user).

## Steps

1. Determine the base branch (usually `main` or `master`):
   - `git remote show origin | grep 'HEAD branch'` or default to `main`.

2. Gather context:
   - `git log <base>..HEAD --oneline` — commits that will be in the PR.
   - `git diff <base>...HEAD --stat` — files touched and size.

3. Look for a PR template. Check `.github/PULL_REQUEST_TEMPLATE.md`, `.github/pull_request_template.md`, or `docs/`. If one exists, follow its structure.

4. Write the PR:
   - **Title**: concise, imperative, summarizing the whole branch (not just the last commit). Follow Conventional Commits style if the repo does.
   - **Body**: use this structure unless a template overrides it:
     ```
     ## Summary
     - <1-3 bullets on what this PR does>

     ## Changes
     - <notable changes, grouped logically>

     ## Test plan
     - <how to verify, or what tests were added/run>
     ```

5. Show the user the title and body. Wait for confirmation.

6. Create the PR:
   ```bash
   gh pr create --base <base> --title "<title>" --body "$(cat <<'EOF'
   <body>
   EOF
   )"
   ```
   - Add `--draft` if the user asks for a draft.

7. Report the PR URL that `gh` prints.

## Rules

- Never create the PR without showing title and body first.
- Do not force-push or rewrite history as part of this skill.
- Do not add tool attribution to the PR body unless the user asks.
