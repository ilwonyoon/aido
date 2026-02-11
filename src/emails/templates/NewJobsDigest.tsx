import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { JobCard, type JobCardProps } from '../components/JobCard';

export interface NewJobsDigestProps {
  readonly jobs: ReadonlyArray<JobCardProps>;
  readonly totalNewJobs: number;
  readonly dateRange: string;
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

export function NewJobsDigest({
  jobs,
  totalNewJobs,
  dateRange,
  unsubscribeUrl,
  siteUrl = 'https://aido-d2cc0.web.app',
}: NewJobsDigestProps) {
  const previewText = `${totalNewJobs} new AI design ${totalNewJobs === 1 ? 'job' : 'jobs'} this week`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <EmailHeader />

          <Heading as="h2" style={headingStyle}>
            {totalNewJobs} New AI Design {totalNewJobs === 1 ? 'Job' : 'Jobs'}
          </Heading>
          <Text style={dateStyle}>{dateRange}</Text>

          {jobs.map((job, index) => (
            <JobCard key={index} {...job} siteUrl={siteUrl} />
          ))}

          <Button href={`${siteUrl}/jobs/`} style={ctaButtonStyle}>
            View All Jobs
          </Button>

          <EmailFooter unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

export default NewJobsDigest;

const bodyStyle: React.CSSProperties = {
  backgroundColor: '#000000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: '0',
  padding: '0',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 20px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 600,
  color: '#ededed',
  margin: '0 0 4px 0',
  letterSpacing: '-0.02em',
};

const dateStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#888888',
  margin: '0 0 24px 0',
};

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: '#0070f3',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: '8px',
  padding: '12px 24px',
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '16px',
};
