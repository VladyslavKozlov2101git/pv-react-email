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
  listTitle,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import Reminder from './components/Reminder';

export const PaymentIsProcessed = () => (
  <Html>
    <HeadComponent />
    <Preview>3 weeks from Signing day</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Your PlayerVault campaign is wrapping up soon, and Signing Day is just around the
            corner! 🎉
          </Text>
          <Text style={paragraph}>
            We’re excited to help you connect with fans and fulfill all the orders from your
            campaign.
          </Text>{' '}
          <hr style={hr} />
          <strong style={boldSubTitle}>What To Expect Next:</strong>
          <br />
          <br />
          <strong style={listTitle}>📦 Item Shipments:</strong>
          <Text style={paragraph}>
            We’ll begin shipping all fan-submitted items to you between 10–3 days before your
            Signing Day. These shipments will include everything you need for your signing session.
          </Text>
          <Text style={paragraph}>Items may come in separate batches.</Text>
          <strong style={listTitle}>📧 Signing Day Instructions:</strong>
          <Text style={paragraph}>
            As your Signing Day approaches, you’ll receive additional emails from PlayerVault with
            detailed instructions and checklists to make the process smooth and easy.
          </Text>{' '}
          <strong style={listTitle}>⚠️ Schedule Conflicts:</strong>
          <Text style={paragraph}>
            If you have any scheduling conflicts or changes that could affect your Signing Day
            availability, please let us know as soon as possible so we can coordinate accordingly.
          </Text>
          <hr style={hr} />
          <Reminder />
          <Text style={paragraph}>
            If you have any questions or updates, contact us anytime at
            <br />
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Thanks again for being part of PlayerVault — we’re looking forward to a great Signing
            Day with your fans!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
