import { Link, Section, Text, Img } from '@react-email/components';

type Props = {
  text: string;
  href: string;
  type?: 'primary' | 'secondary' | 'approved' | 'declined';
};

const LinkComponent = ({ text, href, type = 'primary' }: Props) => {
  const isApprovedIcon = 'https://theantiquecollector.4-com.pro/approved.png';
  const isDeclinedIcon = 'https://theantiquecollector.4-com.pro/declined.png';

  // Вибір стилів
  let linkStyle = linkPrimary;
  let textStyle = textPrimary;

  if (type === 'secondary') {
    linkStyle = linkSecondary;
    textStyle = textSecondary;
  } else if (type === 'approved') {
    linkStyle = linkApproved;
    textStyle = textApproved;
  } else if (type === 'declined') {
    linkStyle = linkDeclined;
    textStyle = textDeclined;
  }

  return (
    <Section style={section}>
      <Link href={href} style={linkStyle}>
        {/* Для іконок та тексту використовуємо inline-block та vertical-align */}
        {type === 'approved' && (
          <Img
            style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}
            src={isApprovedIcon}
            alt="Approved"
            width="16"
            height="16"
          />
        )}
        {type === 'declined' && (
          <Img
            style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}
            src={isDeclinedIcon}
            alt="Declined"
            width="16"
            height="16"
          />
        )}
        {/* Text у React Email створює <p>, тому важливо скинути margin і зробити його inline */}
        <Text style={{ ...textStyle, display: 'inline-block', margin: 0, verticalAlign: 'middle' }}>
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
  margin: '16px auto', // auto додано для центрування самої секції
};

// --- PRIMARY STYLES ---
const linkPrimary = {
  textDecoration: 'none',
  display: 'block', // Замість flex
  width: '100%',
  backgroundColor: '#0D0106',
  // Центрування тексту:
  textAlign: 'center' as const,
  // Вертикальне центрування (висота рядка = висоті кнопки):
  height: '48px',
  lineHeight: '48px',
};

const textPrimary = {
  color: '#FFF',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '0.6px',
  textTransform: 'uppercase' as const,
  lineHeight: '48px', // Дублюємо для гарантії в Outlook
};

// --- SECONDARY STYLES ---
const linkSecondary = {
  textDecoration: 'none',
  display: 'block',
  width: '100%',
  backgroundColor: '#F6F6F8',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  // Центрування:
  textAlign: 'center' as const,
  height: '48px',
  lineHeight: '48px',
};

const textSecondary = {
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '-0.16px',
  textTransform: 'uppercase' as const,
  lineHeight: '48px',
};

// --- APPROVED STYLES ---
const linkApproved = {
  textDecoration: 'none',
  display: 'block',
  width: '100%',
  backgroundColor: 'rgba(24,143,0,0.16)', // background замість background-color для сумісності
  textAlign: 'center' as const,
  height: '48px',
  lineHeight: '48px',
};

const textApproved = {
  color: '#188F00',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.7px',
  textTransform: 'uppercase' as const,
  lineHeight: '48px',
};

// --- DECLINED STYLES ---
const linkDeclined = {
  textDecoration: 'none',
  display: 'block',
  width: '100%',
  backgroundColor: 'rgba(255,44,32,0.16)',
  textAlign: 'center' as const,
  height: '48px',
  lineHeight: '48px',
};

const textDeclined = {
  color: '#FF2C20',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.7px',
  textTransform: 'uppercase' as const,
  lineHeight: '48px',
};
