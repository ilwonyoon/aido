import { Company } from '../types';

export const bluedot: Company = {
  id: 'bluedot',
  name: 'BlueDot',
  description: 'AI-powered disease intelligence platform that detects and tracks infectious disease risks.',
  website: 'https://bluedot.global',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$7.0M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Governments, health systems, and enterprises monitoring disease risk',

  // Competition
  competitors: [
    {
      name: 'HealthMap',
      description: 'Global disease tracking and outbreak monitoring platform.',
      whyTheyWin: 'Longstanding academic partnerships and global datasets.',
    },
    {
      name: 'Metabiota',
      description: 'Epidemic risk analytics platform for insurers and enterprises.',
      whyTheyWin: 'Insurance industry adoption and risk analytics focus.',
    },
    {
      name: 'EPIWATCH',
      description: 'Outbreak detection and monitoring platform.',
      whyTheyWin: 'Public health surveillance specialization.',
    },
  ],
  marketPosition: 'AI-driven infectious disease intelligence and early warning system.',
  moat: ['Global data pipeline for disease signals', 'AI risk modeling for outbreak detection'],
  vsGiants: 'Specialized in disease intelligence vs general analytics platforms.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI and data analysis are core to disease signal detection.',
  aiDesignChallenges: [
    'Communicating risk and uncertainty to decision-makers',
    'Designing actionable alerts for public health teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Kamran Khan',
      role: 'Founder & CEO',
      background: 'Physician and epidemiologist who founded BlueDot to build AI-driven outbreak detection.',
    },
  ],
  whyBuilding: 'Detect outbreaks earlier and help organizations respond faster.',
  beliefs: ['Data-driven early detection saves lives', 'AI can augment global health readiness'],
  greenFlags: ['Clear public health impact', 'Proven use cases in outbreak tracking'],
  redFlags: ['Long procurement cycles in government/public health'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Risk modeling interface design', 'Alerting logic and workflow UX'] },
    evaluation: { level: 'medium', tasks: ['Signal validation and QA surfaces'] },
    interface: { level: 'medium', tasks: ['Dashboard and geospatial analytics UX'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Public health agencies and epidemiology teams',
    secondary: 'Enterprise risk and operations teams',
  },
  userProblems: [
    'Outbreak signals are fragmented and slow to detect',
    'Decision-makers need actionable, trusted risk alerts',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['High-impact health intelligence UX', 'AI + data visualization challenges'],
    whyNot: ['Government procurement cycles'],
    nextActions: ['Verify hiring and design org scale'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$7.0M total funding (Seedtable)'],
    tam: 'Global health intelligence and outbreak risk market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Expansion into broader health risk intelligence',
    tailwinds: ['Growing demand for outbreak intelligence'],
    headwinds: ['Budget sensitivity in public health'],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:55:00',
  sources: [
    { title: 'BlueDot', url: 'https://bluedot.global' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
