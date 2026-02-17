import { Company } from '../types';

export const openOceanRobotics: Company = {
  id: 'open-ocean-robotics',
  name: 'Open Ocean Robotics',
  description:
    'Autonomous solar-powered surface vehicle company building the DataXplorer USV for persistent ocean monitoring, maritime security, and marine carbon removal verification.',
  website: 'https://openoceanrobotics.com',
  headquarters: 'Victoria, BC, Canada',
  remote: 'No',

  ogImage: '/og-images/open-ocean-robotics-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'CA$6M (4 rounds)',
  fundingHistory: [
    {
      stage: 'Unknown',
      amount: 'Undisclosed',
      date: '2019-06',
      leadInvestors: ['Spring'],
    },
    {
      stage: 'Seed',
      amount: 'CA$4M',
      date: '2021-12',
      leadInvestors: ['Sustainable Development Technology Canada'],
    },
    {
      stage: 'Seed',
      amount: 'CA$2.8M',
      date: '2024-10',
      leadInvestors: ['Antares Ventures', 'Spring Impact Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'NOAA, Dalhousie University, Ocean Frontier Institute, Nauticus Robotics, GSTS, ASL Environmental Sciences',

  // Competition
  competitors: [
    {
      name: 'Saildrone',
      description: 'Wind and solar-powered autonomous surface vehicles for ocean data.',
      whyTheyWin: 'Large fleet scale (100+ vehicles), major NOAA and DoD contracts.',
    },
    {
      name: 'Liquid Robotics (Boeing)',
      description: 'Wave Glider uncrewed surface vehicles for persistent ocean sensing.',
      whyTheyWin: 'Acquired by Boeing; mature platform with defense adoption.',
    },
    {
      name: 'Ocean Aero',
      description: 'Hybrid surface/subsurface autonomous vehicles for maritime ISR.',
      whyTheyWin: 'Dual-mode vehicle operates above and below water.',
    },
  ],
  marketPosition: 'Solar-powered, zero-emission USVs for long-duration ocean monitoring and carbon removal research.',
  moat: [
    'Zero-emission solar-powered design for multi-month autonomous missions',
    'AI-driven Underwater Listener acoustic analytics platform',
    'NOAA IDIQ contracts and government partnerships',
    'Expanding into marine carbon removal monitoring (emerging market)',
  ],
  vsGiants: 'Differentiates from Saildrone and Boeing/Liquid Robotics with smaller, more affordable zero-emission vessels and a focus on carbon removal monitoring — a nascent market the giants have not prioritized.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to autonomous navigation, mission planning, and the Underwater Listener acoustic classification system. The vessel cannot operate without AI-driven decision-making.',
  aiDesignChallenges: [
    'Remote mission control UX for multi-month unattended deployments',
    'AI acoustic classification transparency and trust',
    'Real-time anomaly alerting and operator intervention design',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Julie Angus',
      role: 'Co-founder & CEO',
      background: 'First woman to row across the Atlantic (10,000 km). MSc Molecular Biology, UVic. National Geographic Adventurer of the Year. NATO Director for Maritime Unmanned Systems.',
    },
    {
      name: 'Colin Angus',
      role: 'Co-founder & CTO',
      background: 'First person to complete a human-powered circumnavigation of the globe. Named Outside Magazine "Top 25 Bold Visionaries." Fellow of Canadian Geographic Society.',
    },
  ],
  whyBuilding:
    'Ocean data collection is expensive, dangerous, and carbon-intensive. Julie and Colin channeled their ocean exploration experience into building autonomous vessels that make monitoring safer and sustainable.',
  beliefs: [
    'Persistent ocean data enables better environmental and security decisions',
    'Zero-emission vessels are essential for sustainable ocean monitoring',
    'Autonomy reduces human risk in harsh maritime environments',
  ],
  greenFlags: [
    'NOAA multi-year contracts validate product-market fit',
    'Marine carbon removal monitoring is a fast-growing market',
    'Extraordinary founder story and mission credibility',
    'UK/Europe expansion via Autonomous Maritime Solutions partnership (Aug 2025)',
  ],
  redFlags: [
    'Capital-intensive hardware business with slow sales cycles',
    'Small team with Glassdoor reviews citing low pay and layoffs',
    'No dedicated design team or function',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0 (no dedicated designers; engineering-led product)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Autonomous mission planning and exception handling rules',
        'AI acoustic classification logic and alert thresholds',
        'Safety constraints for ocean navigation autonomy',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Sensor data quality and vessel telemetry monitoring',
        'Fleet performance analytics and reliability dashboards',
        'AI classification accuracy review workflows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'XplorerView cloud mission control dashboard',
        'Operator alerts and incident response UI',
        'Customer data reporting and visualization portal',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Government agencies (NOAA, defense) and offshore energy operators',
    secondary: 'Climate research institutions and marine carbon removal projects',
  },
  userProblems: [
    'Crewed ocean data collection is expensive and dangerous',
    'Continuous multi-month monitoring requires long-endurance vessels',
    'Carbon removal verification needs persistent autonomous measurement',
    'Maritime security requires real-time acoustic threat detection',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Julie Angus',
      role: 'CEO & Co-founder',
      platform: 'podcast',
      url: 'https://www.fugro.com/news/podcasts/julie-angus-rowboats-robot-boats-podcast-fugro',
      description: 'Fugro podcast "From Rowboats to Robot Boats" — how ocean adventure experience shaped the product vision for autonomous marine monitoring.',
    },
    {
      name: 'Julie Angus',
      role: 'CEO & Co-founder',
      platform: 'podcast',
      url: 'https://sut.buzzsprout.com/1000288/episodes/14722077-pod-84-julie-angus-ocean-adventurer-and-ceo-of-open-ocean-robotics',
      description: 'Underwater Technology Podcast — discusses AI-driven ocean data collection and the shift from manned to autonomous marine operations.',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Small, collaborative team with strong environmental mission. Reviewers praise the culture and camaraderie from C-suite down.',
      url: 'https://www.glassdoor.com/Reviews/Open-Ocean-Robotics-Reviews-E4526611.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Low pay, infrequent raises, and occasional layoffs due to funding constraints. Some reviewers cite management disconnects.',
      url: 'https://www.glassdoor.com/Reviews/Open-Ocean-Robotics-Reviews-E4526611.htm',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      'NOAA multi-year IDIQ contracts (Sep 2023 – Aug 2026)',
      'CA$2.8M seed round closed Oct 2024',
      'GSTS autonomous maritime security demo Dec 2025',
      'UK/Europe reseller partnership via Autonomous Maritime Solutions (Aug 2025)',
    ],
    tam: '$5B+ (autonomous maritime systems and ocean monitoring)',
    ceiling: 'Early innings: marine carbon removal monitoring is nascent and expanding rapidly',
    tailwinds: [
      'Global push for ocean carbon removal verification',
      'Government defense spending on unmanned maritime systems',
      'Climate monitoring mandates increasing worldwide',
    ],
    headwinds: [
      'Saildrone dominates government USV contracts at scale',
      'Hardware manufacturing is capital-intensive and slow to scale',
      'Regulatory uncertainty for autonomous vessel operations',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: zero-emission design and carbon removal focus are differentiators, but not yet defensible at scale',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'First designer hire opportunity — shape product from scratch',
      'Compelling founder story and environmental mission',
      'Level B AI autonomy with complex UX challenges',
    ],
    whyNot: [
      'No existing design team or design culture',
      'Low compensation reported on Glassdoor',
      'Capital-intensive hardware startup with funding risk',
      'Victoria, BC location with no remote option',
    ],
    nextActions: [
      'Monitor for first design hire posting',
      'Track next funding round for growth signal',
    ],
  },

  // Meta
  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Open Ocean Robotics - Official Website', url: 'https://openoceanrobotics.com' },
    { title: 'Open Ocean Robotics - CA$2.8M Round (Oct 2024)', url: 'https://www.openoceanrobotics.com/post/open-ocean-robotics-closes-2-8m-investment-round-to-further-scale-commercial-operations-for-sustain' },
    { title: 'GSTS & Open Ocean Robotics Maritime Security Demo (Dec 2025)', url: 'https://oceannews.com/news/defense/gsts-and-open-ocean-robotics-unveil-nextgen-autonomous-maritime-security-system/' },
    { title: 'Workable Careers - No Product Design roles found', url: 'https://apply.workable.com/open-ocean-robotics/' },
    { title: 'Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/Open-Ocean-Robotics-Reviews-E4526611.htm' },
  ],
};
