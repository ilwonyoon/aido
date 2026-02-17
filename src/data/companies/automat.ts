import { Company } from '../types';

export const automat: Company = {
  id: 'automat',
  name: 'Automat',
  description: 'AI-powered enterprise automation platform that replaces legacy RPA with agentic workflows using LLMs and computer vision.',
  website: 'https://www.runautomat.com/',
  screenshot: '',

  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$19.25M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.75M',
      date: '2023-09',
      leadInvestors: ['Initialized Capital'],
    },
    {
      stage: 'Series A',
      amount: '$15.5M',
      date: '2025-11',
      leadInvestors: ['Felicis'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Post-Series A; actively expanding sales, engineering, and design teams',
  runway: 'Strong post-Series A capitalization',
  customers: 'Enterprise clients in banking, insurance, fintech, and e-commerce (AmeriTrust, Ziina, Vividly, Leopard)',

  competitors: [
    {
      name: 'UiPath',
      description: 'Market-leading enterprise RPA platform with extensive bot library and orchestration tools.',
      whyTheyWin: 'Dominant market share, massive enterprise install base, and mature ecosystem.',
    },
    {
      name: 'Automation Anywhere',
      description: 'Cloud-native RPA platform combining process automation with AI and document processing.',
      whyTheyWin: 'Strong cloud-native architecture and deep enterprise partnerships.',
    },
    {
      name: 'AgentIQ',
      description: 'AI-native RPA startup building agentic workflows for enterprise automation.',
      whyTheyWin: 'Also leveraging LLM-based agents to disrupt legacy RPA incumbents.',
    },
  ],
  marketPosition: 'AI-native challenger to legacy RPA incumbents, targeting enterprises priced out of traditional automation.',
  moat: [
    'Vision-language model approach enables automations from screen recordings, not code',
    'Forward-deployed engineering model builds deep customer relationships',
    'Subscription pricing disrupts per-bot legacy models, expanding addressable market',
  ],
  vsGiants: 'Competes by being 10x faster and 1/10th the price of UiPath/Automation Anywhere, with AI-native architecture vs bolt-on AI features.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — LLMs and VLMs power the automation engine, replacing traditional rule-based RPA with agentic workflows that understand context and recover from errors.',
  aiDesignChallenges: [
    'Designing trust in autonomous agents operating on enterprise systems with real financial consequences',
    'Communicating agent reasoning and error recovery to non-technical operations teams',
    'Balancing automation autonomy with human-in-the-loop oversight controls',
  ],

  founders: [
    {
      name: 'Lucas Ochoa',
      role: 'Co-founder & CEO',
      background: 'Carnegie Mellon Design + HCI graduate. Ex-Google Creative Lab (Fiver fellowship), Google X (AI human-robot interaction), and Microsoft. Led interaction design for Pixel Buds Pro.',
    },
    {
      name: 'Gautam Bose',
      role: 'Co-founder & CTO',
      background: 'Carnegie Mellon Design + CS graduate. Ex-Google Creative Lab, worked on LaMDA implementations and Chrome experiments. Built early prototypes bringing LLMs from research to practical applications.',
    },
  ],
  whyBuilding: 'Recognized that combining robotics AI techniques with LLMs/VLMs could create software agents far more capable than traditional RPA, making enterprise automation accessible to companies priced out by legacy tools.',
  beliefs: [
    'Agency is for people — AI agents should be authored and controlled by humans',
    'Automation should be demonstrated, not coded',
    'Enterprise software should be crafted with the same care as consumer products',
  ],
  designPhilosophy: 'Both founders are CMU-trained designers who believe in craft and product intuition — the Founding Designer role reports directly to CEO and emphasizes Apple-level design taste.',
  greenFlags: [
    'Founders are designer-engineers from Google Creative Lab with deep AI + design background',
    '$19.25M raised from tier-1 investors (Felicis, Initialized, Khosla, YC)',
    'Founding Designer role with 0.05-0.20% equity signals design as a core pillar',
    'Real enterprise customers saving 7-figures in operational costs',
  ],
  redFlags: [
    'Early-stage team (~15-25 employees) with no established design team yet',
    'On-site only in San Francisco limits talent pool',
    'Competing against UiPath ($8B+) and Automation Anywhere with far fewer resources',
  ],

  designTeam: {
    teamSize: '~0 (Founding Designer role open — first design hire)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent autonomy boundaries and human-in-the-loop escalation flows',
        'Error recovery and self-healing behavior design',
        'Workflow authoring from screen recordings and natural language',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Automation reliability monitoring and performance dashboards',
        'Agent output quality verification workflows',
        'Usage analytics for workflow optimization',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'UI agent builder and document extractor interface',
        'Brand language and design system creation (greenfield)',
        'Enterprise dashboard and workflow management surfaces',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise operations teams managing repetitive workflows in banking, insurance, and fintech',
    secondary: 'Mid-market companies looking to automate document processing and UI-based tasks',
  },
  userProblems: [
    'Legacy RPA requires expensive certified specialists and $50K+ per-project consulting',
    'Traditional bots break when UI changes, requiring constant maintenance',
    'Per-bot pricing makes automation inaccessible for many enterprise workflows',
  ],

  designerLinks: [
    {
      name: 'Lucas Ochoa',
      role: 'Co-founder & CEO',
      platform: 'blog',
      url: 'http://lucasochoa.com/',
      description: 'Personal portfolio showcasing design + HCI + robotics work at Google Creative Lab, Google X, and Microsoft — strong emphasis on AI interaction design.',
    },
    {
      name: 'CMU School of Design',
      role: 'Alumni Feature',
      platform: 'blog',
      url: 'https://www.design.cmu.edu/news/design-alumni-pioneering-business-automation-through-ai-innovation',
      description: 'Feature on how Ochoa and Bose applied CMU design training to build Automat — credits collaborative studio culture as foundation for their AI product vision.',
    },
  ],
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco, CA (On-site)',
      url: 'https://jobs.ashbyhq.com/automat/5c9a8eae-0705-48b6-9b7a-8d752146feb0',
      team: 'Design',
      level: 'Senior',
      type: 'full-time',
      compensation: '$140K-$225K + 0.05%-0.20% equity',
      aboutRole: 'First design hire. Build Automat\'s platform experience and brand language from the ground up, reporting directly to CEO Lucas Ochoa.',
      responsibilities: [
        'Design the core platform experience end-to-end',
        'Develop comprehensive brand language and visual systems',
        'Create product experiences balancing aesthetic refinement with engineering excellence',
      ],
      preferred: [
        'Strong writing skills and award recognition for design work',
        'Full-stack application development experience and Git proficiency',
        'Deep familiarity with Apple product design philosophy',
      ],
      teamInfo: 'Work directly with the CEO and a team of robotics/AI engineers and operations specialists in SF\'s Mission District.',
      whyInteresting: 'Rare Founding Designer opportunity at a well-funded YC/Felicis-backed startup with designer-founder CEO — ground-floor impact on brand and product.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Job posting seeks designers "visually and viscerally offended by bad typography spacing" — signals unusually high design bar for an enterprise automation company.',
      url: 'https://jobs.ashbyhq.com/automat/5c9a8eae-0705-48b6-9b7a-8d752146feb0',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Three core values: "Agency is for People" (human-authored AI), "Build Great Stuff" (craft emphasis), "Build it Today" (bias toward action).',
      url: 'https://www.runautomat.com/about',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Felicis praised the founding team\'s "rare blend of technical depth with product intuition" and ability to "intuitively understand customer needs."',
      url: 'https://www.felicis.com/insight/automat-reinventing-automation-for-ease-reliability-and-adaptability',
    },
  ],

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: [
      '$15.5M Series A led by Felicis in Nov 2025',
      'Total funding $19.25M across 2 rounds',
      '8 active job openings across engineering, sales, and design (Feb 2026)',
    ],
    tam: '$50B+ (global RPA and enterprise automation market)',
    marketShare: '<0.01% (early-stage startup vs $8B+ incumbents)',
    ceiling: 'Early innings: AI-native RPA could capture significant share from legacy tools as LLM capabilities improve.',
    tailwinds: [
      'Enterprise AI adoption accelerating across operations teams',
      'Legacy RPA tools struggling to adapt to agentic AI paradigm',
      'Vision-language models enabling new automation modalities',
    ],
    headwinds: [
      'UiPath and Automation Anywhere adding AI features to massive install bases',
      'Enterprise sales cycles are long and resource-intensive for a small team',
      'Commoditization risk as LLM-based automation becomes more accessible',
    ],
    moatType: 'technology',
    moatStrength: 'Medium: VLM-based automation approach is differentiated, but moat depends on execution speed before incumbents adapt.',
  },

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Founding Designer role with meaningful equity (0.05-0.20%) and direct CEO access',
      'Both founders are CMU Design graduates — unusually design-literate leadership for enterprise software',
      'Level B AI-native product with rich design challenges in agentic UX and human-AI oversight',
      'Well-funded by tier-1 investors with clear product-market fit signals',
    ],
    whyNot: [
      'On-site only in San Francisco',
      'First design hire means building everything from scratch with no design mentorship',
      'Enterprise RPA market is dominated by well-resourced incumbents',
    ],
    nextActions: [
      'Review Founding Designer listing in detail and prepare portfolio emphasis on 0→1 brand/product work',
      'Research Lucas Ochoa\'s design sensibility through lucasochoa.com portfolio projects',
      'Monitor company growth post-Series A for hiring velocity signals',
    ],
  },

  lastUpdated: '2026-02-13',
  sources: [
    { title: 'Automat Official Website', url: 'https://www.runautomat.com/' },
    { title: 'Automat About Page', url: 'https://www.runautomat.com/about' },
    { title: 'Automat Series A Announcement', url: 'https://www.runautomat.com/blog/automat-raises-15-5m-series-a' },
    { title: 'TechCrunch — YC-backed Automat', url: 'https://techcrunch.com/2023/09/06/y-combinator-backed-automat-turns-videos-into-workflow-automations/' },
    { title: 'Felicis — Automat Investment Thesis', url: 'https://www.felicis.com/insight/automat-reinventing-automation-for-ease-reliability-and-adaptability' },
    { title: 'CMU Design Alumni Feature', url: 'https://www.design.cmu.edu/news/design-alumni-pioneering-business-automation-through-ai-innovation' },
    { title: 'YC Company Page', url: 'https://www.ycombinator.com/companies/automat' },
    { title: 'Ashby Job Board — Founding Designer', url: 'https://jobs.ashbyhq.com/automat/5c9a8eae-0705-48b6-9b7a-8d752146feb0' },
  ],
};
