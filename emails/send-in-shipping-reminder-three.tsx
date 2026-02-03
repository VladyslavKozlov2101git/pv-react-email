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
import PleaseNote from './components/PleaseNote';

export const SendInShippingReminderThree = () => (
    <Html>
        <HeadComponent />
        <Preview>Please note</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        This is an important reminder regarding your <strong style={paragraphBold}>PlayerVault</strong> autograph order with <strong style={paragraphBold}>[Athlete_Name]</strong>.
                    </Text>
                    <Text style={paragraph}>We have not yet received confirmation that your send-in item has shipped, and the campaign’s send-in window is getting close to closing.</Text>
                    <PleaseNote />
                    <Text style={paragraph}>To ensure your item is signed, please ship it immediately using the prepaid label provided.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>If something is preventing you from shipping, let us know — we may be able to help, but timing is critical.</Text>
                    <Text style={paragraph}>Best,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default SendInShippingReminderThree;