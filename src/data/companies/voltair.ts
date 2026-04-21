import { Company } from '../types';

export const voltair: Company = {
  id: 'voltair',
  name: 'Voltair',
  description: 'Self-charging autonomous drones that perch on power lines to enable continuous power grid inspection and Earth observation — drones charge inductively from the lines themselves, enabling indefinite deployment.',
  website: 'https://www.voltairlabs.com',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K (estimated YC) + pre-seed prizes',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: '$25K (UW Dempsey Competition)',
      date: '2025-05',
      leadInvestors: ['University of Washington'],
    },
    {
      stage: 'Seed',
      amount: '$500K (estimated)',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (early pilots with utilities)',
  growth: 'Pilot deployments with power utilities; expanding from power line inspection to road, rail, telecom',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Power utilities (transmission and distribution operators), telecom, road/rail inspection agencies',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown — pre-revenue, pilot stage',
    userGrowth: 'Pilots with power utilities; 5-person team scaling operations',
    signals: [
      'Won $25K UW Dempsey Competition grand prize (2025)',
      'Won $15K UW Environmental Innovation Challenge',
      'YC W26 backing — top-tier accelerator endorsement',
      'Utility contracts pipeline: 7 million miles of US power infrastructure unmonitored',
      'Wildfire prevention tailwind: CPUC mandating increased inspection frequency',
    ],
    tam: '$15B+ power grid inspection market; $50B+ total Earth observation and infrastructure inspection market',
    marketShare: '<0.1% of addressable market = 500x+ upside potential',
    ceiling: 'Early innings: continuous power grid monitoring is largely a manual and infrequent process today',
    tailwinds: [
      'Wildfire insurance losses driving utility demand for continuous grid monitoring',
      'CPUC and NERC mandating more frequent power line inspections after fire disasters',
      'FAA drone beyond-visual-line-of-sight (BVLOS) rules expanding in 2026',
      'Grid modernization investment: $73B in US grid infrastructure through 2030',
      'Power line charging paradigm eliminates battery constraint (vs fixed-mission drones)',
    ],
    headwinds: [
      'FAA certification and utility easement approvals are complex and slow',
      'Hardware startup: high CapEx, long pilot cycles, complex manufacturing',
      'Power line charging requires physical installation (charging pads on every pole)',
      'Competition from helicopter and fixed-wing inspection (incumbents with utility relationships)',
    ],
    moatType: 'technology',
    moatStrength: 'Strong technical moat if power-line charging patents hold; network grows with each charging pad installed (each pad unlocks 1,000 sq miles of coverage).',
  },

  // Competition
  competitors: [
    {
      name: 'Skydio',
      description: 'Autonomous drone platform for infrastructure inspection',
      whyTheyWin: 'Mature product; established utility relationships; enterprise sales force',
    },
    {
      name: 'Percepto',
      description: 'Autonomous drone-in-a-box platform for industrial site monitoring',
      whyTheyWin: 'Proven enterprise deployments; integrations with industrial SaaS',
    },
    {
      name: 'Traditional helicopter inspection',
      description: 'Manned helicopter crews inspect power lines on annual cycles',
      whyTheyWin: 'Regulatory approval; existing utility contracts; proven liability chain',
    },
  ],
  marketPosition: 'The only self-charging drone that perches on power lines — enabling continuous, permanent-deployment infrastructure monitoring with unlimited range',
  moat: [
    'Self-charging on power lines eliminates range constraint (no return-to-base)',
    'Network effect: each charging pad deployed unlocks 1,000 sq miles of coverage',
    'UW research pedigree + DoD/DARPA experience (founders built drones for Air Force)',
  ],
  vsGiants: 'Unlimited-range self-charging drones vs battery-limited autonomous drones that must return to base',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI-Feature: Hardware drones are the primary product; AI and computer vision enable the inspection intelligence (defect detection, anomaly classification). Without AI, drones are still useful for video capture.',
  aiDesignChallenges: [
    'Inspection data review: how do utility engineers review hundreds of miles of drone footage?',
    'Defect flagging UI: how does AI highlight suspected power line issues for human review?',
    'Mission planning: how do operators configure inspection routes across a charging pad network?',
    'Alert severity design: what triggers an urgent response vs scheduled maintenance?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ronan Nopp',
      role: 'CEO & Co-founder',
      background: 'University of Washington. Built advanced UAV systems for the US Air Force and DARPA.',
    },
    {
      name: 'Hayden Gosch',
      role: 'CTO & Co-founder',
      background: 'University of Washington. Hardware and drone systems engineering.',
    },
    {
      name: 'Avi Gotskind',
      role: 'CGO & Co-founder',
      background: 'University of Washington. Growth and go-to-market.',
    },
    {
      name: 'Warren Weissbluth',
      role: 'COO & Co-founder',
      background: 'University of Washington. Operations and scaling.',
    },
  ],
  whyBuilding: 'Power lines cause the majority of US wildfires — but utilities can\'t inspect 7 million miles of infrastructure frequently enough with helicopters. Voltair drones live on the grid permanently, watching continuously.',
  beliefs: [
    'Continuous monitoring beats periodic inspection for preventing catastrophic failures',
    'The power grid is the most valuable infrastructure dataset in the world — we just can\'t access it today',
    'Self-charging on power lines is the only physics-correct solution for unlimited drone range',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'DARPA + Air Force UAV experience — founders built systems for the hardest drone clients',
    'Won two UW competitions (Environmental Innovation Challenge + Dempsey Startup)',
    'YC W26 backing',
    'Clear wildfire prevention narrative = strong regulatory and ESG tailwind',
  ],
  redFlags: [
    'Hardware startup with long deployment timelines and high regulatory friction',
    'FAA BVLOS certification required for full commercial deployment',
    'Physical installation (charging pads) on utility poles creates slow sales and ops cycle',
    'Tiny team (5 people) building a complex hardware/software system',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 0-1, hardware-first team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Mission planning logic: how drones select inspection routes based on charging pad network',
        'Alert triage rules: defect severity classification and escalation to utility engineers',
        'Multi-drone fleet coordination and collision avoidance visualization',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Defect review workflow: power line inspection images reviewed by utility engineers',
        'AI accuracy dashboard: how well does the model detect vegetation encroachment, corrosion, damage?',
        'Inspection coverage map: have we covered all required sections within compliance windows?',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Flight monitoring dashboard: live drone positions, battery status, charging pad status',
        'Inspection report builder: utility-ready documentation of findings',
        'Charging network management: pad health, coverage radius visualization',
      ],
    },
  },
  productStage: '0→1',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Technically audacious: self-charging drones on power lines is genuinely novel',
      'High-impact mission: preventing wildfires through continuous grid monitoring',
      'DARPA/Air Force pedigree = serious engineering culture',
    ],
    whyNot: [
      'Hardware-first company: design is not a priority at this stage',
      'Long regulatory and deployment cycles = slow product iteration',
      'Enterprise utility software is low-design-leverage domain',
      'Very small team, hardware-heavy — design seat unlikely anytime soon',
    ],
    nextActions: [
      'Monitor for Series A and enterprise sales traction',
      'Watch for software platform / inspection dashboard product launch',
    ],
  },

  // Meta
  lastUpdated: '2026-04-21T00:00:00',
  sources: [
    { title: 'Voltair YC Profile', url: 'https://www.ycombinator.com/companies/voltair' },
    { title: 'Voltair Launch HN', url: 'https://news.ycombinator.com/item?id=47442452' },
    { title: 'Voltair Website', url: 'https://www.voltairlabs.com/' },
    { title: 'Self-Charging Drones Win UW Dempsey Competition — GeekWire', url: 'https://www.geekwire.com/2025/self-charging-drones-for-power-line-inspections-land-top-prize-at-uw-enviro-innovation-contest/' },
    { title: 'UW Engineering Profile — Voltair', url: 'https://www.engr.washington.edu/news/article/2025-07-09/fighting-fire-it-sparks' },
  ],
};
