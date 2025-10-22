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

export const PaymentIsProcessed = () => (
  <Html>
    <HeadComponent />
    <Preview>Application submitted</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Congratulations — your{' '}
            <strong style={paragraphBold}>PlayerVault Athlete Application</strong> has been
            approved! 🙌
          </Text>
          <Text style={paragraph}>
            You’re now part of the PlayerVault community — where athletes connect directly with fans
            through exclusive memorabilia and one-of-a-kind experiences.
          </Text>{' '}
          <Text style={paragraph}>
            You can now sign in and access your Athlete Portal to start setting up your first
            campaign:
          </Text>
          <LinkComponent text="Access Your Portal" href="http://www.playervault.io/" />
          <hr style={hr} />
          <strong style={boldSubTitle}>What Happens Next:</strong>
          <br />
          <br />
          <strong style={listTitle}>1. Launch Your First Campaign:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              Log into your Athlete Portal to create, customize, and publish your first campaign —
              then start selling unique experiences directly to your fans.
            </li>
          </ul>
          <strong style={listTitle}>2. W-9 Form (Required for Payment):</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              You’ll receive a separate email shortly requesting you to complete your W-9 form.
              Please note that this is required by the IRS for independent contractors earning over
              $600. You must complete this form before receiving payments for your sales on
              PlayerVault.
            </li>
          </ul>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions or need assistance, please reach out to us at
            <br />
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            We’re thrilled to have you on board and can’t wait to help you bring your fan
            experiences to life.
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default PaymentIsProcessed;
