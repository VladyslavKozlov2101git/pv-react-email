import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CodeContainer from './components/CodeContainer';
import HeadComponent from './components/HeadComponent';
import { container, content, greeting, main, paragraph, paragraphBold } from './components/styles';

export const PasswordRecovery = () => (
  <Html>
    <HeadComponent />
    <Preview>Password recovery</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            We received a request to reset your <strong style={paragraphBold}>PlayerVault </strong>{' '}
            password.
          </Text>
          <Text style={paragraph}>
            To continue, please enter the 6-digit code below on the password reset page:
          </Text>
          <CodeContainer />
          <Text style={paragraph}>
            If you didn’t request a password reset, please ignore this message — your account will
            remain secure.
          </Text>

          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PasswordRecovery;
