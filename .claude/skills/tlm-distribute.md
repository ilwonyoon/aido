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

### 핵심 원칙: 각 프롬프트는 Self-Contained

- 각 LLM 프롬프트에 **git 설정부터 커밋까지 전부 포함**
- 유저는 프롬프트만 복붙하면 됨
- 유저가 기억하거나 수동으로 할 것 없음

### 워크플로우 (4단계)

```
STEP 0: SETUP (Claude Code CLI가 자동 실행)
   │
   └──► Worktree 생성, 브랜치 생성
        결과: 3개 폴더 준비됨
              ../project-task-a/
              ../project-task-b/
              ../project-task-c/

STEP 1: 병렬 작업 시작 (동시에)
   │
   ├──► Claude Code CLI: TASK A (현재 폴더에서 계속)
   │
   ├──► Cursor: TASK B 폴더 열고 프롬프트 복붙
   │         Open Folder: ../project-task-b/
   │
   └──► Codex: TASK C 프롬프트 복붙
              (Codex가 알아서 해당 폴더로 이동)

STEP 2: 완료 대기
   │
   └──► 각 LLM이 "완료" 보고할 때까지 대기

STEP 3: MERGE (Claude Code CLI)
   │
   └──► 머지 → 테스트 → 정리 → 푸시
```

### 유저가 할 일

1. **Claude Code CLI**에 프롬프트 복붙 → SETUP + TASK A 진행
2. **Cursor**에 프롬프트 복붙
3. **Codex**에 프롬프트 복붙
4. 모두 "완료" 하면 → Claude Code CLI에 MERGE 프롬프트 복붙

### 중요: 모든 LLM은 CLAUDE.md 준수

각 프롬프트에 아래 내용 포함:

```
## 필수 준수 사항
이 프로젝트의 CLAUDE.md를 읽고 준수해야 합니다:
- 커밋 컨벤션: DD/MM/YY - HH:MM:SS | 변경 요약
- 디자인 원칙: Vercel 스타일, 17px base
- 코드 스타일: 기존 패턴 따르기
```

---

## 출력 템플릿

```
═══════════════════════════════════════════════════════════
TLM TASK DISTRIBUTION — [태스크 제목]
═══════════════════════════════════════════════════════════

📋 총 3개 병렬 태스크
⏱️ 예상: 각 태스크 완료 후 머지

┌─────────────────────────────────────────────────────────┐
│ TASK A (Claude CLI) │ TASK B (Cursor)  │ TASK C (Codex) │
│ [설명]              │ [설명]           │ [설명]         │
│ 📁 main branch      │ 📁 ../proj-b/    │ 📁 main branch │
└─────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════
STEP 0: SETUP — Claude Code CLI가 먼저 실행
═══════════════════════════════════════════════════════════

아래를 Claude Code CLI에 복붙하면 자동으로:
1. Worktree 생성
2. TASK A 바로 시작

\`\`\`
## SETUP + TASK A 실행

### Step 1: Worktree 설정 (TASK B용)
git branch feature/task-b
git worktree add ../[project]-task-b feature/task-b

### Step 2: TASK A 시작 (현재 폴더에서)
git checkout -b feature/task-a

[TASK A 상세 내용]

### 작업할 파일
- [파일 목록]

### DO NOT touch (TASK B가 작업)
- [파일 목록]

### DO NOT touch (TASK C가 작업)
- [파일 목록]

### 완료 시
git add -A && git commit -m "[커밋 메시지]"
그리고 "✅ TASK A 완료" 출력

작업 시작해줘.
\`\`\`

═══════════════════════════════════════════════════════════
STEP 1-B: TASK B — Cursor
═══════════════════════════════════════════════════════════

아래 프롬프트 복붙:

\`\`\`
## TASK B

## 필수: CLAUDE.md 준수
- 커밋 컨벤션: DD/MM/YY - HH:MM:SS | 변경 요약
- 기존 코드 패턴 따르기

[TASK B 상세 내용]

### 작업할 파일
- [파일 목록]

### DO NOT touch (다른 LLM 작업 중)
- [파일 목록]

### 완료 시
git add -A && git commit -m "[커밋 메시지]"
그리고 "✅ TASK B 완료" 출력

작업 시작해줘.
\`\`\`

═══════════════════════════════════════════════════════════
STEP 1-C: TASK C — Codex
═══════════════════════════════════════════════════════════

Codex에 아래 프롬프트 복붙:

\`\`\`
## TASK C

Working directory: [프로젝트 경로]

### Git Setup
git checkout -b feature/task-c

[TASK C 상세 내용]

### 작업할 파일
- [파일 목록]

### DO NOT touch (다른 LLM 작업 중)
- [파일 목록]

### 완료 시
git add -A && git commit -m "[커밋 메시지]"
그리고 "✅ TASK C 완료" 출력

작업 시작해줘.
\`\`\`

═══════════════════════════════════════════════════════════
STEP 2: MERGE — 모든 태스크 완료 후
═══════════════════════════════════════════════════════════

A, B, C 모두 "완료" 했으면 Claude Code CLI에 복붙:

\`\`\`
## MERGE + TEST + CLEANUP

### Step 1: 메인으로
git checkout main

### Step 2: 머지 (순서대로)
git merge feature/task-a --no-ff -m "feat: [task-a 설명]"

# Worktree 브랜치 머지 (worktree 안에서 push 필요)
cd ../[project]-task-b && git push origin feature/task-b
cd [원래 경로]
git merge feature/task-b --no-ff -m "feat: [task-b 설명]"

git merge feature/task-c --no-ff -m "feat: [task-c 설명]"

### Step 3: 통합 작업 (필요시)
[통합할 내용이 있으면 여기서]

### Step 4: 테스트
npm run dev
# 에러 있으면 수정

### Step 5: 정리
git worktree remove ../[project]-task-b
git branch -d feature/task-a feature/task-b feature/task-c

### Step 6: 최종 커밋 & 푸시
git add -A && git commit -m "feat: [전체 기능 설명]" (통합 작업 있었으면)
git push

### 완료 보고
전체 결과 요약해줘:
- 추가된 파일
- 변경된 파일
- 테스트 결과

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
