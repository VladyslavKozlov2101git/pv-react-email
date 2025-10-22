import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import {
  boldSubTitle,
  container,
  content,
  greeting,
  hr,
  list_wo_disc,
  listItem,
  listTitle,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';
import Reminder from './components/Reminder';
import LinkComponent from './components/LinkComponent';
import ComplianceReminder from './components/ComplianceReminder';

export const SigningDay = () => (
  <Html>
    <HeadComponent />
    <Preview>Campaign is approved and published</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Great news — your PlayerVault campaign has been approved and is now live on the
            marketplace! 🙌
          </Text>
          <Text style={paragraph}>
            Fans can now discover, purchase, and participate in your exclusive offerings — whether
            it’s signed memorabilia, personalized videos, or <br /> one-of-a-kind experiences.
          </Text>{' '}
          <Text style={paragraph}>
            Attached, you’ll find a copy of your Campaign Agreement for your records.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>Next Steps:</strong>
          <br /> <br />
          <strong style={listTitle}>1. View Your Campaign in the Portal:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              Manage your campaign details, track sales, and view performance insights anytime from
              your Athlete Portal:
            </li>
          </ul>
          <LinkComponent
            text="View Campaign in Portal"
            type="secondary"
            href="https://playervault.4-com.pro/categories"
          />
          <strong style={listTitle}>2. Share Your Campaign to Get Early Traction:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              Spread the word and drive engagement by sharing your campaign link on your social
              channels. Early visibility helps your campaign gain momentum!
            </li>
          </ul>
          <LinkComponent text="Share Your Campaign" href="/" />
          <Text style={paragraph}>
            Include this link in your bio, stories, or posts — the more fans see it, the more sales
            you’ll generate early on.
          </Text>
          <hr style={hr} />
          <ComplianceReminder />
          <Text style={paragraph}>
            We’re thrilled to have your campaign live and can’t wait to see fans engage with your
            offerings.
          </Text>
          <Text style={paragraph}>
            If you have any questions or need assistance, don’t hesitate to reach out to
            <br /> us at{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>Congrats on your campaign launch!</Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SigningDay;
