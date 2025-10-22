import { Body, Container, Html, Preview, Section, Text } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
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
import LinkComponent from './components/LinkComponent';

export const VideoIsAvailable = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Great news — your <strong style={paragraphBold}>PlayerVault video </strong>
            has been completed! 🙌
          </Text>

          <Text style={paragraph}>
            Your athlete has recorded your personalized message as part of their campaign, and it’s
            now ready for you to watch and download.
          </Text>

          <LinkComponent text="Download Your Video" href="" />

          <Text style={paragraph}>
            We hope this video is something you’ll treasure (and maybe even share with friends).
          </Text>

          <hr style={hr} />

          <Text style={paragraph}>
            Thank you for being part of the PlayerVault community and supporting <br /> your
            favorite athletes — your participation helps make these experiences possible.
          </Text>

          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default VideoIsAvailable;
