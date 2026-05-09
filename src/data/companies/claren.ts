import { Company } from '../types';

export const claren: Company = {
  id: 'claren',
  name: 'Claren',
  description:
    'AI contract assistant for legal teams, formerly WilsonAI, helping teams review, redline, extract key terms, and answer contract questions.',
  website: 'https://www.claren.law/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['text-assistant', 'automation', 'search-retrieval'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  subcategories: ['legal'],
  industries: ['legal'],

  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: '$1.7M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$1.7M',
      date: '2025-02',
      leadInvestors: ['Nomad Ventures'],
    },
  ],
  revenue: 'Multi-six figure revenue cited in current role listing',
  growth: 'Role listing says the company scaled through founder-led sales to multi-six figure revenue.',
  runway: 'Unknown',
  customers: 'In-house legal teams reviewing and negotiating contracts',

  competitors: [
    {
      name: 'Harvey',
      description: 'AI legal assistant platform for law firms and legal teams.',
      whyTheyWin: 'Large funding base, enterprise legal adoption, and strong brand in AI legal.',
    },
    {
      name: 'Spellbook',
      description: 'AI contract drafting and review assistant.',
      whyTheyWin: 'Strong contract workflow focus and distribution through legal professionals.',
    },
    {
      name: 'Ironclad AI',
      description: 'Contract lifecycle management with AI features.',
      whyTheyWin: 'Existing CLM footprint and enterprise contract workflows.',
    },
  ],
  marketPosition: 'AI contract assistant for in-house legal teams',
  moat: [
    'Contract redlining, key term extraction, and Q&A workflow focus',
    'Legal-team product depth from founder background and customer pilots',
    'Trust and citation requirements built into contract review UX',
  ],
  vsGiants: 'Competes by focusing on fast, high-craft contract workflow UX for legal teams rather than broad legal AI alone.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Claren applies LLMs to contract review, redlining, extraction, and legal Q&A workflows.',
  aiDesignChallenges: [
    'Making AI contract redlines trustworthy and reviewable',
    'Designing dense legal document workflows for speed and oversight',
    'Presenting LLM outputs, citations, and legal risk signals clearly',
  ],

  founders: [
    {
      name: 'Gus Neate',
      role: 'Co-founder & CEO',
      background: 'Former Clifford Chance lawyer; founded WilsonAI/Claren after seeing manual legal workflows firsthand.',
    },
    {
      name: 'Alex Wang',
      role: 'Co-founder & CTO',
      background: 'Former D. E. Shaw quant researcher; Cambridge Mathematics and Computer Science background.',
    },
  ],
  whyBuilding:
    'Claren aims to make high-quality legal support more accessible by automating routine contract work while preserving legal oversight.',
  beliefs: [
    'AI can reduce routine legal bottlenecks without replacing judgment',
    'Lawyers need fast, cited, and trustworthy AI outputs',
    'Contract workflow UX should feel as polished as modern productivity software',
  ],
  greenFlags: [
    'Live Founding Designer role in San Francisco',
    'Role owns complex AI-assisted contract workflows and product interfaces',
    'Company has customer pilots, press coverage, and multi-six figure revenue cited in role listing',
  ],
  redFlags: [
    'Role is effectively design-engineering heavy, requiring React and TypeScript',
    'Legal AI is competitive and high-stakes',
    'Company recently rebranded from WilsonAI to Claren, while the Ashby board still uses WilsonAI',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Designer / design-engineering profile)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI-assisted contract review and redlining flows',
        'Document comparison, extraction, and legal Q&A behavior',
        'Customer-informed iteration on professional-grade legal workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Trust, accuracy, and citation presentation',
        'Pilot feedback from legal teams',
        'Workflow speed and quality improvements against manual review',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Information-dense legal document interfaces',
        'React and TypeScript product implementation',
        'Product, marketing, and presentation asset design',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'In-house legal teams reviewing, redlining, and negotiating contracts',
    secondary: 'Business teams needing faster legal answers and contract support',
  },
  userProblems: [
    'Contract review is slow and repetitive',
    'Legal teams need AI outputs they can verify and trust',
    'Business teams often wait on legal bottlenecks for routine contract questions',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'design-engineering',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/wilson/4e880709-64ff-45f4-b09d-74eaf8b0d9bd',
      aboutRole:
        'Founding tastemaker for an AI legal product, owning polished product interfaces, React/TypeScript implementation, customer feedback, and brand/product craft.',
      whyInteresting:
        'Founding design opportunity on AI contract review, but it belongs behind design-engineering because the listing asks for strong frontend engineering skills.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Role listing calls the role hands-on and demanding, with end-to-end ownership from concept through production.',
      url: 'https://jobs.ashbyhq.com/wilson/4e880709-64ff-45f4-b09d-74eaf8b0d9bd',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Founding role shaping the UX of AI-assisted legal contract workflows',
      'High-stakes design problems around trust, citations, redlines, and document review',
      'Strong craft expectations and direct customer exposure',
    ],
    whyNot: [
      'Design-engineering heavy role requiring production frontend work',
      'Legal AI is competitive and compliance-sensitive',
      'Company/ATS naming mismatch due to WilsonAI to Claren rebrand',
    ],
    nextActions: [
      'Confirm whether the San Francisco role is tied to the rebranded Claren entity',
      'Review Claren product and WilsonAI rebrand post',
      'Assess whether design-engineering scope fits the target profile',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Multi-six figure revenue cited in role listing',
    userGrowth: 'Unknown',
    signals: [
      '$1.7M pre-seed led by Nomad Ventures announced in 2025',
      'Role listing cites multi-six figure revenue and customer pilots',
      'Claren rebrand announced in March 2026',
    ],
    tam: 'Legal AI, contract review, and legal operations automation market',
    marketShare: 'Early',
    ceiling: 'High if AI contract workflows become a standard operating layer for in-house legal teams.',
    tailwinds: [
      'Legal teams are adopting AI for contract review and repetitive work',
      'In-house legal functions face pressure to move faster',
      'Document-grounded AI interfaces are improving rapidly',
    ],
    headwinds: [
      'Legal accuracy and liability expectations are high',
      'Crowded legal AI landscape',
      'Trust and procurement cycles can slow adoption',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Medium if legal workflow feedback and document-review data compound.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Claren Website', url: 'https://www.claren.law/' },
    { title: 'WilsonAI is now Claren', url: 'https://www.claren.law/blog/wilsonai-is-now-claren' },
    { title: 'WilsonAI Raises $1.7M for AI Paralegal', url: 'https://www.claren.law/blog/wilsonai-raises-1-7m-pre-seed-for-ai-paralegal' },
    { title: 'Founding Designer at WilsonAI', url: 'https://jobs.ashbyhq.com/wilson/4e880709-64ff-45f4-b09d-74eaf8b0d9bd' },
  ],
};
