export const main = {
  backgroundColor: '#f0f2f5',
  fontFamily: 'Outfit, sans-serif',
};

export const container = {
  margin: '40px auto',
  width: '600px',
  maxWidth: '100% !important',
  backgroundColor: '#ffffff',
};

export const content = {
  backgroundColor: '#FFF',
  padding: '40px',
};

export const greeting = {
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.2px',
  textTransform: 'uppercase' as const,
  margin: '0 0 16px',
  verticalAlign: 'top' as const,
};

export const paragraph = {
  color: '#6F6F79',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 16px',
};

export const paragraphBold = {
  ...paragraph,
  color: '#111',
  fontWeight: 500,
  margin: '0',
};

export const boldSubTitle = {
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 16px',
  textTransform: 'uppercase' as const,
};

export const boldSubTitle2 = {
  display: 'block',
  color: '#111',
  fontFamily: 'Blinker, sans-serif',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 8px',
  textTransform: 'uppercase' as const,
};

export const list = {
  padding: '0 0px 0px 16px',
};

export const list_wo_top = {
  ...list,
  marginTop: '0px',
};

export const list_ordered = {
  ...list,
  marginTop: '0px',
};

export const list_wo_disc = {
  ...list_wo_top,
  listStyleType: 'none' as const,
};

export const listItem = {
  color: '#6F6F79',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0',
};
export const listItemOrder = {
  color: '#6F6F79',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0',
};

export const hr = {
  borderColor: 'black',
  opacity: 0.08,
  margin: '0 0 16px 0',
};
export const hr2 = {
  borderColor: 'black',
  opacity: 0.08,
  margin: '0 0 26px 0',
};

export const listTitle = {
  color: '#111',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 -16px 0',
};

export const listTitle2 = {
  display: 'block',
  color: '#111',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  letterSpacing: '-0.16px',
  margin: '0 0 4px 0',
};

export const listItemWo = {
  ...listItem,
  listStyleType: 'none' as const,
};
