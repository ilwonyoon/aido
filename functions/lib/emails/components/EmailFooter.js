"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFooter = EmailFooter;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const tokens_1 = require("./tokens");
function EmailFooter({ unsubscribeUrl }) {
    return ((0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsx)(components_1.Hr, { style: dividerStyle }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: footerTextStyle, children: "You received this because you subscribed to AIDO newsletter." }), (0, jsx_runtime_1.jsx)(components_1.Link, { href: unsubscribeUrl, style: unsubscribeLinkStyle, children: "Unsubscribe" }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: brandStyle, children: "AIDO \u2014 AI Design Opportunities" })] }));
}
const dividerStyle = {
    borderColor: tokens_1.colors.border,
    margin: '32px 0 16px 0',
};
// xs scale: 12px, lh 1.5
const footerTextStyle = {
    fontSize: tokens_1.typeScale.xs.fontSize,
    fontWeight: tokens_1.fontWeight.normal,
    lineHeight: tokens_1.typeScale.xs.lineHeight,
    letterSpacing: tokens_1.typeScale.xs.letterSpacing,
    color: tokens_1.colors.muted,
    margin: '0 0 8px 0',
};
const unsubscribeLinkStyle = {
    fontSize: tokens_1.typeScale.xs.fontSize,
    fontWeight: tokens_1.fontWeight.normal,
    color: tokens_1.colors.muted,
    textDecoration: 'underline',
};
const brandStyle = {
    fontSize: tokens_1.typeScale.xs.fontSize,
    fontFamily: tokens_1.fonts.mono,
    fontWeight: tokens_1.fontWeight.normal,
    letterSpacing: tokens_1.typeScale.xs.letterSpacing,
    color: tokens_1.colors.mutedDim,
    margin: '16px 0 0 0',
};
//# sourceMappingURL=EmailFooter.js.map