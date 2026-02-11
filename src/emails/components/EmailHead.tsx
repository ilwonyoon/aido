import { Font, Head } from '@react-email/components';

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

export function EmailHead() {
  return (
    <Head>
      {/* JetBrains Mono — primary font (matches AIDO site) */}
      <Font
        fontFamily="JetBrains Mono"
        fallbackFontFamily="monospace"
        webFont={{
          url: 'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Font
        fontFamily="JetBrains Mono"
        fallbackFontFamily="monospace"
        webFont={{
          url: 'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2',
          format: 'woff2',
        }}
        fontWeight={500}
        fontStyle="normal"
      />
      <Font
        fontFamily="JetBrains Mono"
        fallbackFontFamily="monospace"
        webFont={{
          url: 'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2',
          format: 'woff2',
        }}
        fontWeight={600}
        fontStyle="normal"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
  );
}
