import { Heading, Hr, Section } from '@react-email/components';

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

const logoStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  fontFamily: 'monospace',
  color: '#ededed',
  letterSpacing: '-0.03em',
  margin: '0 0 16px 0',
};

const dividerStyle: React.CSSProperties = {
  borderColor: '#333333',
  margin: '0 0 24px 0',
};
