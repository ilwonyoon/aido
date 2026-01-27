import { Company } from '../types';

import { anthropic } from './anthropic';
import { leya } from './leya';
import { granola } from './granola';
import { pika } from './pika';
import { elevenlabs } from './elevenlabs';
import { cognition } from './cognition';
import { mercor } from './mercor';
import { linear } from './linear';
import { notion } from './notion';
import { figma } from './figma';
import { mistral } from './mistral';
import { cursor } from './cursor';
import { perplexity } from './perplexity';
import { openai } from './openai';
import { vercel } from './vercel';
import { midjourney } from './midjourney';
import { runway } from './runway';
import { stabilityAi } from './stability-ai';
import { harvey } from './harvey';
import { characterAi } from './character-ai';
import { typeface } from './typeface';
import { scaleAi } from './scale-ai';
import { replit } from './replit';
import { cohere } from './cohere';
import { jasper } from './jasper';
import { sourcegraph } from './sourcegraph';
import { superhuman } from './superhuman';
import { hebbia } from './hebbia';
import { gamma } from './gamma';
import { ramp } from './ramp';
import { lovable } from './lovable';
import { codeium } from './codeium';
import { heygen } from './heygen';
import { gong } from './gong';
import { intercomFin } from './intercom-fin';
import { descript } from './descript';
import { glean } from './glean';
import { writer } from './writer';
import { brex } from './brex';
import { tome } from './tome';
import { grammarly } from './grammarly';
import { canva } from './canva';
import { otterAi } from './otter-ai';
import { copyAi } from './copy-ai';
import { beautifulAi } from './beautiful-ai';
import { tabnine } from './tabnine';
import { harmonic } from './harmonic';
import { ambienceHealthcare } from './ambience-healthcare';
import { abridge } from './abridge';
import { listenLabs } from './listen-labs';
import { blossom } from './blossom';
import { tavus } from './tavus';
import { toma } from './toma';
import { shopify } from './shopify';
import { base44 } from './base44';
import { xai } from './xai';
import { suno } from './suno';
import { higgsfield } from './higgsfield';
import { inferact } from './inferact';
import { humansand } from './humansand';
import { subtleComputing } from './subtle-computing';
import { deepgram } from './deepgram';
import { letta } from './letta';
import { llmarena } from './llmarena';
import { mem0 } from './mem0';
import { humeAi } from './hume-ai';

export const companies: Company[] = [
  anthropic,
  leya,
  granola,
  pika,
  elevenlabs,
  cognition,
  mercor,
  linear,
  notion,
  figma,
  mistral,
  cursor,
  perplexity,
  openai,
  vercel,
  midjourney,
  runway,
  stabilityAi,
  harvey,
  characterAi,
  typeface,
  scaleAi,
  replit,
  cohere,
  jasper,
  sourcegraph,
  superhuman,
  hebbia,
  gamma,
  ramp,
  lovable,
  codeium,
  heygen,
  gong,
  intercomFin,
  descript,
  glean,
  writer,
  brex,
  tome,
  grammarly,
  canva,
  otterAi,
  copyAi,
  beautifulAi,
  tabnine,
  harmonic,
  ambienceHealthcare,
  abridge,
  listenLabs,
  blossom,
  tavus,
  toma,
  shopify,
  base44,
  xai,
  suno,
  higgsfield,
  inferact,
  humansand,
  subtleComputing,
  deepgram,
  letta,
  llmarena,
  mem0,
  humeAi,
];

export { anthropic, leya, granola, pika, elevenlabs, cognition, mercor, linear, notion, figma, mistral, cursor, perplexity, openai, vercel, midjourney, runway, stabilityAi, harvey, characterAi, typeface, scaleAi, replit, cohere, jasper, sourcegraph, superhuman, hebbia, gamma, ramp, lovable, codeium, heygen, gong, intercomFin, descript, glean, writer, brex, tome, grammarly, canva, otterAi, copyAi, beautifulAi, tabnine, harmonic, ambienceHealthcare, abridge, listenLabs, blossom, tavus, toma, shopify, base44, xai, suno, higgsfield, inferact, humansand, subtleComputing, deepgram, letta, llmarena, mem0, humeAi };

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCompaniesByAiLevel(level: 'A' | 'B' | 'C' | 'D'): Company[] {
  return companies.filter((c) => c.aiNativeLevel === level);
}
