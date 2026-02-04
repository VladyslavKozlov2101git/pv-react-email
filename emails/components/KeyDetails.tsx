import { Text } from '@react-email/components';
const KeyDetails = () => {
    return (
        <div style={сontainer}>
            <Text style={title}>Key details:</Text>
            <ul style={list}>
                <li style={listItem}>Ship-by date: <strong style={listTitle}>[Campaign_Ship-By_Date]</strong></li>
                <li style={listItem}>Order: <strong style={listTitle}>[Order_Number]</strong></li>
                <li style={listItem}>Your prepaid label is ready to use and was emailed to you after you checked out</li>
            </ul>
        </div>
    );
};

export default KeyDetails;

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
  padding: '0 16px 0px 16px',
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
