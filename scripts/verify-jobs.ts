/**
 * Job URL Validator Script
 *
 * Validates all openRole URLs across all companies.
 * Checks for: broken links (404), redirects, generic career pages,
 * and classifies URL quality.
 *
 * Usage: npx tsx scripts/verify-jobs.ts
 * Options:
 *   --fix    Output fix commands for broken URLs
 *   --json   Output results as JSON
 */

import { companies } from '../src/data/companies/index';

interface ValidationResult {
  companyId: string;
  companyName: string;
  roleTitle: string;
  url: string;
  status: 'ok' | 'broken' | 'redirect' | 'timeout' | 'error';
  httpStatus?: number;
  redirectUrl?: string;
  urlType: 'specific-job' | 'generic-careers' | 'ambiguous';
  message?: string;
}

// Patterns that indicate a specific job posting URL (with job ID)
const SPECIFIC_JOB_PATTERNS = [
  /greenhouse\.io\/[\w-]+\/jobs\/\d+/,           // Greenhouse with job ID
  /jobs\.ashbyhq\.com\/[\w%.+-]+\/[\da-f-]{36}/i,  // Ashby with UUID (company slug may contain dots)
  /jobs\.lever\.co\/[\w-]+\/[\da-f-]{36}/i,      // Lever with UUID
  /\/jobs\/[\da-f-]{36}/i,                        // Generic UUID job ID
  /\/jobs\/\d{5,}/,                                // Numeric job ID (5+ digits)
  /\/careers\/[\w-]+-\d{5,}/,                      // Career path with numeric ID
  /\/careers\/jobs\/\d+/,                           // /careers/jobs/ID
  /monster\.com\/job-openings\//,                   // Monster specific listing
  /linkedin\.com\/jobs\/view\/\d+/,                // LinkedIn specific job
  /indeed\.com\/viewjob/,                           // Indeed specific job
  /wellfound\.com\/jobs\/\d+/,                      // Wellfound/AngelList specific job
  /careers\.redpoint\.com\/companies\/[\w-]+\/jobs\/\d+/, // Redpoint careers
  /\/careers\/[\w-]+-[\w-]+-[\w-]+/, // Company career path with slug (e.g., /careers/product-designer-chatgpt-san-francisco)
  /\/careers\/\d{5,}/, // Career path with numeric ID
  /\/careers\/[\w-]+\?gh_jid=\d+/, // Greenhouse query param
  /[\w-]+\.com\/careers\/[\w-]+\/[\da-f-]{36}/, // Career path with UUID
];

// Patterns that indicate a generic careers page (no specific job)
const GENERIC_CAREERS_PATTERNS = [
  /^https?:\/\/[^/]+\/careers\/?$/,                // /careers or /careers/
  /^https?:\/\/[^/]+\/jobs\/?$/,                   // /jobs or /jobs/
  /^https?:\/\/[^/]+\/careers\/?#/,                // /careers#section
  /^https?:\/\/jobs\.ashbyhq\.com\/[\w%-]+\/?$/,   // Ashby company page without job ID
  /^https?:\/\/[^/]+\/careers\/?\?/,               // /careers?filter=...
];

function classifyUrl(url: string): 'specific-job' | 'generic-careers' | 'ambiguous' {
  for (const pattern of SPECIFIC_JOB_PATTERNS) {
    if (pattern.test(url)) return 'specific-job';
  }
  for (const pattern of GENERIC_CAREERS_PATTERNS) {
    if (pattern.test(url)) return 'generic-careers';
  }
  return 'ambiguous';
}

async function checkUrl(url: string, retries = 1): Promise<{
  status: 'ok' | 'broken' | 'redirect' | 'timeout' | 'error';
  httpStatus?: number;
  redirectUrl?: string;
  message?: string;
}> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    clearTimeout(timeoutId);

    const finalUrl = response.url;
    const wasRedirected = finalUrl !== url;

    if (response.status >= 200 && response.status < 300) {
      // Check if we were redirected to a generic page
      if (wasRedirected) {
        const redirectedType = classifyUrl(finalUrl);
        if (redirectedType === 'generic-careers') {
          return {
            status: 'redirect',
            httpStatus: response.status,
            redirectUrl: finalUrl,
            message: `Redirected to generic careers page: ${finalUrl}`,
          };
        }
      }
      return { status: 'ok', httpStatus: response.status };
    }

    if (response.status >= 300 && response.status < 400) {
      return {
        status: 'redirect',
        httpStatus: response.status,
        redirectUrl: response.headers.get('location') || undefined,
      };
    }

    if (response.status === 404 || response.status === 410) {
      return {
        status: 'broken',
        httpStatus: response.status,
        message: `HTTP ${response.status} - Job posting likely removed`,
      };
    }

    // Rate limited or server error - retry once
    if ((response.status === 429 || response.status >= 500) && retries > 0) {
      await delay(3000);
      return checkUrl(url, retries - 1);
    }

    return {
      status: 'broken',
      httpStatus: response.status,
      message: `HTTP ${response.status}`,
    };
  } catch (err) {
    clearTimeout(timeoutId);
    const error = err as Error;

    if (error.name === 'AbortError') {
      if (retries > 0) {
        await delay(2000);
        return checkUrl(url, retries - 1);
      }
      return { status: 'timeout', message: 'Request timed out after 15s' };
    }

    return {
      status: 'error',
      message: error.message || 'Unknown error',
    };
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function validateAllJobs(): Promise<ValidationResult[]> {
  const results: ValidationResult[] = [];
  const companiesWithRoles = companies.filter((c) => c.openRoles.length > 0);

  console.log(`\n🔍 Validating job URLs across ${companiesWithRoles.length} companies with open roles...\n`);
  console.log(`   Total companies: ${companies.length}`);
  console.log(`   Companies with roles: ${companiesWithRoles.length}`);
  console.log(`   Total URLs to check: ${companiesWithRoles.reduce((sum, c) => sum + c.openRoles.length, 0)}\n`);

  // Process in batches of 5 to avoid rate limiting
  const BATCH_SIZE = 5;
  let processed = 0;

  for (let i = 0; i < companiesWithRoles.length; i += BATCH_SIZE) {
    const batch = companiesWithRoles.slice(i, i + BATCH_SIZE);

    const batchPromises = batch.flatMap((company) =>
      company.openRoles.map(async (role) => {
        const urlType = classifyUrl(role.url);
        const urlCheck = await checkUrl(role.url);

        const result: ValidationResult = {
          companyId: company.id,
          companyName: company.name,
          roleTitle: role.title,
          url: role.url,
          status: urlCheck.status,
          httpStatus: urlCheck.httpStatus,
          redirectUrl: urlCheck.redirectUrl,
          urlType,
          message: urlCheck.message,
        };

        processed++;
        const icon =
          result.status === 'ok'
            ? '✅'
            : result.status === 'broken'
              ? '❌'
              : result.status === 'redirect'
                ? '↪️'
                : result.status === 'timeout'
                  ? '⏱️'
                  : '⚠️';

        const typeTag =
          urlType === 'generic-careers'
            ? ' [GENERIC CAREERS PAGE]'
            : urlType === 'ambiguous'
              ? ' [AMBIGUOUS URL]'
              : '';

        console.log(`  ${icon} [${processed}] ${company.name} — ${role.title}${typeTag}`);
        if (result.message) {
          console.log(`     └─ ${result.message}`);
        }

        return result;
      })
    );

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    // Small delay between batches
    if (i + BATCH_SIZE < companiesWithRoles.length) {
      await delay(500);
    }
  }

  return results;
}

function printReport(results: ValidationResult[]): void {
  const broken = results.filter((r) => r.status === 'broken');
  const redirected = results.filter((r) => r.status === 'redirect');
  const timeout = results.filter((r) => r.status === 'timeout');
  const errors = results.filter((r) => r.status === 'error');
  const ok = results.filter((r) => r.status === 'ok');
  const genericUrls = results.filter((r) => r.urlType === 'generic-careers');
  const ambiguousUrls = results.filter((r) => r.urlType === 'ambiguous');

  console.log('\n' + '='.repeat(80));
  console.log('                         JOB URL VALIDATION REPORT');
  console.log('='.repeat(80));

  console.log(`\n📊 SUMMARY`);
  console.log(`   Total URLs checked:     ${results.length}`);
  console.log(`   ✅ Working:             ${ok.length}`);
  console.log(`   ❌ Broken (404/410):    ${broken.length}`);
  console.log(`   ↪️  Redirected:          ${redirected.length}`);
  console.log(`   ⏱️  Timeout:             ${timeout.length}`);
  console.log(`   ⚠️  Error:              ${errors.length}`);
  console.log(`\n📎 URL QUALITY`);
  console.log(`   🎯 Specific job URLs:   ${results.filter((r) => r.urlType === 'specific-job').length}`);
  console.log(`   📄 Generic careers:     ${genericUrls.length}`);
  console.log(`   ❓ Ambiguous:           ${ambiguousUrls.length}`);

  if (broken.length > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log('❌ BROKEN URLs (positions likely removed — should be cleared)');
    console.log('─'.repeat(80));
    for (const r of broken) {
      console.log(`  ${r.companyName} (${r.companyId})`);
      console.log(`    Role:   ${r.roleTitle}`);
      console.log(`    URL:    ${r.url}`);
      console.log(`    Status: HTTP ${r.httpStatus} — ${r.message}`);
      console.log();
    }
  }

  if (redirected.length > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log('↪️  REDIRECTED URLs (may point to wrong page)');
    console.log('─'.repeat(80));
    for (const r of redirected) {
      console.log(`  ${r.companyName} (${r.companyId})`);
      console.log(`    Role:   ${r.roleTitle}`);
      console.log(`    URL:    ${r.url}`);
      console.log(`    Target: ${r.redirectUrl || 'unknown'}`);
      if (r.message) console.log(`    Note:   ${r.message}`);
      console.log();
    }
  }

  if (timeout.length > 0 || errors.length > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log('⚠️  TIMEOUT/ERROR URLs (could not verify)');
    console.log('─'.repeat(80));
    for (const r of [...timeout, ...errors]) {
      console.log(`  ${r.companyName} (${r.companyId})`);
      console.log(`    Role:   ${r.roleTitle}`);
      console.log(`    URL:    ${r.url}`);
      console.log(`    Issue:  ${r.message}`);
      console.log();
    }
  }

  if (genericUrls.length > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log('📄 GENERIC CAREERS PAGE URLs (not specific job links)');
    console.log('─'.repeat(80));
    for (const r of genericUrls) {
      console.log(`  ${r.companyName} (${r.companyId})`);
      console.log(`    Role:   ${r.roleTitle}`);
      console.log(`    URL:    ${r.url}`);
      console.log(`    Issue:  URL points to general careers page, not a specific job posting`);
      console.log();
    }
  }

  if (ambiguousUrls.length > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log('❓ AMBIGUOUS URLs (cannot determine if specific job or careers page)');
    console.log('─'.repeat(80));
    for (const r of ambiguousUrls) {
      console.log(`  ${r.companyName} (${r.companyId})`);
      console.log(`    Role:   ${r.roleTitle}`);
      console.log(`    URL:    ${r.url}`);
      console.log();
    }
  }

  // Summary of action items
  const actionItems = broken.length + genericUrls.filter((r) => r.status === 'ok').length;
  console.log(`\n${'='.repeat(80)}`);
  console.log(`🔧 ACTION ITEMS: ${actionItems} URLs need attention`);
  console.log(`   - ${broken.length} broken URLs → remove openRole entries`);
  console.log(`   - ${genericUrls.length} generic URLs → need specific job links or removal`);
  console.log(`   - ${timeout.length + errors.length} unverified → re-check manually`);
  console.log('='.repeat(80));
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const jsonOutput = args.includes('--json');

  const results = await validateAllJobs();

  if (jsonOutput) {
    console.log(JSON.stringify(results, null, 2));
  } else {
    printReport(results);
  }

  // Exit with error code if there are broken URLs
  const broken = results.filter((r) => r.status === 'broken');
  if (broken.length > 0) {
    process.exit(1);
  }
}

main();
