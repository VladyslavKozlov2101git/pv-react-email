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
    <Preview>1 week from Signing day</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>Your PlayerVault Signing Day is just one week away! 🎉</Text>
          <Text style={paragraph}>
            All the items you’ll be signing are now on their way to you. Below you’ll find the
            tracking information and everything you need to prepare for a smooth signing session.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>Shipment Details:</strong>
          <br /> <br />
          <Text style={paragraph}>
            Your items have been shipped to your chosen address and should arrive within the next
            few days.
          </Text>
          <Text style={paragraph}>
            Carrier: <strong style={paragraphBold}>CARRIER_NAME</strong> <br />
            Tracking Number: <strong style={paragraphBold}>1Z999AA1234567890</strong>
          </Text>
          <LinkComponent text="Track Your Shipment" href="/test" />
          <Text style={paragraph}>
            Please make sure someone is available to receive the packages to keep the items secure
            and ready for Signing Day.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>Signing Day Checklist — What to Expect:</strong>
          <br />
          <br />
          <strong style={listTitle}>✅ Item Delivery:</strong>
          <Text style={paragraph}>
            All fan items are being sent to your chosen address 10–3 days before your Signing Day.
            Once they arrive, please store them safely until your session begins.
          </Text>
          <strong style={listTitle}>💻 Accessing Instructions in Your Portal:</strong>
          <Text style={paragraph}>
            On Signing Day, log in to your Athlete Portal, go to the Campaigns tab, and click “View
            Details” on your current campaign.
          </Text>{' '}
          <Text style={paragraph}>
            This page includes step-by-step signing instructions for each fan order.
          </Text>{' '}
          <strong style={listTitle}>🔖 Order Details & Stickers:</strong>
          <Text style={paragraph}>
            Each item will have a sticker with an Order # — use that number to match the item with
            its corresponding fan request inside your portal.
          </Text>
          <strong style={listTitle}>🖊 Follow Fan Instructions Carefully:</strong>
          <Text style={paragraph}>
            Each order includes specific personalization requests (e.g., “To John,” pen color,
            signature placement).
          </Text>
          <Text style={paragraph}>
            Please follow these instructions exactly to ensure fan satisfaction.
          </Text>
          <strong style={listTitle}>✔️ Track Your Progress:</strong>
          <Text style={paragraph}>
            Mark each item as Complete in your portal once it’s signed. This keeps everything
            organized and ensures every fan gets their signed item.
          </Text>
          <strong style={listTitle}>🖋 Pen & Material Guidelines:</strong>
          <Text style={paragraph}>
            All the pen types you’ll need will be included in your shipment. Please use the assigned
            pens for each item — they’re chosen for the best material compatibility and result.
          </Text>
          <strong style={listTitle}>📦 After You’re Done:</strong>
          <Text style={paragraph}>Once all items are signed:</Text>
          <ul style={list_wo_top}>
            <li style={listItem}>Repack them carefully in their original boxes</li>
            <li style={listItem}>Use the provided return shipping labels or QR codes</li>
            <li style={listItem}>We’ll schedule a pickup with a carrier to collect everything</li>
          </ul>
          <hr style={hr} />
          <Reminder />
          <Text style={paragraph}>
            If you have any questions or potential conflicts, please reach out right away
            <br /> at
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            We’re excited for your Signing Day and can’t wait for you to connect with your fans
            through this experience!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
