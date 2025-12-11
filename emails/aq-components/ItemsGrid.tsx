import { Column, Img, Row, Section, Text } from '@react-email/components';

const cardWrapperStyle = {
  width: '100%',
  height: '161px', // Fixed height
  textAlign: 'center' as const,
  position: 'relative' as const,
};

const imageStyle = {
  width: '88px',
  height: '88px',
  borderRadius: '88px',
  border: '1px solid #EBE9E0', // Beige
  objectFit: 'cover' as const,
  backgroundColor: 'lightgray',
  margin: '0 auto -52px auto', // Negative margin to overlap: 88px total - 36px space above bg = 52px overlap
  display: 'block',
  position: 'relative' as const,
  zIndex: 10,
};

const contentBoxStyle = {
  backgroundColor: '#F9F8F3', // Light-Beige
  height: '125px',
  width: '100%',
  paddingTop: '60px', // 52px overlap + 8px gap
  paddingBottom: '16px',
  paddingLeft: '8px',
  paddingRight: '8px',
  boxSizing: 'border-box' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'flex-start', // Content flows from top (pushed down by padding)
};

const titleContainerStyle = {
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyle = {
  color: '#0D0106', // Black
  fontFamily: '"Playfair Display", serif',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: '-0.4px',
  margin: '0',
};

const subtitleStyle = {
  color: '#0D0106', // Black
  fontFamily: '"Open Sans", sans-serif',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '120%', // 14.4px
  letterSpacing: '0.6px',
  textTransform: 'uppercase' as const,
  margin: '0',
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

const ItemsGrid = () => {
  return (
    <Section style={{ margin: '16px 0' }}>
      <Row style={{ marginBottom: '24px' }}>
        <Column style={{ paddingRight: '4px', width: '50%' }}>
          <div style={cardWrapperStyle}>
            <Img
              src={items[0].image}
              alt={items[0].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={contentBoxStyle}>
              <div style={titleContainerStyle}>
                <Text style={titleStyle}>{items[0].title}</Text>
                {items[0].verified && (
                  <Img
                    src="https://theantiquecollector.4-com.pro/verified.png"
                    alt="Verified"
                    style={verifiedIconStyle}
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <Text style={subtitleStyle}>FOLLOW</Text>
            </div>
          </div>
        </Column>
        <Column style={{ paddingLeft: '4px', width: '50%' }}>
          <div style={cardWrapperStyle}>
            <Img
              src={items[1].image}
              alt={items[1].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={contentBoxStyle}>
              <div style={titleContainerStyle}>
                <Text style={titleStyle}>{items[1].title}</Text>
                {items[1].verified && (
                  <Img
                    src="https://theantiquecollector.4-com.pro/verified.png"
                    alt="Verified"
                    style={verifiedIconStyle}
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <Text style={subtitleStyle}>FOLLOW</Text>
            </div>
          </div>
        </Column>
      </Row>
      <Row>
        <Column style={{ paddingRight: '4px', width: '50%' }}>
          <div style={cardWrapperStyle}>
            <Img
              src={items[2].image}
              alt={items[2].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={contentBoxStyle}>
              <div style={titleContainerStyle}>
                <Text style={titleStyle}>{items[2].title}</Text>
                {items[2].verified && (
                  <Img
                    src="https://theantiquecollector.4-com.pro/verified.png"
                    alt="Verified"
                    style={verifiedIconStyle}
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <Text style={subtitleStyle}>FOLLOW</Text>
            </div>
          </div>
        </Column>
        <Column style={{ paddingLeft: '4px', width: '50%' }}>
          <div style={cardWrapperStyle}>
            <Img
              src={items[3].image}
              alt={items[3].title}
              style={imageStyle}
              width={88}
              height={88}
            />
            <div style={contentBoxStyle}>
              <div style={titleContainerStyle}>
                <Text style={titleStyle}>{items[3].title}</Text>
                {items[3].verified && (
                  <Img
                    src="https://theantiquecollector.4-com.pro/verified.png"
                    alt="Verified"
                    style={verifiedIconStyle}
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <Text style={subtitleStyle}>FOLLOW</Text>
            </div>
          </div>
        </Column>
      </Row>
    </Section>
  );
};

export default ItemsGrid;
