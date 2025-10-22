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
    <Preview>Day before signing day</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Tomorrow’s the big day — your PlayerVault Signing Day is almost here! 🙌
          </Text>
          <Text style={paragraph}>
            We’re excited to help you connect with your fans and fulfill their orders. Below is
            everything you need to make the signing process smooth, efficient, and stress-free.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>Signing Day Checklist — What to Expect:</strong>
          <br />
          <br />
          <strong style={listTitle}>✅ Item Delivery:</strong>
          <Text style={paragraph}>
            All fan items should have arrived at your chosen address. Please store them safely until
            your signing session.
          </Text>
          <strong style={listTitle}>💻 Accessing Instructions in Your Portal:</strong>
          <Text style={paragraph}>
            Tomorrow, log in to your Athlete Portal, go to the Campaigns tab, and click “View
            Details” on your current campaign.
          </Text>{' '}
          <Text style={paragraph}>
            This page includes step-by-step signing instructions for each fan order.
          </Text>{' '}
          <strong style={listTitle}>🔖 Order Details & Stickers:</strong>
          <Text style={paragraph}>
            Each item has a sticker with an Order # — use that number to match the item with its
            corresponding fan request inside your portal.
          </Text>
          <strong style={listTitle}>🖊 Follow Fan Instructions Carefully:</strong>
          <Text style={paragraph}>
            Each order includes specific personalization requests (e.g., “To Sarah,” pen color,
            signature placement).
          </Text>
          <Text style={paragraph}>
            Please follow these instructions exactly to ensure fan satisfaction.
          </Text>
          <strong style={listTitle}>✔️ Track Your Progress:</strong>
          <Text style={paragraph}>
            Mark each item as Complete in your portal once it’s signed. This keeps everything
            organized and ensures nothing gets missed.
          </Text>
          <strong style={listTitle}>🖋 Pen & Material Guidelines:</strong>
          <Text style={paragraph}>
            All the pen types you’ll need will be included in your shipment. Please use the assigned
            pens for each item — they’re chosen for the best material compatibility and result.
          </Text>
          <strong style={listTitle}>📦 After You’re Done:</strong>
          <Text style={paragraph}>When you’ve completed all orders:</Text>
          <ul style={list_wo_top}>
            <li style={listItem}>Repack everything carefully in the original boxes</li>
            <li style={listItem}>Use the return labels or QR codes provided</li>
            <li style={listItem}>
              We’ll schedule a pickup with a carrier to collect the signed items
            </li>
          </ul>
          <hr style={hr} />
          <Reminder />
          <Text style={paragraph}>
            You’ve got everything you need to make this a success — we’ll be checking in throughout
            the day if you need anything.
          </Text>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any last-minute questions or issues, reach out to us right away
            <br /> at{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Good luck tomorrow — your fans are excited, and we can’t wait to see everything come
            together!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
