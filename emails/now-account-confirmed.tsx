import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  container,
  content,
  greeting,
  list,
  listItem,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import LinkComponent from './components/LinkComponent';

export const PlayerAccConfirmedNow = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Welcome to <strong style={paragraphBold}>PlayerVault</strong> where athletes and fans
            connect through exclusive memorabilia and one-of-a-kind experiences.
          </Text>

          <Text style={paragraph}>Your account has been successfully created — you can now:</Text>

          <ul style={list}>
            <li style={listItem}>Explore active athlete campaigns</li>
            <li style={listItem}>Purchase personalized memorabilia or experiences</li>
            <li style={listItem}>Track your orders and manage your profile</li>
          </ul>

          <Text style={paragraph}>Click below to start exploring:</Text>

          <LinkComponent href="www.playervault.io" text="Go to PlayerVault" />

          <Text style={paragraph}>We’re thrilled to have you on board.</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PlayerAccConfirmedNow;
