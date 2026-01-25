# AIDO — AI Design Opportunities

개인용 AI 스타트업 인텔리전스 시스템. 디자이너 관점에서 회사를 평가하고 추적.

## 프로젝트 목적

> "이 회사에 들어가면 나한테 좋은가?"를 판단하기 위한 도구

- Level 3-4 AI-native 회사 중심
- 디자이너 관점의 회사 분석 프레임
- 파운더 비전/철학 중시
- Job hunting용 개인 대시보드

## 기술 스택

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- 데이터: JSON 파일 (`src/data/companies.ts`)

## 디자인 원칙

- Vercel 스타일 다크 테마
- Base font size: 17px
- 미니멀, 정보 중심

## 핵심 데이터 구조

### Company 평가 프레임

1. **Business**: Stage, Valuation, Revenue, Moat, 경쟁사
2. **AI-Native Level** (1-4): AI가 제품의 핵심인 정도
3. **Founders & Vision**: 배경, 철학, 디자인에 대한 관점
4. **Design Work Type**:
   - Logic/Behavior Design (AI 행동 설계)
   - Evaluation Design (품질 기준, 피드백 루프)
   - Interface Design (UI/UX)
5. **Designer Links**: 팀 디자이너들의 블로그, X, 팟캐스트
6. **My Tracking**: Status, Fit Score, Why Join/Not, Next Actions

### AI-Native Level 정의

- **Level 4**: AI is the product (Anthropic, OpenAI)
- **Level 3**: AI is core differentiator (Cursor, Perplexity)
- **Level 2**: AI is major feature (Notion AI, Figma AI)
- **Level 1**: AI is minor feature

## 파일 구조

```
src/
├── data/
│   ├── types.ts        # 데이터 타입 정의
│   └── companies.ts    # 회사 데이터 (여기에 추가)
└── app/
    ├── globals.css     # Vercel 스타일 테마
    ├── layout.tsx      # 공통 레이아웃
    ├── page.tsx        # 회사 리스트
    └── company/[id]/
        └── page.tsx    # 회사 상세
```

## 회사 추가 방법

1. `src/data/companies.ts`에 Company 객체 추가
2. 필수 필드: id, name, description, aiNativeLevel, founders, designWorkType, tracking
3. designerLinks에 해당 회사 디자이너들의 소셜/블로그 추가

## 회사 분석 시 리서치 항목

새 회사 분석할 때 조사할 것들:

### Business
- Crunchbase/PitchBook: funding, valuation
- 회사 블로그/뉴스: revenue, growth
- 경쟁사 분석

### Founders
- LinkedIn: 배경
- Twitter/X: 철학, 생각
- 팟캐스트/인터뷰: 왜 이걸 만드는지

### Design
- careers page: 채용 중인 롤
- LinkedIn: 디자인팀 규모, 리더
- 디자이너들 소셜: 어떤 작업 하는지

### Product
- 직접 사용해보기
- Product Hunt, G2: 유저 리뷰
- 기술 블로그: 어떻게 만드는지

## 커밋 컨벤션

```
DD/MM/YY - HH:MM:SS | 변경 요약

- 상세 내용
- 상세 내용

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

## Multi-LLM 작업 환경

이 프로젝트는 여러 LLM을 병렬로 활용하여 작업 효율을 높임.

### 사용 가능한 환경

| 환경 | 모델 | 용도 |
|------|------|------|
| **Claude Code CLI** | Opus/Sonnet | 복잡한 로직, 아키텍처, 리서치 |
| **Cursor** | Claude/GPT-4 | UI, 컴포넌트, 빠른 수정 |
| **Codex** | Claude | 백그라운드 작업, 테스트, 문서화 |

### TLM Skill (Task-LLM Distribution)

복잡한 태스크를 여러 LLM에 분배할 때 사용:

```
/tlm [태스크 설명]
```

**기능:**
- 태스크를 병렬 작업으로 분할
- 각 모델에 적합한 태스크 배정
- Git worktree로 충돌 방지
- 각 LLM에 복붙할 프롬프트 생성
- Merge & Test 워크플로우 안내

**스킬 파일:** `.claude/skills/tlm-distribute.md`

### 모델 선택 가이드

| 복잡도 | 추천 모델 | 예시 |
|--------|----------|------|
| **High** | Claude Opus (CLI) | 아키텍처, 복잡한 버그, 새 시스템 |
| **Medium** | Claude Sonnet (Cursor) | 단일 기능, 컴포넌트, API |
| **Low** | GPT-4 (Cursor) / Codex | 스타일링, 테스트, 문서 |

### 병렬 작업 원칙

1. **파일 충돌 금지**: 각 LLM이 수정하는 파일이 겹치면 안 됨
2. **의존성 순서**: 타입 정의 → 사용 코드 (순차)
3. **Git Worktree**: 각 태스크별 독립 브랜치/디렉토리
4. **DO NOT touch 명시**: 각 프롬프트에 다른 LLM이 작업 중인 파일 명시

---

## 다음 할 것들

- [ ] 회사 추가: Cursor, Perplexity, Vercel 등
- [ ] 필터/정렬 기능
- [ ] Notes 편집 기능
- [ ] 검색
