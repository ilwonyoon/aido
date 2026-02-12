// Detect new job postings and articles via git diff
// Used by the newsletter send script to determine what content to include

import { execSync } from 'child_process';
import * as path from 'path';

export interface NewJob {
  readonly companyName: string;
  readonly companyId: string;
  readonly title: string;
  readonly location: string;
  readonly url: string;
  readonly compensation?: string;
}

export interface NewArticle {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly category: string;
}

export interface DetectedChanges {
  readonly newJobs: ReadonlyArray<NewJob>;
  readonly newArticles: ReadonlyArray<NewArticle>;
  readonly changedCompanyFiles: ReadonlyArray<string>;
  readonly changedArticleFiles: ReadonlyArray<string>;
}

export function detectChanges(): DetectedChanges {
  const changedFiles = getChangedFiles();

  const changedCompanyFiles = changedFiles.filter(
    (f) => f.startsWith('src/data/companies/') && f.endsWith('.ts') && !f.endsWith('index.ts')
  );

  const changedArticleFiles = changedFiles.filter(
    (f) => f.startsWith('src/data/articles/') && f.endsWith('.ts') && !f.endsWith('index.ts')
  );

  const newJobs = extractNewJobs(changedCompanyFiles);
  const newArticles = extractNewArticles(changedArticleFiles);

  return { newJobs, newArticles, changedCompanyFiles, changedArticleFiles };
}

function getChangedFiles(): ReadonlyArray<string> {
  try {
    const output = execSync('git diff HEAD~1 --name-only --diff-filter=AM', {
      encoding: 'utf-8',
    });
    return output
      .trim()
      .split('\n')
      .filter((line) => line.length > 0);
  } catch {
    console.error('Failed to get git diff. Using empty change list.');
    return [];
  }
}

function extractNewJobs(companyFiles: ReadonlyArray<string>): ReadonlyArray<NewJob> {
  const jobs: NewJob[] = [];

  for (const filePath of companyFiles) {
    try {
      const absolutePath = path.resolve(filePath);
      // Dynamic import won't work with tsx for .ts data files, use require-like approach
      const companyId = path.basename(filePath, '.ts');

      // Read the current file content and extract openRoles using regex
      const { readFileSync } = require('fs');
      const content = readFileSync(absolutePath, 'utf-8');

      // Extract company name
      const nameMatch = content.match(/name:\s*['"]([^'"]+)['"]/);
      const companyName = nameMatch ? nameMatch[1] : companyId;

      // Extract openRoles array entries
      const rolesSection = content.match(/openRoles:\s*\[([\s\S]*?)\]\s*[,}]/);
      if (!rolesSection) continue;

      const roleBlocks = rolesSection[1].split(/\}\s*,\s*\{/);
      for (const block of roleBlocks) {
        const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
        const locationMatch = block.match(/location:\s*['"]([^'"]+)['"]/);
        const urlMatch = block.match(/url:\s*['"]([^'"]+)['"]/);
        const compensationMatch = block.match(/compensation:\s*['"]([^'"]+)['"]/);

        if (titleMatch && locationMatch && urlMatch) {
          jobs.push({
            companyName,
            companyId,
            title: titleMatch[1],
            location: locationMatch[1],
            url: urlMatch[1],
            compensation: compensationMatch ? compensationMatch[1] : undefined,
          });
        }
      }
    } catch (error) {
      console.error(`Failed to parse ${filePath}:`, error);
    }
  }

  return jobs;
}

function extractNewArticles(articleFiles: ReadonlyArray<string>): ReadonlyArray<NewArticle> {
  const articles: NewArticle[] = [];

  for (const filePath of articleFiles) {
    try {
      const absolutePath = path.resolve(filePath);
      const { readFileSync } = require('fs');
      const content = readFileSync(absolutePath, 'utf-8');

      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      const excerptMatch = content.match(/excerpt:\s*['"]([^'"]+)['"]/);
      const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
      const categoryMatch = content.match(/category:\s*['"]([^'"]+)['"]/);

      if (titleMatch && slugMatch) {
        articles.push({
          title: titleMatch[1],
          excerpt: excerptMatch ? excerptMatch[1] : '',
          slug: slugMatch[1],
          category: categoryMatch ? categoryMatch[1] : 'insights',
        });
      }
    } catch (error) {
      console.error(`Failed to parse article ${filePath}:`, error);
    }
  }

  return articles;
}

// Run standalone
if (require.main === module) {
  const changes = detectChanges();
  console.log('Detected changes:');
  console.log(`  New jobs: ${changes.newJobs.length}`);
  console.log(`  New articles: ${changes.newArticles.length}`);
  if (changes.newJobs.length > 0) {
    console.log('\nNew Jobs:');
    for (const job of changes.newJobs) {
      console.log(`  - ${job.companyName}: ${job.title} (${job.location})`);
    }
  }
  if (changes.newArticles.length > 0) {
    console.log('\nNew Articles:');
    for (const article of changes.newArticles) {
      console.log(`  - ${article.title}`);
    }
  }
}
