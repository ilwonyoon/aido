import { Company } from '../types';

export const twelvelabs: Company = {
  id: 'twelvelabs',
  name: 'TwelveLabs',
  description: 'Video intelligence platform and API powered by multimodal foundation models that search, analyze, and reason across video.',
  website: 'https://www.twelvelabs.io',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  aiTypes: ['foundation-model', 'video-generation', 'search-retrieval'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,
  subcategories: ['infrastructure', 'creative-media'],
  industries: ['creative-media', 'infrastructure'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$107M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$50M',
      date: '2024-06',
      leadInvestors: ['NEA', 'NVentures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Strong after $107M Seed and Series A funding',
  customers: 'Teams in media, sports, advertising, government, security, and other video-heavy workflows.',

  competitors: [
    { name: 'Google Gemini / Vertex AI', description: 'Multimodal models and cloud AI platform.', whyTheyWin: 'Cloud distribution and foundation model breadth.' },
    { name: 'AWS AI services', description: 'Cloud AI and media processing services.', whyTheyWin: 'Enterprise cloud distribution.' },
    { name: 'Runway', description: 'AI video generation and creative media platform.', whyTheyWin: 'Creative workflow adoption and brand awareness.' },
  ],
  marketPosition: 'Video understanding infrastructure for enterprises and developers working with large video libraries.',
  moat: [
    'Purpose-built multimodal video foundation models',
    'Developer API and platform for video intelligence',
    'Strong investor set including NVentures, NEA, Radical Ventures, and Index Ventures',
  ],
  vsGiants: 'TwelveLabs focuses deeply on video understanding and workflow APIs rather than general-purpose multimodal assistants.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Multimodal video understanding models and APIs are the core product.',
  aiDesignChallenges: [
    'Inventing UX patterns for AI that reasons across full video corpuses',
    'Making probabilistic video search and analysis feel trustworthy',
    'Designing across developer platform, enterprise apps, APIs, and creative workflows',
  ],

  founders: [
    { name: 'Jae Lee', role: 'Co-Founder & CEO', background: 'Co-founder leading TwelveLabs and author of company funding announcements.' },
    { name: 'Founding team (verification pending)', role: 'Founders', background: 'Team spans AI research, engineering, product, and go-to-market across San Francisco and Seoul.' },
  ],
  whyBuilding: 'TwelveLabs aims to make video searchable, analyzable, and useful at scale by helping AI understand video like humans do.',
  beliefs: [
    'Video contains strategic information that has historically been hard to access',
    'Multimodal AI needs purpose-built product patterns, not generic chat UI',
    'Developers and enterprises need APIs and workflows for video intelligence',
  ],
  greenFlags: [
    'Lead Product Designer role has unusually category-defining design scope',
    'Strong overlap with creative/media and AI-native interaction design',
    'Deep technical product surface across apps, developer platform, APIs, and brand',
  ],
  redFlags: [
    'No public compensation range found',
    'Role URL is external BuiltIn listing; official careers page is JS-loaded and needs periodic recheck',
    'May require hybrid/in-office San Francisco presence',
  ],

  designTeam: {
    teamSize: 'Hiring Lead Product Designer to define design language and interaction models across product surfaces.',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Video corpus interaction patterns', 'AI search/refinement flows', 'Developer platform UX'] },
    evaluation: { level: 'high', tasks: ['Trust in probabilistic outputs', 'Video result quality', 'Enterprise workflow validation'] },
    interface: { level: 'high', tasks: ['Applications', 'Developer platform', 'APIs', 'Design system', 'Launch materials'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise teams, developers, and creators working with large video libraries',
    secondary: 'Media, sports, advertising, government, and security teams',
  },
  userProblems: [
    'Video libraries are difficult to search and understand at scale',
    'Existing tools do not reason across speech, visuals, sound, and timing together',
    'Teams need trustworthy AI workflows for video discovery, analysis, and editing',
  ],

  designerLinks: [],

  openRoles: [
    {
      title: 'Lead Product Designer',
      location: 'San Francisco, CA (Hybrid)',
      type: 'full-time',
      url: 'https://www.builtinsf.com/job/staff-product-designer/8642176',
      roleFamily: 'product-design',
      roleSignal: 'lead',
      verificationStatus: 'needs_review',
      sourceType: 'other',
      lastVerifiedAt: '2026-05-13',
      team: 'Product & Design',
      aboutRole: 'Define the design language and interaction model across TwelveLabs applications, developer platform, APIs, and emerging video intelligence products.',
      responsibilities: [
        'Define design language across product, platform, APIs, brand, and launches',
        'Invent interaction patterns for video intelligence from single frames to full video corpuses',
        'Prototype quickly with developers and enterprise teams',
        'Build the design system by shipping',
      ],
      requirements: [
        'Strong product taste and shipped product experience',
        'Experience or obsession with AI and non-deterministic systems',
        'Ability to design for both creators and developers',
      ],
      whyInteresting: 'One of the strongest category-design roles in the screenshot, especially for AI plus media/creative tooling.',
    },
  ],

  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'AI-native multimodal product with unsolved interaction patterns',
      'Strong match to media/creative systems and product design taste',
      'Lead role can shape product language early',
    ],
    whyNot: [
      'Compensation not public',
      'Official careers page needs JS/detail validation',
      'Less directly cash-verified than WorkOS/Augment/Sesame',
    ],
    nextActions: [
      'Apply if role is still active on LinkedIn/BuiltIn',
      'Ask recruiter for base range early',
    ],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$107M Seed and Series A funding', 'Lead Product Designer hiring', 'Enterprise video intelligence positioning'],
    tam: 'Enterprise video intelligence, media workflows, developer APIs, and multimodal AI infrastructure',
    marketShare: 'Unknown',
    ceiling: 'Could become core infrastructure for video-heavy AI workflows.',
    tailwinds: ['Explosion of video data', 'Multimodal AI adoption', 'Enterprise demand for video search and analysis'],
    headwinds: ['Foundation model competition', 'Cloud platform competition', 'Compute intensity'],
    moatType: 'technology',
    moatStrength: 'Potentially strong if specialized video understanding models remain ahead.',
  },

  lastUpdated: '2026-05-13T12:00:00',
  sources: [
    { title: 'TwelveLabs website', url: 'https://www.twelvelabs.io/' },
    { title: 'TwelveLabs careers', url: 'https://www.twelvelabs.io/careers' },
    { title: 'Lead Product Designer at TwelveLabs', url: 'https://www.builtinsf.com/job/staff-product-designer/8642176' },
    { title: 'TwelveLabs Series A announcement', url: 'https://twelvelabs.dev/blog/series-a-announcement.html' },
  ],
};
