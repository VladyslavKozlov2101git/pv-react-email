import { Text, Section } from '@react-email/components';

const CodeContainer = () => {
  return (
    <Section style={codeContainer}>
      <Text style={code}>398737</Text>
    </Section>
  );
};

export default CodeContainer;

const codeContainer = {
  borderRadius: '16px',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  backgroundColor: '#FAFAFB',
  padding: '15px 0',
  textAlign: 'center' as const,
  width: '100%',
  margin: '0 0 24px',
};

const code = {
  color: '#1E1E2E',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '40px',
  fontWeight: 700,
  lineHeight: '48px',
  letterSpacing: '6.4px',
  textTransform: 'uppercase' as const,
  margin: '0',
};
