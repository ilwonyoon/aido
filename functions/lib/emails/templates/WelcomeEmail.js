"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeEmail = WelcomeEmail;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const EmailHead_1 = require("../components/EmailHead");
const EmailHeader_1 = require("../components/EmailHeader");
const EmailFooter_1 = require("../components/EmailFooter");
const tokens_1 = require("../components/tokens");
function WelcomeEmail({ unsubscribeUrl = '#', siteUrl = 'https://aido-d2cc0.web.app', } = {}) {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(EmailHead_1.EmailHead, {}), (0, jsx_runtime_1.jsx)(components_1.Preview, { children: "Welcome to AIDO \u2014 AI Design Opportunities" }), (0, jsx_runtime_1.jsx)(components_1.Body, { style: tokens_1.emailBodyStyle, children: (0, jsx_runtime_1.jsxs)(components_1.Container, { style: tokens_1.emailContainerStyle, className: "email-container", children: [(0, jsx_runtime_1.jsx)(EmailHeader_1.EmailHeader, {}), (0, jsx_runtime_1.jsx)(components_1.Heading, { as: "h2", style: headingStyle, children: "Welcome to AIDO" }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: bodyTextStyle, children: "You'll receive updates when new AI design jobs are posted and when we publish new insights. We keep it short and relevant." }), (0, jsx_runtime_1.jsx)(components_1.Button, { href: `${siteUrl}/jobs/`, style: tokens_1.ctaButtonStyle, className: "email-cta-btn", children: "Browse Jobs" }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: secondaryTextStyle, children: ["You can also check out our latest", ' ', (0, jsx_runtime_1.jsx)(components_1.Link, { href: `${siteUrl}/insights/`, style: linkStyle, children: "insights and analysis" }), "."] }), (0, jsx_runtime_1.jsx)(EmailFooter_1.EmailFooter, { unsubscribeUrl: unsubscribeUrl })] }) })] }));
}
exports.default = WelcomeEmail;
// 3xl scale: 22px, lh 1.2, ls -0.03em
// Uses medium (500) — site uses 600 but with antialiased rendering;
// email lacks antialiasing so 500 visually matches the site's 600
const headingStyle = {
    fontSize: tokens_1.typeScale['3xl'].fontSize,
    fontWeight: tokens_1.fontWeight.medium,
    lineHeight: tokens_1.typeScale['3xl'].lineHeight,
    letterSpacing: tokens_1.typeScale['3xl'].letterSpacing,
    color: tokens_1.colors.foreground,
    margin: '0 0 12px 0',
};
// base scale: 15px, lh 1.7, ls -0.01em
const bodyTextStyle = {
    fontSize: tokens_1.typeScale.base.fontSize,
    fontWeight: tokens_1.fontWeight.normal,
    lineHeight: tokens_1.typeScale.base.lineHeight,
    letterSpacing: tokens_1.typeScale.base.letterSpacing,
    color: tokens_1.colors.textBody,
    margin: '0 0 24px 0',
};
// sm scale: 13px, lh 1.65
const secondaryTextStyle = {
    fontSize: tokens_1.typeScale.sm.fontSize,
    fontWeight: tokens_1.fontWeight.normal,
    lineHeight: tokens_1.typeScale.sm.lineHeight,
    color: tokens_1.colors.muted,
    margin: '16px 0 0 0',
};
const linkStyle = {
    color: tokens_1.colors.accentLight,
    textDecoration: 'underline',
};
//# sourceMappingURL=WelcomeEmail.js.map