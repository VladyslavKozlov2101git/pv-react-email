import { Section, Text, Hr } from '@react-email/components';
import * as React from 'react';

const TotalComponent = () => {
  return (
    <Section style={styles.container}>
      <div style={styles.sub_container}>
        <div style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>$419.00</Text>
        </div>

        <div style={styles.row}>
          <Text style={styles.label}>Additional Insurance Coverage</Text>
          <Text style={styles.value}>$12.00</Text>
        </div>
      </div>

      <Hr style={styles.hr} />

      <div style={styles.row__footer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$431.00</Text>
      </div>
    </Section>
  );
};

const styles = {
  sub_container: {
    display: 'table',
    width: '100%',
  },
  container: {
    borderRadius: '24px',
    border: '1px solid var(--Border-Light, rgba(0, 0, 0, 0.08))',
    background: 'var(--Background-Light-Grey, #FAFAFB)',
    fontFamily: "'Outfit', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
    width: '100%',
    margin: '0 0 24px 0',
    padding: '23px 24px',
    boxSizing: 'border-box' as const,
  },
  row: {
    display: 'table-row',
  },
  row__footer: {
    display: 'table',
    width: '100%',
    padding: '23px 0 0',
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
    padding: '4px 0px',
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
    padding: '4px 0px',
    textAlign: 'right' as const,
  },
  hr: {
    borderColor: '#e6e6e6',
    margin: '16px -24px 0',
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
    padding: '0px',
    textAlign: 'left' as const,
    verticalAlign: 'middle' as const,
  },
  totalValue: {
    display: 'table-cell',
    fontSize: '28px',
    fontWeight: '700' as const,
    lineHeight: '32px',
    color: '#111111',
    margin: 0,
    padding: '0px',
    textAlign: 'right' as const,
    verticalAlign: 'middle' as const,
  },
};

export default TotalComponent;
