import { Body, Container, Html, Link, Preview, Section, Text } from '@react-email/components';
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

export const ManagerIsInvitedToAthletAcc = () => (
    <Html>
        <HeadComponent />
        <Preview>New invite</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        <strong style={paragraphBold}>[Athlete Name]</strong> has invited you to join their PlayerVault account to help manage campaigns and account activity.
                    </Text>
                    <LinkComponent href="www.playervault.io" text="Accept invitation & Continue" />
                    <hr style={hr} />
                    <Text style={paragraph}>
                        If you have any questions or need assistance, feel free to reach out to us at
                        <br /> at{' '}
                        <Link style={paragraphBold} href="mailto:support@playervault.io">
                            support@playervault.io
                        </Link>
                    </Text>
                    <Text style={paragraph}>Welcome to PlayerVault,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default ManagerIsInvitedToAthletAcc;
