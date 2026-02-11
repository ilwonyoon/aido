import { Column, Link, Row, Section, Text } from '@react-email/components';
import { colors, fonts, typeScale, fontWeight, radius, sectionTitleStyle } from './tokens';

export interface JobCardProps {
  readonly companyName: string;
  readonly companyId: string;
  readonly title: string;
  readonly location: string;
  readonly url: string;
  readonly compensation?: string;
  readonly siteUrl?: string;
}

export function JobCard({
  companyName,
  companyId,
  title,
  location,
  url,
  compensation,
  siteUrl = 'https://aido-d2cc0.web.app',
}: JobCardProps) {
  return (
    <Section style={cardStyle}>
      <Link href={`${siteUrl}/company/${companyId}/`} style={companyLinkStyle}>
        {companyName}
      </Link>
      <Text style={titleStyle}>
        <Link href={url} style={roleLinkStyle}>
          {title}
        </Link>
      </Text>
      <Row>
        <Column>
          <Text style={metaStyle}>{location}</Text>
        </Column>
        {compensation && (
          <Column align="right">
            <Text style={compensationStyle}>{compensation}</Text>
          </Column>
        )}
      </Row>
    </Section>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: colors.card,
  borderRadius: radius.lg,
  padding: '16px',
  marginBottom: '8px',
  border: `1px solid ${colors.border}`,
};

// Section title pattern: xs, semibold, uppercase, 0.08em tracking
const companyLinkStyle: React.CSSProperties = {
  ...sectionTitleStyle,
  color: colors.muted,
  textDecoration: 'none',
};

const titleStyle: React.CSSProperties = {
  margin: '4px 0 8px 0',
};

// base scale: 15px, medium weight (label pattern)
const roleLinkStyle: React.CSSProperties = {
  fontSize: typeScale.base.fontSize,
  fontWeight: fontWeight.medium,
  lineHeight: typeScale.base.lineHeight,
  letterSpacing: typeScale.base.letterSpacing,
  color: colors.foreground,
  textDecoration: 'none',
};

// xs scale: 12px, lh 1.5
const metaStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  lineHeight: typeScale.xs.lineHeight,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.muted,
  margin: '0',
};

// xs scale with mono font for numbers
const compensationStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  lineHeight: typeScale.xs.lineHeight,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.success,
  margin: '0',
  fontFamily: fonts.mono,
  fontWeight: fontWeight.semibold,
};
