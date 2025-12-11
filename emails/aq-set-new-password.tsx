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

export const SetNewPassword = () => (
  <Html>
    <HeadComponent />
    <Preview>Set Your Antique Collector Manager Password</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>
            Dear, <span style={greetingItalic}>John</span>
          </Text>{' '}
          <br />
          <Text style={text}>
            Thank you for applying to manage this account. <br /> Please set your password by
            clicking on the button below.
          </Text>
          <br />
          <LinkComponent text="SET PASSWORD" href="https://www.the-antiquecollector.com" />
          <br />
          <Text style={textBold}>Password link will expire after 6 hours.</Text>
          <br />
          <Section>
            <Text style={text}>Thank you,</Text>
            <span style={{ height: '8px', display: 'block' }}></span>
            <Text style={textBold}>The Antique Collector</Text>
          </Section>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SetNewPassword;
