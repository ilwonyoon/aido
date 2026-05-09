import { Company } from '../types';

export const convergeBio: Company = {
  id: 'converge-bio',
  name: 'Converge Bio',
  description: 'Generative AI lab for life sciences — building AI systems for antibody design, protein yield optimization, and biomarker discovery to help pharma and biotech companies develop better drugs faster.',
  website: 'https://converge-bio.com',
  headquarters: 'Boston, MA / Tel Aviv, Israel',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$30.5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5.5M',
      date: '2024-06',
      leadInvestors: ['TLV Partners'],
    },
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2026-01',
      leadInvestors: ['Bessemer Venture Partners'],
    },
  ],
  revenue: 'Unknown',
  growth: '40+ pharma/biotech programs completed in first year',
  runway: 'Strong ($25M Series A, Jan 2026)',
  customers: 'Pharmaceutical and biotech companies',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '40+ programs with pharma/biotech partners in year 1',
    signals: [
      '$25M Series A led by Bessemer (Jan 2026)',
      'Backed by execs from Meta, OpenAI, and Wiz',
      '40-person team built in under 2 years',
      '4–7x protein manufacturing yield improvements for clients',
    ],
    tam: '$50B+ (AI drug discovery market; global pharma R&D spend ~$250B)',
    marketShare: '<0.1% of TAM = 1000x+ upside potential',
    ceiling: 'Early innings — AI drug discovery adoption in pharma just beginning',
    tailwinds: [
      'Rising pharma R&D costs driving demand for AI-accelerated discovery',
      'Growing evidence that generative AI can meaningfully improve drug candidate quality',
      'Regulatory pressure pushing for more data-driven drug development',
      'Strong investor interest (Bessemer, Meta/OpenAI execs) validating space',
    ],
    headwinds: [
      'Long pharma validation cycles (years from discovery to clinical trials)',
      'High trust bar — pharma companies are conservative with novel platforms',
      'Competition from Recursion, Insilico Medicine, AbSci, and others',
      'Dual HQ (Boston + Tel Aviv) adds operational complexity',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Proprietary molecular training data from 40+ drug discovery programs; three specialized AI systems co-evolving with partner data.',
  },

  // Competition
  competitors: [
    {
      name: 'Recursion Pharmaceuticals',
      description: 'AI-driven drug discovery using high-content imaging.',
      whyTheyWin: 'Larger scale, public company, broader dataset from internal lab.',
    },
    {
      name: 'Insilico Medicine',
      description: 'Generative AI for molecule design and target identification.',
      whyTheyWin: 'Multiple clinical-stage programs, longer track record.',
    },
    {
      name: 'AbSci',
      description: 'AI antibody design and protein expression optimization.',
      whyTheyWin: 'Wet lab + AI integration; established pharma partnerships.',
    },
    {
      name: 'Exscientia',
      description: 'AI-driven small molecule drug design.',
      whyTheyWin: 'Larger team, more clinical-stage assets, acquired by Recursion.',
    },
  ],
  marketPosition: 'Generative AI lab for the life sciences — modular AI systems for antibody, protein, and biomarker work',
  moat: [
    'Three specialized AI systems (antibody design, protein yield, biomarker discovery)',
    'Growing dataset from 40+ real pharma programs',
    'Academic lineage — CEO developed CRISPR ML methods with Jennifer Doudna',
  ],
  vsGiants: 'Modular, pharma-accessible AI vs integrated wet-lab + AI platforms like Recursion.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core on Life Sciences Workflow: AI is the core differentiator. Proven drug discovery workflow replaced by generative AI systems. Remove AI and there is no product.',
  aiDesignChallenges: [
    'Communicating AI predictions (binding affinity, yield improvement) to wet-lab scientists who distrust black boxes',
    'Designing handoff UX between AI-generated candidates and human experimental validation',
    'Building evaluation frameworks for model outputs that have no ground truth for months',
    'Translating complex molecular biology concepts into actionable drug discovery workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dov Gertz',
      role: 'Co-founder & CEO',
      background: 'Developed ML method for discovering novel CRISPR systems, leading to a US-licensed patent and scientific publication with Nobel laureate Jennifer Doudna.',
      whyBuilding: 'Make generative AI drug discovery accessible to every biotech and pharma company, not just those with massive R&D budgets.',
    },
    {
      name: 'Oded Kalev',
      role: 'Co-founder & CTO',
      background: 'Machine learning and computational biology background.',
    },
    {
      name: 'Iddo Weiner',
      role: 'Co-founder & CSO',
      background: 'Drug development and computational biology expertise.',
    },
  ],
  whyBuilding: 'Bring generative AI drug discovery to every biotech and pharma company — enabling faster, higher-quality drug candidates at dramatically lower cost.',
  beliefs: [
    'Generative AI trained on biological data can consistently outperform traditional drug discovery methods',
    'Modular AI systems (antibody, protein, biomarker) are more practical than monolithic platforms for pharma adoption',
    'The data advantage from real-world pharma programs compounds over time',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Backed by Bessemer + execs from Meta, OpenAI, Wiz — credibility beyond biotech',
    '40+ programs in year 1 shows real commercial traction',
    'CEO has direct academic link to CRISPR research (Jennifer Doudna collaboration)',
    'Dual-market presence (Boston + Tel Aviv) taps two deep biotech talent pools',
  ],
  redFlags: [
    'No public revenue figures — unclear ARR or pricing model',
    'Highly competitive AI drug discovery space with well-funded incumbents',
    'Drug discovery outcomes take years to validate commercially',
    'Design team likely non-existent at 40 people focused on R&D',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company ~40 people, mostly R&D)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Defining how scientists interact with AI-generated drug candidates',
        'Designing AI confidence/uncertainty communication for molecular predictions',
        'Building workflows for human review and experimental prioritization',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Visualizing AI model performance across drug programs',
        'Designing feedback loops between wet lab results and AI retraining',
        'Communicating which AI output metrics actually matter to pharma scientists',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Platform UX for running AI programs and reviewing candidates',
        'Data visualization for molecular structures, binding affinity, yield curves',
        'Client-facing dashboards for pharma program tracking',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Medicinal chemists and computational biologists at pharma/biotech companies running drug discovery programs',
    secondary: 'Research directors at mid-size biotech companies without large internal AI teams',
  },
  userProblems: [
    'Drug discovery takes 10–15 years and $2B+ per approved drug — AI can compress early-stage timelines dramatically',
    'Most pharma companies cannot afford to build internal generative AI capabilities',
    'Current AI tools are generic; drug discovery requires domain-specific models trained on molecular data',
    'Wet-lab scientists distrust AI predictions they cannot interpret or validate quickly',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content:
        'Half the 40-person team holds advanced degrees in ML, computational biology, or drug development.',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content:
        'Dual-site culture across Boston and Tel Aviv combines Israeli deep-tech intensity with the Boston biotech ecosystem.',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Fascinating AI + life sciences intersection with genuine complexity',
      'Solving real, high-stakes problem (drug discovery cost and speed)',
    ],
    whyNot: [
      'Company is ~40 people focused almost entirely on R&D — design team likely does not exist yet',
      'Not a typical product design environment; closer to scientific software',
      'No clear product design open roles; not an obvious fit for a product designer at this stage',
    ],
    nextActions: [
      'Monitor for Series B and product team growth signals',
      'Check careers page for first product design hire',
    ],
  },

  // Meta
  lastUpdated: '2026-05-07T00:00:00',
  sources: [
    { title: 'Converge Bio raises $25M — TechCrunch', url: 'https://techcrunch.com/2026/01/13/ai-drug-discovery-startup-converge-bio-pulls-in-25m-from-bessemer-and-execs-from-meta-openai-and-wiz/' },
    { title: 'Converge Bio raises $25M — PR Newswire', url: 'https://www.prnewswire.com/news-releases/converge-bio-raises-25m-to-bring-generative-ai-drug-discovery-to-every-biotech-and-pharmaceutical-company-302659690.html' },
    { title: 'Converge Bio — About page', url: 'https://converge-bio.com/about' },
    { title: 'Converge Bio — Careers', url: 'https://converge-bio.com/careers' },
    { title: 'Converge Bio — Crunchbase', url: 'https://www.crunchbase.com/organization/converge-bio' },
    { title: 'Converge Bio $25M Series A — Ctech', url: 'https://www.calcalistech.com/ctechnews/article/bjzk11nqbwl' },
    { title: 'Converge Bio — Startup Nation Finder', url: 'https://finder.startupnationcentral.org/company_page/converge-bio' },
  ],
};
