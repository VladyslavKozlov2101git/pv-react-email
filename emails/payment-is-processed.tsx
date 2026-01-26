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
  listTitle2,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import TotalComponent from './components/TotalComponent';
import OrderSummary from './components/OrderSummary';

export const PaymentIsProcessed = () => (
  <Html>
    <HeadComponent />
    <Preview>Payment is processed and order is confirmed</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Thanks for your purchase through <strong style={paragraphBold}>PlayerVault</strong> —
            your order has been successfully received! 🎉
          </Text>
          <Text style={paragraph}>
            Order Number: <strong style={paragraphBold}>#FC-2024-001234</strong>
            <br />
            Order Date: <strong style={paragraphBold}>Aug 1, 2025</strong>
          </Text>
          <hr style={hr} />
          <Text style={paragraph}>Order Summary:</Text>
          <OrderSummary />
          <TotalComponent />
          <Text style={paragraph}>
            You can view your full order details anytime in your Order History page.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>WHAT HAPPENS NEXT:</strong>
          <br />
          <br />
          <ul style={list_wo_top}>
            <li style={listItem}>
              <strong style={listTitle2}>For Autograph Orders:</strong>
              <span style={{ display: 'block' }}>
                <strong style={paragraphBold}>
                  - If you ordered the item from our retail partner:
                </strong>{' '}
                Your item will be provided by our retail partner. No action is required from you.
              </span>
              <span style={{ display: 'block' }}>
                <strong style={paragraphBold}>- If you chose your own item for signing:</strong>{' '}
                You’ll receive a <strong style={paragraphBold}>separate email shortly</strong> with
                your shipping label and/or instructions for how to send us your memorabilia item.
              </span>
              <span style={{ display: 'block', marginTop: '4px' }}>
                Once your item has been sent, you can{' '}
                <strong style={paragraphBold}>track its status</strong> anytime from your{' '}
                <strong style={paragraphBold}>Order History</strong> page in your account settings.
              </span>
            </li>
            <br />
            <li style={listItem}>
              <strong style={listTitle2}>For Digital Services (e.g., Personalized Videos):</strong>
              <span>
                You’ll receive an email once your athlete has recorded your video during their
                signing day window — we’ll include a{' '}
                <strong style={paragraphBold}>download link</strong> to your personalized video in
                that email.
              </span>
            </li>
          </ul>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions, feel free to reach out to us at
            <br />
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>Thank you for being part of the PlayerVault community!</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
