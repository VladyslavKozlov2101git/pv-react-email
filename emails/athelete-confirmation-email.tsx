import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CodeContainer from './components/CodeContainer';
import HeadComponent from './components/HeadComponent';
import {
  container,
  content,
  greeting,
  hr,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';

export const AthletePlayerVaultConfirmationEmail = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Thanks for starting your{' '}
            <strong style={paragraphBold}> PlayerVault Athlete Application </strong> - where
            athletes like you connect directly with fans through exclusive signings, memorabilia,
            and personalized experiences.
          </Text>
          <Text style={paragraph}>
            To continue your application, please verify your email by entering the <br /> 6-digit
            code below:
          </Text>
          <CodeContainer />
          <Text style={paragraph}>
            This helps us confirm your identity and secure your account.
          </Text>
          <hr style={hr} />
          <Text style={paragraph}>
            If you didn’t begin an application with PlayerVault, you can safely ignore this email.
          </Text>{' '}
          <Text style={paragraph}>
            Welcome to PlayerVault — we’re excited to have you join the team.
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default AthletePlayerVaultConfirmationEmail;
