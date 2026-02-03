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

export const PostSignupFollowUp = () => (
    <Html>
        <HeadComponent />
        <Preview>Thanks for creating a PlayerVault account!</Preview>
        <Body style={main}>
            <Container style={container}>
                <HeaderComponent />
                <Section style={content}>
                    <Text style={greeting}>👋 HI John,</Text>
                    <Text style={paragraph}>
                        Thanks for creating a <strong style={paragraphBold}>PlayerVault</strong> account! We wanted to check in and quickly walk you through how everything works so you’re ready to jump in when the right athlete or campaign catches your eye.
                    </Text>

                    <hr style={hr} />
                    <strong style={boldSubTitle}>What is PlayerVault?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>PlayerVault is a platform that allows fans to buy custom experiences directly from their favorite athletes — from signed memorabilia to personalized video shoutouts.</Text>

                    <hr style={hr} />
                    <strong style={boldSubTitle}>What services does PlayerVault include?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>PlayerVault currently offers:</Text>
                    <ul style={list}>
                        <li style={listTitle}>Autographs</li>
                        <br />
                        <li style={listTitle}>Custom video shoutouts</li>
                    </ul>
                    <br />
                    <Text style={paragraph}>Each athlete chooses which services they want to offer, so not every campaign will look the same. Be sure to check individual athlete campaigns to see what’s available for that specific signing.</Text>
                    <hr style={hr} />
                    <strong style={boldSubTitle}>How does PlayerVault work?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>Simplicity is one of our core pillars. Our goal is to make it as easy as possible to get:</Text>
                    <ul style={list}>
                        <li style={listItem}>A custom signature on virtually any item, or</li>
                        <li style={listItem}>A personalized shoutout video directly from an athlete</li>
                    </ul>
                    <Text style={paragraph}>For autographs, you can choose between:</Text>
                    <ul style={list}>
                        <li style={listItem}><strong style={listTitle}>Standard autographs</strong>, or</li>
                        <li style={listItem}><strong style={listTitle}>Personalized autographs</strong>, which allow you to request a custom inscription (for example: “To Mike” or “Go Noles!”)</li>
                    </ul>
                    <Text style={paragraph}>You’ll also choose how the item is handled:</Text>
                    <ul style={list}>
                        <li style={listItem}><strong style={listTitle}>Send in your own item</strong> — we’ll email you a prepaid shipping label after checkout</li>
                        <li style={listItem}><strong style={listTitle}>Buy an item from us</strong> — we’ll take care of everything from start to finish</li>
                    </ul>
                    <hr style={hr} />
                    <strong style={boldSubTitle}>What do I do after I check out?</strong>
                    <br />
                    <ul style={list}>
                        <li style={listItem}><strong style={listTitle}>If you purchased an item from us:</strong> Nothing at all — just sit back and wait for your signed item to arrive after signing day.</li>
                        <li style={listItem}><strong style={listTitle}>If you chose the send-in option:</strong> Use the prepaid shipping label we email you to send us your item. We’ll safely store it in our warehouse until signing day.</li>
                    </ul>
                    <hr style={hr} />
                    <strong style={boldSubTitle}>What do I do after I check out?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>Signing day is the date selected by the athlete to fulfill all orders for their campaign. Athletes are extremely busy, so they choose a date that works for their schedule. When signing day arrives, we coordinate everything on our end to get orders completed.</Text>
                    <Text style={paragraph}>After signing day, each item goes through quality assurance before being shipped back to you.</Text>
                    <hr style={hr} />
                    <strong style={boldSubTitle}>Can I insure my items?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>Yes. All items are automatically insured up to <strong style={listTitle}>$100</strong> in value. You can purchase additional insurance coverage during checkout if needed.</Text>
                    <hr style={hr} />
                    <strong style={boldSubTitle}>Can I authenticate the signatures?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>Absolutely. We partner with <strong style={listTitle}>James Spence Authentication (JSA)</strong>, one of the most trusted authenticators in the memorabilia space. Authentication can be added as an optional add-on to any autograph order.</Text>
                    <hr style={hr} />
                    <strong style={boldSubTitle}>When do I need to send my items in by?</strong>
                    <br />
                    <br />
                    <Text style={paragraph}>All send-in items must be shipped <strong style={listTitle}>no later than 10 days before the signing day</strong> listed on the campaign.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>Ready to explore?</Text>
                    <LinkComponent href="www.playervault.io" text="Browse active athlete campaigns" />
                    <Text style={paragraph}>...and see what’s available right now.</Text>
                    <hr style={hr} />
                    <Text style={paragraph}>If you ever have questions, just reply to this email — we’re happy to help.</Text>
                    <Text style={paragraph}>Thanks for being part of PlayerVault,</Text>
                    <Text style={paragraphBold}>The PlayerVault Team</Text>
                </Section>
                <FooterComponent />
            </Container>
        </Body>
    </Html>
);

export default PostSignupFollowUp;
