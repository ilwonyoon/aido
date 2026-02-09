import { Company } from '../types';

export const openOceanRobotics: Company = {
  id: 'open-ocean-robotics',
  name: 'Open Ocean Robotics',
  description:
    'Autonomous surface vehicle company using solar-powered boats to collect and deliver ocean data for maritime operators.',
  website: 'https://openoceanrobotics.com',
  headquarters: 'Victoria, BC, Canada',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Pre-Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$2.8M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Government agencies, offshore energy operators, ports, and research organizations.',

  // Competition
  competitors: [
    {
      name: 'Saildrone',
      description: 'Autonomous surface vehicles for ocean data collection.',
      whyTheyWin: 'Large fleet scale and government contracts.',
    },
    {
      name: 'Liquid Robotics (Wave Glider)',
      description: 'Uncrewed surface vehicles for persistent ocean sensing.',
      whyTheyWin: 'Mature platform and defense adoption.',
    },
    {
      name: 'Ocean Aero',
      description: 'Hybrid surface/subsurface autonomous vehicles.',
      whyTheyWin: 'Dual-mode vehicle differentiation.',
    },
  ],
  marketPosition: 'Long-duration autonomous surface vehicles for ocean monitoring and data collection.',
  moat: [
    'Solar-powered autonomous vessels for long-duration missions',
    'Integrated ocean data platform for real-time monitoring',
    'Operational expertise in maritime deployments',
  ],
  vsGiants: 'Competes with larger defense and robotics firms by focusing on affordable, long-endurance surface robotics.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to autonomy and mission control, enabling long-duration ocean data collection without crews.',
  aiDesignChallenges: [
    'Autonomous mission planning and exception handling',
    'Trust and safety for unattended marine operations',
    'Monitoring dashboards for long-duration deployments',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Julie Angus',
      role: 'Co-founder & CEO',
      background: 'Co-founded Open Ocean Robotics to expand access to ocean data with autonomous vessels.',
    },
    {
      name: 'Colin Angus',
      role: 'Co-founder',
      background: 'Entrepreneur and explorer focused on maritime robotics and ocean innovation.',
    },
  ],
  whyBuilding:
    'Make ocean data collection safer, cheaper, and more scalable through autonomous surface robotics.',
  beliefs: [
    'Persistent ocean data unlocks better maritime decisions',
    'Autonomy can reduce risk and cost in offshore operations',
    'Sustainability matters in marine data collection',
  ],
  greenFlags: ['Clear product-market fit in maritime monitoring', 'Long-duration robotics advantage'],
  redFlags: ['Capital-intensive hardware deployments', 'Regulatory complexity in maritime operations'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Autonomous mission planning rules',
        'Safety constraints for ocean navigation',
        'Exception handling for vessel autonomy',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Telemetry and reliability monitoring',
        'Sensor data quality review',
        'Fleet performance analytics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Mission control dashboards',
        'Operator alerts and incident response UI',
        'Customer reporting portals',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Maritime operators and ocean data customers',
    secondary: 'Government agencies and offshore energy teams',
  },
  userProblems: [
    'Traditional ocean data collection is expensive and risky',
    'Continuous monitoring requires long-duration deployments',
    'Marine operations need real-time, reliable data feeds',
    'Staffing and vessel availability limit coverage',
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
    fitScore: 6,
    whyJoin: ['Maritime robotics with complex autonomy UX', 'Mission-driven ocean data impact'],
    whyNot: ['Hardware-heavy operations', 'Regulatory and deployment complexity'],
    nextActions: ['Track new funding rounds', 'Monitor hiring and product launches'],
  },

  // Meta
  lastUpdated: '2026-02-06T12:00:00',
  sources: [
    { title: 'Source', url: 'https://openoceanrobotics.com' },
    { title: 'Source', url: 'https://openoceanrobotics.com/contact/' },
    { title: 'Source', url: 'https://openoceanrobotics.com/about/' },
    { title: 'Source', url: 'https://spectrum.ieee.org/open-ocean-robotics' }
  ],
};
