import fs from 'fs';
import path from 'path';

import { companies } from '../src/data/companies/index';
import type { OpenRole } from '../src/data/types';

const PROJECT_ROOT = process.cwd();
const LAST_VERIFIED_AT = '2026-05-07';

const P0_ROLES: Record<string, OpenRole[]> = {
  anthropic: [
    {
      title: 'Product Designer, Claude Code',
      location: 'San Francisco, CA | New York City, NY | Seattle, WA',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/anthropic/jobs/5104689008',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'greenhouse',
      lastVerifiedAt: LAST_VERIFIED_AT,
      team: 'Claude Code',
      whyInteresting: 'Design role on Claude Code, verified from Anthropic Greenhouse.',
    },
    {
      title: 'Design Engineer, AI Capability Development (Education Labs)',
      location: 'San Francisco, CA | New York City, NY',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/anthropic/jobs/5097186008',
      roleFamily: 'design-engineering',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'greenhouse',
      lastVerifiedAt: LAST_VERIFIED_AT,
      team: 'AI Capability Development / Education Labs',
      whyInteresting: 'Design engineering role on AI education capability development, verified from Anthropic Greenhouse.',
    },
  ],
  fal: [
    {
      title: 'Senior Product Designer',
      location: 'San Francisco',
      type: 'full-time',
      url: 'https://job-boards.greenhouse.io/fal/jobs/4105054009',
      roleFamily: 'product-design',
      roleSignal: 'senior',
      verificationStatus: 'confirmed',
      sourceType: 'greenhouse',
      lastVerifiedAt: LAST_VERIFIED_AT,
      whyInteresting: 'Senior Product Designer role verified from fal Greenhouse.',
    },
  ],
  factory: [
    {
      title: 'Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      url: 'https://factory.ai/careers/product-designer',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'company',
      lastVerifiedAt: LAST_VERIFIED_AT,
      whyInteresting: 'Product Designer role verified from Factory careers.',
    },
  ],
  mistral: [
    {
      title: 'Product Designer - Documentation',
      location: 'Paris',
      type: 'full-time',
      url: 'https://jobs.lever.co/mistral/d67de1b6-2cb3-4afb-b2a6-5e4901dce408',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'lever',
      lastVerifiedAt: LAST_VERIFIED_AT,
      team: 'Product',
      whyInteresting: 'Product Designer role on developer documentation, verified from Mistral Lever.',
    },
    {
      title: 'Product Designer - Mistral Cloud',
      location: 'Paris',
      type: 'full-time',
      url: 'https://jobs.lever.co/mistral/7ed4baa4-9323-4c5e-96eb-732a92257474',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'lever',
      lastVerifiedAt: LAST_VERIFIED_AT,
      team: 'Product',
      whyInteresting: 'Product Designer role on Mistral Cloud, verified from Mistral Lever.',
    },
    {
      title: 'Product Designer - Observability',
      location: 'Paris',
      type: 'full-time',
      url: 'https://jobs.lever.co/mistral/b161e4b7-001c-4b91-8396-b3f38aff919b',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'lever',
      lastVerifiedAt: LAST_VERIFIED_AT,
      team: 'Product',
      whyInteresting: 'Product Designer role on observability, verified from Mistral Lever.',
    },
  ],
  elevenlabs: [
    {
      title: 'Product Designer',
      location: 'London | New York',
      type: 'full-time',
      url: 'https://elevenlabs.io/careers/89da00ec-11b0-4359-913b-c3a89c1013bc/product-designer',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'company',
      lastVerifiedAt: LAST_VERIFIED_AT,
      whyInteresting: 'Product Designer role verified from ElevenLabs careers.',
    },
  ],
};

function findArrayBlock(source: string, key: string): { readonly start: number; readonly end: number; readonly indent: string } {
  const keyIndex = source.indexOf(`${key}: [`);
  if (keyIndex === -1) throw new Error(`${key} block not found`);

  const lineStart = source.lastIndexOf('\n', keyIndex) + 1;
  const indent = source.slice(lineStart, keyIndex).match(/^\s*/)?.[0] ?? '';
  const arrayStart = source.indexOf('[', keyIndex);
  let depth = 0;
  let inString = false;
  let quote = "'";
  let escaped = false;

  for (let index = arrayStart; index < source.length; index += 1) {
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
      if (depth === 0) return { start: arrayStart, end: index + 1, indent };
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

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function mergeExistingMetadata(companyId: string, roles: ReadonlyArray<OpenRole>): OpenRole[] {
  const company = companies.find((candidate) => candidate.id === companyId);
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const existingByUrl = new Map(company.openRoles.map((role) => [role.url, role]));
  const existingByTitle = new Map(company.openRoles.map((role) => [normalizeTitle(role.title), role]));

  return roles.map((role) => ({
    ...(existingByUrl.get(role.url) ?? existingByTitle.get(normalizeTitle(role.title))),
    ...role,
  }));
}

function updateCompany(companyId: string, roles: ReadonlyArray<OpenRole>): void {
  const filePath = path.join(PROJECT_ROOT, 'src/data/companies', `${companyId}.ts`);
  const source = fs.readFileSync(filePath, 'utf8');
  const block = findArrayBlock(source, 'openRoles');
  const mergedRoles = mergeExistingMetadata(companyId, roles);
  const nextSource = `${source.slice(0, block.start)}${formatOpenRoles(mergedRoles, block.indent)}${source.slice(block.end)}`;
  fs.writeFileSync(filePath, nextSource);
}

for (const [companyId, roles] of Object.entries(P0_ROLES)) {
  updateCompany(companyId, roles);
}

process.stdout.write(
  `${JSON.stringify(
    {
      updated: Object.entries(P0_ROLES).map(([id, roles]) => ({ id, roles: roles.length })),
    },
    null,
    2
  )}\n`
);
