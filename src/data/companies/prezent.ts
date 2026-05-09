import { Company } from '../types';

export const prezent: Company = {
  id: 'prezent',
  name: 'Prezent',
  description: 'AI-powered enterprise business communication platform that helps teams create, align, and deliver presentations at scale. Combines AI slide generation with brand governance and structured storytelling frameworks.',
  website: 'https://www.prezent.ai',
  screenshot: '/screenshots/prezent-screenshot.png',
  headquarters: 'Los Altos, CA',
  remote: 'Hybrid',

  // OG Image
  ogImage: '/og-images/prezent-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant', 'image-generation'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['productivity', 'other'],

  // Business
  stage: 'Series C',
  valuation: '$400M (Oct 2025)',
  totalFunding: '$81.6M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3.2M', date: '2020', leadInvestors: ['Emergent Ventures'] },
    { stage: 'Series A', amount: '$6.1M', date: '2021', leadInvestors: ['WestWave Capital'] },
    { stage: 'Series B', amount: '$20M', date: '2023', leadInvestors: ['Zoom Ventures', 'True Global Ventures'] },
    { stage: 'Series B', amount: '$20M', date: '2025-03', leadInvestors: ['Unknown'] },
    { stage: 'Series C', amount: '$30M', date: '2025-10', valuation: '$400M', leadInvestors: ['Multiplier Capital', 'Greycroft', 'Nomura Strategic Ventures'] },
  ],
  revenue: '>$10M ARR (as of March 2025)',
  growth: '100%+ increase in users in 2024; 200%+ increase in customer cost savings; record revenue in 2024',
  runway: 'Strong (Series C Oct 2025)',
  customers: '100+ Fortune 2000 companies',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '>$10M ARR with record 2024 growth',
    userGrowth: '100%+ user increase in 2024; 70+ NPS',
    signals: [
      '$30M Series C at $400M valuation (Oct 2025)',
      'Acquisition of Prezentium to expand into life sciences vertical',
      '$20M Series B2 raised March 2025',
      '100+ Fortune 2000 customers',
      'Zoom Ventures and True Global Ventures as investors (strategic backing)',
    ],
    tam: '$23B+ global presentation software and business communication market (estimated)',
    marketShare: '<0.1% of TAM = large upside potential if enterprise adoption accelerates',
    ceiling: 'Early innings in enterprise communication automation; significant white space in Fortune 500 standardization',
    tailwinds: [
      'Enterprise demand for AI-generated, brand-compliant communications at scale',
      'Remote and hybrid work driving need for async visual communication',
      'GenAI adoption accelerating across Fortune 500 productivity workflows',
      'Structured storytelling / consulting-style communication frameworks gaining traction',
    ],
    headwinds: [
      'Microsoft Copilot deeply embedded in PowerPoint and existing enterprise suites',
      'Google Slides/Workspace bundled with free AI features for many enterprises',
      'Canva and Beautiful.ai aggressively expanding enterprise tier',
      'Commoditization risk as AI slide generation becomes table-stakes',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Enterprise brand governance, structured storytelling templates, and deep integration with Fortune 500 brand systems create moderate switching costs.',
  },

  // Competition
  competitors: [
    {
      name: 'Microsoft Copilot (PowerPoint)',
      description: 'AI in PowerPoint via Microsoft 365 Copilot.',
      whyTheyWin: 'Bundled into existing enterprise M365 licenses; zero adoption friction for IT and procurement.',
    },
    {
      name: 'Canva Enterprise',
      description: 'Design platform expanding into enterprise brand management and AI presentations.',
      whyTheyWin: 'Consumer brand recognition, broad template library, and fast-moving AI roadmap.',
    },
    {
      name: 'Beautiful.ai',
      description: 'AI presentation builder focused on smart templates and design automation.',
      whyTheyWin: 'Simple, polished output with faster individual user experience.',
    },
    {
      name: 'Pitch',
      description: 'Modern presentation tool with real-time collaboration and brand kits.',
      whyTheyWin: 'Strong brand aesthetics and team collaboration workflows.',
    },
  ],
  marketPosition: 'Enterprise business communication AI with brand governance and structured storytelling',
  moat: [
    'Enterprise brand compliance layer on top of AI generation',
    'Structured storytelling frameworks (consulting-style narratives)',
    'Overnight presentation services (Prezentium acquisition) for high-touch enterprise use cases',
  ],
  vsGiants: 'Focused on enterprise brand governance and communication standards vs. general-purpose AI generation in PowerPoint or Canva.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI generation, personalization, and storytelling assistance are core differentiators. The product existed pre-AI but AI is now the primary value driver.',
  aiDesignChallenges: [
    'Designing AI-generated slide output that feels brand-compliant and trustworthy to enterprise teams',
    'Balancing AI automation with user control (when to accept vs. override AI choices)',
    'Structuring storytelling AI: guiding users from raw ideas to narrative frameworks',
    'Enterprise multi-user workflows: version control, approval flows, brand review',
    'Onboarding large enterprise teams to AI tools with significant change management friction',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Rajat Mishra',
      role: 'Founder & CEO',
      background: 'Former SVP at Cisco Systems ($14B CX business, 1000+ team). Previously at McKinsey, Mu Sigma, Microsoft. MBA from Wharton (Director\'s List); BSc Computer Science from IIT (Dean\'s List).',
    },
  ],
  whyBuilding: 'Observed how business professionals waste enormous time on presentations vs. actual decision-making. Mission is to eliminate the "slide tax" on enterprise productivity by making structured business communication effortless with AI.',
  beliefs: [
    'Business communication should be as easy as having a conversation',
    'Enterprise teams need AI that understands brand standards, not just generates slides',
    'Storytelling structure (not just visual design) is the core problem to solve',
    'Services and software must combine to serve the Fortune 500',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Series C at $400M valuation (Oct 2025) — clear investor conviction',
    'Founder has deep enterprise credibility (Cisco SVP, McKinsey, Wharton)',
    'Strategic investors: Zoom Ventures, Nomura (distribution partnerships possible)',
    '100+ Fortune 2000 customers validates enterprise go-to-market',
    'Acquisition strategy (Prezentium) shows ambition beyond SaaS-only model',
  ],
  redFlags: [
    'Microsoft Copilot bundled in M365 is existential competitive threat',
    'Acquisition of founder\'s own company (Prezentium) raises governance questions',
    '$400M valuation on >$10M ARR implies ~40x multiple — high pressure to grow',
    'Life sciences vertical focus (via acquisition) may narrow addressable market',
    'No public information on design team leadership or Head of Design',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company size 51-200 per LinkedIn)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI generation controls: prompt design, iteration, regeneration flows',
        'Brand governance rules and compliance guardrails in the generation pipeline',
        'Structured storytelling wizard: guiding from brief to narrative framework',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI output quality review: how users accept, reject, or refine suggestions',
        'Brand compliance scoring and feedback',
        'Cross-team presentation review and approval workflows',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Slide editor and AI generation panel UX',
        'Template and brand asset management library',
        'Enterprise admin panel for brand governance settings',
        'Presentation sharing, permissions, and analytics dashboards',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise business professionals at Fortune 2000 companies who create presentations regularly (strategy, sales, marketing, consulting teams)',
    secondary: 'Enterprise design and brand teams responsible for maintaining brand standards across large organizations',
  },
  userProblems: [
    'Creating polished, brand-compliant presentations takes hours or days — stealing time from actual work',
    'Brand inconsistency across large teams damages perception in client and executive presentations',
    'Individual contributors lack the storytelling structure skills that consultants or senior execs have',
    'Existing AI tools (Copilot) produce visually generic output without enterprise brand integration',
    'High-stakes presentations (board decks, client pitches) still require human experts — no scalable solution',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Interesting AI generation + enterprise governance design challenge',
      'Series C momentum with enterprise traction validates the market',
      'Storytelling-as-a-product is a genuinely hard UX problem',
    ],
    whyNot: [
      'Microsoft Copilot is a near-certain long-term threat — strategic risk is high',
      'Acquisition governance concerns (founder bought own company)',
      'Presentation software is not the most cutting-edge AI design domain',
      'No visible head of design — unclear design culture or leverage',
    ],
    nextActions: [
      'Check LinkedIn for design team composition and any open designer roles',
      'Explore the live product to assess design quality',
      'Monitor for Microsoft Copilot competitive response',
    ],
  },

  // Meta
  lastUpdated: '2026-05-06T00:00:00',
  sources: [
    { title: 'Prezent raises $30M to acquire AI services firms', url: 'https://techcrunch.com/2025/10/10/prezent-raises-30-million-to-acquire-ai-services-firms-starting-with-founders-other-company/' },
    { title: 'Prezent raises $20M to build AI for slide decks', url: 'https://techcrunch.com/2025/03/19/prezent-raises-20m-to-build-ai-for-slide-decks/' },
    { title: 'Prezent Crunchbase Profile', url: 'https://www.crunchbase.com/organization/o-prezent-ai' },
    { title: 'Prezent Official Website', url: 'https://www.prezent.ai' },
    { title: 'Prezent Record Revenue 2024 Press Release', url: 'https://www.prnewswire.com/news-releases/prezent-sets-new-milestones-with-record-revenue-in-2024-unveils-ai-driven-vision-for-enterprise-communication-and-secures-backing-from-new-investors-true-global-ventures-and-zoom-ventures-to-accelerate-hyper-growth-in-2025-302325247.html' },
    { title: 'Rajat Mishra - Founder & CEO Profile', url: 'https://www.prezent.ai/team-members/rajat-mishra' },
    { title: 'Prezent $30M Funding - The AI Insider', url: 'https://theaiinsider.tech/2025/10/23/prezent-announces-30m-to-expand-its-ai-powered-enterprise-presentation-platform-and-acquires-prezentium/' },
  ],
};
