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
import KeyDetails from './components/KeyDetails';

export const SendInShippingReminderOne = () => (
    <Html>
        <HeadComponent />
        <Preview>Key details</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        Just a quick reminder regarding your <strong style={paragraphBold}>PlayerVault</strong> autograph order with <strong style={paragraphBold}>[Athlete_Name]</strong>.
                    </Text>
                    <Text style={paragraph}>You chose the send-in option, and we haven’t seen your item shipped yet. To make sure your item is included in the signing, please send it in as soon as possible using the prepaid shipping label we provided.</Text>
                    <KeyDetails />
                    <Text style={paragraph}>If you’ve already shipped your item, feel free to ignore this message — tracking updates can take a little time to register.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>If you need the label resent or have questions, just reply to this email and we’ll help right away.</Text>
                    <Text style={paragraph}>Thanks,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default SendInShippingReminderOne;