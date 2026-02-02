# Company Researcher Skill

AI 회사 데이터를 체계적으로 수집하는 스킬. Job Scraper와 함께 작동하여 완전한 회사 프로필 생성.

## 사용법

```
/company-researcher [company name]
```

## 목적

회사에 대한 모든 정보를 체계적으로 수집하여 `Company` 타입의 완전한 TypeScript 객체 생성.

## 핵심 원칙 (매우 중요)

1. **특정 디렉토리 단일 의존 금지**: `startups.gallery`는 보조 시드 데이터로만 사용. 단독 소스로 데이터 확정 금지.
2. **필드별 다중 검증**: 핵심 필드(펀딩/밸류에이션/리모트 정책/창업자)는 최소 2개 이상 출처로 교차 검증.
3. **공식/1차 소스 우선**: 회사 공식 사이트, 공식 보도자료, SEC/기업 공시, 투자사 발표를 최우선 사용.
4. **Unknown 최소화가 기본 목표**: 가능한 항목은 끝까지 찾아 채우고, 정말 없을 때만 `Unknown`.
5. **Unknown 사용 시 근거 기록**: sources에 “무엇을 어디서 확인했는데 없었는지”를 남김.

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

#### 2.1 Competitors
```typescript
competitors: [
  {
    name: 'Competitor Name',
    description: 'Brief description',
    whyTheyWin: 'Their competitive advantage',
  },
  // 3-5 competitors
]
```

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

#### 7.1 Designer Links
```typescript
designerLinks: [
  {
    name: 'Designer Name',
    role: 'Product Designer' | 'Head of Design',
    platform: 'twitter' | 'linkedin' | 'blog' | 'substack' | 'threads',
    url: string,
    description?: string,
  },
]
```

**How to Find:**
- LinkedIn: "[company] product designer"
- Twitter: Search "[company] designer"
- Company blog: Design team posts
- Dribbble, Behance: Designers mentioning the company

---

#### 7.2 Open Roles
**이미 `/job-scraper`에서 수집 완료**

Job scraper 결과를 그대로 사용:
```typescript
openRoles: [
  // From /job-scraper output
]
```

---

### Phase 8: Culture Insights

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
]
```

**Research:**
- Glassdoor (company reviews)
- Blind (anonymous employee posts)
- levels.fyi (compensation + culture)
- LinkedIn (employee posts)
- Twitter (designer tweets)

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
