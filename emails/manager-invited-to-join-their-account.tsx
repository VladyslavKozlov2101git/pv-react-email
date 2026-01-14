import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  container,
  content,
  greeting,
  hr,
  listTitle,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import LinkComponent from './components/LinkComponent';
import { boldSubTitle } from './components/ComplianceReminder';

export const PaymentIsProcessed = () => (
  <Html>
    <HeadComponent />
    <Preview>Manager is invited</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 Hi John,</Text>
          <Text style={paragraph}>
            <strong style={paragraphBold}>Keon Coleman </strong>
            has invited you to join their PlayerVault account to help manage campaigns and account
            activity.
          </Text>
          <Text style={paragraph}>To get access, you’ll just need to:</Text>
          <strong style={listTitle}>
            1. Accept the invitation to join [Athlete Name]’s account
          </strong>
          <br />
          <strong style={listTitle}>2. Create your PlayerVault password</strong>
          <br />
          <br />
          <Text style={{ ...paragraph, letterSpacing: '-0.18px' }}>
            Once completed, you’ll be able to collaborate on campaign setup, management, and
            execution on their behalf.
          </Text>

          <Text style={{ ...boldSubTitle, margin: '16px 0 8px' }}>
            Accept invitation & get started:
          </Text>
          <LinkComponent text="Create Password & Join Account" href="http://www.playervault.io/" />

          <hr style={{ ...hr, margin: '0 0 0px 0' }} />
          <br />

          <Text style={{ ...paragraph, marginBottom: '24px', letterSpacing: '-0.18px' }}>
            If you have any questions or need assistance, feel free to reach out to us at
            <br />
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>

          <Text style={paragraph}>Welcome to PlayerVault,</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
