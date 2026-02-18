import { Company } from '../types';

export const delphi: Company = {
  id: 'delphi',
  name: 'Delphi',
  description:
    'Platform for building "digital minds" that let experts, creators, and businesses deliver conversational versions of their knowledge across channels.',
  website: 'https://www.delphi.ai',
  headquarters: 'San Francisco, CA, USA',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'text-assistant'],
  markets: ['prosumer', 'b2b'],
  category: 'productivity' as const,
  industries: ['productivity'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$16M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$16M',
      date: '2025-06',
      leadInvestors: ['Sequoia Capital'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '2,000+ experts, business owners, and creators',

  // Competition
  competitors: [
    {
      name: 'Character.AI',
      description: 'Consumer-focused AI character platform for conversations and entertainment.',
      whyTheyWin: 'Large consumer user base and strong engagement loops.',
    },
    {
      name: 'Replika',
      description: 'AI companion app focused on personal conversations and relationships.',
      whyTheyWin: 'Early mover with a large consumer community.',
    },
    {
      name: 'Inworld',
      description: 'AI character platform for games and interactive experiences.',
      whyTheyWin: 'Developer platform adoption and tooling for character creation.',
    },
  ],
  marketPosition:
    'Digital mind platform for experts and creators to scale knowledge, monetize expertise, and engage audiences via conversational AI.',
  moat: [
    'Tools for capturing and structuring expert knowledge into digital minds',
    'Creator-centric distribution across web, SMS, and messaging channels',
    'Early network of experts and businesses building branded AI agents',
  ],
  vsGiants:
    'Competes by offering creator-owned digital minds with brand control rather than generic chatbot experiences.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Delphi creates digital minds that power conversational experiences for experts and businesses.',
  aiDesignChallenges: [
    'Capturing and representing expert knowledge with high fidelity',
    'Designing trust and authenticity for AI persona interactions',
    'Balancing personalization with safety and brand controls',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dara Ladjevardian',
      role: 'Co-founder & CEO',
      background: 'Built Delphi after creating a digital version of his grandfather to preserve knowledge and advice.',
    },
    {
      name: 'Sam Spelsberg',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder focused on building Delphi’s AI platform for digital minds.',
    },
  ],
  whyBuilding:
    'Delphi is building digital minds to help experts and creators scale their knowledge and reach without losing authenticity.',
  beliefs: [
    'Experts should control and own their digital minds',
    'Authenticity and trust are essential for AI conversations',
    'Knowledge should be accessible across every channel',
  ],
  greenFlags: ['Sequoia-led Series A', '2,000+ experts and businesses onboarded', 'Clear creator-focused positioning'],
  redFlags: ['Deepfake and authenticity concerns', 'Heavy competition from consumer AI chat platforms'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Knowledge capture workflows for expert onboarding',
        'Persona tuning and behavior configuration UX',
        'Safety guardrails and response constraints',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality evaluation of AI responses and alignment',
        'User feedback loops for improving digital minds',
        'Trust and verification metrics for AI personas',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Conversational UI across web and messaging channels',
        'Creator dashboards for managing digital minds',
        'Brand customization and publishing flows',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Creators, coaches, and experts monetizing their knowledge',
    secondary: 'Businesses that want branded conversational AI agents',
  },
  userProblems: [
    'Experts cannot scale their time to meet demand',
    'Creators need new ways to monetize knowledge beyond 1:1 sessions',
    'Businesses struggle to deliver authentic, branded AI experiences',
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
    fitScore: 7,
    whyJoin: ['Creator-focused AI product', 'Sequoia-backed Series A with strong momentum'],
    whyNot: ['Authenticity risks in AI persona space', 'Competitive consumer AI market'],
    nextActions: ['Monitor product releases and creator partnerships'],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Delphi - Official Website', url: 'https://www.delphi.ai' },
    { title: 'Delphi About', url: 'https://www.delphi.ai/about' },
    { title: 'Delphi Series A Announcement', url: 'https://www.delphi.ai/blog/delphi-raises-16m-series-a-from-sequoia' },
    { title: 'Delphi Careers', url: 'https://www.delphi.ai/careers' },
    { title: 'Delphi Product Designer Role (Ashby)', url: 'https://jobs.ashbyhq.com/Delphi/e09394b6-5d77-4006-a57e-4b9222757481' },
    { title: 'Delphi Product Designer Role (DesignJobs)', url: 'https://designjobs.careers/jobs/product-designer-delphi-2214' },
  ],
};
