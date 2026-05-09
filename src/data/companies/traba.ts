import { Company } from '../types';

export const traba: Company = {
  id: 'traba',
  name: 'Traba',
  description: 'AI-powered light industrial staffing marketplace connecting warehouses, manufacturers, and event venues with on-demand workers — with 99% fill rate and same-day job matching.',
  website: 'https://traba.work',
  headquarters: 'Miami, FL',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown (sizable increase reported in Oct 2023)',
  totalFunding: '$43.6M',
  fundingHistory: [
    { stage: 'Seed', amount: '$1.6M', date: '2021-11', leadInvestors: ['General Catalyst'] },
    { stage: 'Series A', amount: '$20M', date: '2022-07', leadInvestors: ['Khosla Ventures'] },
    { stage: 'Series A', amount: '$22M', date: '2023-10', leadInvestors: ['Founders Fund'] },
  ],
  revenue: 'Unknown (5x growth; started at $1M ARR in Jul 2022, 4x YoY since)',
  growth: '4x+ revenue YoY; 99% fill rate vs. industry average; expanding to 7+ states',
  runway: 'Strong (Founders Fund A2 Oct 2023, described as "highest-potential startup")',
  customers: 'Distribution centers, warehouses, food processing facilities, manufacturers, event venues',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '4x+ YoY revenue; started at $1M ARR in Jul 2022, 5x growth per their careers page',
    userGrowth: 'Tens of thousands of workers on platform; 100+ business customers across 7 states',
    signals: [
      'Founders Fund called it "highest-potential startup" in Fund VIII (Oct 2023)',
      '99% fill rate vs. industry average fill problems',
      'Expansion from Florida to 7 states in 24 months',
      '4x revenue growth in 12 months',
    ],
    tam: '$200B+ US temporary staffing market; light industrial = $50B+ subset',
    marketShare: '<0.1% of TAM = enormous runway',
    ceiling: 'Large TAM but marketplace liquidity requirements make geographic scaling hard',
    tailwinds: [
      'Labor shortages in light industrial driving demand for flexible staffing solutions',
      'E-commerce growth = sustained demand for warehouse and distribution workers',
      'Gig economy normalization among blue-collar workers',
      'AI matching dramatically outperforms traditional staffing agency fill rates',
      'Staffing industry historically low NPS = high switching incentive for businesses',
    ],
    headwinds: [
      'Instawork and Wonolo (well-funded competitors) in same space',
      'Geographic expansion requires local worker supply liquidity to work',
      'Regulatory complexity around gig worker classification varies by state',
      'Low take rate potential in commodity staffing limits revenue ceiling',
    ],
    moatType: 'network-effects',
    moatStrength: 'Marketplace network effects: more workers → better fill rates → more businesses → more workers. Geographic density creates winner-take-most dynamics.',
  },

  // Competition
  competitors: [
    {
      name: 'Instawork',
      description: 'Flexible staffing marketplace for hospitality and industrial workers ($60M+ raised).',
      whyTheyWin: 'Larger geographic footprint, hospitality vertical depth, 6 years head start.',
    },
    {
      name: 'Wonolo',
      description: 'On-demand staffing platform for blue-collar work ($200M+ raised).',
      whyTheyWin: 'More mature marketplace, Coca-Cola (Fortune 500 customer) on platform.',
    },
    {
      name: 'Traditional staffing agencies',
      description: 'ManpowerGroup, Adecco, Kelly Services — legacy industrial staffing.',
      whyTheyWin: 'Established relationships, compliance infrastructure, multi-decade track record.',
    },
  ],
  moat: [
    '99% fill rate (vs. industry struggles) — quality brand in worker and business communities',
    'AI geotracking and matching creates fill speed competitive advantage',
    'Founders Fund backing = credibility in a relationship-driven industry',
  ],

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI as Major Feature: The marketplace works without AI, but AI-powered shift matching, geotracking, and worker reliability scoring are core to achieving the 99% fill rate and competitive advantage.',
  aiDesignChallenges: [
    'Designing for two very different users: blue-collar workers (mobile-first) and business operators (desktop ops)',
    'Trust design: helping workers understand AI-matched shift recommendations',
    'Reliability score transparency — how does a worker improve their score?',
    'Real-time ops dashboards for businesses managing hundreds of workers on a shift',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mike Shebat',
      role: 'CEO & Co-founder',
      background: 'Listed in HyperTrack\'s Top 50 Leaders Shaping the Gig Economy. Led Traba from $0 to Founders Fund\'s "highest-potential startup."',
    },
    {
      name: 'Akshay Buddiga',
      role: 'CTO & Co-founder',
      background: 'Engineering leader. Built Traba\'s AI matching and geotracking infrastructure.',
    },
  ],
  whyBuilding: 'Saw the light industrial staffing industry was completely broken — agencies couldn\'t fill shifts reliably, workers had no transparency, and businesses had no tech-native alternative to human-only staffing agencies.',
  beliefs: [
    'Technology can deliver 99% fill rates that staffing agencies cannot',
    'Workers deserve transparency on how they\'re evaluated and matched',
    'The staffing industry is a massive opportunity that has been largely untouched by tech',
  ],
  designPhilosophy: 'Unknown',

  greenFlags: [
    'Founders Fund "highest-potential startup" endorsement = elite investor signal',
    '99% fill rate is a concrete, measurable product differentiation',
    'Light industrial is a large, underserved market with clear tech gap',
    '4x+ revenue growth with Khosla Ventures and Founders Fund backing',
  ],
  redFlags: [
    'Last known funding was Oct 2023 — no 2024/2025 round visible, potential plateau',
    'Instawork and Wonolo are larger, better-funded competitors',
    'Miami HQ limits talent access vs. SF/NYC-based competitors',
    'Gig worker classification laws (like CA AB5) create regulatory uncertainty',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company size 50+)',
    designHead: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Worker shift matching logic and recommendation UI',
        'Business shift posting workflows and worker selection',
        'AI reliability scoring and transparency for workers',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Fill rate analytics and workforce planning dashboards',
        'Worker performance tracking and feedback loops',
        'Business ROI vs. traditional staffing reporting',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Worker mobile app: shift discovery, scheduling, geocheck-in',
        'Business web dashboard: posting shifts, managing workers, reviewing performance',
        'Onboarding flows for both sides of the marketplace',
      ],
    },
  },
  productStage: '1→10',

  // Open Roles
  openRoles: [],
  designerLinks: [],
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Two-sided marketplace = complex, interesting design system (worker mobile + business web)',
      'Founders Fund backing = elite investor signal',
      '99% fill rate = product with real competitive differentiation to design around',
    ],
    whyNot: [
      'No 2024/2025 funding news — possible growth plateau after 2023 round',
      'Light industrial / staffing is not a high-prestige design domain',
      'Miami-based = geographic constraint for NYC/SF-based candidates',
      'AI is a feature, not the core — less frontier AI design work',
    ],
    nextActions: [
      'Check traba.work/company/careers for open design roles',
      'Watch for Series B announcement as growth signal',
    ],
  },

  // Meta
  lastUpdated: '2026-04-14T00:00:00',
  sources: [
    { title: 'Traba raises $22M led by Founders Fund — GlobeNewswire', url: 'https://www.globenewswire.com/news-release/2023/10/26/2767614/0/en/Traba-Raises-22M-led-by-Founders-Fund-as-the-first-investment-from-Fund-VIII.html' },
    { title: 'Traba raises $20M — TechCrunch', url: 'https://techcrunch.com/2022/07/07/traba-raises-20m-to-match-contractors-with-events-and-warehouse-work/' },
    { title: 'Traba Business Breakdown — Contrary Research', url: 'https://research.contrary.com/company/traba' },
    { title: 'Traba website', url: 'https://traba.work' },
    { title: 'Traba Crunchbase', url: 'https://www.crunchbase.com/organization/traba-393f' },
  ],
};
