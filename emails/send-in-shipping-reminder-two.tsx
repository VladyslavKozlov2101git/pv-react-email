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
import ImportantReminds from './components/ImportantReminds';

export const SendInShippingReminderTwo = () => (
    <Html>
        <HeadComponent />
        <Preview> Important reminders</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        We’re following up again regarding your <strong style={paragraphBold}>PlayerVault</strong> autograph order with <strong style={paragraphBold}>[Athlete_Name]</strong>.
                    </Text>
                    <Text style={paragraph}>At this point, we still haven’t seen your send-in item shipped, and the signing date is approaching.</Text>
                    <ImportantReminds />
                    <Text style={paragraph}>Please ship your item as soon as possible to avoid missing the signing.</Text>
                    <Text style={paragraph}><strong style={paragraphBold}>Also note:</strong> prepaid shipping labels expire after 30 days, so we recommend shipping promptly to avoid any issues.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>If you need help locating your label or have questions about what to send, just reply to this email.</Text>
                    <Text style={paragraph}>Best,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default SendInShippingReminderTwo;