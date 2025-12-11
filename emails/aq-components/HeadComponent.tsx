import { Font, Head } from '@react-email/components';

const HeadComponent = () => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        rel="stylesheet"
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
