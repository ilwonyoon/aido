import { Company } from '../types';

export const alphaXiv: Company = {
  id: 'alphaxiv',
  name: 'alphaXiv',
  description: 'AI copilot that helps researchers understand papers in minutes.',
  website: 'https://alphaxiv.org',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/alphaxiv-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['search-retrieval'],
  markets: ['b2b'],
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Elicit',
      description: 'AI research assistant that summarizes papers and answers questions.',
      whyTheyWin: 'Strong research workflow and broad paper coverage.',
    },
    {
      name: 'Perplexity',
      description: 'AI answer engine with citations and research-friendly search.',
      whyTheyWin: 'Fast search UX and large user adoption.',
    },
    {
      name: 'Semantic Scholar',
      description: 'Academic search engine with paper discovery and summaries.',
      whyTheyWin: 'Deep academic index and trusted discovery brand.',
    },
  ],
  marketPosition: 'AI research paper copilot focused on rapid comprehension of academic literature.',
  moat: [
    'Researcher-first workflows tailored to reading and synthesizing papers',
    'Paper understanding features designed for dense academic content',
    'Speed-to-insight positioning for literature review tasks',
  ],
  vsGiants: 'Competes on specialized research workflows rather than general-purpose AI search.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'The product experience is centered on AI summarization and reasoning.',
  aiDesignChallenges: [
    'Designing trustworthy summaries with clear citation trails',
    'Communicating confidence and uncertainty for technical claims',
    'Supporting fast navigation across long, complex documents',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Reduce the time it takes to understand and synthesize research papers.',
  beliefs: [
    'Researchers need faster ways to absorb new knowledge',
    'AI can compress reading time without losing core meaning',
    'Citations and transparency are critical for trust',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear focus on a painful researcher workflow',
    'Straightforward positioning around speed and comprehension',
  ],
  redFlags: [
    'Crowded research assistant market',
    'High risk of hallucinations in technical content',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Summarization logic and citation routing',
        'Prompting and feedback controls for paper understanding',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality checks for summaries and extracted claims',
        'User feedback loops for accuracy and relevance',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Paper reader UI and navigation',
        'Search and filtering for literature review flows',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Researchers, graduate students, and knowledge workers reading papers',
    secondary: 'R&D teams conducting literature reviews',
  },
  userProblems: [
    'Reading dense papers takes too long',
    'Synthesizing findings across many papers is manual',
    'Important context is easy to miss in long documents',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'Tightly scoped research workflow with clear user pain',
      'Opportunity to design for trust and citations',
    ],
    whyNot: [
      'Unclear funding or scale signals',
      'Competitive space with fast-moving incumbents',
    ],
    nextActions: [
      'Monitor for clearer product traction and funding signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'alphaXiv', url: 'https://alphaxiv.org' },
    { title: 'alphaXiv Hiring', url: 'https://alphaxiv.org/careers' },
    { title: 'alphaXiv on startups.gallery', url: 'https://startups.gallery/companies/alphaxiv' },
  ],
};
