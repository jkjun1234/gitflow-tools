# 변경 이력 (Claude Code)

## 2026-07-24 15:37  ·  파일 6개 · 편집 6건 · +224 / -0

| 파일 | 편집수 | +added | -removed | 태그 |
|------|-------:|-------:|---------:|------|
| marketplace.json | 1 | +18 | -0 | 신규/덮어씀 |
| plugin.json | 1 | +10 | -0 | 신규/덮어씀 |
| SKILL.md | 1 | +50 | -0 | 신규/덮어씀 |
| SKILL.md | 1 | +58 | -0 | 신규/덮어씀 |
| code-reviewer.md | 1 | +44 | -0 | 신규/덮어씀 |
| README.md | 1 | +44 | -0 | 신규/덮어씀 |

**[1] marketplace.json · 신규/덮어씀  (+18/-0)**
```diff
+ {
+   "name": "gitflow-tools",
+   "owner": {
+     "name": "jkjun",
+     "email": "jkjun1234@gmail.com"
+   },
+   "description": "Git/PR workflow helpers for Claude Code — smart commits, PR authoring, and code review.",
+   "plugins": [
+ … 외 10줄
```
**[2] plugin.json · 신규/덮어씀  (+10/-0)**
```diff
+ {
+   "name": "gitflow-buddy",
+   "description": "Smart commits, PR creation, and an automated code-reviewer agent for the Git/PR workflow.",
+   "author": {
+     "name": "jkjun",
+     "email": "jkjun1234@gmail.com"
+   },
+   "keywords": ["git", "pull-request", "commit", "code-review", "workflow"]
+ … 외 2줄
```
**[3] SKILL.md · 신규/덮어씀  (+50/-0)**
```diff
+ ---
+ description: Analyze staged/unstaged changes and create a Conventional Commits message, then commit
+ ---
+ 
+ # Smart Commit
+ 
+ Create a well-formed commit from the current changes using the Conventional Commits format.
+ 
+ … 외 42줄
```
**[4] SKILL.md · 신규/덮어씀  (+58/-0)**
```diff
+ ---
+ description: Gather the current branch's commits and open a GitHub pull request with a generated title and body
+ ---
+ 
+ # Create Pull Request
+ 
+ Open a GitHub PR for the current branch using the `gh` CLI.
+ 
+ … 외 50줄
```
**[5] code-reviewer.md · 신규/덮어씀  (+44/-0)**
```diff
+ ---
+ name: code-reviewer
+ description: Reviews the current diff, branch, or a specific file for bugs, security issues, and performance problems. Use before opening a PR or when the user asks for a code review. Read-only — reports findings, does not edit.
+ tools: Read, Grep, Glob, Bash
+ ---
+ 
+ You are a focused code reviewer. You review a diff, branch, or file and report concrete findings. You do NOT edit code — you only report.
+ 
+ … 외 36줄
```
**[6] README.md · 신규/덮어씀  (+44/-0)**
```diff
+ # gitflow-tools
+ 
+ A Claude Code plugin marketplace with **gitflow-buddy** — a Git/PR workflow helper.
+ 
+ ## What's inside
+ 
+ | Component | Type | What it does |
+ |-----------|------|--------------|
+ … 외 36줄
```

---


