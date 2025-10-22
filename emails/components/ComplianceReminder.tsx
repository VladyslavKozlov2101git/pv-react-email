import { paragraph, paragraphBold } from './styles';
import { Text, Link } from '@react-email/components';

const ComplianceReminder = () => {
  return (
    <div style={container}>
      <strong style={boldSubTitle}>⚠️ For NCAA Athletes Only – NIL Compliance Reminder</strong>
      <br /> <br />
      <Text style={paragraph}>
        If you are a collegiate athlete, please ensure you remain compliant with your school’s Name,
        Image, and Likeness (NIL) reporting requirements. You must submit this campaign’s agreement
        details to NIL GO or your institution’s designated NIL disclosure platform.
      </Text>{' '}
      <Text style={paragraph}>Below are the details you’ll need to include for PlayerVault:</Text>
      <Text style={paragraph}>
        Company Name: <strong style={paragraphBold}>PlayerVault (GR Collective LLC)</strong> <br />
        Contact Name: <strong style={paragraphBold}>Gavi Reichman</strong> <br />
        Email:{' '}
        <Link style={paragraphBold} href="mailto:support@playervault.io">
          support@playervault.io
        </Link>{' '}
        <br />
        Phone:{' '}
        <Link style={paragraphBold} href="tel:+38099">
          [TBD]
        </Link>
      </Text>{' '}
      <Text style={paragraph}>
        Submitting this information ensures full NCAA and institutional compliance.
      </Text>
    </div>
  );
};

export default ComplianceReminder;

const container = {
  borderRadius: '24px',
  border: '1px solid var(--Border-Light, rgba(0, 0, 0, 0.08))',
  background: 'var(--Background-Light-Grey, #FAFAFB)',
  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
  width: '100%',
  padding: '24px 24px  8px 24px ',
  margin: '0 0 24px 0',
  boxSizing: 'border-box' as const,
  maxWidth: '520px' as const,
};
export const boldSubTitle = {
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-1px',
  margin: '0 0 16px',
  textTransform: 'uppercase' as const,
};
