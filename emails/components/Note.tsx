import { Text } from '@react-email/components';
const Note = () => {
  return (
    <div style={сontainer}>
      <Text style={title}>⚠️ Note:</Text>
      <Text style={paragraph}>
        Return shipping was included in your order, so no need to include a return label.
      </Text>
    </div>
  );
};

export default Note;

const сontainer = {
  borderRadius: '16px',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  backgroundColor: '#FAFAFB',
  padding: '23px 24px',
  textAlign: 'left' as const,
  width: '520px',
  margin: '12px 0 24px',
  boxSizing: 'border-box' as const,
};

const paragraph = {
  color: '#6F6F79',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
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
