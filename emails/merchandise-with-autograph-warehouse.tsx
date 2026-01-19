import { Body, Container, Html, Link, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  container,
  content,
  greeting,
  main,
  paragraph,
  paragraphBold,
  hr,
} from './components/styles';
import LinkComponent from './components/LinkComponent';

export const MechandiseWithAutograph = () => (
  <Html>
    <HeadComponent />
    <Preview>Merchandise with autograph has arrived at warehouse</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Great news — your item has arrived safely at the{' '}
            <strong style={paragraphBold}>PlayerVault </strong> vault and is now securely stored in
            our warehouse.
          </Text>
          <Text style={{ ...paragraph }}>
            Our team has checked it in and will keep it protected until it’s sent to the athlete for
            signing. You don’t need to do anything at this time — we’ll notify you again when your
            item moves to the next step in the process.
          </Text>

          <hr style={hr} />

          <Text style={paragraph}>
            If you have any questions in the meantime, feel free to reach out to us at
            <br /> 
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>

          <Text style={paragraph}>Thanks for trusting PlayerVault with something special,</Text>

          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default MechandiseWithAutograph;
