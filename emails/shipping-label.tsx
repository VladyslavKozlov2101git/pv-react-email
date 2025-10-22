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
  list,
  list_wo_top,
  listItem,
  listTitle,
  main,
  paragraph,
  paragraphBold,
} from './components/styles';

export const ShippingLabel = () => (
  <Html>
    <HeadComponent />
    <Preview>Confirmation code</Preview>
    <Body style={main}>
      <Container style={container}>
        <HeaderComponent />
        <Section style={content}>
          <Text style={greeting}>👋 HI John,</Text>
          <Text style={paragraph}>
            Great news — your <strong style={paragraphBold}>PlayerVault </strong>
            is ready for the next step!
          </Text>
          <Text style={paragraph}>
            Attached below is your shipping label for your selected carrier: <br />{' '}
            <strong style={paragraphBold}>(CARRIER_NAME)</strong> .
          </Text>
          <Text style={paragraph}>
            Please follow the instructions below to make sure your item arrives in time for your
            athlete’s signing day.
          </Text>
          <hr style={hr} />
          <strong style={boldSubTitle}>WHAT DO NEXT:</strong>
          <br /> <br />
          <strong style={listTitle}>1. Prepare your item:</strong>
          <ul style={list_wo_top}>
            <li style={listItem}>
              Package the memorabilia item that you want signed securely OR simply drop it off at
              any of your chosen carriers locations and they will package it up for you.
            </li>{' '}
            <li style={listItem}>Include any protective wrapping or notes if needed.</li>
          </ul>{' '}
          <strong style={listTitle}>2. Ship your item:</strong>
          <ul style={list_wo_top}>
            <li style={listItem}>
              Use the attached [shipping label or QR code] to drop off your package at any{' '}
              CARRIER_NAME location.
            </li>{' '}
            <li style={listItem}>
              Make sure to drop it off by CUTOFF_DATE so it arrives in time for the signing day on
              SIGNING_DAY_DATE .
            </li>
          </ul>
          <strong style={listTitle}>3. Get notified when it’s on its way back:</strong>
          <ul style={list_wo_top}>
            <li style={listItem}>
              Once dropped off, you can track your item’s status anytime in your Order History
              within your PlayerVault account settings.
            </li>
          </ul>
          <strong style={listTitle}>4. Get notified when it’s on its way back:</strong>
          <ul style={list_wo_top}>
            <li style={listItem}>
              You’ll receive an email update once your signed item is on its way back to you.
            </li>
          </ul>
          <hr style={hr} />
          <Text style={paragraph}>
            If you have any questions, feel free to contact us at <br />{' '}
            <Link style={paragraphBold} href="mailto:support@playervault.io">
              support@playervault.io
            </Link>
          </Text>
          <Text style={paragraph}>
            Thank you for being part of PlayerVault — we can’t wait for you to receive your signed
            item!
          </Text>
          <Text style={paragraphBold}>The PlayerVault Team</Text>
        </Section>
        <FooterComponent />
      </Container>
    </Body>
  </Html>
);

export default ShippingLabel;
