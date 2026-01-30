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

## Design System

### Color usage rules
- **Accent**: primary actions, key highlights, active states only
- **Success**: positive status (e.g., roles open, good signal)
- **Warning**: risks, uncertainty, missing data, cautionary notes
- **Muted**: secondary text, metadata, timestamps, low-priority info

### Typography scale
- **Page title**: large, high-contrast heading for top-level pages
- **Section**: medium-weight section headers for grouping
- **Body**: default reading size (align with base 17px)
- **Small**: captions, metadata, timestamps

### Spacing conventions
- **Section gap**: use consistent vertical spacing between major blocks
- **Card padding**: standard `p-5` for all cards
- **List spacing**: tight but readable vertical rhythm for rows

### Component patterns
- **Card**: standard container for grouped content
- **Badge**: status + category indicator
- **Button**: only for actions, not for navigation

## Code Style for UI

- Always use CSS variables, never hardcoded colors
- Card pattern: `className="card p-5"`
- Badge pattern: `className="badge badge-{variant}"`
- Link pattern: `text-[var(--accent-light)] hover:underline`
- Section titles: use `section-title` class

## Content Language

- All site content must be in English only
- Comments can be in Korean for internal notes
- User-facing text: English only

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

**필수 첫 단계: Job Scraper 스킬 실행**

```
/job-scraper [company name or website]
```

이 스킬이 자동으로:
- Company career page에서 모든 Product Design 역할 찾기
- Job detail 페이지까지 방문하여 상세 정보 수집
- LinkedIn, Greenhouse 등에서 교차 검증
- Playwright로 JS 렌더링 페이지 처리
- 정확한 openRoles TypeScript object 생성

**그 다음:**

1. Job scraper 결과를 바탕으로 `openRoles` 필드 정확히 채우기
2. `src/data/companies/[company-id].ts`에 Company 객체 생성
3. 필수 필드: id, name, description, aiNativeLevel, founders, designWorkType, tracking, openRoles
4. designerLinks에 해당 회사 디자이너들의 소셜/블로그 추가
5. Commit

**⚠️ 중요**: Job scraper 없이 수동으로 openRoles 채우지 말 것. 누락 및 오류 발생 위험.

## 회사 분석 시 리서치 항목

새 회사 분석할 때 조사할 것들:

### 1. Open Roles (최우선)
```
/job-scraper [company name]
```
- Product Designer, Senior/Staff Product Designer
- Design leadership (Manager, Director, Head of Design)
- 제외: Visual, Brand, Content Designer, Design Engineer

### 2. Business
- Crunchbase/PitchBook: funding, valuation
- 회사 블로그/뉴스: revenue, growth
- 경쟁사 분석

### 3. Founders
- LinkedIn: 배경
- Twitter/X: 철학, 생각
- 팟캐스트/인터뷰: 왜 이걸 만드는지

### 4. Design
- LinkedIn: 디자인팀 규모, 리더
- 디자이너들 소셜: 어떤 작업 하는지
- designerLinks 수집

### 5. Product
- 직접 사용해보기
- Product Hunt, G2: 유저 리뷰
- 기술 블로그: 어떻게 만드는지

## Open Roles 검증 방법

**✅ 권장: Job Scraper 스킬 사용**

```
/job-scraper [company name]
```

이 스킬이 자동으로:
- Career page department 필터 사용
- Cmd+F로 "product design" 검색
- Job detail 페이지까지 접속
- LinkedIn, Greenhouse, Ashby 교차 검증
- Playwright로 JS 렌더링 페이지 처리
- 최신성 확인 (60일 이내)

**❌ 비권장: 수동 WebFetch**

WebFetch는 JS 렌더링 문제로 신뢰할 수 없음. Job scraper 스킬이 Playwright를 사용하여 이 문제 해결.

**왜 이 방법이 정확한가:**
1. 검색 엔진이 이미 JS 렌더링 후 인덱싱함
2. 실제 job listing URL 직접 반환
3. LinkedIn, Ashby, Lever 등 여러 소스 동시 확인

### 주의사항

- **Product Designer만**: Design Engineer, Brand Designer, Content Designer 등은 제외
- **Leadership 제외**: Director, Head of Design, VP Design 등은 별도 트래킹
- **검증 주기**: 데이터 추가/수정 시 반드시 검증

### 예시

```
# Good
WebSearch: Anthropic "Product Designer" job site:anthropic.com/careers 2025

# Result: 실제 job listing URL들 반환
- https://www.anthropic.com/careers/jobs/5025976008 (Product Designer, Claude Code)
- https://www.anthropic.com/careers/jobs/5055600008 (Product Designer, Enterprise)
```

## Git 버전 관리 프로세스

### 작업 완료 시 반드시 수행

1. **Git add & commit**
   ```bash
   git add [수정된 파일들]
   git commit -m "$(cat <<'EOF'
   DD/MM/YY - HH:MM:SS | 변경 요약

   - 상세 내용
   - 상세 내용

   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
   EOF
   )"
   ```

2. **Push to GitHub**
   ```bash
   git push
   ```

3. **Build & Deploy to Firebase**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

4. **Pull Request 생성 (필요 시)**
   - Feature branch에서 작업 시
   - Major changes (새 기능, 대규모 리팩토링)
   - Review 필요한 변경사항

   ```bash
   # Feature branch 생성
   git checkout -b feature/[feature-name]

   # 작업 후 push
   git push -u origin feature/[feature-name]

   # GitHub에서 PR 생성 (gh CLI 사용)
   gh pr create --title "[Title]" --body "[Description]"
   ```

### 커밋 타이밍

- **단일 기능 완료**: 즉시 commit
- **관련된 여러 파일**: 한 번에 commit
- **작업 중단 전**: 반드시 commit (작업 보존)
- **실험적 변경**: Branch에서 commit

### Branch 전략

- `main`: Production (항상 deploy 가능 상태)
- `feature/[name]`: 새 기능 개발
- `fix/[name]`: 버그 수정
- `refactor/[name]`: 리팩토링

**규칙:**
- Main branch에 직접 push OK (개인 프로젝트)
- 큰 변경사항은 feature branch + PR
- Merge 후 feature branch 삭제

---

## Available Tools & Skills

이 프로젝트에서 사용 가능한 글로벌 Claude Code 도구들.

### Global Skills

프로젝트 전반에서 사용할 수 있는 스킬들:

**coding-standards**
- 위치: `~/.claude/skills/coding-standards/`
- TypeScript, JavaScript, React, Node.js 개발을 위한 범용 코딩 표준, 모범 사례 및 패턴

**continuous-learning-v2**
- 위치: `~/.claude/skills/continuous-learning-v2/`
- 세션을 관찰하고 원자적 인스팅크를 생성하는 인스팅크 기반 학습 시스템
- 스킬, 커맨드, 에이전트로 발전 가능
- Confidence scoring 포함

**design-system-builder** ⭐
- 위치: `~/.claude/skills/design-system-builder/`
- 사용법: 프로젝트에서 디자인 시스템을 구축할 때 사용
- 인터랙티브 React 아티팩트를 통한 일관되고 고품질의 디자인 시스템 구축
- 토큰 시스템, 타이포그래피 규칙, 컴포넌트 라이브러리 생성
- 워크플로우:
  1. Discovery (5 questions: tone, density, brand color, icons, platform)
  2. Tokens Preview Artifact (color palette, typography, spacing, radius, icons)
  3. Component Showcase Artifact (interactive demos with variant/size/state controls)
  4. Export (on request: tokens.json, CSS variables, component code)

### Project Skills

프로젝트 로컬 스킬들:

**job-scraper**
- 위치: `.claude/skills/job-scraper/`
- 사용법: `/job-scraper [company name or website]`
- Company career page에서 Product Design 역할 자동 수집
- Playwright 기반 JS 렌더링 지원
- LinkedIn, Greenhouse, Ashby 교차 검증

**company-researcher**
- 위치: `.claude/skills/company-researcher/`
- 새로운 AI-native 회사 리서치 및 데이터 수집
- Business, Founders, Design team, Product 정보 수집

**company-deep-research** ⭐
- 위치: `.claude/skills/company-deep-research/`
- 사용법: `/company-deep-research [company name]`
- Tier 0/1 회사에 대한 VC + Product Design 관점 딥 리서치
- 디자인팀 전원 LinkedIn 매핑, 비즈니스 모델 딥다이브
- Upside/Downside/Competition 분석, Decision Framework
- Output: `src/data/deep-research/[company-id].md`

**writer**
- 위치: `.claude/skills/writer/`
- 사용법: `/writer "article topic"`
- Data-driven analytical 블로그 글 자동 생성
- 주제만 입력 → 회사 자동 선택, SEO 메타데이터 생성, 회사 링크 자동 삽입
- TypeScript Article 파일 생성 및 articles index 업데이트

### Available Commands

글로벌 커맨드들 (모든 프로젝트에서 사용 가능):

| Command | 설명 |
|---------|------|
| `/approvals` | Permission 모드 전환 (bypass, accept edits, plan) |
| `/checkpoint` | 현재 작업 상태를 체크포인트로 저장 |
| `/code-review` | 코드 리뷰 실행 (엔지니어링 품질과 개발 속도의 균형) |
| `/design-review` | 프론트엔드 PR이나 UI 변경사항의 디자인 리뷰 |
| `/learn` | 재사용 가능한 패턴 추출 및 학습 |
| `/plan` | 요구사항 재확인, 리스크 평가, 단계별 구현 계획 생성 |
| `/refactor-clean` | 코드 리팩토링 및 정리 |
| `/security-review` | 현재 브랜치의 pending changes에 대한 보안 리뷰 |
| `/skill-create` | 로컬 git 히스토리 분석하여 SKILL.md 파일 생성 |
| `/thread-creator` | 스레드 생성 |
| `/tlm-distribute` | Task-LLM Distribution - 복잡한 작업을 여러 LLM에 분배 |

### Available Agents

백그라운드에서 실행 가능한 전문 에이전트들:

| Agent | 설명 |
|-------|------|
| `architect` | 소프트웨어 아키텍처 설계 및 기술 의사결정 |
| `code-reviewer` | 코드 품질 검토 및 개선 제안 |
| `design-reviewer` | UI/UX 디자인 검토 및 일관성 검증 |
| `doc-updater` | 문서 자동 업데이트 및 동기화 |
| `planner` | 구현 계획 설계 및 단계별 작업 분해 |
| `refactor-cleaner` | 코드베이스 리팩토링 및 최적화 |

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

## SEO & AEO 최적화

### 목표

**"AI product designer jobs" 검색 시 상위 노출 + AI 검색 엔진(Perplexity, ChatGPT)에서 자동 추천**

### 자동 SEO 반영

회사 데이터 추가 시 다음이 **자동으로** SEO에 반영됨:

1. **Sitemap 업데이트** (`app/sitemap.ts`)
   - 새 회사 페이지 자동 등록
   - `lastModified`: company.lastUpdated 사용
   - Next.js build 시 자동 생성

2. **JobPosting Schema** (`company/[id]/page.tsx`)
   - 각 openRole이 Google Jobs에 자동 등록
   - Rich snippet 표시
   - 자동 갱신

3. **Meta Tags** (`company/[id]/page.tsx`)
   - Dynamic metadata generation
   - OG image: `/logos/[company-id].png`
   - Description: company.description

### 회사 추가 시 SEO 체크리스트

**필수:**
- [x] `openRoles` 정확히 채우기 (JobPosting schema용)
- [x] `description` 명확하게 (meta description용)
- [x] `lastUpdated` 업데이트 (sitemap용)
- [ ] Logo 이미지 추가: `public/logos/[company-id].png` (OG image용)

**선택:**
- [ ] `designerLinks` 추가 (외부 링크 = backlink 기회)
- [ ] `sources` 추가 (신뢰도 향상)

### SEO 주요 파일

- `app/sitemap.ts`: 자동 sitemap 생성
- `app/robots.ts`: 크롤러 규칙
- `app/jobs/page.tsx`: 집계 job listing (메인 SEO 페이지)
- `app/company/[id]/page.tsx`: Dynamic metadata
- `SEO_AEO_PLAN.md`: 전체 SEO 전략

### Cron 자동화 (향후)

**Daily 6am PST:**
- SF Bay Area 신규 회사 발견 (startups.gallery)
- Company researcher skill 실행
- Job postings 업데이트
- Git commit + Firebase deploy

**Weekly Sunday 3am:**
- Funding/valuation 데이터 갱신
- Job postings 유효성 검증
- Analytics 리포트 생성

---

## 다음 할 것들

### SEO 구축 (진행 중)
- [ ] Meta tags + OG images
- [ ] `/jobs` 집계 페이지
- [ ] JobPosting schema
- [ ] FAQ 페이지

### Automation
- [ ] Firebase Functions + Cron setup
- [ ] Company discovery (startups.gallery)
- [ ] Daily job scraper

### Content
- [ ] 회사 추가: 100+ 목표 (현재 57)
- [ ] SF Bay Area 집중
- [ ] Notes 편집 기능
- [ ] 검색 기능
