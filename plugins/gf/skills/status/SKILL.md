---
description: 'Report whether gf-mode is currently ON or OFF. Triggers include "/gf:status", "gf 상태", "is gf on", "gf mode status".'
---

# gf-mode status

Report the current gf-mode state.

## Steps

1. Read the file `~/.claude/gf-mode` (on Windows: `%USERPROFILE%\.claude\gf-mode`).
   - If the file exists, the trimmed lowercase contents are the state (`on` or `off`).
   - If the file does not exist, the state is **OFF** (the default).

2. Tell the user, in their language, whether gf-mode is **ON** or **OFF**, and remind them:
   - Turn on with `/gf:on` (or "gf 켜줘"), off with `/gf:off` (or "gf 꺼줘").
   - When ON, natural-language commit/PR/review requests auto-route to the gf plugin.

## Notes

- Read-only. Do not modify the state file.
