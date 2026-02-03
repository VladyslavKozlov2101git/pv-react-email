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
import FewHelpfulNotes from './components/FewHelpfulNotes';

export const CartAbandonmentTwo = () => (
    <Html>
        <HeadComponent />
        <Preview>A few helpful notes:</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        Just a quick follow-up in case you still wanted to complete your <strong style={paragraphBold}>PlayerVault</strong> order.
                    </Text>
                    <Text style={paragraph}>Athlete campaigns are time-limited, and services have <strong style={paragraphBold}>limited availability</strong> based on signing capacity. Once slots fill or a signing date passes, we cannot reopen them.</Text>
                    <FewHelpfulNotes />
                    <Text style={paragraph}>If this campaign is still on your list, now’s the best time to lock it in.</Text>
                    <LinkComponent href="www.playervault.io" text="Finish your order here" />
                    <hr style={hr} />
                    <Text style={paragraph}>Questions or concerns? Just hit reply — we’re here to help.</Text>
                    <Text style={paragraph}>Thanks,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default CartAbandonmentTwo;