import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './aq-components/HeaderComponent';
import FooterComponent from './aq-components/FooterComponent';
import HeadComponent from './aq-components/HeadComponent';
import LinkComponent from './aq-components/LinkComponent';
import {
  container,
  content,
  main,
  text,
  greeting,
  textBold,
  greetingItalic,
} from './aq-components/styles';

export const ResetPassword = () => (
  <Html>
    <HeadComponent />
    <Preview>Reset Your Antique Collector Manager Password</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>
            Hello, <span style={greetingItalic}>John</span>
          </Text>{' '}
          <br />
          <Text style={text}>
            We received a request to reset the password for your account. <br /> Click on the button
            to set a new password:
          </Text>
          <br />
          <LinkComponent text="RESET PASSWORD" href="https://www.the-antiquecollector.com" />
          <br />
          <Text style={textBold}>Password reset link will be expired after 6 hours. </Text>
          <br />
          <Text style={text}>
            If you didn't ask to change your password, don't worry! Your password is still safe and
            you can delete this email.
          </Text>
          <br />
          <Section>
            <Text style={text}>Cheers,</Text>
            <span style={{ height: '8px', display: 'block' }}></span>
            <Text style={textBold}>The Antique Collector</Text>
          </Section>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default ResetPassword;
