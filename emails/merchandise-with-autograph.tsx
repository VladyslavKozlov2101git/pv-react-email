import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
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
    <Preview>Merchandise with autograph has arrived</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            It’s here — your <strong style={paragraphBold}>PlayerVault </strong> order has
            officially arrived! 🎉
          </Text>
          <Text style={paragraph}>
            Your item, signed by <strong style={paragraphBold}>Keon Coleman</strong>, has completed
            its journey and is now in your hands. We hope it brings you as much excitement as the
            athlete had signing it.
          </Text>

          <LinkComponent href="/" text="Share Your Feedback" />

          <hr style={hr} />

          <Text style={paragraph}>
            Thank you for being part of the PlayerVault community and helping create unforgettable
            connections between athletes and fans.
          </Text>

          <Text style={paragraph}>
            We’d love to see your reaction — share your signed item on social and tag
            <strong style={paragraphBold}> @PlayerVault.io</strong> or use{' '}
            <strong style={paragraphBold}>#MyPlayerVaultMoment</strong> for a chance to be featured!
          </Text>

          <Text style={paragraph}>Enjoy your new collectible — it’s truly one of a kind.</Text>

          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default MechandiseWithAutograph;
