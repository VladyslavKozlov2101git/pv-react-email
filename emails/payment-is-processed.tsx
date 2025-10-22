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
import TotalComponent from './components/TotalComponent';
import OrderSummary from './components/OrderSummary';

export const PaymentIsProcessed = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
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
          <strong style={boldSubTitle}>What Happens Next:</strong>
          <br />
          <br />
          <ul style={list_wo_top}>
            <li style={listItem}>
              <strong style={listTitle}>For Autograph Orders:</strong>
              <br />
              You’ll receive a <strong style={paragraphBold}>separate email shortly</strong> with
              your shipping label and/or instructions for how to send us your memorabilia item.
              <br />
              Once your item has been sent, you can{' '}
              <strong style={paragraphBold}>track its status</strong> anytime from your Order
              History page in your account settings.
            </li>
            <li style={listItem}>
              <strong style={listTitle}>For Digital Services (e.g., Personalized Videos):</strong>
              <br />
              You’ll receive an email once your athlete has recorded your video during their signing
              day window — we’ll include a <strong style={paragraphBold}>download link</strong> to
              your personalized video in that email.
            </li>
          </ul>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions, feel free to contact us at
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
