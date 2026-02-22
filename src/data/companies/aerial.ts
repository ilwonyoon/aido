import type { Company } from '../types';

export const aerial: Company = {
  id: 'aerial',
  name: 'Aerial Technologies',
  description: 'AI-powered WiFi motion sensing platform that detects and classifies human activity through existing wireless infrastructure, without cameras, sensors, or wearables.',
  website: 'https://aerial.ai',
  headquarters: 'Montreal, QC',
  region: 'other-intl' as const,
  remote: 'Hybrid',
  ogImage: '/og-images/aerial-og.webp',
  category: 'vertical-saas' as const,
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'enterprise'],
  industries: ['healthcare', 'security'],
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$6.8M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$2.25M',
      date: '2017-03',
      leadInvestors: [],
    },
    {
      stage: 'Seed',
      amount: '$3M',
      date: '2018-11',
      leadInvestors: ['Intel Capital'],
    },
    {
      stage: 'Seed',
      amount: '$1.5M',
      date: '2020-02',
      leadInvestors: ['Yaletown'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'ISPs, telecare providers, building managers',
  competitors: [
    {
      name: 'Cognitive Systems',
      description: 'Most widely deployed WiFi sensing tech, partnered with 160+ ISPs.',
      whyTheyWin: 'Massive ISP distribution and first-mover scale in WiFi Motion.',
    },
    {
      name: 'Origin Wireless',
      description: 'WiFi sensing for smart home, security, and wellness monitoring.',
      whyTheyWin: 'University research roots (UMD), strong patent portfolio.',
    },
    {
      name: 'Nami',
      description: 'WiFi-based presence detection for smart buildings and security.',
      whyTheyWin: 'Strategic partnership with Aerial; complementary edge-to-cloud stack.',
    },
  ],
  marketPosition: 'Early-stage WiFi motion intelligence provider focused on eldercare and ISP integration',
  moat: [
    'Patents dating back to 2010 for WiFi motion detection',
    'Hybrid cloud/edge deployment model for ISP partners',
    'IEEE 802 and WBA active membership shaping WiFi sensing standards',
  ],
  vsGiants: 'Amazon (Ring/Alexa) and Google (Nest) use dedicated hardware; Aerial works with existing WiFi routers requiring zero additional hardware.',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator: ML models interpret WiFi signal distortions to classify human motion. Without AI, the product cannot function, but WiFi infrastructure is the delivery mechanism.',
  aiDesignChallenges: [
    'Designing ambient monitoring UX that respects elder privacy while keeping caregivers informed',
    'Visualizing invisible WiFi-derived motion data in an intuitive, non-technical way',
    'Balancing alert sensitivity: reducing false alarms without missing critical events',
  ],
  founders: [
    {
      name: 'Michel Allegue',
      role: 'Co-Founder & CTO',
      background: 'PhD in electronics/signal processing. 20+ scientific publications. Active IEEE 802.11 member driving WiFi sensing standards.',
    },
    {
      name: 'Helge Seetzen',
      role: 'Executive Chairman',
      background: 'Serial entrepreneur (BrightSide Technologies, sold to Dolby). CEO of TandemLaunch startup foundry. 150+ patents in imaging tech.',
    },
  ],
  whyBuilding: 'Believes existing WiFi infrastructure can be transformed into ubiquitous sensing to improve eldercare and home safety without invasive cameras or wearables.',
  beliefs: [
    'Ambient sensing should be invisible and privacy-preserving',
    'Existing infrastructure (WiFi) is underutilized for intelligence',
    'Eldercare needs affordable, non-intrusive monitoring at scale',
  ],
  greenFlags: [
    'Intel Capital as strategic investor validates core technology',
    'Patents since 2010 give deep IP moat in WiFi sensing',
    'Growing aging population creates massive tailwind for eldercare tech',
  ],
  redFlags: [
    'Small team (~30 employees) competing against well-funded Cognitive Systems',
    'Seed-stage since 2017 with no Series A yet raises growth concerns',
    'Revenue and customer traction metrics are not publicly disclosed',
  ],
  designTeam: {
    teamSize: 'Unknown (no public design team info found)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Defining motion classification thresholds and alert rules',
        'Designing caregiver notification logic and escalation flows',
        'Mapping WiFi signal patterns to human activity categories',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring false alarm rates vs missed event detection',
        'Evaluating caregiver satisfaction with alert relevance',
        'Assessing eldercare outcome improvements from monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Caregiver dashboard showing activity patterns and anomalies',
        'Mobile app for family members with real-time alerts',
        'ISP partner admin panel for fleet management',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'ISPs and telecom providers deploying value-added home services',
    secondary: 'Eldercare facilities and families monitoring aging relatives remotely',
  },
  userProblems: [
    'Cameras feel invasive for elderly monitoring; seniors refuse wearables',
    'ISPs need differentiated value-added services beyond connectivity',
    'Caregivers lack affordable, real-time insight into elder activity patterns',
    'Traditional telecare hardware is expensive to deploy and maintain at scale',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 3.8,
      content: 'Employees praise smooth academia-to-industry transition, strong R&D team collaboration, and good work-life balance.',
      url: 'https://www.glassdoor.com/Reviews/Aerial-Technologies-Montreal-Reviews-EI_IE1255752.0,19_IL.20,28_IM990.htm',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      'Partnerships with Mercku and nami for ISP distribution',
      'Broadcom WiFi 6/6E and Qualcomm platform integration',
      'Active IEEE 802 membership shaping industry standards',
    ],
    tam: '$15B (global ambient assisted living market)',
    ceiling: 'Early innings: WiFi sensing adoption still nascent, massive ISP channel opportunity',
    tailwinds: [
      'Aging population in developed nations driving eldercare demand',
      'WiFi 6/6E adoption expands sensing capabilities',
      'Privacy backlash against camera-based monitoring',
    ],
    headwinds: [
      'Cognitive Systems has 160+ ISP partnerships already',
      'Long sales cycles with ISP/telecom customers',
      'Seed-stage funding limits scaling speed',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: strong patent portfolio since 2010, but technology can be replicated by well-funded competitors',
  },
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Unique ambient sensing UX challenge: designing for invisible data',
      'Healthcare-adjacent mission improving eldercare outcomes',
    ],
    whyNot: [
      'Seed-stage since 2017 with no Series A signals slow growth',
      'No visible design team or open design roles',
      'Montreal-based with limited remote flexibility',
    ],
    nextActions: [
      'Monitor for Series A announcement',
      'Check for design role openings quarterly',
    ],
  },
  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Aerial Technologies - Official Website', url: 'https://aerial.ai/' },
    { title: 'Aerial Technologies - Company Page', url: 'https://aerial.ai/company' },
    { title: 'Aerial Technologies - Crunchbase', url: 'https://www.crunchbase.com/organization/aerial-technologies' },
    { title: 'Aerial Technologies $3M Intel Capital Round (2018)', url: 'https://www.globenewswire.com/news-release/2018/11/08/1648094/0/en/Aerial-Technologies-Raises-3M-US-Additional-Funding-Led-by-Intel-Capital-to-Boost-Functionality-Offering-and-Patent-Portfolio.html' },
    { title: 'Aerial Technologies Careers - no Product Design roles found', url: 'https://aerial.ai/careers' },
  ],
};
