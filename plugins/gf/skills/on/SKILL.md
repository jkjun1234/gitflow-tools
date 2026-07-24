---
description: 'Turn gf-mode ON so natural-language commit/PR/review requests auto-route to the gf plugin. Triggers include "/gf:on", "gf 켜줘", "gf 켜", "turn on gf mode", "enable gf".'
---

# gf-mode ON

Enable gf-mode by writing the state file that the gf UserPromptSubmit hook reads.

## Steps

1. Write the single word `on` (lowercase, no surrounding whitespace) to the file `gf-mode` inside the user's Claude config directory:
   - The directory is `~/.claude` (on Windows this is `%USERPROFILE%\.claude`, e.g. `C:\Users\<you>\.claude`). It already exists.
   - Target file: `~/.claude/gf-mode`.
   - Overwrite any existing contents.

2. Confirm to the user, in their language, that gf-mode is now **ON**, and that from now on they can just say things like "커밋해줘" / "commit this", "PR 만들어줘" / "open a PR", or "리뷰해줘" / "review my diff" and the gf plugin will handle it. Note the change takes effect on their next message (the hook reads the file on each prompt).

## Notes

- Do not run any git or GitHub action here — this skill only flips the mode.
- If writing the file fails, report the exact error and the path you tried.
