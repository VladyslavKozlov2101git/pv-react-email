import { Text } from '@react-email/components';
const FewHelpfulNotes = () => {
    return (
        <div style={сontainer}>
            <Text style={title}>A few helpful notes:</Text>
            <ul style={list}>
                <li style={listItem}><strong style={listTitle}>Signing Day</strong> is set by the athlete and all orders are fulfilled together</li>
                <li style={listItem}>Send-in items must be shipped <strong style={listTitle}>10 days before signing day</strong></li>
                <li style={listItem}>All items are <strong style={listTitle}>insured up to $100</strong> by default</li>
                <li style={listItem}>Optional <strong style={listTitle}>James Spence Authentication (JSA)</strong> is available for autograph orders</li>
                <li style={listItem}>If you purchased an item from us, there’s nothing you need to do after checkout</li>
            </ul>
        </div>
    );
};

export default FewHelpfulNotes;

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
    margin: '0 0 4px',
    textTransform: 'uppercase' as const,
};
