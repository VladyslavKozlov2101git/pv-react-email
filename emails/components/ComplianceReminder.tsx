import { boldSubTitle, paragraph, paragraphBold } from './styles';
import { Text, Link } from '@react-email/components';

const ComplianceReminder = () => {
  return (
    <div style={container}>
      <strong style={boldSubTitle}>⚠️ For NCAA Athletes Only – NIL Compliance Reminder</strong>
      <br />
      <Text style={paragraph}>
        Fans can now discover, purchase, and participate in your exclusive offerings — whether it’s
        signed memorabilia, personalized videos, or one-of-a-kind experiences.
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
  width: '520px',
  padding: '24px 24px  8px 24px ',
  margin: '0 0 24px 0',
};
