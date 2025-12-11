import { Text, Link, Section, Img, Row, Column, Hr } from '@react-email/components';
import { text } from '../aq-components/styles';

const FooterComponent = () => {
  return (
    <Section style={footer}>
      <Hr style={hr} />

      <Row style={row}>
        <Column style={{ width: '65%', verticalAlign: 'middle' }}>
          <Row>
            <Column style={{ width: '60px', verticalAlign: 'middle' }}>
              <Link href="https://theantiquecollector.4-com.pro/">
                <Img
                  width="48"
                  height="48"
                  src="https://theantiquecollector.4-com.pro/ac-logo.png"
                  alt="logo"
                  style={logo}
                />
              </Link>
            </Column>

            <Column style={{ verticalAlign: 'middle' }}>
              <Text style={text}>
                Join the hunt for the most beautiful,
                <br />
                most unusual antiques and jewelry
              </Text>
            </Column>
          </Row>
        </Column>

        <Column align="right" style={{ width: '35%', verticalAlign: 'middle' }}>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            style={{ display: 'inline-table' }}>
            <tr>
              <td style={iconBox}>
                <Link href="#" style={linkReset}>
                  <Img
                    src="https://theantiquecollector.4-com.pro/Facebook.png"
                    width="10"
                    height="18"
                    alt="Facebook"
                    style={iconImg}
                  />
                </Link>
              </td>

              <td style={{ width: '16px' }}></td>

              <td style={iconBox}>
                <Link href="#" style={linkReset}>
                  <Img
                    src="https://theantiquecollector.4-com.pro/Instagram.png"
                    width="18"
                    height="18"
                    alt="Instagram"
                    style={iconImg}
                  />
                </Link>
              </td>
            </tr>
          </table>
        </Column>
      </Row>
    </Section>
  );
};

export default FooterComponent;

const footer = {
  background: '#FFFFFF',
  padding: '0 40px 32px 40px',
  width: '100%',
};

const hr = {
  borderColor: '#E5E5E5',
  margin: '0 0 32px 0',
  borderWidth: '1px',
};

const row = {
  width: '100%',
};

const logo = {
  display: 'block',
};

const iconBox = {
  width: '36px',
  height: '36px',
  backgroundColor: '#F9F8F3',
  borderRadius: '4px',
  textAlign: 'center' as const,
  verticalAlign: 'middle',
};

const iconImg = {
  display: 'inline-block',
  verticalAlign: 'middle',
};

const linkReset = {
  textDecoration: 'none',
  display: 'block',
};
