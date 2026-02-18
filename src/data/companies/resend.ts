import { Company } from '../types';

export const resend: Company = {
  id: 'resend',
  name: 'Resend',
  description: 'Developer-first email API platform for building, testing, and sending transactional and marketing emails at scale.',
  website: 'https://resend.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',
  ogImage: '/og-images/resend-og.webp',
  aiTypes: ['automation'],
  markets: ['prosumer', 'b2b'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$21M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3M',
      date: '2023-07',
      leadInvestors: ['SV Angel'],
    },
    {
      stage: 'Series A',
      amount: '$18M',
      date: '2024-12',
      leadInvestors: ['Andreessen Horowitz'],
    },
  ],
  revenue: 'Not publicly disclosed (5x growth in 2025)',
  growth: '4x users YoY (249K → 1M in 2025)',
  customers: '1M+ developers, including Warner Bros, Decathlon, Raycast',
  competitors: [
    {
      name: 'SendGrid (Twilio)',
      description: 'Established email API with marketing suite and multi-channel integrations',
      whyTheyWin: 'Massive scale, brand recognition, Twilio ecosystem',
    },
    {
      name: 'Postmark',
      description: 'Transactional email service focused on deliverability and speed',
      whyTheyWin: 'Best-in-class deliverability, minimal configuration',
    },
    {
      name: 'Mailgun (Sinch)',
      description: 'Developer-focused email API with strong analytics and SMTP support',
      whyTheyWin: 'Flexible API, detailed analytics, dedicated IPs',
    },
  ],
  marketPosition: 'Modern developer-first email platform challenging legacy incumbents with React-based templates and superior DX',
  moat: [
    'React Email open source (17K GitHub stars, 1.4M weekly npm downloads)',
    'Developer experience moat: TypeScript-first, modern tooling',
    'Community flywheel: open source → adoption → paid API',
  ],
  vsGiants: 'SendGrid/Mailgun are legacy with poor DX; Resend wins on modern developer experience and React-native email templates',
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Email infrastructure product — AI is not a core feature. Focus is on developer experience and email deliverability.',
  aiDesignChallenges: [
    'Template intelligence: smart suggestions for email layout and content',
    'Deliverability insights: AI-driven inbox placement predictions',
    'Automation workflows: trigger-based email sequences',
  ],
  founders: [
    {
      name: 'Zeno Rocha',
      role: 'Co-founder & CEO',
      background: 'Former VP of Developer Experience at WorkOS, CPO at Liferay Cloud. Brazilian creator and programmer.',
    },
    {
      name: 'Bu Kinoshita',
      role: 'Co-founder & CTO',
      background: 'First engineer hire at WorkOS ($500M valuation). Built 100+ npm packages. Products featured #1 on Product Hunt.',
    },
  ],
  whyBuilding: 'Frustrated by how painful email infrastructure is for developers — archaic HTML, poor deliverability, bad APIs.',
  beliefs: [
    'Developer experience is the #1 differentiator',
    'Open source builds trust and adoption',
    'Ship fast, maintain quality — "keep shipping" as core value',
  ],
  designPhilosophy: 'Minimalist, Vercel-inspired aesthetic. Obsessive attention to detail in every pixel and interaction.',
  greenFlags: [
    'a16z-backed Series A with strong angel investors (Dylan Field, Guillermo Rauch)',
    '4x user growth in 2025 (249K → 1M), 5x revenue growth',
    'React Email open source ecosystem as growth engine',
    'Founding designer (Zeh Fernandes) from Work & Co and CodeSandbox',
  ],
  redFlags: [
    'Competing against well-funded incumbents (SendGrid/Twilio, Mailgun/Sinch)',
    'Email infrastructure is commodity market — margins may compress',
    'Level D AI-native: limited AI design opportunity',
  ],
  designTeam: {
    designHead: 'Zeh Fernandes (Founding Designer)',
    teamSize: '~2-3 (Zeh Fernandes + team of 28 total, design team small)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Email template builder logic and WYSIWYG editor',
        'Webhook and automation workflow design',
        'API documentation and developer onboarding flows',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Email deliverability analytics dashboards',
        'Template performance metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer dashboard and API management console',
        'Visual email template editor (Broadcasts)',
        'React Email component library design',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Developers and engineering teams building transactional email',
    secondary: 'Marketing teams needing broadcast email with developer-grade reliability',
  },
  userProblems: [
    'HTML email templates break across email clients',
    'Legacy email APIs have poor developer experience',
    'Emails land in spam instead of inbox',
    'No modern tooling for building email templates with React/TypeScript',
  ],
  designerLinks: [
    {
      name: 'Zeh Fernandes',
      role: 'Founding Designer',
      platform: 'blog',
      url: 'https://zehfernandes.com/wayofdesign',
      description: 'Writes about "Way of Design" — designing tools and software as medium to extend human capabilities',
    },
    {
      name: 'Zeh Fernandes',
      role: 'Founding Designer',
      platform: 'twitter',
      url: 'https://x.com/zehf',
      description: 'Shares design process and side projects; formerly Design Director at CodeSandbox',
    },
    {
      name: 'Zeno Rocha',
      role: 'CEO',
      platform: 'blog',
      url: 'https://zenorocha.com/',
      description: 'Writes about developer experience, open source strategy, and building Resend',
    },
  ],
  openRoles: [],
  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Core values: "Do work that inspires others", "No ego", "Keep shipping", "Default to action". Fully remote, 28-person team across 4 continents.',
      url: 'https://resend.com/about',
    },
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'YC W23 batch. Strong open source culture — React Email started before the company itself. 5 team offsites in 2025 across 4 continents.',
      url: 'https://www.ycombinator.com/companies/resend',
    },
  ],
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '5x in 2025',
    userGrowth: '249K → 1M users in 2025 (4x YoY)',
    signals: [
      '$18M Series A led by a16z (Dec 2024)',
      'Team grew 12 → 28 in 2025',
      'Acquired Briefer and Mergent in 2025',
    ],
    tam: '$8.2B (Email API Platform market by 2033)',
    ceiling: 'Early innings: replacing legacy email infra for modern dev teams',
    tailwinds: [
      'Developer-first tools market expanding',
      'React/TypeScript adoption driving modern email needs',
      'Transactional email volume growing with SaaS proliferation',
    ],
    headwinds: [
      'SendGrid/Twilio incumbency and enterprise contracts',
      'Email infrastructure commoditization risk',
      'Low switching costs between email APIs',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Medium: React Email open source drives adoption, but email APIs are substitutable',
  },
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Exceptional design culture — founding designer from Work & Co/CodeSandbox',
      'Fast-growing (4x users, 5x revenue in 2025) with a16z backing',
      'Small team (28 people) = high impact per person',
    ],
    whyNot: [
      'Level D AI-native: limited AI design challenges',
      'Email infrastructure is niche — may limit design scope',
      'No open design roles currently',
    ],
    nextActions: [
      'Monitor careers page for Product Designer openings',
      'Follow Zeh Fernandes for design team growth signals',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Resend About Page', url: 'https://resend.com/about' },
    { title: 'Resend Series A Announcement', url: 'https://resend.com/blog/series-a' },
    { title: 'Resend 1 Million Users Blog', url: 'https://resend.com/blog/1-million-users' },
    { title: 'TechCrunch: Resend raises $3M seed', url: 'https://techcrunch.com/2023/07/18/developer-focused-email-platform-resend-raises-3m/' },
    { title: 'Resend Careers - no Product Design roles found', url: 'https://resend.com/careers' },
    { title: 'Resend YC Company Profile', url: 'https://www.ycombinator.com/companies/resend' },
  ],
};
