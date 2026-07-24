---
description: 'Turn gf-mode OFF so natural-language requests no longer auto-route to the gf plugin (explicit /gf: commands still work). Triggers include "/gf:off", "gf 꺼줘", "gf 꺼", "turn off gf mode", "disable gf".'
---

# gf-mode OFF

Disable gf-mode by writing the state file that the gf UserPromptSubmit hook reads.

## Steps

1. Write the single word `off` (lowercase, no surrounding whitespace) to the file `gf-mode` inside the user's Claude config directory:
   - The directory is `~/.claude` (on Windows this is `%USERPROFILE%\.claude`, e.g. `C:\Users\<you>\.claude`). It already exists.
   - Target file: `~/.claude/gf-mode`.
   - Overwrite any existing contents.

2. Confirm to the user, in their language, that gf-mode is now **OFF**. Explain that natural-language commit/PR/review requests will no longer auto-trigger the gf plugin, but they can still run it explicitly with `/gf:commit`, `/gf:pr`, or by asking for a code review. Note the change takes effect on their next message.

## Notes

- Do not run any git or GitHub action here — this skill only flips the mode.
- If writing the file fails, report the exact error and the path you tried.
