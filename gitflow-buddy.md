# gitflow-buddy 🪄

Claude Code 플러그인 — **Git / PR 워크플로우 도우미**. 스마트 커밋, PR 생성, 코드 리뷰를 한 플러그인으로.

## 설치

Claude Code 세션에서 순서대로 실행:

```bash
/plugin marketplace add jkjun1234/gitflow-tools
```
```bash
/plugin install gf@gitflow-tools
```
```bash
/reload-plugins
```

> 필요조건: `git`, 그리고 PR 기능용 [GitHub CLI (`gh`)](https://cli.github.com/) 설치 + 인증(`gh auth login`). gf-mode 토글은 `node` 사용.

## 뭐 하는 플러그인?

| 명령 | 하는 일 |
|------|---------|
| `/gf:commit` | 변경사항 분석 → Conventional Commits 메시지 작성 → 확인 후 커밋 |
| `/gf:pr` | 브랜치 커밋 모아 PR 제목·본문 생성 → `gh`로 PR 생성 |
| `code-reviewer` (에이전트) | diff·브랜치·파일을 버그/보안/성능 관점으로 읽기전용 리뷰 |

## gf-mode — 자연어 자동 실행 (선택)

기본은 **OFF** (명시적 `/gf:` 명령만 동작 → 오발동 없음).

**ON**으로 켜면 그냥 말로 시켜도 알아서 동작:

```bash
/gf:on          # 또는 "gf 켜줘"
```

| 이렇게 말하면 | 실행 |
|---------------|------|
| "커밋해줘" / "commit this" | `/gf:commit` |
| "PR 만들어줘" / "open a PR" | `/gf:pr` |
| "리뷰해줘" / "review my diff" | code-reviewer |

끄기: `/gf:off` (또는 "gf 꺼줘") · 상태 확인: `/gf:status`

## 링크

- 저장소: https://github.com/jkjun1234/gitflow-tools
- 업데이트: `/plugin marketplace update gitflow-tools` → `/reload-plugins`
