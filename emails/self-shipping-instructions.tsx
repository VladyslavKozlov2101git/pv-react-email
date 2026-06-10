import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  container,
  content,
  greeting,
  list,
  listItem,
  main,
  boldSubTitle,
  paragraph2,
  paragraphBold2,
  listTitle,
  hr,
} from './components/styles';
import ShipItem from './components/ShipItem';
import Note from './components/Note';

export const SelfShippingInstructions = () => (
  <Html>
    <HeadComponent />
    <Preview>Self-Shipping Instructions</Preview>
    <Body style={{ ...main }}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={{ ...content, padding: '40px 36px' }}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph2}>
            Great news — your <strong style={paragraphBold2}>PlayerVault autograph order</strong> is
            ready for the next step!
          </Text>
          <Text style={{ ...paragraph2, marginBottom: '24px' }}>
            Since you chose the “self-ship” option, you will need to{' '}
            <strong style={paragraphBold2}>ship us your item by</strong> the signing deadline, which
            is <strong style={paragraphBold2}>Jul 1, 2026</strong>. Please see below the address to
            send us your item. Please follow the instructions below carefully to ensure your item
            arrives safely and on time for your athlete's signing day.
          </Text>

          <ShipItem />
          <Note />
          <hr style={{ ...hr, marginBottom: '24px' }} />
          <Text style={paragraph2}>
            <strong style={boldSubTitle}>What to Do Next:</strong>
          </Text>
          <Text style={{ ...paragraph2, marginBottom: '0px' }}>
            <strong style={paragraphBold2}>1. Prepare your item:</strong>
          </Text>
          <ul style={{ ...list, margin: '4px 0' }}>
            <li style={listItem}>
              Review our: <strong style={listTitle}>How To Ship</strong> page for detailed
              instructions
            </li>
            <li style={listItem}>Package your item securely to avoid damage while en route</li>
            <li style={listItem}>
              Add protective wrapping as needed (bubble wrap, packing paper, etc.)
            </li>
            <li style={listItem}>Include any notes only if instructed</li>
          </ul>
          <Text style={{ ...paragraph2, marginBottom: '0px', marginTop: '16px' }}>
            <strong style={paragraphBold2}>2. Get notified when it's on its way back:</strong>
          </Text>
          <ul style={{ ...list, margin: '4px 0' }}>
            <li style={listItem}>
              You'll receive an email update as soon as your signed item is on its way back to you.
            </li>
          </ul>

          <hr style={{ ...hr, margin: '16px 0' }} />
          <Text style={paragraph2}>
            If you have any questions or need help with packaging, feel free to reach out at{' '}
            <a
              href="mailto:support@playervault.io"
              style={{ ...listTitle, textDecoration: 'none', fontWeight: 500 }}>
              support@playervault.io
            </a>
          </Text>
          <Text style={paragraph2}>
            Thank you for being part of PlayerVault — we can’t wait for you to receive your signed
            item!
          </Text>
          <Text style={paragraphBold2}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SelfShippingInstructions;
