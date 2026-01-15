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
    <Preview>Invited to join their account</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 Hi Keon,</Text>
          <Text style={paragraph}>
            <strong style={paragraphBold}>John Doe </strong>
            has signed up for PlayerVault on your behalf and invited you to join the account.
          </Text>
          <Text style={paragraph}>
            To complete your account setup and receive approval, there are two quick steps you’ll
            need to take:
          </Text>
          <div style={{ padding: '0 0 0 8px' }}>
            <strong style={listTitle}>1. Create your PlayerVault password</strong>
            <br />
            <strong style={listTitle}>2. Review and sign your Player Agreement</strong>
          </div>
          <br />
          <Text style={{ ...paragraph, letterSpacing: '-0.18px' }}>
            Once completed, our team will review your account and notify both you and your manager
            when you’re fully approved and ready to launch campaigns.
          </Text>

          <Text style={{ ...boldSubTitle, margin: '16px 0 8px' }}>Get started here:</Text>
          <LinkComponent
            text="Create Password & Review Agreement"
            href="http://www.playervault.io/"
          />

          <hr style={{ ...hr, margin: '0 0 0px 0' }} />
          <br />

          <Text style={{ ...paragraph, marginBottom: '24px', letterSpacing: '-0.18px' }}>
            If you have any questions along the way, feel free to reach out to us at
            <br />
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>

          <Text style={paragraph}>Welcome to PlayerVault — we’re excited to have you,</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
