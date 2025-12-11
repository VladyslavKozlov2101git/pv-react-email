import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './aq-components/HeaderComponent';
import FooterComponent from './aq-components/FooterComponent';
import HeadComponent from './aq-components/HeadComponent';
import VerCode from './aq-components/VerCode';
import { container, content, main, text, greeting, textBold } from './aq-components/styles';

export const Verification = () => (
  <Html>
    <HeadComponent />
    <Preview>Your Verification Code</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>Welcome</Text>
          <br />
          <Text style={text}>
            Please use the verification code below on The Antique Collector app:
          </Text>

          <VerCode code="5352" />

          <Text style={text}>
            If you didn't request this, please ignore this email or let us know.
          </Text>
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

export default Verification;
