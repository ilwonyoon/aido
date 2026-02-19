# Task: Upcider AI Search Mode (Full Implementation)

## 개요

AIDO 사이트에 AI 검색 모드를 추가한다. 사용자가 자연어로 "0→1 AI product design 하고 싶어, SF 선호" 같은 질문을 하면, 540개 회사 데이터에서 매칭되는 회사를 추천해주는 기능.

**이 태스크는 Feature Development이므로 UI 파일 수정이 허용된다.**

---

## ⚠️ 브랜치 규칙 (CRITICAL)

```bash
# 1. 반드시 feature 브랜치에서 작업
git fetch origin main
git checkout -b feature/ai-search origin/main

# 2. main에 직접 커밋 절대 금지
# 3. 작업 완료 후 PR 생성
```

---

## Phase 1: 데이터 정규화

### 1-1. `normalizedStage` 필드 추가

**목적**: `stage` 자유 텍스트(430+ 포맷)를 검색 가능한 enum으로 변환.

**Step 1**: `src/data/types.ts`의 Company interface에 추가:
```typescript
normalizedStage?: FundingStageCategory;
```

`FundingStageCategory`는 이미 정의되어 있다 (line 118):
```typescript
type FundingStageCategory = 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'series-c' | 'series-d-plus' | 'growth' | 'other';
```

**Step 2**: 마이그레이션 스크립트 `scripts/normalize-stage.mjs` 작성:
- 각 회사 파일의 `stage` 값을 읽음
- `normalizeFundingStage()` 로직(types.ts line 139-159)과 동일한 매핑 적용:
  - `pre-seed`, `pre-series a` → `'pre-seed'`
  - `seed` → `'seed'`
  - `series a*` → `'series-a'`
  - `series b*` → `'series-b'`
  - `series c*` → `'series-c'`
  - `series d/e/f*` → `'series-d-plus'`
  - `public`, `private`, `bootstrapped` → `'growth'`
  - 나머지 → `'other'`
- 회사 파일의 `stage:` 라인 바로 다음에 `normalizedStage: 'xxx' as const,` 삽입
- **주의**: AST 파서 말고 regex 기반으로 처리 (각 파일의 `stage:` 라인 찾아서 다음 줄에 삽입)

**Step 3**: 스크립트 실행 후 `npm run build`로 검증

**커밋**: `feat: add normalizedStage to 540 company files`

### 1-2. `region` 필드 추가

**목적**: `headquarters` 자유 텍스트를 검색 가능한 지역 enum으로 변환.

**Step 1**: `src/data/types.ts`의 Company interface에 추가:
```typescript
region?: 'sf-bay-area' | 'nyc' | 'la' | 'seattle' | 'austin' | 'boston' | 'london' | 'toronto' | 'other-us' | 'other-intl' | 'remote-only';
```

**Step 2**: 마이그레이션 스크립트 `scripts/normalize-location.mjs` 작성:
- 각 회사의 `headquarters` 값을 읽음
- 매핑 규칙:
  - SF Bay Area: `San Francisco`, `Palo Alto`, `Mountain View`, `Sunnyvale`, `San Jose`, `Redwood City`, `Menlo Park`, `Cupertino`, `Santa Clara`, `Oakland`, `Berkeley`, `South San Francisco`, `San Mateo`, `Foster City`
  - NYC: `New York`, `Brooklyn`, `Manhattan`
  - LA: `Los Angeles`, `Santa Monica`, `Venice`, `Culver City`, `Hollywood`
  - Seattle: `Seattle`, `Bellevue`, `Redmond`
  - Austin: `Austin`
  - Boston: `Boston`, `Cambridge, MA`
  - London: `London`
  - Toronto: `Toronto`
  - remote-only: `remote === 'Yes'` AND headquarters가 비어있거나 "Remote"
  - other-us: US 주소이지만 위 도시에 해당 안 됨
  - other-intl: US 외 국제 주소
- 회사 파일의 `headquarters:` 라인 바로 다음에 `region: 'xxx' as const,` 삽입

**Step 3**: 스크립트 실행 후 `npm run build`로 검증

**커밋**: `feat: add region to 540 company files`

### 1-3. Search Index 생성

**목적**: 540개 회사를 Claude에 보낼 compact JSON으로 압축 (회사당 ~300 토큰).

**스크립트**: `scripts/generate-search-index.mjs`

```javascript
// 각 회사에서 추출할 필드:
const entry = {
  id: company.id,
  name: company.name,
  description: company.description,  // 1-2문장
  aiNativeLevel: company.aiNativeLevel,
  category: company.category,
  normalizedStage: company.normalizedStage,
  region: company.region,
  remote: company.remote,
  productStage: company.productStage,
  totalFunding: company.totalFunding,
  hasOpenRoles: company.openRoles.length > 0,
  roleCount: company.openRoles.length,
  roleTitles: company.openRoles.map(r => r.title),
  designTeamSize: company.designTeam?.teamSize || 'Unknown',
  designWorkType: {
    logic: company.designWorkType?.logicBehavior?.level,
    evaluation: company.designWorkType?.evaluation?.level,
    interface: company.designWorkType?.interface?.level,
  },
  designPhilosophy: company.designPhilosophy || '',
  greenFlags: (company.greenFlags || []).slice(0, 3),
  redFlags: (company.redFlags || []).slice(0, 2),
  fitScore: company.tracking?.fitScore || 0,
};
```

**출력**: `src/data/search-index.json`

**빌드 통합**: `package.json`의 `build` 스크립트를:
```json
"build": "node scripts/generate-sitemap.mjs && node scripts/generate-search-index.mjs && next build"
```

**주의**: 이 스크립트는 company .ts 파일을 직접 읽지 않고, `src/data/companies/index.ts`에서 export된 `companies` 배열을 import해야 한다. ESM + TypeScript이므로 `tsx` 또는 동적 import 방식 사용. 가장 간단한 방법:
- 스크립트에서 각 .ts 파일을 텍스트로 읽고 regex로 필드 추출 (sitemap 스크립트와 같은 패턴)
- 참고: `scripts/generate-sitemap.mjs`의 패턴을 확인하고 동일한 방식 사용

**커밋**: `feat: add search index generator (540 companies → compact JSON)`

---

## Phase 2: Firebase Functions Search Endpoint

### 2-1. 의존성 설치

```bash
cd functions && npm install @anthropic-ai/sdk
```

### 2-2. Search Function 작성

**파일**: `functions/src/search.ts`

```typescript
import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

const anthropicApiKey = defineSecret('ANTHROPIC_API_KEY');

const SYSTEM_PROMPT = `You are Upcider, an AI career advisor for product designers looking for opportunities at AI companies.

You have access to a database of {count} AI companies. When a user asks about companies or roles, analyze their preferences and recommend the best matches.

RULES:
- Always respond in the same language the user uses (Korean or English)
- Recommend 3-5 companies per query with specific reasons
- Reference actual data (funding, team size, open roles, design philosophy)
- Be honest about data gaps ("I don't have salary data for this company")
- Format company names as links: [Company Name](/company/{id})
- If the user asks about interview prep, use the company's designWorkType, aiDesignChallenges, and product info

COMPANY DATABASE:
{searchIndex}`;

export const search = onRequest(
  {
    secrets: [anthropicApiKey],
    cors: ['https://aido-d2cc0.web.app', 'http://localhost:3000'],
    timeoutSeconds: 120,
    memory: '512MiB',
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method not allowed');
      return;
    }

    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).send('Missing message');
      return;
    }

    // Load search index
    const indexPath = path.join(__dirname, '../../src/data/search-index.json');
    const searchIndex = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const companyCount = Object.keys(searchIndex).length;

    const client = new Anthropic({ apiKey: anthropicApiKey.value() });

    // Set up SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
      const stream = await client.messages.stream({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system: SYSTEM_PROMPT
          .replace('{count}', String(companyCount))
          .replace('{searchIndex}', JSON.stringify(searchIndex)),
        messages: [
          ...history.map((h: { role: string; content: string }) => ({
            role: h.role as 'user' | 'assistant',
            content: h.content,
          })),
          { role: 'user', content: message },
        ],
      });

      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
          res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
        }
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error) {
      console.error('Search error:', error);
      res.write(`data: ${JSON.stringify({ error: 'Search failed' })}\n\n`);
      res.end();
    }
  }
);
```

### 2-3. `functions/src/index.ts` 업데이트

기존 `sendWelcomeEmail` export 유지하면서 search 추가:

```typescript
// 기존 코드 유지
export { sendWelcomeEmail } from './index'; // 기존 것
export { search } from './search'; // 새로 추가
```

**실제로는**: 기존 `functions/src/index.ts` 파일 맨 아래에 추가:
```typescript
export { search } from './search';
```

### 2-4. Functions 빌드 검증

```bash
cd functions && npm run build
```

**커밋**: `feat: add Claude API search endpoint (Firebase Function)`

---

## Phase 3: Chat UI

### 3-1. AI Search 페이지

**파일**: `src/app/ai/page.tsx`

- 전용 AI 검색 페이지 (`/ai` 경로)
- 기존 `layout.tsx`의 Navigation 포함
- 전체 화면 채팅 인터페이스

```typescript
// 기본 구조
export default function AISearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">AI Search</h1>
      <p className="text-[var(--muted)] mb-8">
        Ask me anything about AI companies and design roles
      </p>
      <ChatPanel />
    </div>
  );
}
```

### 3-2. Chat 컴포넌트

**`src/components/ai/ChatPanel.tsx`**:
- 메시지 목록 + 입력 폼
- useState로 messages 관리: `{role: 'user'|'assistant', content: string}[]`
- 입력 submit → Firebase Function 호출 (fetch + SSE 파싱)
- 스트리밍 응답을 실시간으로 마지막 메시지에 append
- 스크롤 자동 하단 이동

**`src/components/ai/ChatMessage.tsx`**:
- role에 따라 유저/AI 메시지 스타일링
- AI 메시지: `[Company Name](/company/id)` 패턴을 실제 Next.js Link로 변환
- 마크다운 기본 포맷팅 (bold, list)

**`src/components/ai/StarterPrompts.tsx`**:
- 대화 시작 전 예시 질문 4개 표시:
  - "0→1 AI product design 하고 싶어, SF 선호"
  - "Series A-B에서 디자인 리더십 있는 회사 추천해줘"
  - "Remote OK이고 보상 좋은 AI 스타트업은?"
  - "Anthropic vs Cursor 비교해줘"
- 클릭 시 해당 텍스트가 메시지로 전송됨

### 3-3. Navigation 업데이트

**`src/components/Navigation.tsx`**에 AI 링크 추가:
- 기존 네비게이션 항목 사이에 "AI" 링크 추가
- `<Link href="/ai">` — 아이콘 없이 텍스트만
- 기존 스타일과 동일하게

### 3-4. 디자인 규칙

- **색상**: 기존 CSS 변수만 사용 (`var(--foreground)`, `var(--card)`, `var(--muted)`, `var(--accent)`, `var(--border)`)
- **카드**: `className="card p-5"` 패턴
- **입력**: `bg-[var(--card)] border border-[var(--border)] rounded-lg`
- **유저 메시지**: 오른쪽 정렬, `bg-[var(--accent)]` 배경
- **AI 메시지**: 왼쪽 정렬, `bg-[var(--card)]` 배경
- **폰트**: 기존 시스템 폰트 (Geist Sans)
- **모바일**: 반응형, 패딩 조정

**커밋**: `feat: add AI search chat UI at /ai`

---

## 최종 검증

```bash
# 1. 프론트엔드 빌드
npm run build

# 2. Functions 빌드
cd functions && npm run build && cd ..

# 3. search-index.json 존재 확인
ls -la src/data/search-index.json

# 4. normalizedStage가 모든 회사에 있는지
grep -rL "normalizedStage" src/data/companies/*.ts | grep -v index.ts | wc -l
# 결과: 0이어야 함

# 5. region이 모든 회사에 있는지
grep -rL "region:" src/data/companies/*.ts | grep -v index.ts | wc -l
# 결과: 0이어야 함

# 6. 기존 페이지 깨지지 않는지
# build 성공이면 OK
```

---

## PR 생성

모든 Phase 완료 후:

```bash
gh pr create --title "feat: Upcider AI search mode — data normalization + Claude API + chat UI" --body "$(cat <<'EOF'
## Summary
- Phase 1: Normalize stage (430+ formats → enum) + location (→ region enum) across 540 companies
- Phase 2: Firebase Function Claude API search endpoint with SSE streaming
- Phase 3: AI search page with chat UI at /ai

## New files
- scripts/normalize-stage.mjs, normalize-location.mjs, generate-search-index.mjs
- src/data/search-index.json (build artifact)
- functions/src/search.ts
- src/app/ai/page.tsx
- src/components/ai/ (ChatPanel, ChatMessage, StarterPrompts)

## Quality checks
- [x] npm run build passes
- [x] functions build passes
- [x] All 540 companies have normalizedStage + region
- [x] Existing pages unaffected
- [x] /ai page renders chat interface
EOF
)"
```

---

## 절대 하지 말 것

- `main` 브랜치에서 직접 작업 금지 — 반드시 `feature/ai-search`
- `firebase deploy` 실행 금지
- 기존 페이지 레이아웃/스타일 변경 금지 (새 페이지만 추가)
- 기존 컴포넌트 수정 금지 (Navigation에 링크 추가만 허용)
- 하드코딩 색상 금지 — CSS 변수만 사용
