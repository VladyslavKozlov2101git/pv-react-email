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
import QuickReminders from './components/QuickReminders';

export const CartAbandonmentOne = () => (
    <Html>
        <HeadComponent />
        <Preview>Quick reminders before you finish:</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        It looks like you started checking out on <strong style={paragraphBold}>PlayerVault</strong> but didn’t quite finish your order — no worries, this happens all the time.
                    </Text>
                    <Text style={paragraph}>Your checkout session may have expired, but your spot isn’t gone yet. You can jump right back in and complete your purchase in just a few clicks.</Text>
                    <QuickReminders />
                    <LinkComponent href="www.playervault.io" text="Resume your checkout here" />
                    <hr style={hr} />
                    <Text style={paragraph}>If you run into any issues or have questions, just reply to this email — we’re happy to help.</Text>
                    <Text style={paragraph}>Best,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default CartAbandonmentOne;