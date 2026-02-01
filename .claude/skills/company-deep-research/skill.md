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

## Phase 3: Product Design Take (유저 문제의 본질)

> 투자자가 시장 크기를 보는 것처럼, 디자이너는 **문제의 깊이와 보편성**을 봐야 한다.
> 이 회사가 풀고 있는 문제가 진짜인지, 얼마나 많은 사람이 겪는지, 어떻게 해결하는지.

### 3.1 User Pain Point Deep Dive

표면적인 문제 나열이 아닌, **유저가 실제로 겪는 고통의 구조**를 분석:

```markdown
## User Problem Analysis

### The Core Problem
- What: [한 문장으로 핵심 문제]
- Who: [구체적으로 누가 겪는가 — 직함, 일상, 맥락]
- When: [언제 이 문제가 발생하는가 — 빈도, 트리거]
- How painful: [문제를 안 풀면 어떻게 되는가 — 돈, 시간, 감정 비용]

### Pain Point Anatomy
1. **Primary pain**: [가장 직접적인 고통]
   - Frequency: [하루에 몇 번 겪는가]
   - Current workaround: [지금은 어떻게 버티고 있는가]
   - Cost of inaction: [안 풀면 얼마 손해인가]

2. **Secondary pain**: [파생되는 고통]
   - Who else suffers: [1차 유저 외에 영향받는 사람]
   - Cascading effects: [문제가 번지는 구조]

3. **Emotional pain**: [수치로 안 잡히는 고통]
   - Frustration source: [왜 짜증나는가]
   - Status/identity impact: [직업적 자존감에 미치는 영향]
```

### 3.2 Problem Scale & Universality

```markdown
### Problem Scale

#### Domestic (US)
- Affected users: [구체적 숫자 — e.g., "16,000+ dealerships × 5 service advisors = 80,000+ people"]
- Market penetration of problem: [이 문제를 겪는 비율]
- $ value of the problem: [연간 손실 규모]

#### International
- Same problem exists in: [국가/지역 리스트]
- Why universal: [문화/산업 구조적으로 공통인 이유]
- Why NOT universal: [특정 시장에서만 존재하는 이유]
- Global TAM multiplier: [US-only vs global이면 몇 배]

#### Adjacent Problems (같은 유저가 겪는 다른 문제)
- [관련 문제 1] → expansion opportunity
- [관련 문제 2] → platform play potential
- [관련 문제 3] → vertical depth vs horizontal breadth

### Problem Longevity
- Is this problem growing or shrinking? [트렌드]
- Will AI eliminate this problem entirely? [자기잠식 리스크]
- Will regulation change the problem? [규제 영향]
- 10-year view: [이 문제가 10년 후에도 존재하는가]
```

### 3.3 Solution-Problem Fit (디자인 렌즈)

```markdown
### How the Product Solves It

#### Solution Mapping
| User Pain | Product Solution | Design Role in Solution |
|-----------|-----------------|------------------------|
| [Pain 1]  | [Feature/flow]  | [디자이너가 설계하는 부분] |
| [Pain 2]  | [Feature/flow]  | [디자이너가 설계하는 부분] |
| [Pain 3]  | [Feature/flow]  | [디자이너가 설계하는 부분] |

#### Solution Quality Assessment
- Does it eliminate the pain or reduce it? [제거 vs 완화]
- How much user behavior change required? [기존 습관 vs 새로운 워크플로우]
- Time to value: [유저가 가치를 느끼기까지 걸리는 시간]
- Aha moment: [유저가 "이거다" 느끼는 순간]

#### What's Still Unsolved (디자인 기회)
- Gap 1: [제품이 아직 못 풀고 있는 문제]
  → Design opportunity: [디자이너가 풀 수 있는 방향]
- Gap 2: [유저가 불만인 부분]
  → Design opportunity: [개선 방향]
- Gap 3: [경쟁사는 풀었지만 이 회사는 아직인 것]
  → Design opportunity: [차별화 방향]
```

### 3.4 Designer Impact Potential

```markdown
### Why This Problem Matters for a Designer

#### Design Leverage
- User touch frequency: [유저가 제품을 얼마나 자주 쓰는가]
  → High frequency = 디자인 결정의 누적 임팩트 큼
- Decision criticality: [제품 사용 순간이 얼마나 중요한가]
  → High stakes = 디자인 퀄리티가 비즈니스에 직결
- Emotional intensity: [유저가 감정적으로 얼마나 관여하는가]
  → High emotion = 디자인이 경험을 좌우

#### Design Problem Novelty
- Has this UX pattern been solved before? [선례 존재 여부]
- If novel: [디자이너가 새로 정의해야 하는 패턴]
- If solved: [기존 패턴 대비 이 회사의 차별점]
- Portfolio story: [이 경험이 포트폴리오에서 어떤 이야기가 되는가]

#### Design Scope
- End-to-end ownership: [유저 여정 전체를 디자인하는가]
- Surface area: [디자인할 화면/플로우가 얼마나 넓은가]
- Depth vs breadth: [한 문제를 깊이 파는가 vs 여러 문제를 넓게]
- Cross-functional weight: [디자인 결정이 엔지니어링/비즈니스에 미치는 영향]
```

### 3.5 Research Queries for Product Design Take

```
WebSearch: "[company name]" user reviews complaints
WebSearch: "[company name]" product review G2 Capterra
WebSearch: "[industry/domain]" biggest problems pain points
WebSearch: "[industry/domain]" market size global
WebSearch: "[industry/domain]" "[country]" (for international scale)
WebSearch: "[company name]" product demo walkthrough
WebSearch: "[company name]" case study customer story
WebSearch: "[competitor]" vs "[company]" user experience
WebSearch: "[industry]" software adoption rate
WebSearch: "[problem domain]" how people currently solve
```

---

## Phase 4: Upside Analysis (왜 이 회사가 잘될 수 있는가)

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

## Phase 5: Downside / Risk Analysis (왜 이 회사가 안 될 수 있는가)

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

## Phase 6: Competition Landscape Deep Dive

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

### vs Foundation Models (거대 LLM과의 관계)

> 거의 모든 AI 스타트업이 GPT, Claude, Gemini, Grok 위에 지어진다.
> 이 관계가 **공생**인지 **의존**인지 **경쟁**인지가 핵심.

- **Relationship type**:
  - 🔗 **Infrastructure dependency**: LLM API 위에 빌드 (대부분의 AI 스타트업)
  - 🤝 **Symbiosis**: LLM과 상호보완 (e.g., Cursor는 Claude/GPT가 좋을수록 좋아짐)
  - ⚔️ **Competition**: LLM 자체와 경쟁 (e.g., 검색 스타트업 vs Gemini 검색)
  - 🏗️ **Building the LLM**: 직접 파운데이션 모델 개발 (Anthropic, OpenAI, Mistral)

- **Key questions**:
  - 어떤 LLM에 의존하는가? (단일 vs 멀티 모델)
  - LLM provider가 같은 제품을 만들면? (e.g., ChatGPT가 코드 에디터 내장)
  - LLM 비용이 매출에서 차지하는 비중은? (마진 구조)
  - 모델 스위칭이 쉬운가? (OpenAI → Claude 전환 비용)
  - LLM 위에 쌓은 고유 가치는? (프롬프트 vs 데이터 vs 워크플로우 vs 도메인 지식)

- **Defensibility spectrum**:
  ```
  Weak ◀━━━━━━━━━━━━━━━━━━━━━━━━━━━▶ Strong

  Thin wrapper    Domain data    Workflow lock-in    Platform/Network
  (GPT wrapper)   (학습 데이터)   (전환 비용)          (생태계 효과)
  ```

- **LLM provider expansion risk**:
  - ChatGPT: [이 회사 영역에 진입할 가능성]
  - Claude: [이 회사 영역에 진입할 가능성]
  - Gemini: [이 회사 영역에 진입할 가능성]
  - Grok: [이 회사 영역에 진입할 가능성]

- **Designer implication**:
  - LLM 의존도가 높으면 → 디자인 차별화가 유일한 moat일 수 있음 (기회)
  - LLM 의존도가 높으면 → 제품이 하루아침에 obsolete될 수 있음 (리스크)
  - LLM 교체 시 → UX가 바뀌어야 하는가? (디자인 부채 리스크)

### Competitive Positioning
- [Company]'s unique angle: [다른 누구도 안 하는 것]
- Switching costs: [사용자가 바꾸기 얼마나 어려운가]
- Winner-take-all dynamics: [시장이 독점 구조인가]
- Likely outcome: [인수 / IPO / 시장 리더 / 니치 플레이어]
```

### 6.1 Competition Research Queries

```
WebSearch: "[company name]" vs "[competitor]"
WebSearch: "[company name]" alternatives competitors 2025
WebSearch: "[company name]" market share
WebSearch: "[product category]" market landscape 2025
WebSearch: "[company name]" competitive advantage moat
WebSearch: G2 "[company name]" vs "[competitor]"
```

---

## Phase 7: Articles & Reference Collection

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

### 7.1 Article Research Queries

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

## Phase 8: Designer's Decision Framework

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

## Phase 9: Writer Skill Integration (리서치 → 아티클)

> 딥 리서치 완료 후 자동으로 `/writer` 스킬을 호출하여 인사이트 아티클 초안 작성.
> **반드시 유저 검수 후 퍼블리싱.**

### 9.1 Auto-trigger Workflow

Phase 1-7 완료 + Report MD 저장 + Company Data 업데이트 후:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Deep Research Complete: [Company Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Report saved: src/data/deep-research/[company-id].md
Company data updated: src/data/companies/[company-id].ts

Now drafting an article based on the research...
```

### 9.2 Article Topic Auto-generation

딥 리서치 결과에서 가장 흥미로운 앵글을 자동 선택:

**Topic Selection Logic:**

```
1. If company has unique design team story:
   → "[Company]: What [N] designers are building at the [fastest-growing / most-funded] AI [category]"

2. If competition landscape is interesting:
   → "[Company] vs [Top Competitor]: Which AI [category] wins for designers?"

3. If business metrics are dramatic:
   → "Inside [Company]'s [Nx] growth: What it means for product designers"

4. If founder story is compelling:
   → "Why [Founder] left [Previous Company] to build [Company] — and why designers should care"

5. Default:
   → "[Company] Deep Dive: [N] reasons this [Stage] AI company is worth watching"
```

**Topic은 유저가 변경 가능.**

### 9.3 Writer Skill Invocation

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoking /writer skill...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suggested topic: "Inside Anthropic's 7x growth: What 50+ designers are building at the $183B AI lab"

Proceed with this topic? (or type a different topic)
```

유저가 토픽을 확인하거나 수정하면:

1. `/writer` 스킬이 딥 리서치 데이터를 input으로 받아 아티클 초안 작성
2. 리서치에서 수집한 데이터 포인트, 인사이트, 소스를 아티클에 자동 반영
3. Data-Driven Analytical voice로 작성
4. 회사 언급 시 `[Company Name](/company/id)` 형식 사용 → 자동으로 회사 로고 아이콘과 함께 렌더링

### 9.4 Writer Input: Deep Research Data

`/writer` 스킬에 넘기는 데이터:

```typescript
// Deep research에서 writer로 전달되는 컨텍스트
const writerContext = {
  // Company basics
  company: companyData,           // Full company object from DB

  // Deep research insights (Phase 1-8 핵심 발견)
  designTeamIntel: {
    teamSize: number,
    leadershipNames: string[],    // CPO, Head of Design
    seniorDesigners: string[],
    teamDynamics: string,         // Phase 1.4 assessment
  },

  businessAnalysis: {
    revenueModel: string,
    currentARR: string,
    growthRate: string,
    runway: string,
  },

  productDesignTake: {            // Phase 3 — NEW
    coreProblem: string,          // 핵심 유저 문제 한 문장
    painPointAnatomy: string[],   // Primary, secondary, emotional pain
    affectedUsers: string,        // 규모 — e.g., "80,000+ service advisors in US alone"
    isUniversal: boolean,         // US-only vs global problem
    globalScale: string,          // 국제 시장 규모
    solutionFit: string,         // 제품이 문제를 얼마나 잘 푸는가
    unsolved: string[],           // 아직 못 풀고 있는 문제 (디자인 기회)
    designLeverage: string,       // 디자인 결정의 임팩트 수준
    novelty: string,              // 새로운 UX 패턴인가
  },

  upsidePoints: string[],        // Phase 4 top insights
  downsidePoints: string[],       // Phase 5 top risks
  competitionInsights: string[],  // Phase 6 key findings
  keyArticles: Article[],         // Phase 7 collected sources
  decisionScore: number,          // Phase 8 final score

  // Suggested topic
  suggestedTopic: string,
};
```

### 9.5 User Review Gate

아티클 초안 완성 후 **반드시 유저에게 검수 요청**:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Article Draft Ready for Review
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Title: "Inside Anthropic's 7x Growth: What 50+ Designers Are Building"
Slug: inside-anthropic-growth-designers
Category: analysis
Reading time: 8 minutes
Companies featured: Anthropic (+ OpenAI, Cursor as comparison)

━━━━━━━━━━ DRAFT START ━━━━━━━━━━

[Full markdown article content]

━━━━━━━━━━ DRAFT END ━━━━━━━━━━━

Review Checklist:
- [ ] Factual accuracy (numbers, dates, names)
- [ ] Tone appropriate (data-driven, not promotional)
- [ ] No sensitive/private information exposed
- [ ] Designer perspective is clear
- [ ] Sources properly cited

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Options:
  1. Approve — Create article file and commit
  2. Edit   — Tell me what to change
  3. Rewrite — Generate with different angle/topic
  4. Skip   — Save research only, no article
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 9.6 Post-Approval Actions

유저가 **Approve** 하면:

```
1. Create article file:
   → src/data/articles/content/[slug].ts

2. Update articles index:
   → src/data/articles/index.ts

3. Link article in deep research report:
   → src/data/deep-research/[company-id].md에 아티클 링크 추가

4. Update company tracking notes:
   → "Deep research article published: /insights/[slug]"

5. Commit all changes:
   → git add + commit

6. Show verification steps:
   → npm run build
   → npm run dev → /insights/[slug]
   → Review on localhost before deploy
```

유저가 **Edit** 하면:
- 유저의 피드백을 반영하여 수정
- 수정된 초안을 다시 Review Gate로

유저가 **Skip** 하면:
- 아티클 없이 딥 리서치만 저장
- "Article generation skipped by user" 노트 추가

### 9.7 Article Quality from Deep Research

딥 리서치 기반 아티클이 일반 `/writer` 아티클보다 높은 퀄리티를 가져야 하는 이유:

| 일반 /writer | Deep Research → /writer |
|---|---|
| DB 데이터만 참조 | DB + 딥 리서치 전체 결과 참조 |
| 공개 메트릭 위주 | 디자인팀 인텔, 비하인드 인사이트 포함 |
| 표면적 분석 | Upside/Downside 데이터 기반 심층 분석 |
| 일반적 디자이너 관점 | 특정 회사에 대한 구체적 디자이너 인사이트 |
| 소스 3-5개 | 소스 10-20개 (리서치에서 수집) |
| 회사 링크만 | 회사 로고 아이콘과 함께 링크 렌더링 |

---

## Execution Flow

```mermaid
graph TD
  A[/company-deep-research Company] --> B{Company exists in DB?}
  B -->|No| C[Run /company-researcher first]
  B -->|Yes| D[Phase 1: Design Team Intel]
  D --> E[Phase 2: VC Business Analysis]
  E --> F[Phase 3: Product Design Take]
  F --> G[Phase 4: Upside Analysis]
  G --> H[Phase 5: Downside/Risk Analysis]
  H --> I[Phase 6: Competition Deep Dive]
  I --> J[Phase 7: Articles & References]
  J --> K[Phase 8: Decision Framework]
  K --> L[Generate Report MD]
  L --> M[Update Company Data]
  M --> N[Commit & Save]
  N --> O[Phase 9: Writer Skill — Draft Article]
  O --> P{User Review}
  P -->|Approve| Q[Publish Article]
  P -->|Edit| R[Revise Draft]
  P -->|Skip| S[Done without article]
  R --> P
```

---

## Output Format

### Report Length Constraint

> **Target: 10분 이내 읽기 (~2,500 words / 한글 ~4,000자)**

9개 Phase에서 수집한 정보는 방대하지만, 최종 리포트는 **핵심만 압축**.
리서치 과정에서 수집한 raw data는 내부 참고용이고, 리포트는 의사결정용.

**Section별 길이 가이드:**

| Section | Target | 원칙 |
|---------|--------|------|
| Executive Summary | 3-5 문장 | 읽고 바로 판단 가능해야 |
| Design Team Intel | 리더십 3-5명 + 팀 규모 요약 | 전원 나열 X, 핵심 인물만 |
| Business Model | 5-8 bullet points | 숫자 위주, 설명 최소 |
| Product Design Take | 10-15 lines | 핵심 문제 + 규모 + 디자인 기회 |
| Upside | 5 bullet points | 가장 강한 근거만 |
| Downside | 5 bullet points | 가장 현실적 리스크만 |
| Competition + LLM | 테이블 + 3-5 lines | 테이블로 압축, 서술 최소 |
| Articles | 링크 리스트 | 제목 + 한 줄 요약 |
| Decision Framework | 점수표 + 1 paragraph verdict | 숫자로 판단 |

**압축 원칙:**
- 같은 말 반복 금지 (Upside에 쓴 내용을 Decision에서 또 풀지 않음)
- Bullet point > 문단 (읽는 시간 절약)
- 데이터 포인트는 숫자로, 분석은 한 줄로
- "자세한 내용은 Phase X 참고" 같은 내부 참조 금지 — 리포트 자체로 완결

**Full raw data는 별도 보관:**
- 디자이너 전원 LinkedIn 리스트 → report 하단 appendix
- 수집한 아티클 전체 → Sources 섹션
- 상세 경쟁 분석 → 필요 시 별도 파일

### Report File

Path: `src/data/deep-research/[company-id].md`

```markdown
# [Company Name] — Deep Research Report

> Generated: [date]
> Tier: [0 or 1]
> Overall Score: [X.X/10]
> Reading time: ~8-10 min

---

## Executive Summary
[3-5 sentences: 이 회사에 대한 최종 판단을 한 문단으로]

## Design Team Intelligence
[핵심 리더십 + 팀 규모 + 내 fit 한 줄 평가]

## Business Model
[Revenue model + 핵심 메트릭 bullet points]

## Product Design Take
[핵심 문제 한 문장 → 규모 → 디자인 기회 3개]

## Upside / Downside
[각 5 bullet points — 양쪽을 나란히 비교]

## Competition & LLM Position
[경쟁사 테이블 + Foundation model 관계 한 줄]

## Key References
[핵심 아티클 5-10개 링크]

## Decision
[점수표 + Verdict 1 paragraph + Action items]

---

## Appendix
- Full design team LinkedIn list
- All sources

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
  - WebSearch: User pain points & reviews

Round 2 (Parallel):
  - WebFetch: Top designer LinkedIn profiles
  - WebSearch: Founder interviews
  - WebSearch: Culture insights
  - WebSearch: Problem scale & international market

Round 3 (Parallel):
  - WebFetch: Key articles
  - WebSearch: Product demos & case studies
  - WebSearch: Current workarounds & adjacent problems

Round 4:
  - Compile Product Design Take (Phase 3)
  - Compile Decision Framework (Phase 8)
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

### Full Pipeline

```
1. /job-scraper         → Open roles 수집
2. /company-researcher  → 기본 데이터 수집
3. /company-deep-research → 딥 리서치 (이 스킬)
   ↓ (auto-trigger)
4. /writer              → 리서치 기반 아티클 초안 생성
   ↓ (user review gate)
5. Publish              → 유저 승인 후 아티클 파일 생성 & 커밋
```

### Pipeline Rules

- **Phase 1-8**: 자동 실행, 유저 개입 없음
- **Phase 9 (Writer)**: 토픽 확인 → 초안 생성 → **유저 검수 필수**
- **Publish**: 유저가 Approve 해야만 아티클 파일 생성
- **Skip 가능**: 유저가 아티클 없이 리서치만 저장 가능

### Data Flow

```
company DB → deep research phases → research report (.md)
                                  → company data update (.ts)
                                  → writer context → article draft
                                                   → [USER REVIEW]
                                                   → article file (.ts) + index update
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
