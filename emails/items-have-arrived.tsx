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
  list_wo_top,
  listItem,
  listTitle,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import Reminder from './components/Reminder';
import LinkComponent from './components/LinkComponent';

export const PaymentIsProcessed = () => (
  <Html>
    <HeadComponent />
    <Preview>Items have arrived for Signing day</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Good news — the memorabilia for your PlayerVault campaign has officially arrived! 🙌
          </Text>
          <Text style={paragraph}>
            Your shipment includes all the fan items you’ll be signing for your upcoming Signing Day
            on <strong style={paragraphBold}>Aug 1, 2025</strong>. Please take a moment to review
            everything inside and ensure all items are accounted for and stored safely until your
            signing session.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>📦 What’s Included:</strong>
          <br />
          <ul style={list_wo_top}>
            <li style={listItem}>All fan-submitted memorabilia that needs to be signed</li>
            <li style={listItem}>
              Pens/markers to use for each item (selected specifically for each material type)
            </li>
            <li style={listItem}>Stickers with Order #s to match each item to fan requests</li>
            <li style={listItem}>
              Return shipping labels or QR codes for sending items back to PlayerVault after signing
            </li>
          </ul>
          <hr style={hr} />
          <strong style={boldSubTitle}>💻 Access Fan Instructions in Your Portal:</strong>
          <br /> <br />
          <Text style={paragraph}>
            You can view each fan’s personalization and signing details anytime by logging into your
            Athlete Portal:
          </Text>
          <LinkComponent text="Access Athlete Portal" href="/test" />
          <Text style={paragraph}>
            From your portal: <br />
            1. Go to the Campaigns tab <br />
            2. Click “View Details” for your active campaign <br />
            3. Review each fan’s instructions, preferred pen color, and signature <br /> placement
            notes
          </Text>
          <hr style={hr} />
          <Reminder />
          <Text style={paragraph}>
            We’ll send you a reminder email 1 day before with your full signing checklist and
            step-by-step instructions for completing all orders.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>⚠️ Please Remember:</strong>
          <br />
          <br />
          <ul style={list_wo_top}>
            <li style={listItem}>Keep all items in a secure location until your Signing Day.</li>
            <li style={listItem}>
              Use only the pens provided, as they’ve been selected to ensure quality and
              consistency.
            </li>
            <li style={listItem}>
              If any items are missing, damaged, or incorrect, contact us right away.
            </li>
          </ul>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions or issues with your shipment, please reach out to
            <br /> us at{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            We’re thrilled to see your campaign coming together — your fans can’t wait to receive
            their signed memorabilia!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
