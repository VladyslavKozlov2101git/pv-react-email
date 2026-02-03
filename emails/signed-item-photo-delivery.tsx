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

export const SignedItemPhotoDelivery = () => (
    <Html>
        <HeadComponent />
        <Preview>Your signed item is ready!</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        Great news — your <strong style={paragraphBold}>signed item photo</strong> from your recent <strong style={paragraphBold}>PlayerVault</strong> order is ready.
                    </Text>
                    <Text style={paragraph}>During the signing, <strong style={paragraphBold}>[Athlete Name]</strong> uploaded a photo with your signed item specifically for your order, and we wanted to share it with you right away.</Text>
                    <LinkComponent href="www.playervault.io" text="Download Your Photo" />
                    <Text style={paragraph}>This photo is associated with:</Text>
                    <ul style={list}>
                        <li style={listItem}>Athlete: <strong style={listTitle}>[Athlete_Name]</strong></li>
                        <li style={listItem}>Order: <strong style={listTitle}>[Order_Number]</strong></li>
                    </ul>
                    <Text style={paragraph}>You can also access this photo anytime by visiting your Order History in your PlayerVault account — it will remain available there for future reference or download.</Text>
                    <Text style={paragraph}>Your signed item will continue through our normal fulfillment process, including quality assurance, and will be shipped to you after signing is fully completed.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>If you have any questions or need help accessing your photo, just reply to this email — we’re happy to help.</Text>
                    <Text style={paragraph}>Thanks for being part of PlayerVault,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default SignedItemPhotoDelivery;