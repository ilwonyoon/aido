import { companies } from './src/data/companies/index';
import { Company } from './src/data/types';

interface GrowthAnalysis {
  company: Company;
  arrValue: number | null;
  arrGrowthRate: number | null;
  totalFundingValue: number | null;
  fundingVelocity: number | null; // $ per month
  latestValuation: number | null;
  valuationGrowth: number | null; // % growth from first to latest
  userGrowth: string | null;
  growthScore: number;
}

// Parse dollar amounts from strings like "$7B", "$1.5B+", "$200M", etc.
function parseDollarAmount(str: string | undefined): number | null {
  if (!str) return null;

  // Remove commas, spaces, and plus signs
  const cleaned = str.replace(/[,\s+]/g, '');

  // Match patterns like $7B, $1.5B, $200M, etc.
  const match = cleaned.match(/\$?([\d.]+)([BMK])/i);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const unit = match[2].toUpperCase();

  const multipliers: Record<string, number> = {
    'K': 1000,
    'M': 1000000,
    'B': 1000000000,
  };

  return value * (multipliers[unit] || 1);
}

// Extract ARR from revenue string
function extractARR(revenue: string | undefined): number | null {
  if (!revenue) return null;

  // Look for ARR specifically
  const arrMatch = revenue.match(/\$?([\d.]+)([BMK])?\s*ARR/i);
  if (arrMatch) {
    return parseDollarAmount(`$${arrMatch[1]}${arrMatch[2] || ''}`);
  }

  return parseDollarAmount(revenue);
}

// Extract growth rate from growth string
function extractGrowthRate(growth: string | undefined): number | null {
  if (!growth) return null;

  // Match patterns like "7x YoY", "3x YoY", "100% YoY"
  const xMatch = growth.match(/([\d.]+)x/i);
  if (xMatch) {
    return parseFloat(xMatch[1]);
  }

  const percentMatch = growth.match(/([\d.]+)%/i);
  if (percentMatch) {
    return parseFloat(percentMatch[1]) / 100 + 1; // Convert % to multiplier
  }

  return null;
}

// Calculate funding velocity (total funding / months since first round)
function calculateFundingVelocity(company: Company): number | null {
  if (!company.fundingHistory || company.fundingHistory.length === 0) return null;

  const totalFunding = parseDollarAmount(company.totalFunding);
  if (!totalFunding) return null;

  const firstRound = company.fundingHistory[0];
  const lastRound = company.fundingHistory[company.fundingHistory.length - 1];

  if (!firstRound.date || !lastRound.date) return null;

  const firstDate = new Date(firstRound.date);
  const lastDate = new Date(lastRound.date);

  const monthsDiff = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (monthsDiff <= 0) return null;

  return totalFunding / monthsDiff;
}

// Calculate valuation growth
function calculateValuationGrowth(company: Company): number | null {
  if (!company.fundingHistory || company.fundingHistory.length < 2) return null;

  const firstValuation = parseDollarAmount(company.fundingHistory[0].valuation);
  const lastValuation = parseDollarAmount(company.fundingHistory[company.fundingHistory.length - 1].valuation);

  if (!firstValuation || !lastValuation) return null;

  return ((lastValuation - firstValuation) / firstValuation) * 100;
}

// Calculate composite growth score
function calculateGrowthScore(analysis: Omit<GrowthAnalysis, 'growthScore'>): number {
  let score = 0;

  // ARR contribution (40% weight)
  if (analysis.arrValue) {
    // Normalize ARR (log scale): $1B = 9, $100M = 8, $10M = 7, etc.
    const arrScore = Math.log10(analysis.arrValue) * 4;
    score += arrScore;
  }

  // ARR Growth Rate (30% weight)
  if (analysis.arrGrowthRate) {
    // 7x = 21 points, 3x = 9 points, 2x = 6 points
    score += analysis.arrGrowthRate * 3;
  }

  // Funding Velocity (20% weight)
  if (analysis.fundingVelocity) {
    // Normalize funding velocity (log scale)
    score += Math.log10(analysis.fundingVelocity) * 2;
  }

  // Valuation Growth (10% weight)
  if (analysis.valuationGrowth) {
    // 1000% = 10 points, 100% = 1 point
    score += Math.min(analysis.valuationGrowth / 100, 10);
  }

  return score;
}

// Analyze all companies
function analyzeCompanies(): GrowthAnalysis[] {
  return companies.map((company) => {
    const arrValue = extractARR(company.revenue);
    const arrGrowthRate = extractGrowthRate(company.growth);
    const totalFundingValue = parseDollarAmount(company.totalFunding);
    const fundingVelocity = calculateFundingVelocity(company);
    const latestValuation = parseDollarAmount(company.valuation);
    const valuationGrowth = calculateValuationGrowth(company);
    const userGrowth = company.customers || null;

    const analysis = {
      company,
      arrValue,
      arrGrowthRate,
      totalFundingValue,
      fundingVelocity,
      latestValuation,
      valuationGrowth,
      userGrowth,
      growthScore: 0,
    };

    analysis.growthScore = calculateGrowthScore(analysis);

    return analysis;
  });
}

// Format currency
function formatCurrency(value: number | null): string {
  if (!value) return 'N/A';

  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
}

// Main analysis
const analyses = analyzeCompanies();

// Sort by growth score
const topGrowers = analyses
  .sort((a, b) => b.growthScore - a.growthScore)
  .slice(0, 10);

console.log('\n========================================');
console.log('TOP 10 FASTEST GROWING AI COMPANIES');
console.log('Based on ARR, Funding Speed & Scale, User Growth');
console.log('========================================\n');

topGrowers.forEach((analysis, index) => {
  const { company } = analysis;

  console.log(`${index + 1}. ${company.name}`);
  console.log(`   Growth Score: ${analysis.growthScore.toFixed(2)}`);
  console.log(`   ---`);
  console.log(`   💰 ARR: ${formatCurrency(analysis.arrValue)} ${analysis.arrGrowthRate ? `(${analysis.arrGrowthRate}x YoY)` : ''}`);
  console.log(`   📈 Valuation: ${formatCurrency(analysis.latestValuation)} ${analysis.valuationGrowth ? `(+${analysis.valuationGrowth.toFixed(0)}% growth)` : ''}`);
  console.log(`   💸 Total Funding: ${formatCurrency(analysis.totalFundingValue)} ${analysis.fundingVelocity ? `(${formatCurrency(analysis.fundingVelocity)}/month)` : ''}`);
  console.log(`   👥 Users: ${analysis.userGrowth || 'N/A'}`);
  console.log(`   🏢 Stage: ${company.stage || 'N/A'}`);
  console.log(`   🎯 Market Position: ${company.marketPosition || 'N/A'}`);
  console.log('');
});

// Also show detailed metrics table
console.log('\n========================================');
console.log('DETAILED METRICS TABLE');
console.log('========================================\n');

console.log('Rank | Company           | ARR      | Growth | Valuation | Funding  | Score');
console.log('-----|-------------------|----------|--------|-----------|----------|-------');

topGrowers.forEach((analysis, index) => {
  const company = analysis.company.name.padEnd(17).substring(0, 17);
  const arr = formatCurrency(analysis.arrValue).padEnd(8);
  const growth = analysis.arrGrowthRate ? `${analysis.arrGrowthRate}x`.padEnd(6) : 'N/A'.padEnd(6);
  const valuation = formatCurrency(analysis.latestValuation).padEnd(9);
  const funding = formatCurrency(analysis.totalFundingValue).padEnd(8);
  const score = analysis.growthScore.toFixed(1).padStart(5);

  console.log(`${(index + 1).toString().padStart(4)} | ${company} | ${arr} | ${growth} | ${valuation} | ${funding} | ${score}`);
});

console.log('\n');
