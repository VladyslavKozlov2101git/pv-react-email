import { Img, Link, Section } from '@react-email/components';

const HeaderComponent = () => {
  return (
    <Section style={header}>
      <Link href="https://www.playervault.io">
        <Img
          src={`https://playervault.4-com.pro/Logo.png`}
          width="156"
          height="48"
          alt="PlayerVault Logo"
          style={logo}
        />
      </Link>
    </Section>
  );
};

export default HeaderComponent;

const logo = {
  margin: '0 auto',
};
const header = {
  height: '112px',
  backgroundColor: '#1E1E2E',
  backgroundImage: 'url(https://playervault.4-com.pro/Background.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
