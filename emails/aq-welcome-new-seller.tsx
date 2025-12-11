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
    <Preview>Welcome, Dear New Seller</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>Welcome,</Text>
          <Text style={greetingItalic}>Dear New Seller</Text>
          <br />
          <Text style={text}>
            Thank you for signing up for a professional account on the Antique Collector.
          </Text>
          <br />
          <Text style={text}>
            We are pleased to offer you a custom platform to connect with buyers, meet with other
            dealers, showcase your items and to benefit from no commission off site transactions. We
            don't collect your data, we give you freedom to transact with your customers as you
            desire as well as access to a worldwide community of antique enthusiasts. In a short
            period of time, we have expanded and improved our app, promising you an even better
            experience.
          </Text>
          <br />
          <Text style={text}>
            We are offering early adopters free membership as well as features in our app
            promotional advertising on Instagram, in our weekly email updates and in our ads printed
            in traditional publications such as the <span style={textBold}>Antiques Gazette</span>,{' '}
            <span style={textBold}>the Magazine Antiques</span> and{' '}
            <span style={textBold}>the World of Interiors</span>.
          </Text>
          <br />
          <Text style={text}>
            In exchange, we ask you to posts 3 times a week with new and exciting items and to
            actively engage on the app by following, liking and commenting. It is important to
            follow other sellers so that you see their latest posts and to encourage your customers
            to join you on the app. Referrals of other dealers is most appreciated, the more your
            refer others to the app, the more you will be featured in our advertising.
          </Text>
          <br />
          <Text style={text}>
            We are a new community created as a result of dissatisfaction with other platforms and
            spaces.
          </Text>
          <br />
          <Text style={text}>
            We're growing everyday with almost 200 sellers and nearly 2000 users in just over a few
            short months. We look forward to seeing you on the app!
          </Text>

          <br />
          <Text style={textBold}>The Antique Collector</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default WelcomeNewSeller;
