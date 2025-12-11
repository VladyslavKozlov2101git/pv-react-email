import { Link, Section } from '@react-email/components';

const HeaderComponent = () => {
  return (
    <Section style={header}>
      <Link href="https://theantiquecollector.4-com.pro"></Link>
    </Section>
  );
};

export default HeaderComponent;

const logo = {
  margin: '0 auto',
};
const header = {
  height: '190px',
  widthL: '100%',
  backgroundImage: 'url(https://theantiquecollector.4-com.pro/Header.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
