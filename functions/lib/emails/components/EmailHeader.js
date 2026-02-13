"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailHeader = EmailHeader;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const tokens_1 = require("./tokens");
function EmailHeader() {
    return ((0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { as: "h1", style: logoStyle, children: "AIDO" }), (0, jsx_runtime_1.jsx)(components_1.Hr, { style: dividerStyle })] }));
}
// 4xl scale: 24px, lh 1.15, ls -0.035em
// Uses medium (500) — site nav logo is semibold but antialiased;
// email lacks antialiasing so 500 achieves visual parity
const logoStyle = {
    fontSize: tokens_1.typeScale['4xl'].fontSize,
    fontWeight: tokens_1.fontWeight.medium,
    fontFamily: tokens_1.fonts.mono,
    color: tokens_1.colors.foreground,
    letterSpacing: tokens_1.typeScale['4xl'].letterSpacing,
    lineHeight: tokens_1.typeScale['4xl'].lineHeight,
    margin: '0 0 16px 0',
};
const dividerStyle = {
    borderColor: tokens_1.colors.border,
    margin: '0 0 24px 0',
};
//# sourceMappingURL=EmailHeader.js.map