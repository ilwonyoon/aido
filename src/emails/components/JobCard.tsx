import { Column, Link, Row, Section, Text } from '@react-email/components';

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

// AIDO design tokens mapped to inline styles
// --card: #111111, --border: #333333, --radius-lg: 8px, --card-padding: 16px
const cardStyle: React.CSSProperties = {
  backgroundColor: '#111111',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '8px',
  border: '1px solid #333333',
};

// --type-section-title: 12px, uppercase, semibold, 0.05em tracking
const companyLinkStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#888888',
  textDecoration: 'none',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontWeight: 600,
};

// --type-body: 14px, --text-body: rgba(255,255,255,0.82)
const titleStyle: React.CSSProperties = {
  margin: '4px 0 8px 0',
};

// --accent-light: #3291ff for links
const roleLinkStyle: React.CSSProperties = {
  fontSize: '15px',
  fontWeight: 600,
  color: '#ededed',
  textDecoration: 'none',
};

// --muted: #888888, --type-caption: 12px
const metaStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#888888',
  margin: '0',
};

// --success: #50e3c2 for compensation highlight
const compensationStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#50e3c2',
  margin: '0',
  fontFamily: '"JetBrains Mono", monospace',
};
