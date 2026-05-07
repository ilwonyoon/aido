import fs from 'fs';
import path from 'path';

import { companies } from '../src/data/companies/index';
import type { OpenRole } from '../src/data/types';

interface QueuePosting {
  readonly title: string;
  readonly url: string;
  readonly location?: string;
  readonly roleFamily: 'product-design' | 'design-engineering' | 'other-design' | 'out-of-scope';
  readonly roleSignal: 'founding' | 'first-design-hire' | 'senior' | 'staff' | 'lead' | 'head' | 'standard';
}

interface QueueCompany {
  readonly band: 'P0' | 'P1' | 'P2' | 'P3';
  readonly id: string;
  readonly name: string;
  readonly ashbyDesignPostings?: QueuePosting[];
}

interface PriorityQueue {
  readonly updateOpenRoles: QueueCompany[];
  readonly removeStaleOpenRoles: QueueCompany[];
}

const PROJECT_ROOT = process.cwd();
const QUEUE_PATH = path.join(PROJECT_ROOT, 'src/data/research/job-update-priority-queue-2026-05-07.json');
const LAST_VERIFIED_AT = '2026-05-07';

function parseArgs(argv: string[]): { readonly band: QueueCompany['band']; readonly dryRun: boolean; readonly noRemove: boolean } {
  const bandIndex = argv.indexOf('--band');
  const band = bandIndex >= 0 ? argv[bandIndex + 1] : 'P0';
  if (!['P0', 'P1', 'P2', 'P3'].includes(band)) {
    throw new Error('--band must be P0, P1, P2, or P3');
  }

  return {
    band: band as QueueCompany['band'],
    dryRun: argv.includes('--dry-run'),
    noRemove: argv.includes('--no-remove'),
  };
}

function findArrayBlock(source: string, key: string): { readonly start: number; readonly end: number; readonly indent: string } {
  const keyIndex = source.indexOf(`${key}: [`);
  if (keyIndex === -1) {
    throw new Error(`${key} block not found`);
  }

  const lineStart = source.lastIndexOf('\n', keyIndex) + 1;
  const indent = source.slice(lineStart, keyIndex).match(/^\s*/)?.[0] ?? '';
  const arrayStart = source.indexOf('[', keyIndex);
  let index = arrayStart;
  let depth = 0;
  let inString = false;
  let quote = "'";
  let escaped = false;

  for (; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) inString = false;
      continue;
    }

    if (char === "'" || char === '"' || char === '`') {
      inString = true;
      quote = char;
      continue;
    }

    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) {
        return { start: arrayStart, end: index + 1, indent };
      }
    }
  }

  throw new Error(`${key} array end not found`);
}

function stringifyValue(value: unknown, indent: string): string {
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const childIndent = `${indent}  `;
    return `[\n${value.map((entry) => `${childIndent}${stringifyValue(entry, childIndent)}`).join(',\n')}\n${indent}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value).filter(([, entryValue]) => entryValue !== undefined);
    if (entries.length === 0) return '{}';
    const childIndent = `${indent}  `;
    return `{\n${entries
      .map(([key, entryValue]) => `${childIndent}${key}: ${stringifyValue(entryValue, childIndent)},`)
      .join('\n')}\n${indent}}`;
  }

  return JSON.stringify(value);
}

function formatOpenRoles(roles: ReadonlyArray<OpenRole>, indent: string): string {
  if (roles.length === 0) return '[]';
  const roleIndent = `${indent}  `;
  return `[\n${roles.map((role) => `${roleIndent}${stringifyValue(role, roleIndent)}`).join(',\n')}\n${indent}]`;
}

function normalizeRoleTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function makeRole(posting: QueuePosting, existingRole?: OpenRole): OpenRole {
  const title = posting.title.trim();
  const roleFamily = posting.roleFamily === 'out-of-scope' ? undefined : posting.roleFamily;
  return {
    ...existingRole,
    title,
    location: posting.location ?? existingRole?.location ?? 'Unknown',
    type: existingRole?.type ?? 'full-time',
    url: posting.url,
    roleFamily,
    roleSignal: posting.roleSignal,
    verificationStatus: 'confirmed',
    sourceType: 'ashby',
    lastVerifiedAt: LAST_VERIFIED_AT,
    whyInteresting:
      existingRole?.whyInteresting ??
      `${posting.roleSignal === 'founding' ? 'Founding design' : 'Current design'} role verified on Ashby.`,
  };
}

function buildNextRoles(companyId: string, postings: ReadonlyArray<QueuePosting>): OpenRole[] {
  const company = companies.find((candidate) => candidate.id === companyId);
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const existingByUrl = new Map(company.openRoles.map((role) => [role.url, role]));
  const existingByTitle = new Map(company.openRoles.map((role) => [normalizeRoleTitle(role.title), role]));
  const seen = new Set<string>();

  return postings
    .filter((posting) => posting.roleFamily === 'product-design' || posting.roleFamily === 'design-engineering')
    .filter((posting) => {
      if (seen.has(posting.url)) return false;
      seen.add(posting.url);
      return true;
    })
    .map((posting) => makeRole(posting, existingByUrl.get(posting.url) ?? existingByTitle.get(normalizeRoleTitle(posting.title))));
}

function updateCompanyFile(companyId: string, roles: ReadonlyArray<OpenRole>, dryRun: boolean): boolean {
  const filePath = path.join(PROJECT_ROOT, 'src/data/companies', `${companyId}.ts`);
  if (!fs.existsSync(filePath)) {
    return false;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const block = findArrayBlock(source, 'openRoles');
  const nextSource = `${source.slice(0, block.start)}${formatOpenRoles(roles, block.indent)}${source.slice(block.end)}`;

  if (!dryRun) {
    fs.writeFileSync(filePath, nextSource);
  }
  return true;
}

function main(): void {
  const { band, dryRun, noRemove } = parseArgs(process.argv.slice(2));
  const queue = JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8')) as PriorityQueue;
  const updated: Array<{ id: string; roles: number }> = [];
  const removed: string[] = [];
  const skippedMissingFiles: string[] = [];

  for (const entry of queue.updateOpenRoles.filter((candidate) => candidate.band === band)) {
    const roles = buildNextRoles(entry.id, entry.ashbyDesignPostings ?? []);
    if (updateCompanyFile(entry.id, roles, dryRun)) {
      updated.push({ id: entry.id, roles: roles.length });
    } else {
      skippedMissingFiles.push(entry.id);
    }
  }

  if (!noRemove) {
    for (const entry of queue.removeStaleOpenRoles.filter((candidate) => candidate.band === band)) {
      if (updateCompanyFile(entry.id, [], dryRun)) {
        removed.push(entry.id);
      } else {
        skippedMissingFiles.push(entry.id);
      }
    }
  }

  process.stdout.write(`${JSON.stringify({ band, dryRun, noRemove, updated, removed, skippedMissingFiles }, null, 2)}\n`);
}

main();
