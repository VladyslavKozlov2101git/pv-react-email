import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  boldSubTitle,
  boldSubTitle2,
  container,
  content,
  greeting,
  hr,
  list_wo_top,
  listItem,
  listTitle,
  listTitle2,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import LinkComponent from './components/LinkComponent';

export const SigningDay = () => (
  <Html>
    <HeadComponent />
    <Preview>Signing day reminder</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>It’s here — your PlayerVault Signing Day! 🎉</Text>
          <Text style={paragraph}>
            Fans are eagerly waiting for their signed memorabilia and personalized experiences, and
            we’re thrilled to help make it all happen smoothly today. Below is a quick refresher to
            help you stay organized and complete all orders successfully.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>Signing Day Checklist:</strong>
          <br /> <br />
          <strong style={listTitle}>✅ Access Your Orders:</strong>
          <Text style={paragraph}>Log in to your Athlete Portal to get started:</Text>
          <LinkComponent text="Access Athlete Portal" href="http://www.playervault.io/" />
          <ul style={list_wo_top}>
            <li style={listItem}>Click on the Campaigns tab</li>
            <li style={listItem}>Select your active campaign and click “View Details”</li>
            <li style={listItem}>Follow the step-by-step instructions listed for each fan order</li>
          </ul>
          <strong style={listTitle2}>🔖 Match Orders to Items:</strong>
          <Text style={paragraph}>
            Each item has a sticker with an Order # — this matches what you’ll see in your portal
            and helps ensure each fan’s request is completed correctly.
          </Text>
          <strong style={listTitle2}>🖊 Follow Fan Instructions Carefully:</strong>
          <Text style={paragraph}>
            Please pay close attention to each fan’s personalization details (signature placement,
            pen color, or message). Following these exactly helps deliver the best fan experience.
          </Text>
          <strong style={listTitle2}>✔️ Track Your Progress:</strong>
          <Text style={paragraph}>
            As you complete each item, mark it as Complete in your portal. This keeps everything
            organized and ensures no order is missed.
          </Text>
          <strong style={listTitle2}>🖋 Use the Provided Pens:</strong>
          <Text style={paragraph}>
            Use the specific pen(s) included in your shipment for each item — these were selected to
            ensure quality and consistency across materials.
          </Text>
          <strong style={listTitle2}>📦 After You’re Done:</strong>
          <Text style={paragraph}>When you’ve finished all signings:</Text>
          <ul style={list_wo_top}>
            <li style={listItem}>Repack everything in the original boxes</li>
            <li style={listItem}>Use the provided return labels or QR codes</li>
            <li style={listItem}>
              Our team will schedule a pickup from a carrier to collect all signed items
            </li>
          </ul>
          <hr style={hr} />
          <strong style={boldSubTitle2}>Need Help?</strong>
          <Text style={paragraph}>
            If you run into any issues or have questions during your signing session,
            <br /> please contact us immediately at{' '}
            <strong style={paragraphBold}>PHONE_NUMBER</strong> or{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Thank you for being part of PlayerVault — today’s the day your fans have been waiting
            for. Let’s make it a great one!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SigningDay;
