import { Column, Img, Link, Row, Section, Text } from '@react-email/components';
import { colors, fonts, typeScale, fontWeight, radius } from './tokens';

const LOGO_DEV_TOKEN = 'pk_ZjMwtG5fQ_-Dt-Km4EjHHg';

export interface JobCardProps {
  readonly companyName: string;
  readonly companyId: string;
  readonly companyWebsite?: string;
  readonly title: string;
  readonly location: string;
  readonly url: string;
  readonly compensation?: string;
  readonly siteUrl?: string;
}

function getDomain(website: string): string {
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`);
    return url.hostname.replace('www.', '');
  } catch {
    return website.replace(/^https?:\/\//, '').replace('www.', '').split('/')[0];
  }
}

export function JobCard({
  companyName,
  companyId,
  companyWebsite,
  title,
  location,
  url,
  compensation,
  siteUrl = 'https://aido-d2cc0.web.app',
}: JobCardProps) {
  const companyPageUrl = `${siteUrl}/company/${companyId}/`;
  const domain = companyWebsite ? getDomain(companyWebsite) : undefined;
  const logoUrl = domain
    ? `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=56&format=png`
    : undefined;

  return (
    <Section style={cardStyle}>
      {/* Header: Logo + Company Name */}
      <Row>
        <Column style={logoColumnStyle}>
          {logoUrl ? (
            <Img
              src={logoUrl}
              alt={`${companyName} logo`}
              width={28}
              height={28}
              style={logoStyle}
            />
          ) : (
            <div style={logoFallbackStyle}>
              {companyName[0]}
            </div>
          )}
        </Column>
        <Column style={headerContentStyle}>
          <Link href={companyPageUrl} style={companyNameStyle}>
            {companyName}
          </Link>
        </Column>
        <Column align="right">
          <Text style={locationStyle}>{location.split(',')[0]}</Text>
        </Column>
      </Row>

      {/* Role Title — links to AIDO company page */}
      <Text style={roleTitleContainerStyle}>
        <Link href={companyPageUrl} style={roleTitleStyle}>
          {title}
        </Link>
        {compensation && (
          <span style={compensationStyle}> {compensation}</span>
        )}
      </Text>

      {/* Footer link */}
      <Link href={companyPageUrl} style={profileLinkStyle}>
        Full profile &rarr;
      </Link>
    </Section>
  );
}

// Site pattern: card p-5, border, rounded
const cardStyle: React.CSSProperties = {
  backgroundColor: colors.card,
  borderRadius: radius.lg,
  padding: '16px 20px',
  marginBottom: '8px',
  border: `1px solid ${colors.border}`,
};

const logoColumnStyle: React.CSSProperties = {
  width: '40px',
  verticalAlign: 'middle',
};

// Site: rounded-lg bg-white, 32px
const logoStyle: React.CSSProperties = {
  borderRadius: radius.lg,
  backgroundColor: '#ffffff',
  display: 'block',
};

// Site: fallback with letter initial, rounded-lg
const logoFallbackStyle: React.CSSProperties = {
  width: '28px',
  height: '28px',
  borderRadius: radius.lg,
  backgroundColor: colors.cardHover,
  color: colors.muted,
  fontSize: typeScale.sm.fontSize,
  fontWeight: fontWeight.medium,
  fontFamily: fonts.primary,
  lineHeight: '28px',
  textAlign: 'center',
  display: 'block',
};

const headerContentStyle: React.CSSProperties = {
  verticalAlign: 'middle',
  paddingLeft: '8px',
};

// Site: font-semibold → email: medium (500) for antialiasing parity
const companyNameStyle: React.CSSProperties = {
  fontSize: typeScale.sm.fontSize,
  fontWeight: fontWeight.medium,
  lineHeight: typeScale.sm.lineHeight,
  color: colors.foreground,
  textDecoration: 'none',
};

// Site: text-xs text-[var(--muted)]
const locationStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  fontWeight: fontWeight.normal,
  lineHeight: typeScale.xs.lineHeight,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.muted,
  margin: '0',
};

const roleTitleContainerStyle: React.CSSProperties = {
  margin: '8px 0 8px 0',
};

// Site: text-sm with hover effect — email: base scale, medium
const roleTitleStyle: React.CSSProperties = {
  fontSize: typeScale.base.fontSize,
  fontWeight: fontWeight.medium,
  lineHeight: typeScale.base.lineHeight,
  letterSpacing: typeScale.base.letterSpacing,
  color: colors.foreground,
  textDecoration: 'none',
};

// Site: text-xs text-[var(--success)] ml-1.5
const compensationStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  lineHeight: typeScale.xs.lineHeight,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.success,
  fontFamily: fonts.mono,
  fontWeight: fontWeight.normal,
};

// Site: text-xs text-[var(--muted)] hover:text-[var(--accent-light)]
const profileLinkStyle: React.CSSProperties = {
  fontSize: typeScale.xs.fontSize,
  fontWeight: fontWeight.normal,
  lineHeight: typeScale.xs.lineHeight,
  letterSpacing: typeScale.xs.letterSpacing,
  color: colors.muted,
  textDecoration: 'none',
};
