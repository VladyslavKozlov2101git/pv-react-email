import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
import HeaderComponent from './aq-components/HeaderComponent';
import FooterComponent from './aq-components/FooterComponent';
import HeadComponent from './aq-components/HeadComponent';
import ItemsGrid from './aq-components/ItemsGrid';

import {
  container,
  content,
  main,
  text,
  greeting,
  textBold,
  greetingItalic,
} from './aq-components/styles';

export const WelcomeToTheAntique = () => (
  <Html>
    <HeadComponent />
    <Preview>Welcome To The Antique</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>Welcome to ,</Text>
          <Text style={greetingItalic}>The Antique Collector</Text>
          <br />
          <Text style={text}>
            The new and exciting global platform where potential buyers can interact with the
            world's premiere antique dealers, and peruse and buy their latest stock.
          </Text>
          <br />

          <Text style={text}>
            Once you have created your account it is important to follow your favorite sellers so
            that you see their latest posts. Engagement is important, so be sure to like items,
            browse shops and message dealers on the app.
          </Text>
          <br />
          <ItemsGrid />

          <br />

          <Text style={text}>
            If you need help finding your way around the app, please go to our <br /> website{' '}
            <Link style={textBold} href="https://www.the-antiquecollector.com">
              www.the-antiquecollector.com
            </Link>
          </Text>

          <br />

          <Text style={text}>
            If you have any further questions, please don't hesitate to reach out to <br /> us at{' '}
            <Link style={textBold} href="mailto:support@the-antiquecollector.com">
              support@the-antiquecollector.com
            </Link>
          </Text>

          <br />
          <Text style={text}>Thank you for joining !</Text>
          <br />
          <Text style={textBold}>The Antique Collector</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default WelcomeToTheAntique;
