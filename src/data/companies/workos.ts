import { Company } from '../types';

export const workos: Company = {
  id: 'workos',
  name: 'WorkOS',
  description: 'Developer platform for enterprise-ready authentication, authorization, admin portals, and agent identity infrastructure.',
  website: 'https://workos.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  ogImage: 'https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/627321b887917b110d342e2b_homepage.png',
  screenshot: '/screenshots/workos-screenshot.png',

  aiTypes: ['ai-infrastructure', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  subcategories: ['developer-tools', 'infrastructure'],
  industries: ['developer-tools', 'infrastructure'],

  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: '$2B (Mar 2026)',
  totalFunding: '$196M',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$100M',
      date: '2026-03',
      valuation: '$2B',
      leadInvestors: ['Meritech', 'Sapphire Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Billions of API requests per month and thousands of customers per company announcement.',
  runway: 'Strong after $100M Series C',
  customers: 'OpenAI, Anthropic, Cursor, Perplexity, Vercel, Plaid, Replit, and other AI/software companies.',

  competitors: [
    { name: 'Okta', description: 'Enterprise identity and access management platform.', whyTheyWin: 'Large enterprise distribution and mature identity suite.' },
    { name: 'Auth0', description: 'Customer identity platform owned by Okta.', whyTheyWin: 'Developer adoption and broad authentication feature coverage.' },
    { name: 'Clerk', description: 'Developer-first authentication and user management.', whyTheyWin: 'Fast implementation and strong frontend developer experience.' },
  ],
  marketPosition: 'Developer-first enterprise readiness layer for modern SaaS and AI companies.',
  moat: [
    'Developer-friendly APIs for enterprise identity and permissions',
    'Trusted by fast-growing AI companies that need enterprise controls early',
    'Expanding from auth into agent identity, permissions, MCP, and auditability',
  ],
  vsGiants: 'WorkOS differentiates from identity incumbents by focusing on developer speed and modern AI-era enterprise requirements.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'WorkOS is not an AI model company, but its platform is increasingly critical infrastructure for secure agentic software and enterprise AI deployment.',
  aiDesignChallenges: [
    'Designing permissions and identity models for human and AI-agent actors',
    'Making enterprise security workflows understandable to developers',
    'Balancing powerful admin controls with implementation speed',
  ],

  founders: [
    {
      name: 'Michael Grinich',
      role: 'Founder & CEO',
      background: 'Previously founded Nylas and built WorkOS around enterprise features that modern software companies need to sell to large organizations.',
    },
  ],
  whyBuilding: 'As software and AI agents become easier to create, companies still need secure authentication, authorization, auditability, and enterprise controls.',
  beliefs: [
    'Enterprise-ready infrastructure should be easy for developers to adopt',
    'Trust and permissions become more important as software becomes more autonomous',
    'Great developer experience can be a wedge into enterprise infrastructure',
  ],
  greenFlags: [
    '$100M Series C at $2B valuation in March 2026',
    'Clear AI-era narrative around agent authentication and authorization',
    'Strong customer logos among AI-native software companies',
    'Remote Product Design role with $150K-$225K base and equity',
  ],
  redFlags: [
    'Identity and auth are crowded markets with strong incumbents',
    'Product design may be more infrastructure/admin heavy than expressive AI UX',
  ],

  designTeam: {
    teamSize: 'Product Design team owns Dashboard, Admin Portal, AuthKit, developer documentation, WorkDS, and Radix surfaces.',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Permissions UX', 'Agent identity models', 'Enterprise admin workflows'] },
    evaluation: { level: 'medium', tasks: ['Developer onboarding quality', 'Customer workflow validation'] },
    interface: { level: 'high', tasks: ['Dashboard', 'Admin Portal', 'AuthKit', 'Design system'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Developers and platform teams building enterprise-ready SaaS and AI products',
    secondary: 'Security, IT, and enterprise admins who manage access and compliance',
  },
  userProblems: [
    'Enterprise customers require SSO, SCIM, RBAC, audit logs, and permissions before buying',
    'Developers need enterprise features without building complex identity systems from scratch',
    'AI agents introduce new authentication, authorization, and auditability questions',
  ],

  designerLinks: [],

  openRoles: [
    {
      title: 'Product Design',
      location: 'United States & Canada (Remote)',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/workos/bd5dab2b-fa93-4441-9ca0-558593f02b9a',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-13',
      compensation: '$150K-$225K + equity',
      team: 'Product Design',
      aboutRole: 'Design developer-facing interfaces across Dashboard, Admin Portal, AuthKit, documentation, and design systems.',
      responsibilities: [
        'Lead greenfield product initiatives from research through delivery',
        'Partner with product engineers to ship consistent developer and admin experiences',
        'Contribute to WorkDS, Radix, and developer documentation quality',
      ],
      requirements: [
        'Product-minded systems designer',
        'Comfortable working directly with customers and product engineers',
        'Strong developer experience or technical product design instincts',
      ],
      whyInteresting: 'Strong cash band, remote setup, and direct relevance to secure agentic software infrastructure.',
    },
  ],

  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'High cash band and remote-friendly role',
      'Developer-tooling surface with AI-era agent identity narrative',
      'Strong customer and funding signals',
    ],
    whyNot: [
      'Less AI-native than coding-agent companies',
      'May skew toward infrastructure/admin UX instead of agent interaction design',
    ],
    nextActions: [
      'Consider applying to Product Design role',
      'Position around enterprise developer UX, systems thinking, and AI-agent permission models',
    ],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Thousands of customers and billions of API requests per month per company announcement.',
    signals: ['$100M Series C', '$2B valuation', 'AI-native customers including OpenAI, Anthropic, Cursor, and Perplexity'],
    tam: 'Enterprise identity, authorization, and agent security infrastructure',
    marketShare: 'Unknown',
    ceiling: 'Could become core trust infrastructure for AI-native SaaS and autonomous software.',
    tailwinds: ['AI companies need enterprise controls earlier', 'Agent identity and permissions are emerging requirements'],
    headwinds: ['Identity incumbents', 'Security procurement complexity'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Strong if WorkOS becomes the default enterprise-readiness layer for AI startups.',
  },

  lastUpdated: '2026-05-13T12:00:00',
  sources: [
    { title: 'WorkOS Series C announcement', url: 'https://workos.com/blog/series-c' },
    { title: 'Product Design at WorkOS', url: 'https://jobs.ashbyhq.com/workos/bd5dab2b-fa93-4441-9ca0-558593f02b9a' },
    { title: 'WorkOS website', url: 'https://workos.com' },
  ],
};
