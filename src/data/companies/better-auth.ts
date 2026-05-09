import { Company } from '../types';

export const betterAuth: Company = {
  id: 'better-auth',
  name: 'Better Auth',
  description: 'Open-source authentication framework for TypeScript — self-hosted alternative to Auth0, Clerk, and Firebase Auth.',
  website: 'https://better-auth.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',
  ogImage: '/og-images/better-auth-og.webp',
  aiTypes: ['ai-infrastructure'],
  markets: ['prosumer', 'b2b'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  valuation: 'Unknown',
  totalFunding: '$5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2025-06',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: '350K+ monthly npm downloads, 26K+ GitHub stars',
  customers: '150K+ weekly downloads, used by YC companies and major OSS projects',
  competitors: [
    {
      name: 'Clerk',
      description: 'Hosted authentication with pre-built UI components for modern frameworks',
      whyTheyWin: 'Drop-in React components, managed service simplicity, broader feature set',
    },
    {
      name: 'Auth0 (Okta)',
      description: 'Enterprise-grade identity platform with extensive customization',
      whyTheyWin: 'Enterprise trust, 42+ features, compliance certifications',
    },
    {
      name: 'SuperTokens',
      description: 'Open-source authentication with self-hosted and managed options',
      whyTheyWin: 'More mature open-source auth alternative, broader language support',
    },
  ],
  marketPosition: 'Fastest-growing open-source TypeScript auth framework, recommended by Next.js, Nuxt, and Astro',
  moat: [
    'Open-source community: 26K+ GitHub stars, 6K+ Discord members',
    'Framework endorsements: recommended auth by Next.js, Nuxt, Astro',
    'Self-hosted model: developers own their data, no vendor lock-in',
  ],
  vsGiants: 'Auth0/Clerk are hosted services with escalating costs; Better Auth is free, open-source, and self-hosted with no per-user pricing',
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Authentication infrastructure — AI is not a core feature. Focus is on developer experience and self-hosted auth.',
  aiDesignChallenges: [
    'Developer dashboard for user management and analytics',
    'Plugin ecosystem UX for extending auth capabilities',
    'Fraud detection UI for identifying suspicious auth patterns',
  ],
  founders: [
    {
      name: 'Bereket Engida',
      role: 'Founder & CEO',
      background: 'Self-taught developer from Ethiopia. Built Better Auth after frustrations with rigid hosted auth platforms. Also created Better Call, Better Fetch, and Loglib.',
    },
  ],
  whyBuilding: 'Frustrated by rigid, expensive hosted authentication platforms — wanted developers to own their auth stack without vendor lock-in.',
  beliefs: [
    'Open source builds trust and adoption faster than hosted services',
    'Developers should own their auth data on their own database',
    'Great DX is the ultimate competitive advantage',
  ],
  greenFlags: [
    'YC X25 batch + Peak XV (Sequoia India) backing',
    'Explosive OSS traction: 26K GitHub stars, 350K monthly downloads',
    'Framework endorsements from Next.js, Nuxt, Astro ecosystems',
    'Solo founder with deep conviction and community-first approach',
  ],
  redFlags: [
    'Very early stage: 4-person team, Seed funding only',
    'Monetization unclear — open-source core with infrastructure layer TBD',
    'Level D AI-native: limited AI design opportunity',
  ],
  designTeam: {
    teamSize: 'Unknown (4-person team total, likely no dedicated designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Plugin architecture UX and configuration flows',
        'Multi-tenant organization and permissions setup',
        'Auth flow customization and error handling',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'User analytics and session monitoring dashboards',
        'Fraud detection metrics and alerts',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer dashboard and user management console',
        'Documentation and onboarding experience',
        'Pre-built auth UI components and theming system',
      ],
    },
  },
  productStage: '0→1',
  targetAudiences: {
    primary: 'TypeScript developers building authentication into their apps',
    secondary: 'Startups and YC companies seeking self-hosted auth alternatives to Clerk/Auth0',
  },
  userProblems: [
    'Hosted auth services have escalating per-user pricing at scale',
    'Vendor lock-in makes switching auth providers painful',
    'Existing OSS auth solutions lack TypeScript-first DX',
    'Multi-framework support is fragmented across auth tools',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'YC X25 batch. 4-person remote team. Solo founder from Ethiopia — third Ethiopian startup in YC history. Strong open-source ethos.',
      url: 'https://www.ycombinator.com/companies/better-auth',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    userGrowth: '0 → 26K GitHub stars, 350K monthly downloads since Sep 2024 launch',
    signals: [
      '$5M Seed led by Peak XV Partners (Jun 2025)',
      'Endorsed as recommended auth by Next.js, Nuxt, Astro',
      'Growing from OSS framework to infrastructure platform',
    ],
    tam: '$15B+ (Identity and Access Management market)',
    ceiling: 'Early innings: building infrastructure layer on top of popular OSS auth',
    tailwinds: [
      'TypeScript adoption accelerating across web ecosystem',
      'Developer preference shifting to open-source, self-hosted tools',
      'Auth0/Clerk pricing pushback driving migration',
    ],
    headwinds: [
      'Clerk and Auth0 have massive head start and enterprise relationships',
      'Open-source monetization is notoriously difficult',
      'Small team limits execution speed vs well-funded competitors',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Medium: strong OSS community but auth libraries are substitutable',
  },
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Explosive open-source growth with strong community',
      'Early-stage = high impact potential as first designer',
      'YC + Peak XV backing validates the opportunity',
    ],
    whyNot: [
      'Level D AI-native: no AI design challenges',
      'Very early (4 people, Seed) — no design team or design culture yet',
      'No open Product Design roles',
    ],
    nextActions: [
      'Monitor for Product Designer roles as team grows',
      'Watch infrastructure layer launch for design opportunity signals',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Better Auth Official Website', url: 'https://better-auth.com' },
    { title: 'TechCrunch: Better Auth raises $5M', url: 'https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/' },
    { title: 'Better Auth YC Profile', url: 'https://www.ycombinator.com/companies/better-auth' },
    { title: 'Better Auth GitHub', url: 'https://github.com/better-auth/better-auth' },
    { title: 'Better Auth Careers - no Product Design roles found', url: 'https://www.ycombinator.com/companies/better-auth/jobs' },
  ],
};
