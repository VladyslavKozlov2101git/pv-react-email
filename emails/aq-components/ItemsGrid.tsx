import { Column, Img, Link, Row, Section, Text } from '@react-email/components';

const itemBG = 'https://theantiquecollector.4-com.pro/itemBg.png';

const cardStyle = {
  backgroundImage: `url(${itemBG})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '161px',
  width: '100%',
  textAlign: 'center' as const,
  padding: '0 16px 16px',
  boxSizing: 'border-box' as const,
};

const imageStyle = {
  width: '88px',
  height: '88px',
  borderRadius: '50%',
  border: '1px solid #EBE9E0',
  objectFit: 'cover' as const,
  backgroundColor: '#f0f0f0',
  display: 'inline-block',
  marginBottom: '4px',
};

const titleContainerStyle = {
  marginBottom: '8px',
  textAlign: 'center' as const,
};

const titleStyle = {
  color: '#0D0106',
  fontFamily: '"Playfair Display", Georgia, serif',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: '-0.4px',
  margin: '0',
  display: 'inline-block',
  verticalAlign: 'middle',
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const subtitleStyle = {
  color: '#0D0106',
  fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '120%',

  letterSpacing: '0.6px',
  textTransform: 'uppercase' as const,
  margin: '0',
  display: 'block',
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const verifiedIconStyle = {
  width: '16px',
  height: '16px',
  marginLeft: '6px',
  display: 'inline-block',
  verticalAlign: 'middle',
};

const items = [
  {
    image: 'https://theantiquecollector.4-com.pro/Header.png',
    title: 'Antique Animal Jewelry',
    verified: true,
  },
  {
    image: 'https://theantiquecollector.4-com.pro/Header.png',
    title: 'Antik Devotion',
    verified: false,
  },
  {
    image: 'https://theantiquecollector.4-com.pro/Header.png',
    title: 'Gold Antiques',
    verified: true,
  },
  {
    image: 'https://theantiquecollector.4-com.pro/Header.png',
    title: 'Gold Antiques',
    verified: true,
  },
];

const VerifiedUrl = 'https://theantiquecollector.4-com.pro/verified.png';

const ItemsGrid = () => {
  return (
    <Section style={{ margin: '16px 0' }}>
      <Row style={{ marginBottom: '24px' }}>
        <Column style={{ paddingRight: '6px', width: '50%' }} align="center">
          <div style={cardStyle}>
            <Img
              src={items[0].image}
              alt={items[0].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={titleContainerStyle}>
              <Text style={titleStyle}>{items[0].title}</Text>
              {items[0].verified && (
                <Img
                  src={VerifiedUrl}
                  alt="Verified"
                  style={verifiedIconStyle}
                  width={16}
                  height={16}
                />
              )}
            </div>
            <Link href="https://theantiquecollector.4-com.pro/" style={subtitleStyle}>
              FOLLOW
            </Link>
          </div>
        </Column>

        <Column style={{ paddingLeft: '6px', width: '50%' }} align="center">
          <div style={cardStyle}>
            <Img
              src={items[1].image}
              alt={items[1].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={titleContainerStyle}>
              <Text style={titleStyle}>{items[1].title}</Text>
              {items[1].verified && (
                <Img
                  src={VerifiedUrl}
                  alt="Verified"
                  style={verifiedIconStyle}
                  width={16}
                  height={16}
                />
              )}
            </div>
            <Link href="https://theantiquecollector.4-com.pro/" style={subtitleStyle}>
              FOLLOW
            </Link>
          </div>
        </Column>
      </Row>

      {/* ROW 2 */}
      <Row>
        <Column style={{ paddingRight: '6px', width: '50%' }} align="center">
          <div style={cardStyle}>
            <Img
              src={items[2].image}
              alt={items[2].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={titleContainerStyle}>
              <Text style={titleStyle}>{items[2].title}</Text>
              {items[2].verified && (
                <Img
                  src={VerifiedUrl}
                  alt="Verified"
                  style={verifiedIconStyle}
                  width={16}
                  height={16}
                />
              )}
            </div>
            <Link href="https://theantiquecollector.4-com.pro/" style={subtitleStyle}>
              FOLLOW
            </Link>
          </div>
        </Column>

        <Column style={{ paddingLeft: '6px', width: '50%' }} align="center">
          <div style={cardStyle}>
            <Img
              src={items[3].image}
              alt={items[3].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={titleContainerStyle}>
              <Text style={titleStyle}>{items[3].title}</Text>
              {items[3].verified && (
                <Img
                  src={VerifiedUrl}
                  alt="Verified"
                  style={verifiedIconStyle}
                  width={16}
                  height={16}
                />
              )}
            </div>
            <Link href="https://theantiquecollector.4-com.pro/" style={subtitleStyle}>
              FOLLOW
            </Link>
          </div>
        </Column>
      </Row>
    </Section>
  );
};

export default ItemsGrid;
