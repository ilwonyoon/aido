import { Company } from '../types';

export const furtherAi: Company = {
  id: 'further-ai',
  name: 'FurtherAI',
  description: 'Insurance-native AI workspace that automates submissions intake, policy comparisons, underwriting audits, claims processing, compliance checks, and other document-heavy insurance operations.',
  website: 'https://www.furtherai.com',
  screenshot: '/screenshots/further-ai-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/67bce5e386b7ca213dda94ef/6953e855a94b89982f87028c_OG%20IMAGE.png',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  subcategories: ['insurance'],
  industries: ['fintech'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$30M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5M', date: '2025-04', leadInvestors: ['Nexus Venture Partners'] },
    { stage: 'Series A', amount: '$25M', date: '2025-10', leadInvestors: ['Andreessen Horowitz'] },
  ],
  revenue: 'Seven-figure revenue (reported by secondary source); exact ARR not publicly disclosed',
  growth: '10x revenue growth cited in YC job post; processes billions in premiums annually; supports customers writing $15B+ in premiums across all 50 states',
  runway: 'Strong (Series A led by Andreessen Horowitz in Oct 2025)',
  customers: 'Insurers, reinsurers, MGAs, and brokers; named customers include Accelerant, MSI, and Leavitt Group',

  // Competition
  competitors: [
    {
      name: 'Sixfold',
      description: 'AI-powered underwriting automation for insurers.',
      whyTheyWin: 'Established insurer relationships and clear underwriting focus.',
    },
    {
      name: 'Hyperscience',
      description: 'Document processing and automation platform used in insurance and financial services.',
      whyTheyWin: 'Mature OCR, IDP, and enterprise automation capabilities with established procurement trust.',
    },
    {
      name: 'UiPath / Automation Anywhere',
      description: 'Horizontal RPA and workflow automation platforms used by enterprise operations teams.',
      whyTheyWin: 'Large installed base, procurement familiarity, and broad integration ecosystem.',
    },
  ],
  marketPosition: 'Insurance-native AI workspace positioned as a domain-specific alternative to generic AI/RPA tooling for complex, document-heavy workflows.',
  moat: [
    'Vertical specialization in insurance documents, workflows, and auditability requirements',
    'Forward-deployed engineering model that embeds with insurance teams and captures workflow-specific context',
    'Customer traction across submissions, policy comparisons, claims intake, and compliance checks',
  ],
  vsGiants: 'Domain-specific insurance workflows and fine-tuned agent loops vs generic copilots or brittle RPA scripts.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Insurance operations and document workflows existed before FurtherAI, but the company value is in AI agents that reliably process unstructured documents, operate across disconnected systems, and learn from human review.',
  aiDesignChallenges: [
    'Trust design for non-technical insurance operators reviewing AI-extracted data and recommendations',
    'Auditability UX: showing source documents, confidence, and rationale for regulated workflows',
    'Exception handling: escalating edge cases when policies, claims, or underwriting rules are ambiguous',
    'Agent progress visibility across email, portals, document review, and internal systems',
    'Designing human-in-the-loop feedback so AI improves without slowing down operators',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aman Gour',
      role: 'Co-founder & CEO',
      background: 'Second-time founder. Previously co-founded TurboHire and scaled it to $1M+ ARR; earlier worked as a Product Manager at Microsoft. IIT Bombay CS.',
    },
    {
      name: 'Sashank Gondala',
      role: 'Co-founder & CTO',
      background: 'Former language modeling scientist at Apple, where he worked on scaled language models for Siri. IIT Bombay CS and Georgia Tech MS in ML.',
    },
  ],
  whyBuilding: 'FurtherAI started after the founders experienced a slow D&O insurance process and then validated the same pain by interviewing insurance agents, brokers, underwriters, and claims adjusters around the Bay Area. Their thesis: insurance professionals should spend time on risk and relationships, not copying data between PDFs, spreadsheets, email, and portals.',
  beliefs: [
    'Insurance is not slow by nature; its professionals are constrained by outdated workflows and disconnected systems',
    'AI should empower insurance experts by removing busywork, not replace their judgment',
    'Reliable agentic loops and domain-specific models are required because generic AI misses insurance nuance',
  ],
  greenFlags: [
    '$25M Series A led by Andreessen Horowitz only six months after a $5M seed',
    'Customer traction with Accelerant, MSI, and Leavitt Group; customers write $15B+ in premiums',
    'Concrete operating metrics: 10x faster proposals, 95%+ policy comparison accuracy, 15% better submission-to-quote ratio',
    'Founding Product Designer role is open and explicitly positioned to define design culture',
    'Founders combine workflow automation company-building and deep language-model experience',
  ],
  redFlags: [
    'Insurance sales cycles and integrations with legacy carrier/broker systems can be slow',
    'Accuracy and auditability bar is high because workflow errors can create financial and compliance risk',
    'Domain-specific AI wedge may face pressure from horizontal RPA and enterprise AI platforms',
    'In-person SF culture may be a constraint for candidates seeking remote or hybrid work',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Founding Product Designer role open; team size 36 on YC profile',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent orchestration across submissions, underwriting audits, policy comparisons, and claims intake',
        'Human review and escalation logic for uncertain or regulated decisions',
        'Workflow configuration for carriers, MGAs, brokers, and reinsurers',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Source-grounded review UI for extracted policy and claims data',
        'Accuracy, confidence, and audit trail surfaces for regulated insurance operations',
        'Productivity dashboards showing hours saved, submission-to-quote gains, and error reduction',
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
    primary: 'Insurance operations, underwriting, claims, compliance, and policy servicing teams at carriers, MGAs, brokers, and reinsurers',
    secondary: 'Insurance executives modernizing back-office operations and AI transformation programs',
  },
  userProblems: [
    'Insurance professionals spend hours manually extracting information from PDFs, spreadsheets, emails, and portals',
    'Disconnected legacy systems force repetitive data entry and coordination across teams',
    'Underwriting, submissions, claims, and compliance workflows need auditability and human oversight',
    'Generic AI and brittle RPA struggle with insurance-specific documents, rules, and exceptions',
  ],

  // Open Roles
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/furtherai/21b369d5-801a-4f2e-8ad8-9b20d494648c',
      compensation: '$150K-$220K',
      aboutRole: 'Define FurtherAI\'s design culture and own end-to-end product experience for insurance AI workflows.',
      responsibilities: [
        'Own the entire product design process from user journeys and problem framing to high-fidelity UI/UX and visual design',
        'Take ownership of the product look and feel and drive a cohesive, scalable design system',
        'Work closely with the CEO, CTO, and engineers to translate customer feedback and business needs into product experiences',
        'Design and prototype solutions for complex insurance workflows',
        'Lead the definition and nurturing of design culture from the ground up',
        'Collaborate with sales and customer success to refine the product feedback loop',
      ],
      requirements: [
        '3-7 years of end-to-end product design experience',
        'Experience in B2B or complex product environments',
        'Ability to work autonomously in a fast-paced, ambiguous startup setting',
        'Track record translating complex workflows into simple, elegant, visually polished user experiences',
      ],
      preferred: [
        'Experience working directly with founders',
        'Portfolio showing systems thinking and consumer-grade visual craft',
      ],
      whyInteresting: 'Founding designer role at a post-PMF insurance AI startup with a16z backing, $225K-$325K comp signal, and hard AI trust/auditability design problems. Requires 5 days/week onsite in San Francisco.',
    },
  ],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Open Founding Product Designer role with broad ownership over product experience and design culture',
      'High-leverage AI workflow design: trust, auditability, exception handling, and complex document review',
      'Strong growth signal: $30M raised, a16z-led Series A, customer traction in a huge insurance market',
    ],
    whyNot: [
      '5-day in-person SF requirement confirmed on Paraform',
      'Insurance is a specialized domain with heavy compliance and legacy-system complexity',
      'Early design function means lots of foundational systems work, not just polished UI craft',
    ],
    nextActions: [
      'Apply or warm-intro for Founding Product Designer role',
      'Review product demo/customer stories for interface quality and design maturity',
      'Prepare portfolio examples around complex workflow simplification and trust in AI outputs',
    ],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '10x revenue growth cited in YC job post; seven-figure revenue reported by secondary source',
    userGrowth: 'Team size 36 on YC; customers writing $15B+ in premiums across all 50 states',
    signals: [
      '$25M Series A led by Andreessen Horowitz in Oct 2025, bringing total funding to $30M',
      'Seed-to-Series A in roughly six months',
      'Named customers: Accelerant, MSI, Leavitt Group',
      'Customers report doubled productivity, 15% better submission-to-quote ratios, 95%+ policy comparison accuracy, and 10x faster proposals',
      'YC W24 company with 14 open jobs on YC as of Apr 2026',
    ],
    tam: '$7T insurance industry; multi-billion-dollar insurance operations and automation software opportunity',
    marketShare: '<0.1% of insurance workflow automation opportunity',
    ceiling: 'Could become the AI workspace layer for carriers, MGAs, brokers, and reinsurers if it expands from one workflow into a multi-workflow system of action.',
    tailwinds: [
      'Insurance talent shortage and rising workload create urgency for automation',
      'Commercial insurance workflows remain heavily document- and email-driven',
      'Regulators and executives want more transparent, auditable workflows',
      'Agentic AI is now strong enough for multi-step document and portal workflows with human review',
    ],
    headwinds: [
      'Enterprise insurance procurement and integration cycles are long',
      'Legacy system fragmentation makes implementation services-heavy',
      'Generic enterprise AI/RPA vendors can bundle adjacent automation features',
      'High accuracy requirements can slow deployment into high-stakes workflows',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong if FurtherAI converts early customer workflows into reusable insurance-specific agent patterns, integrations, and audit trails.',
  },

  // Meta
  lastUpdated: '2026-04-27',
  sources: [
    { title: 'FurtherAI company website', url: 'https://www.furtherai.com' },
    { title: 'FurtherAI Series A announcement', url: 'https://www.furtherai.com/blog/%20furtherai-announces-25m-series-a-from-andreessen-horowitz-to-transform-insurance-workflows-with-ai-automating-busywork' },
    { title: 'FurtherAI founder letter', url: 'https://www.furtherai.com/blog/built-on-a-box-of-donuts-a-letter-from-our-founders' },
    { title: 'FurtherAI YC profile', url: 'https://www.ycombinator.com/companies/furtherai' },
    { title: 'Founding Product Designer at FurtherAI', url: 'https://www.ycombinator.com/companies/furtherai/jobs/rVO1Ds6-founding-product-designer' },
    { title: 'Founding Product Designer at FurtherAI — Paraform referral page', url: 'https://www.paraform.com/share/furtherai/cmmjot633001g0cjotd1elvq1' },
    { title: 'FurtherAI South Park Commons profile', url: 'https://www.southparkcommons.com/companies/further-ai/' },
  ],
};
