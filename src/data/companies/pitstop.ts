import { Company } from '../types';

export const pitstop: Company = {
  id: 'pitstop',
  name: 'Pitstop',
  description:
    'AI-powered fleet maintenance platform that uses vehicle data to predict failures and reduce downtime for commercial fleets.',
  website: 'https://www.pitstopconnect.com',
  headquarters: 'Kitchener, ON, Canada',
  region: 'other-intl' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$5.47M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$3.8M',
      date: '2023-04',
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  // Competition
  competitors: [
    {
      name: 'Uptake',
      description: 'Asset performance management platform with predictive maintenance analytics.',
      whyTheyWin: 'Large enterprise footprint in industrial predictive maintenance.',
    },
    {
      name: 'Samsara',
      description: 'Fleet operations platform with telematics and maintenance workflows.',
      whyTheyWin: 'Broad fleet management suite and strong enterprise adoption.',
    },
    {
      name: 'Fleetio',
      description: 'Fleet maintenance management software with preventive maintenance tooling.',
      whyTheyWin: 'Established SMB and mid-market footprint with fleet workflows.',
    },
  ],
  marketPosition: 'Predictive maintenance AI platform focused on commercial fleet reliability and cost reduction.',
  moat: [
    'Machine-learning models tuned to vehicle telematics and fault codes',
    'Predictive insights that reduce unplanned fleet downtime',
    'Integration with maintenance workflows and fleet management systems',
  ],
  vsGiants: 'Competes by focusing on AI-first predictive maintenance rather than general fleet telematics.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-driven predictive maintenance and failure forecasting are central to the product\u2019s value.',
  aiDesignChallenges: [
    'Communicating AI predictions and confidence to fleet managers',
    'Designing workflows for proactive maintenance scheduling',
    'Building trust when AI flags high-risk vehicle issues',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Shiva Bhardwaj',
      role: 'Founder & CEO',
      background: 'AI researcher focused on predictive fleet maintenance',
    },
  ],
  whyBuilding:
    'Pitstop was created to help fleets predict vehicle failures early and reduce costly downtime with AI insights.',
  beliefs: [
    'Fleet data should enable proactive maintenance decisions',
    'AI can reduce costs and improve safety for fleet operators',
    'Operational teams need actionable, trusted predictions',
  ],
  greenFlags: ['Series A funding to scale fleet analytics', 'Clear ROI-driven value proposition for fleets'],
  redFlags: ['Long sales cycles with enterprise fleets', 'Competition from broader fleet management suites'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Predictive maintenance logic and alerting workflows',
        'Failure severity scoring and prioritization rules',
        'Integration logic with maintenance scheduling tools',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model performance validation for failure predictions',
        'User feedback loops for false positives/negatives',
        'ROI tracking for maintenance interventions',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Fleet health dashboards and reporting',
        'Vehicle-level issue detail views',
        'Admin workflows for fleet configuration',
      ],
    },
  },
  productStage: '1\u219210',

  // User Context
  targetAudiences: {
    primary: 'Fleet maintenance and operations managers',
    secondary: 'Enterprise logistics and transportation leaders',
  },
  userProblems: [
    'Fleet managers lack early warning of vehicle failures',
    'Maintenance costs rise due to unplanned downtime',
    'Operators need clear prioritization for repairs',
    'Fleet data is fragmented across multiple systems',
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
    whyJoin: ['AI + IoT operational design problems', 'Clear ROI for customers'],
    whyNot: ['Enterprise sales complexity', 'Limited public design team visibility'],
    nextActions: ['Monitor hiring updates', 'Track fleet analytics partnerships'],
  },

  // Meta
  lastUpdated: '2026-02-07T14:10:00',
  sources: [
    { title: 'Source', url: 'https://www.pitstopconnect.com' },
  ],
};
