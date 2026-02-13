---
name: company-researcher
description: "Research and synthesize AIDO company profiles into complete Company objects. Use when adding or updating company data, including openRoles via job-scraper and sources verification."
---

# Company Researcher Skill

AI 회사 데이터를 체계적으로 수집하는 스킬. Job Scraper와 함께 작동하여 완전한 회사 프로필 생성.

## 사용법

```
/company-researcher [company name]
```

## 목적

회사에 대한 모든 정보를 체계적으로 수집하여 `Company` 타입의 완전한 TypeScript 객체 생성.

## 반복 최적화 모드 (성능 튜닝용)

회사별 iteration에서 아래를 추가로 실행:

1. Baseline 점수 측정
```bash
node scripts/score-company-quality.mjs <company-id>
```
2. 개선 반영 후 재측정
3. iteration 로그 기록
```bash
node scripts/log-skill-iteration.mjs --company <company-id> --phase improved ...
```

권장 목표:
- Score가 quality bar 이상
- sources 5개 이상 + 3개 이상 도메인
- openRoles 정책 위반(Design Engineer 등) 0건

## 핵심 원칙 (매우 중요)

1. **간결성 우선 (3-4개 규칙)**: 모든 배열 필드는 **3-4개 max**. 양보다 질. 핵심만 추려서 적는다.
   - `competitors`: **3개** (가장 직접적인 경쟁사만)
   - `moat`: 3-4개
   - `beliefs`: 3-4개
   - `greenFlags` / `redFlags`: 3-4개
   - `cultureInsights`: 3개 max
   - `designerLinks`: 3-4개 max
   - `sources`: 3-5개 (핵심 출처만)
   - `aiDesignChallenges`: 3개
   - `userProblems`: 3-4개
   - `growthMetrics.signals` / `tailwinds` / `headwinds`: 각 3-4개
2. **특정 디렉토리 단일 의존 금지**: `startups.gallery`는 보조 시드 데이터로만 사용. 단독 소스로 데이터 확정 금지.
3. **필드별 다중 검증**: 핵심 필드(펀딩/밸류에이션/리모트 정책/창업자)는 최소 2개 이상 출처로 교차 검증.
4. **공식/1차 소스 우선**: 회사 공식 사이트, 공식 보도자료, SEC/기업 공시, 투자사 발표를 최우선 사용.
5. **Unknown 최소화가 기본 목표**: 가능한 항목은 끝까지 찾아 채우고, 정말 없을 때만 `Unknown`.
6. **Unknown 사용 시 근거 기록**: sources에 "무엇을 어디서 확인했는데 없었는지"를 남김.
7. **데이터 값은 간결하게**: 필드 값은 데이터 포인트이지 설명문이 아님. `'$74M'` O, `'$50M Series B disclosed; ~$74M cumulative reported (Jan 2026)'` X.

---

## 워크플로우

### Phase 0: Job Scraper 자동 실행 (필수)

**이 스킬은 Job Scraper를 자동으로 호출합니다.**

실행 시:
1. Job Scraper 스킬 먼저 실행
2. Job scraper 결과를 받아옴
3. 나머지 company 데이터 수집
4. 모든 정보를 통합하여 완전한 Company 객체 생성

**사용자는 `/company-researcher [company name]` 만 실행하면 됩니다.**

내부적으로:
```typescript
// 1. Job Scraper 먼저 실행
const jobResults = await executeSkill('job-scraper', companyName);

// 2. Company 데이터 수집
const companyData = await collectCompanyData(companyName);

// 3. 통합
const finalCompany = { ...companyData, openRoles: jobResults.openRoles };
```

#### Phase 0-A: Job Scraper 실패 내구성 규칙 (필수)

`job-scraper`에서 `robot failed`/`403`/`captcha`가 발생하면:

1. `job-scraper`의 fallback ladder를 그대로 적용한다.
   - HTTP 재시도 → Playwright MCP → ATS 직접 엔드포인트
2. 그래도 확정 불가인 role은 `openRoles`에 추가하지 않는다.
3. 이 경우 `sources`에 검증 시도 경로를 남기고, tracking/notes에 `needs_review` 성격의 메모를 남긴다.
4. 실패했다고 전체 company 리서치를 중단하지 말고, 나머지 필드는 계속 채운다.

---

### Phase 1: Basic Information (필수)

#### 1.1 Company Overview
```typescript
{
  id: string,              // 소문자, 하이픈 (예: 'anthropic', 'cursor-ai')
  name: string,            // 정식 회사명 (예: 'Anthropic')
  description: string,     // 1-2 문장 요약
  website: string,         // 공식 웹사이트
  headquarters: string,    // 'San Francisco, CA' 형식
  remote: 'Yes' | 'Hybrid' | 'No' | 'Unknown',

  // Multi-dimensional Tags (필수)
  aiTypes: AIType[],       // 1-3개, 주요 유형 먼저
  markets: Market[],       // 1-3개
  industries: Industry[],  // 1-2개
}
```

#### 1.2 Multi-dimensional Tag Classification (필수)

회사의 description과 제품을 분석하여 다차원 태그 분류:

**AI Type (AI 기능 유형):**
| Type | 설명 | 예시 |
|------|------|------|
| `foundation-model` | LLM/기반 모델 직접 개발 | Anthropic, OpenAI, Mistral |
| `model-platform` | 모델 호스팅/커스터마이징 | Together AI, Replicate |
| `ai-infrastructure` | AI 개발 도구/MLOps | Weights & Biases, LangChain |
| `image-generation` | 이미지 생성 | Midjourney, Stable Diffusion |
| `video-generation` | 비디오 생성 | Runway, Pika, HeyGen |
| `audio-generation` | 오디오/음성 생성 | Suno, ElevenLabs |
| `code-assistant` | 코드 어시스턴트 | Cursor, Replit, Codeium |
| `text-assistant` | 텍스트 어시스턴트 | Jasper, Copy.ai |
| `search-retrieval` | 검색/RAG | Perplexity, Glean |
| `conversation-ai` | 대화/미팅 AI | Intercom, Gong |
| `data-analysis` | 데이터 분석 | Hightouch |
| `automation` | 자동화 | Zapier AI |

**Market (타겟 시장):**
- `b2c`: 개인 소비자
- `prosumer`: 크리에이터, 프리랜서
- `smb`: 중소기업
- `b2b`: 기업
- `enterprise`: 대기업

**Industry (산업 도메인):**
- `infrastructure`: AI 인프라
- `developer-tools`: 개발자 도구
- `creative-media`: 크리에이티브/미디어
- `productivity`: 생산성
- `sales-marketing`: 영업/마케팅
- `healthcare`: 헬스케어
- `fintech`: 금융
- `legal`: 법률
- `security`: 보안
- `education`: 교육
- `other`: 기타

**분류 예시:**
```typescript
// Anthropic
aiTypes: ['foundation-model'],
markets: ['enterprise', 'b2b'],
industries: ['infrastructure'],

// Cursor
aiTypes: ['code-assistant'],
markets: ['prosumer', 'b2b'],
industries: ['developer-tools'],

// Midjourney
aiTypes: ['image-generation'],
markets: ['prosumer', 'b2c'],
industries: ['creative-media'],

// Abridge
aiTypes: ['conversation-ai', 'text-assistant'],
markets: ['enterprise'],
industries: ['healthcare'],
```

**Industries-Category Alignment Rule (CRITICAL):**

`industries` 필드는 반드시 `category`와 `aiTypes`에 맞게 설정해야 합니다:

| category | 올바른 industries | 잘못된 industries |
|----------|------------------|------------------|
| `'ai-models'` | `['infrastructure']` | |
| `'developer-tools'` | `['developer-tools']` | `['infrastructure']` (unless building AI infra) |
| `'creative-media'` | `['creative-media']` | `['infrastructure']` |
| `'productivity'` | `['productivity']` | |
| `'sales-marketing'` | `['sales-marketing']` | |
| `'enterprise-ops'` | varies by domain | |
| `'vertical-saas'` | `['healthcare']`, `['legal']`, `['fintech']` etc. | `['infrastructure']` |

**핵심 규칙**: `industries: ['infrastructure']`는 LLM/기반모델 개발사 또는 AI 개발도구(MLOps) 회사에만 사용. 오디오/이미지/비디오 생성, 코드 어시스턴트, 텍스트 어시스턴트 등 **애플리케이션 레이어** 회사에는 해당 도메인 industry 사용.

**Self-check**: `category`와 `industries`가 같은 도메인을 가리키는지 확인. 예: `category: 'creative-media'`인데 `industries: ['infrastructure']`이면 잘못됨.

**Sources (필수 우선순위):**
- 1차: Company website(About/Product/Careers/Blog), 공식 보도자료
- 2차: Crunchbase, PitchBook, Dealroom, YC/Winter/Summer batch pages
- 3차: TechCrunch/Reuters/Forbes 등 신뢰 가능한 미디어
- 보조: startups.gallery (슬러그/요약/힌트 확인용)

---

#### 1.2 Business Metrics
```typescript
{
  stage: string,           // 'Series B', 'Series C', 'Public', etc.
  valuation?: string,      // '$1B (Jan 2025)'
  totalFunding?: string,   // '$500M'
  fundingHistory?: FundingRound[],  // 모든 펀딩 라운드
  revenue?: string,        // '$100M ARR' or 'Unknown'
  growth?: string,         // '10x YoY' or 'Unknown'
  runway?: string,         // '24+ months'
  customers?: string,      // '100K+ users' or '500 enterprises'
}
```

**Sources:**
- Crunchbase (필수)
- TechCrunch, VentureBeat (funding news)
- Company blog (revenue announcements)
- PitchBook (기관 투자자용)

**Funding History Format:**
```typescript
fundingHistory: [
  {
    stage: 'Series A' | 'Series B' | 'Seed' | 'Pre-seed',
    amount: '$50M',
    date: '2024-03',  // YYYY-MM
    valuation: '$250M',  // post-money (optional)
    leadInvestors: ['Sequoia Capital', 'a16z'],
  },
]
```

**Currency Consistency Rule (CRITICAL):**

하나의 파일 안에서 **통화 단위를 통일**해야 합니다:
- 회사 본사가 **미국**: USD 기준 (`$50M`)
- 회사 본사가 **유럽**: EUR 기준, USD 병기 (`€600M (~$650M)`)
- `fundingHistory`, `valuation`, `totalFunding`, `tracking.whyJoin`, `growthMetrics.signals`에서 같은 통화 사용

```typescript
// ✅ 올바른 예 (Mistral — Paris 본사, EUR 통일)
valuation: '€11.7B (~$13.8B)',
fundingHistory: [
  { stage: 'Series B', amount: '€600M', valuation: '€5.8B (~$6.2B)' },
  { stage: 'Series C', amount: '€1.7B', valuation: '€11.7B (~$13.8B)' },
],
tracking: { whyJoin: ['€11.7B valuation but still early-stage feel'] },

// ❌ 잘못된 예 (통화 혼재)
fundingHistory: [
  { stage: 'Series B', valuation: '$6.2B' },     // USD
  { stage: 'Series C', valuation: '€11.7B' },    // EUR ← 같은 파일에서 혼재!
],
```

**Funding Sum Check Rule:**

`totalFunding` ≈ `fundingHistory` 각 라운드 amount 합산. 차이가 크면 누락된 라운드를 리서치:
```typescript
// totalFunding: '$74M' 인데 fundingHistory에 Series B $50M만 있으면
// → $24M 차이 → Seed + Series A 라운드 누락 → 리서치 필수
```

---

#### 1.3 AI-Native Level (필수)
```typescript
{
  aiNativeLevel: 'A' | 'B' | 'C' | 'D',
  aiNativeLevelDescription: string,  // 왜 이 레벨인지 설명
  aiDesignChallenges: string[],      // 3-5개 항목
}
```

**Level Definitions:**
- **Level A (AI-Native)**: AI IS the product. Zero-to-one innovation. (Anthropic, Cursor, Perplexity)
- **Level B (AI-Core)**: AI is core differentiator. Proven workflow enhanced by AI. (Glean, Writer, Typeface)
- **Level C (AI Feature)**: AI is major feature but not core. (Notion AI, Shopify Sidekick)
- **Level D (AI Minor)**: AI is minor feature. (Traditional SaaS with AI add-on)

**AI Design Challenges Examples:**
```typescript
// Level A
aiDesignChallenges: [
  'Character design: AI personality and tone (unprecedented domain)',
  'Trust design: Communicating AI uncertainty',
  'Agentic UX: Designing for autonomous AI behavior',
]

// Level B
aiDesignChallenges: [
  'AI search result ranking transparency',
  'Enterprise permissions and access control with AI',
  'Workflow integration: embedding AI into existing processes',
]
```

---

### Phase 2: Competition & Market (중요)

#### 2.1 Competitors (3개 max)
```typescript
competitors: [
  {
    name: 'Competitor Name',
    description: 'Brief description',
    whyTheyWin: 'Their competitive advantage',
  },
  // 3개만 — 가장 직접적인 경쟁사만 선택
]
```

**3개 선택 기준**: 같은 시장에서 직접 경쟁하는 회사만. 간접 경쟁사(AWS, Google 등 빅테크)는 `vsGiants`에서 다룸.

**Research Sources:**
- Company blog (competitor comparisons)
- G2, Capterra (competitor reviews)
- Product Hunt (similar products)
- Google search: "[company] vs [competitor]"

---

#### 2.2 Market Position & Moat
```typescript
{
  marketPosition: string,  // 'Leading enterprise AI search'
  moat: string[],          // 3-5 competitive advantages
  vsGiants?: string,       // How they compete vs Google/Microsoft/Amazon
}
```

**Moat Examples:**
```typescript
moat: [
  'Developer platform dominance: powers Cursor, Perplexity',
  'Enterprise trust through safety-first approach',
  'Network effects from 10M+ users',
  '$27B funding enables sustained R&D',
]
```

---

#### 2.3 Growth Metrics (Optional but recommended)

**Growth Stage Definitions (metric-based):**

| Stage | Revenue Growth | User Growth | Typical Signals |
|-------|---------------|-------------|-----------------|
| `'hypergrowth'` | 3x+ YoY or 50%+ quarterly | 5x+ YoY users | Massive funding rounds, rapid hiring (100+ in 6mo), valuation jumps 3x+ between rounds |
| `'high-growth'` | 100-200% YoY | 2-5x YoY users | Series B/C, expanding markets, hiring 50+ per year |
| `'early-growth'` | 50-100% YoY | Steady user increase | Series A/B, product-market fit found, beginning to scale |
| `'mature-growth'` | 20-50% YoY | Stable with gradual increase | Late-stage or pre-IPO, established market position |
| `'steady'` | 10-20% YoY | Stable | Profitable or near-profitable, optimizing not expanding |
| `'plateau'` | <10% YoY or declining | Flat or declining | Market saturation, pivoting, or struggling |

**ElevenLabs Example**: >$200M → >$330M ARR in ~3 months = **65%+ quarterly growth** = `'hypergrowth'` (NOT 'steady')

**Self-check**: If a company raised $500M+ at $10B+ valuation with 50%+ quarterly revenue growth, it is NEVER 'steady' or 'plateau'.

```typescript
growthMetrics: {
  stage: 'hypergrowth' | 'high-growth' | 'early-growth' | 'mature-growth' | 'steady' | 'plateau',
  revenueGrowth: '10x YoY ($10M → $100M)',
  userGrowth: '1M → 10M users in 1 year',
  signals: [
    '$500M Series C at 5x valuation',
    'Expanding to EU/APAC',
    'Hiring 200+ this year',
  ],
  tam: '$100B (AI coding tools market)',
  marketShare: '5% of TAM = 20x upside',
  ceiling: 'Early innings: Replacing legacy dev tools',
  tailwinds: ['AI adoption accelerating', 'Remote work'],
  headwinds: ['GitHub Copilot competition', 'Commoditization risk'],
  moatType: 'network-effects' | 'data-flywheel' | 'switching-costs' | 'brand' | 'technology' | 'platform-ecosystem' | 'vertical-specialization' | 'none',
  moatStrength: 'Strong: 10M+ users generate training data',
}
```

---

### Phase 3: Founders & Vision (중요)

#### 3.1 Founders
```typescript
founders: [
  {
    name: 'Founder Name',
    role: 'CEO' | 'CTO' | 'Co-founder',
    background: 'Brief background (1-2 sentences)',
  },
]
```

**Leadership Change Rule (CRITICAL):**

CEO/CTO가 교체된 경우, **전임자 + 신임자 모두** 기록:
```typescript
// ✅ 올바른 예
founders: [
  {
    name: 'Alan Cowen',
    role: 'Founder (former CEO, joined Google DeepMind Jan 2026)',
    background: 'Former Google researcher focused on emotional expression.',
  },
  {
    name: 'Andrew Ettinger',
    role: 'CEO (appointed Jan 2026)',
    background: 'Former COO at Hume AI; led commercialization.',
  },
],

// ❌ 잘못된 예 — 신임 CEO 누락
founders: [
  {
    name: 'Alan Cowen',
    role: 'Founder (former CEO)',  // 전임자만 있고 신임자 없음!
  },
],
```

**Research Sources:**
- LinkedIn profiles
- Company about page
- Twitter/X bios
- TechCrunch founder interviews
- Podcasts (search: "[founder name] podcast")

---

#### 3.2 Vision & Beliefs
```typescript
{
  whyBuilding: string,     // 1-2 sentences: 왜 이걸 만드는가
  beliefs: string[],       // 3-5개 핵심 신념
  designPhilosophy?: string,  // Optional: 디자인 철학
  greenFlags: string[],    // 3-5개 긍정적 신호
  redFlags: string[],      // 3-5개 부정적 신호
}
```

**Examples:**
```typescript
whyBuilding: 'Left OpenAI over AI safety concerns. Believed safety and commercial success can coexist.',

beliefs: [
  'AI safety is non-negotiable',
  'Scaling + safety are both necessary',
  'Enterprise trust matters more than consumer hype',
],

greenFlags: [
  'Founders from OpenAI with proven track record',
  '$27B raised from tier-1 investors',
  'Breakeven trajectory by 2027',
],

redFlags: [
  'Competitive market with OpenAI, Google',
  'High compute costs',
  'Regulatory uncertainty',
],
```

---

### Phase 4: Design Opportunity (필수 for designers)

#### 4.1 Design Team
```typescript
designTeam: {
  cpo?: string,            // Chief Product Officer name
  designHead?: string,     // Head of Design name
  teamSize?: string,       // '~50 designers' or '10-15'
  notableMembers?: [
    { name: string, role: string }
  ],
}
```

**⚠️ CRITICAL: `teamSize`는 디자인팀 규모만 기재. 전체 직원 수(headcount)가 아님.**

추론 방법 (확인 불가 시):
- LinkedIn에서 "[company] product designer" 검색 → 인원 수 세기
- openRoles에 디자인 역할이 있으면 채용 중 = 팀 확대 시그널
- Head of Design 존재 여부 → 최소 2-3명 팀 추정
- 추론 근거를 괄호 안에 표기: `'~2-3 (1 PD role open + Head of Design)'`

```typescript
// ✅ 올바른 예
teamSize: '~2-3 (1 PD role open + Head of Design)',
teamSize: '~10-15 (LinkedIn search: 12 designers found)',

// ❌ 잘못된 예
teamSize: '~35+ in 2024 announcement',  // 이건 전체 직원 수!
teamSize: '51-200 employees',            // 전체 headcount!
```

**Research:**
- LinkedIn: Search "[company] product designer"
- Company careers page: Design team size
- Twitter: Find designers tweeting about the company

---

#### 4.2 Design Work Type
```typescript
designWorkType: {
  logicBehavior: {
    level: 'high' | 'medium' | 'low',
    tasks: [
      'AI prompt interpretation logic',
      'Agent autonomy boundaries',
      'Error recovery workflows',
    ],
  },
  evaluation: {
    level: 'high' | 'medium' | 'low',
    tasks: [
      'AI output quality metrics',
      'User satisfaction scoring',
      'Feedback loop design',
    ],
  },
  interface: {
    level: 'high' | 'medium' | 'low',
    tasks: [
      'Conversational UI design',
      'Dashboard and analytics',
      'Mobile app design',
    ],
  },
}
```

**Level Guidelines:**
- **High**: Core focus area (60%+ of work)
- **Medium**: Important but not core (30-60%)
- **Low**: Minor focus (<30%)

---

#### 4.3 Product Stage
```typescript
productStage: '0→1' | '1→10' | '10→100',
```

- **0→1**: Building MVP, finding product-market fit
- **1→10**: Scaling product, refining features
- **10→100**: Optimizing at scale, enterprise features

---

### Phase 5: User Context (필수)

#### 5.1 Target Audiences
```typescript
targetAudiences: {
  primary: string,    // Main user segment
  secondary?: string, // Potential expansion
}
```

**Examples:**
```typescript
targetAudiences: {
  primary: 'Enterprise sales teams using CRM daily',
  secondary: 'SMB sales teams and customer success',
}
```

---

#### 5.2 User Problems
```typescript
userProblems: [
  'Problem 1 (specific pain point)',
  'Problem 2 (what they struggle with)',
  'Problem 3 (why existing solutions fail)',
  // 3-5 items
]
```

**Research:**
- Product Hunt reviews
- G2 reviews (look at "before" pain points)
- Reddit discussions
- Company blog (customer case studies)

---

### Phase 6: Visual Assets Collection (OG Images & Screenshots)

#### 6.1 Automatic Image Collection

**CRITICAL**: OG 이미지는 company 데이터의 필수 부분입니다. Company 파일 생성 후 반드시 자동으로 수집하세요.

**실행 방법:**

Company TypeScript 파일을 생성한 직후, 다음 스크립트를 **반드시** 실행:

```bash
node scripts/fetch-og-single.mjs <company-id> <company-website>
```

**예시:**
```bash
# Anthropic 회사 추가 후
node scripts/fetch-og-single.mjs anthropic https://anthropic.com

# Cursor 회사 추가 후
node scripts/fetch-og-single.mjs cursor https://cursor.sh
```

**스크립트가 자동으로 수행하는 작업:**
1. Microlink API로 OG image URL 추출 (무료, API 키 불필요)
2. 이미지 다운로드 및 최적화:
   - 최대 너비: 1440px
   - WebP 포맷, 90% 품질
   - 저장 위치: `/public/og-images/{company-id}-og.webp`
3. Company 파일에 `ogImage` 필드 자동 추가:
   ```typescript
   {
     ogImage: '/og-images/{company-id}-og.webp',
   }
   ```

**워크플로우:**
```bash
# 1. Company 파일 생성
cat > src/data/companies/new-company.ts << 'EOF'
export const newCompany: Company = {
  id: 'new-company',
  name: 'New Company',
  website: 'https://newcompany.com',
  // ... 나머지 필드
};
EOF

# 2. OG 이미지 자동 수집 (필수!)
node scripts/fetch-og-single.mjs new-company https://newcompany.com

# 3. 확인
# - public/og-images/new-company-og.webp 생성됨 ✓
# - src/data/companies/new-company.ts에 ogImage 필드 추가됨 ✓
```

**실패 시 대응:**
- OG 이미지가 없으면 스크립트가 경고 표시
- 이미지가 없어도 company 파일은 유효함 (fallback UI 있음)
- 나중에 다시 실행 가능

**주의사항:**
- ⚠️ Company 파일에 `remote` 필드가 반드시 있어야 함 (insertion point)
- ⚠️ 스크립트는 이미 `ogImage` 필드가 있으면 skip함

---

### Phase 7: Designer Links & Open Roles

#### 7.1 Designer Links & Insights (3-4개 max)

**목적**: 단순 링크 나열이 아니라, **이 회사 디자이너들이 어떤 생각을 하는지** 파악하는 것.

```typescript
designerLinks: [
  {
    name: 'Designer Name',
    role: 'Product Designer' | 'Head of Design',
    platform: 'twitter' | 'linkedin' | 'blog' | 'substack' | 'threads' | 'podcast',
    url: string,
    description: string,  // ⭐ 핵심: 이 사람이 뭘 썼는지, 핵심 인사이트가 뭔지
  },
]
```

**⚠️ description은 필수이고, 인사이트를 담아야 함:**

```typescript
// ✅ 올바른 예 — 인사이트 포함
{
  name: 'Joel Lewenstein',
  role: 'Head of Design',
  platform: 'podcast',
  url: 'https://www.lennyspodcast.com/...',
  description: 'Lenny 팟캐스트에서 "AI 제품은 유저 신뢰가 핵심, 에러를 숨기지 말고 투명하게 보여줘야 한다" 강조',
},
{
  name: 'Nev Flynn',
  role: 'Design Lead',
  platform: 'blog',
  url: 'https://nevflynn.com/...',
  description: 'Voice UI에서 latency를 디자인으로 해결하는 패턴에 대한 글 — "기다림을 경험으로 바꾸기"',
},

// ❌ 잘못된 예 — 링크만 나열
{
  name: 'Nev Flynn',
  role: 'Design Lead',
  platform: 'blog',
  url: 'https://nevflynn.com/',
  description: 'Design collaborator referenced in job posting',  // 인사이트 없음!
},
```

**찾는 방법:**
1. LinkedIn에서 디자이너 이름 확인
2. 그 디자이너의 Medium/Substack/X에서 **실제 글이나 발언** 찾기
3. `description`에 글 제목 + 핵심 인사이트 1줄 요약
4. 글/발언이 없으면 해당 디자이너는 포함하지 않음 (링크만 있는 항목은 가치 없음)

**3-4개 max.** 인사이트가 풍부한 것만 엄선. 7개 나열하지 말 것.

**URL Validation Rule:**
- URL은 **개인 프로필/글 페이지**만 허용 (회사 페이지 `/company/` 금지)
- 개인 URL을 찾을 수 없으면 해당 항목을 제거

**정보를 찾을 수 없는 경우**: designerLinks를 빈 배열로 두되, sources에 "Searched LinkedIn/Twitter for [company] designers — no public writing found" 기록

---

#### 7.2 Open Roles
**이미 `/job-scraper`에서 수집 완료**

Job scraper 결과를 그대로 사용:
```typescript
openRoles: [
  // From /job-scraper output
]
```

**openRoles가 빈 배열 `[]`인 경우 (REQUIRED):**

빈 배열은 "역할이 없다"가 아니라 **"확인했는데 없었다"**를 의미해야 합니다.
반드시 `sources`에 검증 기록을 남기세요:

```typescript
sources: [
  // ... 다른 소스들
  { title: '[Company] Careers - no Product Design roles found', url: 'https://company.com/careers' },
]
```

**확인하지 않고 `[]`로 두는 것은 금지**. job-scraper를 실행하고, 결과가 없을 때만 빈 배열 사용.
가능하면 ATS/LinkedIn 검증도 함께 남긴다:
```typescript
sources: [
  { title: '[Company] Careers - no Product Design roles found', url: 'https://company.com/careers' },
  { title: '[Company] ATS board - no Product Design roles found', url: 'https://jobs.ashbyhq.com/company' },
  { title: '[Company] LinkedIn Jobs - no Product Design roles found', url: 'https://www.linkedin.com/company/company/jobs/' },
]
```

---

### Phase 8: Culture Insights (3개 max)

#### 7.1 Culture Sources
```typescript
cultureInsights: [
  {
    source: 'blind' | 'glassdoor' | 'linkedin' | 'twitter' | 'levels.fyi',
    sentiment: 'positive' | 'neutral' | 'negative',
    rating?: number,  // e.g., 4.2 out of 5
    content: string,
    url?: string,
  },
  // 3개 max — 가장 의미 있는 인사이트만 선별
]
```

**3개 선택 기준** (우선순위):
1. Glassdoor/Blind — 실제 직원 리뷰 (가장 가치 있음)
2. 디자이너/PM의 개인 발언 — X, LinkedIn 포스트
3. levels.fyi — 보상 데이터가 있을 때만

**"No reviews", "No data", "Limited info" 같은 빈 인사이트는 포함하지 말 것.** 정보가 없으면 항목을 줄이는 게 낫다.

**Research:**
- Glassdoor (company reviews)
- Blind (anonymous employee posts)
- levels.fyi (compensation + culture)
- LinkedIn (employee posts)
- Twitter (designer tweets)

**Cross-Validation Rule (CRITICAL):**

`cultureInsights`의 내용은 같은 파일의 다른 섹션과 모순되면 안 됩니다:

| 체크 항목 | 예시 |
|----------|------|
| **founders 배경과 일치** | cultureInsights에서 "Ex-Palantir founders"라고 했으면, founders 섹션에도 Palantir 경력이 있어야 함 |
| **headquarters와 일치** | "SF-based team"이라고 했으면, headquarters가 San Francisco여야 함 |
| **stage와 일치** | "Seed stage startup"이라고 했으면, stage가 실제로 Seed여야 함 |

**Self-check**: cultureInsights 작성 후, founders/headquarters/stage 섹션과 대조. 모순 발견 시 cultureInsights 내용 수정 또는 삭제.
문서 내 모순(예: founders는 전원 유럽 경력인데 cultureInsights에 "SF-native founding team")이 있으면 cultureInsights를 우선 수정한다.

---

### Phase 9: Tracking & Meta

#### 8.1 Personal Tracking
```typescript
tracking: {
  status: 'watching' | 'interested' | 'researching' | 'applied' | 'rejected' | 'dead',
  fitScore: number,  // 1-10
  whyJoin: string[],
  whyNot: string[],
  nextActions: string[],
  notes?: string,
}
```

---

#### 8.2 Meta Information
```typescript
{
  lastUpdated: string,  // ISO format: '2025-01-27'
  sources: [
    { title: string, url: string },
    // All sources used for research
  ],
}
```

---

## Reference Examples

스킬과 함께 제공되는 레퍼런스 파일들을 참고하세요.

### Example 1: Rich Data (Anthropic)

**File**: `.claude/skills/company-researcher/references/anthropic-rich-example.ts`

**Highlights:**
- Complete funding history (7 rounds with dates, amounts, valuations, lead investors)
- Detailed founders background (Dario & Daniela Amodei from OpenAI)
- Rich growth metrics with TAM ($500B+), market share (32%), ceiling analysis
- Comprehensive design work type with specific task examples
- Multiple culture insights from Glassdoor, Blind, levels.fyi, LinkedIn, Twitter
- Clear moat (4 items) and competitive positioning vs OpenAI/Google/Meta
- 3 open roles with full details (compensation, responsibilities, requirements)
- Designer links (3 sources: Joel Lewenstein podcast, Amanda Askell Twitter, research blog)
- Growth metrics: hypergrowth stage, 7x YoY revenue growth, detailed signals

**Data Completeness: ~95%**

**Use this as the gold standard when researching new companies.**

---

### Example 2: Medium Data (Harmonic)

**File**: `.claude/skills/company-researcher/references/harmonic-medium-example.ts`

**Highlights:**
- Basic funding history (3-4 rounds with essential details)
- Founders with brief background
- Some growth metrics (stage, basic signals)
- Design work type with 2-3 task examples per category
- 1-2 culture insights
- Basic moat description (3 items)
- Open roles with core information (title, location, compensation)
- Minimal designer links (1-2)

**Data Completeness: ~60-70%**

**Use this level for smaller/private companies with limited public information.**

---

### Example 3: Low Data (Canva - needs filling)

**File**: `.claude/skills/company-researcher/references/canva-low-example.ts`

**Current State:**
- Basic info only (name, description, website, headquarters)
- No funding history details (only total funding)
- Founders missing
- "Unknown" for revenue, growth, customers
- Empty arrays for competitors, designer links, culture insights
- Generic moat/beliefs placeholders
- Minimal design work type (only levels, no task examples)

**Data Completeness: ~30%**

**What's missing:**
- Funding history with dates/investors
- Founder backgrounds and vision
- Competitor analysis
- Designer links
- Culture insights
- Specific design challenges
- Open roles details

**Action Needed:**
Run `/company-researcher canva` to fill gaps.

**Don't use this as a reference - use Anthropic or Harmonic instead.**

---

### How to Use References

1. **Starting a new company research:**
   ```bash
   # Look at the rich example first
   cat .claude/skills/company-researcher/references/anthropic-rich-example.ts

   # Then run company researcher
   /company-researcher [new-company]
   ```

2. **Checking data completeness:**
   ```bash
   # Compare your output against Anthropic example
   # Aim for 70%+ completeness
   ```

3. **Understanding each field:**
   - Each reference file shows how to fill every field
   - Anthropic example has detailed comments and examples
   - Copy the structure, adapt the content

---

## Execution Flow

```mermaid
graph TD
  A[/company-researcher Company] --> B[Run /job-scraper first]
  B --> C[Collect Basic Info]
  C --> D[Research Business Metrics]
  D --> E[Analyze Competition]
  E --> F[Study Founders & Vision]
  F --> G[Find Design Team Info]
  G --> H[Collect Culture Insights]
  H --> I[Compile TypeScript Object]
  I --> J[Verify Completeness]
  J --> K[Output Company File]
```

---

## Output Format

```markdown
# [Company Name] Research Report

## Summary
- **AI Level**: A (AI-Native)
- **Stage**: Series C
- **Valuation**: $1B
- **Design Roles Open**: 2 (Senior Product Designer, Staff Product Designer)
- **Data Completeness**: 85%

---

## 1. Basic Information
[Company overview, headquarters, remote policy]

## 2. Business Metrics
[Funding, revenue, growth, customers]

## 3. AI-Native Analysis
[Why Level A/B/C/D, design challenges]

## 4. Competition & Market
[Competitors, moat, vs giants]

## 5. Founders & Vision
[Founders, why building, beliefs, flags]

## 6. Design Opportunity
[Team size, work type, product stage]

## 7. User Context
[Target audiences, user problems]

## 8. Open Roles
[From /job-scraper - 2 roles found]

## 9. Designer Links
[3 designers found on Twitter, LinkedIn]

## 10. Culture Insights
[Glassdoor: 4.2/5, Blind posts, levels.fyi]

---

## TypeScript Object

\`\`\`typescript
export const companyName: Company = {
  id: 'company-name',
  name: 'Company Name',
  description: '...',
  // ... full object
};
\`\`\`

---

## Next Steps
1. Review TypeScript object for accuracy
2. Create file: `src/data/companies/company-name.ts`
3. Add to `src/data/companies/index.ts`
4. Commit with proper format
5. Update tracking status
```

---

## Integration with Job Scraper

**Recommended Workflow:**

```bash
# Step 1: Scrape jobs first
/job-scraper [company name]

# Step 2: Research company data
/company-researcher [company name]

# Step 3: Review and commit
# Company researcher will include job scraper results
```

**Why This Order:**
- Job scraper provides `openRoles` data
- Company researcher compiles everything including jobs
- Single comprehensive output

---

## Verification Checklist

Before outputting final TypeScript object:

### Required Fields (Must Have)
- [ ] id, name, description, website
- [ ] headquarters, remote
- [ ] stage, valuation (or 'Unknown')
- [ ] aiNativeLevel, aiNativeLevelDescription
- [ ] founders (at least 1)
- [ ] designWorkType (all 3 types with tasks)
- [ ] targetAudiences (primary)
- [ ] userProblems (3-5 items)
- [ ] openRoles (from /job-scraper)
- [ ] tracking (all fields)
- [ ] lastUpdated, sources

### Important Fields (Should Have)
- [ ] totalFunding
- [ ] fundingHistory (at least latest round)
- [ ] competitors (3-5)
- [ ] moat (3-5 items)
- [ ] whyBuilding, beliefs
- [ ] greenFlags, redFlags

### Nice to Have
- [ ] revenue, growth, runway
- [ ] designTeam (teamSize, designHead)
- [ ] designerLinks
- [ ] cultureInsights
- [ ] growthMetrics (full object)

### Data Quality
- [ ] No 'Unknown' placeholders (research or leave empty)
- [ ] No empty arrays with 'TODO' comments
- [ ] All URLs validated (not 404)
- [ ] Funding dates in 'YYYY-MM' format
- [ ] lastUpdated is today's date

---

## Tips for Efficient Research

### 1. Start with Best Sources
```
1. Company website + 공식 보도자료 (최우선)
2. Crunchbase/PitchBook/Dealroom (펀딩/밸류에이션)
3. LinkedIn (Founders, 팀 구성, 채용 시그널)
4. 신뢰 매체(TechCrunch/Reuters 등)로 교차검증
5. startups.gallery는 보조 시드 데이터로만 사용
```

### 2. Use Parallel WebFetch
```typescript
// Fetch multiple sources at once
await Promise.all([
  WebFetch('crunchbase.com/company/...'),
  WebFetch('linkedin.com/company/...'),
  WebFetch('glassdoor.com/company/...'),
]);
```

### 3. AI Level Quick Test
- Can product exist without AI? → No = Level A
- Is AI the main differentiator? → Yes = Level B
- Is AI just a feature? → Major = Level C, Minor = Level D

### 4. When Data is Missing
- Don't guess or hallucinate
- 먼저 공식/투자/뉴스 소스를 추가로 2-3회 더 탐색
- 그래도 없으면 `Unknown` 또는 빈값 처리
- sources에 `Limited public information available` + 시도한 출처를 함께 기록

---

## Common Mistakes to Avoid

### ❌ Don't:
- Skip /job-scraper (always run it first)
- Copy-paste from other companies without verification
- startups.gallery 단일 소스로 필드를 확정
- Use old funding data (check dates)
- Ignore culture insights (very important for fit)
- Leave competitors empty (always find 3-5)

### ✅ Do:
- Run /job-scraper first
- Verify all URLs (click to confirm not 404)
- Check multiple sources for accuracy
- Include specific design challenges (not generic)
- Cross-reference funding amounts with dates

---

## Success Criteria

✅ **Complete Research:**
- All required fields filled
- 3+ sources cited
- Job scraper results included
- TypeScript compiles without errors
- Data completeness >70%

❌ **Incomplete Research:**
- Many 'Unknown' placeholders
- No job scraper results
- <3 sources
- Generic descriptions
- Data completeness <50%

---

This skill ensures every company in AIDO has rich, accurate, up-to-date information for designer decision-making.

---

## Code Formatting Rules (MUST follow)

### Indentation
- **2-space indentation** throughout the entire file (NO 4-space, NO tabs)
- Nested objects follow 2-space increments consistently

### String Quotes
- Single quotes for all string values: `'value'`
- Double quotes only for strings containing apostrophes: `"Mother Nature's farmacy"`

### Trailing Commas
- Always use trailing commas in arrays and objects

### Property Order
Follow this exact order in the Company object:
```
id → name → description → website → screenshot → headquarters → remote →
ogImage → aiTypes → markets → category → industries →
stage → valuation → totalFunding → fundingHistory → revenue → growth → runway → customers →
competitors → marketPosition → moat → vsGiants →
aiNativeLevel → aiNativeLevelDescription → aiDesignChallenges →
founders → whyBuilding → beliefs → greenFlags → redFlags →
designTeam → designWorkType → productStage →
targetAudiences → userProblems →
designerLinks → openRoles → cultureInsights →
growthMetrics → tracking → lastUpdated → sources
```

---

## Post-Run Self-Reflection Loop (MANDATORY)

회사 1개 리서치 완료 후 반드시 아래를 실행:

1. **Execution Metrics**
- start/end time, total duration
- token usage (exact if available, otherwise estimated level + main drivers)
2. **Challenge Points**
- 실행 중 병목/실패/혼동 지점 1~3개
3. **Improvement Actions**
- 재발 방지용 개선안 1~3개
4. **Skill Update**
- 재사용 가능한 개선은 같은 세션에서 이 `SKILL.md`에 즉시 반영
- 즉시 반영 불가 시, 이유와 TODO를 남김

권장 출력 포맷:
```markdown
## Self-Reflection
- Time: 6m 20s
- Tokens: medium (Playwright snapshot-heavy)
- Challenges:
  - LinkedIn job page blocks anonymous fetch
  - Designer profile URL ambiguity
- Improvements:
  - Prefer evaluate() extraction before full snapshot
  - Enforce personal-profile URL patterns in checklist
```

---

## Self-Verification Checklist (MANDATORY before commit, 21 items)

파일 작성 완료 후, 커밋 전에 반드시 아래 항목을 하나씩 체크:

### Data Accuracy
- [ ] `industries`가 `category`와 같은 도메인을 가리키는가?
- [ ] `growthMetrics.stage`가 실제 매출 성장률/펀딩 시그널과 맞는가? (메트릭 테이블 참조)
- [ ] `aiNativeLevel`이 'A' 또는 'B' 표기법인가? (Level 4/3 사용 금지)
- [ ] `tracking.whyJoin`에서 Level 표기가 'Level A/B' 형식인가? (Level 4/3 사용 금지)
- [ ] Founder role이 정확한가? (CEO/CTO/CPO 등 — 웹사이트에서 직접 확인)

### Cross-Validation
- [ ] `designerLinks`의 모든 URL이 **개인 프로필** 페이지인가? (회사 페이지 `/company/` URL 금지)
- [ ] `cultureInsights`의 founders 관련 언급이 `founders` 섹션과 일치하는가?
- [ ] `cultureInsights`의 위치/규모 관련 언급이 `headquarters`/`stage`와 일치하는가?
- [ ] **통화 일관성**: 한 파일 안에서 `fundingHistory`, `valuation`, `tracking`, `growthMetrics`의 통화 단위가 통일되어 있는가? (회사 본사 네이티브 통화 기준, USD 병기 시 `(~$X)` 포맷)
- [ ] **수치 동기화**: `valuation`/`totalFunding` 수정 시 `tracking.whyJoin`, `growthMetrics.signals`에서 같은 수치를 참조하는 부분도 함께 갱신했는가?
- [ ] **리더십 변경 반영**: CEO/CTO가 바뀐 경우, `founders` 배열에 전임자 역할 업데이트 + 신임자 추가까지 완료했는가?
- [ ] **fundingHistory 합산 검증**: `totalFunding` 금액 ≈ `fundingHistory` 각 라운드 amount 합산인가? 차이가 크면 누락된 라운드 리서치 필수

### Completeness
- [ ] `designerLinks`에 실제 디자이너 개인 프로필이 2개 이상 있는가? (회사 블로그만으로는 부족)
- [ ] `openRoles`가 job-scraper를 통해 검증되었는가? (빈 배열이면 sources에 검증 기록 필수)
- [ ] `sources`가 3개 이상인가?
- [ ] `fundingHistory`의 모든 라운드에 date, amount, leadInvestors가 있는가?

### Formatting
- [ ] 2-space 인덴테이션이 전체 파일에서 일관적인가? (수정 전후 주변 코드 인덴트 확인)
- [ ] `category`에 `as const`가 붙어있는가?
- [ ] `lastUpdated`가 오늘 날짜인가?

### Design Team Accuracy (NEW)
- [ ] `designTeam.teamSize`는 **디자인팀 규모**만 기재했는가? (전체 직원 수 ≠ 디자인팀)
- [ ] 디자인팀 규모 확인 불가 시, openRoles/Head of Design 존재 여부에서 추론하고 괄호 안에 근거 표기했는가?

**하나라도 NO가 있으면 수정 후 커밋.**
