import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  container,
  content,
  greeting,
  hr,
  list,
  listItem,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';

export const SigningDayReminder = () => (
  <Html>
    <HeadComponent />
    <Preview>Signing day reminder</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            It’s finally here — <strong style={paragraphBold}>Signing Day </strong>
            for your PlayerVault order! 🙌
          </Text>
          <Text style={paragraph}>
            Your athlete is signing all memorabilia and recording any digital experiences purchased
            as part of this campaign. Our team is carefully handling and authenticating every item
            to make sure everything meets our quality standards before shipping.
          </Text>
          <Text style={paragraph}>
            Over the next few days, you’ll receive updates as your order progresses:
          </Text>

          <ul style={list}>
            <li style={listItem}>
              <strong style={paragraphBold}>For autograph orders: </strong> You’ll get a
              notification once your signed item is on its way back to you.
            </li>
            <li style={listItem}>
              {' '}
              <strong style={paragraphBold}>
                For digital experiences (like personalized videos):{' '}
              </strong>{' '}
              You’ll receive an email with your completed video once it’s been recorded and
              reviewed.
            </li>
          </ul>

          <hr style={hr} />

          <Text style={paragraph}>
            We’re just as excited as you are — stay tuned for updates in the coming days!
          </Text>

          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SigningDayReminder;
