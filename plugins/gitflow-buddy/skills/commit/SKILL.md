---
description: Analyze staged/unstaged changes and create a Conventional Commits message, then commit
---

# Smart Commit

Create a well-formed commit from the current changes using the Conventional Commits format.

## Steps

1. Inspect the working tree. Run these to understand what changed:
   - `git status --short`
   - `git diff --staged` (if nothing is staged, run `git diff` to see unstaged changes)
   - `git log --oneline -10` to match the repo's existing commit style

2. Decide what to stage:
   - If the user already staged changes, commit only those.
   - If nothing is staged, stage the relevant files with `git add`. Do NOT blindly `git add -A` — only stage files that belong in this logical commit. If the changes span multiple unrelated concerns, tell the user and suggest splitting into several commits.

3. Write the commit message in Conventional Commits format:
   ```
   <type>(<optional scope>): <short summary in imperative mood>

   <optional body: what and why, not how>
   ```
   - **type** is one of: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
   - Summary line: imperative mood ("add", not "added"), no trailing period, ≤ 72 chars.
   - Add a body only when the change needs explanation. Wrap body lines at ~72 chars.
   - Add `BREAKING CHANGE:` footer when the change breaks compatibility.

4. Show the user the proposed message and the exact files being committed. Wait for confirmation before running `git commit`.

5. Commit with a here-doc so multi-line messages work:
   ```bash
   git commit -m "$(cat <<'EOF'
   <type>(<scope>): <summary>

   <body>
   EOF
   )"
   ```

## Rules

- Never commit without showing the message first.
- Never push automatically — committing is the end of this skill.
- Match the language and style of the repo's recent commits.
- Do not add co-author trailers or tool attribution unless the user asks.
- If pre-commit hooks fail, report the failure and stop — do not use `--no-verify`.
