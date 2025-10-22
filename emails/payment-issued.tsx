import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  boldSubTitle,
  container,
  content,
  greeting,
  hr,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import LinkComponent from './components/LinkComponent';
import Reminder from './components/Reminder';

export const SigningDay = () => (
  <Html>
    <HeadComponent />
    <Preview>Payment Issued</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Good news — your PlayerVault payment has been successfully processed! 🎉
          </Text>
          <Text style={paragraph}>
            This payment covers all earnings from your most recent campaign and signing session.
          </Text>
          <Text style={paragraph}>
            Funds have been issued to your account on{' '}
            <strong style={paragraphBold}>Aug 1, 2025</strong> and will typically appear in your
            bank account within 1–3 business days, depending on your financial institution.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>Payment Details:</strong>
          <br /> <br />
          <Text style={paragraph}>
            Payment Amount: <strong style={paragraphBold}>$6,240.00 </strong> <br />
            Campaign: <strong style={paragraphBold}>Autographed Jersey </strong> <br />
            Payment Method: <strong style={paragraphBold}>PayPal</strong> <br />
            Issued Date: <strong style={paragraphBold}> Aug 1, 2025</strong>
          </Text>
          <br />
          <Text style={paragraph}>
            You can view payment details and history anytime in your Athlete Portal:
          </Text>
          <LinkComponent href="www.playervault.io" text="Access Athlete Portal" />
          <hr style={hr} />
          <Reminder type="long" />
          <Text style={paragraph}>
            If you have any questions about this payment or future payouts, contact us
            <br />
            at{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Thank you again for being part of PlayerVault and creating amazing fan experiences — we
            look forward to your next campaign!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SigningDay;
