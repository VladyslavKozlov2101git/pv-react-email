import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CodeContainer from './components/CodeContainer';
import HeadComponent from './components/HeadComponent';
import { container, content, greeting, main, paragraph, paragraphBold } from './components/styles';
import LinkComponent from './components/LinkComponent';

export const NewPasswordConfirmed = () => (
  <Html>
    <HeadComponent />
    <Preview>New password confirmed</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            This is a confirmation that your <strong style={paragraphBold}>PlayerVault</strong>{' '}
            password was successfully updated.
          </Text>
          <Text style={paragraph}>If you made this change, no further action is needed.</Text>{' '}
          <Text style={paragraph}>
            If you didn’t request a password reset, please contact our support team immediately to
            secure your account.
          </Text>
          <LinkComponent
            type="secondary"
            href="mailto:support@playervault.io"
            text="Contact Support"
          />
          <Text style={paragraph}>Thank you for helping keep your account secure.</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default NewPasswordConfirmed;
