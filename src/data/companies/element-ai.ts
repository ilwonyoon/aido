import { Company } from '../types';

export const elementAi: Company = {
  id: 'element-ai',
  name: 'Element AI',
  description: 'Canadian AI company focused on enterprise AI services and research, acquired by ServiceNow.',
  website: 'https://www.elementai.com',
  headquarters: 'Montreal, QC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'model-platform'],
  markets: ['enterprise', 'b2b'],
  category: 'ai-models' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Acquired',
  valuation: 'Not publicly disclosed',
  totalFunding: '$102M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Enterprise AI teams and strategic partners (pre-acquisition)',

  // Competition
  competitors: [
    {
      name: 'DataRobot',
      description: 'Enterprise AI platform for model development and deployment.',
      whyTheyWin: 'Large enterprise base and automation tooling.',
    },
    {
      name: 'Palantir',
      description: 'Enterprise data + AI platform focused on mission-critical deployments.',
      whyTheyWin: 'Deep enterprise/government distribution.',
    },
    {
      name: 'Cohere',
      description: 'Enterprise-focused LLM and AI platform.',
      whyTheyWin: 'Model-first strategy and developer adoption.',
    },
  ],
  marketPosition: 'Early enterprise AI services platform and research talent hub (pre-acquisition).',
  moat: ['Deep research talent base', 'Strong enterprise AI advisory positioning'],
  vsGiants: 'Differentiated through research talent and enterprise AI consulting services.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI research and services were central to the company’s product and strategy.',
  aiDesignChallenges: [
    'Designing enterprise AI workflows for non-technical users',
    'Translating research into usable product surfaces',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jean-Francois Gagné',
      role: 'Co-founder & CEO',
      background: 'Serial entrepreneur in AI and operations research; founded Element AI in 2016.',
    },
    {
      name: 'Yoshua Bengio',
      role: 'Co-founder',
      background: 'Turing Award-winning deep learning pioneer at Université de Montréal.',
    },
    {
      name: 'Anne Martel',
      role: 'Co-founder',
      background: 'AI entrepreneur and executive; co-founded Element AI.',
    },
    {
      name: 'Nicolas Chapados',
      role: 'Co-founder',
      background: 'AI researcher and entrepreneur; co-founded Element AI.',
    },
    {
      name: 'Philippe Beaudoin',
      role: 'Co-founder',
      background: 'AI researcher and entrepreneur; co-founded Element AI.',
    },
    {
      name: 'Jean-Sébastien Cournoyer',
      role: 'Co-founder',
      background: 'Co-founded Element AI and was a partner at Real Ventures.',
    },
  ],
  whyBuilding: 'Bridge cutting-edge AI research with enterprise-ready AI solutions.',
  beliefs: ['AI research should translate into real-world enterprise impact'],
  greenFlags: ['Strong research founding team', 'Acquired by ServiceNow'],
  redFlags: ['Independent company no longer operating'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Enterprise AI workflow design', 'Model governance UX'] },
    evaluation: { level: 'medium', tasks: ['AI quality and trust frameworks'] },
    interface: { level: 'medium', tasks: ['Enterprise AI dashboards and tooling surfaces'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Enterprise AI and innovation teams',
    secondary: 'Business units deploying AI solutions',
  },
  userProblems: [
    'Enterprises struggled to operationalize AI research into production systems',
    'Need for AI talent and applied research expertise',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Deep AI research heritage', 'Enterprise AI platform design challenges'],
    whyNot: ['Acquired and integrated into ServiceNow'],
    nextActions: ['Track ServiceNow AI Innovation Hub for related roles'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Acquired by ServiceNow (2021)'],
    tam: 'Large enterprise AI services and platform market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Integrated into ServiceNow platform strategy',
    tailwinds: ['Enterprise AI adoption', 'ServiceNow platform distribution'],
    headwinds: ['Integration into larger platform reduces standalone brand'],
    moatType: 'technology',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:35:00',
  sources: [
    { title: 'Source', url: 'https://www.servicenow.com/company/media/press-room/servicenow-to-acquire-element-ai.html' },
    { title: 'Source', url: 'https://en.wikipedia.org/wiki/Element_AI' }
  ],
};
