import { Company } from '../types';

export const sharpestminds: Company = {
  id: 'sharpestminds',
  name: 'SharpestMinds',
  description: 'Mentorship and project-based platform connecting aspiring data scientists with industry practitioners.',
  website: 'https://www.sharpestminds.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Yes',

  aiTypes: ['data-analysis'],
  markets: ['b2c', 'prosumer'],
  category: 'vertical-saas' as const,
  industries: ['education'],

  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$120.0K',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Aspiring data scientists and career-transition learners',

  competitors: [
    {
      name: 'DataCamp',
      description: 'Data science learning platform with interactive courses.',
      whyTheyWin: 'Large learning content library and brand reach.',
    },
    {
      name: 'Coursera',
      description: 'Online education platform with ML/data science tracks.',
      whyTheyWin: 'Massive distribution and university partnerships.',
    },
    {
      name: 'Udacity',
      description: 'Nanodegree platform with data and AI programs.',
      whyTheyWin: 'Structured learning paths and recognized certification.',
    },
  ],
  marketPosition: 'Mentor-led practical pathway for data science skill development.',
  moat: ['Mentorship-driven learning model', 'Project-based applied training'],
  vsGiants: 'Differentiates through individualized mentorship over course-only learning.',

  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is adjacent to the educational focus; not the sole product differentiator.',
  aiDesignChallenges: [
    'Designing motivation and accountability in long learning journeys',
    'Balancing structured curriculum with personalized mentorship pathways',
  ],

  founders: [
    {
      name: 'Edouard Harris',
      role: 'Co-founder',
      background: 'Co-founded SharpestMinds to improve practical data science education.',
    },
    {
      name: 'Jeremie Harris',
      role: 'Co-founder',
      background: 'Co-founded SharpestMinds and focused on AI/data education and mentorship model.',
    },
  ],
  whyBuilding: 'Bridge the gap between data science learning and employable practical skills.',
  beliefs: ['Mentorship accelerates technical skill acquisition', 'Project-based learning improves outcomes'],
  greenFlags: ['Clear education niche and mentorship model'],
  redFlags: ['Small disclosed funding and education market competition'],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'low', tasks: ['Learning progression and milestone logic'] },
    evaluation: { level: 'medium', tasks: ['Learner progress tracking and outcomes'] },
    interface: { level: 'medium', tasks: ['Mentorship matching and learning platform UX'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Career-switchers entering data science',
    secondary: 'Early-career analysts upskilling into ML roles',
  },
  userProblems: [
    'Traditional courses lack personalized mentorship',
    'Learners struggle to build portfolio-quality practical experience',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Learning experience design and mentorship systems'],
    whyNot: ['Small funding scale'],
    nextActions: ['Validate current product traction and team growth'],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$120K total funding (Seedtable)'],
    tam: 'Data science education and upskilling market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader mentor-driven technical education',
    tailwinds: ['Demand for AI/data talent upskilling'],
    headwinds: ['Competition from large education platforms'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  lastUpdated: '2026-02-04T21:35:00',
  sources: [
    { title: 'Source', url: 'https://www.sharpestminds.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
