import { Hr, Link, Section, Text } from '@react-email/components';

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
  borderColor: '#333333',
  margin: '32px 0 16px 0',
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#888888',
  lineHeight: '1.4',
  margin: '0 0 8px 0',
};

const unsubscribeLinkStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#888888',
  textDecoration: 'underline',
};

const brandStyle: React.CSSProperties = {
  fontSize: '12px',
  fontFamily: '"JetBrains Mono", monospace',
  color: '#444444',
  margin: '16px 0 0 0',
};
