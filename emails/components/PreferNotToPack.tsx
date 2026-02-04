import { Text } from '@react-email/components';
const PreferNotToPack = () => {
    return (
        <div style={сontainer}>
            <Text style={title}>💡Prefer not to pack it yourself?</Text>
            <Text style={paragraph}>You can bring your item to any <strong style={paragraphBold}>[Carrier_Name]</strong> location and ask them to package it using the required box type listed above.</Text>
        </div>
    );
};

export default PreferNotToPack;

const сontainer = {
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: '#FAFAFB',
    padding: '16px 16px 0 16px',
    textAlign: 'left' as const,
    width: '520px',
    margin: '0 0 24px',
    boxSizing: 'border-box' as const,
};

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

const title = {
    color: '#111',
    fontFamily: 'Blinker, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    margin: '0 0 4px',
    textTransform: 'uppercase' as const,
};
