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
import { ivo } from './ivo';
import { surgeAi } from './surge-ai';
import { factory } from './factory';
import { axiomMath } from './axiom-math';
import { extropic } from './extropic';
import { yutori } from './yutori';
import { resolveAi } from './resolve-ai';
import { parahelp } from './parahelp';
import { exa } from './exa';
import { alphaXiv } from './alphaxiv';
import { wisprFlow } from './wispr-flow';
import { pallet } from './pallet';
import { numeric } from './numeric';
import { doppel } from './doppel';
import { orionSleep } from './orion-sleep';
import { buildForever } from './buildforever';
import { sphere } from './sphere';
import { cogentSecurity } from './cogent-security';
import { wonder } from './wonder';
import { span } from './span';
import { safetykit } from './safetykit';
import { eventual } from './eventual';
import { dedalusLabs } from './dedalus-labs';
import { clerk } from './clerk';
import { gigaml } from './gigaml';
import { worldLabs } from './world-labs';
import { airloom } from './airloom';
import { console } from './console';
import { lightfield } from './lightfield';
import { assortHealth } from './assort-health';
import { netic } from './netic';
import { numeral } from './numeral';
import { gigs } from './gigs';
import { magicPatterns } from './magic-patterns';
import { airops } from './airops';
import { quo } from './quo';
import { scribe } from './scribe';
import { ando } from './ando';
import { fastino } from './fastino';
import { shortwave } from './shortwave';
import { highscore } from './highscore';
import { teraAi } from './tera-ai';
import { cocoon } from './cocoon';
import { miter } from './miter';
import { blazeAi } from './blaze-ai';
import { chroma } from './chroma';
import { legendXyz } from './legend-xyz';
import { wabi } from './wabi';
import { welltheory } from './welltheory';
import { thinkingMachinesLab } from './thinking-machines-lab';
import { impulseLabs } from './impulse-labs';
import { decart } from './decart';
import { lettuce } from './lettuce';
import { sanity } from './sanity';
import { relace } from './relace';
import { speakeasy } from './speakeasy';
import { mosey } from './mosey';
import { brainfish } from './brainfish';
import { poolside } from './poolside';
import { catalyxSpace } from './catalyx-space';
import { appliedCompute } from './applied-compute';
import { vizcom } from './vizcom';
import { cartesia } from './cartesia';
import { generationLab } from './generation-lab';
import { tensormesh } from './tensormesh';
import { unstructured } from './unstructured';
import { alexAi } from './alex-ai';
import { contra } from './contra';
import { livekit } from './livekit';
import { mandolin } from './mandolin';
import { furtherAi } from './further-ai';
import { senecaSystems } from './seneca-systems';
import { rivo } from './rivo';
import { railway } from './railway';
import { baseten } from './baseten';
import { artie } from './artie';
import { chaiDiscovery } from './chai-discovery';
import { item } from './item';
import { blacksmith } from './blacksmith';
import { terradot } from './terradot';
import { odyssey } from './odyssey';
import { mytra } from './mytra';
import { corgi } from './corgi';
import { glide } from './glide';
import { motif } from './motif';
import { tigereye } from './tigereye';
import { macroscope } from './macroscope';
import { trmLabs } from './trm-labs';
import { hightouch } from './hightouch';
import { remofirst } from './remofirst';
import { loop } from './loop';
import { perleAi } from './perle-ai';
import { flint } from './flint';
import { overlapAi } from './overlap-ai';
import { pacificFusion } from './pacific-fusion';
import { ditto } from './ditto';
import { truffleSecurity } from './truffle-security';
import { lightpage } from './lightpage';
import { conductor } from './conductor';
import { arcadeDev } from './arcade-dev';
import { layerFinancial } from './layer-financial';
import { sauronSystems } from './sauron-systems';
import { hummingbird } from './hummingbird';
import { redQueenBio } from './red-queen-bio';
import { nexus } from './nexus';
import { casca } from './casca';
import { twoTwoTwo } from './two-two-two';
import { truemed } from './truemed';
import { dittoLive } from './ditto-live';
import { edisonScientific } from './edison-scientific';
import { loonen } from './loonen';
import { inngest } from './inngest';
import { suger } from './suger';
import { nokken } from './nokken';
import { gcAi } from './gc-ai';
import { anythingAi } from './anything-ai';
import { medra } from './medra';
import { serval } from './serval';
import { anrok } from './anrok';
import { fal } from './fal';
import { town } from './town';
import { itemApp } from './item-app';
import { internetBackyard } from './internet-backyard';
import { operateCrm } from './operate-crm';
import { openrouter } from './openrouter';
import { humbleOps } from './humble-ops';
import { rox } from './rox';
import { delve } from './delve';
import { solidroad } from './solidroad';
import { mutiny } from './mutiny';
import { heirloom } from './heirloom';
import { happyrobot } from './happyrobot';
import { quanta } from './quanta';
import { raindropAi } from './raindrop-ai';
import { micro1 } from './micro1';
import { unlimitedIndustries } from './unlimited-industries';
import { metronome } from './metronome';
import { doss } from './doss';
import { devAgents } from './dev-agents';
import { indexCompany } from './index-company';
import { infisical } from './infisical';
import { natural } from './natural';
import { claritycare } from './claritycare';
import { agora } from './agora';
import { nooks } from './nooks';
import { sesameAi } from './sesame-ai';
import { langchain } from './langchain';
import { replicate } from './replicate';
import { tempo } from './tempo';
import { comulate } from './comulate';
import { reevo } from './reevo';
import { clickhouse } from './clickhouse';
import { bindwell } from './bindwell';
import { firecrawl } from './firecrawl';
import { nuraline } from './nuraline';
import { collective } from './collective';
import { response } from './response';
import { spiralDb } from './spiral-db';
import { vapi } from './vapi';
import { watershed } from './watershed';
import { onton } from './onton';
import { goodfire } from './goodfire';
import { alloy } from './alloy';
import { momentic } from './momentic';
import { variant } from './variant';
import { lgnd } from './lgnd';
import { composite } from './composite';
import { sonatic } from './sonatic';
import { subtrate } from './subtrate';
import { sierra } from './sierra';
import { tailor } from './tailor';
import { physicalIntelligence } from './physical-intelligence';
import { pulley } from './pulley';
import { lighthouse } from './lighthouse';
import { osmosis } from './osmosis';
import { zedDev } from './zed-dev';
import { warmer } from './warmer';
import { campfire } from './campfire';
import { causalLabs } from './causal-labs';
import { trunk } from './trunk';
import { sentientLabs } from './sentient-labs';
import { inferenceNet } from './inference-net';
import { flowEngineering } from './flow-engineering';
import { reducto } from './reducto';
import { mintlify } from './mintlify';
import { zeroentropy } from './zeroentropy';
import { found } from './found';
import { owner } from './owner';
import { clockwise } from './clockwise';
import { mainstay } from './mainstay';
import { anara } from './anara';
import { kernel } from './kernel';
import { mastra } from './mastra';
import { datacurve } from './datacurve';
import { davidAi } from './david-ai';
import { unify } from './unify';
import { seso } from './seso';
import { supermemory } from './supermemory';
import { convokeBio } from './convoke-bio';
import { paper } from './paper';
import { mem } from './mem';
import { calCom } from './cal-com';
import { osmind } from './osmind';
import { collate } from './collate';
import { primeIntellect } from './prime-intellect';
import { pierre } from './pierre';
import { supabase } from './supabase';
import { thinkingMachines } from './thinking-machines';
import { promisePay } from './promise-pay';
import { moonlakeAi } from './moonlake-ai';
import { blackbirdLabs } from './blackbird-labs';
import { framework } from './framework';
import { posthog } from './posthog';
import { nexhealth } from './nexhealth';
import { fermat } from './fermat';
import { patch } from './patch';
import { newlimit } from './newlimit';
import { polycam } from './polycam';
import { slash } from './slash';
import { hyperbolic } from './hyperbolic';
import { podqi } from './podqi';
import { parabola } from './parabola';
import { modular } from './modular';
import { imbueAi } from './imbue-ai';
import { edia } from './edia';
import { divineResearch } from './divine-research';
import { juicebox } from './juicebox';
import { nudge } from './nudge';
import { manifest } from './manifest';
import { neonPay } from './neon-pay';
import { tolans } from './tolans';
import { succint } from './succint';
import { seedHealth } from './seed-health';
import { martian } from './martian';
import { coderabbit } from './coderabbit';
import { cube } from './cube';
import { greptile } from './greptile';
import { kaedim } from './kaedim';
import { cardless } from './cardless';
import { radiantgraph } from './radiantgraph';
import { untilLabs } from './until-labs';
import { axiom } from './axiom';
import { e2b } from './e2b';
import { loyalDogs } from './loyal-dogs';
import { anon } from './anon';
import { arcadeAi } from './arcade-ai';
import { bem } from './bem';
import { bedrockRobotics } from './bedrock-robotics';
import { tandem } from './tandem';
import { stable } from './stable';
import { midday } from './midday';
import { sonder } from './sonder';
import { subframe } from './subframe';
import { column } from './column';
import { openpay } from './openpay';
import { langbase } from './langbase';
import { adalineAi } from './adaline-ai';

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
  ivo,
  surgeAi,
  factory,
  axiomMath,
  extropic,
  yutori,
  resolveAi,
  parahelp,
  exa,
  alphaXiv,
  wisprFlow,
  pallet,
  numeric,
  doppel,
  orionSleep,
  buildForever,
  sphere,
  cogentSecurity,
  wonder,
  span,
  safetykit,
  eventual,
  dedalusLabs,
  clerk,
  gigaml,
  worldLabs,
  airloom,
  console,
  lightfield,
  assortHealth,
  netic,
  numeral,
  gigs,
  magicPatterns,
  airops,
  quo,
  scribe,
  ando,
  fastino,
  shortwave,
  highscore,
  teraAi,
  cocoon,
  miter,
  blazeAi,
  chroma,
  legendXyz,
  wabi,
  welltheory,
  thinkingMachinesLab,
  impulseLabs,
  decart,
  lettuce,
  sanity,
  relace,
  speakeasy,
  mosey,
  brainfish,
  poolside,
  catalyxSpace,
  appliedCompute,
  vizcom,
  cartesia,
  generationLab,
  tensormesh,
  unstructured,
  alexAi,
  contra,
  livekit,
  mandolin,
  furtherAi,
  senecaSystems,
  rivo,
  railway,
  baseten,
  artie,
  chaiDiscovery,
  item,
  blacksmith,
  terradot,
  odyssey,
  mytra,
  corgi,
  glide,
  motif,
  tigereye,
  macroscope,
  trmLabs,
  hightouch,
  remofirst,
  loop,
  perleAi,
  flint,
  overlapAi,
  pacificFusion,
  ditto,
  truffleSecurity,
  lightpage,
  conductor,
  arcadeDev,
  layerFinancial,
  sauronSystems,
  hummingbird,
  redQueenBio,
  nexus,
  casca,
  twoTwoTwo,
  truemed,
  dittoLive,
  edisonScientific,
  loonen,
  inngest,
  suger,
  nokken,
  gcAi,
  anythingAi,
  medra,
  serval,
  anrok,
  fal,
  town,
  itemApp,
  internetBackyard,
  operateCrm,
  openrouter,
  humbleOps,
  rox,
  delve,
  solidroad,
  mutiny,
  heirloom,
  happyrobot,
  quanta,
  raindropAi,
  micro1,
  unlimitedIndustries,
  metronome,
  doss,
  devAgents,
  indexCompany,
  infisical,
  natural,
  claritycare,
  agora,
  nooks,
  sesameAi,
  langchain,
  replicate,
  tempo,
  comulate,
  reevo,
  clickhouse,
  bindwell,
  firecrawl,
  nuraline,
  collective,
  response,
  spiralDb,
  vapi,
  watershed,
  onton,
  goodfire,
  alloy,
  momentic,
  variant,
  lgnd,
  composite,
  sonatic,
  subtrate,
  sierra,
  tailor,
  physicalIntelligence,
  pulley,
  lighthouse,
  osmosis,
  zedDev,
  warmer,
  campfire,
  causalLabs,
  trunk,
  sentientLabs,
  inferenceNet,
  flowEngineering,
  reducto,
  mintlify,
  zeroentropy,
  found,
  owner,
  clockwise,
  mainstay,
  anara,
  kernel,
  mastra,
  datacurve,
  davidAi,
  unify,
  seso,
  supermemory,
  convokeBio,
  paper,
  mem,
  calCom,
  osmind,
  collate,
  primeIntellect,
  pierre,
  supabase,
  thinkingMachines,
  promisePay,
  moonlakeAi,
  blackbirdLabs,
  framework,
  posthog,
  nexhealth,
  fermat,
  patch,
  newlimit,
  polycam,
  slash,
  hyperbolic,
  podqi,
  parabola,
  modular,
  imbueAi,
  edia,
  divineResearch,
  juicebox,
  nudge,
  manifest,
  neonPay,
  tolans,
  succint,
  seedHealth,
  martian,
  coderabbit,
  cube,
  greptile,
  kaedim,
  cardless,
  radiantgraph,
  untilLabs,
  axiom,
  e2b,
  loyalDogs,
  anon,
  arcadeAi,
  bem,
  bedrockRobotics,
  tandem,
  stable,
  midday,
  sonder,
  subframe,
  column,
  openpay,
  langbase,
  adalineAi,
];

// Individual company exports removed (unused - companies array is sufficient)

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCompaniesByAiLevel(level: 'A' | 'B' | 'C' | 'D'): Company[] {
  return companies.filter((c) => c.aiNativeLevel === level);
}