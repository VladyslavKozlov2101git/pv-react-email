import { Text } from '@react-email/components';
import LinkComponent from './LinkComponent';
const ShipItem = () => {
  return (
    <div style={сontainer}>
      <Text style={title}>
        📦 Ship your item to the following address and make it out to us exactly as shown below:
      </Text>
      <Text style={paragraph}>
        <strong style={{ ...paragraphBold, fontWeight: 500 }}>PlayerVault Storage Facility</strong>{' '}
        <br /> 456 Busy Street <br />
        Buffalo, NY 14201, United States
      </Text>
      <Text style={paragraph}>
        <strong style={paragraphBold}>ℹ️ You can use any carrier you want.</strong>
      </Text>
    </div>
  );
};

export default ShipItem;

const paragraph = {
  color: '#6F6F79',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 12px',
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
  padding: '23px 21px',
  textAlign: 'left' as const,
  width: '520px',
  margin: '0 0 16px',
  boxSizing: 'border-box' as const,
};

const title = {
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 16px',
  textTransform: 'uppercase' as const,
};
