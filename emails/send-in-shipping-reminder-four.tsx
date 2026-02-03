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
import FinalDetails from './components/FinalDetails';

export const SendInShippingReminderFour = () => (
    <Html>
        <HeadComponent />
        <Preview>Final details</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        This is the final reminder regarding your <strong style={paragraphBold}>PlayerVault</strong> autograph order with <strong style={paragraphBold}>[Athlete_Name]</strong>.
                    </Text>
                    <Text style={paragraph}>We have not yet received confirmation that your send-in item has shipped, and the campaign’s send-in window is getting close to closing.</Text>
                    <FinalDetails />
                    <Text style={paragraph}>If you still want your item included in the signing, it must be shipped immediately.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>If you believe your item has already shipped or you need urgent assistance, reply to this email right away so we can review your order before the window closes.</Text>
                    <Text style={paragraph}>Thank you,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default SendInShippingReminderFour;