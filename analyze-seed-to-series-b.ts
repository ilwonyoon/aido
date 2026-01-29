import { companies } from './src/data/companies/index';
import { Company, FundingRound } from './src/data/types';

interface SeriesBAnalysis {
  company: Company;
  seedDate: Date | null;
  seriesADate: Date | null;
  seriesBDate: Date | null;
  seedToSeriesAMonths: number | null;
  seriesAToSeriesBMonths: number | null;
  totalMonths: number | null;
  seedAmount: string | null;
  seriesAAmount: string | null;
  seriesBAmount: string | null;
  totalFunding: string | null;
  latestValuation: string | null;
  timeline: string;
}

function parseDate(dateStr: string | undefined): Date | null {
  if (!dateStr) return null;
  try {
    return new Date(dateStr);
  } catch {
    return null;
  }
}

function monthsDiff(date1: Date, date2: Date): number {
  const months = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
  return Math.round(months);
}

function findRound(fundingHistory: FundingRound[], stage: string): FundingRound | null {
  return fundingHistory.find(round =>
    round.stage.toLowerCase().includes(stage.toLowerCase())
  ) || null;
}

function analyzeSeriesBCompanies(): SeriesBAnalysis[] {
  const analyses: SeriesBAnalysis[] = [];

  for (const company of companies) {
    if (!company.fundingHistory || company.fundingHistory.length === 0) continue;

    const seedRound = findRound(company.fundingHistory, 'seed');
    const seriesARound = findRound(company.fundingHistory, 'series a');
    const seriesBRound = findRound(company.fundingHistory, 'series b');

    // Skip if doesn't have Series B
    if (!seriesBRound) continue;

    const seedDate = seedRound ? parseDate(seedRound.date) : null;
    const seriesADate = seriesARound ? parseDate(seriesARound.date) : null;
    const seriesBDate = parseDate(seriesBRound.date);

    if (!seriesBDate) continue;

    let seedToSeriesAMonths: number | null = null;
    let seriesAToSeriesBMonths: number | null = null;
    let totalMonths: number | null = null;

    if (seedDate && seriesADate) {
      seedToSeriesAMonths = monthsDiff(seedDate, seriesADate);
    }

    if (seriesADate && seriesBDate) {
      seriesAToSeriesBMonths = monthsDiff(seriesADate, seriesBDate);
    }

    if (seedDate && seriesBDate) {
      totalMonths = monthsDiff(seedDate, seriesBDate);
    }

    const timeline = `${seedDate ? seedDate.toISOString().split('T')[0] : 'Unknown'} → ${seriesADate ? seriesADate.toISOString().split('T')[0] : 'Unknown'} → ${seriesBDate.toISOString().split('T')[0]}`;

    analyses.push({
      company,
      seedDate,
      seriesADate,
      seriesBDate,
      seedToSeriesAMonths,
      seriesAToSeriesBMonths,
      totalMonths,
      seedAmount: seedRound?.amount || null,
      seriesAAmount: seriesARound?.amount || null,
      seriesBAmount: seriesBRound.amount,
      totalFunding: company.totalFunding,
      latestValuation: company.valuation,
      timeline,
    });
  }

  return analyses;
}

// Main analysis
const analyses = analyzeSeriesBCompanies();

// Sort by total months (fastest first)
const fastestGrowers = analyses
  .filter(a => a.totalMonths !== null)
  .sort((a, b) => (a.totalMonths || 999) - (b.totalMonths || 999))
  .slice(0, 10);

console.log('\n========================================');
console.log('TOP 10 FASTEST: SEED TO SERIES B');
console.log('Ranked by shortest time from Seed to Series B');
console.log('========================================\n');

fastestGrowers.forEach((analysis, index) => {
  const { company } = analysis;

  console.log(`${index + 1}. ${company.name}`);
  console.log(`   ⚡ Total Time: ${analysis.totalMonths} months (${(analysis.totalMonths! / 12).toFixed(1)} years)`);
  if (analysis.seedToSeriesAMonths) {
    console.log(`   📊 Seed → Series A: ${analysis.seedToSeriesAMonths} months`);
  }
  if (analysis.seriesAToSeriesBMonths) {
    console.log(`   📊 Series A → Series B: ${analysis.seriesAToSeriesBMonths} months`);
  }
  console.log(`   ---`);
  console.log(`   💰 Seed: ${analysis.seedAmount || 'Unknown'}`);
  console.log(`   💰 Series A: ${analysis.seriesAAmount || 'Unknown'}`);
  console.log(`   💰 Series B: ${analysis.seriesBAmount}`);
  console.log(`   💸 Total Funding: ${analysis.totalFunding}`);
  console.log(`   📈 Latest Valuation: ${analysis.latestValuation}`);
  console.log(`   🗓️  Timeline: ${analysis.timeline}`);
  console.log(`   🏢 Current Stage: ${company.stage}`);
  console.log(`   📍 Industry: ${company.industries?.join(', ') || 'N/A'}`);
  console.log(`   🎯 Description: ${company.description.substring(0, 100)}...`);
  console.log('');
});

// Table view
console.log('\n========================================');
console.log('TIMELINE COMPARISON TABLE');
console.log('========================================\n');

console.log('Rank | Company           | Total | Seed→A | A→B  | Latest Round | Valuation');
console.log('-----|-------------------|-------|--------|------|--------------|----------');

fastestGrowers.forEach((analysis, index) => {
  const company = analysis.company.name.padEnd(17).substring(0, 17);
  const total = analysis.totalMonths ? `${analysis.totalMonths}mo`.padEnd(5) : 'N/A'.padEnd(5);
  const seedToA = analysis.seedToSeriesAMonths ? `${analysis.seedToSeriesAMonths}mo`.padEnd(6) : 'N/A'.padEnd(6);
  const aToB = analysis.seriesAToSeriesBMonths ? `${analysis.seriesAToSeriesBMonths}mo`.padEnd(4) : 'N/A'.padEnd(4);
  const latestRound = (analysis.seriesBAmount || 'N/A').padEnd(12);
  const valuation = (analysis.latestValuation || 'Unknown').padEnd(9);

  console.log(`${(index + 1).toString().padStart(4)} | ${company} | ${total} | ${seedToA} | ${aToB} | ${latestRound} | ${valuation}`);
});

console.log('\n');

// Export top 5 for article writing
const top5 = fastestGrowers.slice(0, 5);
console.log('========================================');
console.log('TOP 5 FOR ARTICLE');
console.log('========================================\n');

top5.forEach((analysis, index) => {
  console.log(`\n## ${index + 1}. ${analysis.company.name}`);
  console.log(`**Timeline**: ${analysis.totalMonths} months from Seed to Series B\n`);
  console.log(`**Business Model**: ${analysis.company.description}\n`);
  console.log(`**Market Position**: ${analysis.company.marketPosition}\n`);
  console.log(`**Why Strong**:`);
  analysis.company.moat?.forEach(m => console.log(`- ${m}`));
  console.log(`\n**Growth Trajectory**:`);
  console.log(`- Current Stage: ${analysis.company.stage}`);
  console.log(`- Valuation: ${analysis.latestValuation}`);
  console.log(`- Total Funding: ${analysis.totalFunding}`);
  console.log(`- Revenue: ${analysis.company.revenue}`);
  console.log(`- Growth: ${analysis.company.growth}`);
  console.log(`\n**Future Outlook**:`);
  console.log(`- TAM: ${analysis.company.growthMetrics?.tam || 'N/A'}`);
  console.log(`- Market Ceiling: ${analysis.company.growthMetrics?.ceiling || 'N/A'}`);
  if (analysis.company.growthMetrics?.tailwinds) {
    console.log(`- Tailwinds:`);
    analysis.company.growthMetrics.tailwinds.forEach(t => console.log(`  * ${t}`));
  }
  console.log('\n---\n');
});
