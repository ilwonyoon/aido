import { Company } from '../types';

export const lightsource: Company = {
  id: 'lightsource',
  name: 'LightSource',
  description: 'AI-native operating system for direct materials procurement, enabling enterprise buyers to discover suppliers, manage RFQs, compare bids, and track costs.',
  website: 'https://lightsource.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/lightsource-og.webp',
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['other'],
  stage: 'Series A',
  valuation: '$130M',
  totalFunding: '$33M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$33M',
      date: '2025-03',
      valuation: '$130M',
      leadInvestors: ['Lightspeed Venture Partners', 'Bain Capital Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: '10x ARR over 18 months',
  runway: 'Unknown',
  customers: 'Yum! Brands, BRP, Serta Simmons, HelloFresh, Shure',
  competitors: [
    {
      name: 'Coupa',
      description: 'Business spend management platform for enterprise procurement',
      whyTheyWin: 'Massive install base and full source-to-pay suite',
    },
    {
      name: 'SAP Ariba',
      description: 'Enterprise procurement with global supplier network of 5M+ suppliers',
      whyTheyWin: 'Deep SAP ecosystem integration and supplier network effects',
    },
    {
      name: 'Jaggaer',
      description: 'Source-to-pay platform for direct and indirect materials',
      whyTheyWin: 'Strong direct materials category management',
    },
  ],
  marketPosition: 'Only AI-native sourcing platform purpose-built for direct materials procurement',
  moat: [
    'AI-native architecture vs legacy procurement tools bolting on AI',
    'Direct materials specialization (75% of procurement teams use no software)',
    '$1B+ in spend processed, generating proprietary pricing intelligence',
  ],
  vsGiants: 'Legacy platforms (Coupa, SAP Ariba) are broad P2P suites; LightSource is purpose-built for direct sourcing with AI-first UX, delivering 5% cost savings and 30-50% cycle time reduction.',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — automates supplier discovery, bid comparison, and cost analysis — but the underlying workflow (RFQ → quote → award) is a proven procurement process.',
  aiDesignChallenges: [
    'Surfacing AI-driven supplier recommendations with transparent rationale',
    'Designing bid comparison views for complex multi-attribute direct materials',
    'Balancing automation trust with procurement team oversight in enterprise settings',
  ],
  founders: [
    {
      name: 'Spencer Penn',
      role: 'Co-founder & CEO',
      background: 'Former Tesla (Model 3 program) and Waymo PM. Experienced procurement complexity firsthand sourcing $30B in car parts.',
    },
    {
      name: 'Idan Mintz',
      role: 'Co-founder & CTO',
      background: 'Former Google X engineer. Met Spencer at Alphabet; brings deep technical expertise in AI/ML systems.',
    },
  ],
  whyBuilding: 'Spencer experienced sourcing $30B of car parts on spreadsheets at Tesla. 75% of procurement teams use no software — LightSource aims to be the OS for direct materials.',
  beliefs: [
    'Direct materials procurement is the last major enterprise workflow without modern software',
    'AI should augment procurement teams, not replace human judgment on supplier relationships',
    'Buyer-supplier collaboration beats adversarial negotiation',
  ],
  greenFlags: [
    'Founders from Tesla/Waymo/Google X with direct domain pain',
    'Tier-1 investors (Lightspeed + Bain Capital Ventures) at $130M valuation',
    '10x ARR growth in 18 months with enterprise customers (Yum!, HelloFresh)',
    'Massive greenfield market — 75% of teams have no sourcing software',
  ],
  redFlags: [
    'Single combined Seed+Series A round — unusual structure',
    'Enterprise sales cycles are long and resource-intensive',
    'Legacy procurement giants (SAP, Coupa) could build AI features',
  ],
  designTeam: {
    teamSize: '~2-3 (1 PD role open, Lead Product Designer exists)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'AI supplier recommendation logic and ranking',
        'Automated RFQ-to-award workflow orchestration',
        'Cost analysis and bid comparison algorithms',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Supplier quality scoring and feedback loops',
        'Procurement outcome tracking (cost savings, cycle time)',
        'AI recommendation accuracy measurement',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Enterprise web app for complex procurement workflows',
        'Multi-stakeholder collaboration UX (buyers + suppliers)',
        'Data-dense bid comparison and analytics dashboards',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Enterprise procurement teams managing direct materials (manufacturing, CPG, automotive)',
    secondary: 'Suppliers responding to RFQs from enterprise buyers',
  },
  userProblems: [
    'Sourcing $B in direct materials via spreadsheets and email chains',
    'No visibility into historical pricing or supplier performance',
    'Manual RFQ process takes weeks with high error rates',
    'Tribal knowledge loss when procurement staff turns over',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Tight-knit team of builders from Tesla, Waymo, and Google X. Values small teams, high-caliber hires, and fast execution.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '10x ARR over 18 months',
    signals: [
      '$33M raised at $130M valuation (Lightspeed + Bain Capital)',
      '$1B+ in spend processed on platform',
      'Enterprise customers: Yum!, BRP, HelloFresh, Shure',
    ],
    tam: '$10B+ (enterprise procurement software)',
    ceiling: 'Early innings: large addressable market with 75% of procurement teams still unsoftware-enabled.',
    tailwinds: [
      'Tariff volatility increasing need for procurement agility',
      '75% of procurement teams still use no sourcing software',
      'AI adoption in enterprise accelerating',
    ],
    headwinds: [
      'Long enterprise sales cycles',
      'Legacy procurement vendors adding AI features',
      'Change management in conservative procurement orgs',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: purpose-built for direct materials vs horizontal procurement suites, with growing pricing data flywheel',
  },
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level B AI company with real enterprise traction',
      'Small design team = high impact and ownership',
      'Greenfield product design — building enterprise UX from scratch',
      '$130M valuation with 10x ARR growth signals strong trajectory',
    ],
    whyNot: [
      'On-site only in San Francisco',
      'Procurement domain is niche — may limit design portfolio breadth',
      'Early-stage design team may lack mentorship structure',
    ],
    nextActions: [
      'Review product demo or screenshots for UX quality assessment',
      'Research Lead Product Designer background',
    ],
  },
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'LightSource Official Website', url: 'https://lightsource.ai' },
    { title: 'BusinessWire — LightSource Emerges From Stealth With $33M', url: 'https://www.businesswire.com/news/home/20250415296434/en/LightSource-Emerges-From-Stealth-With-33M-to-Modernize-Sourcing-and-Procurement-With-AI' },
    { title: 'CNBC — LightSource raises $33M funding round', url: 'https://www.cnbc.com/2025/03/31/lightsource-raises-33-million-funding-round-led-by-bain-lightspeed.html' },
    { title: 'Lightspeed — Reinventing Direct Sourcing Investment Announcement', url: 'https://lsvp.com/stories/reinventing-direct-sourcing-announcing-lightspeeds-investment-in-lightsource/' },
    { title: 'LightSource Careers — Product Designer', url: 'https://jobs.ashbyhq.com/lightsource/4481e5d2-40d5-4c71-a500-7d3b71c5bc13' },
  ],
};
