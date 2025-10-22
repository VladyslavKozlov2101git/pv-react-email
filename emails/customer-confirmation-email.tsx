import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CodeContainer from './components/CodeContainer';
import HeadComponent from './components/HeadComponent';
import { container, content, greeting, main, paragraph, paragraphBold } from './components/styles';

export const PlayerVaultConfirmationEmail = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Thanks for joining <strong style={paragraphBold}>PlayerVault</strong>, where athletes
            and fans connect through exclusive memorabilia and experiences.
          </Text>
          <Text style={paragraph}>
            To complete your registration, please enter the 6-digit code below to verify your email
            address:
          </Text>
          <CodeContainer />
          <Text style={paragraph}>
            If you didn&apos;t create an account with PlayerVault, please ignore this message.
          </Text>
          <Text style={paragraph}>Welcome aboard,</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PlayerVaultConfirmationEmail;
