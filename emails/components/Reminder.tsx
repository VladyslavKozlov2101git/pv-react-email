import { greeting, paragraph, paragraphBold } from './styles';
import { Body, Container, Html, Preview, Section, Text, Link } from '@react-email/components';
const Reminder = () => {
  return (
    <div style={сontainer}>
      <Text style={title}>📢 Reminder</Text>
      <Text style={paragraph}>
        Your Signing Day is scheduled for <strong style={paragraphBold}>Aug 1, 2025.</strong>
      </Text>
    </div>
  );
};

export default Reminder;

const сontainer = {
  borderRadius: '16px',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  backgroundColor: '#FAFAFB',
  padding: '16px 16px 0 16px',
  textAlign: 'left' as const,
  width: '520px',
  margin: '0 0 24px',
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
