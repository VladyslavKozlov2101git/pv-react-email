import { Text } from '@react-email/components';
const QuickReminders = () => {
    return (
        <div style={сontainer}>
            <Text style={title}>Quick reminders before you finish:</Text>
            <ul style={list}>
                <li style={listItem}>You’re buying a <strong style={listTitle}>direct, custom experience from the athlete</strong></li>
                <li style={listItem}>For autographs, you can choose <strong style={listTitle}>standard or personalized inscriptions</strong></li>
                <li style={listItem}>You can either <strong style={listTitle}>send in your own item</strong> (we provide a prepaid label) or <strong style={listTitle}>buy an item from us</strong> and let us handle everything</li>
                <li style={listItem}>Signing and fulfillment are handled entirely by PlayerVault</li>
            </ul>
        </div>
    );
};

export default QuickReminders;

const сontainer = {
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: '#FAFAFB',
    padding: '16px 16px 0 20px',
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
