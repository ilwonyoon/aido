# TLM (Task-LLM Distribution) Skill

Multi-LLM 병렬 작업 분배 및 관리 스킬.

## 사용법

```
/tlm [task description]
```

## 스킬 목적

복잡한 태스크를 여러 LLM에 병렬 분배하여:
1. **퀄리티 유지** — 각 모델의 강점에 맞는 태스크 배정
2. **효율성 향상** — 병렬 작업으로 속도 증가
3. **충돌 방지** — git worktree로 완전 격리

## 사용 가능한 LLM 환경

| 환경 | 모델 | 강점 | 적합한 태스크 |
|------|------|------|--------------|
| **Claude Code CLI** | Claude Opus/Sonnet | 복잡한 로직, 아키텍처, 리서치 | 핵심 기능, 설계, 복잡한 버그 |
| **Cursor** | Claude/GPT-4 | 빠른 코드 수정, 파일 탐색 | UI 컴포넌트, 스타일링, 간단한 기능 |
| **Codex** | Claude | 백그라운드 작업, 긴 태스크 | 테스트 작성, 문서화, 리팩토링 |

## 워크플로우

### Phase 1: 태스크 분석 및 분할

```
[Original Task]
       │
       ▼
┌─────────────────┐
│ 1. 의존성 분석   │
│ 2. 병렬화 가능?  │
│ 3. 복잡도 평가   │
└─────────────────┘
       │
       ▼
[Parallel Tasks] ──► Task A (복잡) ──► Claude Code CLI
                 ├── Task B (중간) ──► Cursor
                 └── Task C (단순) ──► Codex
```

### Phase 2: Git Worktree 설정

각 LLM은 독립된 worktree에서 작업하여 충돌 방지:

```bash
# 메인 브랜치에서 feature 브랜치들 생성
git branch feature/task-a
git branch feature/task-b
git branch feature/task-c

# 각 브랜치를 별도 디렉토리로 체크아웃
git worktree add ../aido-task-a feature/task-a
git worktree add ../aido-task-b feature/task-b
git worktree add ../aido-task-c feature/task-c
```

### Phase 3: 각 LLM에 프롬프트 배포

각 LLM 환경에 복붙할 프롬프트 생성.

### Phase 4: Merge & Test

```bash
# 각 브랜치 완료 후
git checkout main
git merge feature/task-a --no-ff
git merge feature/task-b --no-ff
git merge feature/task-c --no-ff

# Worktree 정리
git worktree remove ../aido-task-a
git worktree remove ../aido-task-b
git worktree remove ../aido-task-c

# 테스트 실행
npm test
```

---

## 태스크 분할 원칙

### 병렬화 가능 조건

- [ ] 서로 다른 파일을 수정
- [ ] 또는 같은 파일이라도 다른 함수/섹션
- [ ] 공유 의존성이 없음
- [ ] 순서 의존성이 없음

### 병렬화 불가 (순차 처리)

- 타입 정의 → 해당 타입 사용하는 코드
- API 엔드포인트 → 해당 API 호출하는 UI
- 스키마 변경 → 마이그레이션

### 복잡도 평가 기준

| Level | 설명 | 추천 모델 |
|-------|------|----------|
| **High** | 아키텍처 결정, 복잡한 로직, 여러 파일 연관 | Claude Opus (CLI) |
| **Medium** | 단일 기능 구현, 컴포넌트 작성 | Claude Sonnet (Cursor) |
| **Low** | 스타일링, 간단한 수정, 테스트 | GPT-4 (Cursor) / Codex |

---

## 프롬프트 템플릿

### Claude Code CLI (복잡한 태스크)

```
## Context
프로젝트: [프로젝트명]
Working Directory: [worktree 경로]
Branch: feature/task-a

## 현재 상태
[관련 코드/파일 설명]

## Task
[구체적인 태스크 설명]

## Constraints
- 다른 LLM이 동시에 작업 중인 파일: [파일 목록]
- 이 파일들은 절대 수정하지 마세요
- 작업 완료 후 git commit 해주세요

## Expected Output
[기대 결과물]
```

### Cursor (중간 태스크)

```
## Task
[간단명료한 태스크]

## Files to modify
- [파일1]
- [파일2]

## DO NOT touch
- [다른 LLM이 작업 중인 파일들]

## Instructions
[구체적 지시]
```

### Codex (단순/백그라운드 태스크)

```
## Task
[태스크 설명]

## Scope
Only modify: [파일 목록]

## Output
[기대 결과]
```

---

## 출력 포맷

이 스킬 실행 시 아래 포맷으로 출력:

```
═══════════════════════════════════════════════════════════
TLM TASK DISTRIBUTION
═══════════════════════════════════════════════════════════

## 1. Git Setup (먼저 실행)

\`\`\`bash
[worktree 설정 명령어]
\`\`\`

───────────────────────────────────────────────────────────
## 2. TASK A — Claude Code CLI
───────────────────────────────────────────────────────────
Complexity: High
Branch: feature/task-a
Directory: ../aido-task-a

### Prompt (복사해서 Claude Code CLI에 붙여넣기):

\`\`\`
[프롬프트 내용]
\`\`\`

───────────────────────────────────────────────────────────
## 3. TASK B — Cursor
───────────────────────────────────────────────────────────
Complexity: Medium
Branch: feature/task-b
Directory: ../aido-task-b

### Prompt (복사해서 Cursor에 붙여넣기):

\`\`\`
[프롬프트 내용]
\`\`\`

───────────────────────────────────────────────────────────
## 4. TASK C — Codex
───────────────────────────────────────────────────────────
Complexity: Low
Branch: feature/task-c
Directory: ../aido-task-c

### Prompt (복사해서 Codex에 붙여넣기):

\`\`\`
[프롬프트 내용]
\`\`\`

═══════════════════════════════════════════════════════════
## 5. MERGE (모든 태스크 완료 후)
═══════════════════════════════════════════════════════════

\`\`\`bash
[merge 및 정리 명령어]
\`\`\`

## 6. TEST

\`\`\`bash
[테스트 명령어]
\`\`\`
```

---

## 충돌 방지 체크리스트

각 태스크 분배 전 확인:

- [ ] 각 태스크가 수정하는 파일이 겹치지 않음
- [ ] 공유 타입/인터페이스 변경이 없음 (있으면 먼저 처리)
- [ ] import 경로 변경이 없음
- [ ] 각 프롬프트에 "DO NOT touch" 파일 목록 명시

---

## 예시: 새 기능 추가

**원본 태스크**: "회사 검색 기능 추가"

**분할 결과**:

| Task | 내용 | 파일 | 모델 |
|------|------|------|------|
| A | 검색 로직 및 타입 | `src/lib/search.ts`, `src/data/types.ts` | Claude Code |
| B | 검색 UI 컴포넌트 | `src/components/Search.tsx` | Cursor |
| C | 검색 관련 테스트 | `src/__tests__/search.test.ts` | Codex |

**순서**: A 먼저 (타입 정의) → B, C 병렬

---

## 모델 선택 가이드

### Claude Opus (CLI) — 핵심 작업
- 아키텍처 설계
- 복잡한 알고리즘
- 여러 파일에 걸친 리팩토링
- 버그 디버깅 (원인 분석 필요)
- 새로운 시스템 설계

### Claude Sonnet (Cursor) — 일반 작업
- 단일 컴포넌트 구현
- API 엔드포인트 추가
- 기존 패턴 따르는 코드
- UI 수정

### GPT-4 (Cursor) — 빠른 작업
- 스타일링 (CSS/Tailwind)
- 간단한 버그 수정
- 문서 수정
- 설정 파일 변경

### Codex — 백그라운드 작업
- 테스트 케이스 작성
- 문서화
- 타입 추가
- 린트 수정
