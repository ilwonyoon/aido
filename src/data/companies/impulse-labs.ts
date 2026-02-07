import { Company } from '../types';

export const impulseLabs: Company = {
  id: 'impulse-labs',
  name: 'Impulse Labs',
  description: 'Battery-integrated induction cooktop delivering high-power, precise electric cooking.',
  website: 'https://www.impulselabs.com',
    screenshot: '/screenshots/impulse-labs-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://images.ctfassets.net/v0es4papxmyo/5M1OQ4NQkYhDGit8m90aO6/2f22197e63af99b79d48ed228ab58430/impulse-stove-share-image.jpg',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2c'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Thermador',
      description: 'Premium induction and gas cooktops for high-end kitchens.',
      whyTheyWin: 'Established brand and distribution.',
    },
    {
      name: 'GE Profile',
      description: 'Mainstream induction cooktop line from GE Appliances.',
      whyTheyWin: 'Mass market reach and retail distribution.',
    },
    {
      name: 'Samsung',
      description: 'Consumer induction ranges and cooktops.',
      whyTheyWin: 'Scale manufacturing and wide retail presence.',
    },
  ],
  marketPosition: 'High-performance, battery-backed induction cooking appliance for premium home kitchens.',
  moat: [
    'Integrated battery enabling high peak power without electrical upgrades',
    'Precision temperature control and software updates',
    'Premium performance positioning for electrification',
  ],
  vsGiants: 'Competes on performance, precision, and electrification-first design versus incumbent appliance brands.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Hardware appliance company without an AI-first product.',
  aiDesignChallenges: [
    'Designing intuitive control for precise cooking temperatures',
    'Balancing performance feedback with simple user controls',
    'Communicating power and installation requirements clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sam D\'Amico',
      role: 'Founder & CEO',
      background: 'Stanford graduate with 10 years in consumer electronics designing tech at Google Glass and Oculus; passion for cooking led to founding Impulse Labs in 2021.',
    },
  ],
  whyBuilding: 'Deliver a better electric cooking experience and accelerate home electrification.',
  beliefs: [
    'Electric appliances can outperform gas when designed well',
    'Performance and sustainability can go together',
    'Great hardware needs great user experience',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear product differentiation in performance',
    'Strong Series A backing',
  ],
  redFlags: [
    'Capital-intensive hardware scaling',
    'Long manufacturing and distribution cycles',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Cooking control logic and temperature stability',
        'Power management behavior',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Tracking performance and reliability metrics',
        'User feedback on cooking outcomes',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Physical and on-device UI controls',
        'Mobile or firmware update flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Homeowners upgrading to premium electric appliances',
    secondary: 'Early adopters of clean energy home tech',
  },
  userProblems: [
    'Traditional electric stoves lack power and precision',
    'Induction upgrades often require electrical work',
    'Home electrification is confusing to plan',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: [
      'Premium hardware UX challenges',
      'Mission-driven electrification product',
    ],
    whyNot: [
      'Hardware timelines are long',
      'Manufacturing risk',
    ],
    nextActions: [
      'Monitor for product design roles or product launches',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T12:23:25',
  sources: [
    { title: 'Impulse Cooktop', url: 'https://www.impulselabs.com' },
    { title: 'Impulse Labs on startups.gallery', url: 'https://startups.gallery/companies/impulse-labs' },
  ],
};
