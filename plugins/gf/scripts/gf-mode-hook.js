#!/usr/bin/env node
// UserPromptSubmit hook for the gf plugin.
// Reads the gf-mode state file and injects a directive that either routes
// natural-language commit/PR/review requests to the gf plugin (ON) or
// suppresses auto-invocation (OFF). State file: ~/.claude/gf-mode ("on"|"off").
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

const modeFile = path.join(os.homedir(), '.claude', 'gf-mode');

let mode = 'off';
try {
  mode = (fs.readFileSync(modeFile, 'utf8') || '').trim().toLowerCase();
} catch {
  // Missing file = OFF (default).
}

const ON_TEXT =
  'gf-mode is ON. When the user asks — in natural language, in any language — to ' +
  'commit their changes, open/create a pull request, or review code or a diff, ' +
  'fulfill the request using the gf plugin: use the gf:commit skill for commit ' +
  'requests, the gf:pr skill for pull-request requests, and the code-reviewer agent ' +
  'for review requests. Follow each component’s own confirmation steps before ' +
  'taking any git or GitHub action.';

const OFF_TEXT =
  'gf-mode is OFF. Do NOT auto-invoke gf:commit, gf:pr, or the code-reviewer agent ' +
  'from natural-language requests; run them only when the user explicitly types a ' +
  '/gf: command. Handle plain commit/PR/review requests yourself as usual. The ' +
  'gf:on, gf:off, and gf:status controls remain available.';

process.stdout.write(mode === 'on' ? ON_TEXT : OFF_TEXT);
process.exit(0);
