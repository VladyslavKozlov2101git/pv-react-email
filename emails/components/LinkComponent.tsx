import { Link, Section, Text } from '@react-email/components';

type Props = {
  text: string;
  href: string;
  type?: 'secondary' | 'primary';
};

const LinkComponent = ({ text, href, type = 'primary' }: Props) => {
  return (
    <Section style={section}>
      <Link href={href} style={link}>
        <Text style={type === 'primary' ? linkTextPrimary : linkTextSecondary}>{text}</Text>
      </Link>
    </Section>
  );
};

export default LinkComponent;

const section = {
  textAlign: 'center' as const,
  margin: '0',
  width: '520px',
};

const link = {
  textDecoration: 'none',
  display: 'inline-block',
  padding: '12px 0px',
  borderRadius: '12px',
  width: '100%',
  margin: '0 0 8px 0',
  heigh: '48px' as const,
  boxSizing: 'content-box' as const,
};

const linkTextPrimary = {
  ...link,
  backgroundColor: '#FF6F5C',
  color: '#FFF',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal' as const,
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  textTransform: 'uppercase' as const,
  border: 'none',
};

const linkTextSecondary = {
  ...link,
  backgroundColor: '#F6F6F8',
  border: '1px solid var(--Border-Light, rgba(0, 0, 0, 0.08))',
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal' as const,
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  textTransform: 'uppercase' as const,
};
