import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
import HeaderComponent from './aq-components/HeaderComponent';
import FooterComponent from './aq-components/FooterComponent';
import HeadComponent from './aq-components/HeadComponent';
import {
  container,
  content,
  main,
  text,
  greeting,
  textBold,
  greetingItalic,
} from './aq-components/styles';

export const WelcomeNewSeller = () => (
  <Html>
    <HeadComponent />
    <Preview>Welcome, Dear Seller!</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>Welcome,</Text>
          <Text style={greetingItalic}>Dear Seller!</Text>
          <br />
          <Text style={text}>
            Thank you for joining The Antique Collector with your new professional account.
          </Text>
          <br />
          <Text style={text}>
            We’re delighted to have you on board and to offer you a dedicated platform where you can
            connect with buyers, network with fellow dealers, and showcase your collection — all
            with no commission fees and complete freedom to manage your own transactions.
          </Text>
          <br />
          <Text style={text}>
            Your privacy is important to us: we don’t collect your data. Instead, we empower you to
            engage directly with your customers and be part of a global community of antique
            enthusiasts.
          </Text>
          <br />
          <Text style={text}>
            As a valued dealer, you’ll also enjoy access to our latest features:
          </Text>
          <br />
          <Text style={text}>
            <span style={textBold}>Live Presentations</span> – Showcase your newest pieces, chat
            with your audience, and sell directly in real time.
          </Text>
          <br />
          <Text style={text}>
            <span style={textBold}>Two Feeds</span> – One for all members, and another exclusively
            for the trade, making it easy to discover and purchase items B2B.
          </Text>
          <br />
          <Text style={text}>In addition, The Antique Collector offers:</Text>
          <Text style={text}>Chat forums for discussion and advice</Text>
          <Text style={text}>An educational blog</Text>
          <Text style={text}>A diary of antique fairs and events</Text>
          <br />
          <Text style={text}>
            Now in our third year, we’re thrilled to continue growing and have many exciting updates
            coming soon.
          </Text>
          <br />
          <Text style={text}>
            And don’t forget — you can upgrade your account anytime to unlock even more
            opportunities.
          </Text>
          <br />
          <Text style={text}>
            We look forward to seeing you on the app and sharing in your success!
          </Text>
          <br />
          <Text style={text}>Warm regards,</Text>
          <Text style={textBold}>The Antique Collector Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default WelcomeNewSeller;
