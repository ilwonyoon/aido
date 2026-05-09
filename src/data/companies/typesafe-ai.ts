import { Company } from '../types';

export const typesafeAi: Company = {
  id: 'typesafe-ai',
  name: 'TypeSafe AI',
  description:
    'Frontier model lab building reliable general AI systems for real-world automation, with a developer platform for building, testing, and operating AI models.',
  website: 'https://www.typesafe.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['foundation-model', 'ai-infrastructure'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,
  subcategories: ['infrastructure'],
  industries: ['infrastructure', 'developer-tools'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Early frontier model lab; hiring founding product design for developer platform UX.',
  runway: 'Unknown',
  customers: 'Developers and enterprises building automation on reliable AI systems',

  competitors: [
    {
      name: 'OpenAI',
      description: 'Frontier AI lab and platform provider.',
      whyTheyWin: 'Model quality, distribution, and platform ecosystem.',
    },
    {
      name: 'Anthropic',
      description: 'Frontier AI lab focused on reliable and steerable models.',
      whyTheyWin: 'Strong enterprise trust and safety positioning.',
    },
    {
      name: 'Together AI',
      description: 'AI model infrastructure and inference platform.',
      whyTheyWin: 'Developer-friendly deployment and model access infrastructure.',
    },
  ],
  marketPosition: 'Frontier model lab focused on reliable automation',
  moat: [
    'Research team with OpenAI, Google Brain, and Meta AI experience',
    'Reliability and autonomy focus rather than benchmark-only positioning',
    'Developer platform surface for model evaluation, debugging, and observability',
  ],
  vsGiants: 'Competes by focusing on reliability and production autonomy for economically valuable automation.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: TypeSafe AI is building frontier models and the platform surfaces needed to operate them.',
  aiDesignChallenges: [
    'Making model evaluations, debugging, and observability understandable',
    'Designing developer workflows around autonomy and reliability',
    'Representing AI system behavior, uncertainty, and failure modes',
    'Turning research concepts into usable product surfaces',
  ],

  founders: [
    {
      name: 'Diogo Almeida',
      role: 'Co-founder',
      background: 'Former OpenAI and Google Brain researcher; TypeSafe site cites work on InstructGPT, RLHF, ChatGPT, and GPT-4.',
    },
    {
      name: 'Erik Gafni',
      role: 'Co-founder',
      background: 'Ravel co-founder with multimodal AI background.',
    },
    {
      name: 'Sasha Sheng',
      role: 'Co-founder',
      background: 'Former Meta AI researcher.',
    },
  ],
  whyBuilding:
    'TypeSafe AI is rethinking the LLM stack from first principles to build more reliable and general AI systems for production automation.',
  beliefs: [
    'AI systems need reliability and decision-making ability beyond benchmark performance',
    'Real-world autonomy requires better tooling for evaluation and operation',
    'Transformative AI needs product surfaces that make complex model behavior usable',
  ],
  greenFlags: [
    'Founding Product Designer role on a highly technical Level A AI-native platform',
    'Founder team has frontier lab and research credibility',
    'Clear design challenge in developer tools, observability, and AI system behavior',
  ],
  redFlags: [
    'Very early company with limited public business metrics',
    'Frontier model lab category is capital-intensive and competitive',
    'Role requires comfort with complex technical and research ambiguity',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Developer workflow design for model building and testing',
        'AI debugging and observability flows',
        'System behavior, uncertainty, and reliability controls',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Evaluation result interfaces',
        'Model behavior comparison and regression review',
        'Reliability signals and production-readiness checks',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer platform console',
        'Design language for technical AI tools',
        'Prototypes and internal tools using modern LLM APIs',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Developers, researchers, and technical teams building with reliable AI systems',
    secondary: 'Enterprises evaluating autonomous AI systems for production workflows',
  },
  userProblems: [
    'AI system behavior is difficult to debug and trust',
    'Current tooling does not make reliability and autonomy easy to evaluate',
    'Developer workflows around model testing and observability are fragmented',
  ],

  designerLinks: [],
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
      url: 'https://jobs.ashbyhq.com/typesafe-ai/5b6c4a51-c4c7-4598-9e74-8cb45b17044e',
      aboutRole:
        'Design the developer platform experience for building, testing, and operating TypeSafe AI models, including evaluations, debugging, and observability.',
      whyInteresting:
        'Rare founding design role at a frontier model lab where product design directly shapes how AI system behavior becomes understandable.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Role listing says the team works fully in-person in its San Francisco office near Embarcadero station.',
      url: 'https://jobs.ashbyhq.com/typesafe-ai/5b6c4a51-c4c7-4598-9e74-8cb45b17044e',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Level A AI-native work with deep technical product design challenges',
      'Founding role shaping UX for AI evaluations, debugging, and observability',
      'Strong research-team credibility',
    ],
    whyNot: [
      'Very early and technically uncertain category',
      'Fully in-person SF expectation',
      'Potentially less customer-facing traction visible publicly',
    ],
    nextActions: [
      'Review TypeSafe product demos when available',
      'Prepare examples around developer tools, observability, and AI explainability',
      'Assess whether role needs coding/prototyping depth beyond product design',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Hiring founding product designer for developer platform',
      'Public site positions team as ex-OpenAI, Google Brain, and Meta AI',
      'Focus on reliable and general AI systems for production autonomy',
    ],
    tam: 'Frontier AI model and developer platform market',
    marketShare: 'Very early',
    ceiling: 'Very high if TypeSafe AI builds a differentiated reliable automation model stack.',
    tailwinds: [
      'Demand for AI systems that work reliably in production',
      'Developer need for better model evaluation and observability',
      'Enterprise interest in autonomous AI workflows',
    ],
    headwinds: [
      'Frontier model labs require significant compute and capital',
      'Hard to differentiate against OpenAI, Anthropic, and open model ecosystems',
      'Reliability claims require deep technical proof',
    ],
    moatType: 'technology',
    moatStrength: 'Potentially strong if reliability research and developer workflows compound into proprietary platform data.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'TypeSafe AI Website', url: 'https://www.typesafe.ai/' },
    { title: 'Founding Product Designer at TypeSafe AI', url: 'https://jobs.ashbyhq.com/typesafe-ai/5b6c4a51-c4c7-4598-9e74-8cb45b17044e' },
  ],
};
