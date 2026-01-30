// Numeric data for D3 visualizations
// All values in millions USD (EUR converted at ~1.1 rate)

export interface CompanyNumeric {
  readonly id: string;
  readonly name: string;
  readonly emoji: string;
  readonly color: string;
  readonly seedToSeriesBMonths: number;
  readonly currentValuationM: number;
  readonly totalFundingM: number;
  readonly rounds: readonly RoundNumeric[];
  readonly metrics: CompanyMetrics;
}

export interface RoundNumeric {
  readonly name: string;
  readonly amountM: number;
  readonly monthsFromSeed: number;
  readonly cumulativeM: number;
}

export interface CompanyMetrics {
  readonly fundingVelocityMPerMonth: number;
  readonly valuationMultiple: number;
  readonly roundCount: number;
  readonly avgMonthsBetweenRounds: number;
  readonly largestRoundM: number;
  readonly sector: string;
  readonly foundedYear: number;
  readonly hqRegion: string;
}

export const companiesNumeric: readonly CompanyNumeric[] = [
  {
    id: 'mistral-ai',
    name: 'Mistral AI',
    emoji: '\uD83C\uDDEB\uD83C\uDDF7',
    color: '#0070f3',
    seedToSeriesBMonths: 12,
    currentValuationM: 14000,
    totalFundingM: 3050,
    rounds: [
      { name: 'Seed', amountM: 115, monthsFromSeed: 0, cumulativeM: 115 },
      { name: 'Series A', amountM: 423, monthsFromSeed: 6, cumulativeM: 538 },
      { name: 'Series B', amountM: 660, monthsFromSeed: 12, cumulativeM: 1198 },
      { name: 'Series C', amountM: 1852, monthsFromSeed: 27, cumulativeM: 3050 },
    ],
    metrics: {
      fundingVelocityMPerMonth: 113,
      valuationMultiple: 4.6,
      roundCount: 4,
      avgMonthsBetweenRounds: 9,
      largestRoundM: 1852,
      sector: 'Foundation Models',
      foundedYear: 2023,
      hqRegion: 'Europe',
    },
  },
  {
    id: 'harvey',
    name: 'Harvey',
    emoji: '\u2696\uFE0F',
    color: '#50e3c2',
    seedToSeriesBMonths: 13,
    currentValuationM: 8000,
    totalFundingM: 1020,
    rounds: [
      { name: 'Seed', amountM: 5, monthsFromSeed: 0, cumulativeM: 5 },
      { name: 'Series A', amountM: 21, monthsFromSeed: 4, cumulativeM: 26 },
      { name: 'Series B', amountM: 80, monthsFromSeed: 13, cumulativeM: 106 },
      { name: 'Series E', amountM: 914, monthsFromSeed: 35, cumulativeM: 1020 },
    ],
    metrics: {
      fundingVelocityMPerMonth: 29,
      valuationMultiple: 7.8,
      roundCount: 4,
      avgMonthsBetweenRounds: 11.7,
      largestRoundM: 914,
      sector: 'Legal AI',
      foundedYear: 2022,
      hqRegion: 'North America',
    },
  },
  {
    id: 'pika',
    name: 'Pika',
    emoji: '\uD83C\uDFA5',
    color: '#f5a623',
    seedToSeriesBMonths: 14,
    currentValuationM: 470,
    totalFundingM: 115,
    rounds: [
      { name: 'Seed', amountM: 5.5, monthsFromSeed: 0, cumulativeM: 5.5 },
      { name: 'Series A', amountM: 55, monthsFromSeed: 7, cumulativeM: 60.5 },
      { name: 'Series B', amountM: 80, monthsFromSeed: 14, cumulativeM: 140.5 },
    ],
    metrics: {
      fundingVelocityMPerMonth: 10,
      valuationMultiple: 3.3,
      roundCount: 3,
      avgMonthsBetweenRounds: 7,
      largestRoundM: 80,
      sector: 'Video Generation',
      foundedYear: 2023,
      hqRegion: 'North America',
    },
  },
  {
    id: 'xai',
    name: 'xAI',
    emoji: '\uD83D\uDE80',
    color: '#ededed',
    seedToSeriesBMonths: 14,
    currentValuationM: 230000,
    totalFundingM: 42730,
    rounds: [
      { name: 'Seed', amountM: 0, monthsFromSeed: 0, cumulativeM: 0 },
      { name: 'Series A', amountM: 134, monthsFromSeed: 2, cumulativeM: 134 },
      { name: 'Series B', amountM: 6000, monthsFromSeed: 14, cumulativeM: 6134 },
      { name: 'Series E', amountM: 36596, monthsFromSeed: 34, cumulativeM: 42730 },
    ],
    metrics: {
      fundingVelocityMPerMonth: 1257,
      valuationMultiple: 5.4,
      roundCount: 4,
      avgMonthsBetweenRounds: 11.3,
      largestRoundM: 36596,
      sector: 'General AI',
      foundedYear: 2023,
      hqRegion: 'North America',
    },
  },
  {
    id: 'granola',
    name: 'Granola',
    emoji: '\uD83D\uDCDD',
    color: '#3291ff',
    seedToSeriesBMonths: 15,
    currentValuationM: 250,
    totalFundingM: 67,
    rounds: [
      { name: 'Seed', amountM: 4, monthsFromSeed: 0, cumulativeM: 4 },
      { name: 'Series A', amountM: 20, monthsFromSeed: 8, cumulativeM: 24 },
      { name: 'Series B', amountM: 43, monthsFromSeed: 15, cumulativeM: 67 },
    ],
    metrics: {
      fundingVelocityMPerMonth: 4.5,
      valuationMultiple: 3.7,
      roundCount: 3,
      avgMonthsBetweenRounds: 7.5,
      largestRoundM: 43,
      sector: 'Productivity',
      foundedYear: 2023,
      hqRegion: 'Europe',
    },
  },
];
