import { Company } from '../types';

export const paraform: Company = {
  id: 'paraform',
  name: 'Paraform',
  description:
    'Recruiting platform and marketplace that combines AI workflows with a network of vetted recruiters to help companies hire faster.',
  website: 'https://www.paraform.com',
  headquarters: 'San Francisco, CA, USA',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$25M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2025-06',
      leadInvestors: ['Felicis'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Palantir, Decagon, Cursor, Windsurf',

  // Competition
  competitors: [
    {
      name: 'Hired',
      description: 'Talent marketplace connecting employers with vetted candidates.',
      whyTheyWin: 'Established marketplace liquidity and candidate supply.',
    },
    {
      name: 'Toptal',
      description: 'Elite talent network for hiring contract and full-time roles.',
      whyTheyWin: 'Large curated talent pool and enterprise credibility.',
    },
    {
      name: 'HireEZ',
      description: 'AI-powered outbound recruiting and sourcing platform.',
      whyTheyWin: 'Deep sourcing features and integrations with ATS tools.',
    },
  ],
  marketPosition:
    'Recruiting marketplace that blends AI workflows with expert recruiters to accelerate hiring for startups and enterprises.',
  moat: [
    'Vetted recruiter marketplace with performance incentives',
    'AI workflows that streamline sourcing and outreach',
    'Strong growth in hiring volume and customer adoption',
  ],
  vsGiants:
    'Competes by pairing AI tools with a curated recruiter network rather than only selling software.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is a core differentiator that powers sourcing and workflow automation while the marketplace delivers human expertise.',
  aiDesignChallenges: [
    'Designing transparent AI recommendations for recruiter workflows',
    'Balancing automation with human decision-making in hiring',
    'Building trust between hiring teams and external recruiters',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'John Kim',
      role: 'Co-founder & CEO',
      background: 'Former founder of RulerNetwork and growth leader at multiple startups.',
    },
    {
      name: 'Jeffrey Li',
      role: 'Co-founder & CTO',
      background: 'Former software engineer at Cruise and builder of recruiting automation systems.',
    },
  ],
  whyBuilding:
    'Paraform is building a recruiting marketplace that helps companies hire faster by pairing AI-driven workflows with vetted recruiters.',
  beliefs: [
    'Recruiting should be outcome-driven and transparent',
    'AI should reduce busywork, not replace relationships',
    'Great hiring requires both software and expert human judgment',
  ],
  greenFlags: ['Series A led by Felicis', '500+ companies hiring on the platform', 'Strong revenue growth signals'],
  redFlags: ['Highly competitive recruiting software market', 'Marketplace liquidity risk'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Automated sourcing and matching workflows',
        'Ranking and scoring recruiter recommendations',
        'Pipeline automation for candidate outreach',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality metrics for recruiter performance',
        'Feedback loops on candidate fit and outcomes',
        'Trust indicators for marketplace activity',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Recruiter marketplace dashboards',
        'Hiring team collaboration and pipeline UI',
        'Candidate outreach and messaging workflows',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Hiring teams at fast-growing startups and enterprises',
    secondary: 'Independent recruiters seeking marketplace demand',
  },
  userProblems: [
    'Hiring teams struggle to scale recruiting capacity quickly',
    'Sourcing qualified candidates is time-consuming and expensive',
    'Recruiters lack transparent, performance-based marketplaces',
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
    whyJoin: ['Rapid revenue growth and clear market pull', 'Opportunity to design marketplace + AI workflows'],
    whyNot: ['Competitive recruiting market', 'Marketplace dynamics can be volatile'],
    nextActions: ['Monitor design hiring signals and product updates'],
  },

  // Meta
  lastUpdated: '2026-02-10T00:00:00',
  sources: [
    { title: 'Paraform - Official Website', url: 'https://www.paraform.com' },
    { title: 'Paraform Careers', url: 'https://paraform.com/share?orgId=paraform&showCulture=true' },
    { title: 'Paraform Series A Announcement', url: 'https://www.paraform.com/blog/Series-A-Announcement' },
  ],
};
