#!/usr/bin/env node

/**
 * Pre-deploy guard: blocks deployment from any branch other than 'main'.
 * Used by `npm run deploy` to prevent accidental production overwrites.
 */

import { execSync } from 'child_process';

const branch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();

if (branch !== 'main') {
  console.error('');
  console.error(`  ✖ Deploy blocked: currently on '${branch}'`);
  console.error(`    Production deploys are only allowed from 'main'.`);
  console.error('');
  console.error('  To deploy:');
  console.error('    1. git checkout main');
  console.error('    2. git merge <your-branch>');
  console.error('    3. npm run deploy');
  console.error('');
  process.exit(1);
}

console.log(`  ✓ Branch check passed: deploying from '${branch}'`);
