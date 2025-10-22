import { Section, Text, Hr } from '@react-email/components';
import * as React from 'react';

const TotalComponent = () => {
  return (
    <Section style={styles.container}>
      <div style={styles.sub_container}>
        <div style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>$434.00</Text>
        </div>

        <div style={styles.row}>
          <Text style={styles.label}>Shipping</Text>
          <Text style={styles.value}>$9.99</Text>
        </div>

        <div style={styles.row}>
          <Text style={styles.label}>Processing Fee</Text>
          <Text style={styles.value}>$12.45</Text>
        </div>
      </div>

      <Hr style={styles.hr} />

      <div style={styles.row__footer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$456.44</Text>
      </div>
    </Section>
  );
};

const styles = {
  sub_container: {
    margin: '16px 0',
    display: 'table',
    width: '100%',
  },
  container: {
    borderRadius: '24px',
    border: '1px solid var(--Border-Light, rgba(0, 0, 0, 0.08))',
    background: 'var(--Background-Light-Grey, #FAFAFB)',
    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
    width: '100%',
    margin: '0 0 24px 0',
  },
  row: {
    display: 'table-row',
  },
  row__footer: {
    display: 'table',
    width: '100%',
    padding: '4px 20px 24px',
    boxSizing: 'border-box' as const,
  },
  label: {
    display: 'table-cell',
    fontSize: '16px',
    color: '#111',
    margin: 0,
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    padding: '4px 20px',
    textAlign: 'left' as const,
  },
  value: {
    display: 'table-cell',
    fontSize: '16px',
    color: '#111111',
    margin: 0,
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    padding: '4px 20px',
    textAlign: 'right' as const,
  },
  hr: {
    borderColor: '#e6e6e6',
    margin: '16px 0',
  },
  totalLabel: {
    display: 'table-cell',
    fontSize: '16px',
    color: '#111111',
    margin: 0,
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.16px',
    padding: '4px 0px',
    textAlign: 'left' as const,
  },
  totalValue: {
    display: 'table-cell',
    fontSize: '28px',
    fontWeight: '700' as const,
    color: '#111111',
    margin: 0,
    padding: '4px 0px',
    textAlign: 'right' as const,
  },
};

export default TotalComponent;
