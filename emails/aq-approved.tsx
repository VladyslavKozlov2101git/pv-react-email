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

export const Approved = () => (
  <Html>
    <HeadComponent />
    <Preview>Application Approved</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>
            Hello, <span style={greetingItalic}>John</span>
          </Text>{' '}
          <br />
          <Text style={text}>Your application request has been</Text>
          <br />
          <LinkComponent
            type="approved"
            text="Approved"
            href="https://www.the-antiquecollector.com"
          />{' '}
          <br />
          <br />
          <Text style={textBold}>The Antique Collector</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default Approved;
