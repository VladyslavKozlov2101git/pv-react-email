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
import LinkComponent from './components/LinkComponent';

export const ApplicationApproved = () => (
  <Html>
    <HeadComponent />
    <Preview>Application submitted</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Thank you for submitting your{' '}
            <strong style={paragraphBold}>PlayerVault Athlete Application</strong>! We’re thrilled
            that you’re taking the next step toward connecting directly with fans through exclusive
            signings, memorabilia, and personalized experiences.
          </Text>

          <Text style={paragraph}>
            Attached, you’ll find a copy of your Player Agreement for your records.
          </Text>

          <hr style={hr} />

          <strong style={boldSubTitle}>What Happens Next:</strong>
          <br />
          <br />
          <strong style={listTitle}>1.Application Review: </strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>Our team will review your submission within 1–2 business days.</li>
          </ul>

          <strong style={listTitle}>2. Identity Confirmation:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              A PlayerVault representative will reach out to you (or your authorized rep) to confirm
              your identity and complete the verification process.
            </li>
          </ul>
          <strong style={listTitle}>3. Get Approved & Start Selling:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              Once confirmed, your account will be approved and you’ll be ready to publish your
              first campaign and start selling experiences directly to your fans!
            </li>
          </ul>

          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions in the meantime, feel free to reach out to us at
            <br />
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Welcome to PlayerVault — we can’t wait to help you bring your fan experiences to life.
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default ApplicationApproved;
