import { Company } from '../types';

export const furtherAi: Company = {
  id: 'further-ai',
  name: 'FurtherAI',
  description: 'Insurance-native AI workspace that automates submissions intake, policy comparisons, underwriting audits, claims processing, and other document-heavy insurance operations.',
  website: 'https://www.furtherai.com',
  screenshot: '/screenshots/further-ai-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area',
  remote: 'No',

  // Visual Assets
  ogImage: '/og-images/further-ai-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$30M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5M', date: '2025-04', leadInvestors: ['Nexus Venture Partners'] },
    { stage: 'Series A', amount: '$25M', date: '2025-10', leadInvestors: ['Andreessen Horowitz'] },
  ],
  revenue: 'Seven-figure ARR (not publicly disclosed)',
  growth: '10x revenue YoY; processes $15B+ in premiums across all 50 states',
  runway: 'Strong (Series A led by a16z, Oct 2025)',
  customers: 'Accelerant, MSI, Leavitt Group; carriers, MGAs, brokers, reinsurers',

  // Competition
  competitors: [
    {
      name: 'Sixfold',
      description: 'AI-powered underwriting automation for insurers.',
      whyTheyWin: 'Established insurer relationships and clear underwriting focus.',
    },
    {
      name: 'Hyperscience',
      description: 'Document processing and automation platform for insurance and financial services.',
      whyTheyWin: 'Mature OCR/IDP capabilities with enterprise procurement trust.',
    },
    {
      name: 'Roots Automation',
      description: 'AI agent platform for insurance quoting, claims, and operations.',
      whyTheyWin: 'Broad insurance agent platform with quoting and claims coverage.',
    },
  ],
  marketPosition: 'Insurance-native AI workspace positioned as domain-specific alternative to generic AI/RPA tooling.',
  moat: [
    'Vertical specialization in insurance documents, workflows, and auditability',
    'Forward-deployed engineering model that captures workflow-specific context',
    'Customer traction across submissions, policy comparisons, claims, and compliance',
  ],
  vsGiants: 'Domain-specific insurance workflows and fine-tuned agent loops vs generic copilots or brittle RPA scripts.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Insurance operations existed before FurtherAI, but AI agents that reliably process unstructured documents and operate across disconnected systems are the core differentiator.',
  aiDesignChallenges: [
    'Trust design for non-technical insurance operators reviewing AI-extracted data',
    'Auditability UX: showing source documents, confidence, and rationale for regulated workflows',
    'Exception handling: escalating edge cases when policies or underwriting rules are ambiguous',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aman Gour',
      role: 'Co-founder & CEO',
      background: 'Second-time founder. Previously co-founded TurboHire ($1M+ ARR); PM at Microsoft. IIT Bombay CS.',
    },
    {
      name: 'Sashank Gondala',
      role: 'Co-founder & CTO',
      background: 'Former language modeling scientist at Apple (Siri). Georgia Tech MS in ML, IIT Bombay CS.',
    },
  ],
  whyBuilding: 'Started after experiencing a slow D&O insurance process. Validated the pain by interviewing insurance professionals — their thesis: insurance teams should spend time on risk and relationships, not copying data between PDFs and portals.',
  beliefs: [
    'Insurance is not slow by nature; professionals are constrained by outdated workflows',
    'AI should empower insurance experts by removing busywork, not replace their judgment',
    'Domain-specific models are required because generic AI misses insurance nuance',
  ],
  designPhilosophy: 'Empowerment over replacement — purpose-driven AI that automates busywork so professionals can focus on expert guidance and client relationships.',
  greenFlags: [
    '$25M Series A led by a16z only six months after $5M seed',
    'Concrete metrics: 10x faster proposals, 95%+ accuracy, 15% better submission-to-quote ratio',
    'Founding Product Designer role explicitly positioned to define design culture',
    'Founders combine workflow automation experience and deep language-model expertise',
  ],
  redFlags: [
    'Insurance sales cycles and legacy-system integrations can be slow',
    'High accuracy and auditability bar for regulated workflows',
    'Domain-specific wedge may face pressure from horizontal AI/RPA platforms',
    '5-day in-person SF requirement limits candidate pool',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0 (Founding Product Designer role open; no dedicated designer yet)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent orchestration across submissions, underwriting, policy comparisons, and claims',
        'Human review and escalation logic for uncertain or regulated decisions',
        'Workflow configuration for carriers, MGAs, brokers, and reinsurers',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Source-grounded review UI for extracted policy and claims data',
        'Accuracy, confidence, and audit trail surfaces for regulated operations',
        'Productivity dashboards showing hours saved and error reduction',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Task queues for insurance operators working through AI-generated outputs',
        'Document comparison and policy review interfaces',
        'Design system for a multi-workflow enterprise AI workspace',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Insurance operations, underwriting, claims, and compliance teams at carriers, MGAs, and brokers',
    secondary: 'Insurance executives modernizing back-office operations',
  },
  userProblems: [
    'Professionals spend hours manually extracting info from PDFs, spreadsheets, and emails',
    'Disconnected legacy systems force repetitive data entry across teams',
    'Underwriting and claims workflows need auditability and human oversight',
    'Generic AI and RPA struggle with insurance-specific documents and exceptions',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/furtherai/21b369d5-801a-4f2e-8ad8-9b20d494648c',
      compensation: '$150K-$220K + equity',
      aboutRole: 'Define FurtherAI\'s design culture and own end-to-end product experience for insurance AI workflows.',
      responsibilities: [
        'Own the entire product design process from user journeys to high-fidelity UI/UX',
        'Drive a cohesive, scalable design system',
        'Work closely with CEO, CTO, and engineers to translate customer needs into product experiences',
        'Design and prototype solutions for complex insurance workflows',
        'Lead design culture definition from the ground up',
      ],
      requirements: [
        '3-7 years of end-to-end product design experience',
        'Experience in B2B or complex product environments',
        'Track record translating complex workflows into elegant user experiences',
      ],
      preferred: [
        'Experience working directly with founders',
        'Portfolio showing systems thinking and consumer-grade visual craft',
      ],
      whyInteresting: 'Founding designer at post-PMF insurance AI startup with a16z backing. Hard AI trust/auditability design problems. $150K-$220K + equity. Onsite SF.',
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'YC W24 batch. Team of 36 with ex-Apple AI researchers, 4 ex-YC founders, and 6 serial entrepreneurs. Engineering from Apple, Microsoft, Google, Amazon.',
      url: 'https://www.ycombinator.com/companies/furtherai',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: '50% of candidates rate interview experience as positive. Average difficulty 3/5.',
      url: 'https://www.glassdoor.com/Interview/FurtherAI-Interview-Questions-E10695795.htm',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Benefits include comprehensive health/dental/vision, unlimited PTO, on-site meals (lunch & dinner), and pre-tax commuter benefits. Tight-knit onsite SF culture.',
      url: 'https://jobs.ashbyhq.com/furtherai',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '10x revenue YoY (seven-figure ARR)',
    userGrowth: 'Customers writing $15B+ in premiums across all 50 states',
    signals: [
      '$25M Series A led by a16z in Oct 2025, six months after seed',
      'Named customers: Accelerant, MSI, Leavitt Group',
      'Doubled productivity, 95%+ accuracy, 10x faster proposals for clients',
    ],
    tam: '$7T insurance industry; multi-billion-dollar insurance automation opportunity',
    marketShare: '<0.1% of insurance workflow automation opportunity',
    ceiling: 'Could become the AI workspace layer for the entire insurance value chain.',
    tailwinds: [
      'Insurance talent shortage creates urgency for automation',
      'Workflows remain heavily document- and email-driven',
      'Agentic AI now strong enough for multi-step document workflows with human review',
    ],
    headwinds: [
      'Enterprise insurance procurement cycles are long',
      'Legacy system fragmentation makes implementation services-heavy',
      'Generic enterprise AI/RPA vendors can bundle adjacent features',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong if FurtherAI converts early customer workflows into reusable insurance-specific agent patterns and integrations.',
  },

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Founding Product Designer role with broad ownership over product experience and design culture',
      'High-leverage AI design: trust, auditability, exception handling for complex document workflows',
      '$30M raised with a16z-led Series A in a massive insurance market',
    ],
    whyNot: [
      '5-day in-person SF requirement',
      'Insurance is a specialized domain with heavy compliance and legacy complexity',
      'Early design function means foundational systems work, not polished UI craft',
    ],
    nextActions: [
      'Apply or warm-intro for Founding Product Designer role',
      'Review product demo for interface quality and design maturity',
      'Prepare portfolio around complex workflow simplification and AI trust',
    ],
  },

  // Meta
  lastUpdated: '2026-05-09',
  sources: [
    { title: 'FurtherAI company website', url: 'https://www.furtherai.com' },
    { title: 'FurtherAI Series A announcement', url: 'https://www.furtherai.com/blog/furtherai-announces-25m-series-a-from-andreessen-horowitz-to-transform-insurance-workflows-with-ai-automating-busywork' },
    { title: 'a16z investing in FurtherAI', url: 'https://a16z.com/announcement/investing-in-furtherai/' },
    { title: 'FurtherAI founder letter', url: 'https://www.furtherai.com/blog/built-on-a-box-of-donuts-a-letter-from-our-founders' },
    { title: 'FurtherAI YC profile', url: 'https://www.ycombinator.com/companies/furtherai' },
    { title: 'Founding Product Designer — Ashby', url: 'https://jobs.ashbyhq.com/furtherai/21b369d5-801a-4f2e-8ad8-9b20d494648c' },
  ],
};
