import { Company } from '../types';

export const sierra: Company = {
  id: 'sierra',
  name: 'Sierra',
  description:
    'AI agent platform for enterprise customer experience — building a constellation-of-models architecture that deploys conversational AI agents for support, sales, and service at Fortune 500 scale.',
  website: 'https://www.sierra.ai/',
  screenshot: '/screenshots/sierra-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // OG Image
  ogImage: '/og-images/sierra-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['enterprise'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: '$10B (Sep 2025)',
  totalFunding: '$810M+',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$110M',
      date: '2024-02',
      leadInvestors: ['Sequoia Capital', 'Benchmark'],
    },
    {
      stage: 'Series A',
      amount: '$175M',
      date: '2024-10',
      valuation: '$4.5B',
      leadInvestors: ['Greenoaks Capital'],
    },
    {
      stage: 'Series C',
      amount: '$350M',
      date: '2025-09',
      valuation: '$10B',
      leadInvestors: ['Greenoaks Capital', 'ICONIQ Growth'],
    },
  ],
  revenue: '$100M ARR (Nov 2025)',
  growth: '$0 → $100M ARR in 7 quarters',
  runway: 'Well-capitalized ($810M+ raised)',
  customers:
    'Deliveroo, Discord, Ramp, Rivian, SoFi, Sonos, Tubi, Wayfair, ADT, Bissell, Safelite, Vans, Cigna, SiriusXM, DIRECTV, Rocket Mortgage, HelloFresh, WeightWatchers. 50% of customers have revenue >$1B; 20% have revenue >$10B.',

  // Growth & Potential
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '$0 → $100M ARR in 21 months (one of the fastest in enterprise software history)',
    userGrowth: 'Hundreds of millions of conversations powered',
    signals: [
      '$100M ARR reached in 7 quarters — fastest enterprise SaaS in recent history',
      '$10B valuation at Series C (Sep 2025)',
      '95%+ of Black Friday shoppers served by Sierra customers',
      '50%+ of families in healthcare use Sierra customer services',
      'Rocket Mortgage: 4x faster conversion rates with Sierra Digital Assistant',
    ],
    tam: '$400B+ (global customer experience and contact center market)',
    marketShare: 'Emerging leader in AI-native customer experience',
    ceiling: 'Massive: AI agents are replacing the $400B+ global contact center industry. Sierra is positioned as the enterprise standard.',
    tailwinds: [
      'Enterprises desperately seeking AI-driven cost reduction in customer support',
      'Voice AI reaching production quality — Sierra launched voice agents',
      'AI agents becoming table stakes for enterprise CX',
      'Founder pedigree attracts top-tier enterprise customers',
    ],
    headwinds: [
      'Intense competition from Intercom Fin, Ada, Decagon, Zendesk AI',
      'Enterprise procurement cycles are long and complex',
      'Dependence on third-party LLMs (OpenAI, Anthropic, Meta)',
      'Trust and reliability bar extremely high for customer-facing AI',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Strong: constellation-of-models architecture creates switching costs + enterprise relationships from founder network + $100M ARR proves product-market fit',
  },

  // Competition
  competitors: [
    {
      name: 'Intercom (Fin)',
      description: 'Customer messaging platform with AI-first support agent Fin',
      whyTheyWin: 'Massive existing customer base, integrated messaging platform, strong self-serve motion',
    },
    {
      name: 'Decagon',
      description: 'AI customer support platform with Agent Operating Procedures (AOPs)',
      whyTheyWin: 'Developer-friendly natural language agent configuration, fast deployment',
    },
    {
      name: 'Ada',
      description: 'AI-powered customer service automation platform',
      whyTheyWin: 'Early mover in AI CX automation, strong enterprise adoption in regulated industries',
    },
  ],
  marketPosition: 'The highest-valued pure-play AI customer experience company, targeting Fortune 500 enterprises with a unique multi-model orchestration architecture.',
  moat: [
    'Constellation-of-models architecture: 15+ models orchestrated for optimal task-specific performance',
    'Supervision layer with real-time guardrails — "Jiminy Cricket" model watching every agent response',
    'Founder network: Bret Taylor (OpenAI board chair, ex-Salesforce co-CEO) opens doors to Fortune 500',
    '$100M ARR in 21 months proves enterprise product-market fit',
  ],
  vsGiants: 'Salesforce Agentforce and Google CCAI are large-platform plays with generalist AI. Sierra wins on specialization: purpose-built for CX with deeper multi-model orchestration, faster deployment, and founder-level enterprise relationships that compete directly with the incumbents who built those platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI IS the product. Sierra\'s entire platform is built around deploying AI agents for customer experience. The constellation-of-models architecture orchestrates 15+ LLMs with a supervision layer — there is no product without AI.',
  aiDesignChallenges: [
    'Designing trust and transparency for AI agents handling real customer interactions at Fortune 500 scale',
    'Multi-stakeholder UX: end consumers, CX managers, and developers all need different interfaces',
    'Conversation design for voice and text agents that feel human while maintaining brand voice',
    'Supervision and guardrail visualization: showing CX teams what the AI is doing and why',
    'Escalation and human handoff UX that feels seamless, not broken',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Bret Taylor',
      role: 'Co-Founder & CEO',
      background: 'Co-creator of Google Maps. Founded FriendFeed (acquired by Facebook, became CTO). Founded Quip (acquired by Salesforce, became co-CEO). Chairman of the Board at OpenAI. Former Twitter board chair. One of the most accomplished product builders in Silicon Valley history.',
    },
    {
      name: 'Clay Bavor',
      role: 'Co-Founder & President',
      background: 'Led product and design teams for Google Workspace (Gmail, Docs, Drive). VP of Google Labs and Google AR/VR. 18 years at Google leading some of its most impactful product experiences.',
    },
  ],
  whyBuilding:
    'Taylor and Bavor reconnected at a Mediterranean restaurant in Palo Alto after Taylor left Salesforce. Their thesis: AI agents would transform enterprise software, and the biggest opportunity was enabling every company — not just tech companies — to deploy AI successfully. "The greatest opportunity we have is to enable every company, no matter how sophisticated or technical, to deploy [AI] successfully."',
  beliefs: [
    'AI agents should feel human, not robotic — brand voice and personality matter',
    'Safety is a systems-level problem: no single model is reliable enough alone',
    'Enterprises need specialized AI platforms, not general-purpose chatbots',
    'The best technology company for parents — family as a core value',
  ],
  designPhilosophy: 'Clay Bavor led product and design at Google Workspace for 18 years. Sierra emphasizes "Craftsmanship" as a core value. The Product Designer JD states: "Visual design is the baseline" with end-to-end craftsmanship from direction to pixel-perfect execution.',
  greenFlags: [
    '$100M ARR in 21 months — one of the fastest enterprise SaaS companies ever',
    '$10B valuation with $810M+ raised from Sequoia, Benchmark, Greenoaks, ICONIQ',
    'Bret Taylor is arguably the most accomplished founder in enterprise AI right now',
    'Clay Bavor brings deep product/design DNA from Google Workspace',
    'Active hiring for Product Design team — 2 design roles open (Product Designer + Voice Designer)',
    'Core values include "Craftsmanship" — design-forward culture signal',
    'Fortune 500 customer base: Deliveroo, Discord, Ramp, Rivian, SoFi, Sonos, Cigna',
  ],
  redFlags: [
    'No proprietary LLM — dependent on OpenAI, Anthropic, Meta models',
    'On-site only (San Francisco) — no remote flexibility',
    'Intensely competitive space: Intercom, Ada, Decagon, Salesforce, Google all competing',
    'Design team size/leadership not publicly visible — unclear design org maturity',
    'Enterprise-heavy sales means slower iteration cycles vs consumer products',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~350-550 employees total. Design team size not publicly disclosed. Hiring 2 Product Design roles + 3 Brand Design roles.',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent workflow configuration and behavior design',
        'Constellation-of-models orchestration: designing how 15+ models work together',
        'Supervision and guardrail design: defining safety policies in natural language',
        'Escalation and human handoff logic',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent performance analytics and quality monitoring dashboards',
        'Conversation review and audit UX for CX managers',
        'Real-time supervision visualization: what the AI is doing and why',
        'Customer satisfaction tracking and CSAT improvement loops',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'End-consumer conversation interface (text + voice)',
        'CX manager admin console and agent configuration studio',
        'Developer SDK and API integration setup flows',
        'Brand voice and personality configuration UX',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise CX and support leaders at Fortune 500 companies deploying AI agents to handle customer interactions at scale',
    secondary: 'Developers integrating Sierra agents via SDK/API, and end consumers interacting with Sierra-powered agents',
  },
  userProblems: [
    'Enterprise support teams overwhelmed by ticket volume — AI agents can handle routine queries at scale',
    'Customer-facing AI needs enterprise-grade trust, safety, and brand-voice consistency',
    'Deploying AI agents requires orchestrating multiple models for different tasks — no single LLM does everything well',
    'CX leaders need visibility into what AI agents are saying and doing in real time',
    'Integration with existing CX systems (Salesforce, Zendesk, ServiceNow) is complex and fragile',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
          title: 'Product Designer',
          url: 'https://jobs.ashbyhq.com/sierra',
          location: 'San Francisco, CA',
          type: 'full-time',
        },
    {
          title: 'Agent Experience Designer, Voice (Multilingual)',
          url: 'https://jobs.ashbyhq.com/sierra',
          location: 'San Francisco, CA',
          type: 'full-time',
        }
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Five core values: Trust, Customer Obsession, Craftsmanship, Intensity, and Family. Positions itself as "the best technology company for parents." $190K-$290K salary range for Product Designers with equity.',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Founded by two of the most accomplished product builders in Silicon Valley — Bret Taylor (Google Maps, Facebook CTO, Salesforce co-CEO, OpenAI board chair) and Clay Bavor (18 years leading product/design at Google).',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Growing rapidly from ~165 to 350-550 employees. Offices in SF (HQ), Atlanta, New York, London, France, Singapore, and Japan — global enterprise reach.',
    },
  ],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Level A AI-native with $100M ARR in 21 months — proven product-market fit',
      'Founders are product/design legends: Taylor (Google Maps) + Bavor (Google Workspace design)',
      'Craftsmanship as a core value — design-forward culture DNA',
      'Massive enterprise AI agent design challenges: multi-model orchestration, trust, conversation UX',
      'Active Product Designer hiring at $190K-$290K + equity',
      '$10B valuation provides stability while still in hypergrowth',
    ],
    whyNot: [
      'On-site only in San Francisco — no remote option',
      'Design team maturity unclear — no visible design leadership or public design culture',
      'Enterprise-heavy product may mean slower iteration vs consumer AI tools',
      'Intense competition from well-funded incumbents (Intercom, Salesforce, Google)',
    ],
    nextActions: [
      'Try Sierra product demo or customer case studies',
      'Research design team leads on LinkedIn',
      'Apply to Product Designer role if interested',
      'Monitor for Design leadership hires (Head of Design, Design Director)',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Sierra Official Website', url: 'https://sierra.ai/' },
    { title: 'Sierra Blog — $100M ARR Milestone', url: 'https://sierra.ai/blog/100m-arr' },
    { title: 'Sierra Blog — Constellation of Models Architecture', url: 'https://sierra.ai/blog/constellation-of-models' },
    { title: 'TechCrunch — Sierra reaches $100M ARR in under two years', url: 'https://techcrunch.com/2025/11/21/bret-taylors-sierra-reaches-100m-arr-in-under-two-years/' },
    { title: 'CNBC — Sierra valued at $10B', url: 'https://www.cnbc.com/2025/09/04/bret-taylor-sierra-ai-startup-salesforce-openai.html' },
    { title: 'Fortune — Sierra Launch Announcement', url: 'https://fortune.com/2024/02/13/bret-taylor-clay-bavor-ai-startup-sierra-110-million-funding-sequoia-benchmark/' },
    { title: 'Acquired.fm — Bret Taylor & Clay Bavor Interview', url: 'https://www.acquired.fm/episodes/how-is-ai-different-than-other-technology-waves-with-bret-taylor-and-clay-bavor' },
    { title: 'Sequoia Capital — Sierra on Training Data Podcast', url: 'https://sequoiacap.com/podcast/training-data-bret-taylor/' },
    { title: 'Sierra Careers — Open Roles', url: 'https://jobs.ashbyhq.com/sierra' },
    { title: 'Sierra Trust & Reliability Product Page', url: 'https://sierra.ai/product/trust-and-reliability' },
  ],
};
