import { Company } from '../types';

export const c2ro: Company = {
  id: 'c2ro',
  name: 'C2RO',
  description:
    'Privacy-first AI video analytics platform providing GDPR-compliant, biometric-free behavioral insights for retail, malls, and commercial real estate using existing camera infrastructure.',
  website: 'https://www.c2ro.com',
  headquarters: 'Montreal, QC, Canada',
  region: 'other-intl' as const,
  remote: 'Hybrid',

  ogImage: '/og-images/c2ro-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  totalFunding: 'CAD ~$3.8M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'CAD $1.1M',
      date: '2018-05',
      leadInvestors: ['Harbor Street Ventures'],
    },
    {
      stage: 'Series A',
      amount: 'CAD $2.25M',
      date: '2019-07',
      leadInvestors: ['Fonds Innovexport'],
    },
  ],
  revenue: '~$2.9M (2024)',
  growth: '~7% YoY ($2.7M → $2.9M)',
  customers: 'Accessite (90+ commercial sites), Lenovo ISG, Tier-1 global retailers',

  // Competition
  competitors: [
    {
      name: 'RetailNext',
      description: 'In-store analytics combining video, Wi-Fi, and AI for customer behavior insights.',
      whyTheyWin: 'Larger installed base, more mature analytics suite, broader sensor fusion.',
    },
    {
      name: 'Sensormatic (Johnson Controls)',
      description: 'Enterprise retail tech offering people counting via video, thermal, and Wi-Fi.',
      whyTheyWin: 'Massive corporate backing, global distribution, and bundled security solutions.',
    },
    {
      name: 'V-Count',
      description: 'Sensor-based analytics for retail traffic, layout optimization, and staffing.',
      whyTheyWin: 'Strong international presence and deep retail vertical integrations.',
    },
  ],
  marketPosition: 'Privacy-first AI video analytics for retail and commercial real estate with GDPR-compliant, biometric-free positioning.',
  moat: [
    'GDPR/PIPEDA-compliant biometric-free analytics — "100% faceless"',
    'Enterprise partnerships with Intel, SAP, Lenovo, Bosch, Telefonica',
    'Edge-cloud architecture leveraging existing camera infrastructure',
    'Patented RFID fusion technology for theft deterrence (ENTERA Fusion)',
  ],
  vsGiants: 'Differentiates via privacy-first compliance and no-new-hardware deployment model against larger platforms requiring proprietary sensor installations.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'Computer vision and deep learning are the core product — real-time behavioral analytics from video feeds. Not building foundation models, but AI is the essential differentiator.',
  aiDesignChallenges: [
    'Trust design: communicating privacy guarantees for video analytics to skeptical operators',
    'Data visualization: making demographic and behavioral metrics actionable for non-technical retail teams',
    'Edge-cloud latency: designing real-time dashboards that reflect live camera feed processing',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Soodeh Farokhi',
      role: 'Founder & former CTO (left 2021, now CPO at Nakisa)',
      background: 'PhD in Computer Science from Vienna University of Technology. Co-founded SOEA lab at Shahid Beheshti University. Named Top 750 Digital Innovators (2018), Top Young Entrepreneur in Quebec (2018).',
    },
    {
      name: 'Riccardo Badalone',
      role: 'CEO/CTO (since Oct 2017)',
      background: 'Former Co-founder & CEO of Diablo Technologies (100+ employees). B.Eng. Electrical Engineering from Concordia. Named Top 25 Retail Tech CEO (2024).',
    },
  ],
  whyBuilding:
    'Founded to bring privacy-compliant AI analytics to physical spaces, enabling businesses to understand customer behavior without violating privacy laws.',
  beliefs: [
    'Privacy and analytics can coexist — biometric-free is the future',
    'Existing camera infrastructure should be the sensor, not new hardware',
    'Real-time behavioral data transforms physical space operations',
  ],
  greenFlags: [
    'Strong tech partnerships: Intel, SAP, IBM, Bosch, Telefonica',
    'GDPR-compliant positioning becomes more valuable as privacy regulations tighten',
    'ENTERA Fusion won Best AI-Based Human Behavior Video Analytics Solution 2025',
  ],
  redFlags: [
    'Original founder (Soodeh Farokhi) left the company in 2021',
    'Very limited funding (~$3.35M CAD total since 2016)',
    'Small team (~23 employees) in a market with well-funded competitors',
    'No dedicated design team or design leadership',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '0 (no dedicated designers — engineering-driven team of ~23)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Customer journey tracking logic from video feed inference',
        'Privacy-preserving data processing rules and edge-cloud routing',
        'RFID fusion workflows for theft deterrence',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Accuracy monitoring for traffic and demographic analytics',
        'Calibration workflows for different physical environments',
        'GDPR/PIPEDA compliance auditability',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'ENTERA dashboards for footfall, conversion, and engagement',
        'Real-time alerts and operational anomaly detection',
        'Reporting exports for retail and real estate stakeholders',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Retail, mall, and commercial real estate operators',
    secondary: 'Smart city and enterprise facilities teams',
  },
  userProblems: [
    'Physical spaces lack reliable, privacy-safe behavioral analytics',
    'Deploying new sensor hardware is costly and slow for operators',
    'Retail teams need real-time conversion funnel data to optimize staffing and layout',
    'Theft deterrence requires correlated RFID and video signals',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Great startup work culture that cultivates team members towards writing high quality code. Colleagues described as helpful and insightful.',
      url: 'https://www.glassdoor.com/Overview/Working-at-C2RO-EI_IE1685634.11,15.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Reports of poor work-life balance with weekend and late work expected. Some mention menial tasks like data annotation and concerns about financial stability.',
      url: 'https://www.glassdoor.com/Overview/Working-at-C2RO-EI_IE1685634.11,15.htm',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'steady',
    revenueGrowth: '~7% YoY ($2.7M → $2.9M)',
    signals: [
      'Accessite deployment across 90+ commercial sites in Europe',
      'ENTERA Fusion award (Best AI Video Analytics 2025)',
      'Strategic partnerships with Intel, SAP, IBM, Bosch',
    ],
    tam: '$1.5B retail audience measurement market (15.9% CAGR to 2034)',
    ceiling: 'Mid-innings: privacy regulations tailwind, but limited funding constrains growth',
    tailwinds: [
      'GDPR and global privacy regulation expansion',
      'Retail digitization accelerating post-pandemic',
      'Demand for no-new-hardware analytics solutions',
    ],
    headwinds: [
      'Well-funded competitors (RetailNext, Sensormatic)',
      'Slow enterprise sales cycles in retail/real estate',
      'Limited funding constrains go-to-market expansion',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: privacy-compliant positioning is defensible but replicable by better-funded competitors',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Interesting computer vision product design challenges',
      'Privacy-first analytics is a growing regulatory tailwind',
    ],
    whyNot: [
      'No design team or design leadership — you would be the only designer',
      'Very limited funding and small team (~23)',
      'Original founder left in 2021',
      'No open design roles',
    ],
    nextActions: [
      'Monitor for design hiring signals',
      'Track enterprise customer expansion',
    ],
  },

  // Meta
  lastUpdated: '2026-02-13',
  sources: [
    { title: 'C2RO Official Website', url: 'https://www.c2ro.com' },
    { title: 'C2RO Seed Funding Announcement', url: 'https://www.globenewswire.com/news-release/2018/05/02/1495128/0/en/C2RO-Raises-1-1-M-Seed-Financing-to-Commercialize-Cloud-Based-Robotics-A-I-SaaS-Platform.html' },
    { title: 'C2RO Series A (BetaKit)', url: 'https://betakit.com/ai-and-robotics-enterprise-startup-c2ro-raises-2-25-million-series-a/' },
    { title: 'C2RO Revenue Data (GetLatka)', url: 'https://getlatka.com/companies/c2ro' },
    { title: 'C2RO Careers — no Product Design roles found', url: 'https://www.c2ro.com/careers' },
    { title: 'C2RO Glassdoor — no open positions', url: 'https://www.glassdoor.com/Jobs/C2RO-Jobs-E1685634.htm' },
  ],
};
