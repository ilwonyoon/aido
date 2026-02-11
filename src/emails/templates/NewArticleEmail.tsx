import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import { EmailHead } from '../components/EmailHead';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { colors, typeScale, fontWeight, sectionTitleStyle, emailBodyStyle, emailContainerStyle, ctaButtonStyle } from '../components/tokens';

export interface NewArticleEmailProps {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly category: string;
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

export function NewArticleEmail({
  title = 'Why AI-Native Companies Need Designers Who Think in Systems',
  excerpt = 'The best AI products aren\'t just well-designed interfaces. They\'re systems where design decisions compound. Here\'s what that means for your next role.',
  slug = 'ai-native-design-systems',
  category = 'insights',
  unsubscribeUrl = '#',
  siteUrl = 'https://aido-d2cc0.web.app',
}: Partial<NewArticleEmailProps> = {}) {
  return (
    <Html>
      <EmailHead />
      <Preview>{title}</Preview>
      <Body style={emailBodyStyle}>
        <Container style={emailContainerStyle} className="email-container">
          <EmailHeader />

          <Text style={categoryStyle}>{category}</Text>
          <Heading as="h2" style={titleStyle}>
            {title}
          </Heading>
          <Text style={excerptStyle}>{excerpt}</Text>

          <Button href={`${siteUrl}/insights/${slug}/`} style={ctaButtonStyle} className="email-cta-btn">
            Read Article
          </Button>

          <EmailFooter unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

export default NewArticleEmail;

// Section title pattern: xs, semibold, uppercase, 0.08em — accent color
const categoryStyle: React.CSSProperties = {
  ...sectionTitleStyle,
  color: colors.accent,
  margin: '0 0 8px 0',
};

// 4xl scale: 24px, lh 1.15, ls -0.035em
const titleStyle: React.CSSProperties = {
  fontSize: typeScale['4xl'].fontSize,
  fontWeight: fontWeight.semibold,
  lineHeight: typeScale['4xl'].lineHeight,
  letterSpacing: typeScale['4xl'].letterSpacing,
  color: colors.foreground,
  margin: '0 0 12px 0',
};

// base scale: 15px, lh 1.7, ls -0.01em
const excerptStyle: React.CSSProperties = {
  fontSize: typeScale.base.fontSize,
  fontWeight: fontWeight.normal,
  lineHeight: typeScale.base.lineHeight,
  letterSpacing: typeScale.base.letterSpacing,
  color: colors.textBody,
  margin: '0 0 24px 0',
};
