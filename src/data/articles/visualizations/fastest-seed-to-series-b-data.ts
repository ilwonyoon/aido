import type { CompanyFunding, EraData } from '@/components/visualizations/types';

export const fundingData: readonly CompanyFunding[] = [
  {
    id: 'mistral-ai',
    name: 'Mistral AI',
    emoji: '\uD83C\uDDEB\uD83C\uDDF7',
    tagline: 'Open-weight LLMs + EU sovereignty play',
    rounds: [
      { name: 'Seed', amount: '\u20AC105M', date: "Jun '23", monthsFromSeed: 0 },
      { name: 'Series A', amount: '\u20AC385M', date: "Dec '23", monthsFromSeed: 6 },
      { name: 'Series B', amount: '\u20AC600M', date: "Jun '24", monthsFromSeed: 12 },
      { name: 'Series C', amount: '$14B val', date: "Sep '25", monthsFromSeed: 27 },
    ],
    currentValuation: '$14B',
    seedToSeriesBMonths: 12,
    totalFunding: '$3.05B',
    color: 'var(--accent)',
  },
  {
    id: 'harvey',
    name: 'Harvey',
    emoji: '\u2696\uFE0F',
    tagline: 'AI copilot for elite law firms (42% of AmLaw 100)',
    rounds: [
      { name: 'Seed', amount: '$5M', date: "Nov '22", monthsFromSeed: 0 },
      { name: 'Series A', amount: '$21M', date: "Mar '23", monthsFromSeed: 4 },
      { name: 'Series B', amount: '$80M', date: "Dec '23", monthsFromSeed: 13 },
      { name: 'Series E', amount: '$8B val', date: "Oct '25", monthsFromSeed: 35 },
    ],
    currentValuation: '$8B',
    seedToSeriesBMonths: 13,
    totalFunding: '$1.02B',
    color: 'var(--success)',
  },
  {
    id: 'pika',
    name: 'Pika',
    emoji: '\uD83C\uDFA5',
    tagline: 'Consumer-first AI video generation',
    rounds: [
      { name: 'Seed', amount: '$5.5M', date: "Apr '23", monthsFromSeed: 0 },
      { name: 'Series A', amount: '$55M', date: "Nov '23", monthsFromSeed: 7 },
      { name: 'Series B', amount: '$80M', date: "Jun '24", monthsFromSeed: 14 },
    ],
    currentValuation: '$470M',
    seedToSeriesBMonths: 14,
    totalFunding: '$115M',
    color: 'var(--warning)',
  },
  {
    id: 'xai',
    name: 'xAI',
    emoji: '\uD83D\uDE80',
    tagline: 'Real-time AI with X integration (Elon Musk)',
    rounds: [
      { name: 'Seed', amount: '???', date: "Mar '23", monthsFromSeed: 0 },
      { name: 'Series A', amount: '$134M', date: "May '23", monthsFromSeed: 2 },
      { name: 'Series B', amount: '$6B', date: "May '24", monthsFromSeed: 14 },
      { name: 'Series E', amount: '$230B val', date: "Jan '26", monthsFromSeed: 34 },
    ],
    currentValuation: '$230B',
    seedToSeriesBMonths: 14,
    totalFunding: '$42.73B',
    color: 'var(--foreground)',
  },
  {
    id: 'granola',
    name: 'Granola',
    emoji: '\uD83D\uDCDD',
    tagline: 'Premium AI meeting notes ("augment, not replace")',
    rounds: [
      { name: 'Seed', amount: '$4M', date: "Feb '24", monthsFromSeed: 0 },
      { name: 'Series A', amount: '$20M', date: "Oct '24", monthsFromSeed: 8 },
      { name: 'Series B', amount: '$43M', date: "May '25", monthsFromSeed: 15 },
    ],
    currentValuation: '$250M',
    seedToSeriesBMonths: 15,
    totalFunding: '$67M',
    color: 'var(--accent-light)',
  },
];

export const industryAverage = { min: 36, max: 48 } as const;

export const eraData: readonly EraData[] = [
  { era: '2010s', range: [48, 60], label: '48-60 months' },
  { era: '2020-2022', range: [36, 42], label: '36-42 months' },
  { era: '2023-2025', range: [12, 20], label: '12-20 months' },
];
