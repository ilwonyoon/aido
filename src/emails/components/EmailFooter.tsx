import { Hr, Link, Section, Text } from '@react-email/components';
import { colors, fonts, typeScale, fontWeight } from './tokens';

interface EmailFooterProps {
  readonly unsubscribeUrl: string;
}

export function EmailFooter({ unsubscribeUrl }: EmailFooterProps) {
  return (
    <Section>
      <Hr style={dividerStyle} />
      <Text style={footerTextStyle}>
        You received this because you subscribed to AIDO newsletter.
      </Text>
      <Link href={unsubscribeUrl} style={unsubscribeLinkStyle}>
        Unsubscribe
      </Link>
      <Text style={brandStyle}>
        AIDO — AI Design Opportunities
      </Text>
    </Section>
  );
}

const dividerStyle: React.CSSProperties = {
  borderColor: colors.border,
  margin: '32px 0 16px 0',
};

// xs scale: 12px, lh 1.5
const footerTextStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  lineHeight: typeScale.xs.lineHeight,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.muted,
  margin: '0 0 8px 0',
};

const unsubscribeLinkStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  color: colors.muted,
  textDecoration: 'underline',
};

const brandStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  fontFamily: fonts.mono,
  fontWeight: fontWeight.semibold,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.mutedDim,
  margin: '16px 0 0 0',
};
