import { Company } from '../types';

export const terrene: Company = {
  id: 'terrene',
  name: 'Terrene',
  description: 'Big data simplification platform that automates training and deployment of deep learning neural networks for business analytics.',
  website: 'https://terrene.co',
  headquarters: 'Waterloo, ON, Canada',
  remote: 'No',
  ogImage: '/og-images/terrene-og.webp',

  category: 'enterprise-ops' as const,
  aiTypes: ['data-analysis', 'automation'],
  markets: ['smb', 'b2b'],
  industries: ['productivity'],

  stage: 'Pre-seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$60K',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$60K',
      date: '2017-07',
      leadInvestors: ['Techstars', 'Right Side Capital Management'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  competitors: [
    {
      name: 'DataRobot',
      description: 'Automated ML platform for enterprise predictive analytics.',
      whyTheyWin: 'Massive funding ($1B+), enterprise brand, broader feature set',
    },
    {
      name: 'H2O.ai',
      description: 'Open-source AutoML platform for data science teams.',
      whyTheyWin: 'Open-source community, enterprise adoption, GPU-accelerated',
    },
    {
      name: 'BigML',
      description: 'Cloud-based ML platform for non-technical users.',
      whyTheyWin: 'Simpler UX, broader integrations, established customer base',
    },
  ],
  marketPosition: 'Early-stage AutoML platform targeting SMBs with no-code ML deployment',
  moat: [
    'Techstars network and validation',
    '5-minute setup claim vs 6-month alternatives',
    'Auto feature engineering reduces ML expertise barrier',
  ],

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core differentiator — the platform automates ML model training and deployment, but the underlying business problem (data analytics) existed before AI.',
  aiDesignChallenges: [
    'Simplifying complex ML workflows for non-technical business users',
    'Visualizing predictive model outputs and confidence levels',
    'Designing feedback loops for model improvement',
  ],

  founders: [
    {
      name: 'Francois le Roux',
      role: 'Co-founder & CEO',
      background: 'Led Terrene through Techstars accelerator. Now self-employed / working on Bounty Board.',
    },
    {
      name: 'Kash Pourdeilami',
      role: 'Co-founder (departed)',
      background: 'Now Principal Software Engineer at Atlassian. Previously at Secoda.',
    },
    {
      name: 'Cameron Mills',
      role: 'Co-founder',
      background: 'Co-founded Terrene in 2015 in Waterloo, ON.',
    },
    {
      name: 'David Schmidt',
      role: 'Co-founder',
      background: 'Co-founded Terrene. No recent public activity.',
    },
  ],
  whyBuilding: 'Believed ML should be accessible to all businesses, not just those with data science teams. Aimed to reduce ML setup from months to minutes.',
  beliefs: [
    'ML should be no-code and accessible to non-engineers',
    'Automated feature engineering removes biggest barrier to ML adoption',
    'SMBs deserve enterprise-grade predictive analytics',
  ],
  greenFlags: [
    'Techstars validation (competitive accelerator)',
    'Clear value proposition: 6 months → 5 minutes setup',
    'University of Waterloo tech ecosystem',
  ],
  redFlags: [
    'Founders have departed to other companies',
    'Only $60K raised — severely underfunded vs competitors',
    'Domain (terrene.co) no longer points to AI product',
    'No product activity or updates since ~2018',
  ],

  designTeam: {
    teamSize: 'Not publicly disclosed (2 total employees reported)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Automated ML pipeline configuration logic',
        'Data connector integration workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Model accuracy and performance visualization',
        'Predictive output confidence communication',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'No-code dashboard for ML model management',
        'Data visualization and analytics UI',
        'API endpoint configuration interface',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'SMB business analysts and operations teams without data science resources',
    secondary: 'Enterprise teams seeking rapid ML prototyping',
  },
  userProblems: [
    'ML integration requires 6+ months and dedicated data science teams',
    'Manual feature engineering is time-consuming and error-prone',
    'No-code ML tools lack predictive accuracy of custom solutions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'company',
      sentiment: 'neutral',
      content: 'Public messaging emphasized no-code ML accessibility for non-data-science teams with rapid setup claims.',
      url: 'https://www.investontario.ca/success-stories/terrene-brings-machine-learning-dorm-room-boardroom',
    },
    {
      source: 'investor',
      sentiment: 'neutral',
      content: 'Techstars-backed early-stage company profile suggested an accelerator-style, execution-focused founding culture.',
      url: 'https://www.crunchbase.com/organization/terrene',
    },
  ],

  tracking: {
    status: 'dead',
    fitScore: 1,
    whyJoin: [
      'Level B AI-native product with interesting AutoML design challenges',
    ],
    whyNot: [
      'Company appears inactive — founders departed, domain lost',
      'Only $60K funding, 2 employees, no recent product updates',
      'No design roles or team',
    ],
    nextActions: [],
    notes: 'Company appears defunct as of ~2018-2019. Founders moved to Atlassian, Secoda, and other ventures. Domain terrene.co now belongs to a landscape design studio.',
  },

  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Terrene - Crunchbase Company Profile', url: 'https://www.crunchbase.com/organization/terrene' },
    { title: 'Terrene - PitchBook Profile', url: 'https://pitchbook.com/profiles/company/177206-32' },
    { title: 'Invest Ontario - Terrene Success Story', url: 'https://www.investontario.ca/success-stories/terrene-brings-machine-learning-dorm-room-boardroom' },
    { title: 'Terrene Careers - no Product Design roles found (company inactive)', url: 'https://terrene.co' },
    { title: 'Terrene LinkedIn Company Profile', url: 'https://www.linkedin.com/company/terrene/' },
  ],
};
