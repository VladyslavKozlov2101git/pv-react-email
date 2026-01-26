import { Section, Text, Hr } from '@react-email/components';
import * as React from 'react';

const OrderSummary = () => {
  return (
    <Section style={styles.container}>
      <table style={styles.table} cellPadding="0" cellSpacing="0" width="100%">
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'top' }}>
              <Text style={styles.mainTitle}>Standard Autograph:</Text>
              <Text style={styles.subTitle}>Keon Coleman</Text>
              <Text style={styles.subTitle}>Item: Football Jersey, XS</Text>
            </td>
            <td align="right" style={styles.mainPrice}>
              $349.00
            </td>
          </tr>
        </tbody>
      </table>

      <Hr style={styles.hr} />

      <table style={styles.table} cellPadding="0" cellSpacing="0" width="100%">
        <tbody>
          <tr>
            <td style={styles.itemLabel}>Photo with Item</td>
            <td align="right" style={styles.itemPrice}>
              + $50.00
            </td>
          </tr>
          <tr>
            <td style={styles.itemLabel}>JSA Authentication</td>
            <td align="right" style={styles.itemPrice}>
              + $20.00
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

const styles = {
  container: {
    borderRadius: '24px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    background: '#FAFAFB',
    fontFamily: "'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    width: '100%',
    margin: '0 0 24px 0',
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  mainTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#111111',
    margin: 0,
    lineHeight: '1.4',
  },
  subTitle: {
    fontSize: '16px',
    color: '#8E8E93',
    margin: 0,
    lineHeight: '1.5',
    paddingBottom: '4px',
  },
  mainPrice: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#111111',
    margin: 0,
    lineHeight: '1.4',
    verticalAlign: 'top',
  },
  hr: {
    borderColor: '#EAEAEA',
    margin: '8px 0 0 0',
  },
  itemLabel: {
    fontSize: '16px',
    color: '#111111',
    margin: 0,
    padding: '8px 0',
    lineHeight: '1.5',
  },
  itemPrice: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#111111',
    margin: 0,
    padding: '8px 0',
    lineHeight: '1.5',
  },
};

export default OrderSummary;
