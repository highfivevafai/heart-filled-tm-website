import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  submissionId: string;
  submittedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referralSource: string;
  about: string;
  ip: string;
  userAgent: string;
}

export const AdminNotificationEmail = ({
  submissionId,
  submittedAt,
  firstName,
  lastName,
  email,
  phone,
  referralSource,
  about,
  ip,
  userAgent,
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {firstName} {lastName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🎯 New Lead Received!</Heading>
        
        <Text style={text}>
          You have a new contact form submission from the HeartFilled Toastmasters website.
        </Text>
        
        <Section style={infoSection}>
          <Heading as="h2" style={h2}>Contact Information</Heading>
          
          <div style={infoRow}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{firstName} {lastName}</Text>
          </div>
          
          <div style={infoRow}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </div>
          
          <div style={infoRow}>
            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>
          </div>
          
          <div style={infoRow}>
            <Text style={label}>How They Found Us:</Text>
            <Text style={value}>{referralSource}</Text>
          </div>
        </Section>
        
        <Section style={messageSection}>
          <Heading as="h2" style={h2}>Message</Heading>
          <Text style={messageText}>{about}</Text>
        </Section>
        
        <Hr style={hr} />
        
        <Section style={metaSection}>
          <Heading as="h2" style={h3}>Submission Details</Heading>
          
          <div style={infoRow}>
            <Text style={metaLabel}>Submission ID:</Text>
            <Text style={metaValue}>{submissionId}</Text>
          </div>
          
          <div style={infoRow}>
            <Text style={metaLabel}>Submitted At:</Text>
            <Text style={metaValue}>{submittedAt}</Text>
          </div>
          
          <div style={infoRow}>
            <Text style={metaLabel}>IP Address:</Text>
            <Text style={metaValue}>{ip || 'N/A'}</Text>
          </div>
          
          <div style={infoRow}>
            <Text style={metaLabel}>User Agent:</Text>
            <Text style={metaValue}>{userAgent || 'N/A'}</Text>
          </div>
        </Section>
        
        <Text style={footer}>
          This lead has also been saved to your Google Sheets.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default AdminNotificationEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
  maxWidth: '650px',
  borderRadius: '8px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 30px',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const h3 = {
  color: '#6b7280',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
};

const infoSection = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  border: '1px solid #e5e7eb',
};

const messageSection = {
  backgroundColor: '#fef3c7',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  border: '1px solid #fde68a',
};

const metaSection = {
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  padding: '20px',
  margin: '16px 0',
};

const infoRow = {
  marginBottom: '12px',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const value = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0 0 16px',
  fontWeight: '500',
};

const messageText = {
  color: '#78350f',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const metaLabel = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  margin: '0 0 2px',
};

const metaValue = {
  color: '#374151',
  fontSize: '13px',
  margin: '0 0 12px',
  wordBreak: 'break-all' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '24px 0 0',
  textAlign: 'center' as const,
};
