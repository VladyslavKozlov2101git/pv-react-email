import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CodeContainer from './components/CodeContainer';
import HeadComponent from './components/HeadComponent';
import { container, content, greeting, main, paragraph, paragraphBold } from './components/styles';
import LinkComponent from './components/LinkComponent';

export const MerchandiseHasBeenShipped = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Great news — your <strong style={paragraphBold}>PlayerVault </strong>
            order has been shipped back to you! 🙌
          </Text>
          <Text style={paragraph}>
            Your item was signed by <strong style={paragraphBold}>Keon Coleman</strong> during their
            recent signing day and has been carefully packaged and sent out for delivery.
          </Text>

          <Text style={paragraph}>
            Order Number: <strong style={paragraphBold}>#FC-2024-001234</strong> <br />
            Carrier: <strong style={paragraphBold}>CARRIER_NAME</strong> <br />
            Tracking Number: <strong style={paragraphBold}>1Z999AA1234567890</strong>
          </Text>

          <LinkComponent text="Track Your Shipment" href="/test" />

          <Text style={paragraph}>
            Thank you for being part of the PlayerVault community and helping make these athlete-fan
            connections possible. We hope you enjoy your newly signed memorabilia — it’s truly one
            of a kind!
          </Text>

          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default MerchandiseHasBeenShipped;
