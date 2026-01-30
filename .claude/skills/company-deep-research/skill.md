# Company Deep Research Skill

Tier 0/1 회사에 대한 VC-level 비즈니스 분석 + Product Design 팀 인텔리전스를 결합한 딥 리서치 도구.

## 사용법

```
/company-deep-research [company name]
```

## 목적

> "이 회사가 디자이너인 나에게 진짜 좋은 곳인가?"를 **투자자 + 디자이너** 양쪽 관점에서 판단

기존 `/company-researcher`가 데이터 수집 중심이라면, 이 스킬은:
- VC가 투자 결정할 때 보는 수준의 비즈니스 분석
- 디자인팀의 모든 구성원을 LinkedIn까지 추적
- 실제 협업 구조와 디자이너 성장 가능성 예측
- Upside/Downside를 데이터 기반으로 정리

**대상**: `fitScore >= 8` (Tier 0, Tier 1) 회사 우선

---

## Prerequisites

이 스킬 실행 전:
1. 해당 회사가 이미 `src/data/companies/[id].ts`에 존재해야 함
2. `/company-researcher`로 기본 데이터가 채워져 있어야 함
3. `/job-scraper`로 openRoles가 수집되어 있어야 함

**기존 데이터 위에 딥 리서치를 추가하는 방식.**

---

## Output

이 스킬의 결과물은 **두 가지**:

### 1. Deep Research Report (Markdown)
`src/data/deep-research/[company-id].md` 에 저장

### 2. Company Data Update
기존 `src/data/companies/[company-id].ts`의 필드 보강 (designTeam, designerLinks, cultureInsights 등)

---

## Phase 1: Design Team Intelligence (최우선)

> 디자이너로서 가장 중요한 건 **누구와 일하는가**

### 1.1 Design Leadership Mapping

전체 디자인 org를 매핑:

```markdown
## Design Organization

### Leadership
- **CPO/VP Product**: [Name] — [LinkedIn URL]
  - Background: [이전 회사, 경력]
  - Design에 대한 관점: [인터뷰/트윗에서 추출]

- **Head of Design / Design Director**: [Name] — [LinkedIn URL]
  - Background: [이전 회사, 경력]
  - Design philosophy: [인터뷰/블로그에서 추출]

### Design Managers
- [Name] — [Role] — [LinkedIn URL]
  - Team: [어떤 팀 매니지]
  - Previously: [이전 경력]

### Senior/Staff Designers
- [Name] — [Role] — [LinkedIn URL]
  - Focus area: [어떤 제품/피처]
  - Notable work: [공개된 작업물]

### Product Designers (IC)
- [Name] — [Role] — [LinkedIn URL]
- [Name] — [Role] — [LinkedIn URL]
- ...
```

### 1.2 Research Methods

**LinkedIn Search Queries:**
```
site:linkedin.com/in "[company name]" "product designer"
site:linkedin.com/in "[company name]" "head of design"
site:linkedin.com/in "[company name]" "design manager"
site:linkedin.com/in "[company name]" "staff designer"
site:linkedin.com/in "[company name]" "design director"
site:linkedin.com/in "[company name]" "VP design"
site:linkedin.com/in "[company name]" "CPO"
```

**Company Org Search:**
```
"[company name]" design team
"[company name]" design org
"[company name]" "head of design"
"[company name]" design blog
```

**Cross-reference Sources:**
- LinkedIn company page → People tab → "Design" filter
- Company careers page → Team page
- Dribbble/Behance → Search company name
- Twitter/X → Search "[company] designer"
- Medium/Substack → Design team blog posts

### 1.3 Designer Profile Deep Dive

각 디자이너에 대해 가능한 한 수집:

```typescript
interface DesignTeamMember {
  name: string;
  role: string;                    // 'CPO', 'Head of Design', 'Staff Product Designer', etc.
  linkedin: string;                // LinkedIn profile URL
  twitter?: string;                // Twitter/X URL
  portfolio?: string;              // Personal site / Dribbble / Behance
  blog?: string;                   // Medium / Substack
  previousCompanies: string[];     // e.g., ['Google', 'Airbnb', 'Stripe']
  yearsAtCompany?: string;         // e.g., '2 years'
  notableWork?: string[];          // 공개된 작업물, 발표, 글
  designPhilosophy?: string;       // 인터뷰/글에서 추출한 디자인 관점
}
```

### 1.4 Team Dynamics Analysis

수집한 정보를 바탕으로 분석:

```markdown
## Team Dynamics Assessment

### Team Composition
- Total designers: [N]
- Ratio: [Leadership : Senior : IC]
- Growth: [최근 6개월 채용 트렌드]

### Design Maturity Signal
- [ ] Dedicated Head of Design (not PM wearing design hat)
- [ ] Design system exists
- [ ] Design blog/public writing
- [ ] Designers speak at conferences
- [ ] Design critique culture visible
- [ ] Research/UXR function exists

### Collaboration Pattern (추정)
- Designer:Engineer ratio: [1:N]
- Designer:PM ratio: [1:N]
- Likely org structure: [embedded in squads / centralized / hybrid]
- Design review process: [evidence from blog posts, designer tweets]

### My Fit Assessment
- Seniority match: [내 레벨 vs 팀 구성]
- Growth ceiling: [다음 레벨로 갈 수 있는 구조인가]
- Leadership opportunity: [디자인 리더십 공석 여부]
- Mentorship potential: [시니어 디자이너들의 배경]
```

---

## Phase 2: VC-Level Business Analysis

> 투자자가 보는 관점으로 회사의 비즈니스 건강도와 성장 가능성 분석

### 2.1 Business Model Deep Dive

```markdown
## Business Model

### Revenue Model
- Type: [SaaS / Usage-based / Freemium / Marketplace / API / Hybrid]
- Pricing: [구체적 가격 티어]
- Unit economics signal: [LTV:CAC if available]
- Revenue concentration: [Enterprise 의존도, 소수 고객 의존 여부]

### GTM Motion
- Primary: [Sales-led / Product-led / Community-led / Hybrid]
- Sales cycle: [Self-serve / SMB sales / Enterprise sales]
- Distribution advantage: [바이럴리티, 네트워크 효과, 파트너십]

### Current Financial Health
- Revenue: [ARR or estimated]
- Burn rate signal: [Hiring pace, office expansion, funding timeline]
- Path to profitability: [Breakeven timeline, margin trajectory]
- Last funding: [Round, amount, date, lead investor]
- Implied runway: [Conservative estimate]
```

### 2.2 Research Sources for Business

```
WebSearch: "[company name]" ARR revenue 2024 2025
WebSearch: "[company name]" funding round valuation
WebSearch: "[company name]" business model pricing
WebSearch: "[company name]" customers enterprise
WebSearch: site:techcrunch.com "[company name]"
WebSearch: site:theinformation.com "[company name]"
WebSearch: "[company name]" annual recurring revenue
```

---

## Phase 3: Upside Analysis (왜 이 회사가 잘될 수 있는가)

```markdown
## Upside Case

### Market Opportunity
- TAM: [Total Addressable Market size]
- Current penetration: [%]
- Growth trajectory: [How fast is the market growing]
- Why now: [왜 지금 이 시장이 열렸는가]

### Product Moat
- Technical moat: [특허, 독점 데이터, 모델 우위]
- Distribution moat: [네트워크 효과, 전환 비용, 브랜드]
- Data moat: [데이터 플라이휠, 독점 데이터셋]
- Talent moat: [핵심 인재, 연구 역량]

### Growth Signals
- Revenue growth: [YoY or MoM]
- User growth: [활성 사용자 증가]
- Hiring velocity: [얼마나 빠르게 채용 중]
- Product velocity: [릴리즈 빈도, 새 기능]
- Partnership signals: [주요 파트너십, 고객 확보]
- Press/mindshare: [미디어 노출, 개발자 커뮤니티]

### Designer-Specific Upside
- 🎯 Design influence on product: [디자인이 제품 방향에 미치는 영향력]
- 🎯 Novel design challenges: [다른 곳에서 못하는 디자인 문제]
- 🎯 Career growth: [이 회사에서의 성장 경로]
- 🎯 Portfolio value: [이 경험이 이력서에 미치는 가치]
- 🎯 Equity upside: [스톡옵션/RSU 가치 전망]
- 🎯 Learning from leadership: [디자인 리더십에서 배울 수 있는 것]
```

---

## Phase 4: Downside / Risk Analysis (왜 이 회사가 안 될 수 있는가)

```markdown
## Downside Case

### Business Risks
- Competition risk: [가장 큰 경쟁 위협]
- Market risk: [시장 자체가 축소될 가능성]
- Execution risk: [팀이 실행할 수 있는가]
- Funding risk: [자금 소진, 추가 펀딩 불확실성]
- Regulatory risk: [규제 환경 변화]
- Technology risk: [기술 commodity화, 플랫폼 의존]

### Design-Specific Risks
- ⚠️ Design influence: [디자인이 무시되는 환경인가]
- ⚠️ Team stability: [디자이너 이직률, 리더십 변동]
- ⚠️ Growth ceiling: [시니어 이상으로 성장 가능한가]
- ⚠️ Scope of work: [실제 디자인 업무 범위 — 폭넓은 vs 좁은]
- ⚠️ Engineering-driven culture: [엔지니어 중심 의사결정 vs 디자인 참여]
- ⚠️ Work-life balance: [번아웃 리스크, 야근 문화]
- ⚠️ Remote vs In-person: [내 근무 선호와 맞는가]

### Worst Case Scenario
- Company fails: [가장 현실적인 실패 시나리오]
- Down round: [밸류에이션 하락 가능성]
- Layoffs: [구조조정 리스크]
- Acqui-hire: [인수 후 팀 해체]
```

---

## Phase 5: Competition Landscape Deep Dive

> 단순 경쟁사 리스트가 아닌, 전략적 경쟁 구도 분석

```markdown
## Competition Landscape

### Direct Competitors (같은 문제를 같은 방식으로 풂)
| Company | Funding | Revenue Est. | Moat | Design Team | Threat Level |
|---------|---------|-------------|------|-------------|-------------|
| [Name]  | $XXM    | ~$XXM ARR   | [요약] | [팀 규모] | High/Med/Low |

### Indirect Competitors (같은 문제를 다른 방식으로 풂)
| Company | Approach | Why Different | Convergence Risk |
|---------|----------|---------------|-----------------|
| [Name]  | [접근법] | [차이점]      | High/Med/Low    |

### Giant Threat (빅테크의 진입 위협)
- **Google**: [진입 가능성, 이미 있는 제품]
- **Microsoft**: [진입 가능성]
- **Apple**: [진입 가능성]
- **Meta**: [진입 가능성]
- **Amazon**: [진입 가능성]

### Competitive Positioning
- [Company]'s unique angle: [다른 누구도 안 하는 것]
- Switching costs: [사용자가 바꾸기 얼마나 어려운가]
- Winner-take-all dynamics: [시장이 독점 구조인가]
- Likely outcome: [인수 / IPO / 시장 리더 / 니치 플레이어]
```

### 5.1 Competition Research Queries

```
WebSearch: "[company name]" vs "[competitor]"
WebSearch: "[company name]" alternatives competitors 2025
WebSearch: "[company name]" market share
WebSearch: "[product category]" market landscape 2025
WebSearch: "[company name]" competitive advantage moat
WebSearch: G2 "[company name]" vs "[competitor]"
```

---

## Phase 6: Articles & Reference Collection

> 의사결정에 도움되는 모든 외부 자료 수집

```markdown
## Key Articles & References

### Founder Interviews & Podcasts
- [Title] — [Source] — [URL]
  - Key takeaway: [한 줄 요약]
- [Title] — [Source] — [URL]
  - Key takeaway: [한 줄 요약]

### Design Team Content
- [Title] — [Author, Role] — [URL]
  - Key takeaway: [디자인 팀/문화에 대한 인사이트]

### Business Analysis
- [Title] — [Source] — [URL]
  - Key takeaway: [비즈니스 인사이트]

### Product Reviews & User Sentiment
- [Title] — [Source] — [URL]
  - Key takeaway: [제품 평가]

### Employee Perspectives
- Glassdoor: [Rating, key themes] — [URL]
- Blind: [Key topics, sentiment] — [URL if available]
- levels.fyi: [Comp data, satisfaction] — [URL]

### News & Press
- [Title] — [Date] — [URL]
  - Relevance: [왜 중요한가]
```

### 6.1 Article Research Queries

```
WebSearch: "[company name]" founder interview podcast
WebSearch: "[company name]" design team blog
WebSearch: "[company name]" design culture
WebSearch: "[company name]" product designer experience
WebSearch: "[company name]" glassdoor review design
WebSearch: "[company name]" engineering culture
WebSearch: "[company name]" "[founder name]" interview
WebSearch: "[company name]" product review analysis
WebSearch: "[company name]" future roadmap vision
```

---

## Phase 7: Designer's Decision Framework

> 모든 리서치를 종합한 최종 판단

```markdown
## Decision Framework

### The 5 Key Questions

#### 1. Will I learn things I can't learn elsewhere?
- Answer: [Yes/No/Maybe]
- Evidence: [구체적 근거]
- Score: [1-10]

#### 2. Will I have real influence on the product?
- Answer: [Yes/No/Maybe]
- Evidence: [디자인 의사결정 구조, 팀 규모 대비 디자이너 비율]
- Score: [1-10]

#### 3. Is the business healthy enough to sustain my growth?
- Answer: [Yes/No/Maybe]
- Evidence: [Revenue, funding, runway, growth]
- Score: [1-10]

#### 4. Will I work with people I admire?
- Answer: [Yes/No/Maybe]
- Evidence: [디자인 리더십 배경, 팀 구성원 분석]
- Score: [1-10]

#### 5. Does the equity have real upside?
- Answer: [Yes/No/Maybe]
- Evidence: [Valuation trajectory, exit potential, market opportunity]
- Score: [1-10]

### Final Assessment

| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Learning  | X/10  | 25%    | X.X      |
| Influence | X/10  | 25%    | X.X      |
| Business  | X/10  | 20%    | X.X      |
| People    | X/10  | 20%    | X.X      |
| Equity    | X/10  | 10%    | X.X      |
| **TOTAL** |       |        | **X.X/10** |

### Verdict
[One paragraph: 이 회사에 대한 최종 판단]

### Recommended Action
- [ ] [다음 액션 1]
- [ ] [다음 액션 2]
- [ ] [다음 액션 3]
```

---

## Execution Flow

```mermaid
graph TD
  A[/company-deep-research Company] --> B{Company exists in DB?}
  B -->|No| C[Run /company-researcher first]
  B -->|Yes| D[Phase 1: Design Team Intel]
  D --> E[Phase 2: VC Business Analysis]
  E --> F[Phase 3: Upside Analysis]
  F --> G[Phase 4: Downside/Risk Analysis]
  G --> H[Phase 5: Competition Deep Dive]
  H --> I[Phase 6: Articles & References]
  I --> J[Phase 7: Decision Framework]
  J --> K[Generate Report MD]
  K --> L[Update Company Data]
  L --> M[Commit & Save]
```

---

## Output Format

### Report File

Path: `src/data/deep-research/[company-id].md`

```markdown
# [Company Name] — Deep Research Report

> Generated: [date]
> Tier: [0 or 1]
> Overall Score: [X.X/10]

---

## Executive Summary
[3-5 sentences: VC + Designer 관점 종합 요약]

## Design Team Intelligence
[Phase 1 output]

## Business Model Analysis
[Phase 2 output]

## Upside Case
[Phase 3 output]

## Downside & Risks
[Phase 4 output]

## Competition Landscape
[Phase 5 output]

## Key Articles & References
[Phase 6 output]

## Decision Framework
[Phase 7 output]

---

## Sources
- [All URLs used in research]
```

### Company Data Update

기존 `src/data/companies/[id].ts` 파일에서 다음 필드 보강:

```typescript
// 보강되는 필드들
designTeam: {
  cpo: 'Updated with real name',
  designHead: 'Updated with real name',
  teamSize: 'Updated with accurate count',
  notableMembers: [
    // 실제 LinkedIn에서 찾은 구성원들
    { name: 'Real Name', role: 'Staff Product Designer' },
  ],
},

designerLinks: [
  // LinkedIn, Twitter, Blog 등 실제 URL
  { name: 'Name', role: 'Role', platform: 'linkedin', url: 'https://linkedin.com/in/...' },
],

cultureInsights: [
  // Glassdoor, Blind 등에서 수집한 실제 인사이트
],

// tracking.notes에 deep research 요약 추가
tracking: {
  notes: 'Deep research completed [date]. See src/data/deep-research/[id].md for full report.',
},
```

---

## Tier Classification

### Tier 0 (fitScore 9-10) — Must Apply
최우선 리서치 대상. 가장 깊게 분석.
- 디자인팀 전원 LinkedIn 매핑
- 파운더 인터뷰 3개 이상 수집
- 경쟁사 5개 이상 분석
- 아티클 10개 이상 수집

### Tier 1 (fitScore 8) — High Interest
깊은 분석하되 Tier 0보다는 간결하게.
- 디자인 리더십 + 시니어 레벨 LinkedIn 매핑
- 파운더 인터뷰 1-2개 수집
- 경쟁사 3개 이상 분석
- 아티클 5개 이상 수집

### Current Tier 0 Companies (fitScore 9)
- Anthropic
- Cursor
- Linear
- Replit
- Gamma
- Lovable

### Current Tier 1 Companies (fitScore 8)
- Granola, Cohere, ElevenLabs, Harvey, Midjourney, Mistral
- Suno, Vercel, Grammarly, Resolve AI, HeyGen, Fal
- Ivo, Superhuman, Factory, Abridge, Glean
- Ambience Healthcare, OpenRouter, Listen Labs, Reevo

---

## Research Tool Usage

### Required Tools

이 스킬은 다음 도구를 적극 활용:

**WebSearch** (Primary):
```
# Design Team
WebSearch: site:linkedin.com/in "[company]" "product designer"
WebSearch: site:linkedin.com/in "[company]" "head of design"
WebSearch: "[company]" design team members

# Business
WebSearch: "[company]" ARR revenue funding 2025
WebSearch: "[company]" business model pricing
WebSearch: site:crunchbase.com "[company]"

# Competition
WebSearch: "[company]" vs alternatives 2025
WebSearch: "[product category]" market landscape

# Articles
WebSearch: "[company]" "[founder]" interview podcast
WebSearch: "[company]" design blog culture

# Culture
WebSearch: site:glassdoor.com "[company]" reviews
WebSearch: "[company]" blind reviews
WebSearch: site:levels.fyi "[company]"
```

**WebFetch** (Detail pages):
```
WebFetch: LinkedIn profiles (when available)
WebFetch: Blog posts, articles
WebFetch: Glassdoor company page
WebFetch: Company about/team page
```

### Parallel Research Strategy

시간 효율을 위해 병렬 실행:

```
Round 1 (Parallel):
  - WebSearch: Design team LinkedIn
  - WebSearch: Business metrics
  - WebSearch: Competition landscape

Round 2 (Parallel):
  - WebFetch: Top designer LinkedIn profiles
  - WebSearch: Founder interviews
  - WebSearch: Culture insights

Round 3 (Parallel):
  - WebFetch: Key articles
  - WebSearch: Product reviews
  - Compile Decision Framework
```

---

## Quality Standards

### Must Have (리포트에 반드시 포함)
- [ ] 디자인 리더십 전원 이름 + LinkedIn
- [ ] 시니어 이상 디자이너 이름 + LinkedIn
- [ ] Revenue estimate (ARR or range)
- [ ] 경쟁사 3개 이상 분석
- [ ] Upside 3개 이상, Downside 3개 이상
- [ ] 파운더 인터뷰/아티클 1개 이상
- [ ] 최종 Decision Framework 완성

### Should Have
- [ ] IC 디자이너 LinkedIn (가능한 범위)
- [ ] Designer:Engineer ratio
- [ ] Glassdoor/Blind 인사이트
- [ ] 디자인 블로그/아티클
- [ ] Equity upside 분석

### Data Integrity Rules
- **실제 확인된 정보만**: 추측하지 않음
- **URL 필수**: 모든 LinkedIn, 아티클에 URL 포함
- **날짜 표기**: 정보의 최신성 표기
- **불확실성 표기**: 확인 안 된 건 "Unverified" 표기
- **추측 vs 팩트 구분**: 추측은 "[Estimated]" 표기

---

## Examples

### Tier 0 Example: Anthropic

```markdown
# Anthropic — Deep Research Report

> Generated: 2025-01-30
> Tier: 0
> Overall Score: 9.2/10

## Executive Summary
Anthropic is the safety-focused AI lab behind Claude, valued at $183B with
~$7B ARR growing 7x YoY. Mike Krieger (ex-Instagram co-founder) as CPO
signals the strongest design investment in the AI industry. 50+ designer
team with Joel Lewenstein leading design creates rare opportunity for
AI-native design work that doesn't exist elsewhere. Main risks are
competition from OpenAI/Google and the challenge of standing out in a
large organization.

## Design Team Intelligence

### Leadership
- **CPO**: Mike Krieger — linkedin.com/in/mikekrieger
  - Co-founded Instagram, sold to Meta for $1B
  - Deeply product-oriented, understands design craft
- **Head of Design**: Joel Lewenstein — linkedin.com/in/joellewenstein
  - Previously at Dropbox, Slack
  - Public about design process (podcast appearances)

### Senior Designers
- Amanda Askell — Research + Character Design
- [More names with LinkedIn URLs...]

### Team Size: ~50 designers

## Business Model Analysis
- Revenue model: API usage-based + Claude Pro subscription ($20/mo)
- Enterprise: Custom pricing, growing fastest
- ARR: ~$7B (Oct 2025), up from $1B in early 2025
- Path to profitability: Breakeven expected 2027
...
```

---

## Common Mistakes to Avoid

### ❌ Don't:
- LinkedIn URL 없이 이름만 나열
- "Great design team" 같은 주관적 평가만
- 경쟁사를 이름만 나열 (분석 없이)
- Revenue를 모르면서 추측
- 오래된 기사를 최신인 것처럼 인용
- 디자인 리더십 없이 IC만 나열

### ✅ Do:
- 모든 디자이너에 LinkedIn URL 포함
- 데이터 기반 분석 (숫자, 소스)
- 경쟁사별 차별점과 위협 수준 분석
- 불확실한 정보는 "[Estimated]", "[Unverified]" 표기
- 디자이너 관점의 Upside/Downside 별도 섹션
- 최종 Decision Framework으로 액션 도출

---

## Integration with Other Skills

```
1. /job-scraper → Open roles 수집
2. /company-researcher → 기본 데이터 수집
3. /company-deep-research → 딥 리서치 (이 스킬)
4. /writer → 인사이트 블로그 글 생성 (optional)
```

---

## File Structure

```
src/data/deep-research/
├── anthropic.md         # Tier 0 deep research
├── cursor.md            # Tier 0 deep research
├── linear.md            # Tier 0 deep research
├── replit.md            # Tier 0 deep research
├── gamma.md             # Tier 0 deep research
├── lovable.md           # Tier 0 deep research
├── vercel.md            # Tier 1 deep research
├── elevenlabs.md        # Tier 1 deep research
└── ...                  # 추가 회사들
```

---

## Success Criteria

✅ **Excellent Report:**
- 디자인팀 80%+ LinkedIn 매핑 완료
- 비즈니스 모델 구체적 분석 (가격, GTM, 유닛 이코노믹스)
- Upside/Downside 각 5개 이상 (데이터 기반)
- 경쟁사 5개 이상 (직접/간접/빅테크)
- 아티클 10개 이상 수집 (Tier 0 기준)
- Decision Framework 완성, 액셔너블한 결론

❌ **Incomplete Report:**
- 디자인팀 리더십만 나열 (IC 없음)
- "Good business" 같은 vague한 분석
- 소스/URL 없는 주장
- 경쟁사 이름만 나열
- Decision Framework 없음

---

This skill transforms raw company data into actionable career intelligence for a product designer evaluating AI-native companies.
