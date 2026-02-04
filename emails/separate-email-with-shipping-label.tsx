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
    boldSubTitle,
    paragraph,
    paragraphBold,
    listTitle,
    hr,
} from './components/styles';
import LinkComponent from './components/LinkComponent';
import BoxType from './components/BoxType';
import PreferNotToPack from './components/PreferNotToPack';

export const SeparateEmailWithShippingLabel = () => (
    <Html>
        <HeadComponent />
        <Preview>EQUIRED: Use This Box Type (Very Important)</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        Great news — your <strong style={paragraphBold}>PlayerVault autograph order</strong> is ready for the next step!
                    </Text>
                    <Text style={paragraph}>Attached below is your <strong style={paragraphBold}>shipping label</strong> for your selected carrier: <strong style={paragraphBold}>[Carrier_Name]</strong>.</Text>
                    <Text style={paragraph}>Please follow the instructions below carefully to ensure your item arrives safely and on time for your athlete’s signing day.</Text>
                    <BoxType />
                    <hr style={hr} />
                    <Text style={paragraph}><strong style={boldSubTitle}>What to Do Next:</strong></Text>
                    <Text style={paragraph}><strong style={paragraphBold}>1. Prepare your item:</strong></Text>
                    <ul style={list}>
                        <li style={listItem}>Review our: <strong style={listTitle}>How To Ship</strong> page for detailed instructions</li>
                        <li style={listItem}>Place your item securely in the <strong style={listTitle}> required box type listed above</strong></li>
                        <li style={listItem}>Add protective wrapping as needed (bubble wrap, packing paper, etc.)</li>
                        <li style={listItem}>Include any notes only if instructed</li>
                    </ul>
                    <PreferNotToPack />
                    <Text style={paragraph}><strong style={paragraphBold}>2. Ship your item:</strong></Text>
                    <ul style={list}>
                        <li style={listItem}>Use the attached <strong style={listTitle}>shipping label</strong></li>
                        <li style={listItem}>Drop off your package at any <strong style={listTitle}>[Carrier_Name]</strong> location</li>
                        <li style={listItem}>Ship by: <strong style={listTitle}>[Cutoff_Date]</strong> <br /> (to ensure arrival before signing day on <strong style={paragraphBold}>[Signing_Day_Date]</strong></li>
                    </ul>
                    <Text style={paragraph}><strong style={paragraphBold}>3. Track your order:</strong></Text>
                    <ul style={list}>
                        <li style={listItem}>Once dropped off, you can track your shipment anytime in your <strong style={listTitle}>Order History</strong> within your PlayerVault account settings.</li>
                    </ul>
                    <Text style={paragraph}><strong style={paragraphBold}>4. Get notified when it’s on its way back:</strong></Text>
                    <ul style={list}>
                        <li style={listItem}>You’ll receive an email update as soon as your signed item is on its way back to you.</li>
                    </ul>
                    <hr style={hr} />
                    <Text style={paragraph}>If you have any questions or need help with packaging, feel free to reach out at <strong style={listTitle}>support@playervault.io</strong></Text>
                    <Text style={paragraph}>Thank you for being part of PlayerVault — we can’t wait for you to receive your signed item!</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default SeparateEmailWithShippingLabel;