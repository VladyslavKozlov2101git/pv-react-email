import { Text, Link, Section } from '@react-email/components';

const FooterComponent = () => {
  return (
    <Section style={footer}>
      <Text style={footerText}>
        <Link href="https://www.playervault.io" style={footerLink}>
          www.playervault.io
        </Link>
      </Text>
      <Text style={footerText}>
        <Link href="mailto:support@playervault.io" style={footerLink}>
          support@playervault.io
        </Link>
      </Text>
    </Section>
  );
};

export default FooterComponent;

const footer = {
  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
  backgroundColor: '#FAFAFB',
  padding: '32px 40px',
};

const footerText = {
  margin: '0 0 4px 0',
};

const footerLink = {
  color: '#111',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  textDecoration: 'none',
};
