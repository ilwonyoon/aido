import { Company } from '../types';

export const leen: Company = {
  id: 'leen',
  name: 'Leen',
  description: 'Unified data API for cybersecurity — the "Plaid for security data" that aggregates, de-duplicates, and standardizes data from 200+ security tools.',
  website: 'https://www.leen.dev',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/leen-og.webp',

  category: 'developer-tools' as const,
  aiTypes: ['ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  industries: ['security'],

  stage: 'Pre-seed',

  normalizedStage: 'pre-seed' as const,
  valuation: 'Unknown',
  totalFunding: '$2.8M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$2.8M',
      date: '2024-07',
      leadInvestors: ['11.2 Capital'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'GRC platforms (Drata, Thoropass, Scytale), security product companies, MSPs/MSSPs',

  competitors: [
    {
      name: 'Monad',
      description: 'Security data platform for integrating and normalizing security data into data warehouses.',
      whyTheyWin: 'Data warehouse-centric approach appeals to data engineering teams.',
    },
    {
      name: 'Merge',
      description: 'Unified API for HR, payroll, CRM, and ticketing integrations.',
      whyTheyWin: 'Established brand in unified APIs with broader category coverage, though not security-focused.',
    },
    {
      name: 'Nango',
      description: 'Open-source unified API for SaaS integrations.',
      whyTheyWin: 'Open-source model attracts developer adoption; could expand into security vertical.',
    },
  ],
  marketPosition: 'First dedicated unified API for cybersecurity data',
  moat: [
    '200+ pre-built security tool connectors with deep domain expertise',
    'Security-specific data normalization (VMS, EDR, CNAPP, IAM, MDM)',
    'SOC 2 Type II certified — table-stakes trust for security buyers',
  ],
  vsGiants: 'Horizontal unified API players (Merge, Nango) lack security-specific data models and compliance certifications; building custom integrations is prohibitively expensive for security teams.',

  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is not the core product — Leen is fundamentally a data integration/API platform. AI could enhance data normalization and anomaly detection, but the value prop is unified connectivity, not AI.',
  aiDesignChallenges: [
    'Developer experience design for complex security data models',
    'Credential sharing UX (OnRamp component) for end-customer trust',
    'Integration status monitoring and error state communication',
  ],

  founders: [
    {
      name: 'Kabir Mathur',
      role: 'Co-founder & CEO',
      background: 'Business dev and partnerships leader. Former Head of BD at Kiip, Product Partnerships at Typeform. Georgia Tech graduate.',
    },
    {
      name: 'Neel Arora',
      role: 'Co-founder & CTO',
      background: 'Built data normalization platform at BlueVoyant (MDR/Threat Intel). Virginia Tech CS graduate.',
    },
    {
      name: 'Akash Bhat',
      role: 'Co-founder & COO',
      background: 'Seven years in PE/VC. Ex-Republic Venture Partner, Columbia Business School. Host of The Desi VC Podcast.',
    },
  ],
  whyBuilding: 'Security teams waste months building and maintaining custom integrations with fragmented security tools. Leen provides a single API to access data from hundreds of vendors.',
  beliefs: [
    'Security data should be accessible, not siloed across dozens of tools',
    'Developer experience is critical for security infrastructure adoption',
    'Customer centricity over feature bloat',
  ],
  greenFlags: [
    'Clear vertical focus — security-only unified API avoids horizontal dilution',
    'CTO built similar platform at BlueVoyant — domain expertise validated',
    'Named customers (Drata, Thoropass) already using the platform',
  ],
  redFlags: [
    'Very early stage (pre-seed, 1-10 employees) — high execution risk',
    'No disclosed AI differentiation — could be commoditized by horizontal API players expanding into security',
    'Limited public traction data and no disclosed revenue',
  ],

  designTeam: {
    teamSize: 'Unknown (1-10 total employees, likely no dedicated designer yet)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Integration setup wizard and credential sharing flows',
        'Data model mapping and connector configuration',
        'Error handling and retry logic for failed syncs',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Integration health monitoring dashboards',
        'Data quality and sync completeness metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer portal and API documentation experience',
        'OnRamp embeddable component for customer credential sharing',
        'Integration management dashboard and user portal',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Product and engineering teams at security product companies',
    secondary: 'Security teams building internal tools and MSP/MSSP operations teams',
  },
  userProblems: [
    'Integrating with dozens of security vendor APIs takes months of engineering time',
    'Each security tool has different data formats, requiring custom normalization',
    'Maintaining integrations breaks when vendors update their APIs',
    'Credential sharing between security platforms lacks standardized UX',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Values customer centricity, radical candor, meritocracy, and bias toward action. Small founding team (1-10) with strong engineering culture.',
      url: 'https://www.leen.dev/about',
    },
  ],

  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$2.8M pre-seed led by 11.2 Capital (Jul 2024)',
      'Named GRC customers: Drata, Thoropass, Scytale',
      'CrowdStrike Marketplace listing',
    ],
    tam: '$10B+ (security integration and data management market)',
    ceiling: 'Early innings: security tool fragmentation is growing, not shrinking',
    tailwinds: [
      'Security tool sprawl increasing (avg enterprise uses 70+ security tools)',
      'GRC automation demand growing with compliance requirements',
      'API-first infrastructure trend in cybersecurity',
    ],
    headwinds: [
      'Horizontal unified API players (Merge, Nango) could expand into security',
      'Large security vendors (CrowdStrike, Palo Alto) building their own integrations',
      'Small team competing in enterprise-grade security market',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: deep security domain expertise and 200+ connectors create switching costs, but early stage limits defensibility',
  },

  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      '0→1 product design opportunity — shape developer experience from scratch',
      'Clear vertical focus in growing security integration market',
    ],
    whyNot: [
      'Very early stage with no dedicated design team — likely no design hire soon',
      'Level C AI-native — limited AI design challenges',
      'Pre-seed with 1-10 employees — high risk, low stability',
    ],
    nextActions: [
      'Monitor for Series A and design hiring signals',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Leen Official Website', url: 'https://www.leen.dev' },
    { title: 'Leen Pre-Seed Funding Announcement', url: 'https://www.leen.dev/post/leen-funding-annoucement' },
    { title: 'Leen About Page', url: 'https://www.leen.dev/about' },
    { title: 'Leen Product Page', url: 'https://www.leen.dev/product' },
    { title: 'Leen on Tracxn - Funding & Investors', url: 'https://tracxn.com/d/companies/leen/__pi5KwLVKphJX1iqLkzDd7QTrZAlVFMStt20bE3ryjZM/funding-and-investors' },
    { title: 'Wellfound - Leen Security Careers (no Product Design roles found)', url: 'https://wellfound.com/company/leen-security/jobs' },
  ],
};
