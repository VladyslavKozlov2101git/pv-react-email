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
  list_wo_top,
  listItem,
  listTitle,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';

export const SigningDay = () => (
  <Html>
    <HeadComponent />
    <Preview>Signing day reminder</Preview>

    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Congratulations on completing your PlayerVault Signing Day! 🙌
          </Text>
          <Text style={paragraph}>
            Your fans are going to love their signed memorabilia, and we appreciate all the effort
            you put in to make it a success.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>What To Expect Next:</strong>
          <br /> <br />
          <strong style={listTitle}>1. Quality Review & Authentication:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              Our team will now receive your signed items, verify their quality, and confirm that
              all orders were fulfilled correctly. This process ensures a consistent and
              professional fan experience.
            </li>
          </ul>
          <strong style={listTitle}>2. Payment Timeline (Net 30):</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              Once all items have passed our quality-assurance review, your payment will be
              processed within 30 days (Net 30) of your completed signing. <br /> You’ll receive a
              notification by email once your payment has been issued.
            </li>
          </ul>
          <strong style={listTitle}>3. Verify Your Bank Information:</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              To avoid any delays, please make sure your bank account information in your Athlete
              Portal is accurate and up-to-date.
            </li>
          </ul>
          <strong style={listTitle}>4. Complete Your W-9 (Required):</strong>
          <ul style={list_wo_disc}>
            <li style={listItem}>
              If you haven’t already done so, please complete your W-9 tax form. This is required by
              the IRS for independent contractors earning over $600.
            </li>
          </ul>
          <Text style={paragraph}>
            Your payment cannot be processed until a valid W-9 is on file.
          </Text>
          <Text style={paragraph}>
            You should have received your W9 email when you published this campaign. If you cannot
            find it, reach out to us at{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>{' '}
            and we will reissue one.
          </Text>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions about your campaign, payment status, or next
            <br /> steps, reach out anytime at{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Thank you again for being part of PlayerVault — your participation helps create
            incredible fan experiences, and we’re proud to have you on the platform.
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default SigningDay;
