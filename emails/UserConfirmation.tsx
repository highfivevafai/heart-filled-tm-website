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

interface UserConfirmationEmailProps {
  firstName: string;
  lastName: string;
}

export const UserConfirmationEmail = ({
  firstName,
  lastName,
}: UserConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting HeartFilled Toastmasters</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank You for Reaching Out! 🎉</Heading>
        
        <Text style={text}>
          Hi {firstName} {lastName},
        </Text>
        
        <Text style={text}>
          Thank you for your interest in HeartFilled Toastmasters! We've received your
          message and we're excited to connect with you.
        </Text>
        
        <Section style={callout}>
          <Text style={calloutText}>
            Our team will review your information and get back to you shortly.
          </Text>
        </Section>
        
        <Text style={text}>
          In the meantime, feel free to explore our website to learn more about our club,
          our mission, and the benefits of joining Toastmasters.
        </Text>
        
        <Hr style={hr} />
        
        <Text style={footer}>
          HeartFilled Toastmasters<br />
          Building Confident Communicators and Leaders
        </Text>
        
        <Text style={footerSmall}>
          This is an automated confirmation email. Please do not reply directly to this message.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default UserConfirmationEmail;

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
  maxWidth: '600px',
  borderRadius: '8px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 30px',
  textAlign: 'center' as const,
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
};

const callout = {
  backgroundColor: '#dbeafe',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const calloutText = {
  color: '#1e40af',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '24px',
  margin: '0',
  textAlign: 'center' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '16px 0',
  textAlign: 'center' as const,
};

const footerSmall = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '8px 0',
  textAlign: 'center' as const,
};
