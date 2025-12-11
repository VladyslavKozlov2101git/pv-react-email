import { Link, Section, Text, Img } from '@react-email/components';

type Props = {
  text: string;
  href: string;
  type?: 'primary' | 'secondary' | 'approved' | 'declined';
};

const LinkComponent = ({ text, href, type = 'primary' }: Props) => {
  const isApprovedIcon = 'https://theantiquecollector.4-com.pro/approved.png';
  const isDeclinedIcon = 'https://theantiquecollector.4-com.pro/declined.png';

  return (
    <Section style={section}>
      <Link
        href={href}
        style={
          type === 'primary'
            ? linkPrimary
            : type === 'secondary'
              ? linkSecondary
              : type === 'approved'
                ? linkApproved
                : linkDeclined
        }>
        {type === 'approved' && (
          <Img style={{ marginRight: '2px' }} src={isApprovedIcon} alt="Approved" />
        )}
        {type === 'declined' && (
          <Img style={{ marginRight: '2px' }} src={isDeclinedIcon} alt="Declined" />
        )}
        <Text
          style={
            type === 'primary'
              ? textPrimary
              : type === 'secondary'
                ? textSecondary
                : type === 'approved'
                  ? textApproved
                  : textDeclined
          }>
          {text}
        </Text>
      </Link>
    </Section>
  );
};

export default LinkComponent;

const section = {
  textAlign: 'center' as const,
  width: '520px',
  margin: '16px 0px',
};

const linkPrimary = {
  textDecoration: 'none',
  display: 'flex',
  height: '48px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  background: '#0D0106',
};

const textPrimary = {
  color: '#FFF',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '14px',
  letterSpacing: '0.6px',
  textTransform: 'uppercase' as const,
};

const linkSecondary = {
  textDecoration: 'none',
  display: 'flex',
  height: '48px',
  padding: '11px 0',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#F6F6F8',
  border: '1px solid rgba(0, 0, 0, 0.08)',
};

const textSecondary = {
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '14px',
  letterSpacing: '-0.16px',
  textTransform: 'uppercase' as const,
};

const linkApproved = {
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: 'rgba(24,143,0,0.16)',
};

const textApproved = {
  color: '#188F00',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.7px',
  textTransform: 'uppercase' as const,
};

const linkDeclined = {
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: 'rgba(255,44,32,0.16)',
};

const textDeclined = {
  color: '#FF2C20',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.7px',
  textTransform: 'uppercase' as const,
};
