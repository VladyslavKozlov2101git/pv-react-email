import { Column, Row, Section, Text } from '@react-email/components';

type Props = {
  code?: string;
};

const VerCode = ({ code = '5352' }: Props) => {
  const chars = code.split('');

  return (
    <Section style={{ margin: '24px 0' }}>
      <Row>
        <Column align="center">
          <table style={{ margin: '0 auto', borderSpacing: '16px', borderCollapse: 'separate' }}>
            <tbody>
              <tr>
                {chars.map((char, index) => (
                  <td
                    key={index}
                    style={{
                      border: '1px solid #EBE9E0',
                      borderRadius: '0px',
                      backgroundColor: '#FFF',
                      width: '92px',
                      height: '124px',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      padding: '0',
                    }}>
                    <Text
                      style={{
                        color: '#0D0106',
                        fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '100%',
                        letterSpacing: '-0.64px',
                        margin: 0,
                      }}>
                      {char}
                    </Text>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Column>
      </Row>
    </Section>
  );
};

export default VerCode;
