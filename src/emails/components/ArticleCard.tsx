import { Link, Section, Text } from '@react-email/components';

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
  backgroundColor: '#111111',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '8px',
  border: '1px solid #333333',
};

const categoryStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#0070f3',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  margin: '0 0 8px 0',
  fontWeight: 600,
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 8px 0',
};

const titleLinkStyle: React.CSSProperties = {
  fontSize: '17px',
  fontWeight: 600,
  color: '#ededed',
  textDecoration: 'none',
};

const excerptStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#888888',
  lineHeight: '1.5',
  margin: '0',
};
