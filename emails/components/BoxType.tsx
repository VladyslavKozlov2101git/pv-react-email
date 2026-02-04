import { Text } from '@react-email/components';
import LinkComponent from './LinkComponent';
const BoxType = () => {
    return (
        <div style={сontainer}>
            <Text style={title}>⚠️ REQUIRED: Use This Box Type (Very Important)</Text>
            <Text style={paragraph}>
                To avoid delays, damage, or additional shipping costs, <strong style={paragraphBold}>you must use the correct box type</strong> based on the item you are sending and the carrier you selected at checkout.
            </Text>
            <Text style={paragraph}><strong style={paragraphBold}>📦 Your Required Box</strong></Text>
            <ul style={list}>
                <li style={listItem}>Item being sent: <strong style={listTitle}>[Item_Type]</strong></li>
                <li style={listItem}>Carrier: <strong style={listTitle}>[Carrier_Name]</strong></li>
                <li style={listItem}>Required box type: <strong style={listTitle}>[Required_Box_Type]</strong></li>
            </ul>
            <Text style={paragraph}><strong style={paragraphBold}>Please ask the carrier specifically for this box type</strong> when dropping off your item.</Text>
            <Text style={paragraph}>Using a different box type may result in:</Text>
            <ul style={list}>
                <li style={listItem}>Carrier upcharges</li>
                <li style={listItem}>Delays in processing</li>
                <li style={listItem}>Risk of damage to your item</li>
            </ul>
            <Text style={paragraph}>For more details and examples, visit our <strong style={paragraphBold}>How To Ship</strong> guide here:</Text>
            <LinkComponent href="www.playervault.io" text="How to send in your item" small type='secondary' />
        </div>
    );
};

export default BoxType;

const paragraph = {
    color: '#6F6F79',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    margin: '0 0 16px',
};

const paragraphBold = {
    ...paragraph,
    color: '#111',
    fontWeight: 600,
    margin: '0',
};

const сontainer = {
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: '#FAFAFB',
    padding: '16px 16px 0 25px',
    textAlign: 'left' as const,
    width: '520px',
    margin: '0 0 24px',
    boxSizing: 'border-box' as const,
};
const list = {
    padding: '0 0px 0px 16px',
};

const listItem = {
    color: '#6F6F79',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    margin: '0',
};

const listTitle = {
    color: '#111',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    margin: '0 0 -16px 0',
};

const title = {
    color: '#111',
    fontFamily: 'Blinker, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    margin: '0 0 10px',
    textTransform: 'uppercase' as const,
};
