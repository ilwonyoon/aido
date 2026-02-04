// AIDO Design System → Figma Variables (lightweight, no font loading)

function hexToRgba(hex, alpha) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  return {
    r: parseInt(hex.substring(0, 2), 16) / 255,
    g: parseInt(hex.substring(2, 4), 16) / 255,
    b: parseInt(hex.substring(4, 6), 16) / 255,
    a: alpha !== undefined ? alpha : 1,
  };
}

// ── Token Data ───────────────────────────────────────────────────────────────

const COLORS = {
  'background':     { dark: '#000000',  light: '#ffffff' },
  'foreground':     { dark: '#ededed',  light: '#000000' },
  'muted':          { dark: '#888888',  light: '#696969' },
  'muted-dim':      { dark: '#444444',  light: '#999999' },
  'border':         { dark: '#333333',  light: '#e5e5e5' },
  'accent':         { dark: '#0070f3',  light: '#0070f3' },
  'accent-light':   { dark: '#3291ff',  light: '#0061d5' },
  'primary':        { dark: '#50e3c2',  light: '#14b8a6' },
  'success':        { dark: '#50e3c2',  light: '#14b8a6' },
  'positive':       { dark: '#6b9e8f',  light: '#5a8a80' },
  'warning':        { dark: '#f5a623',  light: '#d97706' },
  'error':          { dark: '#ee0000',  light: '#dc2626' },
  'card':           { dark: '#111111',  light: '#fafafa' },
  'card-hover':     { dark: '#1a1a1a',  light: '#f5f5f5' },
  'text-body':      { dark: { hex: '#ffffff', alpha: 0.82 }, light: '#2e2e2e' },
  'text-secondary': { dark: { hex: '#ffffff', alpha: 0.78 }, light: '#696969' },
};

const SEMANTIC_COLORS = {
  'bg/base':                 'background',
  'bg/elevated':             'card',
  'bg/elevated-hover':       'card-hover',
  'fg/default':              'foreground',
  'fg/muted':                'muted',
  'fg/subtle':               'border',
  'border/default':          'border',
  'border/hover':            'muted',
  'interactive/primary':     'accent',
  'interactive/primary-hover':'accent-light',
  'interactive/link':        'accent-light',
  'feedback/success':        'success',
  'feedback/success-muted':  'positive',
  'feedback/warning':        'warning',
  'feedback/error':          'error',
  'feedback/info':           'accent-light',
  'level/A':                 'success',
  'level/B':                 'accent-light',
  'level/C':                 'foreground',
  'level/D':                 'muted',
  'focus/ring':              'accent',
};

const SPACING = {
  '0': 0, '1': 4, '2': 8, '3': 12, '4': 16,
  '5': 20, '6': 24, '8': 32, '10': 40, '12': 48, '16': 64,
};

const SEMANTIC_SPACING = {
  'layout/xs': 8, 'layout/sm': 16, 'layout/md': 24,
  'layout/lg': 32, 'layout/xl': 48, 'layout/2xl': 64,
  'component/xs': 4, 'component/sm': 8, 'component/md': 12, 'component/lg': 16,
  'text/inline': 4, 'text/stacked': 8, 'text/paragraph': 16, 'text/section': 24,
};

const RADIUS = { 'none': 0, 'sm': 4, 'md': 6, 'lg': 8, 'xl': 12, 'full': 9999 };

const TYPE_SIZES = {
  'xs': 12, 'sm': 14, 'base': 17, 'lg': 18, 'xl': 20, '2xl': 24, '3xl': 30, '4xl': 36,
};

const CONTROL_HEIGHTS = { 'sm': 32, 'md': 40, 'lg': 48 };

// ── Create Variables ─────────────────────────────────────────────────────────

let varCount = 0;

// 1. COLORS — Dark / Light modes
const colorCol = figma.variables.createVariableCollection('Colors');
const darkId = colorCol.modes[0].modeId;
colorCol.renameMode(darkId, 'Dark');
const lightId = colorCol.addMode('Light');

const colorVarMap = {};
for (const [name, vals] of Object.entries(COLORS)) {
  const v = figma.variables.createVariable(`primitive/${name}`, colorCol, 'COLOR');
  const dv = typeof vals.dark === 'object' ? hexToRgba(vals.dark.hex, vals.dark.alpha) : hexToRgba(vals.dark);
  const lv = typeof vals.light === 'object' ? hexToRgba(vals.light.hex, vals.light.alpha) : hexToRgba(vals.light);
  v.setValueForMode(darkId, dv);
  v.setValueForMode(lightId, lv);
  colorVarMap[name] = v;
  varCount++;
}

for (const [name, aliasTo] of Object.entries(SEMANTIC_COLORS)) {
  const v = figma.variables.createVariable(`semantic/${name}`, colorCol, 'COLOR');
  const alias = figma.variables.createVariableAlias(colorVarMap[aliasTo]);
  v.setValueForMode(darkId, alias);
  v.setValueForMode(lightId, alias);
  varCount++;
}

// 2. SPACING
const spaceCol = figma.variables.createVariableCollection('Spacing');
const spaceModeId = spaceCol.modes[0].modeId;
spaceCol.renameMode(spaceModeId, 'Default');

for (const [name, val] of Object.entries(SPACING)) {
  const v = figma.variables.createVariable(`primitive/${name}`, spaceCol, 'FLOAT');
  v.setValueForMode(spaceModeId, val);
  varCount++;
}
for (const [name, val] of Object.entries(SEMANTIC_SPACING)) {
  const v = figma.variables.createVariable(`semantic/${name}`, spaceCol, 'FLOAT');
  v.setValueForMode(spaceModeId, val);
  varCount++;
}

// 3. RADIUS
const radiusCol = figma.variables.createVariableCollection('Radius');
const radiusModeId = radiusCol.modes[0].modeId;
radiusCol.renameMode(radiusModeId, 'Default');

for (const [name, val] of Object.entries(RADIUS)) {
  const v = figma.variables.createVariable(name, radiusCol, 'FLOAT');
  v.setValueForMode(radiusModeId, val);
  varCount++;
}

// 4. TYPOGRAPHY
const typeCol = figma.variables.createVariableCollection('Typography');
const typeModeId = typeCol.modes[0].modeId;
typeCol.renameMode(typeModeId, 'Default');

for (const [name, val] of Object.entries(TYPE_SIZES)) {
  const v = figma.variables.createVariable(`size/${name}`, typeCol, 'FLOAT');
  v.setValueForMode(typeModeId, val);
  varCount++;
}
for (const [name, val] of Object.entries(CONTROL_HEIGHTS)) {
  const v = figma.variables.createVariable(`control-height/${name}`, typeCol, 'FLOAT');
  v.setValueForMode(typeModeId, val);
  varCount++;
}

figma.notify(`AIDO Design System: 4 collections, ${varCount} variables created`, { timeout: 5000 });
figma.closePlugin();
