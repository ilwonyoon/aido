import { Company } from '../types';

export const darwinai: Company = {
  id: 'darwinai',
  name: 'DarwinAI',
  description:
    'AI-powered visual quality inspection platform that helps manufacturers detect defects and optimize production with explainable computer vision.',
  website: 'https://www.darwinai.com',
  headquarters: 'Waterloo, ON, Canada',
  region: 'other-intl' as const,
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['productivity'],

  // Business
  stage: 'Acquired (Apple, 2024)',
  normalizedStage: 'other' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3M',
      date: '2018-11',
      leadInvestors: ['Obvious Ventures', 'iNovia Capital'],
    },
    {
      stage: 'Unknown',
      amount: '$6M',
      date: '2022-09',
      leadInvestors: ['BDC Capital'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  // Competition
  competitors: [
    {
      name: 'Landing AI',
      description: 'Computer vision platform for manufacturing quality inspection.',
      whyTheyWin: 'Strong AI/vision brand with broad enterprise adoption.',
    },
    {
      name: 'Instrumental',
      description: 'AI-powered electronics manufacturing analytics and defect detection.',
      whyTheyWin: 'Deep focus on electronics data pipelines and manufacturing workflows.',
    },
    {
      name: 'Kitov.ai',
      description: 'AI vision inspection for industrial manufacturing lines.',
      whyTheyWin: 'Specialization in industrial hardware deployments.',
    },
  ],
  marketPosition: 'Enterprise AI vision platform for electronics and industrial manufacturing quality control.',
  moat: [
    'Explainable AI approach tailored for high-stakes quality inspection',
    'Proprietary computer-vision models optimized for edge deployment',
    'Manufacturing integrations with production workflows and QA teams',
  ],
  vsGiants: 'Competes by delivering turnkey, explainable vision models tailored to manufacturing QA teams.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'Computer-vision AI is the core product that enables automated quality inspection and defect detection.',
  aiDesignChallenges: [
    'Designing explainability for QA engineers validating AI detections',
    'Balancing model confidence with human-in-the-loop approvals',
    'Visualizing defect patterns and root-cause analytics for factories',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sheldon Fernandez',
      role: 'Co-founder & CEO',
      background: 'Canadian tech entrepreneur focused on scaling AI platforms for manufacturing applications.',
    },
    {
      name: 'Dr. Alexander Wong',
      role: 'Co-founder & Chief Scientist',
      background: 'AI researcher and professor specializing in explainable computer vision systems.',
    },
    {
      name: 'Arif Virani',
      role: 'Co-founder & COO',
      background: 'Operations leader focused on enterprise deployments in manufacturing environments.',
    },
  ],
  whyBuilding:
    'DarwinAI was founded to bring explainable AI to high-stakes manufacturing environments and reduce defect rates.',
  beliefs: [
    'Explainability is essential for AI adoption in manufacturing',
    'Quality assurance teams need actionable, real-time defect insights',
    'AI should integrate seamlessly with existing production workflows',
  ],
  greenFlags: ['Backed by strategic manufacturing investors', 'Explainable AI focus in regulated environments'],
  redFlags: ['Industrial sales cycles are long', 'Crowded AI vision market'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Defect detection logic and confidence thresholds',
        'Explainability workflows for QA approvals',
        'Edge/line integration for real-time inspection',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model performance monitoring for false positives/negatives',
        'Factory-level KPI dashboards for yield and scrap reduction',
        'Feedback loops from QA teams to improve models',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Inspector dashboards for defect review',
        'Reporting and audit exports for compliance',
        'Admin workflows for model deployment',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Manufacturing quality assurance and operations teams',
    secondary: 'Electronics production engineers and plant managers',
  },
  userProblems: [
    'Manual inspection slows production and misses defects',
    'QA teams need explainable AI to trust automated decisions',
    'Manufacturers lack real-time visibility into defect patterns',
    'Production lines need low-latency AI that works on edge devices',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Explainable AI product design in manufacturing', 'Complex AI/edge system workflows'],
    whyNot: ['Industrial sales cycles', 'Post-acquisition uncertainty'],
    nextActions: ['Monitor post-acquisition product direction', 'Track open design hiring if it returns'],
  },

  // Meta
  lastUpdated: '2026-02-07T13:30:00',
  sources: [
    { title: 'Source', url: 'https://www.darwinai.com' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20220922005348/en/DarwinAI-Raises-6-Million-in-Strategic-Funding-to-Scale-Explainable-AI-for-Production-Quality-Inspection' },
    { title: 'Source', url: 'https://www.globenewswire.com/news-release/2018/11/14/1651044/0/en/DarwinAI-Secures-3-Million-Seed-Investment-For-Proprietary-AI-Technology.html' },
    { title: 'Source', url: 'https://www.globenewswire.com/news-release/2018/05/24/1511472/0/en/DarwinAI-Secures-2-8-Million-Seed-Investment-For-Proprietary-AI-Technology.html' },
    { title: 'Source', url: 'https://mergr.com/darwinai-acquired-by-apple' }
  ],
};
