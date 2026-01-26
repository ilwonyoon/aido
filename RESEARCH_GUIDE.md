# Company Research Guide for AIDO

**목적**: Product Designer 관점에서 AI-native 스타트업을 평가하기 위한 데이터 수집

---

## 1. 리서치 체크리스트

### Phase 1: 기본 정보 (필수)
- [ ] 공식 웹사이트 확인
- [ ] Crunchbase/PitchBook에서 funding 정보
- [ ] LinkedIn에서 팀 규모, 디자인팀 확인
- [ ] 최근 뉴스 검색 (6개월 이내)
- [ ] Careers page에서 Product Designer 역할 확인

### Phase 2: Business Health
- [ ] **Funding History**: 모든 라운드 (stage, amount, date, valuation, lead investors)
- [ ] **Revenue/ARR**: 공식 발표 또는 신뢰할 수 있는 추정치
- [ ] **Growth Metrics**: YoY 성장률, 유저/고객 수
- [ ] **TAM**: Total Addressable Market 추정 (시장 규모)
- [ ] **Competitors**: 최소 3개, 각각 "왜 이기는지" 명시
- [ ] **Moat**: 경쟁 우위 요소

### Phase 3: Growth Potential (중요!)
- [ ] **Growth Stage**: hypergrowth / high-growth / steady / plateau / declining
- [ ] **Revenue Growth**: 구체적 숫자 (예: "3x YoY ($50M → $150M)")
- [ ] **Signals**: 최근 6개월 내 성장 신호 (대규모 채용, 시장 확장 등)
- [ ] **TAM & Market Share**: "0.5% of $100B TAM = 200x upside" 식으로 계산
- [ ] **Ceiling**: "Early innings" vs "Approaching saturation" 판단
- [ ] **Tailwinds**: 회사에 유리한 시장 트렌드 3-5개
- [ ] **Headwinds**: 회사가 직면한 리스크/도전 3-5개
- [ ] **Moat Type**: network-effects / data-flywheel / switching-costs / brand / technology / none
- [ ] **Moat Strength**: 구체적 설명

### Phase 4: Founders & Vision
- [ ] **Founders**: 이름, 역할, 배경 (LinkedIn, 인터뷰)
- [ ] **Why Building**: "왜 이걸 만드는가" (블로그, 팟캐스트, 인터뷰에서 인용)
- [ ] **Beliefs**: 핵심 믿음 3-5개 (직접 인용 선호)
- [ ] **Design Philosophy**: 디자인에 대한 관점 (있으면)
- [ ] **Green Flags**: 긍정적 신호 (예: "Founder는 전 Apple designer")
- [ ] **Red Flags**: 부정적 신호 (예: "Glassdoor 2.5/5", "최근 layoff")

### Phase 5: Design Opportunity
- [ ] **Design Team**: CPO, Head of Design, 팀 규모
- [ ] **Open Roles**: Product Designer 역할 (제목, 위치, 보상, JD 요약)
- [ ] **Designer Links**: 팀 디자이너들의 Twitter, Substack, 블로그
- [ ] **Product Stage**: 0→1 / 1→10 / 10→100 판단
- [ ] **Work Type**: Logic/Behavior, Evaluation, Interface 각각 High/Medium/Low + 구체적 태스크

### Phase 6: AI-Native Level
- [ ] **Level 판단**: 1-4 (아래 기준 참고)
- [ ] **AI Design Challenges**: 이 회사 Product Designer가 직면할 AI 특유의 디자인 문제

---

## 2. AI-Native Level 기준

| Level | 정의 | 예시 |
|-------|------|------|
| **Level 4** | AI IS the product | Anthropic (Claude), OpenAI (ChatGPT), Cursor |
| **Level 3** | AI is core differentiator | Perplexity (AI search), Notion AI, Replit (AI coding) |
| **Level 2** | AI is major feature | Figma (AI design tools), Linear (AI issue management) |
| **Level 1** | AI is minor feature | Canva (Magic tools), Superhuman (email AI) |

**판단 기준**: "AI를 제거하면 제품이 존재할 수 있나?"
- Level 4: 불가능
- Level 3: 가능하지만 핵심 가치 상실
- Level 2: 가능하지만 경쟁력 약화
- Level 1: 가능하고 여전히 유용

---

## 3. 작성 톤 & 스타일

### ✅ DO
- **간결하게**: 불필요한 형용사 제거 ("혁신적인", "획기적인" 등 금지)
- **구체적으로**: "빠른 성장" → "3x YoY ($50M → $150M ARR)"
- **디자이너 관점**: "이 회사에 들어가면 뭘 디자인하나?"에 초점
- **출처 명시**: 추정치는 "(estimated)", 불확실하면 "Unknown"
- **직접 인용**: 파운더 말은 가능한 원문 그대로

### ❌ DON'T
- 과장하지 말 것 ("game-changing", "revolutionary")
- 마케팅 문구 그대로 복사 금지
- 불확실한 정보를 확실한 것처럼 쓰지 말 것
- 너무 짧게 쓰지 말 것 (최소한의 맥락 필요)

---

## 4. 리서치 소스 우선순위

### Tier 1 (가장 신뢰할 수 있는 소스)
1. **공식 블로그/뉴스**: 회사가 직접 발표한 내용
2. **Crunchbase/PitchBook**: Funding 정보
3. **LinkedIn**: 팀 규모, 디자이너 프로필
4. **Careers page**: Open roles, JD

### Tier 2 (검증 필요)
5. **TechCrunch, The Information**: Tech 뉴스
6. **Podcast/인터뷰**: Founder의 직접 발언
7. **Glassdoor/Blind**: 문화 인사이트 (편향 주의)

### Tier 3 (참고만)
8. **Reddit, HN**: 커뮤니티 의견
9. **추정치 사이트**: 조심히 사용, 출처 명시

---

## 5. 예시: Anthropic (참고용)

```typescript
{
  id: 'anthropic',
  name: 'Anthropic',
  description: 'AI safety company building Claude, a helpful, harmless, and honest AI assistant.',
  website: 'https://www.anthropic.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  // Business
  stage: 'Series F',
  valuation: '$183B (Oct 2025)',
  totalFunding: '$27B+',
  fundingHistory: [
    {
      stage: 'Series F',
      amount: '$4B',
      date: '2025-10',
      valuation: '$183B',
      leadInvestors: ['Amazon', 'Google'],
    },
    // ... more rounds
  ],
  revenue: '$7B ARR (Oct 2025)',
  growth: '7x YoY',
  runway: 'Strong — $4B latest round',

  // Growth & Potential
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: "7x YoY ($1B ARR → $7B ARR)",
    userGrowth: "300,000+ B2B customers, Claude Code 10x growth in 3 months",
    signals: [
      "$183B valuation (10x from $18B in 18 months)",
      "$7B ARR (Oct 2025), targeting breakeven 2027",
      "#1 Enterprise LLM market share (32%)",
      "Claude Code: $500M+ ARR in first 3 months",
    ],
    tam: "$500B+ (AI for all knowledge work + software development)",
    marketShare: "~1.4% of TAM = 70x+ upside potential",
    ceiling: "Early innings: AI assistant market just forming",
    tailwinds: [
      "AI coding explosion driving Claude Code adoption",
      "Enterprise safety concerns favor Anthropic over OpenAI",
      "Developer platform wins (Cursor, Replit default to Claude)",
    ],
    headwinds: [
      "OpenAI's ChatGPT brand dominance in consumer",
      "Google's unlimited compute and distribution",
      "Meta's open-source Llama capturing developer mindshare",
    ],
    moatType: 'data-flywheel',
    moatStrength: "Strong: 300K+ enterprises + developer platform adoption",
  },

  // Competition
  competitors: [
    {
      name: 'OpenAI',
      description: 'ChatGPT and GPT-4',
      whyTheyWin: 'Brand recognition, developer ecosystem, ChatGPT consumer dominance',
    },
    // ... more
  ],
  moat: [
    'Constitutional AI (safety moat)',
    'Enterprise trust and compliance focus',
    '300,000+ business customers (data flywheel)',
  ],

  // AI-Native Level
  aiNativeLevel: 4,
  aiNativeLevelDescription: 'AI IS the product. Anthropic builds Claude LLM. No Anthropic without AI.',
  aiDesignChallenges: [
    'Conversation design: How to make AI feel helpful yet honest about limitations',
    'Evaluation design: Measuring safety, helpfulness, harmlessness',
    'Complex workflows: Multi-turn reasoning, long context (200K tokens)',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dario Amodei',
      role: 'CEO & Co-founder',
      background: 'Former VP of Research at OpenAI. Led GPT-2, GPT-3 safety work.',
    },
    {
      name: 'Daniela Amodei',
      role: 'President & Co-founder',
      background: 'Former VP of Operations at OpenAI.',
    },
  ],
  whyBuilding: 'Left OpenAI over safety disagreements. Believe AI must be built with safety-first approach from day one, not bolted on later.',
  beliefs: [
    'Constitutional AI: AI systems should be helpful, harmless, and honest',
    'Scaling hypothesis: Intelligence emerges from scale + safety alignment',
    'Interpretability matters: We must understand how AI thinks',
  ],
  designPhilosophy: 'Product design = conversation design. Every UI decision affects how users form mental models of AI capabilities and limitations.',

  greenFlags: [
    'Dario/Daniela led OpenAI safety → deep AI expertise',
    'Hypergrowth: $7B ARR, 10x in 12 months',
    '#1 in enterprise AI (beats OpenAI)',
  ],
  redFlags: [
    'Burn rate: ~$2.7B/year (need continuous fundraising)',
    'OpenAI has ChatGPT brand moat in consumer',
    'Compute costs = existential risk if revenue slows',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '50+ designers (estimated)',
    designHead: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Constitutional AI behavior rules and constraints',
        'Multi-turn conversation flow and context management',
        'Tool use and function calling logic',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Human feedback loops for RLHF (Reinforcement Learning from Human Feedback)',
        'Safety metrics and red-teaming workflows',
        'A/B testing conversational AI responses',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Chat interface for Claude.ai',
        'Enterprise admin dashboards and usage analytics',
        'Developer console and API documentation',
      ],
    },
  },
  productStage: '1→10',

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer, Claude',
      location: 'San Francisco, Hybrid',
      url: 'https://www.anthropic.com/careers',
      team: 'Claude Product',
      level: 'Senior',
      compensation: '$180K-$250K + Equity',
      aboutRole: 'Design the future of AI assistants. Shape how millions interact with Claude.',
      responsibilities: [
        'Design conversational AI experiences for Claude.ai',
        'Create evaluation interfaces for RLHF and safety testing',
        'Collaborate with researchers on AI behavior design',
      ],
      requirements: [
        '5+ years product design experience',
        'Portfolio showing complex AI/ML product work',
        'Figma expert, prototyping skills',
      ],
      preferred: [
        'Experience designing chat/conversation interfaces',
        'Understanding of LLMs and AI safety',
      ],
      whyInteresting: 'You'll design the interface for the #1 enterprise AI assistant, working directly with AI researchers on safety-critical decisions.',
    },
  ],

  // Designer Links
  designerLinks: [
    // (Currently none known, but would list Twitter, Substack, etc.)
  ],

  // My Tracking
  tracking: {
    status: 'interested',
    fitScore: 9,
    whyJoin: [
      'Hypergrowth: $7B ARR, 10x in 12 months',
      'Design AI behavior = most impactful design work possible',
      '#1 enterprise LLM (beats OpenAI)',
      'Safety-first culture (ex-OpenAI safety team)',
    ],
    whyNot: [
      'Burn rate risk: $2.7B/year needs continuous fundraising',
      'Competitive pressure from OpenAI, Google',
    ],
    nextActions: [
      'Check careers page weekly for Product Designer roles',
      'Follow Anthropic blog for product updates',
    ],
  },

  lastUpdated: '2025-01-26',
  sources: [
    { title: 'Anthropic $4B Series F - TechCrunch', url: 'https://...' },
    { title: 'Anthropic careers', url: 'https://www.anthropic.com/careers' },
  ],
}
```

---

## 6. 우선순위 설정 기준 (Product Designer 관점)

### High Priority
- AI-native Level 3-4
- Product stage: 0→1 or 1→10
- Open Product Designer roles
- Design-heavy product (conversation, workflow, evaluation)
- Hypergrowth or high-growth stage
- $100M+ funding

### Medium Priority
- AI-native Level 2-3
- Product stage: 10→100
- No open roles but strong design team
- Steady growth
- $50M+ funding

### Low Priority
- AI-native Level 1-2
- Too niche (single industry B2B)
- Declining or plateau
- Infrastructure/developer tools (less design-heavy)

---

## 7. 작업 완료 체크리스트

완료 후 반드시 확인:
- [ ] 모든 필수 필드 작성됨
- [ ] growthMetrics 완전히 채워짐 (Unknown 최소화)
- [ ] whyJoin/whyNot가 디자이너 관점
- [ ] 출처(sources) 최소 3개 이상
- [ ] TypeScript 타입 에러 없음
- [ ] 기존 회사들과 톤/스타일 일치
