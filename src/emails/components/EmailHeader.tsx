import { Heading, Hr, Section } from '@react-email/components';
import { colors, fonts, typeScale, fontWeight } from './tokens';

export function EmailHeader() {
  return (
    <Section>
      <Heading as="h1" style={logoStyle}>
        AIDO
      </Heading>
      <Hr style={dividerStyle} />
    </Section>
  );
}

// 4xl scale: 24px, lh 1.15, ls -0.035em
const logoStyle: React.CSSProperties = {
  fontSize: typeScale['4xl'].fontSize,
  fontWeight: fontWeight.semibold,
  fontFamily: fonts.mono,
  color: colors.foreground,
  letterSpacing: typeScale['4xl'].letterSpacing,
  lineHeight: typeScale['4xl'].lineHeight,
  margin: '0 0 16px 0',
};

const dividerStyle: React.CSSProperties = {
  borderColor: colors.border,
  margin: '0 0 24px 0',
};
