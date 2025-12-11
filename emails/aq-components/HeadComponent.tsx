import { Font, Head } from '@react-email/components';

const HeadComponent = () => {
  return (
    <Head>
      {/* Playfair Display Regular 400 */}
      <Font
        fontFamily="Playfair Display"
        fallbackFontFamily="Georgia"
        webFont={{
          url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYh1I.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />

      {/* Playfair Display SemiBold 600 */}
      <Font
        fontFamily="Playfair Display"
        fallbackFontFamily="Georgia"
        webFont={{
          url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFkD-vYSZviVYUb_rj3ij__anPXAPbPjWz3.woff2',
          format: 'woff2',
        }}
        fontWeight={600}
        fontStyle="normal"
      />

      {/* Playfair Display Bold 700 */}
      <Font
        fontFamily="Playfair Display"
        fallbackFontFamily="Georgia"
        webFont={{
          url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFkD-vYSZviVYUb_rj3ij__anPXAKLPjWz3.woff2',
          format: 'woff2',
        }}
        fontWeight={700}
        fontStyle="normal"
      />

      {/* Open Sans Regular */}
      <Font
        fontFamily="Open Sans"
        fallbackFontFamily="Arial"
        webFont={{
          url: 'https://fonts.gstatic.com/s/opensans/v40/mem8YaGs126MiZpBA-U1UpcaXcl0Aw.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />

      {/* Open Sans SemiBold */}
      <Font
        fontFamily="Open Sans"
        fallbackFontFamily="Arial"
        webFont={{
          url: 'https://fonts.gstatic.com/s/opensans/v40/mem5YaGs126MiZpBA-UNirkOUuhp.woff2',
          format: 'woff2',
        }}
        fontWeight={600}
        fontStyle="normal"
      />
    </Head>
  );
};

export default HeadComponent;
