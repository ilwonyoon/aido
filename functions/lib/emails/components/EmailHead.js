"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailHead = EmailHead;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
// Responsive email styles
// Gmail strips @media queries, but Apple Mail, Outlook iOS, Yahoo support them.
// Mobile scaling matches AIDO site: Desktop 15px → Mobile 17px (×1.133)
const responsiveStyles = `
  @media only screen and (max-width: 480px) {
    .email-container {
      padding: 24px 16px !important;
    }
    h1 {
      font-size: 22px !important;
    }
    h2 {
      font-size: 20px !important;
    }
    .email-body-text {
      font-size: 17px !important;
    }
    .email-cta-btn {
      padding: 14px 28px !important;
      font-size: 15px !important;
      width: 100% !important;
      text-align: center !important;
    }
  }
`;
// Each weight MUST use a different font file URL.
// Using the same file for all weights causes faux-bold (browser synthesis),
// which makes text look much heavier than the actual weight.
const fontUrls = {
    400: 'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.woff2',
    500: 'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-500-normal.woff2',
    600: 'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-600-normal.woff2',
};
function EmailHead() {
    return ((0, jsx_runtime_1.jsxs)(components_1.Head, { children: [(0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "JetBrains Mono", fallbackFontFamily: "monospace", webFont: { url: fontUrls[400], format: 'woff2' }, fontWeight: 400, fontStyle: "normal" }), (0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "JetBrains Mono", fallbackFontFamily: "monospace", webFont: { url: fontUrls[500], format: 'woff2' }, fontWeight: 500, fontStyle: "normal" }), (0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "JetBrains Mono", fallbackFontFamily: "monospace", webFont: { url: fontUrls[600], format: 'woff2' }, fontWeight: 600, fontStyle: "normal" }), (0, jsx_runtime_1.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), (0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: { __html: responsiveStyles } })] }));
}
//# sourceMappingURL=EmailHead.js.map