import { Link, Section, Text } from '@react-email/components';
import { colors, typeScale, fontWeight, radius, sectionTitleStyle } from './tokens';

export interface ArticleCardProps {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly category: string;
  readonly siteUrl?: string;
}

export function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  siteUrl = 'https://aido-d2cc0.web.app',
}: ArticleCardProps) {
  return (
    <Section style={cardStyle}>
      <Text style={categoryStyle}>{category}</Text>
      <Text style={titleStyle}>
        <Link href={`${siteUrl}/insights/${slug}/`} style={titleLinkStyle}>
          {title}
        </Link>
      </Text>
      <Text style={excerptStyle}>{excerpt}</Text>
    </Section>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: colors.card,
  borderRadius: radius.lg,
  padding: '20px',
  marginBottom: '8px',
  border: `1px solid ${colors.border}`,
};

// Section title pattern: xs, semibold, uppercase, 0.08em — accent color
const categoryStyle: React.CSSProperties = {
  ...sectionTitleStyle,
  color: colors.accent,
  margin: '0 0 8px 0',
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 8px 0',
};

// xl scale: 18px for card title prominence
const titleLinkStyle: React.CSSProperties = {
  fontSize: typeScale.xl.fontSize,
  fontWeight: fontWeight.semibold,
  lineHeight: typeScale.xl.lineHeight,
  letterSpacing: typeScale.xl.letterSpacing,
  color: colors.foreground,
  textDecoration: 'none',
};

// sm scale: 13px, lh 1.65
const excerptStyle: React.CSSProperties = {
  fontSize: typeScale.sm.fontSize,
  fontWeight: fontWeight.normal,
  lineHeight: typeScale.sm.lineHeight,
  color: colors.muted,
  margin: '0',
};
